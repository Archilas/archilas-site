import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { ProductPanel } from "@/components/ProductPanel";
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

      <section className="relative overflow-hidden">
        <div className="mx-auto grid w-full max-w-[1120px] gap-12 px-5 pb-20 pt-16 md:grid-cols-[1fr_1.05fr] md:items-center md:gap-14 md:px-8 md:pb-24 md:pt-20">
          <div className="hero-rise">
            <Link
              href="/blog"
              className="inline-flex items-center rounded-[10px] border border-border bg-white/[0.03] px-3 py-1 text-[12px] text-muted transition hover:border-border-strong hover:text-ink"
            >
              New writing on memory vs RAG
              <span className="ml-2 text-ink/50">›</span>
            </Link>
            <h1 className="display display-gradient mt-8 max-w-[11ch] text-[clamp(3.25rem,8vw,5.75rem)]">
              Memory for
              <br />
              <em>AI tools.</em>
            </h1>
            <p className="mt-7 max-w-md text-[16px] leading-relaxed text-muted">
              A persistent memory layer that reasons over your history instead of searching old messages and pasting them into a prompt.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#waitlist" className="btn btn-primary">
                Join waitlist
              </a>
              <Link href="/blog/what-is-mcp" className="btn btn-secondary">
                Why MCP
              </Link>
            </div>
            <p className="mono mt-5 text-[11px] text-muted">claude · chatgpt · cursor</p>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-8 rounded-[32px] bg-[radial-gradient(circle_at_50%_40%,rgba(190,198,230,0.12),transparent_60%)]"
            />
            <ProductPanel />
          </div>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto flex justify-center">
            <div className="nodes" aria-hidden>
              <span />
              <span />
              <span />
            </div>
          </div>
          <h2 className="display mt-8 text-[clamp(2.25rem,5vw,3.25rem)] text-ink">
            Compact tonight.
            <em className="text-muted"> Reason tomorrow.</em>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[15px] text-muted">
            Keep decisions and open loops as structured facts. Compose only what the record supports. Deliver into the hosts you already use over MCP.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {[
            {
              k: "compact",
              t: "Durable facts",
              d: "Preferences, decisions, open loops. Revisable. Not a transcript dump.",
            },
            {
              k: "reason",
              t: "Grounded composition",
              d: "Combine related facts when supported. Stay quiet when they are not.",
            },
            {
              k: "deliver",
              t: "MCP to your tools",
              d: "Same memory layer in Claude, ChatGPT, Cursor, and agents.",
            },
          ].map((item) => (
            <article key={item.k} className="card p-6 md:p-7">
              <p className="mono text-[11px] text-muted">{item.k}</p>
              <h3 className="mt-3 text-[16px] font-medium tracking-tight text-ink">{item.t}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">{item.d}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="border-y border-border bg-surface/60">
        <div className="grid gap-4 md:grid-cols-2">
          <article className="card p-7 md:p-8">
            <p className="mono text-[11px] text-muted">usual path</p>
            <h2 className="mt-3 text-[24px] font-medium tracking-tight text-ink">
              Search. Paste. Hope.
            </h2>
            <p className="mt-4 text-[14px] leading-relaxed text-muted">
              RAG finds snippets. The model stitches them in the prompt. Related facts drift. Gaps get fluent guesses.
            </p>
          </article>
          <article className="card p-7 md:p-8">
            <p className="mono text-[11px] text-muted">archilas</p>
            <h2 className="mt-3 text-[24px] font-medium tracking-tight text-ink">
              Compact. Reason. Deliver.
            </h2>
            <p className="mt-4 text-[14px] leading-relaxed text-muted">
              A living record. Composition with restraint. Context pushed into your tools without inventing the missing link.
            </p>
          </article>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <article className="card p-7">
            <h3 className="text-[15px] font-medium text-ink">Does not fabricate</h3>
            <p className="mt-2 text-[14px] text-muted">
              Incomplete memory stays incomplete. Fluency is not permission to invent.
            </p>
          </article>
          <article className="card p-7">
            <h3 className="text-[15px] font-medium text-ink">Combines related facts</h3>
            <p className="mt-2 text-[14px] text-muted">
              When two true details belong together, you get one answer. Not competing fragments.
            </p>
          </article>
        </div>
      </Section>

      <Section id="waitlist">
        <div className="card mx-auto max-w-3xl px-7 py-10 text-center md:px-12 md:py-14">
          <p className="mono text-[11px] text-muted">early access</p>
          <h2 className="display display-gradient mt-4 text-[clamp(2.25rem,5vw,3.25rem)]">
            Get in early.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] text-muted">
            Pre-launch. We email when access opens.
          </p>
          <div className="mx-auto mt-8 flex justify-center">
            <WaitlistForm id="waitlist-form" />
          </div>
        </div>
      </Section>
    </>
  );
}
