import { demoHosts, exampleRows, type HowStepId } from "@/components/landing/demo-data";

export function ExampleRecord({
  step,
  reduced,
}: {
  step: HowStepId;
  reduced: boolean;
}) {
  return (
    <figure className="h-fit rounded-[var(--arch-radius-card)] border border-border-dark bg-card-dark p-5">
      <figcaption className="label text-text-dark/70">Example record</figcaption>
      <dl className="mt-4 space-y-4">
        {exampleRows.map((row, index) => {
          const linked = step === "reason" && index < 2;
          const quiet = step === "reason" && index === 2;
          return (
            <div
              key={row.kind}
              className={`record-row relative grid gap-1 sm:grid-cols-[7.5rem_1fr] sm:gap-4 ${
                linked ? "is-linked" : ""
              } ${quiet ? "is-quiet" : ""} ${
                step === "compact" && !reduced ? "is-forming" : ""
              }`}
            >
              <dt className="font-mono text-[12px] uppercase tracking-[0.06em] text-text-dark/70">
                {row.kind}
              </dt>
              <dd className="relative font-mono text-[13px] leading-[1.55] text-text-dark">
                {row.text}
                {step === "compact" && !reduced ? (
                  <span className="record-scrap" aria-hidden>
                    {row.scrap}
                  </span>
                ) : null}
              </dd>
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
