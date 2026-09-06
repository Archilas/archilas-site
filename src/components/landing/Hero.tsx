import { ClarityDemo } from "@/components/landing/ClarityDemo";
import { WaitlistCTA } from "@/components/WaitlistCTA";

export function Hero() {
  return (
    <section className="hero-sky px-[var(--pad-x)] pb-12 pt-12 text-center md:pt-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="display mx-auto">AI memory that understands you.</h1>
        <p className="mx-auto mt-5 max-w-xl text-[18px] leading-[1.45] text-body">
          Archilas remembers your preferences, decisions, and open loops — so your AI stops asking.
        </p>
        <div className="mt-8">
          <WaitlistCTA source="hero" />
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-[var(--max-width)]">
        <ClarityDemo />
      </div>
    </section>
  );
}
