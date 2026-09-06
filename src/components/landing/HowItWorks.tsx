import { HowItWorksStage } from "@/components/landing/HowItWorksStage";
import { Reveal } from "@/components/Reveal";

export function HowItWorks() {
  return (
    <section id="how" className="theme-dark scroll-mt-[var(--scroll-margin)]">
      <div className="mx-auto w-full max-w-[var(--max-width)] px-[var(--pad-x)] py-[var(--pad-y-mobile)] md:py-[var(--pad-y)]">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="label">How it works</p>
            <h2 className="h2 mt-4">Compact. Reason. Deliver.</h2>
          </div>
          <HowItWorksStage />
        </Reveal>
      </div>
    </section>
  );
}
