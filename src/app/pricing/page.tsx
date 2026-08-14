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
    n: "01",
    name: "Free",
    price: "€0",
    note: "Early access personal limits.",
    points: ["Personal workspace", "MCP when available", "Community updates"],
  },
  {
    n: "02",
    name: "Starter",
    price: "TBD",
    note: "Individuals across daily AI tools.",
    points: ["Higher capacity", "Priority access", "Email support at launch"],
  },
  {
    n: "03",
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
      <Section className="!pb-8 !pt-16">
        <p className="kicker">Pricing</p>
        <h1 className="display mt-4 text-[clamp(2.8rem,7vw,5rem)] text-ink">
          Plans, for now.
        </h1>
        <p className="mt-5 max-w-md text-[17px] text-muted">
          Indicative. Subject to change. Packaging is not final.
        </p>
      </Section>

      <Section className="!pt-0">
        {tiers.map((t) => (
          <article key={t.name} className="entry">
            <p className="entry-num">{t.n}</p>
            <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-start">
              <div>
                <h2 className="display text-[32px] text-ink">{t.name}</h2>
                <p className="mt-2 text-[17px] text-muted">{t.note}</p>
                <ul className="mt-4 space-y-1 text-[16px] text-ink/90">
                  {t.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
              <p className="mono text-[13px] tracking-[0.12em] text-brass">{t.price}</p>
            </div>
          </article>
        ))}
      </Section>

      <Section className="border-t border-border">
        <div className="grid gap-10 md:grid-cols-2">
          {faqs.map((f) => (
            <div key={f.question}>
              <h2 className="text-[22px] italic text-ink">{f.question}</h2>
              <p className="mt-3 text-[17px] text-muted">{f.answer}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <WaitlistForm id="pricing-waitlist" />
        </div>
      </Section>
    </>
  );
}
