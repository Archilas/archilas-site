import { Reveal } from "@/components/Reveal";

const AUDIENCES = [
  {
    title: "Eng teams & leads",
    body: "Ship with Cursor and Claude Code. Keep decisions visible across the team.",
  },
  {
    title: "New engineers",
    body: "Answer “why is it built this way?” from the record — not a Slack archaeology dig.",
  },
  {
    title: "Coding agents",
    body: "Give agents lasting team context so they stop rediscovering settled decisions.",
  },
  {
    title: "Why / when / who",
    body: "Direct answers from history over time, each with a citation to the source note.",
  },
] as const;

export function WhoFor() {
  return (
    <section id="who" className="who-band split-band scroll-mt-[var(--scroll-margin)] px-[var(--pad-x)]">
      <div className="mx-auto max-w-[var(--max-width)]">
        <Reveal delay={60}>
          <div className="section-head">
            <p className="label">Who it&apos;s for</p>
            <h2 className="h2 mt-3">Teams that ship with agents.</h2>
          </div>
        </Reveal>
        <div className="who-grid">
          {AUDIENCES.map((item, index) => (
            <Reveal key={item.title} delay={70 + index * 60} y={14}>
              <article className="who-card">
                <h3 className="who-card-title">{item.title}</h3>
                <p className="who-card-body">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
