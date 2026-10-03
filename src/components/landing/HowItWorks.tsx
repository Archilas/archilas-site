import { Reveal } from "@/components/Reveal";

const STEPS = [
  {
    id: "capture",
    title: "Capture",
    body: "Archilas reads the places your team already writes things down: PRs, issues, design notes and threads.",
  },
  {
    id: "remember",
    title: "Remember",
    body: "It keeps a lasting record of decisions, changes and owners over time, not a pile of chunks.",
  },
  {
    id: "answer",
    title: "Answer",
    body: "Ask a question and get a direct answer with a citation to the source note. Asking from Cursor, Claude Code or any MCP client is coming soon.",
  },
] as const;

export function HowItWorks() {
  return (
    <section id="how" className="how-band split-band scroll-mt-[var(--scroll-margin)] px-[var(--pad-x)]">
      <div className="mx-auto max-w-[1180px]">
        <Reveal delay={60}>
          <div className="section-head">
            <p className="label">How it works</p>
            <h2 className="h2 mt-3">Capture. Remember. Answer.</h2>
          </div>
        </Reveal>
        <div className="how-steps">
          {STEPS.map((step, index) => (
            <Reveal key={step.id} delay={80 + index * 90} y={20}>
              <article className="how-step" data-testid={`how-${step.id}`}>
                <p className="how-step-index">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="how-step-title">{step.title}</h3>
                <p className="how-step-body">{step.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200} y={24}>
          <aside className="how-example band-plate is-short plate-drift" data-testid="how-example">
            <div className="plate-sky is-fjord" aria-hidden="true" />
            <div className="chrome-window how-example-window">
              <div className="demo-chrome">
                <span>Illustrative example</span>
                <span className="hero-qa-chip">Not a live query</span>
              </div>
              <div className="how-example-body">
                <p className="hero-qa-q">
                  <span className="hero-qa-label">Q</span>
                  Why did we move auth off the session service, and who signed off?
                </p>
                <div className="hero-qa-a is-on">
                  <p>
                    <span className="hero-qa-label">A</span>
                    The team moved it in March after repeated timeouts under load. Priya approved the
                    change in the infra review.
                  </p>
                  <p className="hero-qa-source">
                    Source: PR #412, design note &quot;Auth migration&quot;.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
