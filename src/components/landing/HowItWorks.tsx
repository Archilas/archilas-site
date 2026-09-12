"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/cn";

const steps = [
  {
    id: "notes",
    label: "Notes",
    spine: "Compact",
    line: "Written as structured notes — not a wall of raw text.",
    status: "Written as notes.",
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
    line: "Preferences, decisions, and open loops — living memory.",
    status: "Compacted into living memory.",
    pills: [
      { text: "Preference: Ship Friday when ready", on: true },
      { text: "Decision: Don’t ship until tests are green", on: true },
      { text: "Open loop: Alex asked about Monday", on: true },
    ],
  },
  {
    id: "reason",
    label: "Reason",
    spine: "Deliver",
    line: "Only the memory this question needs. Unsupported bridges held back.",
    status: "Right memory for this question.",
    pills: [
      { text: "Ask: Ship Friday?", on: true },
      { text: "Loaded: Preference + Decision", on: true },
      { text: "Held back: Monday slip", on: false },
    ],
  },
  {
    id: "answer",
    label: "Answer",
    spine: "Deliver",
    line: "One grounded answer. No invented ship date.",
    status: "One grounded answer.",
    pills: [
      { text: "Yes — if tests go green.", on: true },
      { text: "Won’t invent a Monday ship.", on: false },
    ],
  },
] as const;

export function HowItWorks() {
  const [id, setId] = useState<(typeof steps)[number]["id"]>("notes");
  const step = steps.find((item) => item.id === id) ?? steps[0];

  return (
    <section id="how" className="how-band split-band scroll-mt-[var(--scroll-margin)] px-[var(--pad-x)]">
      <Reveal>
        <div className="band-plate is-a mx-auto max-w-[1120px]">
          <div className="split-grid">
            <div className="split-copy">
              <p className="label">How it works</p>
              <h2 className="h2 mt-3">Notes. Compact. Reason. Answer.</h2>
              <ol className="stepper mt-8">
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
            </div>
            <div className="how-stage ui-card" data-testid="how-stage">
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
      </Reveal>
    </section>
  );
}
