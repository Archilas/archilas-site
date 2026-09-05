const rows = [
  {
    kind: "preference",
    text: "Prefer compact records over pasted history.",
  },
  {
    kind: "decision",
    text: "Left the prior vendor after repeated rate-limit failures.",
  },
  {
    kind: "open loop",
    text: "Rotate API keys in CI before the next deploy.",
  },
] as const;

export function ExampleRecord() {
  return (
    <figure className="h-fit rounded-[var(--arch-radius-card)] border border-border-dark bg-card-dark p-5">
      <figcaption className="label text-text-dark/70">Example record</figcaption>
      <dl className="mt-4 space-y-4">
        {rows.map((row) => (
          <div key={row.kind} className="grid gap-1 sm:grid-cols-[7.5rem_1fr] sm:gap-4">
            <dt className="font-mono text-[12px] uppercase tracking-[0.06em] text-text-dark/70">
              {row.kind}
            </dt>
            <dd className="font-mono text-[13px] leading-[1.55] text-text-dark">{row.text}</dd>
          </div>
        ))}
      </dl>
    </figure>
  );
}
