import { Reveal } from "@/components/Reveal";

const STEPS = [
  {
    id: "capture",
    title: "Capture",
    body: "Reads PRs, issues, design notes and threads your team already writes.",
  },
  {
    id: "remember",
    title: "Remember",
    body: "Keeps a lasting record of decisions, changes and owners — not a pile of chunks.",
  },
  {
    id: "answer",
    title: "Answer",
    body: "Ask a question; get a direct answer with a citation. Cursor, Claude Code and MCP coming soon.",
  },
] as const;

export function HowItWorks() {
  return (
    <section id="how" className="how-band split-band scroll-mt-[var(--scroll-margin)] px-[var(--pad-x)]">
      <div className="mx-auto max-w-[var(--max-width)]">
        <Reveal delay={60}>
          <div className="section-head">
            <p className="label">How it works</p>
            <h2 className="h2 mt-3">Capture. Remember. Answer.</h2>
          </div>
        </Reveal>
        <div className="how-steps">
          {STEPS.map((step, index) => (
            <Reveal key={step.id} delay={80 + index * 70} y={16}>
              <article className="how-step" data-testid={`how-${step.id}`}>
                <p className="how-step-index">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="how-step-title">{step.title}</h3>
                <p className="how-step-body">{step.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
