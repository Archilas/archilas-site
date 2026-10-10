import { EarlyAccessCTA } from "@/components/EarlyAccessCTA";
import { HeroChat } from "@/components/landing/illustrations/HeroChat";
import { ScrollReveal } from "@/components/ScrollReveal";

export function Hero() {
  return (
    <section className="mem-hero" aria-labelledby="hero-heading">
      <div className="mem-hero-grid">
        <div className="mem-hero-copy">
          <ScrollReveal y={16} startVisible>
            <h1 id="hero-heading" className="display">
              The memory agent for your AI.
            </h1>
          </ScrollReveal>
          <ScrollReveal y={18} delay={0.06} startVisible>
            <p className="mem-hero-sub">
              Archilas remembers what you and your AI tools have said and done, and answers whenever
              anyone asks.
            </p>
            <p className="mem-hero-aside">It doesn&apos;t do the work. It remembers it.</p>
          </ScrollReveal>
          <ScrollReveal y={14} delay={0.1} startVisible>
            <div className="mem-hero-actions">
              <EarlyAccessCTA
                source="hero"
                align="start"
                primaryLabel="Book an early-access call"
                secondaryHref=""
              />
            </div>
          </ScrollReveal>
          <ScrollReveal y={12} delay={0.14} startVisible>
            <p className="mem-hero-proof">
              It answers from the notes it kept, and cites the source.
            </p>
          </ScrollReveal>
        </div>
        <ScrollReveal y={20} delay={0.08} className="mem-hero-figure mem-figure-bare" amount={0.15} startVisible>
          <div id="demo" data-testid="hero-demo">
            <HeroChat />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
