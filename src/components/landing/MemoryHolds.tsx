import { ChapterRule } from "@/components/ChapterRule";
import { ProductWindow } from "@/components/landing/ProductWindow";
import { exampleRows, holdCards } from "@/components/landing/demo-data";

export function MemoryHolds() {
  return (
    <section className="scroll-mt-[var(--scroll-margin)] px-[var(--pad-x)] py-[var(--pad-y-mobile)] md:py-[var(--pad-y)]">
      <div className="mx-auto grid w-full max-w-[var(--max-width)] grid-cols-12 items-start gap-x-12 gap-y-10">
        <div className="col-span-12 text-left lg:col-span-7">
          <ChapterRule index="03" title="Memory" />
          <h2 className="h2 mt-6 max-w-[16ch]">A compact record. Not a chat log.</h2>
          <div className="mt-8">
            {holdCards.map((item) => (
              <article key={item.title} className="hold-row">
                <h3 className="h3">{item.title}</h3>
                <p className="mt-2 text-[16px] leading-[1.5] text-body">{item.body}</p>
                <p className="hold-inset">
                  <span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.08em] text-muted">
                    {item.kind}
                  </span>
                  {item.inset}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="col-span-12 min-w-0 lg:sticky lg:top-[calc(var(--nav-height)+24px)] lg:col-span-5">
          <ProductWindow title="record">
            <dl className="space-y-3 px-4 py-4">
              {exampleRows.map((row) => (
                <div key={row.kind}>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.08em] text-text-dark/55">
                    {row.kind}
                  </dt>
                  <dd className="mt-1 font-mono text-[12px] leading-[1.45] text-text-dark">{row.text}</dd>
                </div>
              ))}
            </dl>
          </ProductWindow>
        </div>
      </div>
    </section>
  );
}
