"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";
import {
  HERO_ANSWER,
  HERO_ANSWER_AT,
  HERO_ANSWER_MS,
  HERO_DIFF,
  HERO_FADE,
  HERO_LOOP_MS,
  HERO_POP_MS,
  HERO_QUERY,
  HERO_RESULT,
  HERO_RESULT_AT,
  HERO_RESULT_NOTE,
  HERO_SEND,
  HERO_SHEET_AT,
  HERO_SHEET_DOWN,
  HERO_SHEET_KICKER,
  HERO_STATUS_DONE,
  HERO_STEP_MS,
  HERO_STEPS,
  HERO_TOOL,
  HERO_TOOL_AT,
  HERO_TOOL_DONE,
  HERO_TOOL_SUB,
  typedCount,
} from "@/components/landing/hero-storyboard";
import { ClaudeMark } from "@/components/landing/BrandMarks";

type ToolStatus = (typeof HERO_STEPS)[number]["label"] | typeof HERO_STATUS_DONE;

type Snap = {
  typed: number;
  sent: boolean;
  pop: boolean;
  tool: boolean;
  sheet: boolean;
  up: boolean;
  result: boolean;
  persist: boolean;
  done: boolean;
  step: number;
  status: ToolStatus;
  answer: number;
  fade: boolean;
  phase: string;
};

function snapAt(ms: number): Snap {
  const typed = Math.min(HERO_QUERY.length, typedCount(ms));
  const sent = ms >= HERO_SEND;
  const pop = sent && ms < HERO_SEND + HERO_POP_MS;
  const tool = ms >= HERO_TOOL_AT;
  const fade = ms >= HERO_FADE;
  const up = tool && ms >= HERO_SHEET_AT && ms < HERO_SHEET_DOWN && !fade;
  const persist = tool && ms >= HERO_SHEET_DOWN && !fade;
  const sheet = tool && ms >= HERO_TOOL_AT && ms < HERO_SHEET_DOWN + 840 && !fade;
  const result = tool && ms >= HERO_RESULT_AT && !fade;
  const done = tool && ms >= HERO_TOOL_DONE;
  const step = !tool
    ? 0
    : result || done
      ? HERO_STEPS.length
      : Math.min(HERO_STEPS.length, 1 + Math.floor(Math.max(0, ms - HERO_SHEET_AT) / HERO_STEP_MS));
  const status: ToolStatus = done ? HERO_STATUS_DONE : HERO_STEPS[Math.max(0, step - 1)].label;
  const answer =
    ms < HERO_ANSWER_AT
      ? 0
      : Math.min(HERO_ANSWER.length, Math.floor((ms - HERO_ANSWER_AT) / HERO_ANSWER_MS));
  let phase = "type";
  if (fade) phase = "fade";
  else if (answer > 0) phase = "answer";
  else if (persist) phase = "chip";
  else if (up) phase = "sheet";
  else if (sent) phase = "send";
  return { typed, sent, pop, tool, sheet, up, result, persist, done, step, status, answer, fade, phase };
}

const REDUCED: Snap = {
  typed: HERO_QUERY.length,
  sent: true,
  pop: false,
  tool: true,
  sheet: false,
  up: false,
  result: true,
  persist: true,
  done: true,
  step: HERO_STEPS.length,
  status: HERO_STATUS_DONE,
  answer: HERO_ANSWER.length,
  fade: false,
  phase: "answer",
};

function sameSnap(a: Snap, b: Snap) {
  return (
    a.typed === b.typed &&
    a.sent === b.sent &&
    a.pop === b.pop &&
    a.tool === b.tool &&
    a.sheet === b.sheet &&
    a.up === b.up &&
    a.result === b.result &&
    a.persist === b.persist &&
    a.done === b.done &&
    a.step === b.step &&
    a.status === b.status &&
    a.answer === b.answer &&
    a.fade === b.fade
  );
}

function PayloadCard() {
  return (
    <div className="hero-result" data-testid="hero-result">
      <p className="hero-result-kicker">Returned to model</p>
      <p className="hero-result-body">{HERO_RESULT}</p>
      <p className="hero-result-note">{HERO_RESULT_NOTE}</p>
    </div>
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
            <div
              className={cn("hero-bubble is-user", snap.pop && "is-pop")}
              data-testid="hero-user"
            >
              {HERO_QUERY}
            </div>
          ) : null}

          {snap.tool && !snap.up ? (
            <div
              className={cn("hero-tool", snap.done && "is-done")}
              data-testid="hero-tool"
            >
              <div className="hero-tool-head">
                <span className="hero-tool-mark" aria-hidden="true" />
                <span className="hero-tool-titles">
                  <span className="hero-tool-name">{HERO_TOOL}</span>
                  <span className="hero-tool-sub">{HERO_TOOL_SUB}</span>
                </span>
                <span className="hero-tool-status">{snap.status}</span>
              </div>
            </div>
          ) : null}

          {snap.persist ? <PayloadCard /> : null}

          {snap.answer > 0 ? (
            <div className="hero-bubble is-assistant" data-testid="hero-answer">
              {HERO_ANSWER.slice(0, snap.answer)}
              {snap.answer < HERO_ANSWER.length ? <span className="hero-caret" /> : null}
            </div>
          ) : null}
        </div>
        <div
          className={cn("hero-sheet-scrim", snap.up && "is-on")}
          aria-hidden="true"
        />
        {snap.sheet ? (
          <div
            className={cn("hero-sheet", snap.up && "is-up")}
            data-testid="hero-sheet"
          >
            <div className="hero-sheet-head">
              <span className="hero-tool-mark" aria-hidden="true" />
              <span className="hero-tool-titles">
                <span className="hero-tool-name">{HERO_TOOL}</span>
                <span className="hero-tool-sub">{HERO_TOOL_SUB}</span>
              </span>
              <span className="hero-tool-status">{snap.status}</span>
            </div>
            {!snap.result ? (
              <p className="hero-sheet-kicker">{HERO_SHEET_KICKER}</p>
            ) : null}
            {snap.result && snap.up ? (
              <PayloadCard />
            ) : !snap.result ? (
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
            ) : null}
          </div>
        ) : null}
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
