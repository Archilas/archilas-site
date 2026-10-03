"use client";

import { motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChatBubble, ExampleLabel, SourceChip } from "@/components/landing/chat/ChatUi";

const ENTRIES = [
  { id: "mon", day: "Mon", title: "Cursor chat", detail: "Auth timeout discussion", source: false },
  { id: "tue", day: "Tue", title: "Claude chat", detail: "Settled on 15 minutes", source: true },
  { id: "wed", day: "Wed", title: "Agent handoff", detail: "Ops deploy ownership", source: false },
] as const;

/** How visual: record fills on scroll; the matching source lights up with the question. */
export function HowRecord({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.25, once: false });
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 45%"],
  });

  const fill = useTransform(scrollYProgress, [0, 0.55], [0, 1]);
  const askProgress = useTransform(scrollYProgress, [0.45, 0.75], [0, 1]);

  return (
    <div ref={ref} className={`how-record ${className}`} data-testid="how-record">
      <div className="how-record-panel">
        <div className="how-record-head">
          <span className="how-record-title">Archilas record</span>
          <ExampleLabel />
        </div>
        <ul className="how-record-list">
          {ENTRIES.map((entry, i) => (
            <RecordRow
              key={entry.id}
              entry={entry}
              index={i}
              fill={fill}
              askProgress={askProgress}
              forceComplete={!!reduced && inView}
              forceHidden={!!reduced && !inView}
            />
          ))}
        </ul>
        <AskBlock
          askProgress={askProgress}
          forceComplete={!!reduced && inView}
          forceHidden={!!reduced && !inView}
        />
      </div>
    </div>
  );
}

function RecordRow({
  entry,
  index,
  fill,
  askProgress,
  forceComplete,
  forceHidden,
}: {
  entry: (typeof ENTRIES)[number];
  index: number;
  fill: ReturnType<typeof useTransform<number, number>>;
  askProgress: ReturnType<typeof useTransform<number, number>>;
  forceComplete: boolean;
  forceHidden: boolean;
}) {
  const threshold = (index + 0.35) / ENTRIES.length;
  const opacity = useTransform(fill, (v) => {
    if (forceHidden) return 0;
    if (forceComplete) return 1;
    return v >= threshold ? 1 : 0.18;
  });
  const y = useTransform(fill, (v) => {
    if (forceHidden) return 10;
    if (forceComplete || v >= threshold) return 0;
    return 12;
  });
  const highlight = useTransform(askProgress, (v) => {
    if (!entry.source) return 0;
    if (forceHidden) return 0;
    if (forceComplete) return 1;
    return v > 0.35 ? 1 : 0;
  });
  const border = useTransform(highlight, (v) =>
    v > 0.5 ? "var(--amber)" : "var(--line)",
  );
  const bg = useTransform(highlight, (v) => (v > 0.5 ? "var(--amber-soft)" : "var(--surface)"));

  return (
    <motion.li className="how-record-row" style={{ opacity, y, borderColor: border, backgroundColor: bg }}>
      <span className="how-record-day">{entry.day}</span>
      <div className="how-record-meta">
        <strong>{entry.title}</strong>
        <span>{entry.detail}</span>
      </div>
      {entry.source ? (
        <motion.span className="how-record-hit" style={{ opacity: highlight }}>
          Source
        </motion.span>
      ) : null}
    </motion.li>
  );
}

function AskBlock({
  askProgress,
  forceComplete,
  forceHidden,
}: {
  askProgress: ReturnType<typeof useTransform<number, number>>;
  forceComplete: boolean;
  forceHidden: boolean;
}) {
  const opacity = useTransform(askProgress, (v) => {
    if (forceHidden) return 0;
    if (forceComplete) return 1;
    return v;
  });
  const y = useTransform(askProgress, (v) => {
    if (forceHidden) return 14;
    if (forceComplete || v > 0.2) return 0;
    return 16;
  });

  return (
    <motion.div className="how-record-ask" style={{ opacity, y }}>
      <ChatBubble kind="you">What did we decide about the auth timeout?</ChatBubble>
      <ChatBubble kind="archilas" source="Claude chat, Tue 14:02">
        15 minutes. You and Claude settled it on Tuesday after the login errors.
      </ChatBubble>
      <p className="how-record-note">
        Matched from <SourceChip>Claude chat, Tue</SourceChip>
      </p>
    </motion.div>
  );
}
