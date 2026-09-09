const points = [
  {
    title: "Built for agents, not chat windows.",
    body: "Memory that scales with real work, not just conversation history.",
  },
  {
    title: "Fast and cheap.",
    body: "Retrieval in milliseconds, not full-document re-reads on every query.",
  },
  {
    title: "Honest by design.",
    body: "When something’s genuinely unclear, Archilas says so instead of guessing.",
  },
] as const;

export function WhyBetter() {
  return (
    <section id="product" className="why-band scroll-mt-[var(--scroll-margin)] px-[var(--pad-x)] py-16 md:py-20">
      <div className="mx-auto max-w-[var(--max-width)]">
        <p className="label">Why Archilas</p>
        <h2 className="h2 mt-3 max-w-xl">Built different from paste memory.</h2>
        <div className="why-grid">
          {points.map((point, index) => (
            <article key={point.title} className="why-card">
              <span className="why-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="why-title">{point.title}</h3>
              <p className="why-body">{point.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
