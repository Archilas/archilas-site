"use client";

import { useState } from "react";
import { ProductWindow } from "@/components/landing/ProductWindow";
import { compareRows, retrievalPassages } from "@/components/landing/demo-data";

export function ContrastDemo() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [focusRow, setFocusRow] = useState<number | null>(null);

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2">
        <ProductWindow title="Retrieval" mini>
          <div className="demo-frame">
            <p className="label mb-3 text-text-dark/55">Passages</p>
            <ul className="space-y-2">
              {retrievalPassages.map((passage) => {
                const open = openId === passage.id;
                return (
                  <li key={passage.id}>
                    <button
                      type="button"
                      aria-expanded={open}
                      onClick={() => setOpenId(open ? null : passage.id)}
                      className={`demo-passage ${open ? "is-open" : ""}`}
                    >
                      <span className="flex items-baseline justify-between gap-3">
                        <span className="font-mono text-[12px] text-text-dark">{passage.title}</span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.06em] text-text-dark/50">
                          {open ? "Close" : "Expand"}
                        </span>
                      </span>
                      <span className="mt-1 block font-mono text-[11px] text-text-dark/55">
                        {passage.excerpt}
                      </span>
                      {open ? (
                        <span className="mt-2 block font-mono text-[12px] leading-[1.5] text-text-dark/90">
                          {passage.body}
                        </span>
                      ) : null}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </ProductWindow>

        <ProductWindow title="Record" mini>
          <div className="demo-frame">
            <p className="label mb-3 text-text-dark/55">The record</p>
            <ul className="space-y-3">
              {compareRows.map((row, rowIndex) => (
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
      <p className="mt-4 text-center font-mono text-[12px] text-muted">
        Try it — expand a passage or open a record row.
      </p>
    </div>
  );
}
