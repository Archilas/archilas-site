"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/cn";

const steps = [
  {
    id: "notes",
    label: "Notes",
    status: "Written as notes.",
    ask: "Meet Tuesday?",
    pills: [
      { text: "Chat: Can we still meet Tuesday?", on: true },
      { text: "Thread: Deck isn’t ready yet", on: true },
      { text: "Chat: Sam asked about the recap", on: true },
    ],
  },
  {
    id: "compact",
    label: "Compact",
    status: "Compacted into living memory.",
    ask: "Meet Tuesday?",
    pills: [
      { text: "Preference: Meet Tuesday when the deck is ready", on: true },
      { text: "Decision: Don’t meet until the deck is ready", on: true },
      { text: "Open loop: Sam asked about the recap", on: true },
    ],
  },
  {
    id: "reason",
    label: "Reason",
    status: "Right memory for this question.",
    ask: "Meet Tuesday?",
    pills: [
      { text: "Ask: Meet Tuesday?", on: true },
      { text: "Loaded: Preference + Decision", on: true },
      { text: "Held back: recap slip", on: false },
    ],
  },
  {
    id: "answer",
    label: "Answer",
    status: "One grounded answer.",
    ask: "Meet Tuesday?",
    pills: [
      { text: "Yes — if the deck is ready.", on: true },
      { text: "Won’t invent a new time.", on: false },
    ],
  },
] as const;

export function HowItWorks() {
  const [id, setId] = useState<(typeof steps)[number]["id"]>("notes");
  const step = steps.find((item) => item.id === id) ?? steps[0];

  return (
    <section id="how" className="how-band split-band scroll-mt-[var(--scroll-margin)] px-[var(--pad-x)]">
      <Reveal>
        <div className="split-grid mx-auto max-w-[1120px]">
          <div className="split-copy">
            <p className="label">How it works</p>
            <h2 className="h2 mt-3">Notes in. Answers out.</h2>
            <p className="split-lede">Compact what matters. Reason when you ask.</p>
          </div>
          <div className="band-plate is-a plate-drift">
            <div className="plate-sky is-alpine" aria-hidden="true" />
            <div className="frost-panel how-stage" data-testid="how-stage">
              <div className="chip-row how-tabs">
                {steps.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={cn("chip", id === item.id && "is-on")}
                    onClick={() => setId(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <div className="how-bubble">
                <p>{step.ask}</p>
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
