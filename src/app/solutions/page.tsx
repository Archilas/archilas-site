import Link from "next/link";
import { Section } from "@/components/Section";
import { WaitlistForm } from "@/components/WaitlistForm";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Solutions",
  description:
    "Archilas for developers, technical founders, and teams building on Claude, ChatGPT, and agent frameworks.",
  path: "/solutions",
});

const personas = [
  {
    title: "Developers and engineers",
    body: "You work in AI-assisted editors and chat. Context resets between sessions. Tools disagree about what you decided last week. Archilas keeps that working memory durable, then loads it where you already code.",
  },
  {
    title: "Technical founders",
    body: "You switch between product, infra, and fundraising threads with the same assistants. You need continuity on preferences, open loops, and why a decision was made, without locking into one chat vendor's memory feature.",
  },
  {
    title: "Teams building agent stacks",
    body: "If you ship agents on Claude, ChatGPT, or custom frameworks, session state is not enough. A shared memory layer helps agents stop re-asking and stop inventing glue between half-remembered facts.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <Section className="!pt-16 md:!pt-24">
        <h1 className="max-w-2xl text-4xl font-medium tracking-tight text-ink md:text-5xl">
          Built for people who already live inside AI tools
        </h1>
        <p className="prose-measure mt-6 text-lg text-muted">
          No customer logos yet. No case studies yet. These are the personas we design for while the product is pre-launch.
        </p>
      </Section>

      <Section className="border-t border-border !pt-0 md:!pt-0">
        <div className="space-y-20 border-t border-border pt-20">
          {personas.map((p) => (
            <article key={p.title} className="grid gap-6 md:grid-cols-[0.9fr_1.4fr] md:gap-16">
              <h2 className="text-xl font-medium tracking-tight text-ink">{p.title}</h2>
              <p className="prose-measure text-[17px] text-muted">{p.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border bg-surface">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <h2 className="text-2xl font-medium tracking-tight text-ink">
              Same memory, multiple surfaces
            </h2>
            <p className="prose-measure mt-5 text-muted">
              Not another destination chat. A layer that reaches Claude, ChatGPT, Cursor, and agents through{" "}
              <span className="mono text-[14px] text-ink">MCP</span> so your history travels with the work.
            </p>
            <Link
              href="/blog/what-is-mcp"
              className="mt-8 inline-block text-[15px] text-ink underline underline-offset-4"
            >
              What MCP is and why it matters
            </Link>
          </div>
          <div className="border border-border bg-bg px-6 py-8">
            <p className="text-[15px] font-medium text-ink">Join the waitlist</p>
            <div className="mt-5">
              <WaitlistForm id="solutions-waitlist" />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
