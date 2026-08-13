import { Section } from "@/components/Section";
import { WaitlistForm } from "@/components/WaitlistForm";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, faqJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Pricing",
  description:
    "Indicative Archilas pricing tiers for individuals and teams. Subject to change before launch — no fake urgency.",
  path: "/pricing",
});

const tiers = [
  {
    name: "Free",
    price: "€0",
    note: "Explore personal memory limits during early access.",
    points: ["Personal memory workspace", "Connect via MCP when available", "Community updates"],
  },
  {
    name: "Starter",
    price: "Indicative",
    note: "For individual builders who want durable memory across daily tools.",
    points: ["Higher memory capacity", "Priority waitlist for paid access", "Email support at launch"],
    highlight: true,
  },
  {
    name: "Team",
    price: "Indicative",
    note: "For small teams sharing constraints and project memory intentionally.",
    points: ["Shared project memory", "Admin controls (at launch)", "Onboarding help"],
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
      "No. Join the waitlist for access. We will not invent scarcity or ask you to pay for a product that is not generally available yet.",
  },
];

export default function PricingPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />

      <Section className="noise radial-accent !pt-16 md:!pt-24">
        <h1 className="max-w-3xl font-[family-name:var(--font-fraunces)] text-4xl font-medium text-ink md:text-6xl">
          Pricing that will stay honest
        </h1>
        <p className="prose-measure mt-8 text-lg text-muted">
          Tiers below are <strong className="font-medium text-ink">indicative and subject to change</strong>. Real packaging is not finalized. No customer counts. No “only 3 spots left.”
        </p>
      </Section>

      {/* Asymmetric: primary Starter emphasized, not three equal cards */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr]">
          <article className="bg-surface px-8 py-12 md:px-12 md:py-16">
            <p className="text-sm font-medium uppercase tracking-[0.08em] text-accent">
              Likely primary
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-fraunces)] text-4xl font-medium text-ink">
              {tiers[1].name}
            </h2>
            <p className="mt-2 text-2xl text-ink">{tiers[1].price}</p>
            <p className="prose-measure mt-6 text-muted">{tiers[1].note}</p>
            <ul className="mt-10 space-y-4 text-ink">
              {tiers[1].points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </article>
          <div className="flex flex-col gap-8">
            {[tiers[0], tiers[2]].map((t) => (
              <article key={t.name} className="bg-bg px-8 py-10">
                <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-medium text-ink">
                  {t.name}
                </h2>
                <p className="mt-2 text-lg text-ink">{t.price}</p>
                <p className="mt-4 text-muted">{t.note}</p>
                <ul className="mt-6 space-y-3 text-sm text-ink">
                  {t.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
        <p className="mt-10 text-sm text-muted">
          Currency and exact amounts will be announced with launch packaging. Treat everything on this page as directional.
        </p>
      </Section>

      <Section className="bg-surface">
        <h2 className="font-[family-name:var(--font-fraunces)] text-3xl font-medium text-ink">
          Questions
        </h2>
        <div className="mt-12 grid gap-12 md:grid-cols-2">
          {faqs.map((f) => (
            <div key={f.question}>
              <h3 className="text-lg font-medium text-ink">{f.question}</h3>
              <p className="mt-3 text-muted">{f.answer}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 max-w-xl">
          <WaitlistForm id="pricing-waitlist" />
        </div>
      </Section>
    </>
  );
}
