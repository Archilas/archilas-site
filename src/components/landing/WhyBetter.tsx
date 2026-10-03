import { Reveal } from "@/components/Reveal";

const COLUMNS = ["Archilas", "Mem0", "Zep", "Letta", "Search over docs (RAG)"] as const;

const ROWS = [
  {
    label: "Built for",
    cells: [
      "Engineering teams' code and decision history",
      "Memory layer for AI agents and apps",
      "Governed shared context for enterprise agents",
      "Platform for stateful, self-improving agents",
      "Finding passages in documents",
    ],
  },
  {
    label: "Answers why / when / who",
    cells: [
      "Direct answers from team history over time",
      "Recalls stored facts, ranked by time",
      "Tracks facts and how they change",
      "Agent-managed memory; depends on agent design",
      "Returns chunks; the model has to infer",
    ],
  },
  {
    label: "Cites the source note",
    cells: [
      "A citation on every answer",
      "Change history, not cited answers",
      "Traces facts back to source records",
      "Depends on your build",
      "Can show the chunk, not the decision",
    ],
  },
  {
    label: "Setup",
    cells: [
      "Early access, onboarded with you",
      "Cloud API, SDK, MCP, or self-host",
      "Managed cloud or your VPC; Graphiti OSS",
      "Letta app/CLI; cloud or self-host",
      "Build and tune a pipeline",
    ],
  },
  {
    label: "Measured on team-history questions",
    cells: [
      "86.8% on 121 questions, p95 1.5s",
      "[Benchmark pending]",
      "[Benchmark pending]",
      "[Benchmark pending]",
      "[Benchmark pending]",
    ],
  },
] as const;

export function WhyBetter() {
  return (
    <section id="why" className="why-band compare-table-band scroll-mt-[var(--scroll-margin)] px-[var(--pad-x)]">
      <div className="mx-auto max-w-[1180px]">
        <Reveal delay={60}>
          <div className="section-head">
            <p className="label">Why Archilas</p>
            <h2 className="h2 mt-3">Why it beats other memory tools.</h2>
            <p className="split-lede">
              Other memory tools give your agent a place to store and fetch facts. Archilas answers
              your team&apos;s why, when and who about the code, and cites the note behind every answer.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120} y={20}>
          <div className="compare-table-wrap" data-testid="compare-table">
            <table className="compare-table">
              <thead>
                <tr>
                  <th scope="col">
                    <span className="sr-only">Dimension</span>
                  </th>
                  {COLUMNS.map((col) => (
                    <th key={col} scope="col" className={col === "Archilas" ? "is-us" : undefined}>
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    {row.cells.map((cell, index) => (
                      <td key={`${row.label}-${COLUMNS[index]}`} className={index === 0 ? "is-us" : undefined}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="compare-footnote">
            Competitor cells checked against each product&apos;s public site and docs on Oct 3, 2026
            (mem0.ai, docs.mem0.ai, getzep.com, help.getzep.com, docs.letta.com, github.com/letta-ai).
            Re-check before publishing. Head-to-head benchmark on the same question set coming soon.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
