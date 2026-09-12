import { Reveal } from "@/components/Reveal";

export function WhyCompare() {
  return (
    <section className="split-band scroll-mt-[var(--scroll-margin)] px-[var(--pad-x)]">
      <Reveal>
        <div className="mx-auto max-w-[640px]" data-testid="why-explain">
          <h2 className="h2">Built different from paste memory.</h2>
          <p className="split-lede">
            Most “memory” is still search-and-paste. Archilas keeps a living record — then reasons over it when you
            ask.
          </p>
          <a href="#how" className="mt-7 inline-flex text-[15px] font-medium text-ink underline-offset-4 hover:underline">
            See how it works →
          </a>
        </div>
      </Reveal>
    </section>
  );
}
