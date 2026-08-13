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
    body: "Session state is not enough. Shared memory stops re-asks and invented glue between half-known facts.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <Section className="!pb-8 !pt-12">
        <p className="mono text-[11px] uppercase tracking-[0.14em] text-muted">solutions</p>
        <h1 className="display mt-4 max-w-2xl text-[40px] text-ink md:text-[48px]">
          Built for people already in the tools.
        </h1>
        <p className="mt-5 max-w-lg text-[15px] text-muted">
          Pre-launch. No logos yet. These are the jobs we design for.
        </p>
      </Section>

      <Section className="!pt-0">
        <div className="overflow-hidden rounded-sm border border-border bg-bg">
          {personas.map((p, i) => (
            <article
              key={p.title}
              className={`grid gap-3 px-5 py-7 md:grid-cols-[180px_1fr] md:gap-10 md:px-6 ${
                i < personas.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <h2 className="text-[15px] font-medium text-ink">{p.title}</h2>
              <p className="text-[14px] leading-relaxed text-muted">{p.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid overflow-hidden rounded-sm border border-border md:grid-cols-2">
          <div className="border-b border-border p-6 md:border-b-0 md:border-r md:p-8">
            <p className="mono text-[11px] uppercase tracking-[0.14em] text-muted">hosts</p>
            <h2 className="mt-3 text-[22px] font-medium tracking-tight text-ink">
              One layer. Many surfaces.
            </h2>
            <p className="mt-3 text-[14px] text-muted">
              Claude, ChatGPT, Cursor, agents. Delivered over{" "}
              <span className="mono text-[12px] text-ink">MCP</span>.
            </p>
            <Link
              href="/blog/what-is-mcp"
              className="mt-5 inline-block text-[13px] font-medium underline underline-offset-4"
            >
              What MCP is
            </Link>
          </div>
          <div className="bg-ink p-6 text-bg md:p-8">
            <p className="mono text-[11px] uppercase tracking-[0.14em] text-white/45">waitlist</p>
            <p className="mt-3 text-[14px] text-white/70">Get access when we open.</p>
            <div className="mt-5">
              <WaitlistForm id="solutions-waitlist" tone="dark" />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
