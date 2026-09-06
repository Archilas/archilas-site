import { ExampleRecord } from "@/components/landing/ExampleRecord";
import { HowItWorksStepper } from "@/components/landing/HowItWorksStepper";

export function HowItWorks() {
  return (
    <section id="how" className="theme-dark scroll-mt-[var(--scroll-margin)]">
      <div className="mx-auto w-full max-w-[var(--max-width)] px-[var(--pad-x)] py-[var(--pad-y-mobile)] md:py-[var(--pad-y)]">
        <p className="label">How it works</p>
        <h2 className="h2 mt-4 max-w-xl">Compact. Reason. Deliver.</h2>
        <p className="mt-4 max-w-xl text-[16px] leading-[1.6] text-text-dark/80">
          Persistent memory is a layer: keep a living record, reason over what it actually holds,
          and send that into the hosts you already work in.
        </p>
        <div className="mt-8 grid items-start gap-6 lg:grid-cols-[1fr_0.95fr] lg:gap-10">
          <HowItWorksStepper />
          <ExampleRecord />
        </div>
      </div>
    </section>
  );
}
