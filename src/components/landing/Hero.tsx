import { ClarityDemo } from "@/components/landing/ClarityDemo";
import { WaitlistCTA } from "@/components/WaitlistCTA";

export function Hero() {
  return (
    <section className="hero-air px-[var(--pad-x)] pb-10 pt-10 text-center md:pt-14">
      <div className="mx-auto max-w-3xl">
        <h1 className="display">
          <span className="h1-strong">AI memory</span>
          <span className="h1-light">that understands you.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-[18px] leading-[1.45] text-body">
          Detailed notes → compacted memory → smart answers from many sources.
        </p>
        <div className="mt-8">
          <WaitlistCTA source="hero" />
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-[var(--max-width)]">
        <ClarityDemo />
      </div>
    </section>
  );
}
