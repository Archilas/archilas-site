const oldChips = ["Search", "Dump context", "Burn tokens", "Forget next week", "No sense of time"] as const;
const usChips = ["Compact", "Reason", "Deliver"] as const;

export function CompareScroll() {
  return (
    <section
      id="compare"
      className="compare-band split-band scroll-mt-[var(--scroll-margin)] px-[var(--pad-x)]"
      data-testid="compare-scroll"
    >
      <div className="split-grid is-compare mx-auto max-w-[1180px]">
        <div className="split-copy">
          <p className="label">Compare</p>
          <h2 className="h2 mt-3">The old way vs Archilas</h2>
          <p className="split-lede">Paste everything in — or keep only what matters.</p>
          <a
            href="#how"
            data-testid="why-explain"
            className="mt-7 inline-flex text-[15px] font-medium text-ink underline-offset-4 hover:underline"
          >
            See how it works →
          </a>
        </div>
        <div className="band-plate compare-plate is-tall plate-drift">
          <div className="plate-sky is-fjord" aria-hidden="true" />
          <div className="frost-stack">
            <div className="chrome-window is-dim" data-testid="compare-typical">
              <div className="demo-chrome">
                <span>The old way</span>
              </div>
              <div className="chrome-body">
                <div className="chip-row">
                  {oldChips.map((chip) => (
                    <span key={chip} className="chip">
                      {chip}
                    </span>
                  ))}
                </div>
                <p className="compare-micro">Hope the model remembers.</p>
              </div>
            </div>
            <div className="chrome-window is-ours" data-testid="compare-ours">
              <div className="demo-chrome">
                <span>Archilas</span>
              </div>
              <div className="chrome-body">
                <div className="chip-row">
                  {usChips.map((chip) => (
                    <span key={chip} className="chip is-on">
                      {chip}
                    </span>
                  ))}
                </div>
                <p className="compare-micro">Prefs, decisions, open loops — ready when you ask.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
