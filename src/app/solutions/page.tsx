import Link from "next/link";
import { Section } from "@/components/Section";
import { WaitlistForm } from "@/components/WaitlistForm";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Solutions",
  description:
    "Archilas for developers, technical founders, and teams building on Claude, ChatGPT, and agent frameworks — persistent memory without invented case studies.",
  path: "/solutions",
});

const personas = [
  {
    title: "Developers & engineers",
    body: "You live in AI-assisted editors and chat. Context resets between sessions, tools disagree about what you decided last week, and you waste time re-teaching constraints. Archilas is for keeping that working memory durable — then loading it where you already code.",
  },
  {
    title: "Technical founders",
    body: "You’re switching between product, infra, and fundraising threads with the same assistants. You need continuity on preferences, open loops, and why a decision was made — without locking the company into a single chat vendor’s memory feature.",
  },
  {
    title: "Teams building on agent stacks",
    body: "If you’re shipping agents on top of Claude, ChatGPT, or custom frameworks, session state is not enough. A shared memory layer helps agents stop re-asking and stop inventing glue between half-remembered facts.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <Section className="noise radial-accent !pt-16 md:!pt-24">
        <h1 className="max-w-3xl font-[family-name:var(--font-fraunces)] text-4xl font-medium text-ink md:text-6xl">
          Built for people who already live inside AI tools
        </h1>
        <p className="prose-measure mt-8 text-lg text-muted">
          No fabricated customer logos. No invented case studies. These are the personas we design for — honestly, while the product is still pre-launch.
        </p>
      </Section>

      <Section>
        <div className="space-y-24">
          {personas.map((p, i) => (
            <article
              key={p.title}
              className={`grid gap-8 md:grid-cols-[0.9fr_1.4fr] md:gap-16 ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <h2 className="font-[family-name:var(--font-fraunces)] text-3xl font-medium text-ink">
                {p.title}
              </h2>
              <p className="prose-measure text-lg text-muted">{p.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <h2 className="font-[family-name:var(--font-fraunces)] text-3xl font-medium text-ink">
              Same memory, multiple surfaces
            </h2>
            <p className="prose-measure mt-6 text-muted">
              The point is not another destination chat. It’s a layer that can reach Claude, ChatGPT, Cursor, and agents through MCP — so your history travels with the work.
            </p>
            <Link href="/blog/what-is-mcp" className="mt-8 inline-block text-ink underline decoration-accent/50 underline-offset-4">
              Read: What MCP is and why it matters
            </Link>
          </div>
          <div className="bg-bg px-8 py-10">
            <p className="font-medium text-ink">Join the waitlist</p>
            <div className="mt-6">
              <WaitlistForm id="solutions-waitlist" />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
