import { Reveal } from "@/components/Reveal";

const AUDIENCES = [
  {
    title: "Engineering teams & eng leads",
    body: "Building with Cursor and Claude Code (integrations coming soon). Keep decisions visible across the team.",
  },
  {
    title: "Onboarding new engineers",
    body: "Answer “why is it built this way?” from the record instead of hunting through old PRs and Slack.",
  },
  {
    title: "Agents that keep guessing",
    body: "Give coding agents lasting team context so they stop rediscovering what the team already decided.",
  },
  {
    title: "Why / when / who questions",
    body: "Direct answers from team history over time, with a citation to the source note behind each one.",
  },
] as const;

export function WhoFor() {
  return (
    <section id="who" className="who-band split-band scroll-mt-[var(--scroll-margin)] px-[var(--pad-x)]">
      <div className="mx-auto max-w-[1180px]">
        <Reveal delay={60}>
          <div className="section-head">
            <p className="label">Who it&apos;s for</p>
            <h2 className="h2 mt-3">Built for teams that ship with agents.</h2>
            <p className="split-lede">
              Engineering teams and eng leads who need lasting memory of why the code looks the way it
              does — for people and for agents.
            </p>
          </div>
        </Reveal>
        <div className="who-grid">
          {AUDIENCES.map((item, index) => (
            <Reveal key={item.title} delay={80 + index * 70} y={18}>
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
