import { ButtonPrimary } from "@/components/ButtonPrimary";
import { ButtonSecondary } from "@/components/ButtonSecondary";
import { Card } from "@/components/Card";
import { CodeBlock } from "@/components/CodeBlock";
import { JsonLd } from "@/components/JsonLd";
import { ProductPanel } from "@/components/ProductPanel";
import { Section } from "@/components/Section";
import { TrustRow } from "@/components/TrustRow";
import { WaitlistForm } from "@/components/WaitlistForm";
import { buildMetadata, organizationJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: site.name,
  description: site.description,
  path: "/",
});

const mcpSnippet = `{
  "mcpServers": {
    "archilas": {
      "url": "https://mcp.archilas.com"
    }
  }
}`;

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />

      <section className="relative overflow-hidden">
        <div className="mx-auto grid w-full max-w-[var(--max-width)] gap-12 px-[var(--pad-x)] pb-16 pt-14 md:grid-cols-[1fr_1.05fr] md:items-center md:gap-14 md:pb-20 md:pt-16">
          <div className="hero-rise">
            <p className="label">AI memory infrastructure</p>
            <h1 className="display mt-6 max-w-[12ch]">Memory for AI tools.</h1>
            <p className="mt-6 max-w-md text-[17px] leading-[1.6] text-body">
              Structured evidence: claims, commitments, and signals with confidence. Not raw
              transcripts. MCP native, plus API and SDK.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonPrimary href="#waitlist">Join waitlist</ButtonPrimary>
              <ButtonSecondary href="/#developers">MCP server</ButtonSecondary>
            </div>
            <div className="mt-8">
              <TrustRow items={["MCP native", "API and SDK", "Structured evidence"]} />
            </div>
          </div>

          <div className="relative">
            <ProductPanel />
          </div>
        </div>
      </section>

      <Section id="product">
        <div className="mx-auto max-w-2xl text-center">
          <p className="label">Product</p>
          <h2 className="h2 mt-4">Compact tonight. Reason tomorrow.</h2>
          <p className="mx-auto mt-5 max-w-lg text-body">
            Keep decisions and open loops as structured facts. Compose only what the record
            supports. Deliver into the hosts you already use over MCP.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
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
            <Card key={item.k} className="p-6">
              <p className="mono text-muted">{item.k}</p>
              <h3 className="h3 mt-3">{item.t}</h3>
              <p className="mt-2 text-[15px] leading-[1.6] text-body">{item.d}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="how" className="bg-surface">
        <p className="label">How it works</p>
        <h2 className="h2 mt-4 max-w-xl">Search and paste is not memory.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Card className="p-6 md:p-7">
            <p className="mono text-muted">usual path</p>
            <h3 className="h3 mt-3">Search. Paste. Hope.</h3>
            <p className="mt-3 text-[15px] leading-[1.6] text-body">
              RAG finds snippets. The model stitches them in the prompt. Related facts drift. Gaps
              get fluent guesses.
            </p>
          </Card>
          <Card className="p-6 md:p-7">
            <p className="mono text-muted">archilas</p>
            <h3 className="h3 mt-3">Compact. Reason. Deliver.</h3>
            <p className="mt-3 text-[15px] leading-[1.6] text-body">
              A living record. Composition with restraint. Context pushed into your tools without
              inventing the missing link.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="developers">
        <div className="grid items-start gap-8 md:grid-cols-2">
          <div>
            <p className="label">Developers</p>
            <h2 className="h2 mt-4">MCP native. API and SDK when you need them.</h2>
            <p className="mt-4 max-w-md text-body">
              Point a host at mcp.archilas.com. Same structured evidence over MCP, API, or SDK.
              Docs expand here in a later pass.
            </p>
          </div>
          <CodeBlock label="MCP" code={mcpSnippet} />
        </div>
      </Section>

      <Section id="security" className="bg-surface">
        <p className="label">Security</p>
        <h2 className="h2 mt-4 max-w-xl">Evidence you can inspect.</h2>
        <p className="mt-4 max-w-lg text-body">
          Claims, commitments, and signals carry confidence. We do not invent certifications we do
          not hold.
        </p>
        <div className="mt-6 flex h-fit flex-wrap gap-3">
          <span className="text-[13px] font-medium text-confidence-high">High confidence</span>
          <span className="text-[13px] font-medium text-confidence-mid">Mid confidence</span>
          <span className="text-[13px] font-medium text-confidence-low">Low confidence</span>
        </div>
      </Section>

      <Section id="waitlist">
        <Card className="mx-auto max-w-3xl px-7 py-10 text-center md:px-12 md:py-12">
          <p className="label">Early access</p>
          <h2 className="h2 mt-4">Get in early.</h2>
          <p className="mx-auto mt-4 max-w-md text-body">
            Pre-launch. We email when access opens. Waitlist is the only conversion goal.
          </p>
          <div className="mx-auto mt-8 flex justify-center">
            <WaitlistForm id="waitlist-form" />
          </div>
        </Card>
      </Section>
    </>
  );
}
