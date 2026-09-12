const bullets = [
  "Powered by a dedicated small model built specifically for memory — not a general chatbot model repurposed for recall.",
  "Compact, purpose-built architecture — designed to reason over your history directly, not just search and paste text.",
  "Works the same whether you're chatting or running an autonomous agent — one memory layer, every interface.",
] as const;

export function WhyBetter() {
  return (
    <section id="product" className="why-band slm-band scroll-mt-[var(--scroll-margin)] px-[var(--pad-x)] py-12 md:py-16">
      <div className="mx-auto max-w-[760px]">
        <p className="label">Why Archilas</p>
        <h2 className="h2 mt-3">Built around an SLM that reasons over compacted memory</h2>
        <p className="slm-sub">In development / early access. Pre-launch — not live today.</p>
        <ol className="slm-list">
          {bullets.map((line, index) => (
            <li key={line} className="slm-item">
              <span className="why-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="slm-copy">{line}</p>
            </li>
          ))}
        </ol>
        <p className="slm-eng">
          A small model built to reason over your compacted memory — so answers stay coherent without inventing
          bridges.
        </p>
      </div>
    </section>
  );
}
