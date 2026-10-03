import { EarlyAccessCTA } from "@/components/EarlyAccessCTA";
import { HeroConvergence } from "@/components/landing/illustrations/HeroConvergence";

export function Hero() {
  return (
    <section className="mem-hero" aria-labelledby="hero-heading">
      <div className="mem-hero-grid">
        <div className="mem-hero-copy">
          <h1 id="hero-heading" className="display enter enter-d1">
            The memory agent for your AI.
          </h1>
          <p className="mem-hero-sub enter enter-d2">
            Archilas sits alongside your agents and chatbots, remembers everything they&apos;re told
            and do, and answers any of them, or you, with the source.
          </p>
          <div className="mem-hero-actions enter enter-d3">
            <EarlyAccessCTA
              source="hero"
              align="start"
              primaryLabel="Book an early-access call"
              secondaryHref=""
            />
          </div>
          <p className="mem-hero-proof enter enter-d4">
            86.8% correct on 121 questions about a real project&apos;s history. Answers in under 1.5
            seconds.
          </p>
        </div>
        <div className="mem-hero-figure enter enter-d5" id="demo" data-testid="hero-demo">
          <HeroConvergence className="mem-diagram" />
        </div>
      </div>
    </section>
  );
}
