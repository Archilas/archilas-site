"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

const steps = [
  {
    id: "notes",
    label: "Notes",
    spine: "Compact",
    line: "Chat, a calendar note, and a thread land as they are — plus a bit of noise.",
    status: "Reading notes 1/3…",
    pills: [
      { text: "Chat: café Fridays, strong flat white", on: true },
      { text: "Calendar: mornings stay open", on: false },
      { text: "Thread: Friday coffee still open", on: false },
    ],
  },
  {
    id: "compact",
    label: "Compact",
    spine: "Reason",
    line: "Durable prefs, decisions, and open loops — living memory, not a chat dump.",
    status: "Compacting 2/3…",
    pills: [
      { text: "Preference: café Fridays + flat white", on: true },
      { text: "Decision: deep work from 10", on: true },
      { text: "Open loop: Friday coffee unscheduled", on: false },
    ],
  },
  {
    id: "answer",
    label: "Answer",
    spine: "Deliver",
    line: "At query time the right notes and memory load — one clear, clean answer.",
    status: "Loaded the right context.",
    pills: [
      { text: "Loaded: Preference", on: true },
      { text: "Loaded: Decision", on: true },
      { text: "Held back: open loop", on: false },
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
              <p>When should we book Friday?</p>
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
