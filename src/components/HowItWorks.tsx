"use client";

import { useState } from "react";
import { CodeBlock } from "@/components/CodeBlock";

const steps = [
  {
    id: "distill",
    label: "Distill",
    title: "Turn a session into evidence",
    body: "Keep claims, commitments, and signals. Drop the transcript. Mark confidence instead of hoping the next prompt remembers.",
    focus: "kind, text, confidence",
  },
  {
    id: "vault",
    label: "Vault",
    title: "Store what can be inspected",
    body: "Each object keeps a source and a time. You can read it later. Nothing here is a certification we do not hold.",
    focus: "source, as_of",
  },
  {
    id: "inject",
    label: "Inject",
    title: "Push only what the record supports",
    body: "The host gets a compact object, not a paste. If a loop is still open, the reply stays incomplete on purpose.",
    focus: "subject, text",
  },
] as const;

const claim = `{
  "kind": "claim",
  "subject": "inference host",
  "text": "Switched host after rate limits blocked deploys",
  "confidence": "high",
  "source": "cursor",
  "as_of": "2026-09-05"
}`;

export function HowItWorks() {
  const [active, setActive] = useState<(typeof steps)[number]["id"]>("distill");
  const step = steps.find((item) => item.id === active) ?? steps[0];

  return (
    <div>
      <p className="label">How it works</p>
      <h2 className="h2 mt-3 max-w-2xl">Distill. Vault. Inject.</h2>
      <p className="mt-4 max-w-xl text-body">
        Three steps. The stepper changes the explanation. The claim object stays the same so you
        can see what moves through the vault.
      </p>

      <div
        role="tablist"
        aria-label="How Archilas works"
        className="mt-8 flex flex-wrap gap-2"
        onKeyDown={(event) => {
          const current = steps.findIndex((item) => item.id === active);
          if (event.key === "ArrowRight" || event.key === "ArrowDown") {
            event.preventDefault();
            setActive(steps[(current + 1) % steps.length].id);
          }
          if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
            event.preventDefault();
            setActive(steps[(current - 1 + steps.length) % steps.length].id);
          }
        }}
      >
        {steps.map((item, index) => {
          const selected = item.id === active;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`how-tab-${item.id}`}
              aria-selected={selected}
              aria-controls={`how-panel-${item.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(item.id)}
              className={`h-[var(--control-height)] rounded-[var(--arch-radius-control)] border px-4 text-[15px] font-medium not-italic ${
                selected
                  ? "border-accent-solid bg-accent-solid text-elevated"
                  : "border-border-input bg-elevated text-ink"
              }`}
            >
              <span className="mono mr-2 text-[12px]">{index + 1}</span>
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="mt-6 grid items-start gap-4 lg:grid-cols-[1fr_1fr]">
        <div
          role="tabpanel"
          id={`how-panel-${step.id}`}
          aria-labelledby={`how-tab-${step.id}`}
          className="h-fit rounded-[var(--arch-radius-card)] border border-border bg-elevated p-6"
        >
          <h3 className="h3">{step.title}</h3>
          <p className="mt-3 text-[15px] leading-[1.6] text-body">{step.body}</p>
          <p className="mono mt-4 text-muted">fields in play · {step.focus}</p>
        </div>
        <CodeBlock label="Sample claim" code={claim} />
      </div>
    </div>
  );
}
