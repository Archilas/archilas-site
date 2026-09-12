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
        <p className="hero-sub">Detailed notes → compacted memory → smart answers.</p>
        <div className="hero-actions">
          <WaitlistCTA source="hero" />
        </div>
        <p className="hero-slm">Powered by a memory SLM · early access</p>
      </div>
      <HeroVideo />
    </section>
  );
}
