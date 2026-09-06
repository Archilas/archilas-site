import { ButtonGhost } from "@/components/ButtonGhost";
import { HowItWorksStage } from "@/components/landing/HowItWorksStage";
import { ProductWindow } from "@/components/landing/ProductWindow";
import { WaitlistForm } from "@/components/WaitlistForm";

export function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto flex w-full max-w-[var(--max-width)] flex-col items-center px-[var(--pad-x)] pb-6 pt-12 text-center md:pb-8 md:pt-16">
        <p className="label inline-flex rounded-[var(--arch-radius-control)] border border-border bg-elevated/80 px-3 py-1">
          Pre-launch
        </p>
        <h1 className="display mt-6 max-w-[16ch] md:max-w-[18ch]">
          RAG finds passages. Archilas keeps the picture.
        </h1>
        <p className="mt-5 max-w-lg text-[18px] leading-[1.4] text-body">
          Compact. Reason. Deliver.
        </p>
        <div className="mt-8 flex w-full flex-col items-center gap-3">
          <WaitlistForm id="hero-waitlist" source="hero" />
          <ButtonGhost href="/#how">See how it works</ButtonGhost>
        </div>
        <p className="mt-4 max-w-md text-[13px] text-muted">
          Early access. We email when we open.{" "}
          <a href="/privacy" className="text-ink underline-offset-4 hover:underline">
            Privacy
          </a>
          .
        </p>
      </div>

      <div id="how" className="scroll-mt-[var(--scroll-margin)] px-[var(--pad-x)] pb-14 md:pb-16">
        <ProductWindow title="Example record · drive the spine">
          <HowItWorksStage />
        </ProductWindow>
      </div>
    </section>
  );
}
