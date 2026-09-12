import { Reveal } from "@/components/Reveal";

const points = [
  {
    title: "Typical stacks search and paste.",
    body: "They retrieve a snippet, dump the surrounding chat, and hope the model holds the thread. Thin memory gets an invented bridge.",
  },
  {
    title: "Archilas compacts, then reasons.",
    body: "Notes become preferences, decisions, and open loops. At query time only the supported record loads. Unsupported slips are refused.",
  },
  {
    title: "One layer, every surface.",
    body: "The same living memory sits behind chat and agents. MCP support is coming — it is not live today.",
  },
] as const;

export function WhyCompare() {
  return (
    <section className="split-band scroll-mt-[var(--scroll-margin)] px-[var(--pad-x)]">
      <Reveal>
        <div className="mx-auto max-w-[760px]" data-testid="why-explain">
          <p className="label">In detail</p>
          <h2 className="h2 mt-3">Paste-search-hope is not memory.</h2>
          <p className="split-lede">
            A retrieved passage is not a decision. Archilas keeps a compact, revisable record — and will not invent
            what it does not have.
          </p>
          <ol className="slm-list">
            {points.map((point, index) => (
              <li key={point.title} className="slm-item">
                <span className="why-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="slm-copy font-medium text-ink">{point.title}</p>
                  <p className="slm-copy mt-1">{point.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>
    </section>
  );
}
