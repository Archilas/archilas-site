import { WhoScenes } from "@/components/landing/illustrations/WhoScenes";
import { ScrollReveal } from "@/components/ScrollReveal";

export function WhoFor() {
  return (
    <section id="who" className="mem-section" aria-labelledby="who-heading">
      <div className="mem-section-inner">
        <div className="mem-copy mem-copy-wide">
          <ScrollReveal y={16}>
            <p className="label">Who it&apos;s for</p>
            <h2 id="who-heading" className="h2">
              Built for accuracy over split-second speed.
            </h2>
            <p className="mem-lede">
              Companies running internal agents and chatbots, and individuals who live in AI tools.
              Cursor, Claude Code and MCP support coming soon.
            </p>
          </ScrollReveal>
        </div>
        <ScrollReveal className="mem-figure-bare mem-figure-full" y={22} amount={0.2}>
          <WhoScenes />
        </ScrollReveal>
      </div>
    </section>
  );
}
