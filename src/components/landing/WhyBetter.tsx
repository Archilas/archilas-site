import { Reveal } from "@/components/Reveal";

const CARDS = [
  {
    line: "Other memory tools store facts. Archilas answers why.",
    support: "Decisions and reasons — not a bag of recalled snippets.",
  },
  {
    line: "Search returns chunks. Archilas cites the decision.",
    support: "Every answer points at the note that settled it.",
  },
  {
    line: "Agents forget between sessions. Archilas remembers your team's history.",
    support: "Lasting context for people and agents, session after session.",
  },
] as const;

export function WhyBetter() {
  return (
    <section id="why" className="why-band scroll-mt-[var(--scroll-margin)] px-[var(--pad-x)]">
      <div className="mx-auto max-w-[var(--max-width)]">
        <Reveal delay={60}>
          <div className="section-head">
            <p className="label">Why it&apos;s different</p>
            <h2 className="h2 mt-3">Built for team history, not fact storage.</h2>
          </div>
        </Reveal>
        <div className="contrast-grid" data-testid="contrast-cards">
          {CARDS.map((card, index) => (
            <Reveal key={card.line} delay={80 + index * 70} y={16}>
              <article className="contrast-card">
                <h3 className="contrast-line">{card.line}</h3>
                <p className="contrast-support">{card.support}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
