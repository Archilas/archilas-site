import { HowSequence } from "@/components/landing/illustrations/HowSequence";
import { ScrollReveal } from "@/components/ScrollReveal";

export function HowItWorks() {
  return (
    <section id="how" className="mem-section mem-section-mint" aria-labelledby="how-heading">
      <div className="mem-section-inner mem-split">
        <div className="mem-copy">
          <ScrollReveal y={16}>
            <p className="label">What it does</p>
            <h2 id="how-heading" className="h2">
              An agent with one job: remember.
            </h2>
            <p className="mem-lede">
              Archilas is an agent with one job: remember. It follows what your agents are sent and
              what they do, and when you or another agent asks, it works out the answer from that
              history and links to where each answer came from. It can learn your entire codebase too.
            </p>
          </ScrollReveal>
        </div>
        <ScrollReveal className="mem-figure" y={24} amount={0.25}>
          <HowSequence />
        </ScrollReveal>
      </div>
    </section>
  );
}
