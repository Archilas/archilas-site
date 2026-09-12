import { ClarityDemo } from "@/components/landing/ClarityDemo";

export function DemoSection() {
  return (
    <section id="demo" className="demo-band scroll-mt-[var(--scroll-margin)] px-[var(--pad-x)] py-12 md:py-16">
      <div className="mx-auto max-w-[760px] text-center">
        <p className="label">How memory is built</p>
        <div className="mt-6">
          <ClarityDemo />
        </div>
      </div>
    </section>
  );
}
