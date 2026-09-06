import { ChapterRule } from "@/components/ChapterRule";
import { demoHosts } from "@/components/landing/demo-data";

export function Delivery() {
  return (
    <section
      id="hosts"
      className="scroll-mt-[var(--scroll-margin)] border-y border-line px-[var(--pad-x)] py-[var(--pad-y-mobile)] md:py-[var(--pad-y)]"
    >
      <div className="mx-auto grid w-full max-w-[var(--max-width)] grid-cols-12 gap-x-12 gap-y-8">
        <div className="col-span-12 text-left lg:col-span-7">
          <ChapterRule index="04" title="One record every host" />
          <h2 className="h2 mt-6 max-w-[16ch]">One record. Every host.</h2>
          <p className="mt-4 max-w-lg text-[17px] leading-[1.5] text-body">
            The same compact record is meant to reach the tools you already use. MCP is the intended
            path. Surfaces are not live.
          </p>
          <p className="intended-pill mt-8">Intended</p>
        </div>
        <ul className="col-span-12 flex flex-col justify-end gap-3 text-left lg:col-span-5">
          {demoHosts.map((host) => (
            <li
              key={host}
              className="border-b border-line pb-3 font-mono text-[15px] tracking-[-0.01em] text-ink"
            >
              {host}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
