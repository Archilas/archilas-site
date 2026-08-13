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

const steps = [
  {
    label: "01",
    title: "Compact memory",
    body: "Keep decisions, preferences, and open loops as structured facts. Not a transcript dump.",
  },
  {
    label: "02",
    title: "Local reasoning",
    body: "Compose only what the record supports. Stay silent when it does not.",
  },
  {
    label: "03",
    title: "MCP delivery",
    body: "Ship context into Claude, ChatGPT, Cursor, and agents through a standard interface.",
  },
];

const traits = [
  {
    title: "Grounded",
    body: "If the memory does not support a claim, Archilas will not invent one.",
  },
  {
    title: "Composed",
    body: "Related facts land as one answer, not two competing snippets from search.",
  },
  {
    title: "Portable",
    body: "One memory layer. Many hosts. Your history is not trapped in a single chat product.",
  },
  {
    title: "Developer-native",
    body: "Treat memory like infrastructure: query it, resolve conflicts, load it at session start.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />

      {/* Hero: copy + product panel filling the viewport like Resend/Cursor */}
      <section className="border-b border-border">
        <div className="mx-auto grid w-full max-w-[1120px] gap-10 px-5 pb-14 pt-12 md:grid-cols-[1fr_1.05fr] md:items-center md:gap-12 md:px-8 md:pb-16 md:pt-14">
          <div className="fade-in">
            <p className="mono text-[12px] text-muted">persistent memory · mcp</p>
            <h1 className="mt-4 max-w-xl text-[40px] font-medium leading-[1.08] tracking-[-0.035em] text-ink md:text-[48px]">
              Persistent memory for AI.
            </h1>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
              It reasons over your history instead of searching old messages and pasting them into a prompt.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#waitlist" className="btn btn-primary">
                Join waitlist
              </a>
              <Link href="/blog/what-is-mcp" className="btn btn-secondary">
                Why MCP
              </Link>
            </div>
            <p className="mt-4 text-[12px] text-muted">
              Pre-launch. Works with Claude, ChatGPT, Cursor.
            </p>
          </div>
          <ProductPanel />
        </div>
      </section>

      <Section>
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="mono text-[12px] text-muted">how it works</p>
            <h2 className="mt-2 text-[28px] font-medium tracking-[-0.03em] text-ink md:text-[32px]">
              Memory as infrastructure
            </h2>
          </div>
        </div>
        <div className="mt-10 grid border-t border-border md:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={s.label}
              className={`border-border py-8 md:px-6 md:py-10 ${i === 0 ? "md:pl-0" : "md:border-l"} ${i < steps.length - 1 ? "border-b md:border-b-0" : ""}`}
            >
              <p className="mono text-[12px] text-muted">{s.label}</p>
              <h3 className="mt-3 text-[16px] font-medium tracking-tight text-ink">{s.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-y border-border bg-surface">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.3fr] md:gap-14">
          <div>
            <p className="mono text-[12px] text-muted">product bar</p>
            <h2 className="mt-2 text-[28px] font-medium tracking-[-0.03em] text-ink md:text-[32px]">
              Built for daily AI work
            </h2>
            <p className="mt-4 text-[14px] leading-relaxed text-muted">
              Session windows reset. Chat logs are noisy. Search returns fragments. Archilas keeps a compact record you can actually reason over.
            </p>
            <Link href="/solutions" className="mt-6 inline-block text-[13px] font-medium text-ink underline underline-offset-4">
              See who it is for
            </Link>
          </div>
          <div className="grid sm:grid-cols-2">
            {traits.map((t, i) => (
              <div
                key={t.title}
                className={`border-border bg-bg p-5 md:p-6 ${
                  i % 2 === 0 ? "sm:border-r" : ""
                } ${i < 2 ? "border-b" : ""} border`}
              >
                <h3 className="text-[15px] font-medium text-ink">{t.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="waitlist">
        <div className="panel grid md:grid-cols-[1.2fr_1fr]">
          <div className="border-b border-border p-6 md:border-b-0 md:border-r md:p-8">
            <p className="mono text-[12px] text-muted">early access</p>
            <h2 className="mt-2 text-[24px] font-medium tracking-[-0.03em] text-ink md:text-[28px]">
              Get access when we open
            </h2>
            <p className="mt-3 max-w-sm text-[14px] text-muted">
              Join the waitlist. We email when the product is ready. No payment today.
            </p>
          </div>
          <div className="flex items-center p-6 md:p-8">
            <WaitlistForm id="waitlist-form" />
          </div>
        </div>
      </Section>
    </>
  );
}
