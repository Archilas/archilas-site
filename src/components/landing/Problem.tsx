import { ProblemFade } from "@/components/landing/illustrations/ProblemFade";

export function Problem() {
  return (
    <section id="problem" className="mem-section" aria-labelledby="problem-heading">
      <div className="mem-section-inner mem-split mem-split-figure-first">
        <div className="mem-figure">
          <ProblemFade className="mem-diagram" />
        </div>
        <div className="mem-copy">
          <p className="label">Problem</p>
          <h2 id="problem-heading" className="h2">
            Every AI chat starts from zero.
          </h2>
          <p className="mem-lede">
            What you told Cursor yesterday, what one agent handed another, and what your team&apos;s
            chatbot learned last week are all gone the next session.
          </p>
        </div>
      </div>
    </section>
  );
}
