import { ClarityDemo } from "@/components/landing/ClarityDemo";

export function FeatureBand() {
  return (
    <section id="product" className="feature-ink scroll-mt-[var(--scroll-margin)] px-[var(--pad-x)] py-16 md:py-24">
      <div className="mx-auto mb-10 flex max-w-[var(--max-width)] flex-col gap-3 md:mb-14 md:flex-row md:items-end md:justify-between">
        <h2 className="feature-title">a living record</h2>
        <p className="max-w-md text-[16px] leading-7 text-white/70">
          Preferences, decisions, and open loops — compacted from the mess, then answered at query time.
        </p>
      </div>
      <div className="mx-auto max-w-[var(--max-width)]">
        <ClarityDemo />
      </div>
    </section>
  );
}
