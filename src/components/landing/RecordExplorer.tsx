"use client";

import { useState } from "react";
import { ArchWindow } from "@/components/landing/ArchWindow";
import { explorerRecord, type RecordKind } from "@/components/landing/demo-data";
import { cn } from "@/lib/cn";

const FILTERS = ["All", "Preference", "Decision", "Open loop"] as const;

export function RecordExplorer() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [openId, setOpenId] = useState<string>(explorerRecord[0].id);

  const rows = explorerRecord.filter((row) => filter === "All" || row.kind === filter);
  const open = rows.find((row) => row.id === openId) ?? rows[0];

  function applyFilter(next: (typeof FILTERS)[number]) {
    setFilter(next);
    const first = explorerRecord.find((row) => next === "All" || row.kind === (next as RecordKind));
    if (first) setOpenId(first.id);
  }

  return (
    <section id="record" className="scroll-mt-[var(--scroll-margin)] py-14 md:py-16">
      <div className="mx-auto max-w-[var(--max-width)] px-[var(--pad-x)]">
        <p className="label">Record</p>
        <h2 className="h2 mt-3 max-w-xl">Open a line. See the source.</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {FILTERS.map((item) => (
            <button
              key={item}
              type="button"
              className={cn(
                "h-8 border px-3 text-[12px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus",
                filter === item ? "border-ink bg-ink text-surface" : "border-line bg-surface text-ink",
              )}
              aria-pressed={filter === item}
              onClick={() => applyFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <ArchWindow name="record.json">
            <ul>
              {rows.map((row) => (
                <li key={row.id}>
                  <button
                    type="button"
                    className={cn(
                      "flex w-full items-start border-b border-line px-4 py-3 text-left last:border-0",
                      open?.id === row.id && "bg-bg",
                    )}
                    onClick={() => setOpenId(row.id)}
                  >
                    <span>
                      <span className="mono uppercase tracking-[0.12em] text-muted">{row.kind}</span>
                      <span className="mt-1 block text-[14px] leading-6 text-ink">{row.text}</span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </ArchWindow>
          <ArchWindow name={open?.source ?? "source"}>
            <div className="p-5">
              <p className="mono uppercase tracking-[0.12em] text-muted">{open?.kind}</p>
              <p className="mt-2 text-[15px] leading-7 text-ink">{open?.text}</p>
              <p className="mt-6 text-[14px] leading-6 text-body">{open?.quote}</p>
            </div>
          </ArchWindow>
        </div>
      </div>
    </section>
  );
}
