import { WhoChats } from "@/components/landing/illustrations/WhoChats";
import { ScrollReveal } from "@/components/ScrollReveal";

export function WhoFor() {
  return (
    <section id="who" className="mem-section" aria-labelledby="who-heading">
      <div className="mem-section-inner">
        <div className="mem-copy mem-copy-wide">
          <ScrollReveal y={16}>
            <h2 id="who-heading" className="h2">
              For teams running AI agents, and anyone who lives in AI tools.
            </h2>
          </ScrollReveal>
        </div>
        <ScrollReveal className="mem-figure-bare mem-figure-full" y={22} amount={0.15}>
          <WhoChats />
        </ScrollReveal>
      </div>
    </section>
  );
}
