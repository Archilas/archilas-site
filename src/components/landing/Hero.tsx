import { WaitlistForm } from "@/components/WaitlistForm";

export function Hero() {
  return (
    <section className="px-[var(--pad-x)] pb-6 pt-8 text-center md:pt-10">
      <div className="mx-auto max-w-2xl">
        <p className="pill">Pre-launch</p>
        <h1 className="display mx-auto mt-5">Passages aren&apos;t memory. A record is.</h1>
        <p className="mx-auto mt-4 max-w-md text-[17px] leading-[1.4] text-body">
          Archilas turns your conversations into a record your tools can use.
        </p>
        <div className="mx-auto mt-6 flex justify-center">
          <WaitlistForm id="hero-waitlist" source="hero" />
        </div>
        <p className="mt-3 text-[13px] text-muted">
          Early access.{" "}
          <a href="/privacy" className="text-ink underline-offset-4 hover:underline">
            Privacy
          </a>
        </p>
      </div>
    </section>
  );
}
