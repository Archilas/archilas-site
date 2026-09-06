"use client";

import { useState } from "react";
import { askCard, compareCard } from "@/components/landing/demo-data";
import { cn } from "@/lib/cn";

export function SupportCards() {
  const [askId, setAskId] = useState<(typeof askCard)[number]["id"]>("catering");
  const [side, setSide] = useState<"retrieval" | "record">("retrieval");
  const ask = askCard.find((item) => item.id === askId) ?? askCard[0];

  return (
    <section id="product" className="scroll-mt-[var(--scroll-margin)] px-[var(--pad-x)] pb-10">
      <div className="mx-auto grid max-w-[var(--max-width)] gap-5 md:grid-cols-2">
        <div className="support-card p-5 text-left">
          <p className="mono uppercase tracking-[0.14em] text-text-dark/40">Ask</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {askCard.map((item) => (
              <button
                key={item.id}
                type="button"
                className={cn("ask-chip", askId === item.id && "is-on")}
                aria-pressed={askId === item.id}
                onClick={() => setAskId(item.id)}
              >
                {item.q}
              </button>
            ))}
          </div>
          <p className="mt-5 font-mono text-[15px] leading-7 text-text-dark">{ask.q}</p>
          <p className="mt-3 text-[16px] leading-7 text-text-dark/85">
            {ask.supported ? ask.a : "Not in the record."}
          </p>
        </div>

        <div className="support-card p-5 text-left">
          <p className="mono uppercase tracking-[0.14em] text-text-dark/40">Compare</p>
          <div className="mt-4 flex gap-2">
            <button
              type="button"
              className={cn("ask-chip", side === "retrieval" && "is-on")}
              aria-pressed={side === "retrieval"}
              onClick={() => setSide("retrieval")}
            >
              Retrieval
            </button>
            <button
              type="button"
              className={cn("ask-chip", side === "record" && "is-on")}
              aria-pressed={side === "record"}
              onClick={() => setSide("record")}
            >
              Record
            </button>
          </div>
          {side === "retrieval" ? (
            <div className="mt-5 space-y-2">
              <p className="text-[15px] text-text-dark">{compareCard.q}</p>
              {compareCard.passages.map((passage) => (
                <p key={passage} className="text-[13px] leading-6 text-text-dark/55">
                  {passage}
                </p>
              ))}
            </div>
          ) : (
            <div className="mt-5 space-y-3">
              <p className="text-[15px] leading-7 text-text-dark">{compareCard.answer}</p>
              {compareCard.rows.map((row) => (
                <div key={row.text}>
                  <p className="mono uppercase tracking-[0.14em] text-text-dark/40">{row.kind}</p>
                  <p className="mt-1 text-[14px] leading-6 text-text-dark">{row.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
