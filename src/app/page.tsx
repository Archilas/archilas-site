import { PlateDrift } from "@/components/PlateDrift";
import { CompareScroll } from "@/components/landing/CompareScroll";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Surfaces } from "@/components/landing/Surfaces";
import { Waitlist } from "@/components/landing/Waitlist";
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
      <CompareScroll />
      <HowItWorks />
      <WhyBetter />
      <Surfaces />
      <Waitlist />
    </>
  );
}
