"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Delay before the enter transition (ms). */
  delay?: number;
  /** Starting translateY in px. */
  y?: number;
  /** Transition duration (ms). */
  duration?: number;
};

/** Scroll reveal — tryclean-style fade-up when the block hits ~85% viewport. */
export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 24,
  duration = 800,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOn(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -12% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const style = {
    "--reveal-delay": `${delay}ms`,
    "--reveal-y": `${y}px`,
    "--reveal-duration": `${duration}ms`,
  } as CSSProperties;

  return (
    <div ref={ref} className={cn("reveal", on && "is-in", className)} style={style}>
      {children}
    </div>
  );
}
