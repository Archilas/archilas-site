"use client";

import { ExampleRecord } from "@/components/landing/ExampleRecord";
import { HowItWorksStepper } from "@/components/landing/HowItWorksStepper";
import { HOW_STEP_MS, howSteps } from "@/components/landing/demo-data";
import { useDrivenDemo } from "@/lib/use-driven-demo";

export function HowItWorksStage() {
  const { index, select, driven, playing, reduced, bind } = useDrivenDemo(
    howSteps.length,
    HOW_STEP_MS,
  );
  const step = howSteps[index];

  return (
    <div data-paused={!playing} {...bind}>
      <HowItWorksStepper active={index} onSelect={select} playing={playing} />
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
          onRowSelect={() => select(1)}
        />
        <p className="mt-4 text-center text-[14px] text-text-dark/75" aria-live="polite">
          {step.caption}
        </p>
        {reduced ? null : (
          <p className="mt-2 text-center font-mono text-[11px] text-text-dark/45">
            {driven ? "Your control — click a step or a row" : "Click a step to drive · hover pauses"}
          </p>
        )}
      </div>
    </div>
  );
}
