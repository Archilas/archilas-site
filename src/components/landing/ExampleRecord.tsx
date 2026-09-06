import type { KeyboardEvent } from "react";
import { DestinationFrames } from "@/components/landing/DestinationFrames";
import { exampleRows, type HowStepId } from "@/components/landing/demo-data";

export function ExampleRecord({
  step,
  reduced,
  bare = false,
  typeIn = false,
  onRowSelect,
}: {
  step: HowStepId;
  reduced: boolean;
  bare?: boolean;
  typeIn?: boolean;
  onRowSelect?: (index: number) => void;
}) {
  const delivering = step === "deliver" || reduced;

  return (
    <figure
      className={
        bare
          ? "h-fit"
          : "h-fit rounded-[var(--arch-radius-card)] border border-border-dark bg-card-dark p-5"
      }
    >
      {bare ? null : <figcaption className="label text-text-dark/70">Example record</figcaption>}
      <dl className={bare ? "space-y-3" : "mt-4 space-y-3"}>
        {exampleRows.map((row, index) => {
          const linked = step === "reason" && index < 2;
          const quiet = step === "reason" && index === 2;
          return (
            <div
              key={row.kind}
              className={`record-row grid w-full gap-1 text-left sm:grid-cols-[7.5rem_1fr] sm:gap-4 ${
                linked ? "is-linked" : ""
              } ${quiet ? "is-quiet" : ""} ${typeIn ? "record-type-in" : ""} ${
                delivering ? "is-deliver-source" : ""
              }`}
              {...(onRowSelect
                ? {
                    role: "button",
                    tabIndex: 0,
                    onClick: () => onRowSelect(index),
                    onKeyDown: (event: KeyboardEvent<HTMLDivElement>) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        onRowSelect(index);
                      }
                    },
                  }
                : {})}
            >
              <dt className="flex flex-wrap items-baseline gap-x-2 font-mono text-[12px] uppercase tracking-[0.06em] text-text-dark/70">
                {row.kind}
                {step === "compact" && !reduced ? (
                  <span className="record-scrap-chip">{row.scrap}</span>
                ) : null}
              </dt>
              <dd className="font-mono text-[13px] leading-[1.55] text-text-dark">{row.text}</dd>
            </div>
          );
        })}
      </dl>

      {delivering ? (
        <div className="deliver-panel mt-5" aria-hidden={step !== "deliver" && !reduced}>
          <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.06em] text-text-dark/55">
            Intended delivery
          </p>
          <DestinationFrames compact line={exampleRows[0].text} />
        </div>
      ) : null}
    </figure>
  );
}
