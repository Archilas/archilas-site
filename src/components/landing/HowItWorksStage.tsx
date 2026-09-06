"use client";

import { ExampleRecord } from "@/components/landing/ExampleRecord";
import { HowItWorksStepper } from "@/components/landing/HowItWorksStepper";
import { howSteps, STEP_MS } from "@/components/landing/demo-data";
import { usePausedLoop } from "@/lib/use-paused-loop";

export function HowItWorksStage() {
  const { index, setIndex, paused, reduced, bind } = usePausedLoop(howSteps.length, STEP_MS);
  const step = howSteps[index];

  return (
    <div className="mx-auto mt-8 max-w-2xl" data-paused={paused || reduced} {...bind}>
      <HowItWorksStepper active={index} onSelect={setIndex} />
      <div
        role="tabpanel"
        id="how-panel-record"
        aria-labelledby={`how-tab-${step.id}`}
        className="pt-6"
      >
        <ExampleRecord key={reduced ? "static" : step.id} step={step.id} reduced={reduced} />
        <p className="mt-4 text-center text-[15px] text-text-dark/80" aria-live="polite">
          {step.caption}
        </p>
        {reduced ? null : (
          <p className="mt-2 text-center font-mono text-[12px] text-text-dark/50">
            {paused ? "Paused" : "Hover to pause"}
          </p>
        )}
      </div>
    </div>
  );
}
