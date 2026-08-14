/** Soft dark product surface: a memory inspector, not a fake terminal. */
export function ProductPanel() {
  return (
    <div className="relative hero-rise">
      <div
        aria-hidden
        className="absolute inset-3 translate-x-3 translate-y-4 rounded-[18px] border border-white/[0.06] bg-white/[0.03]"
      />
      <div className="panel-dark relative float-soft">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <div className="flex items-center gap-2.5">
            <span className="mark" aria-hidden />
            <span className="text-[13px] font-medium tracking-tight text-ink">Memory</span>
          </div>
          <span className="mono rounded-[8px] border border-border bg-white/[0.03] px-2 py-0.5 text-[10px] text-muted">
            live
          </span>
        </div>

        <div className="border-b border-border px-4 py-2.5">
          <p className="mono text-[11px] text-muted">query · deploy blockers</p>
        </div>

        <ul className="divide-y divide-border">
          <li className="line-in px-4 py-3.5">
            <div className="flex items-baseline justify-between gap-3">
              <p className="text-[13px] font-medium tracking-tight text-ink">Switched inference host</p>
              <p className="mono text-[10px] text-muted">decision</p>
            </div>
            <p className="mt-1 text-[12.5px] leading-relaxed text-muted">
              Rate limits blocked deploys
            </p>
          </li>
          <li className="line-in px-4 py-3.5">
            <div className="flex items-baseline justify-between gap-3">
              <p className="text-[13px] font-medium tracking-tight text-ink">Compact over paste</p>
              <p className="mono text-[10px] text-muted">preference</p>
            </div>
            <p className="mt-1 text-[12.5px] leading-relaxed text-muted">
              Do not dump transcripts into the prompt
            </p>
          </li>
          <li className="line-in px-4 py-3.5">
            <div className="flex items-baseline justify-between gap-3">
              <p className="text-[13px] font-medium tracking-tight text-ink">API keys in CI</p>
              <p className="mono text-[10px] text-muted">open loop</p>
            </div>
            <p className="mt-1 text-[12.5px] leading-relaxed text-muted">Still unresolved</p>
          </li>
        </ul>

        <div className="flex items-center justify-between border-t border-border px-4 py-2.5">
          <p className="mono text-[10px] text-muted">composed · 3 facts · 0 invented</p>
          <p className="mono text-[10px] text-muted">
            cursor
            <span className="caret" aria-hidden />
          </p>
        </div>
      </div>
    </div>
  );
}
