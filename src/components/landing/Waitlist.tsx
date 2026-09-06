import { WaitlistForm } from "@/components/WaitlistForm";

export function Waitlist() {
  return (
    <section
      id="waitlist"
      className="scroll-mt-[var(--scroll-margin)] px-[var(--pad-x)] py-14 md:py-16"
    >
      <div className="mx-auto max-w-lg border border-line bg-surface px-6 py-10 text-center sm:px-10">
        <h2 className="h2">Join the waitlist.</h2>
        <div className="mx-auto mt-6 flex justify-center">
          <WaitlistForm id="waitlist-form" source="waitlist" />
        </div>
        <p className="mt-4 text-[13px] text-muted">
          <a href="/privacy" className="text-ink underline-offset-4 hover:underline">
            Privacy
          </a>
          . No spam.
        </p>
      </div>
    </section>
  );
}
