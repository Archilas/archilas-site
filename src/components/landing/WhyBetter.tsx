const points = [
  {
    title: "Notes compact into living memory.",
    body: "Preferences, decisions, and open loops from many sources — revisable, not a chat dump.",
  },
  {
    title: "The right memory loads at query time.",
    body: "At query time the right notes and memory load for deep understanding — not copy-paste retrieval.",
  },
  {
    title: "One clear, clean answer.",
    body: "Then one answer, delivered into tools you already use. Unsupported bridges are refused. MCP is intended, in development — not live yet.",
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
