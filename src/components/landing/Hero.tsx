import { ChapterRule } from "@/components/ChapterRule";
import { HowItWorksStage } from "@/components/landing/HowItWorksStage";
import { ProductWindow } from "@/components/landing/ProductWindow";
import { WaitlistForm } from "@/components/WaitlistForm";

export function Hero() {
  return (
    <section className="hero-chapter">
      <div className="mx-auto grid w-full max-w-[var(--max-width)] grid-cols-12 items-start gap-x-10 gap-y-6 px-[var(--pad-x)] pb-7 pt-6 lg:pb-8 lg:pt-7">
        <div className="col-span-12 text-left lg:col-span-6">
          <ChapterRule index="01" title="Record" />
          <h1 className="display mt-5 max-w-[14ch]">Passages aren&apos;t memory. A record is.</h1>
          <p className="mt-4 max-w-md text-[17px] leading-[1.4] text-body">
            Preferences, decisions, open loops — Compact. Reason. Deliver.
          </p>
          <div className="mt-6">
            <WaitlistForm id="hero-waitlist" source="hero" />
          </div>
          <p className="mt-3 max-w-md text-[13px] text-muted">
            Early access. We email when we open.{" "}
            <a href="/privacy" className="text-ink underline-offset-4 hover:underline">
              Privacy
            </a>
            .
          </p>
        </div>

        <div id="record" className="col-span-12 min-w-0 scroll-mt-[var(--scroll-margin)] lg:col-span-6">
          <ProductWindow title="record">
            <HowItWorksStage />
          </ProductWindow>
        </div>
      </div>
    </section>
  );
}
