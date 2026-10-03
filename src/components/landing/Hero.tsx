import { EarlyAccessCTA } from "@/components/EarlyAccessCTA";
import { HeroQaDemo } from "@/components/landing/HeroQaDemo";

export function Hero() {
  return (
    <section className="hero-sky px-[var(--pad-x)]">
      <div className="hero-stack">
        <p className="hero-badge enter enter-d0">
          Team memory for engineering teams · Cursor, Claude Code and MCP coming soon
        </p>
        <h1 className="display enter enter-d1">The agent that knows your team&apos;s history.</h1>
        <p className="hero-sub enter enter-d2">
          Ask why, when or who about your codebase. Get a cited answer from your team&apos;s record.
        </p>
        <div className="hero-actions enter enter-d3">
          <EarlyAccessCTA source="hero" />
        </div>
        <p className="hero-proof enter enter-d4">
          86.8% accuracy on 121 questions about a real repo&apos;s history · p95 1.5s
        </p>
      </div>
      <div className="hero-plate-enter enter enter-d5">
        <div className="hero-demo" id="demo" data-testid="hero-demo">
          <HeroQaDemo />
        </div>
      </div>
    </section>
  );
}
