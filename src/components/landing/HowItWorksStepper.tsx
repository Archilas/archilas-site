"use client";

import { useRef } from "react";
import { howSteps } from "@/components/landing/demo-data";

export function HowItWorksStepper({
  active,
  onSelect,
}: {
  active: number;
  onSelect: (index: number) => void;
}) {
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  function select(index: number) {
    onSelect(index);
    tabRefs.current[index]?.focus();
  }

  return (
    <div
      role="tablist"
      aria-label="How Archilas works"
      className="flex flex-wrap gap-1 border-b border-border-dark"
    >
      {howSteps.map((item, index) => {
        const selected = index === active;
        return (
          <button
            key={item.id}
            type="button"
            role="tab"
            id={`how-tab-${item.id}`}
            aria-selected={selected}
            aria-controls="how-panel-record"
            tabIndex={selected ? 0 : -1}
            ref={(node) => {
              tabRefs.current[index] = node;
            }}
            onClick={() => select(index)}
            onKeyDown={(event) => {
              if (event.key === "ArrowRight") {
                event.preventDefault();
                select((index + 1) % howSteps.length);
              }
              if (event.key === "ArrowLeft") {
                event.preventDefault();
                select((index - 1 + howSteps.length) % howSteps.length);
              }
            }}
            className={`relative px-3 py-2.5 text-[13px] font-medium not-italic ${
              selected ? "text-text-dark" : "text-text-dark/50 hover:text-text-dark"
            }`}
          >
            <span className="mr-2 font-mono text-[11px]">{String(index + 1).padStart(2, "0")}</span>
            {item.label}
            {selected ? <span aria-hidden className="step-underline" /> : null}
          </button>
        );
      })}
    </div>
  );
}
