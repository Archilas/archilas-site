import { ButtonPrimary } from "@/components/ButtonPrimary";
import { site } from "@/lib/site";

const PROOF =
  "86.8% accuracy on 121 questions about a real repo's history · p95 1.5s";

const steps = [
  {
    title: "Capture",
    body: "Archilas reads the places your team already writes things down: PRs, issues, design notes and threads.",
  },
  {
    title: "Remember",
    body: "It keeps a lasting record of decisions, changes and owners over time, not a pile of chunks.",
  },
  {
    title: "Answer",
    body: "Ask a question and get a direct answer with a citation to the source note. Asking from Cursor, Claude Code or any MCP client is coming soon.",
  },
] as const;

const audiences = [
  {
    title: "Engineering teams",
    body: "Roughly 5–50 people using AI coding agents.",
  },
  {
    title: "Onboarding",
    body: "New engineers get the why behind the code without asking around.",
  },
  {
    title: "Tech leads",
    body: "Stop being the human memory of the codebase.",
  },
] as const;

const products = [
  { id: "archilas", name: "Archilas", ours: true },
  { id: "mem0", name: "Mem0", ours: false },
  { id: "zep", name: "Zep", ours: false },
  { id: "letta", name: "Letta", ours: false },
  { id: "rag", name: "Search over docs (RAG)", ours: false },
] as const;

type ProductId = (typeof products)[number]["id"];

const rows: { label: string; cells: Record<ProductId, string> }[] = [
  {
    label: "Built for",
    cells: {
      archilas: "Engineering teams' code and decision history",
      mem0: "Memory layer for AI agents and apps",
      zep: "Governed shared context for enterprise agents",
      letta: "Platform for stateful, self-improving agents",
      rag: "Finding passages in documents",
    },
  },
  {
    label: "Answers why / when / who",
    cells: {
      archilas: "Direct answers from team history over time",
      mem0: "Recalls stored facts, ranked by time",
      zep: "Tracks facts and how they change",
      letta: "Agent-managed memory; depends on agent design",
      rag: "Returns chunks; the model has to infer",
    },
  },
  {
    label: "Cites the source note",
    cells: {
      archilas: "A citation on every answer",
      mem0: "Change history, not cited answers",
      zep: "Traces facts back to source records",
      letta: "Depends on your build",
      rag: "Can show the chunk, not the decision",
    },
  },
  {
    label: "Setup",
    cells: {
      archilas: "Early access, onboarded with you",
      mem0: "Cloud API, SDK, MCP, or self-host",
      zep: "Managed cloud or your VPC; Graphiti OSS",
      letta: "Letta app/CLI; cloud or self-host",
      rag: "Build and tune a pipeline",
    },
  },
  {
    label: "Measured on team-history questions",
    cells: {
      archilas: "86.8% on 121 questions, p95 1.5s",
      mem0: "[Benchmark pending]",
      zep: "[Benchmark pending]",
      letta: "[Benchmark pending]",
      rag: "[Benchmark pending]",
    },
  },
];

const footnote =
  "Competitor cells checked against each product's public site and docs on Oct 3, 2026 (mem0.ai, docs.mem0.ai, getzep.com, help.getzep.com, docs.letta.com, github.com/letta-ai). Re-check before publishing. Head-to-head benchmark on the same question set coming soon.";

export function TeamMemoryHome() {
  return (
    <div className="tm-page">
      <section className="tm-hero px-[var(--pad-x)]">
        <div className="mx-auto w-full max-w-[var(--max-width)]">
          <h1 className="tm-h1">
            The agent that knows your team&apos;s <em className="word-accent">history.</em>
          </h1>
          <p className="tm-sub">
            Ask why, when or who about any part of your codebase. Archilas answers from your
            team&apos;s record and cites the note it came from.
          </p>
          <div className="tm-cta">
            <ButtonPrimary href={site.earlyAccessUrl}>Get early access</ButtonPrimary>
          </div>
          <p className="tm-proof">{PROOF}</p>
          <p className="tm-soon">Cursor, Claude Code and MCP — coming soon.</p>
        </div>
      </section>

      <section className="tm-band px-[var(--pad-x)]" aria-label="The problem">
        <p className="tm-problem mx-auto max-w-[var(--max-width)]">
          The reason behind your code lives in old PRs, threads and people&apos;s heads. Your
          agents can&apos;t see any of it, and new engineers have to ask around.
        </p>
      </section>

      <section id="how" className="tm-band px-[var(--pad-x)]">
        <div className="mx-auto w-full max-w-[var(--max-width)]">
          <h2 className="h2">How it works</h2>
          <ol className="tm-steps">
            {steps.map((step, index) => (
              <li key={step.title} className="tm-step">
                <span className="tm-index">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="tm-step-title">{step.title}</h3>
                <p className="tm-step-body">{step.body}</p>
              </li>
            ))}
          </ol>

          <figure className="tm-example">
            <figcaption className="label">Example</figcaption>
            <p className="tm-q">
              <span>Q</span>
              Why did we move auth off the session service, and who signed off?
            </p>
            <p className="tm-a">
              <span>A</span>
              The team moved it in March after repeated timeouts under load. Priya approved the
              change in the infra review.
            </p>
            <p className="tm-source">Source: PR #412, design note &quot;Auth migration&quot;.</p>
          </figure>
        </div>
      </section>

      <section id="who" className="tm-band px-[var(--pad-x)]">
        <div className="mx-auto w-full max-w-[var(--max-width)]">
          <h2 className="h2">Who it&apos;s for</h2>
          <ul className="tm-cards">
            {audiences.map((item) => (
              <li key={item.title} className="tm-card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="compare" className="tm-band px-[var(--pad-x)]">
        <div className="mx-auto w-full max-w-[var(--max-width)]">
          <h2 className="h2">Why Archilas beats other memory tools</h2>
          <p className="tm-lede">
            Other memory tools give your agent a place to store and fetch facts. Archilas answers
            your team&apos;s why, when and who about the code, and cites the note behind every
            answer.
          </p>

          <div className="tm-cards-mobile">
            {products.map((product) => (
              <article
                key={product.id}
                className={product.ours ? "tm-compare-card is-ours" : "tm-compare-card"}
              >
                <h3>{product.name}</h3>
                <dl>
                  {rows.map((row) => (
                    <div key={row.label}>
                      <dt>{row.label}</dt>
                      <dd>{row.cells[product.id]}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>

          <div className="tm-table-wrap">
            <table className="tm-table">
              <caption className="sr-only">
                Archilas compared with Mem0, Zep, Letta, and search over docs
              </caption>
              <thead>
                <tr>
                  <th scope="col" className="tm-sticky">
                    <span className="sr-only">Criteria</span>
                  </th>
                  {products.map((product) => (
                    <th
                      key={product.id}
                      scope="col"
                      className={product.ours ? "is-ours" : undefined}
                    >
                      {product.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row" className="tm-sticky">
                      {row.label}
                    </th>
                    {products.map((product) => (
                      <td key={product.id} className={product.ours ? "is-ours" : undefined}>
                        {row.cells[product.id]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="tm-foot">{footnote}</p>
        </div>
      </section>

      <section className="tm-band px-[var(--pad-x)]">
        <div className="tm-memory mx-auto w-full max-w-[var(--max-width)]">
          <h2 className="h2">An agent and a memory, in one.</h2>
          <p>
            A memory store waits to be queried. An agent forgets when the session ends. Archilas
            does both: it holds your team&apos;s history and reasons over it when you ask.
          </p>
        </div>
      </section>

      <section id="early-access" className="tm-band tm-final px-[var(--pad-x)]">
        <div className="mx-auto w-full max-w-[var(--max-width)]">
          <h2 className="h2">See it on your own repo.</h2>
          <p className="tm-lede">20 minutes. Bring a question your team keeps asking.</p>
          <div className="tm-cta">
            <ButtonPrimary href={site.earlyAccessUrl}>Book an early-access call</ButtonPrimary>
          </div>
        </div>
      </section>
    </div>
  );
}
