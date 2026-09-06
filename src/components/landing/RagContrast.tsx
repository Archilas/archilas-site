"use client";

import { exampleRows, STEP_MS } from "@/components/landing/demo-data";
import { usePausedLoop } from "@/lib/use-paused-loop";

const passages = [92, 70, 84, 58, 76] as const;

export function RagContrast() {
  const { index, setIndex, paused, reduced, bind } = usePausedLoop(2, STEP_MS);
  const finding = index === 0;

  return (
    <div className="grid gap-4 md:grid-cols-2" data-paused={paused || reduced} {...bind}>
      <article className="card p-6 md:p-7">
        <p className="label">RAG</p>
        <div className="demo-frame mt-5" aria-hidden>
          <div className="relative space-y-2">
            {passages.map((width, passageIndex) => (
              <div
                key={width}
                className={`demo-bar ${finding && !reduced ? "is-scanning" : ""} ${
                  !finding && passageIndex < 2 ? "is-picked" : ""
                }`}
                style={{ width: `${width}%`, animationDelay: `${passageIndex * 160}ms` }}
              />
            ))}
            {finding && !reduced ? <span className="demo-scan" /> : null}
          </div>
          <div className={`demo-prompt mt-4 ${finding ? "" : "is-filled is-hope"}`}>
            <div className="flex flex-wrap gap-1.5">
              {passages.slice(0, 2).map((width) => (
                <span
                  key={width}
                  className="demo-chip"
                  style={{ width: `${Math.max(36, width * 0.5)}px` }}
                />
              ))}
            </div>
          </div>
        </div>
        <StepPair
          items={["Find passages", "Paste snippets"]}
          active={index}
          onSelect={setIndex}
        />
      </article>

      <article className="card p-6 md:p-7">
        <p className="label">Archilas</p>
        <div className="demo-frame mt-5" aria-hidden>
          <ul className="space-y-3">
            {exampleRows.map((row) => (
              <li key={row.kind} className="record-row grid gap-1">
                <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-muted">{row.kind}</p>
                <p className="font-mono text-[12px] leading-[1.45] text-ink">{row.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-5 text-center text-[13px] font-medium not-italic text-ink">Keep a record</p>
      </article>
    </div>
  );
}

function StepPair({
  items,
  active,
  onSelect,
}: {
  items: readonly string[];
  active: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="mt-5 flex justify-center gap-2" role="tablist" aria-label="RAG steps">
      {items.map((label, index) => {
        const selected = index === active;
        return (
          <button
            key={label}
            type="button"
            role="tab"
            aria-selected={selected}
            onClick={() => onSelect(index)}
            className={`relative px-2 py-1 text-[12px] font-medium not-italic ${
              selected ? "text-ink" : "text-muted"
            }`}
          >
            {label}
            {selected ? (
              <span aria-hidden className="demo-progress absolute inset-x-1 -bottom-px h-px bg-near-black" />
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
