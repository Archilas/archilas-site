const oldWay = [
  { k: "Search", v: "Hunt for whatever seems relevant." },
  { k: "Inject everything", v: "Dump it all into the prompt." },
  { k: "Token cost", v: "That dump often burns a lot of tokens." },
  { k: "No long-term reasoning", v: "There’s no lasting picture to think with." },
  {
    k: "No sense of time",
    v: "What changed, what’s outdated, what still matters — unclear.",
  },
] as const;

const ours = [
  { k: "Compact", v: "Preferences, decisions, open loops — kept, not dumped." },
  { k: "Reason", v: "Thinks with that record when it supports the answer." },
  { k: "Deliver", v: "Clear answers into the tools you already use." },
] as const;

export function CompareScroll() {
  return (
    <section
      id="compare"
      className="compare-band split-band scroll-mt-[var(--scroll-margin)] px-[var(--pad-x)]"
      data-testid="compare-scroll"
    >
      <div className="band-plate compare-plate plate-drift mx-auto w-full max-w-[1120px]">
        <div className="plate-sky" aria-hidden="true" />
        <div className="compare-head">
          <p className="label">Compare</p>
          <h2 className="h2 compare-title">The old way vs Archilas</h2>
          <p className="split-lede">Same problem. Two ways to handle memory.</p>
        </div>
        <div className="compare-cols">
          <div className="compare-side is-old" data-testid="compare-typical">
            <h3 className="compare-side-title">The old way</h3>
            <p className="split-lede">Find bits of the past. Stuff them into the prompt. Hope it works.</p>
            <ul className="compare-beats">
              {oldWay.map((beat) => (
                <li key={beat.k}>
                  <span className="ui-kicker">{beat.k}</span>
                  <p>{beat.v}</p>
                </li>
              ))}
            </ul>
            <p className="compare-micro">Search. Paste. Hope.</p>
          </div>
          <div className="compare-side is-us" data-testid="compare-ours">
            <h3 className="compare-side-title">How Archilas is different</h3>
            <p className="split-lede">Keep a living record. Reason over it when you ask.</p>
            <ul className="compare-beats">
              {ours.map((beat) => (
                <li key={beat.k}>
                  <span className="ui-kicker">{beat.k}</span>
                  <p>{beat.v}</p>
                </li>
              ))}
            </ul>
            <p className="compare-micro">Compact. Reason. Deliver.</p>
            <p className="compare-honest">
              Built for Claude, ChatGPT, and Cursor. MCP coming soon — not live yet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
