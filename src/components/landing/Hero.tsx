"use client";

import { HeroStage } from "@/components/landing/HeroStage";
import { WaitlistForm } from "@/components/WaitlistForm";
import { usePipelineClock } from "@/lib/use-pipeline-clock";

export function Hero() {
  const clock = usePipelineClock();

  return (
    <section className="px-[var(--pad-x)] pb-10 pt-10 text-center md:pt-14">
      <div className="mx-auto max-w-3xl">
        <h1 className="display mx-auto max-w-[16ch] md:max-w-none">
          Archilas keeps a <em className="word-record">record</em> your AI can use.
        </h1>
        <div className="mx-auto mt-8 flex justify-center">
          <WaitlistForm id="hero-waitlist" source="hero" />
        </div>
        <p className="mt-4">
          <button
            type="button"
            className="text-[14px] text-ink underline-offset-4 hover:underline"
            onClick={() => {
              document.getElementById("how")?.scrollIntoView({ behavior: "smooth", block: "start" });
              clock.replay();
            }}
          >
            Play the demo
          </button>
        </p>
      </div>
      <div className="mx-auto mt-10 max-w-[var(--max-width)]">
        <HeroStage clock={clock} />
      </div>
    </section>
  );
}
