"use client";

import { useEffect, useState, type FocusEvent } from "react";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

export function useDrivenDemo(length: number, autoMs = 3200) {
  const [index, setIndex] = useState(0);
  const [driven, setDriven] = useState(false);
  const [hoverPaused, setHoverPaused] = useState(false);
  const reduced = usePrefersReducedMotion();
  const playing = !reduced && !driven && !hoverPaused;

  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % length);
    }, autoMs);
    return () => window.clearInterval(timer);
  }, [autoMs, index, length, playing]);

  function select(next: number) {
    setDriven(true);
    setIndex(next);
  }

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

  return { index, select, driven, playing, reduced, bind };
}
