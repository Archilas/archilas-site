import { Section } from "@/components/Section";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Privacy",
  description: "How Archilas handles waitlist email and site data.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <Section>
      <p className="label">Legal</p>
      <h1 className="h2 mt-4">Privacy</h1>
      <div className="mt-6 max-w-2xl space-y-4 text-body">
        <p>
          Archilas is pre-launch. The marketing site stores an email address when you join the
          waitlist so we can tell you when access opens.
        </p>
        <p>
          We do not sell that email. We do not publish customer lists, usage counts, or
          certifications we do not hold.
        </p>
        <p>
          You can ask us to remove your email by writing to{" "}
          <a href={`mailto:${site.email}`} className="text-ink underline-offset-4 hover:underline">
            {site.email}
          </a>
          .
        </p>
      </div>
    </Section>
  );
}
