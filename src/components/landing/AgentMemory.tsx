import { Reveal } from "@/components/Reveal";

export function AgentMemory() {
  return (
    <section id="agent-memory" className="agent-band split-band scroll-mt-[var(--scroll-margin)] px-[var(--pad-x)]">
      <Reveal delay={80} y={20}>
        <div className="agent-panel mx-auto max-w-[880px] text-center">
          <p className="label">Agent + memory</p>
          <h2 className="h2 mt-3">An agent and a memory, in one.</h2>
          <p className="split-lede mx-auto">
            A memory store waits to be queried. An agent forgets when the session ends. Archilas does
            both: it holds your team&apos;s history and reasons over it when you ask.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
