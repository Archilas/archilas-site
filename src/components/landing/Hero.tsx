import { ClarityDemo } from "@/components/landing/ClarityDemo";
import { WaitlistCTA } from "@/components/WaitlistCTA";

export function Hero() {
  return (
    <section className="hero-air px-[var(--pad-x)] pb-12 pt-10 text-center md:pt-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="display">
          AI memory that <em className="word-accent">understands</em> you.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-[18px] leading-[1.45] text-body">
          Detailed notes → compacted memory → smart answers from many sources.
        </p>
        <div className="mt-8">
          <WaitlistCTA source="hero" />
        </div>
      </div>
      <div className="hero-halo mx-auto mt-12 max-w-[var(--max-width)]">
        <ClarityDemo />
      </div>
    </section>
  );
}
