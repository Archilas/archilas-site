import { ProblemCompare } from "@/components/landing/illustrations/ProblemCompare";
import { ScrollReveal } from "@/components/ScrollReveal";

export function Problem() {
  return (
    <section id="problem" className="mem-section mem-section-warm" aria-labelledby="problem-heading">
      <div className="mem-section-inner">
        <div className="mem-copy mem-copy-wide">
          <ScrollReveal y={16}>
            <h2 id="problem-heading" className="h2">
              Your AI forgets everything between chats.
            </h2>
            <p className="mem-lede">
              Close a chat and the decisions in it are gone. Open a new one and you explain it all
              again.
            </p>
          </ScrollReveal>
        </div>
        <ScrollReveal className="mem-figure-bare mem-figure-full" y={22} amount={0.2}>
          <ProblemCompare />
        </ScrollReveal>
      </div>
    </section>
  );
}
