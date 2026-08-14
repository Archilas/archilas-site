import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { MemoryRegister } from "@/components/MemoryRegister";
import { Section } from "@/components/Section";
import { WaitlistForm } from "@/components/WaitlistForm";
import { buildMetadata, organizationJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: site.name,
  description: site.description,
  path: "/",
});

const steps = [
  {
    n: "01",
    title: "Compact",
    body: "Preferences, decisions, open loops. Revisable facts. Not a transcript dump.",
  },
  {
    n: "02",
    title: "Reason",
    body: "Compose related facts when the record supports it. Stay quiet when it does not.",
  },
  {
    n: "03",
    title: "Deliver",
    body: "The same layer in Claude, ChatGPT, Cursor, and agents. Over MCP.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />

      <section className="px-5 pt-14 pb-10 md:px-8 md:pt-20 md:pb-12">
        <div className="mx-auto grid w-full max-w-[1080px] gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
          <div>
            <p className="kicker">Persistent memory for AI</p>
            <h1 className="display mt-5 max-w-[9ch] text-[clamp(3.4rem,9vw,6.4rem)] text-ink">
              The model should already <em>know this.</em>
            </h1>
            <p className="mt-8 max-w-md text-[18px] leading-relaxed text-muted">
              A living record of what matters. Compacted, grounded, and pushed into the tools you already use.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#waitlist" className="btn btn-primary">
                Join the register
              </a>
              <Link href="/blog/what-is-mcp" className="btn btn-secondary">
                Why MCP
              </Link>
            </div>
          </div>
          <MemoryRegister />
        </div>
      </section>

      <Section>
        <div className="rule mb-10" />
        {steps.map((step) => (
          <article key={step.n} className="entry">
            <p className="entry-num">{step.n}</p>
            <div>
              <h2 className="display text-[clamp(2rem,4vw,3.1rem)] text-ink">{step.title}</h2>
              <p className="mt-3 max-w-xl text-[17px] leading-relaxed text-muted">{step.body}</p>
            </div>
          </article>
        ))}
      </Section>

      <Section className="border-y border-border bg-surface">
        <p className="kicker">Instead of RAG-as-memory</p>
        <p className="display strike mt-6 text-[clamp(2rem,5vw,3.4rem)]">Search. Paste. Hope.</p>
        <p className="display mt-3 text-[clamp(2rem,5vw,3.4rem)] text-ink">
          Compact. Reason. <em>Deliver.</em>
        </p>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <p className="text-[17px] leading-relaxed text-muted">
            RAG finds snippets. The model stitches them in the prompt. Related facts drift. Gaps get fluent guesses.
          </p>
          <p className="text-[17px] leading-relaxed text-muted">
            Incomplete memory stays incomplete. Fluency is not permission to invent. When two true details belong together, you get one answer.
          </p>
        </div>
      </Section>

      <Section id="waitlist">
        <p className="kicker">Early access</p>
        <h2 className="display mt-4 max-w-[12ch] text-[clamp(2.4rem,5vw,3.6rem)] text-ink">
          Leave an address. We write when it opens.
        </h2>
        <p className="mt-5 max-w-md text-[17px] text-muted">Pre-launch. No payment. No fake logos.</p>
        <div className="mt-8">
          <WaitlistForm id="waitlist-form" />
        </div>
      </Section>
    </>
  );
}
