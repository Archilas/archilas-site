"use client";

import { useEffect } from "react";

/** Light plate drift. No-ops when reduced-motion is on. */
export function PlateDrift() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const nodes = [...document.querySelectorAll<HTMLElement>(".plate-drift")];
    if (nodes.length === 0) return;

    let frame = 0;
    const measure = () => {
      const vh = window.innerHeight;
      for (const node of nodes) {
        const rect = node.getBoundingClientRect();
        const mid = rect.top + rect.height / 2;
        const delta = (vh / 2 - mid) / vh;
        node.style.setProperty("--drift", `${(delta * 16).toFixed(2)}px`);
      }
    };
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        measure();
      });
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
