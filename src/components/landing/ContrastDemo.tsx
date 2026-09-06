"use client";

import { DemoTabs } from "@/components/landing/DemoTabs";
import { ProductWindow } from "@/components/landing/ProductWindow";
import {
  contrastSteps,
  demoHosts,
  exampleRows,
  HOW_STEP_MS,
  searchSnippets,
} from "@/components/landing/demo-data";
import { useDrivenDemo } from "@/lib/use-driven-demo";
import { useState } from "react";

export function ContrastDemo() {
  const { index, select, driven, playing, reduced, bind } = useDrivenDemo(3, HOW_STEP_MS);
  const [picked, setPicked] = useState<string[]>([]);

  function pickSnippet(label: string) {
    setPicked((current) => (current.includes(label) ? current : [...current, label]));
    select(1);
  }

  return (
    <div data-paused={!playing} {...bind}>
      <div className="grid gap-4 md:grid-cols-2">
        <ProductWindow title="Search · Paste · Hope" mini>
          <div className="demo-frame">
            <p className="label mb-3 text-text-dark/55">The old way</p>
            <ul className="space-y-2">
              {searchSnippets.map((label) => {
                const copied = index >= 1 || picked.includes(label);
                return (
                  <li key={label}>
                    <button
                      type="button"
                      onClick={() => pickSnippet(label)}
                      className={`demo-snippet ${index === 0 && !reduced && !driven ? "is-scanning" : ""} ${
                        copied ? "is-copied" : ""
                      } ${picked.includes(label) ? "is-picked" : ""}`}
                    >
                      {label}
                    </button>
                  </li>
                );
              })}
            </ul>
            <div
              className={`demo-prompt mt-4 ${index >= 1 || picked.length ? "is-filled" : ""} ${
                index === 2 ? "is-hope" : ""
              }`}
            >
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.06em] text-text-dark/45">
                prompt
              </p>
              <div className="flex flex-wrap gap-1.5">
                {(picked.length ? picked : index >= 1 ? searchSnippets : []).map((label) => (
                  <span key={label} className="demo-chip-label">
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ProductWindow>

        <ProductWindow title="Compact · Reason · Deliver" mini>
          <div className="demo-frame">
            <p className="label mb-3 text-text-dark/55">The Archilas way</p>
            <ul className="space-y-3">
              {exampleRows.map((row, rowIndex) => {
                const linked = index === 1 && rowIndex < 2;
                const quiet = index === 1 && rowIndex === 2;
                return (
                  <li key={row.kind}>
                    <button
                      type="button"
                      onClick={() => select(1)}
                      className={`record-row grid w-full gap-1 text-left ${linked ? "is-linked" : ""} ${
                        quiet ? "is-quiet" : ""
                      }`}
                    >
                      <p className="flex flex-wrap items-baseline gap-x-2 font-mono text-[11px] uppercase tracking-[0.06em] text-text-dark/60">
                        {row.kind}
                        {index === 0 && !reduced ? (
                          <span className="record-scrap-chip">{row.scrap}</span>
                        ) : null}
                      </p>
                      <p className="font-mono text-[12px] leading-[1.45] text-text-dark">{row.text}</p>
                    </button>
                  </li>
                );
              })}
            </ul>
            <ul
              className={`record-hosts mt-4 flex min-h-6 flex-wrap items-center justify-center gap-x-5 ${
                index === 2 || reduced ? "is-on" : ""
              }`}
            >
              {demoHosts.map((host) => (
                <li key={host} className="text-[12px] font-medium not-italic text-text-dark/80">
                  {host}
                </li>
              ))}
            </ul>
          </div>
        </ProductWindow>
      </div>

      <DemoTabs
        items={contrastSteps.map((item) => `${item.old} → ${item.next}`)}
        active={index}
        onSelect={select}
        label="Search paste hope versus compact reason deliver"
        accent
        playing={playing}
      />
      {reduced ? null : (
        <p className="mt-3 text-center font-mono text-[12px] text-muted">
          {driven ? "Your control — click a snippet, row, or step" : "Click a snippet to paste · hover pauses"}
        </p>
      )}
    </div>
  );
}
