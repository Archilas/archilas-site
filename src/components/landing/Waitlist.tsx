import { WaitlistCTA } from "@/components/WaitlistCTA";
import { Reveal } from "@/components/Reveal";

export function Waitlist() {
  return (
    <section
      id="waitlist"
      className="wait-band scroll-mt-[var(--scroll-margin)] px-[var(--pad-x)] py-16 md:py-24"
    >
      <Reveal>
        <div className="mx-auto max-w-lg text-center">
          <h2 className="h2">Get early access.</h2>
          <p className="mt-3 text-[16px] leading-7 text-body">We’ll email when Archilas opens.</p>
          <div className="mt-7">
            <WaitlistCTA source="waitlist" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
