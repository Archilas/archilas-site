"use client";

import { useState } from "react";
import { ArchWindow } from "@/components/landing/ArchWindow";
import { compareDemo } from "@/components/landing/demo-data";
import { cn } from "@/lib/cn";

export function RetrievalCompare() {
  const [side, setSide] = useState<"retrieval" | "record">("retrieval");

  return (
    <section
      id="compare"
      className="scroll-mt-[var(--scroll-margin)] border-y border-line py-14 md:py-16"
    >
      <div className="mx-auto max-w-[var(--max-width)] px-[var(--pad-x)]">
        <p className="label">Compare</p>
        <h2 className="h2 mt-3 max-w-xl">Passages versus a record.</h2>
        <div className="mt-6 flex gap-2">
          <button
            type="button"
            className={cn(
              "h-8 border px-3 text-[12px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus",
              side === "retrieval" ? "border-ink bg-ink text-surface" : "border-line bg-surface text-ink",
            )}
            aria-pressed={side === "retrieval"}
            onClick={() => setSide("retrieval")}
          >
            Retrieval
          </button>
          <button
            type="button"
            className={cn(
              "h-8 border px-3 text-[12px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus",
              side === "record" ? "border-ink bg-ink text-surface" : "border-line bg-surface text-ink",
            )}
            aria-pressed={side === "record"}
            onClick={() => setSide("record")}
          >
            Record
          </button>
        </div>
        <div className="mt-6">
          {side === "retrieval" ? (
            <ArchWindow name="chunks">
              <div className="space-y-3 p-5">
                <p className="text-[15px] font-medium text-ink">{compareDemo.q}</p>
                {compareDemo.passages.map((passage) => (
                  <p key={passage} className="compare-chunk">
                    {passage}
                  </p>
                ))}
              </div>
            </ArchWindow>
          ) : (
            <ArchWindow name="record.json">
              <div className="space-y-4 p-5">
                <p className="text-[16px] leading-7 text-ink">{compareDemo.answer}</p>
                <ul className="space-y-2">
                  {compareDemo.rows.map((row) => (
                    <li key={row.id} className="border-t border-line pt-2 first:border-0 first:pt-0">
                      <p className="mono uppercase tracking-[0.12em] text-muted">{row.kind}</p>
                      <p className="mt-1 text-[14px] leading-6 text-ink">{row.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </ArchWindow>
          )}
        </div>
      </div>
    </section>
  );
}
