import { Reveal } from "@/components/Reveal";

export function WhyBetter() {
  return (
    <section id="product" className="why-band slm-band scroll-mt-[var(--scroll-margin)] px-[var(--pad-x)] py-12 md:py-16">
      <Reveal>
        <div className="mx-auto max-w-lg text-center">
          <p className="label">Product</p>
          <h2 className="h2 mt-3">A memory SLM.</h2>
          <p className="slm-sub mt-3">Early access — not live today.</p>
        </div>
      </Reveal>
    </section>
  );
}
