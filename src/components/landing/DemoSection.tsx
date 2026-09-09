import { ClarityDemo } from "@/components/landing/ClarityDemo";

export function DemoSection() {
  return (
    <section
      id="demo"
      className="demo-band scroll-mt-[var(--scroll-margin)] px-[var(--pad-x)] py-16 md:py-20"
    >
      <div className="mx-auto max-w-[720px] text-center">
        <p className="label">How memory is built</p>
        <h2 className="h2 mt-3">Notes. Compact. Reason. Answer.</h2>
        <div className="mt-10">
          <ClarityDemo />
        </div>
      </div>
    </section>
  );
}
