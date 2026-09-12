"use client";

import { useEffect, useRef } from "react";

export function HeroLoopVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      if (media.matches) {
        node.pause();
        node.removeAttribute("autoplay");
      } else {
        node.muted = true;
        void node.play().catch(() => undefined);
      }
    };
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, [src]);

  return (
    <video
      ref={ref}
      className="hero-loop-video"
      data-testid="hero-loop-video"
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-label="Product demo"
    />
  );
}
