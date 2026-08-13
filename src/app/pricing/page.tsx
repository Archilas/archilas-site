import { Section } from "@/components/Section";
import { WaitlistForm } from "@/components/WaitlistForm";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, faqJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Pricing",
  description:
    "Indicative Archilas pricing tiers for individuals and teams. Subject to change before launch.",
  path: "/pricing",
});

const tiers = [
  {
    name: "Free",
    price: "€0",
    note: "Personal memory limits during early access.",
    points: ["Personal memory workspace", "Connect via MCP when available", "Community updates"],
  },
  {
    name: "Starter",
    price: "Indicative",
    note: "For individual builders who want durable memory across daily tools.",
    points: ["Higher memory capacity", "Priority waitlist for paid access", "Email support at launch"],
  },
  {
    name: "Team",
    price: "Indicative",
    note: "For small teams sharing constraints and project memory.",
    points: ["Shared project memory", "Admin controls at launch", "Onboarding help"],
  },
];

const faqs = [
  {
    question: "Is this final pricing?",
    answer:
      "No. These tiers are indicative placeholders while Archilas is pre-launch. Numbers and limits will be published when packaging is finalized.",
  },
  {
    question: "Do you take payment today?",
    answer:
      "No. Join the waitlist for access. We are not taking payment for a product that is not generally available yet.",
  },
];

export default function PricingPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />

      <Section className="!pt-16 md:!pt-24">
        <h1 className="max-w-2xl text-4xl font-medium tracking-tight text-ink md:text-5xl">
          Pricing
        </h1>
        <p className="prose-measure mt-6 text-lg text-muted">
          Tiers below are indicative and subject to change. Packaging is not finalized.
        </p>
      </Section>

      <Section className="border-t border-border">
        <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr]">
          <article className="border border-border bg-surface px-8 py-10 md:px-10 md:py-12">
            <p className="mono text-[12px] text-muted">primary</p>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-ink">{tiers[1].name}</h2>
            <p className="mt-2 text-lg text-ink">{tiers[1].price}</p>
            <p className="prose-measure mt-5 text-muted">{tiers[1].note}</p>
            <ul className="mt-8 space-y-3 text-[15px] text-ink">
              {tiers[1].points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </article>
          <div className="flex flex-col gap-8">
            {[tiers[0], tiers[2]].map((t) => (
              <article key={t.name} className="border border-border px-6 py-8">
                <h2 className="text-xl font-medium tracking-tight text-ink">{t.name}</h2>
                <p className="mt-2 text-ink">{t.price}</p>
                <p className="mt-4 text-[15px] text-muted">{t.note}</p>
                <ul className="mt-5 space-y-2 text-sm text-ink">
                  {t.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
        <p className="mt-10 text-sm text-muted">
          Currency and exact amounts will be announced with launch packaging.
        </p>
      </Section>

      <Section className="border-t border-border bg-surface">
        <h2 className="text-2xl font-medium tracking-tight text-ink">Questions</h2>
        <div className="mt-12 grid gap-12 md:grid-cols-2">
          {faqs.map((f) => (
            <div key={f.question}>
              <h3 className="text-[16px] font-medium text-ink">{f.question}</h3>
              <p className="mt-3 text-[15px] text-muted">{f.answer}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 max-w-md">
          <WaitlistForm id="pricing-waitlist" />
        </div>
      </Section>
    </>
  );
}
