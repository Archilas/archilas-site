import { Section } from "@/components/Section";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Terms",
  description: "Terms for the Archilas marketing site and waitlist.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <Section>
      <p className="label">Legal</p>
      <h1 className="h2 mt-4">Terms</h1>
      <div className="mt-6 max-w-2xl space-y-4 text-body">
        <p>
          This site is a marketing page for a product that is not generally available. Joining the
          waitlist does not create a paid plan, a free plan, or a service commitment.
        </p>
        <p>
          Information on this site may change before launch. If something here conflicts with a later
          agreement, that later agreement controls.
        </p>
        <p>
          Questions:{" "}
          <a href={`mailto:${site.email}`} className="text-accent-solid underline-offset-4 hover:underline">
            {site.email}
          </a>
          .
        </p>
      </div>
    </Section>
  );
}
