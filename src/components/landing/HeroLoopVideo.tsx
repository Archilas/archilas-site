"use client";

import { useEffect, useRef, useState } from "react";
import { HeroQueryFallback } from "@/components/landing/HeroQueryFallback";

export function HeroLoopVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || failed) return;
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
  }, [src, failed]);

  if (failed) {
    return <HeroQueryFallback />;
  }

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
      aria-label="Product demo: pricing memory walkthrough"
      onError={() => setFailed(true)}
    />
  );
}
