import { Reveal } from "@/components/Reveal";

export function WhyCompare() {
  return (
    <section className="split-band scroll-mt-[var(--scroll-margin)] px-[var(--pad-x)]">
      <Reveal>
        <div className="mx-auto max-w-[640px] text-center" data-testid="why-explain">
          <h2 className="h2">Most memory is still paste. Archilas keeps a living record.</h2>
          <a href="#how" className="mt-7 inline-flex text-[15px] font-medium text-ink underline-offset-4 hover:underline">
            See how it works →
          </a>
        </div>
      </Reveal>
    </section>
  );
}
