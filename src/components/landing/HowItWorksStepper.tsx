"use client";

import { useRef, useState } from "react";

const steps = [
  {
    id: "compact",
    label: "Compact",
    title: "A record you can keep",
    body: "Turn what matters into a compact, grounded, revisable record. Preferences, decisions, open loops. Not a chat log.",
  },
  {
    id: "reason",
    label: "Reason",
    title: "Compose when supported",
    body: "Related facts compose when the record supports it. If the link is not there, the layer stays quiet.",
  },
  {
    id: "deliver",
    label: "Deliver",
    title: "Into tools you already use",
    body: "Built to deliver into Claude, ChatGPT, Cursor, and agents over MCP. Intended delivery. Surfaces are in development — not available now.",
  },
] as const;

export function HowItWorksStepper() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const step = steps[active];

  function select(index: number) {
    setActive(index);
    tabRefs.current[index]?.focus();
  }

  return (
    <div>
      <div
        role="tablist"
        aria-label="How Archilas works"
        className="flex flex-wrap gap-2 border-b border-border-dark"
      >
        {steps.map((item, index) => {
          const selected = index === active;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`how-tab-${item.id}`}
              aria-selected={selected}
              aria-controls={`how-panel-${item.id}`}
              tabIndex={selected ? 0 : -1}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              onClick={() => select(index)}
              onKeyDown={(event) => {
                if (event.key === "ArrowRight") {
                  event.preventDefault();
                  select((index + 1) % steps.length);
                }
                if (event.key === "ArrowLeft") {
                  event.preventDefault();
                  select((index - 1 + steps.length) % steps.length);
                }
              }}
              className={`relative px-3 py-3 text-[15px] font-medium not-italic transition-colors ${
                selected ? "text-accent-dark" : "text-text-dark/70 hover:text-text-dark"
              }`}
            >
              <span className="mr-2 font-mono text-[12px]">{String(index + 1).padStart(2, "0")}</span>
              {item.label}
              {selected ? (
                <span
                  aria-hidden
                  className="absolute inset-x-3 -bottom-px h-px bg-accent-dark"
                />
              ) : null}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`how-panel-${step.id}`}
        aria-labelledby={`how-tab-${step.id}`}
        className="pt-6"
      >
        <h3 className="h3">{step.title}</h3>
        <p className="mt-3 max-w-xl text-[16px] leading-[1.6] text-text-dark/80">{step.body}</p>
      </div>
    </div>
  );
}
