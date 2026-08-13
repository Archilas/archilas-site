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
    points: ["Personal workspace", "MCP when available", "Community updates"],
  },
  {
    name: "Starter",
    price: "TBD",
    note: "Individuals across daily AI tools.",
    points: ["Higher capacity", "Priority access", "Email support at launch"],
    featured: true,
  },
  {
    name: "Team",
    price: "TBD",
    note: "Shared project memory.",
    points: ["Shared projects", "Admin controls", "Onboarding help"],
  },
];

const faqs = [
  {
    question: "Is pricing final?",
    answer: "No. Indicative tiers while we are pre-launch.",
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
      <Section className="!pb-8 !pt-12">
        <p className="mono text-[11px] uppercase tracking-[0.14em] text-muted">pricing</p>
        <h1 className="display mt-4 text-[40px] text-ink md:text-[48px]">Plans</h1>
        <p className="mt-4 max-w-md text-[15px] text-muted">
          Indicative. Subject to change. Packaging is not final.
        </p>
      </Section>

      <Section className="!pt-0">
        <div className="grid gap-3 md:grid-cols-3">
          {tiers.map((t) => (
            <article
              key={t.name}
              className={`rounded-sm border border-border p-6 ${
                t.featured ? "bg-ink text-bg" : "bg-bg"
              }`}
            >
              <div className="flex items-baseline justify-between">
                <h2 className="text-[15px] font-medium">{t.name}</h2>
                <p className="mono text-[13px]">{t.price}</p>
              </div>
              <p className={`mt-3 text-[13px] ${t.featured ? "text-white/60" : "text-muted"}`}>
                {t.note}
              </p>
              <ul
                className={`mt-6 space-y-2 border-t pt-5 text-[13px] ${
                  t.featured ? "border-white/10" : "border-border"
                }`}
              >
                {t.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border bg-surface">
        <div className="grid gap-8 md:grid-cols-2">
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
