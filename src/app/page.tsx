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

      <section>
        <div className="mx-auto flex w-full max-w-5xl flex-col px-6 pb-24 pt-20 md:px-8 md:pb-32 md:pt-28">
          <p className="fade-rise text-[15px] font-medium text-ink">{site.name}</p>
          <h1 className="fade-rise mt-8 max-w-2xl text-4xl font-medium leading-[1.15] tracking-tight text-ink md:text-5xl">
            A persistent memory layer for AI. It reasons over your history instead of searching old messages and pasting them into a prompt.
          </h1>
          <p className="fade-rise prose-measure mt-8 text-lg text-muted">
            Does not fabricate answers. Combines related facts correctly. Delivered into Claude, ChatGPT, Cursor, and other tools via{" "}
            <span className="mono text-[15px] text-ink">MCP</span>.
          </p>
          <div className="fade-rise mt-12">
            <WaitlistForm />
          </div>
        </div>
      </section>

      <Section className="border-t border-border">
        <div className="grid gap-16 md:grid-cols-[1.3fr_1fr] md:gap-20">
          <div>
            <h2 className="text-2xl font-medium tracking-tight text-ink md:text-3xl">
              How it works
            </h2>
            <p className="prose-measure mt-6 text-[17px] text-muted">
              Archilas keeps a compacted record of what matters from your work with AI: decisions, preferences, open loops, and the links between them. A local reasoning step works over that record so answers stay grounded. Results reach you through{" "}
              <span className="mono text-[14px] text-ink">MCP</span> inside the tools you already use.
            </p>
          </div>
          <aside className="code-panel px-5 py-5">
            <p className="text-[12px] text-muted">memory.load</p>
            <pre className="mt-4 overflow-x-auto whitespace-pre text-[13px] text-ink">{`{
  "preferences": [...],
  "decisions": [...],
  "open_loops": [...],
  "via": "mcp"
}`}</pre>
          </aside>
        </div>
      </Section>

      <Section className="border-t border-border bg-surface">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-medium tracking-tight text-ink md:text-3xl">
            What we validate
          </h2>
          <div className="mt-12 space-y-10">
            <div>
              <h3 className="text-lg font-medium text-ink">Does not fabricate answers</h3>
              <p className="mt-3 text-muted">
                When the record does not support a claim, the system should not invent one.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-ink">Combines related facts correctly</h3>
              <p className="mt-3 text-muted">
                When two true details belong together, the answer should compose them. Not competing fragments. Not a false bridge.
              </p>
            </div>
          </div>
          <p className="mt-12 text-muted">
            More in the{" "}
            <Link href="/blog" className="text-ink underline underline-offset-4">
              blog
            </Link>
            . Personas on{" "}
            <Link href="/solutions" className="text-ink underline underline-offset-4">
              Solutions
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section id="waitlist-block" className="border-t border-border">
        <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-end">
          <div>
            <h2 className="text-2xl font-medium tracking-tight text-ink md:text-3xl">
              Join the waitlist
            </h2>
            <p className="prose-measure mt-4 text-muted">
              Pre-launch. We will email you when access opens.
            </p>
          </div>
          <WaitlistForm id="waitlist" />
        </div>
      </Section>
    </>
  );
}
