import { ScrollReveal } from "@/components/ScrollReveal";

export function Status() {
  return (
    <section id="status" className="mem-section" aria-labelledby="status-heading">
      <div className="mem-section-inner">
        <div className="mem-copy mem-copy-wide">
          <ScrollReveal y={16}>
            <p className="label">Status</p>
            <h2 id="status-heading" className="h2">
              What works today
            </h2>
            <p className="mem-lede">
              You can read this site and book an early-access call. Archilas is not generally available
              yet.
            </p>
            <p className="mem-aside-note">
              Coming soon: Cursor, Claude Code, and MCP. Those integrations are not live.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
