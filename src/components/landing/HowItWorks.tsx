"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

const steps = [
  {
    id: "notes",
    label: "Notes",
    spine: "Compact",
    line: "Every conversation, decision, and detail gets written down as a structured note. Nothing gets lost in a wall of raw text.",
    status: "Writing notes…",
    pills: [
      { text: "Chat: Can we still ship Friday?", on: true },
      { text: "Thread: Tests aren’t green yet", on: true },
      { text: "Chat: Alex asked about Monday", on: true },
    ],
  },
  {
    id: "compact",
    label: "Compact",
    spine: "Reason",
    line: "Notes get compressed into living memory — dense, structured, ready to search in milliseconds.",
    status: "Compacting into living memory…",
    pills: [
      { text: "Decision: Ship Friday if tests are green", on: true },
      { text: "Constraint: Tests still failing", on: true },
      { text: "Open loop: Alex asked about Monday", on: true },
    ],
  },
  {
    id: "retrieve",
    label: "Retrieve",
    spine: "Deliver",
    line: "At query time, Archilas pulls the exact notes your question needs — not everything, just what matters.",
    status: "Loaded the notes this question needs.",
    pills: [
      { text: "Loaded: Decision", on: true },
      { text: "Loaded: Constraint", on: true },
      { text: "Held back: open loop", on: false },
    ],
  },
  {
    id: "answer",
    label: "Answer",
    spine: "Deliver",
    line: "One clear, grounded answer. No guessing. No dump of irrelevant context.",
    status: "One grounded answer.",
    pills: [
      { text: "Yes — if tests go green.", on: true },
      { text: "Hold the Monday slip for now", on: true },
      { text: "Open loop held back", on: false },
    ],
  },
] as const;

export function HowItWorks() {
  const [id, setId] = useState<(typeof steps)[number]["id"]>("notes");
  const step = steps.find((item) => item.id === id) ?? steps[0];

  return (
    <section id="how" className="how-band scroll-mt-[var(--scroll-margin)] px-[var(--pad-x)] py-16 md:py-20">
      <div className="mx-auto max-w-[var(--max-width)]">
        <p className="label">How it works</p>
        <h2 className="h2 mt-3">Notes. Compact. Then one clear answer.</h2>
        <div className="mt-10 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <ol className="stepper">
            {steps.map((item, index) => (
              <li key={item.id}>
                <button
                  type="button"
                  className={cn("stepper-item", id === item.id && "is-on")}
                  onClick={() => setId(item.id)}
                >
                  <span className="stepper-dot" aria-hidden="true">
                    {index + 1}
                  </span>
                  <span>
                    <span className="stepper-label">
                      {item.label}
                      <span className="stepper-spine"> {item.spine}</span>
                    </span>
                    <span className="stepper-line">{item.line}</span>
                  </span>
                </button>
              </li>
            ))}
          </ol>
          <div className="how-stage">
            <div className="how-bubble">
              <p>Ship Friday?</p>
            </div>
            <p className="how-status">{step.status}</p>
            <div className="how-pills">
              {step.pills.map((pill) => (
                <span key={pill.text} className={cn("how-pill", pill.on && "is-on")}>
                  {pill.on ? "✓ " : ""}
                  {pill.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
