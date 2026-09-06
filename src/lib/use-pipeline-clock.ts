"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";
import type { HowStepId } from "@/components/landing/demo-data";

export const PIPELINE_MS = 9000;

export const STAGE_START: Record<HowStepId, number> = {
  transcript: 0,
  compact: 0.16,
  reason: 0.38,
  deliver: 0.62,
  record: 0.82,
};

export const STAGE_VIEW: Record<HowStepId, number> = {
  transcript: 0.06,
  compact: 0.36,
  reason: 0.48,
  deliver: 0.74,
  record: 1,
};

const ORDER: HowStepId[] = ["transcript", "compact", "reason", "deliver", "record"];

export function stageFromProgress(progress: number): HowStepId {
  if (progress < STAGE_START.compact) return "transcript";
  if (progress < STAGE_START.reason) return "compact";
  if (progress < STAGE_START.deliver) return "reason";
  if (progress < STAGE_START.record) return "deliver";
  return "record";
}

export function stageLocal(progress: number): number {
  const stage = stageFromProgress(progress);
  const start = STAGE_START[stage];
  const index = ORDER.indexOf(stage);
  const end = index === ORDER.length - 1 ? 1 : STAGE_START[ORDER[index + 1]];
  return (progress - start) / (end - start);
}

export function usePipelineClock() {
  const reduced = usePrefersReducedMotion();
  const [progress, setProgress] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [touched, setTouched] = useState(false);
  const playingRef = useRef(false);
  const progressRef = useRef(0);
  const lastEmitRef = useRef(0);

  const display = reduced && !touched ? 1 : progress;

  useEffect(() => {
    if (reduced) {
      playingRef.current = false;
      return;
    }

    playingRef.current = true;
    const start = window.requestAnimationFrame(() => {
      setPlaying(true);
    });

    let frame = 0;
    let last = performance.now();
    const tick = (now: number) => {
      frame = window.requestAnimationFrame(tick);
      if (!playingRef.current) {
        last = now;
        return;
      }
      const next = Math.min(1, progressRef.current + (now - last) / PIPELINE_MS);
      last = now;
      progressRef.current = next;
      if (next - lastEmitRef.current >= 0.01 || next >= 1 || next === 0) {
        lastEmitRef.current = next;
        setProgress(next);
      }
      if (next >= 1) {
        playingRef.current = false;
        setPlaying(false);
      }
    };
    frame = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(start);
      window.cancelAnimationFrame(frame);
    };
  }, [reduced]);

  const pause = useCallback(() => {
    playingRef.current = false;
    setPlaying(false);
  }, []);

  const play = useCallback(() => {
    if (reduced) return;
    if (progressRef.current >= 1) {
      progressRef.current = 0;
      lastEmitRef.current = 0;
      setProgress(0);
    }
    playingRef.current = true;
    setPlaying(true);
  }, [reduced]);

  const scrub = useCallback((next: number) => {
    const value = Math.min(1, Math.max(0, next));
    progressRef.current = value;
    lastEmitRef.current = value;
    setProgress(value);
    setTouched(true);
    playingRef.current = false;
    setPlaying(false);
  }, []);

  const jumpStage = useCallback(
    (id: HowStepId) => {
      scrub(STAGE_VIEW[id]);
    },
    [scrub],
  );

  const replay = useCallback(() => {
    setTouched(true);
    if (reduced) {
      progressRef.current = 1;
      lastEmitRef.current = 1;
      setProgress(1);
      return;
    }
    progressRef.current = 0;
    lastEmitRef.current = 0;
    setProgress(0);
    playingRef.current = true;
    setPlaying(true);
  }, [reduced]);

  return {
    progress: display,
    playing: reduced ? false : playing,
    reduced,
    play,
    pause,
    scrub,
    jumpStage,
    replay,
    stage: stageFromProgress(display),
    local: stageLocal(display),
  };
}
