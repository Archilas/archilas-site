import { ButtonSecondary } from "@/components/ButtonSecondary";
import { WaitlistForm } from "@/components/WaitlistForm";

export function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto flex w-full max-w-[var(--max-width)] flex-col items-center px-[var(--pad-x)] py-[var(--pad-y-mobile)] text-center md:py-[var(--pad-y)]">
        <p className="label glass-chip inline-flex px-3 py-1">
          Pre-launch
        </p>
        <h1 className="display mt-6 max-w-3xl">
          Memory that stays with your AI — across sessions and tools
        </h1>
        <p className="mt-6 max-w-xl text-[17px] leading-[1.6] text-body">
          A living, compact record of preferences, decisions, and open loops — delivered into the
          tools you already work in.
        </p>
        <div className="mt-8 flex w-full justify-center">
          <WaitlistForm id="hero-waitlist" source="hero" />
        </div>
        <div className="mt-4">
          <ButtonSecondary href="/#how">How it works</ButtonSecondary>
        </div>
        <p className="mt-5 max-w-md text-[13px] text-muted">
          Early access. We email when we open.{" "}
          <a href="/privacy" className="text-ink underline-offset-4 hover:underline">
            Privacy
          </a>
          .
        </p>
      </div>
    </section>
  );
}
