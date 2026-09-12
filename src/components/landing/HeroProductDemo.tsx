"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";
import {
  HERO_ANSWER,
  HERO_ANSWER_AT,
  HERO_ANSWER_MS,
  HERO_FADE,
  HERO_DIFF,
  HERO_LOOP_MS,
  HERO_PICK_AT,
  HERO_QUERY,
  HERO_RESULT,
  HERO_RESULT_AT,
  HERO_RESULT_NOTE,
  HERO_RETRIEVE_AT,
  HERO_SEND,
  HERO_SHARDS,
  HERO_STATUS_DONE,
  HERO_STEPS,
  HERO_TOOL,
  HERO_TOOL_AT,
  HERO_TOOL_DONE,
  HERO_TOOL_OPEN,
  HERO_TOOL_SUB,
  HERO_TYPE_MS,
  HERO_TYPE_START,
} from "@/components/landing/hero-storyboard";
import { ClaudeMark } from "@/components/landing/BrandMarks";

type ToolStatus = (typeof HERO_STEPS)[number]["label"] | typeof HERO_STATUS_DONE;

type Snap = {
  typed: number;
  sent: boolean;
  tool: boolean;
  open: boolean;
  picks: number;
  result: boolean;
  done: boolean;
  step: number;
  status: ToolStatus;
  answer: number;
  fade: boolean;
  phase: string;
};

function snapAt(ms: number): Snap {
  const typed = Math.min(
    HERO_QUERY.length,
    ms < HERO_TYPE_START ? 0 : Math.floor((ms - HERO_TYPE_START) / HERO_TYPE_MS),
  );
  const sent = ms >= HERO_SEND;
  const tool = ms >= HERO_TOOL_AT;
  const fade = ms >= HERO_FADE;
  const result = tool && ms >= HERO_RESULT_AT && !fade;
  const open = tool && ms >= HERO_TOOL_OPEN && !result && !fade;
  const picks =
    ms < HERO_PICK_AT ? 0 : Math.min(3, 1 + Math.floor((ms - HERO_PICK_AT) / 520));
  const done = tool && ms >= HERO_TOOL_DONE;
  const step = !tool
    ? 0
    : result || done
      ? 4
      : picks > 0
        ? 3
        : ms >= HERO_RETRIEVE_AT
          ? 2
          : 1;
  const status: ToolStatus = done ? HERO_STATUS_DONE : HERO_STEPS[Math.max(0, step - 1)].label;
  const answer =
    ms < HERO_ANSWER_AT
      ? 0
      : Math.min(HERO_ANSWER.length, Math.floor((ms - HERO_ANSWER_AT) / HERO_ANSWER_MS));
  let phase = "type";
  if (fade) phase = "fade";
  else if (answer > 0) phase = "answer";
  else if (done && !open) phase = "chip";
  else if (open) phase = "tool";
  else if (sent) phase = "send";
  return { typed, sent, tool, open, picks, result, done, step, status, answer, fade, phase };
}

const REDUCED: Snap = {
  typed: HERO_QUERY.length,
  sent: true,
  tool: true,
  open: false,
  picks: 3,
  result: true,
  done: true,
  step: 4,
  status: HERO_STATUS_DONE,
  answer: HERO_ANSWER.length,
  fade: false,
  phase: "answer",
};

function sameSnap(a: Snap, b: Snap) {
  return (
    a.typed === b.typed &&
    a.sent === b.sent &&
    a.tool === b.tool &&
    a.open === b.open &&
    a.picks === b.picks &&
    a.result === b.result &&
    a.done === b.done &&
    a.step === b.step &&
    a.status === b.status &&
    a.answer === b.answer &&
    a.fade === b.fade
  );
}

export function HeroProductDemo() {
  const reduced = usePrefersReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const [snap, setSnap] = useState<Snap>(reduced ? REDUCED : snapAt(0));
  const visibleRef = useRef(true);

  useEffect(() => {
    if (reduced) {
      setSnap(REDUCED);
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
      const dt = Math.min(40, now - last);
      last = now;
      if (!visibleRef.current) return;
      elapsed = (elapsed + dt) % HERO_LOOP_MS;
      const next = snapAt(elapsed);
      setSnap((prev) => (sameSnap(prev, next) ? prev : next));
    };
    frame = window.requestAnimationFrame(tick);
    return () => {
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, [reduced]);

  const typing = !snap.sent && snap.typed > 0 && snap.typed < HERO_QUERY.length;
  const composerText = snap.sent ? "" : HERO_QUERY.slice(0, snap.typed);

  return (
    <div
      ref={rootRef}
      className="hero-app"
      data-testid="hero-product-demo"
      data-phase={snap.phase}
    >
      <aside className="hero-app-side" aria-hidden="true">
        <p className="hero-app-brand">
          <ClaudeMark className="hero-app-logo" />
          Claude
        </p>
        <p className="hero-app-search">Search</p>
        <nav className="hero-app-nav">
          <span className="hero-app-nav-item is-on">Chat</span>
        </nav>
        <p className="hero-app-kicker">History</p>
        <nav className="hero-app-nav">
          <span className="hero-app-nav-item">Pricing call</span>
          <span className="hero-app-nav-item">Legal review</span>
        </nav>
      </aside>
      <div className="hero-app-main">
        <div className="hero-app-bar">
          <div className="hero-app-tabs">
            <span className="hero-app-tab is-on">Chat</span>
            <span className="hero-app-diff">{HERO_DIFF}</span>
          </div>
          <span className="hero-app-spine">Compact → Reason → Deliver</span>
        </div>
        <div className={cn("hero-thread", snap.fade && "is-dissolve")} data-testid="hero-thread">
          {snap.sent ? (
            <div className="hero-bubble is-user" data-testid="hero-user">
              {HERO_QUERY}
            </div>
          ) : null}

          {snap.tool ? (
            <div
              className={cn("hero-tool", snap.open && "is-open", snap.done && "is-done")}
              data-testid="hero-tool"
            >
              <div className="hero-tool-head">
                <span className="hero-tool-mark" aria-hidden="true" />
                <span className="hero-tool-titles">
                  <span className="hero-tool-name">{HERO_TOOL}</span>
                  <span className="hero-tool-sub">{HERO_TOOL_SUB}</span>
                </span>
                <span className="hero-tool-status">{snap.status}</span>
                <span className="hero-tool-chev" aria-hidden="true" />
              </div>
              <div className="hero-tool-body">
                <div className="hero-tool-inner">
                  <ol className="hero-steps" data-testid="hero-steps">
                    {HERO_STEPS.map((row, index) => {
                      const n = index + 1;
                      return (
                        <li
                          key={row.id}
                          className={cn(
                            "hero-step",
                            snap.step === n && "is-on",
                            snap.step > n && "is-done",
                          )}
                        >
                          <span className="hero-step-mark" aria-hidden="true" />
                          {row.label}
                        </li>
                      );
                    })}
                  </ol>
                  <ul className="hero-memos">
                    {HERO_SHARDS.map((shard, index) => {
                      const on = shard.pick && index < snap.picks;
                      return (
                        <li
                          key={shard.id}
                          className={cn("hero-memo", on && "is-on", !shard.pick && "is-dim")}
                        >
                          <span className="hero-memo-date">{shard.date}</span>
                          <span className="hero-memo-kind">{shard.kind}</span>
                          <span className="hero-memo-text">{shard.text}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          ) : null}

          {snap.result ? (
            <div className="hero-result" data-testid="hero-result">
              <p className="hero-result-kicker">Returned to model</p>
              <pre className="hero-result-pre">
                {HERO_RESULT.map((row) => `${row.kind}: ${row.text}`).join("\n")}
              </pre>
              <p className="hero-result-note">{HERO_RESULT_NOTE}</p>
            </div>
          ) : null}

          {snap.answer > 0 ? (
            <div className="hero-bubble is-assistant" data-testid="hero-answer">
              {HERO_ANSWER.slice(0, snap.answer)}
              {snap.answer < HERO_ANSWER.length ? <span className="hero-caret" /> : null}
            </div>
          ) : null}
        </div>
        <div
          className={cn("hero-composer", !snap.sent && snap.typed > 0 && "is-live")}
          data-testid="hero-composer"
        >
          <p className="hero-composer-text" dir="ltr">
            {composerText ? (
              <>
                {composerText}
                {typing ? <span className="hero-caret" /> : null}
              </>
            ) : (
              <span className="hero-composer-ph">Message Claude…</span>
            )}
          </p>
          <span className={cn("hero-composer-go", snap.sent && "is-sent")} aria-hidden="true">
            →
          </span>
        </div>
      </div>
    </div>
  );
}
