import type { KeyboardEvent } from "react";
import { demoHosts, exampleRows, type HowStepId } from "@/components/landing/demo-data";

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
              } ${quiet ? "is-quiet" : ""} ${typeIn ? "record-type-in" : ""}`}
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

      <ul
        className={`record-hosts mt-5 flex min-h-7 flex-wrap items-center justify-center gap-x-6 gap-y-2 ${
          step === "deliver" || reduced ? "is-on" : ""
        }`}
        aria-hidden={step !== "deliver" && !reduced}
      >
        {demoHosts.map((host) => (
          <li key={host} className="text-[13px] font-medium not-italic text-text-dark/80">
            {host}
          </li>
        ))}
      </ul>
    </figure>
  );
}
