import { ClarityDemo } from "@/components/landing/ClarityDemo";
import { WaitlistCTA } from "@/components/WaitlistCTA";

export function Hero() {
  return (
    <section className="hero-sky px-[var(--pad-x)] text-center">
      <div className="hero-stack">
        <p className="hero-badge">Many sources. One living record.</p>
        <h1 className="display">
          AI memory that <em className="word-accent">understands</em> you.
        </h1>
        <p className="hero-sub">
          Notes → compact → the right memory loads at query time →
          <br />
          one clear answer.
        </p>
        <div className="hero-actions">
          <WaitlistCTA source="hero" />
        </div>
        <ClarityDemo />
      </div>
    </section>
  );
}
