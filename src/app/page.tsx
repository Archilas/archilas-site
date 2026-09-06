import { Delivery } from "@/components/landing/Delivery";
import { Hero } from "@/components/landing/Hero";
import { MemoryHolds } from "@/components/landing/MemoryHolds";
import { Problem } from "@/components/landing/Problem";
import { Waitlist } from "@/components/landing/Waitlist";
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
      <Hero />
      <Problem />
      <MemoryHolds />
      <Delivery />
      <Waitlist />
    </>
  );
}
