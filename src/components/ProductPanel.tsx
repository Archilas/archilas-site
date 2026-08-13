/** Soft dark product surface with memory session chrome. */
export function ProductPanel() {
  return (
    <div className="panel-dark hero-rise float-soft">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="mono ml-2 text-[11px] text-muted">mcp://archilas/memory</span>
        <span className="mono ml-auto rounded-full border border-border px-2 py-0.5 text-[10px] text-muted">
          live
        </span>
      </div>

      <div className="grid md:grid-cols-[150px_1fr]">
        <aside className="hidden border-r border-border p-4 md:block">
          <p className="mono text-[10px] uppercase tracking-[0.14em] text-muted">tools</p>
          <ul className="mono mt-3 space-y-1.5 text-[12px]">
            <li className="rounded-full bg-white/[0.06] px-3 py-1.5 text-ink">memory.query</li>
            <li className="rounded-full px-3 py-1.5 text-muted">memory.write</li>
            <li className="rounded-full px-3 py-1.5 text-muted">memory.resolve</li>
          </ul>
        </aside>

        <div className="mono space-y-3 p-4 text-[12.5px] leading-6 text-ink/90">
          <p className="line-in text-muted">$ archilas session hydrate</p>
          <p className="line-in">
            <span className="text-muted">→</span> memory.query{" "}
            <span className="text-muted">topic=&quot;deploy blockers&quot;</span>
          </p>
          <pre className="line-in overflow-x-auto rounded-2xl border border-border bg-black/25 p-4 text-[12px] text-ink/85">{`{
  decision: "Switched inference host",
  reason:   "rate limits blocked deploys",
  related:  ["API keys", "CI scripts"],
  status:   "composed"
}`}</pre>
          <p className="line-in text-muted">← push context → host:cursor</p>
          <p className="line-in">
            grounded · 3 facts · 0 invented
            <span className="caret" aria-hidden />
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-border px-4 py-2.5 mono text-[10px] text-muted">
        <span>42ms</span>
        <span>no fabricate</span>
      </div>
    </div>
  );
}
