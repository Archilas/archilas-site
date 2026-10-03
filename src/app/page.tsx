import { PlateDrift } from "@/components/PlateDrift";
import { AgentMemory } from "@/components/landing/AgentMemory";
import { CtaBand } from "@/components/landing/CtaBand";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Problem } from "@/components/landing/Problem";
import { WhoFor } from "@/components/landing/WhoFor";
import { WhyBetter } from "@/components/landing/WhyBetter";
import { JsonLd } from "@/components/JsonLd";
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
      <PlateDrift />
      <Hero />
      <Problem />
      <HowItWorks />
      <WhoFor />
      <WhyBetter />
      <AgentMemory />
      <CtaBand />
    </>
  );
}
