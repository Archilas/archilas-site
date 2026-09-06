"use client";

import { useRef } from "react";

export function DemoTabs({
  items,
  active,
  onSelect,
  label,
  accent = false,
  playing = false,
}: {
  items: readonly string[];
  active: number;
  onSelect: (index: number) => void;
  label: string;
  accent?: boolean;
  playing?: boolean;
}) {
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  function select(index: number) {
    onSelect(index);
    tabRefs.current[index]?.focus();
  }

  return (
    <div role="tablist" aria-label={label} className="mt-5 flex flex-wrap justify-center gap-1">
      {items.map((item, index) => {
        const selected = index === active;
        return (
          <button
            key={item}
            type="button"
            role="tab"
            aria-selected={selected}
            tabIndex={selected ? 0 : -1}
            ref={(node) => {
              tabRefs.current[index] = node;
            }}
            onClick={() => select(index)}
            onKeyDown={(event) => {
              if (event.key === "ArrowRight") {
                event.preventDefault();
                select((index + 1) % items.length);
              }
              if (event.key === "ArrowLeft") {
                event.preventDefault();
                select((index - 1 + items.length) % items.length);
              }
            }}
            className={`relative px-3 py-2 text-[13px] font-medium not-italic transition-colors ${
              selected ? (accent ? "text-accent" : "text-ink") : "text-muted hover:text-ink"
            }`}
          >
            {item}
            {selected ? (
              <span
                aria-hidden
                className={`absolute inset-x-2 -bottom-px h-0.5 ${
                  accent ? "bg-accent" : "bg-near-black"
                } ${playing ? "demo-progress" : ""}`}
              />
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
