import { HowItWorksStage } from "@/components/landing/HowItWorksStage";
import { ProductWindow } from "@/components/landing/ProductWindow";
import { WaitlistForm } from "@/components/WaitlistForm";

export function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto flex w-full max-w-[var(--max-width)] flex-col items-center px-[var(--pad-x)] pb-10 pt-16 text-center md:pb-14 md:pt-24">
        <p className="label glass-chip inline-flex px-3 py-1">Pre-launch</p>
        <h1 className="display mt-7 max-w-[18ch]">
          Memory that stays with your AI
        </h1>
        <p className="mt-5 max-w-lg text-[17px] leading-[1.45] text-body">
          A compact record of preferences, decisions, and open loops — delivered into the tools you
          already use.
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

      <div
        id="how"
        className="hero-preview-in scroll-mt-[var(--scroll-margin)] px-[var(--pad-x)] pb-16 md:pb-24"
      >
        <ProductWindow title="Example record">
          <HowItWorksStage />
        </ProductWindow>
      </div>
    </section>
  );
}
