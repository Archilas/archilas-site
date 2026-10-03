import { EarlyAccessCTA } from "@/components/EarlyAccessCTA";
import { HeroConvergence } from "@/components/landing/illustrations/HeroConvergence";
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
              Archilas sits alongside your agents and chatbots, remembers everything they&apos;re told
              and do, and answers any of them, or you, with the source.
            </p>
            <p className="mem-hero-aside">
              It talks, but it doesn&apos;t do the work. It just remembers, so you and your AI never
              start from zero.
            </p>
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
              86.8% correct on 121 questions about a real project&apos;s history. Answers in under 1.5
              seconds.
            </p>
          </ScrollReveal>
        </div>
        <ScrollReveal y={20} delay={0.08} className="mem-hero-figure" amount={0.15} startVisible>
          <div id="demo" data-testid="hero-demo">
            <HeroConvergence />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
