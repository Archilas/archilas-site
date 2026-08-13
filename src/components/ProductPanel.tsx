/** Dark product surface — the Resend/Cursor contrast move on a light page. */
export function ProductPanel() {
  return (
    <div className="hero-rise overflow-hidden rounded-sm border border-panel-line bg-panel text-panel-fg shadow-[0_24px_80px_rgba(17,17,19,0.18)]">
      <div className="flex items-center gap-2 border-b border-panel-line px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a3e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a3e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a3e]" />
        <span className="mono ml-2 text-[11px] text-panel-muted">mcp://archilas/memory</span>
        <span className="mono ml-auto text-[11px] text-panel-muted">live</span>
      </div>

      <div className="grid md:grid-cols-[148px_1fr]">
        <aside className="hidden border-r border-panel-line p-3 md:block">
          <p className="mono text-[10px] uppercase tracking-[0.14em] text-panel-muted">tools</p>
          <ul className="mono mt-3 space-y-1 text-[12px]">
            <li className="rounded-sm bg-white/5 px-2 py-1.5 text-panel-fg">memory.query</li>
            <li className="px-2 py-1.5 text-panel-muted">memory.write</li>
            <li className="px-2 py-1.5 text-panel-muted">memory.resolve</li>
          </ul>
        </aside>

        <div className="mono space-y-3 p-4 text-[12.5px] leading-6">
          <p className="line-in text-panel-muted">$ archilas session hydrate</p>
          <p className="line-in">
            <span className="text-panel-muted">→</span> memory.query{" "}
            <span className="text-panel-muted">topic=&quot;deploy blockers&quot;</span>
          </p>
          <pre className="line-in overflow-x-auto rounded-sm border border-panel-line bg-black/40 p-3 text-[12px] text-panel-fg">{`{
  decision: "Switched inference host",
  reason:   "rate limits blocked deploys",
  related:  ["API keys", "CI scripts"],
  status:   "composed"
}`}</pre>
          <p className="line-in text-panel-muted">← push context → host:cursor</p>
          <p className="line-in">
            grounded · 3 facts · 0 invented
            <span className="caret" aria-hidden />
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-panel-line px-3 py-2 mono text-[10px] text-panel-muted">
        <span>42ms</span>
        <span>no fabricate</span>
      </div>
    </div>
  );
}
