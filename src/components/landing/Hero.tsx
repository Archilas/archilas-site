import { WaitlistCTA } from "@/components/WaitlistCTA";

export function Hero() {
  return (
    <section className="hero-cream px-[var(--pad-x)] text-center">
      <div className="mx-auto max-w-4xl">
        <h1 className="display">
          AI memory that <em className="word-accent">understands</em> you.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-[18px] leading-[1.5] text-body">
          Detailed notes → compacted memory → smart answers from many sources.
        </p>
        <div className="mt-8">
          <WaitlistCTA source="hero" />
        </div>
      </div>
    </section>
  );
}
