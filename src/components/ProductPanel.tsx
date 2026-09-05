import Image from "next/image";

/** Soft dark product surface: a memory inspector, not a fake terminal. */
export function ProductPanel() {
  return (
    <div className="relative hero-rise">
      <div
        aria-hidden
        className="absolute inset-3 translate-x-3 translate-y-4 rounded-[var(--arch-radius-card)] border border-border bg-surface"
      />
      <div className="panel-dark relative float-soft">
        <div className="flex items-center justify-between border-b border-border-dark px-4 py-3">
          <div className="flex items-center gap-2.5">
            <Image
              src="/archilas-logo.png"
              alt=""
              width={188}
              height={149}
              className="h-5 w-auto brightness-0 invert"
            />
            <span className="text-[13px] font-medium tracking-tight text-text-dark">Memory</span>
          </div>
          <span className="mono rounded-[var(--arch-radius-control)] border border-border-dark px-2 py-0.5 text-[10px] text-text-dark/70">
            live
          </span>
        </div>

        <div className="border-b border-border-dark px-4 py-2.5">
          <p className="mono text-[11px] text-text-dark/70">query · deploy blockers</p>
        </div>

        <ul className="divide-y divide-border-dark">
          <li className="line-in px-4 py-3.5">
            <div className="flex items-baseline justify-between gap-3">
              <p className="text-[13px] font-medium tracking-tight text-text-dark">
                Switched inference host
              </p>
              <p className="mono text-[10px] text-text-dark/70">decision</p>
            </div>
            <p className="mt-1 text-[12.5px] leading-relaxed text-text-dark/70">
              Rate limits blocked deploys
            </p>
          </li>
          <li className="line-in px-4 py-3.5">
            <div className="flex items-baseline justify-between gap-3">
              <p className="text-[13px] font-medium tracking-tight text-text-dark">
                Compact over paste
              </p>
              <p className="mono text-[10px] text-text-dark/70">preference</p>
            </div>
            <p className="mt-1 text-[12.5px] leading-relaxed text-text-dark/70">
              Do not dump transcripts into the prompt
            </p>
          </li>
          <li className="line-in px-4 py-3.5">
            <div className="flex items-baseline justify-between gap-3">
              <p className="text-[13px] font-medium tracking-tight text-text-dark">API keys in CI</p>
              <p className="mono text-[10px] text-text-dark/70">open loop</p>
            </div>
            <p className="mt-1 text-[12.5px] leading-relaxed text-text-dark/70">Still unresolved</p>
          </li>
        </ul>

        <div className="flex items-center justify-between border-t border-border-dark px-4 py-2.5">
          <p className="mono text-[10px] text-text-dark/70">composed · 3 facts · 0 invented</p>
          <p className="mono text-[10px] text-text-dark/70">
            cursor
            <span className="caret" aria-hidden />
          </p>
        </div>
      </div>
    </div>
  );
}
