import { HowRecord } from "@/components/landing/illustrations/HowRecord";
import { ScrollReveal } from "@/components/ScrollReveal";

export function HowItWorks() {
  return (
    <section id="how" className="mem-section mem-section-dark" aria-labelledby="how-heading">
      <div className="mem-section-inner mem-split">
        <div className="mem-copy">
          <ScrollReveal y={16}>
            <h2 id="how-heading" className="h2">
              Three steps. Nothing new to learn.
            </h2>
            <ol className="mem-steps">
              <li>
                <span className="mem-step-n">1</span>
                <div>
                  <strong>Connect.</strong> Point your AI tools at Archilas. Cursor, Claude Code and
                  MCP are coming soon.
                </div>
              </li>
              <li>
                <span className="mem-step-n">2</span>
                <div>
                  <strong>Work as usual.</strong> Archilas keeps a record of every chat, handoff and
                  decision.
                </div>
              </li>
              <li>
                <span className="mem-step-n">3</span>
                <div>
                  <strong>Ask.</strong> You or your agents ask in plain words, and Archilas answers
                  with the source.
                </div>
              </li>
            </ol>
            <p className="mem-aside-note">
              What it doesn&apos;t do: write code, run tasks, or replace your agents.
            </p>
          </ScrollReveal>
        </div>
        <ScrollReveal className="mem-figure-bare" y={24} amount={0.2}>
          <HowRecord />
        </ScrollReveal>
      </div>
    </section>
  );
}
