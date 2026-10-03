import { Reveal } from "@/components/Reveal";

export function Problem() {
  return (
    <section id="problem" className="problem-band scroll-mt-[var(--scroll-margin)] px-[var(--pad-x)]">
      <Reveal delay={60} y={12}>
        <div className="section-head mx-auto text-center">
          <p className="label">The problem</p>
          <h2 className="h2 mt-3">Your agents can&apos;t see why the code is this way.</h2>
          <p className="split-lede mx-auto">
            Reasons live in old PRs, threads and people&apos;s heads — not in the tools that write the
            next change.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
