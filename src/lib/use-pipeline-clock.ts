"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";
import type { HowStepId } from "@/components/landing/demo-data";

export const PIPELINE_MS = 14000;

export const STAGE_START: Record<HowStepId, number> = {
  compact: 0,
  reason: 0.34,
  deliver: 0.67,
};

export function stageFromProgress(progress: number): HowStepId {
  if (progress < STAGE_START.reason) return "compact";
  if (progress < STAGE_START.deliver) return "reason";
  return "deliver";
}

export function stageLocal(progress: number): number {
  if (progress < STAGE_START.reason) return progress / STAGE_START.reason;
  if (progress < STAGE_START.deliver) {
    return (progress - STAGE_START.reason) / (STAGE_START.deliver - STAGE_START.reason);
  }
  return (progress - STAGE_START.deliver) / (1 - STAGE_START.deliver);
}

export function usePipelineClock() {
  const reduced = usePrefersReducedMotion();
  const [progress, setProgress] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [touched, setTouched] = useState(false);
  const playingRef = useRef(false);
  const progressRef = useRef(0);

  const display = reduced && !touched ? 1 : progress;

  useEffect(() => {
    if (reduced) return;
    let frame = 0;
    const kick = () => {
      playingRef.current = true;
      setPlaying(true);
    };
    frame = window.requestAnimationFrame(kick);
    return () => window.cancelAnimationFrame(frame);
  }, [reduced]);

  useEffect(() => {
    if (reduced || !playing) return;
    let frame = 0;
    let last = performance.now();
    const tick = (now: number) => {
      if (!playingRef.current) return;
      const next = Math.min(1, progressRef.current + (now - last) / PIPELINE_MS);
      last = now;
      progressRef.current = next;
      setProgress(next);
      if (next >= 1) {
        playingRef.current = false;
        setPlaying(false);
        return;
      }
      frame = window.requestAnimationFrame(tick);
    };
    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [playing, reduced]);

  const pause = useCallback(() => {
    playingRef.current = false;
    setPlaying(false);
  }, []);

  const play = useCallback(() => {
    if (reduced) return;
    if (progressRef.current >= 1) {
      progressRef.current = 0;
      setProgress(0);
    }
    playingRef.current = true;
    setPlaying(true);
  }, [reduced]);

  const scrub = useCallback((next: number) => {
    const value = Math.min(1, Math.max(0, next));
    progressRef.current = value;
    setProgress(value);
    setTouched(true);
    playingRef.current = false;
    setPlaying(false);
  }, []);

  const jumpStage = useCallback(
    (id: HowStepId) => {
      const view =
        id === "compact"
          ? STAGE_START.reason - 0.01
          : id === "reason"
            ? STAGE_START.deliver - 0.01
            : 1;
      scrub(view);
    },
    [scrub],
  );

  const replay = useCallback(() => {
    setTouched(true);
    if (reduced) {
      progressRef.current = 1;
      setProgress(1);
      return;
    }
    progressRef.current = 0;
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
