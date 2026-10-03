"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

/** Reversible scroll enter — animates out again when leaving the viewport. */
export function ScrollReveal({
  children,
  className = "",
  y = 22,
  delay = 0,
  amount = 0.28,
  /** Keep content visible on first paint (for above-the-fold). */
  startVisible = false,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  amount?: number;
  startVisible?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount, once: false, margin: "0px 0px -6% 0px" });
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  // Avoid a blank first paint: stay visible until the observer is live, then follow inView.
  const show = !mounted || startVisible || inView;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.55, delay: show && startVisible ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
