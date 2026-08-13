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

      <section className="relative overflow-hidden border-b border-border">
        {/* Oversized brand stamp — identity, not decoration fluff */}
        <p
          aria-hidden
          className="pointer-events-none absolute -right-6 top-8 select-none text-[18vw] font-medium leading-none tracking-[-0.06em] text-ink/[0.035] md:top-0 md:text-[12vw]"
        >
          ARCHILAS
        </p>

        <div className="relative mx-auto grid w-full max-w-[1180px] gap-12 px-5 pb-16 pt-14 md:grid-cols-[0.95fr_1.15fr] md:items-end md:gap-10 md:px-8 md:pb-20 md:pt-16">
          <div className="hero-rise max-w-xl">
            <p className="mono text-[11px] uppercase tracking-[0.16em] text-muted">
              persistent memory layer
            </p>
            <h1 className="display mt-5 text-[44px] text-ink md:text-[56px]">
              AI that remembers
              <br />
              what you decided.
            </h1>
            <p className="mt-6 max-w-[34rem] text-[16px] leading-relaxed text-muted">
              A persistent memory layer for AI. It reasons over your history instead of searching old messages and pasting them into a prompt.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#waitlist" className="btn btn-primary">
                Join waitlist
              </a>
              <Link href="/blog/ai-memory-vs-rag" className="btn btn-secondary">
                Memory vs RAG
              </Link>
            </div>
            <p className="mono mt-5 text-[11px] text-muted">
              claude · chatgpt · cursor · mcp
            </p>
          </div>

          <ProductPanel />
        </div>
      </section>

      {/* Contrast strip: search paste vs memory compose */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1180px] md:grid-cols-2">
          <div className="border-b border-border px-5 py-12 md:border-b-0 md:border-r md:px-8 md:py-14">
            <p className="mono text-[11px] uppercase tracking-[0.14em] text-muted">usual path</p>
            <h2 className="mt-3 text-[22px] font-medium tracking-[-0.03em] text-ink">
              Search. Paste. Hope.
            </h2>
            <p className="mt-4 max-w-md text-[14px] leading-relaxed text-muted">
              RAG finds snippets. The model stitches them in the prompt. Related facts drift apart. Gaps get filled with fluent guesses.
            </p>
          </div>
          <div className="bg-ink px-5 py-12 text-bg md:px-8 md:py-14">
            <p className="mono text-[11px] uppercase tracking-[0.14em] text-white/45">archilas</p>
            <h2 className="mt-3 text-[22px] font-medium tracking-[-0.03em]">
              Compact. Reason. Deliver.
            </h2>
            <p className="mt-4 max-w-md text-[14px] leading-relaxed text-white/65">
              Keep a living record. Compose only what it supports. Push grounded context into the tools you already use over MCP.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.14em] text-muted">pipeline</p>
            <h2 className="mt-3 max-w-md text-[30px] font-medium tracking-[-0.035em] text-ink md:text-[36px]">
              Three moves. No mystery stack.
            </h2>
          </div>
          <p className="max-w-sm text-[14px] text-muted">
            Compacted memory, local reasoning, MCP delivery into Claude, ChatGPT, and Cursor.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-sm border border-border bg-bg">
          {[
            {
              k: "compact",
              t: "Write durable facts",
              d: "Decisions, preferences, open loops. Structured and revisable. Not another chat log.",
            },
            {
              k: "reason",
              t: "Compose without inventing",
              d: "Pull related facts together when the record supports it. Refuse the rest.",
            },
            {
              k: "deliver",
              t: "Meet the host over MCP",
              d: "Same memory layer, many surfaces. Your history is not stuck in one product.",
            },
          ].map((row, i, arr) => (
            <div
              key={row.k}
              className={`grid gap-2 px-5 py-6 md:grid-cols-[140px_1fr_1.2fr] md:items-baseline md:gap-8 md:px-6 ${
                i < arr.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <p className="mono text-[12px] text-muted">{row.k}</p>
              <h3 className="text-[16px] font-medium tracking-tight text-ink">{row.t}</h3>
              <p className="text-[14px] text-muted">{row.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-y border-border bg-surface">
        <div className="grid gap-8 md:grid-cols-[1fr_1.1fr] md:gap-16">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.14em] text-muted">standard</p>
            <h2 className="mt-3 text-[30px] font-medium tracking-[-0.035em] text-ink md:text-[36px]">
              The bar is restraint.
            </h2>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-[15px] font-medium text-ink">Does not fabricate</h3>
              <p className="mt-2 text-[14px] text-muted">
                Incomplete memory stays incomplete. Fluency is not a license to invent.
              </p>
            </div>
            <div>
              <h3 className="text-[15px] font-medium text-ink">Combines related facts</h3>
              <p className="mt-2 text-[14px] text-muted">
                When two true details belong together, you get one answer. Not competing fragments.
              </p>
            </div>
            <Link
              href="/solutions"
              className="inline-block text-[13px] font-medium text-ink underline underline-offset-4"
            >
              Who this is for
            </Link>
          </div>
        </div>
      </Section>

      <Section id="waitlist">
        <div className="overflow-hidden rounded-sm border border-border bg-ink text-bg">
          <div className="grid md:grid-cols-[1.25fr_1fr]">
            <div className="border-b border-white/10 p-7 md:border-b-0 md:border-r md:p-10">
              <p className="mono text-[11px] uppercase tracking-[0.14em] text-white/45">waitlist</p>
              <h2 className="mt-3 text-[28px] font-medium tracking-[-0.035em] md:text-[32px]">
                Get in early.
              </h2>
              <p className="mt-3 max-w-sm text-[14px] text-white/65">
                Pre-launch. We email when access opens.
              </p>
            </div>
              <div className="flex items-center p-7 md:p-10">
                <WaitlistForm id="waitlist-form" tone="dark" />
              </div>
          </div>
        </div>
      </Section>
    </>
  );
}
