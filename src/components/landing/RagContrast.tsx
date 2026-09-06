"use client";

import { exampleRows, ragPassages, STEP_MS } from "@/components/landing/demo-data";
import { usePausedLoop } from "@/lib/use-paused-loop";

export function RagContrast() {
  const { index, setIndex, paused, reduced, bind } = usePausedLoop(2, STEP_MS);
  const finding = index === 0;

  return (
    <div data-paused={paused || reduced} {...bind}>
      <div className="grid gap-4 md:grid-cols-2">
        <article className="card p-6 md:p-7">
          <p className="label">RAG</p>
          <div className="demo-frame mt-5" aria-hidden>
            <div className="relative space-y-2">
              {ragPassages.map((label, passageIndex) => (
                <div
                  key={label}
                  className={`demo-snippet ${finding && !reduced ? "is-scanning" : ""} ${
                    !finding && passageIndex < 2 ? "is-picked" : ""
                  }`}
                  style={{ animationDelay: `${passageIndex * 160}ms` }}
                >
                  {label}
                </div>
              ))}
              {finding && !reduced ? <span className="demo-scan" /> : null}
            </div>
            <div className={`demo-prompt mt-4 ${finding ? "" : "is-filled is-hope"}`}>
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.06em] text-muted">
                prompt
              </p>
              <div className="flex flex-wrap gap-1.5">
                {ragPassages.slice(0, 2).map((label) => (
                  <span key={label} className="demo-chip-label">
                    {label}
                  </span>
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
                  <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-muted">
                    {row.kind}
                  </p>
                  <p className="font-mono text-[12px] leading-[1.45] text-ink">{row.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-5 text-center text-[13px] font-medium not-italic text-ink">Keep a record</p>
        </article>
      </div>
      {reduced ? null : (
        <p className="mt-4 text-center font-mono text-[12px] text-muted">
          {paused ? "Paused" : "Hover to pause"}
        </p>
      )}
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
