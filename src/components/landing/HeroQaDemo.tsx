"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

const QUESTION =
  "Why did we move auth off the session service, and who signed off?";
const ANSWER =
  "The team moved it in March after repeated timeouts under load. Priya approved the change in the infra review.";
const SOURCE = 'Source: PR #412, design note "Auth migration".';

const TYPE_MS = 28;
const HOLD_Q = 700;
const HOLD_A = 4200;
const LOOP_GAP = 900;

/** Hero demo: question types in, then a cited answer appears. */
export function HeroQaDemo() {
  const reduced = usePrefersReducedMotion();
  const [typed, setTyped] = useState(reduced ? QUESTION.length : 0);
  const [showAnswer, setShowAnswer] = useState(reduced);

  useEffect(() => {
    if (reduced) {
      setTyped(QUESTION.length);
      setShowAnswer(true);
      return;
    }
    let frame = 0;
    let start = performance.now();
    const tick = (now: number) => {
      frame = window.requestAnimationFrame(tick);
      const elapsed = now - start;
      const typeEnd = QUESTION.length * TYPE_MS;
      if (elapsed < typeEnd) {
        setTyped(Math.min(QUESTION.length, Math.floor(elapsed / TYPE_MS)));
        setShowAnswer(false);
        return;
      }
      setTyped(QUESTION.length);
      if (elapsed < typeEnd + HOLD_Q) {
        setShowAnswer(false);
        return;
      }
      setShowAnswer(true);
      if (elapsed > typeEnd + HOLD_Q + HOLD_A + LOOP_GAP) {
        start = now;
        setTyped(0);
        setShowAnswer(false);
      }
    };
    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [reduced]);

  return (
    <div className="hero-qa" data-testid="hero-qa-demo">
      <div className="hero-qa-chrome">
        <span>Ask Archilas</span>
        <span className="hero-qa-chip">Example</span>
      </div>
      <div className="hero-qa-body">
        <p className="hero-qa-q">
          <span className="hero-qa-label">Q</span>
          <span>
            {QUESTION.slice(0, typed)}
            {typed < QUESTION.length ? <span className="hero-caret" /> : null}
          </span>
        </p>
        <div className={cn("hero-qa-a", showAnswer && "is-on")}>
          <p>
            <span className="hero-qa-label">A</span>
            {ANSWER}
          </p>
          <p className="hero-qa-source">{SOURCE}</p>
        </div>
      </div>
    </div>
  );
}
