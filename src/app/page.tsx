import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { WaitlistForm } from "@/components/WaitlistForm";
import { buildMetadata, organizationJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: site.name,
  description: site.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />

      {/* Hero: brand-first, left-aligned, single CTA, radial accent + noise only */}
      <section className="noise radial-accent">
        <div className="mx-auto flex w-full max-w-6xl flex-col px-6 pb-40 pt-16 md:px-8 md:pb-48 md:pt-24">
          <p className="fade-rise font-[family-name:var(--font-fraunces)] text-5xl font-medium tracking-tight text-ink md:text-7xl">
            {site.name}
          </p>
          <h1 className="fade-rise prose-measure mt-10 max-w-3xl font-[family-name:var(--font-fraunces)] text-3xl font-medium leading-tight text-ink md:text-5xl md:leading-[1.15]">
            A persistent memory layer for AI that reasons over your history — not a search box that pastes text into a prompt.
          </h1>
          <p className="fade-rise prose-measure mt-8 text-lg text-muted md:text-xl">
            It doesn’t fabricate answers. It combines related facts correctly. Delivered into the AI tools you already use.
          </p>
          <div className="fade-rise mt-12">
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* Mechanism: asymmetric 60/40, plain language, no codenames */}
      <Section>
        <div className="grid gap-16 md:grid-cols-[1.4fr_1fr] md:gap-20">
          <div>
            <h2 className="font-[family-name:var(--font-fraunces)] text-3xl font-medium text-ink md:text-4xl">
              How it works, without the jargon fog
            </h2>
            <p className="prose-measure mt-8 text-lg text-muted">
              Archilas keeps a compacted record of what matters from your work with AI — decisions, preferences, open loops, and the links between them. A local reasoning step works over that record so answers stay grounded. You get the result through MCP inside Claude, ChatGPT, Cursor, and other tools — not in a separate silo.
            </p>
          </div>
          <aside className="bg-surface px-8 py-10 md:mt-16">
            <p className="text-sm font-medium uppercase tracking-[0.08em] text-accent">
              Three parts
            </p>
            <ul className="mt-6 space-y-6 text-ink">
              <li>
                <p className="font-medium">Compacted memory</p>
                <p className="mt-2 text-muted">
                  Durable facts instead of endless transcript paste.
                </p>
              </li>
              <li>
                <p className="font-medium">Local reasoning</p>
                <p className="mt-2 text-muted">
                  Compose what is known. Stay quiet when it isn’t.
                </p>
              </li>
              <li>
                <p className="font-medium">MCP delivery</p>
                <p className="mt-2 text-muted">
                  Meet you in the clients you already open every day.
                </p>
              </li>
            </ul>
          </aside>
        </div>
      </Section>

      {/* Validation: qualitative honesty, no fractions */}
      <Section className="bg-surface">
        <div className="max-w-3xl">
          <h2 className="font-[family-name:var(--font-fraunces)] text-3xl font-medium text-ink md:text-4xl">
            What we’re validating
          </h2>
          <p className="prose-measure mt-8 text-lg text-muted">
            We’re not publishing lab scoreboards on a marketing site. What we care about in daily use is simpler and stricter:
          </p>
          <ul className="mt-10 space-y-8">
            <li className="max-w-2xl">
              <p className="font-[family-name:var(--font-fraunces)] text-2xl font-medium text-ink">
                Doesn’t fabricate answers
              </p>
              <p className="mt-3 text-muted">
                When the record doesn’t support a claim, the system should not invent a confident story to fill the gap.
              </p>
            </li>
            <li className="max-w-2xl">
              <p className="font-[family-name:var(--font-fraunces)] text-2xl font-medium text-ink">
                Combines related facts correctly
              </p>
              <p className="mt-3 text-muted">
                When two true details belong together, the answer should compose them — not return competing fragments or a false bridge.
              </p>
            </li>
          </ul>
          <p className="prose-measure mt-12 text-muted">
            Read more in the{" "}
            <Link href="/blog" className="text-ink underline decoration-accent/50 underline-offset-4">
              blog
            </Link>
            , or see who this is for on{" "}
            <Link href="/solutions" className="text-ink underline decoration-accent/50 underline-offset-4">
              Solutions
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section id="waitlist-block">
        <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:items-end">
          <div>
            <h2 className="font-[family-name:var(--font-fraunces)] text-3xl font-medium text-ink md:text-4xl">
              Join the waitlist
            </h2>
            <p className="prose-measure mt-6 text-lg text-muted">
              Pre-launch. We’ll reach out when access opens — no fabricated urgency, no fake scarcity.
            </p>
          </div>
          <WaitlistForm id="waitlist" />
        </div>
      </Section>
    </>
  );
}
