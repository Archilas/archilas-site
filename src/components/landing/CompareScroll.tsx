const oldWay = [
  "Searches for “relevant” snippets",
  "Injects everything into the prompt",
  "Often costs many tokens",
  "No long-term reasoning",
  "No sense of what changed or what’s still open",
] as const;

const ours = [
  "Keeps a living, compacted record",
  "Reasons over it when it can",
  "Remembers what changed and what’s still open",
  "Doesn’t dump the world into every prompt",
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
        <p className="label">Compare</p>
        <div className="compare-cols">
          <div className="compare-side is-old" data-testid="compare-typical">
            <h2 className="h2 compare-title">The old way</h2>
            <p className="split-lede">You hunt old chats and paste scraps into the prompt.</p>
            <p className="compare-micro">Search. Paste. Hope.</p>
            <ul className="compare-beats">
              {oldWay.map((beat) => (
                <li key={beat}>{beat}</li>
              ))}
            </ul>
          </div>
          <div className="compare-side is-us" data-testid="compare-ours">
            <h2 className="h2 compare-title">Archilas</h2>
            <p className="split-lede">You keep what matters — and get a clear answer when you ask.</p>
            <p className="compare-micro">Compact. Reason. Deliver.</p>
            <ul className="compare-beats">
              {ours.map((beat) => (
                <li key={beat}>{beat}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
