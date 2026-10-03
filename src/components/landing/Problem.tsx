import { Reveal } from "@/components/Reveal";

export function Problem() {
  return (
    <section id="problem" className="problem-band scroll-mt-[var(--scroll-margin)] px-[var(--pad-x)]">
      <Reveal delay={60} y={16}>
        <p className="problem-line mx-auto max-w-[44rem] text-center">
          The reason behind your code lives in old PRs, threads and people&apos;s heads. Your agents
          can&apos;t see any of it, and new engineers have to ask around.
        </p>
      </Reveal>
    </section>
  );
}
