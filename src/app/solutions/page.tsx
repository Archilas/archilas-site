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
    n: "01",
    title: "Developers",
    body: "Editors and chats reset. You re-teach constraints every morning. Keep working memory durable, then load it where you already code.",
  },
  {
    n: "02",
    title: "Technical founders",
    body: "Product, infra, and fundraising share the same assistants. Keep preferences, open loops, and decision reasons continuous without locking into one vendor chat.",
  },
  {
    n: "03",
    title: "Agent teams",
    body: "Session state is not enough. Shared memory stops re-asks and invented glue between half-known facts.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <Section className="!pb-8 !pt-16">
        <p className="kicker">Solutions</p>
        <h1 className="display mt-4 max-w-[14ch] text-[clamp(2.8rem,7vw,5rem)] text-ink">
          Built for people already in the <em>tools.</em>
        </h1>
        <p className="mt-6 max-w-lg text-[17px] text-muted">
          Pre-launch. No logos yet. These are the jobs we design for.
        </p>
      </Section>

      <Section className="!pt-0">
        {personas.map((p) => (
          <article key={p.title} className="entry">
            <p className="entry-num">{p.n}</p>
            <div>
              <h2 className="display text-[32px] text-ink">{p.title}</h2>
              <p className="mt-3 max-w-2xl text-[17px] leading-relaxed text-muted">{p.body}</p>
            </div>
          </article>
        ))}

        <div className="mt-14 grid gap-10 border-t border-border pt-10 md:grid-cols-2">
          <div>
            <p className="kicker">Hosts</p>
            <h2 className="display mt-4 text-[32px] text-ink">One layer. Many surfaces.</h2>
            <p className="mt-4 text-[17px] text-muted">
              Claude, ChatGPT, Cursor, agents. Delivered over MCP.
            </p>
            <Link href="/blog/what-is-mcp" className="mt-5 inline-block text-brass hover:underline">
              What MCP is
            </Link>
          </div>
          <div>
            <p className="kicker">Waitlist</p>
            <p className="mt-4 text-[17px] text-muted">Get access when we open.</p>
            <div className="mt-5">
              <WaitlistForm id="solutions-waitlist" />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
