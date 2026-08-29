import Image from "next/image";

/** Soft dark product surface: a memory inspector, not a fake terminal. */
export function ProductPanel() {
  return (
    <div className="relative hero-rise">
      <div
        aria-hidden
        className="absolute inset-3 translate-x-3 translate-y-4 rounded-[18px] border border-black/[0.06] bg-black/[0.03]"
      />
      <div className="panel-dark relative float-soft text-[#ececee]">
        <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-3">
          <div className="flex items-center gap-2.5">
            <Image src="/archilas-logo.png" alt="" width={188} height={149} className="h-5 w-auto brightness-0 invert" />
            <span className="text-[13px] font-medium tracking-tight">Memory</span>
          </div>
          <span className="mono rounded-[8px] border border-white/[0.1] bg-white/[0.04] px-2 py-0.5 text-[10px] text-[#9b9ba3]">
            live
          </span>
        </div>

        <div className="border-b border-white/[0.08] px-4 py-2.5">
          <p className="mono text-[11px] text-[#9b9ba3]">query · deploy blockers</p>
        </div>

        <ul className="divide-y divide-white/[0.08]">
          <li className="line-in px-4 py-3.5">
            <div className="flex items-baseline justify-between gap-3">
              <p className="text-[13px] font-medium tracking-tight">Switched inference host</p>
              <p className="mono text-[10px] text-[#9b9ba3]">decision</p>
            </div>
            <p className="mt-1 text-[12.5px] leading-relaxed text-[#9b9ba3]">
              Rate limits blocked deploys
            </p>
          </li>
          <li className="line-in px-4 py-3.5">
            <div className="flex items-baseline justify-between gap-3">
              <p className="text-[13px] font-medium tracking-tight">Compact over paste</p>
              <p className="mono text-[10px] text-[#9b9ba3]">preference</p>
            </div>
            <p className="mt-1 text-[12.5px] leading-relaxed text-[#9b9ba3]">
              Do not dump transcripts into the prompt
            </p>
          </li>
          <li className="line-in px-4 py-3.5">
            <div className="flex items-baseline justify-between gap-3">
              <p className="text-[13px] font-medium tracking-tight">API keys in CI</p>
              <p className="mono text-[10px] text-[#9b9ba3]">open loop</p>
            </div>
            <p className="mt-1 text-[12.5px] leading-relaxed text-[#9b9ba3]">Still unresolved</p>
          </li>
        </ul>

        <div className="flex items-center justify-between border-t border-white/[0.08] px-4 py-2.5">
          <p className="mono text-[10px] text-[#9b9ba3]">composed · 3 facts · 0 invented</p>
          <p className="mono text-[10px] text-[#9b9ba3]">
            cursor
            <span className="caret" aria-hidden />
          </p>
        </div>
      </div>
    </div>
  );
}
