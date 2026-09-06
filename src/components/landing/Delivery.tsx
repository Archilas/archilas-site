import { ButtonPrimary } from "@/components/ButtonPrimary";
import { DestinationFrames } from "@/components/landing/DestinationFrames";
import { exampleRows } from "@/components/landing/demo-data";
import { Section } from "@/components/Section";

export function Delivery() {
  return (
    <Section id="product" className="theme-dark">
      <div className="mx-auto max-w-3xl text-center">
        <p className="label">Product</p>
        <h2 className="h2 mt-3">One layer. Many surfaces.</h2>
        <p className="mx-auto mt-4 max-w-lg text-body">
          Intended delivery — in development. MCP is the intended path. Surfaces are not live.
        </p>
      </div>

      <div className="product-surface mx-auto mt-10 max-w-4xl">
        <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:items-stretch">
          <div className="host-frame">
            <div className="host-frame-chrome">
              <span className="font-mono text-[11px] text-text-dark">Record</span>
            </div>
            <dl className="space-y-3 px-4 pb-4">
              {exampleRows.map((row) => (
                <div key={row.kind}>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.06em] text-text-dark/55">
                    {row.kind}
                  </dt>
                  <dd className="mt-1 font-mono text-[12px] leading-[1.45] text-text-dark">{row.text}</dd>
                </div>
              ))}
            </dl>
          </div>
          <DestinationFrames line="Waiting on the intended MCP path." />
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <ButtonPrimary href="/#waitlist">Join waitlist</ButtonPrimary>
      </div>
    </Section>
  );
}
