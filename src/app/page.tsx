import { DeliveryRail } from "@/components/landing/DeliveryRail";
import { Hero } from "@/components/landing/Hero";
import { Pipeline } from "@/components/landing/Pipeline";
import { RecordExplorer } from "@/components/landing/RecordExplorer";
import { RetrievalCompare } from "@/components/landing/RetrievalCompare";
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
      <Pipeline />
      <RecordExplorer />
      <RetrievalCompare />
      <DeliveryRail />
      <Waitlist />
    </>
  );
}
