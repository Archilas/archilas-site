import { holdCards } from "@/components/landing/demo-data";
import { Section } from "@/components/Section";

export function MemoryHolds() {
  return (
    <Section>
      <div className="mx-auto max-w-2xl text-center">
        <p className="label">What memory holds</p>
        <h2 className="h2 mt-3">A compact record. Not a chat log.</h2>
      </div>
      <div className="mt-8 grid gap-3 md:grid-cols-3">
        {holdCards.map((item) => (
          <article key={item.title} className="hold-card p-6">
            <h3 className="h3">{item.title}</h3>
            <p className="mt-2 text-[16px] leading-[1.5] text-body">{item.body}</p>
            <p className="hold-inset">
              <span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.06em] text-muted">
                {item.kind}
              </span>
              {item.inset}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
