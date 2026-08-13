/** Product chrome for the homepage — MCP memory session, Resend/Cursor density. */
export function ProductPanel() {
  return (
    <div className="panel fade-in shadow-[0_1px_0_rgba(22,22,26,0.04)]">
      <div className="panel-bar">
        <span className="panel-dot" />
        <span className="panel-dot" />
        <span className="panel-dot" />
        <span className="ml-2">mcp://archilas/memory</span>
        <span className="ml-auto text-[11px]">connected</span>
      </div>
      <div className="grid border-b border-border md:grid-cols-[140px_1fr]">
        <div className="hidden border-r border-border bg-surface p-3 md:block">
          <p className="mono text-[11px] text-muted">tools</p>
          <ul className="mt-3 space-y-2 mono text-[12px] text-ink">
            <li className="rounded bg-bg px-2 py-1.5 border border-border">memory.query</li>
            <li className="px-2 py-1.5 text-muted">memory.write</li>
            <li className="px-2 py-1.5 text-muted">memory.resolve</li>
          </ul>
        </div>
        <div className="p-4 mono text-[12px] leading-6">
          <p className="text-muted">{"// session hydrate"}</p>
          <p className="mt-3">
            <span className="text-muted">→</span> memory.query{" "}
            <span className="text-muted">{"({ topic: \"infra migration\" })"}</span>
          </p>
          <pre className="mt-3 overflow-x-auto rounded-md border border-border bg-surface p-3 text-[12px] text-ink">{`{
  "decision": "Switched inference host",
  "reason": "rate limits blocked deploys",
  "related": ["API keys", "CI scripts"],
  "confidence": "high"
}`}</pre>
          <p className="mt-4 text-muted">{"// compose for host (Cursor)"}</p>
          <p className="mt-2">
            <span className="text-muted">←</span> grounded context · 3 facts · 0 invented
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between px-4 py-2.5 text-[11px] text-muted">
        <span className="mono">latency 42ms</span>
        <span className="mono">no fabricate · compose ok</span>
      </div>
    </div>
  );
}
