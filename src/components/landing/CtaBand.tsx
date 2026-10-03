import { EarlyAccessCTA } from "@/components/EarlyAccessCTA";
import { ScrollReveal } from "@/components/ScrollReveal";

export function CtaBand() {
  return (
    <section id="early-access" className="mem-cta" aria-labelledby="cta-heading">
      <ScrollReveal className="mem-cta-inner" y={18}>
        <h2 id="cta-heading" className="h2 mem-cta-title">
          Give your AI a memory.
        </h2>
        <p className="mem-lede mem-cta-lede">
          A 20-minute call. Bring something your AI keeps forgetting.
        </p>
        <EarlyAccessCTA
          source="cta-band"
          align="start"
          primaryLabel="Book an early-access call"
          secondaryHref=""
        />
      </ScrollReveal>
    </section>
  );
}