import { Section } from "@/components/Section";
import { WaitlistForm } from "@/components/WaitlistForm";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, faqJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Pricing",
  description: "Indicative Archilas plans. Subject to change before launch.",
  path: "/pricing",
});

const tiers = [
  {
    name: "Free",
    price: "€0",
    note: "Early access personal limits.",
    points: ["Personal workspace", "MCP connect when available", "Community updates"],
  },
  {
    name: "Starter",
    price: "TBD",
    note: "Individuals using AI across daily tools.",
    points: ["Higher memory capacity", "Priority access", "Email support at launch"],
    featured: true,
  },
  {
    name: "Team",
    price: "TBD",
    note: "Shared project memory for small teams.",
    points: ["Shared projects", "Admin controls", "Onboarding help"],
  },
];

const faqs = [
  {
    question: "Is pricing final?",
    answer: "No. These are indicative tiers while we are pre-launch.",
  },
  {
    question: "Can I pay today?",
    answer: "No. Join the waitlist. We are not taking payment yet.",
  },
];

export default function PricingPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />

      <Section className="!pb-10 !pt-12 md:!pt-14">
        <p className="mono text-[12px] text-muted">pricing</p>
        <h1 className="mt-3 text-[36px] font-medium tracking-[-0.035em] text-ink md:text-[44px]">
          Simple plans
        </h1>
        <p className="mt-4 max-w-lg text-[15px] text-muted">
          Indicative and subject to change. Packaging is not finalized.
        </p>
      </Section>

      <Section className="!pt-0">
        <div className="grid gap-4 md:grid-cols-3">
          {tiers.map((t) => (
            <article
              key={t.name}
              className={`rounded-lg border border-border p-6 ${
                t.featured ? "bg-surface md:-mt-2 md:mb-2 md:p-7" : "bg-bg"
              }`}
            >
              <div className="flex items-baseline justify-between">
                <h2 className="text-[16px] font-medium text-ink">{t.name}</h2>
                <p className="mono text-[13px] text-ink">{t.price}</p>
              </div>
              <p className="mt-3 text-[13px] text-muted">{t.note}</p>
              <ul className="mt-6 space-y-2 border-t border-border pt-5 text-[13px] text-ink">
                {t.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-6 text-[12px] text-muted">
          Exact amounts publish with launch packaging.
        </p>
      </Section>

      <Section className="border-t border-border bg-surface">
        <div className="grid gap-10 md:grid-cols-2">
          {faqs.map((f) => (
            <div key={f.question}>
              <h2 className="text-[15px] font-medium text-ink">{f.question}</h2>
              <p className="mt-2 text-[14px] text-muted">{f.answer}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 max-w-md">
          <WaitlistForm id="pricing-waitlist" />
        </div>
      </Section>
    </>
  );
}
