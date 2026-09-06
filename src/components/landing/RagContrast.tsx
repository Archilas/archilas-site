"use client";

import { useState } from "react";
import { DemoTabs } from "@/components/landing/DemoTabs";
import { ProductWindow } from "@/components/landing/ProductWindow";
import { exampleRows, ragPassages } from "@/components/landing/demo-data";

export function RagContrast() {
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number[]>([]);
  const [focusRow, setFocusRow] = useState<number | null>(null);

  function togglePassage(passageIndex: number) {
    setPicked((current) =>
      current.includes(passageIndex)
        ? current.filter((item) => item !== passageIndex)
        : [...current, passageIndex],
    );
    setIndex(1);
  }

  const selectedPassages = (picked.length ? picked : index === 1 ? [0, 1] : []).map(
    (item) => ragPassages[item],
  );

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2">
        <ProductWindow title="RAG · find a passage" mini>
          <div className="demo-frame">
            <p className="label mb-3 text-text-dark/55">Passages</p>
            <div className="space-y-2">
              {ragPassages.map((label, passageIndex) => {
                const isPicked =
                  picked.includes(passageIndex) ||
                  (index === 1 && picked.length === 0 && passageIndex < 2);
                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() => togglePassage(passageIndex)}
                    className={`demo-snippet ${isPicked ? "is-picked" : ""}`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
            <div className={`demo-prompt mt-4 ${selectedPassages.length ? "is-filled" : ""}`}>
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.06em] text-text-dark/45">
                prompt
              </p>
              <div className="flex flex-wrap gap-1.5">
                {selectedPassages.map((label) => (
                  <span key={label} className="demo-chip-label">
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ProductWindow>

        <ProductWindow title="Archilas · living record" mini>
          <div className="demo-frame">
            <p className="label mb-3 text-text-dark/55">The record</p>
            <ul className="space-y-3">
              {exampleRows.map((row, rowIndex) => (
                <li key={row.kind}>
                  <button
                    type="button"
                    onClick={() => setFocusRow(rowIndex)}
                    className={`record-row grid w-full gap-1 text-left ${
                      focusRow === rowIndex ? "is-linked is-focus" : ""
                    }`}
                  >
                    <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-text-dark/60">
                      {row.kind}
                    </p>
                    <p className="font-mono text-[12px] leading-[1.45] text-text-dark">{row.text}</p>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </ProductWindow>
      </div>

      <DemoTabs
        items={["Find passages", "Keep a record"]}
        active={index}
        onSelect={setIndex}
        label="RAG versus record"
        accent
      />
      <p className="mt-3 text-center font-mono text-[12px] text-muted">
        Click a passage or a record row
      </p>
    </div>
  );
}
