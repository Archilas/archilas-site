const points = [
  {
    title: "Many sources, one living record.",
    body: "Notes, chats, and threads compact into preferences, decisions, and open loops — not a chat dump.",
  },
  {
    title: "The model reasons at query time.",
    body: "It reads that memory and answers in one pass — not copy-paste retrieval.",
  },
  {
    title: "Deliver into tools you already use.",
    body: "Unsupported bridges are refused. MCP is intended, in development — not live yet.",
  },
] as const;

export function WhyBetter() {
  return (
    <section id="product" className="why-band scroll-mt-[var(--scroll-margin)] px-[var(--pad-x)] py-16 md:py-20">
      <div className="mx-auto max-w-[var(--max-width)]">
        <p className="label">Architecture</p>
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
