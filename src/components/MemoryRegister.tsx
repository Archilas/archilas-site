const entries = [
  {
    id: "01",
    kind: "decision",
    title: "Switched inference host",
    note: "Rate limits blocked deploys",
  },
  {
    id: "02",
    kind: "preference",
    title: "Compact over paste",
    note: "Do not dump transcripts into the prompt",
  },
  {
    id: "03",
    kind: "open loop",
    title: "API keys in CI",
    note: "Still unresolved",
  },
  {
    id: "04",
    kind: "composed",
    title: "3 facts · 0 invented",
    note: "Ready for Cursor",
    live: true,
  },
];

/** Living index: the product, not a fake IDE window. */
export function MemoryRegister() {
  return (
    <div className="register">
      <div className="flex items-center justify-between px-4 py-3">
        <p className="kicker">Register</p>
        <p className="mono text-[10px] tracking-[0.14em] text-muted">
          <span className="tick" aria-hidden />
          live
        </p>
      </div>
      {entries.map((row) => (
        <div key={row.id} className={`register-row ${row.live ? "register-live" : ""}`}>
          <span className="text-muted">{row.id}</span>
          <span className="kind">{row.kind}</span>
          <span>
            <span className="block text-ink">{row.title}</span>
            <span className="mt-0.5 block text-[11px] text-muted">{row.note}</span>
          </span>
        </div>
      ))}
    </div>
  );
}
