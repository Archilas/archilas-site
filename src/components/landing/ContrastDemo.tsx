"use client";

import { contrastSteps, demoHosts, exampleRows, STEP_MS } from "@/components/landing/demo-data";
import { usePausedLoop } from "@/lib/use-paused-loop";

const scraps = [88, 64, 76, 52] as const;

export function ContrastDemo() {
  const { index, setIndex, paused, reduced, bind } = usePausedLoop(contrastSteps.length, STEP_MS);
  const pair = contrastSteps[index];

  return (
    <div className="grid gap-4 md:grid-cols-2" data-paused={paused || reduced} {...bind}>
      <article className="card p-6 md:p-7">
        <p className="label">The old way</p>
        <h2 className="h2 mt-3">Search. Paste. Hope.</h2>
        <OldWayStage key={reduced ? "old-static" : `old-${index}`} step={index} reduced={reduced} />
        <StepCaption
          items={contrastSteps.map((item) => item.old)}
          active={index}
          onSelect={setIndex}
        />
        <p className="mt-3 text-center text-[14px] text-body">{pair.old}</p>
      </article>

      <article className="card p-6 md:p-7">
        <p className="label">The Archilas way</p>
        <h2 className="h2 mt-3">Compact. Reason. Deliver.</h2>
        <NewWayStage key={reduced ? "new-static" : `new-${index}`} step={index} reduced={reduced} />
        <StepCaption
          items={contrastSteps.map((item) => item.next)}
          active={index}
          onSelect={setIndex}
          accent
        />
        <p className="mt-3 text-center text-[14px] text-body">{pair.next}</p>
      </article>
    </div>
  );
}

function OldWayStage({ step, reduced }: { step: number; reduced: boolean }) {
  return (
    <div className="demo-frame mt-6" aria-hidden>
      <ul className="space-y-2">
        {scraps.map((width, index) => (
          <li
            key={width}
            className={`demo-bar ${step === 0 && !reduced ? "is-scanning" : ""} ${
              step >= 1 ? "is-copied" : ""
            }`}
            style={{ width: `${width}%`, animationDelay: `${index * 180}ms` }}
          />
        ))}
      </ul>
      <div className={`demo-prompt mt-4 ${step >= 1 ? "is-filled" : ""} ${step === 2 ? "is-hope" : ""}`}>
        <div className="flex flex-wrap gap-1.5">
          {scraps.map((width) => (
            <span
              key={width}
              className="demo-chip"
              style={{ width: `${Math.max(28, width * 0.42)}px` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function NewWayStage({ step, reduced }: { step: number; reduced: boolean }) {
  return (
    <div className="demo-frame mt-6" aria-hidden>
      <ul className="space-y-3">
        {exampleRows.map((row, index) => {
          const linked = step === 1 && index < 2;
          const quiet = step === 1 && index === 2;
          return (
            <li
              key={row.kind}
              className={`record-row grid gap-1 ${linked ? "is-linked" : ""} ${
                quiet ? "is-quiet" : ""
              } ${step === 0 && !reduced ? "is-forming" : ""}`}
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-muted">{row.kind}</p>
              <p className="relative font-mono text-[12px] leading-[1.45] text-ink">
                {row.text}
                {step === 0 && !reduced ? (
                  <span className="record-scrap record-scrap-light">{row.scrap}</span>
                ) : null}
              </p>
            </li>
          );
        })}
      </ul>
      <ul
        className={`record-hosts mt-4 flex min-h-6 flex-wrap items-center justify-center gap-x-5 ${
          step === 2 || reduced ? "is-on" : ""
        }`}
      >
        {demoHosts.map((host) => (
          <li key={host} className="text-[12px] font-medium not-italic text-ink">
            {host}
          </li>
        ))}
      </ul>
    </div>
  );
}

function StepCaption({
  items,
  active,
  onSelect,
  accent = false,
}: {
  items: readonly string[];
  active: number;
  onSelect: (index: number) => void;
  accent?: boolean;
}) {
  return (
    <div className="mt-5 flex justify-center gap-2" role="tablist" aria-label={items.join(" ")}>
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
              selected ? (accent ? "text-accent" : "text-ink") : "text-muted"
            }`}
          >
            {label}
            {selected ? (
              <span
                aria-hidden
                className={`demo-progress absolute inset-x-1 -bottom-px h-px ${
                  accent ? "bg-accent" : "bg-near-black"
                }`}
              />
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
