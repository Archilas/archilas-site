import { HeroVideo } from "@/components/landing/HeroVideo";
import { WaitlistCTA } from "@/components/WaitlistCTA";

export function Hero() {
  return (
    <section className="hero-sky px-[var(--pad-x)] text-center">
      <div className="hero-stack">
        <p className="hero-badge enter enter-d0">Many sources. One living record.</p>
        <h1 className="display enter enter-d1">
          AI memory that <em className="word-accent">understands</em> you.
        </h1>
        <p className="hero-sub enter enter-d2">Detailed notes → compacted memory → smart answers.</p>
        <div className="hero-actions enter enter-d3">
          <WaitlistCTA source="hero" />
        </div>
        <p className="hero-slm enter enter-d4">Powered by a memory SLM · early access</p>
      </div>
      <div className="hero-plate-enter enter enter-d5">
        <HeroVideo />
      </div>
    </section>
  );
}
