import { WaitlistCTA } from "@/components/WaitlistCTA";

export function Waitlist() {
  return (
    <section
      id="waitlist"
      className="scroll-mt-[var(--scroll-margin)] bg-[#f6f3ed] px-[var(--pad-x)] py-12 md:py-16"
    >
      <div className="mx-auto max-w-lg text-center">
        <h2 className="h2">Get early access.</h2>
        <p className="mt-3 text-[16px] leading-7 text-body">We’ll email when Archilas opens.</p>
        <div className="mt-7">
          <WaitlistCTA source="waitlist" />
        </div>
      </div>
    </section>
  );
}
