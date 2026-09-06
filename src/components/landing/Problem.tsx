import { ChapterRule } from "@/components/ChapterRule";
import { ContrastDemo } from "@/components/landing/ContrastDemo";

export function Problem() {
  return (
    <section id="comparison" className="chapter-inverse scroll-mt-[var(--scroll-margin)]">
      <div className="mx-auto w-full max-w-[var(--max-width)] px-[var(--pad-x)] py-16 md:py-24">
        <ChapterRule index="02" title="Retrieval vs a record" />
        <h2 className="statement mt-8 max-w-[16ch] text-left">
          Searching old text is not the same as remembering what matters.
        </h2>
        <p className="mt-6 max-w-xl text-left text-[17px] text-body">
          Same work, two shapes. Left is passages. Right is Compact. Reason. Deliver.
        </p>
        <div className="mt-10">
          <ContrastDemo />
        </div>
      </div>
    </section>
  );
}
