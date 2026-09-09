"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";
import type { DemoBeatId } from "@/components/landing/demo-data";

export const DEMO_MS = 22000;

export const BEAT_START: Record<DemoBeatId, number> = {
  notes: 0,
  memory: 0.26,
  retrieve: 0.5,
  answer: 0.74,
};

export const BEAT_VIEW: Record<DemoBeatId, number> = {
  notes: 0.22,
  memory: 0.42,
  retrieve: 0.66,
  answer: 1,
};

const BEAT_ORDER: DemoBeatId[] = ["notes", "memory", "retrieve", "answer"];

export function beatFromProgress(progress: number): DemoBeatId {
  if (progress < BEAT_START.memory) return "notes";
  if (progress < BEAT_START.retrieve) return "memory";
  if (progress < BEAT_START.answer) return "retrieve";
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
  const startedRef = useRef(false);
  const touchedRef = useRef(false);

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

  const scrub = useCallback((next: number) => {
    const value = Math.min(1, Math.max(0, next));
    progressRef.current = value;
    lastEmitRef.current = value;
    setProgress(value);
    touchedRef.current = true;
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

  const startOnce = useCallback(() => {
    if (reduced || startedRef.current || touchedRef.current) return;
    startedRef.current = true;
    playingRef.current = true;
    setPlaying(true);
  }, [reduced]);

  const replay = useCallback(() => {
    touchedRef.current = true;
    startedRef.current = true;
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
    pause,
    jumpBeat,
    replay,
    startOnce,
    beat: beatFromProgress(display),
    local: beatLocal(display),
  };
}
