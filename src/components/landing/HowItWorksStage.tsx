"use client";

import { useEffect, useState } from "react";
import { ExampleRecord } from "@/components/landing/ExampleRecord";
import { HowItWorksStepper } from "@/components/landing/HowItWorksStepper";
import { HOW_STEP_MS, howSteps } from "@/components/landing/demo-data";
import { usePausedLoop } from "@/lib/use-paused-loop";

export function HowItWorksStage() {
  const { index, setIndex, paused, held, toggleHold, reduced, bind } = usePausedLoop(
    howSteps.length,
    HOW_STEP_MS,
  );
  const step = howSteps[index];
  const [showType, setShowType] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowType(false), 700);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div data-paused={paused || reduced} {...bind}>
      <HowItWorksStepper active={index} onSelect={setIndex} />
      <div
        role="tabpanel"
        id="how-panel-record"
        aria-labelledby={`how-tab-${step.id}`}
        className="px-5 pb-5 pt-5 sm:px-6"
      >
        <ExampleRecord
          key={reduced ? "static" : step.id}
          step={step.id}
          reduced={reduced}
          bare
          typeIn={showType && !reduced && step.id === "compact"}
          onRowSelect={() => setIndex(1)}
        />
        <p className="mt-4 text-center text-[14px] text-text-dark/75" aria-live="polite">
          {step.caption}
        </p>
        {reduced ? null : (
          <div className="mt-3 flex items-center justify-center gap-3">
            <button
              type="button"
              className="rounded-[var(--arch-radius-control)] border border-border-dark px-2.5 py-1 font-mono text-[11px] text-text-dark/80 hover:text-text-dark"
              aria-pressed={held}
              onClick={toggleHold}
            >
              {held ? "Play" : "Pause"}
            </button>
            <p className="font-mono text-[11px] text-text-dark/45">
              {held ? "Paused" : paused ? "Paused on hover" : "Click a step"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
