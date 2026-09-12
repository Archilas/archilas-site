"use client";

import { useEffect } from "react";

/** Lerped plate / sky drift. Keeps gliding after wheel input. No-ops when reduced-motion is on. */
export function PlateDrift() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const nodes = [...document.querySelectorAll<HTMLElement>(".plate-drift")];
    if (nodes.length === 0) return;

    const current = nodes.map(() => 0);
    let frame = 0;
    let last = performance.now();

    const tick = (now: number) => {
      frame = window.requestAnimationFrame(tick);
      const dt = Math.min(40, now - last);
      last = now;
      const k = 1 - Math.exp(-dt / 180);
      const vh = window.innerHeight;
      nodes.forEach((node, index) => {
        const rect = node.getBoundingClientRect();
        const mid = rect.top + rect.height / 2;
        const target = ((vh / 2 - mid) / vh) * 32;
        current[index] += (target - current[index]) * k;
        node.style.setProperty("--drift", `${current[index].toFixed(2)}px`);
      });
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return null;
}
