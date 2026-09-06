import { Hero } from "@/components/landing/Hero";
import { SupportCards } from "@/components/landing/SupportCards";
import { SurfacesRail } from "@/components/landing/SurfacesRail";
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
      <SupportCards />
      <SurfacesRail />
      <Waitlist />
    </>
  );
}
