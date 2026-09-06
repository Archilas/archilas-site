"use client";

import { useEffect, useState, type FocusEvent } from "react";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

export function usePausedLoop(length: number, durationMs: number) {
  const [index, setIndex] = useState(0);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [held, setHeld] = useState(false);
  const [hidden, setHidden] = useState(false);
  const reduced = usePrefersReducedMotion();
  const paused = hoverPaused || hidden || reduced || held;

  useEffect(() => {
    const onVis = () => setHidden(document.hidden);
    onVis();
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  useEffect(() => {
    if (reduced || paused) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % length);
    }, durationMs);
    return () => window.clearInterval(timer);
  }, [durationMs, index, length, paused, reduced]);

  const bind = {
    onMouseEnter: () => setHoverPaused(true),
    onMouseLeave: () => setHoverPaused(false),
    onFocusCapture: () => setHoverPaused(true),
    onBlurCapture: (event: FocusEvent<HTMLElement>) => {
      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
        setHoverPaused(false);
      }
    },
  };

  return {
    index,
    setIndex,
    paused: hoverPaused || hidden || held,
    held,
    toggleHold: () => setHeld((current) => !current),
    reduced,
    bind,
  };
}
