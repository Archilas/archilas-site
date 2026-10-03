import { EarlyAccessCTA } from "@/components/EarlyAccessCTA";
import { Reveal } from "@/components/Reveal";

export function CtaBand() {
  return (
    <section
      id="early-access"
      className="cta-band scroll-mt-[var(--scroll-margin)] px-[var(--pad-x)] py-16 md:py-24"
    >
      <Reveal delay={80} y={20}>
        <div className="mx-auto max-w-lg text-center">
          <h2 className="h2">See it on your own repo.</h2>
          <p className="mt-3 text-[16px] leading-7 text-body">
            20 minutes. Bring a question your team keeps asking.
          </p>
          <div className="mt-7">
            <EarlyAccessCTA
              source="cta-band"
              primaryLabel="Book an early-access call →"
              secondaryHref={`mailto:hello@archilas.com`}
              secondaryLabel="Email us"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
