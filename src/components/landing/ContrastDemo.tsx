"use client";

import { useState } from "react";
import { DemoTabs } from "@/components/landing/DemoTabs";
import { ProductWindow } from "@/components/landing/ProductWindow";
import { contrastSteps, demoHosts, exampleRows, searchSnippets } from "@/components/landing/demo-data";

export function ContrastDemo() {
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<string[]>([]);

  function pickSnippet(label: string) {
    setPicked((current) => (current.includes(label) ? current : [...current, label]));
    setIndex(1);
  }

  return (
    <div>
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
                      className={`demo-snippet ${copied ? "is-copied" : ""} ${
                        picked.includes(label) ? "is-picked" : ""
                      }`}
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
                {(picked.length ? picked : index >= 1 ? [...searchSnippets] : []).map((label) => (
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
                      onClick={() => setIndex(1)}
                      className={`record-row grid w-full gap-1 text-left ${linked ? "is-linked" : ""} ${
                        quiet ? "is-quiet" : ""
                      }`}
                    >
                      <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-text-dark/60">
                        {row.kind}
                      </p>
                      <p className="font-mono text-[12px] leading-[1.45] text-text-dark">{row.text}</p>
                    </button>
                  </li>
                );
              })}
            </ul>
            <ul
              className={`record-hosts mt-4 flex min-h-6 flex-wrap items-center justify-center gap-x-5 ${
                index === 2 ? "is-on" : ""
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
        onSelect={setIndex}
        label="Search paste hope versus compact reason deliver"
        accent
      />
      <p className="mt-3 text-center font-mono text-[12px] text-muted">
        Click a tag, row, or step
      </p>
    </div>
  );
}
