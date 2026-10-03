import { ProblemFade } from "@/components/landing/illustrations/ProblemFade";
import { ScrollReveal } from "@/components/ScrollReveal";

export function Problem() {
  return (
    <section id="problem" className="mem-section mem-section-warm" aria-labelledby="problem-heading">
      <div className="mem-section-inner mem-split mem-split-figure-first">
        <ScrollReveal className="mem-figure" y={24} amount={0.25}>
          <ProblemFade />
        </ScrollReveal>
        <div className="mem-copy">
          <ScrollReveal y={16}>
            <p className="label">Problem</p>
            <h2 id="problem-heading" className="h2">
              Every AI chat starts from zero.
            </h2>
            <p className="mem-lede">
              What you told Cursor yesterday, what one agent handed another, and what your team&apos;s
              chatbot learned last week are all gone the next session.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
