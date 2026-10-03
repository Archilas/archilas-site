import { WhoScenes } from "@/components/landing/illustrations/WhoScenes";

export function WhoFor() {
  return (
    <section id="who" className="mem-section" aria-labelledby="who-heading">
      <div className="mem-section-inner">
        <div className="mem-copy mem-copy-wide">
          <p className="label">Who it&apos;s for</p>
          <h2 id="who-heading" className="h2">
            Companies and individuals who live in AI tools.
          </h2>
          <p className="mem-lede">
            Companies running internal agents and chatbots, and individuals who live in AI tools.
            Built for accuracy over split-second speed. Cursor, Claude Code and MCP support coming
            soon.
          </p>
        </div>
        <div className="mem-figure mem-figure-full">
          <WhoScenes className="mem-diagram" />
        </div>
      </div>
    </section>
  );
}
