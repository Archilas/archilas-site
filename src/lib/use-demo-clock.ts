"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";
import type { DemoBeatId } from "@/components/landing/demo-data";

/** 9s × 4 stages. */
export const DEMO_MS = 36000;

export const BEAT_START: Record<DemoBeatId, number> = {
  notes: 0,
  compact: 0.25,
  reason: 0.5,
  answer: 0.75,
};

export const BEAT_VIEW: Record<DemoBeatId, number> = {
  notes: 0.24,
  compact: 0.49,
  reason: 0.74,
  answer: 1,
};

const BEAT_ORDER: DemoBeatId[] = ["notes", "compact", "reason", "answer"];

export function beatFromProgress(progress: number): DemoBeatId {
  if (progress < BEAT_START.compact) return "notes";
  if (progress < BEAT_START.reason) return "compact";
  if (progress < BEAT_START.answer) return "reason";
  return "answer";
}

export function beatLocal(progress: number): number {
  for (let i = 0; i < BEAT_ORDER.length; i++) {
    const start = BEAT_START[BEAT_ORDER[i]];
    const end = i === BEAT_ORDER.length - 1 ? 1 : BEAT_START[BEAT_ORDER[i + 1]];
    if (progress < end || i === BEAT_ORDER.length - 1) {
      return (progress - start) / (end - start || 1);
    }
  }
  return 1;
}

export function useDemoClock() {
  const reduced = usePrefersReducedMotion();
  const [progress, setProgress] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [touched, setTouched] = useState(false);
  const playingRef = useRef(false);
  const progressRef = useRef(0);
  const lastEmitRef = useRef(0);
  const heldRef = useRef(false);
  const visibleRef = useRef(false);

  const display = reduced && !touched ? 1 : progress;

  useEffect(() => {
    if (reduced) {
      playingRef.current = false;
      return;
    }

    let frame = 0;
    let last = performance.now();
    const tick = (now: number) => {
      frame = window.requestAnimationFrame(tick);
      if (!playingRef.current) {
        last = now;
        return;
      }
      const next = Math.min(1, progressRef.current + (now - last) / DEMO_MS);
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
      window.cancelAnimationFrame(frame);
    };
  }, [reduced]);

  const pause = useCallback(() => {
    playingRef.current = false;
    setPlaying(false);
  }, []);

  const playIfAllowed = useCallback(() => {
    if (reduced || heldRef.current || !visibleRef.current) return;
    if (progressRef.current >= 1) return;
    playingRef.current = true;
    setPlaying(true);
  }, [reduced]);

  const scrub = useCallback((next: number) => {
    const value = Math.min(1, Math.max(0, next));
    progressRef.current = value;
    lastEmitRef.current = value;
    setProgress(value);
    heldRef.current = true;
    setTouched(true);
    playingRef.current = false;
    setPlaying(false);
  }, []);

  const jumpBeat = useCallback(
    (id: DemoBeatId) => {
      scrub(BEAT_VIEW[id]);
    },
    [scrub],
  );

  const setVisible = useCallback(
    (visible: boolean) => {
      visibleRef.current = visible;
      if (reduced) return;
      if (visible) playIfAllowed();
      else pause();
    },
    [pause, playIfAllowed, reduced],
  );

  const replay = useCallback(() => {
    heldRef.current = false;
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
    if (visibleRef.current) {
      playingRef.current = true;
      setPlaying(true);
    }
  }, [reduced]);

  return {
    progress: display,
    playing: reduced ? false : playing,
    reduced,
    pause,
    jumpBeat,
    replay,
    setVisible,
    beat: beatFromProgress(display),
    local: beatLocal(display),
  };
}
