const oldChips = ["Search", "Inject all", "Tokens", "No long-term", "No time"] as const;
const usChips = ["Compact", "Reason", "Deliver"] as const;

export function CompareScroll() {
  return (
    <section
      id="compare"
      className="compare-band split-band scroll-mt-[var(--scroll-margin)] px-[var(--pad-x)]"
      data-testid="compare-scroll"
    >
      <div className="split-grid mx-auto max-w-[1120px]">
        <div className="split-copy">
          <p className="label">Compare</p>
          <h2 className="h2 mt-3">The old way vs Archilas</h2>
          <p className="split-lede">Same problem. Two ways to handle memory.</p>
          <a
            href="#how"
            data-testid="why-explain"
            className="mt-7 inline-flex text-[15px] font-medium text-ink underline-offset-4 hover:underline"
          >
            See how it works →
          </a>
        </div>
        <div className="band-plate compare-plate plate-drift">
          <div className="plate-sky is-fjord" aria-hidden="true" />
          <div className="frost-stack">
            <div className="frost-panel is-dim" data-testid="compare-typical">
              <p className="ui-kicker">The old way</p>
              <div className="chip-row">
                {oldChips.map((chip) => (
                  <span key={chip} className="chip">
                    {chip}
                  </span>
                ))}
              </div>
              <p className="compare-micro">Search. Paste. Hope.</p>
            </div>
            <div className="frost-panel" data-testid="compare-ours">
              <p className="ui-kicker">Archilas</p>
              <div className="chip-row">
                {usChips.map((chip) => (
                  <span key={chip} className="chip is-on">
                    {chip}
                  </span>
                ))}
              </div>
              <p className="compare-micro">Compact. Reason. Deliver.</p>
              <p className="compare-honest">MCP coming soon — not live yet.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
