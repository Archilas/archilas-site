"use client";

import { useRef } from "react";
import { howSteps } from "@/components/landing/demo-data";

export function HowItWorksStepper({
  active,
  onSelect,
  playing = false,
}: {
  active: number;
  onSelect: (index: number) => void;
  playing?: boolean;
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
      className="flex flex-wrap justify-center gap-1 border-b border-border-dark"
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
            className={`relative px-3 py-3 text-[15px] font-medium not-italic transition-colors ${
              selected ? "text-accent" : "text-text-dark/65 hover:text-text-dark"
            }`}
          >
            <span className="mr-2 font-mono text-[12px]">{String(index + 1).padStart(2, "0")}</span>
            {item.label}
            {selected ? (
              <span
                aria-hidden
                className={`absolute inset-x-3 -bottom-px h-0.5 bg-accent ${
                  playing ? "demo-progress" : ""
                }`}
              />
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
