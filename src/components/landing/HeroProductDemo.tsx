"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";
import {
  HERO_ANSWER,
  HERO_ANSWER_AT,
  HERO_ANSWER_MS,
  HERO_COMPACT,
  HERO_COMPACT_AT,
  HERO_FADE,
  HERO_LOOP_MS,
  HERO_PICK_AT,
  HERO_QUERY,
  HERO_SEND,
  HERO_SHARDS,
  HERO_STATUS_DONE,
  HERO_STATUS_SEARCH,
  HERO_STATUS_SELECT,
  HERO_TOOL,
  HERO_TOOL_AT,
  HERO_TOOL_CLOSE,
  HERO_TOOL_DONE,
  HERO_TOOL_OPEN,
  HERO_TYPE_MS,
  HERO_TYPE_START,
} from "@/components/landing/hero-storyboard";

type ToolStatus = typeof HERO_STATUS_SEARCH | typeof HERO_STATUS_SELECT | typeof HERO_STATUS_DONE;

type Snap = {
  typed: number;
  sent: boolean;
  tool: boolean;
  open: boolean;
  picks: number;
  compact: boolean;
  done: boolean;
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
  const open = tool && ms >= HERO_TOOL_OPEN && ms < HERO_TOOL_CLOSE;
  const picks =
    ms < HERO_PICK_AT ? 0 : Math.min(4, 1 + Math.floor((ms - HERO_PICK_AT) / 520));
  const compact = open && ms >= HERO_COMPACT_AT;
  const done = tool && ms >= HERO_TOOL_DONE;
  const status: ToolStatus = done
    ? HERO_STATUS_DONE
    : picks > 0
      ? HERO_STATUS_SELECT
      : HERO_STATUS_SEARCH;
  const answer =
    ms < HERO_ANSWER_AT
      ? 0
      : Math.min(HERO_ANSWER.length, Math.floor((ms - HERO_ANSWER_AT) / HERO_ANSWER_MS));
  const fade = ms >= HERO_FADE;
  let phase = "type";
  if (fade) phase = "fade";
  else if (answer > 0) phase = "answer";
  else if (done && !open) phase = "chip";
  else if (open) phase = "tool";
  else if (sent) phase = "send";
  return { typed, sent, tool, open, picks, compact, done, status, answer, fade, phase };
}

const REDUCED: Snap = {
  typed: HERO_QUERY.length,
  sent: true,
  tool: true,
  open: false,
  picks: 4,
  compact: false,
  done: true,
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
    a.compact === b.compact &&
    a.done === b.done &&
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

  const typing = !snap.sent && snap.typed < HERO_QUERY.length;
  const userText = snap.sent ? HERO_QUERY : HERO_QUERY.slice(0, snap.typed);

  return (
    <div
      ref={rootRef}
      className={cn("hero-app", snap.fade && "is-dissolve")}
      data-testid="hero-product-demo"
      data-phase={snap.phase}
    >
      <aside className="hero-app-side" aria-hidden="true">
        <p className="hero-app-brand">Archilas</p>
        <nav className="hero-app-nav">
          <span className="hero-app-nav-item is-on">Chat</span>
          <span className="hero-app-nav-item">History</span>
        </nav>
      </aside>
      <div className="hero-app-main">
        <div className="hero-app-bar">
          <span>Chat</span>
          <span className="hero-app-spine">Compact → Reason → Deliver</span>
        </div>
        <div className="hero-thread" data-testid="hero-thread">
          {userText ? (
            <div className="hero-bubble is-user" data-testid="hero-user">
              {userText}
              {typing ? <span className="hero-caret" /> : null}
            </div>
          ) : null}

          {snap.tool ? (
            <div
              className={cn("hero-tool", snap.open && "is-open", snap.done && "is-done")}
              data-testid="hero-tool"
            >
              <div className="hero-tool-head">
                <span className="hero-tool-mark" aria-hidden="true" />
                <span className="hero-tool-name">{HERO_TOOL}</span>
                <span className="hero-tool-status">{snap.status}</span>
              </div>
              <div className="hero-tool-body">
                <div className="hero-tool-inner">
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
                  {snap.compact ? (
                    <div className="hero-micros" data-testid="hero-compact">
                      {HERO_COMPACT.map((row) => (
                        <span key={row.id} className="hero-micro">
                          <em>{row.kind}</em>
                          {row.text}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ) : null}

          {snap.answer > 0 ? (
            <div className="hero-bubble is-assistant" data-testid="hero-answer">
              {HERO_ANSWER.slice(0, snap.answer)}
              {snap.answer < HERO_ANSWER.length ? <span className="hero-caret" /> : null}
            </div>
          ) : null}
        </div>
        <div className={cn("hero-composer", !snap.sent && snap.typed > 0 && "is-live")}>
          <p className="hero-composer-text">
            {snap.sent ? "" : <span className="hero-composer-ph">Message Archilas…</span>}
          </p>
          <span className={cn("hero-composer-go", snap.sent && snap.tool && "is-sent")} aria-hidden="true">
            →
          </span>
        </div>
      </div>
    </div>
  );
}
