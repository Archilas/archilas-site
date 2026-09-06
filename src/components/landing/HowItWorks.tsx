"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

const steps = [
  {
    id: "notes",
    label: "Notes",
    line: "Chat, docs, and threads land as they are — plus a bit of noise.",
    status: "Reading sources 1/3…",
    pills: [
      { text: "Chat: Friday ship if legal signs", on: true },
      { text: "Doc: checklist, not Slack dumps", on: false },
      { text: "Thread: window still unsigned", on: false },
    ],
  },
  {
    id: "compact",
    label: "Compact",
    line: "Archilas keeps the durable lines. Living memory, not a chat log.",
    status: "Compacting 2/3…",
    pills: [
      { text: "Preference: written checklist", on: true },
      { text: "Decision: Friday after legal", on: true },
      { text: "Open loop: unsigned window", on: false },
    ],
  },
  {
    id: "answer",
    label: "Answer",
    line: "At query time — a coherent answer from that memory, not a paste.",
    status: "Retrieved.",
    pills: [
      { text: "Used: Decision", on: true },
      { text: "Used: Open loop", on: true },
      { text: "Uncited: checklist preference", on: false },
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
        <h2 className="h2 mt-3">Notes in. A record out. An answer when you ask.</h2>
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
                    <span className="stepper-label">{item.label}</span>
                    <span className="stepper-line">{item.line}</span>
                  </span>
                </button>
              </li>
            ))}
          </ol>
          <div className="how-stage">
            <div className="how-bubble">
              <p>What’s blocking launch?</p>
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
