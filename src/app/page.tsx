import { Card } from "@/components/Card";
import { CodeBlock } from "@/components/CodeBlock";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { JsonLd } from "@/components/JsonLd";
import { ProofDemo } from "@/components/ProofDemo";
import { Section } from "@/components/Section";
import { WaitlistForm } from "@/components/WaitlistForm";
import { buildMetadata, organizationJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";
import Link from "next/link";

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
      <Hero />

      <Section id="demo">
        <ProofDemo />
      </Section>

      <Section id="how" className="bg-surface">
        <HowItWorks />
      </Section>

      <Section id="product">
        <FeatureGrid />
      </Section>

      <Section id="developers" className="bg-surface">
        <div className="grid items-start gap-8 md:grid-cols-2">
          <div>
            <p className="label">Developers</p>
            <h2 className="h2 mt-4">MCP native. API and SDK when you need them.</h2>
            <p className="mt-4 max-w-md text-body">
              Point a host at mcp.archilas.com. Same structured evidence over MCP, API, or SDK.
            </p>
          </div>
          <CodeBlock label="MCP" code={mcpSnippet} />
        </div>
      </Section>

      <Section id="security">
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

      <Section id="waitlist" className="bg-surface">
        <Card className="mx-auto max-w-3xl px-7 py-10 md:px-12 md:py-12">
          <p className="label">Early access</p>
          <h2 className="h2 mt-4">Get in early.</h2>
          <p className="mt-4 max-w-md text-body">
            Pre-launch. We email when access opens.
          </p>
          <div className="mt-8">
            <WaitlistForm id="waitlist-form">
              <p className="mt-3 text-[13px] text-muted">
                <Link href="/privacy" className="text-ink underline-offset-4 hover:underline">
                  Privacy
                </Link>
              </p>
            </WaitlistForm>
          </div>
        </Card>
      </Section>
    </>
  );
}
