"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";
import {
  HERO_ANSWER,
  HERO_COMPACT,
  HERO_LOOP_MS,
  HERO_QUERY,
  HERO_SHARDS,
  HERO_TYPE_MS,
  HERO_TYPE_START,
} from "@/components/landing/hero-storyboard";

type Phase = "ask" | "pulse" | "field" | "compact" | "reason" | "answer" | "dissolve";

function phaseAt(ms: number): Phase {
  if (ms < 4600) return "ask";
  if (ms < 6400) return "pulse";
  if (ms < 11200) return "field";
  if (ms < 14800) return "compact";
  if (ms < 17600) return "reason";
  if (ms < 20800) return "answer";
  return "dissolve";
}

function typedCount(ms: number) {
  if (ms < HERO_TYPE_START) return 0;
  return Math.min(HERO_QUERY.length, Math.floor((ms - HERO_TYPE_START) / HERO_TYPE_MS));
}

function pickedCount(ms: number) {
  if (ms < 8200) return 0;
  return Math.min(4, 1 + Math.floor((ms - 8200) / 420));
}

export function HeroProductDemo() {
  const reduced = usePrefersReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const [ms, setMs] = useState(reduced ? 19000 : 0);
  const visibleRef = useRef(true);

  useEffect(() => {
    if (reduced) {
      setMs(19000);
      return;
    }
    const node = rootRef.current;
    const observer = node
      ? new IntersectionObserver(
          ([entry]) => {
            visibleRef.current = entry.isIntersecting && entry.intersectionRatio >= 0.28;
          },
          { threshold: [0, 0.28, 0.6] },
        )
      : null;
    if (node && observer) observer.observe(node);

    let frame = 0;
    let last = performance.now();
    let elapsed = 0;
    const tick = (now: number) => {
      frame = window.requestAnimationFrame(tick);
      const dt = Math.min(48, now - last);
      last = now;
      if (!visibleRef.current) return;
      elapsed = (elapsed + dt) % HERO_LOOP_MS;
      const nextTyped = typedCount(elapsed);
      const nextPhase = phaseAt(elapsed);
      const nextPicked = pickedCount(elapsed);
      setMs((prev) => {
        if (
          typedCount(prev) === nextTyped &&
          phaseAt(prev) === nextPhase &&
          pickedCount(prev) === nextPicked
        ) {
          return prev;
        }
        return elapsed;
      });
    };
    frame = window.requestAnimationFrame(tick);
    return () => {
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, [reduced]);

  const phase = reduced ? "answer" : phaseAt(ms);
  const typed = reduced ? HERO_QUERY : HERO_QUERY.slice(0, typedCount(ms));
  const picks = reduced ? 4 : pickedCount(ms);
  const nav = phase === "ask" || phase === "pulse" ? "Chat" : "Memory";

  const shards = useMemo(
    () =>
      HERO_SHARDS.map((shard, index) => ({
        ...shard,
        on: shard.pick && index < picks,
        dim: !shard.pick,
      })),
    [picks],
  );

  return (
    <div
      ref={rootRef}
      className={cn("hero-app", phase === "dissolve" && "is-dissolve")}
      data-testid="hero-product-demo"
      data-phase={phase}
    >
      <aside className="hero-app-side" aria-hidden="true">
        <p className="hero-app-brand">Archilas</p>
        <nav className="hero-app-nav">
          {["Chat", "Memory", "Notes"].map((item) => (
            <span key={item} className={cn("hero-app-nav-item", nav === item && "is-on")}>
              {item}
            </span>
          ))}
        </nav>
      </aside>
      <div className="hero-app-main">
        <div className="hero-app-bar">
          <span>{nav === "Chat" ? "Chat" : "Living memory"}</span>
          <span className="hero-app-spine">Compact → Reason → Deliver</span>
        </div>
        <div className="hero-app-stage">
          {(phase === "ask" || phase === "pulse") && (
            <div className="hero-ask" data-testid="hero-ask">
              <p className="hero-ask-kicker">Ask</p>
              <p className="hero-ask-hello">Good morning</p>
              <div className={cn("hero-composer", phase === "pulse" && "is-pulse")}>
                <p className="hero-composer-text">
                  {typed}
                  {phase === "ask" && typed.length < HERO_QUERY.length ? <span className="hero-caret" /> : null}
                </p>
                <span className="hero-composer-go" aria-hidden="true">
                  →
                </span>
              </div>
            </div>
          )}

          {phase === "field" && (
            <div className="hero-field" data-testid="hero-field">
              <p className="hero-ask-kicker">Memory field</p>
              <div className="hero-shards">
                {shards.map((shard) => (
                  <article key={shard.id} className={cn("hero-shard", shard.on && "is-on", shard.dim && "is-dim")}>
                    <p className="hero-shard-meta">
                      {shard.date}
                      <span> · {shard.kind}</span>
                    </p>
                    <p>{shard.text}</p>
                  </article>
                ))}
              </div>
            </div>
          )}

          {(phase === "compact" || phase === "reason" || phase === "answer") && (
            <div className="hero-compact" data-testid="hero-compact">
              <div>
                <p className="hero-ask-kicker">{phase === "answer" ? "Deliver" : phase === "reason" ? "Reason" : "Compact"}</p>
                <div className="hero-rows">
                  {HERO_COMPACT.map((row) => (
                    <div
                      key={row.id}
                      className={cn(
                        "hero-row",
                        phase !== "compact" && row.support && "is-support",
                        phase === "reason" && !row.support && "is-held",
                      )}
                    >
                      <span className="hero-row-kind">{row.kind}</span>
                      <p>{row.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              {phase === "answer" ? (
                <aside className="hero-answer" data-testid="hero-answer">
                  <p className="hero-ask-kicker">Answer</p>
                  <p className="hero-answer-text">{HERO_ANSWER}</p>
                </aside>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
