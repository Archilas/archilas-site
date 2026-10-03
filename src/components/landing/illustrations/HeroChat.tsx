"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { ChatBubble, ChatWindow } from "@/components/landing/chat/ChatUi";

type Line =
  | { kind: "you" | "agent"; text: string }
  | { kind: "archilas"; text: string; source: string };

const LINES: Line[] = [
  { kind: "you", text: "What did we decide about the auth timeout?" },
  {
    kind: "archilas",
    text: "15 minutes. You and Claude settled it on Tuesday after the login errors.",
    source: "Claude chat, Tue 14:02",
  },
  { kind: "agent", text: "Who owns deploys now?" },
  {
    kind: "archilas",
    text: "The ops team, since Sep 30.",
    source: "handoff note, Sep 30",
  },
];

const CHAR_MS = 16;
const PAUSE_AFTER_LINE = 420;
const HOLD_END = 2800;

/** Hero visual: chat that types itself out (people + agents, with source chips). */
export function HeroChat({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.35, once: false });
  const reduced = useReducedMotion();
  const [lineIndex, setLineIndex] = useState(0);
  const [typed, setTyped] = useState(0);
  const [showSource, setShowSource] = useState(false);

  useEffect(() => {
    if (reduced) {
      setLineIndex(LINES.length);
      setTyped(0);
      setShowSource(true);
      return;
    }
    if (!inView) {
      setLineIndex(0);
      setTyped(0);
      setShowSource(false);
      return;
    }

    let raf = 0;
    let start = performance.now();
    let phase: "type" | "pause" | "hold" = "type";
    let idx = 0;
    let chars = 0;

    const tick = (now: number) => {
      raf = window.requestAnimationFrame(tick);
      const elapsed = now - start;
      const line = LINES[idx];
      if (!line) return;

      if (phase === "type") {
        const next = Math.min(line.text.length, Math.floor(elapsed / CHAR_MS));
        if (next !== chars) {
          chars = next;
          setLineIndex(idx);
          setTyped(chars);
          setShowSource(false);
        }
        if (chars >= line.text.length) {
          phase = "pause";
          start = now;
          if (line.kind === "archilas") setShowSource(true);
        }
        return;
      }

      if (phase === "pause") {
        if (elapsed < PAUSE_AFTER_LINE) return;
        if (idx < LINES.length - 1) {
          idx += 1;
          chars = 0;
          phase = "type";
          start = now;
          setLineIndex(idx);
          setTyped(0);
          setShowSource(false);
          return;
        }
        phase = "hold";
        start = now;
        setLineIndex(LINES.length);
        setShowSource(true);
        return;
      }

      if (phase === "hold" && elapsed > HOLD_END) {
        idx = 0;
        chars = 0;
        phase = "type";
        start = now;
        setLineIndex(0);
        setTyped(0);
        setShowSource(false);
      }
    };

    raf = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(raf);
  }, [inView, reduced]);

  const complete = reduced || lineIndex >= LINES.length;

  return (
    <div ref={ref} className={className} data-testid="hero-chat">
      <ChatWindow title="Ask Archilas" example>
        {LINES.map((line, i) => {
          const visible = complete || i < lineIndex || (i === lineIndex && typed > 0);
          if (!visible) return null;
          const isActive = !complete && i === lineIndex;
          const text = complete || i < lineIndex ? line.text : line.text.slice(0, typed);
          const source =
            line.kind === "archilas" && (complete || i < lineIndex || (isActive && showSource))
              ? line.source
              : undefined;
          return (
            <ChatBubble
              key={`${line.kind}-${i}`}
              kind={line.kind}
              source={source}
              className={isActive ? "is-typing" : undefined}
            >
              {text}
              {isActive && typed < line.text.length ? <span className="chat-caret" aria-hidden="true" /> : null}
            </ChatBubble>
          );
        })}
      </ChatWindow>
    </div>
  );
}
