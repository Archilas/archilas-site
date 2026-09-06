"use client";

import { useState } from "react";
import { contrastAsk, contrastCompare } from "@/components/landing/demo-data";
import { cn } from "@/lib/cn";

export function SupportCards() {
  const [askId, setAskId] = useState<(typeof contrastAsk)[number]["id"]>("catering");
  const [side, setSide] = useState<"retrieval" | "memory">("retrieval");
  const ask = contrastAsk.find((item) => item.id === askId) ?? contrastAsk[0];

  return (
    <section id="product" className="scroll-mt-[var(--scroll-margin)] px-[var(--pad-x)] py-14">
      <div className="mx-auto mb-8 max-w-[var(--max-width)] text-center">
        <h2 className="h2">Search finds passages. Memory answers.</h2>
      </div>
      <div className="mx-auto grid max-w-[var(--max-width)] gap-5 md:grid-cols-2">
        <div className="teach-card">
          <p className="demo-kicker">Ask</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {contrastAsk.map((item) => (
              <button
                key={item.id}
                type="button"
                className={cn("teach-chip", askId === item.id && "is-on")}
                aria-pressed={askId === item.id}
                onClick={() => setAskId(item.id)}
              >
                {item.q}
              </button>
            ))}
          </div>
          <p className="mt-5 text-[17px] leading-7 text-ink">{ask.q}</p>
          <p className="mt-3 text-[16px] leading-7 text-body">{ask.supported ? ask.a : "Not in the record."}</p>
        </div>

        <div className="teach-card">
          <p className="demo-kicker">Compare</p>
          <div className="mt-4 flex gap-2">
            <button
              type="button"
              className={cn("teach-chip", side === "retrieval" && "is-on")}
              aria-pressed={side === "retrieval"}
              onClick={() => setSide("retrieval")}
            >
              Retrieval
            </button>
            <button
              type="button"
              className={cn("teach-chip", side === "memory" && "is-on")}
              aria-pressed={side === "memory"}
              onClick={() => setSide("memory")}
            >
              Memory
            </button>
          </div>
          {side === "retrieval" ? (
            <div className="mt-5 space-y-2">
              <p className="text-[17px] text-ink">{contrastCompare.q}</p>
              {contrastCompare.passages.map((passage) => (
                <p key={passage} className="text-[15px] leading-6 text-muted">
                  {passage}
                </p>
              ))}
            </div>
          ) : (
            <div className="mt-5 space-y-3">
              <p className="text-[17px] leading-7 text-ink">{contrastCompare.answer}</p>
              {contrastCompare.rows.map((row) => (
                <div key={row.text}>
                  <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-muted">{row.kind}</p>
                  <p className="mt-1 text-[16px] leading-6 text-ink">{row.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
