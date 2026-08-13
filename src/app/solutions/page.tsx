import Link from "next/link";
import { Section } from "@/components/Section";
import { WaitlistForm } from "@/components/WaitlistForm";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Solutions",
  description:
    "Archilas for developers, technical founders, and teams building on Claude, ChatGPT, and agents.",
  path: "/solutions",
});

const personas = [
  {
    title: "Developers",
    body: "Editors and chats reset. You re-teach constraints every morning. Keep working memory durable, then load it where you already code.",
  },
  {
    title: "Technical founders",
    body: "Product, infra, and fundraising share the same assistants. Keep preferences, open loops, and decision reasons continuous without locking into one vendor chat.",
  },
  {
    title: "Agent teams",
    body: "Session state is not enough for agents on Claude, ChatGPT, or custom stacks. Shared memory stops re-asks and invented glue between half-known facts.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <Section className="!pb-10 !pt-12 md:!pt-14">
        <p className="mono text-[12px] text-muted">solutions</p>
        <h1 className="mt-3 max-w-2xl text-[36px] font-medium tracking-[-0.035em] text-ink md:text-[44px]">
          For people already inside AI tools
        </h1>
        <p className="mt-4 max-w-xl text-[15px] text-muted">
          Pre-launch. No customer logos yet. These are the jobs we design for.
        </p>
      </Section>

      <Section className="!pt-0">
        <div className="overflow-hidden rounded-lg border border-border">
          {personas.map((p, i) => (
            <article
              key={p.title}
              className={`grid gap-3 p-6 md:grid-cols-[200px_1fr] md:gap-10 md:p-8 ${
                i < personas.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <h2 className="text-[16px] font-medium text-ink">{p.title}</h2>
              <p className="text-[14px] leading-relaxed text-muted">{p.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-6 rounded-lg border border-border md:grid-cols-[1.2fr_1fr]">
          <div className="border-b border-border p-6 md:border-b-0 md:border-r md:p-8">
            <h2 className="text-[20px] font-medium tracking-tight text-ink">
              One layer, many hosts
            </h2>
            <p className="mt-3 text-[14px] text-muted">
              Reach Claude, ChatGPT, Cursor, and agents over{" "}
              <span className="mono text-[12px] text-ink">MCP</span>. History travels with the work.
            </p>
            <Link
              href="/blog/what-is-mcp"
              className="mt-5 inline-block text-[13px] font-medium text-ink underline underline-offset-4"
            >
              What MCP is
            </Link>
          </div>
          <div className="p-6 md:p-8">
            <p className="text-[13px] font-medium text-ink">Join waitlist</p>
            <div className="mt-4">
              <WaitlistForm id="solutions-waitlist" />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
