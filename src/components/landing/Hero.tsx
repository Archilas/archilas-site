import { HowItWorksStage } from "@/components/landing/HowItWorksStage";
import { ProductWindow } from "@/components/landing/ProductWindow";
import { WaitlistForm } from "@/components/WaitlistForm";

export function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto flex w-full max-w-[var(--max-width)] flex-col items-center px-[var(--pad-x)] pb-10 pt-16 text-center md:pb-12 md:pt-24">
        <p className="label inline-flex rounded-[var(--arch-radius-control)] border border-border px-3 py-1">
          Pre-launch
        </p>
        <h1 className="display mt-7 max-w-[12ch]">Memory that stays.</h1>
        <p className="mt-5 max-w-md text-[18px] leading-[1.4] text-body">
          Compact. Reason. Deliver.
        </p>
        <div className="mt-8 flex w-full justify-center">
          <WaitlistForm id="hero-waitlist" source="hero" />
        </div>
        <p className="mt-4 max-w-md text-[13px] text-muted">
          Early access. We email when we open.{" "}
          <a href="/privacy" className="text-ink underline-offset-4 hover:underline">
            Privacy
          </a>
          .
        </p>
      </div>

      <div id="how" className="scroll-mt-[var(--scroll-margin)] px-[var(--pad-x)] pb-16 md:pb-24">
        <ProductWindow title="Example record">
          <HowItWorksStage />
        </ProductWindow>
      </div>
    </section>
  );
}
