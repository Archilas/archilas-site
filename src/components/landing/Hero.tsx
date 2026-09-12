import { HeroVideo } from "@/components/landing/HeroVideo";
import { WaitlistCTA } from "@/components/WaitlistCTA";

export function Hero() {
  return (
    <section className="hero-sky px-[var(--pad-x)] text-center">
      <div className="hero-stack">
        <p className="hero-badge">Many sources. One living record.</p>
        <h1 className="display">
          AI memory that <em className="word-accent">understands</em> you.
        </h1>
        <p className="hero-sub">Notes compact into living memory — then one clear answer.</p>
        <div className="hero-actions">
          <WaitlistCTA source="hero" />
        </div>
        <p className="hero-slm">Powered by a memory SLM · early access</p>
      </div>
      <HeroVideo />
    </section>
  );
}
