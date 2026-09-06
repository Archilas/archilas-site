import { ArchWindow } from "@/components/landing/ArchWindow";
import { demoHosts } from "@/components/landing/demo-data";

export function DeliveryRail() {
  return (
    <section className="py-14 md:py-16">
      <div className="mx-auto max-w-[var(--max-width)] px-[var(--pad-x)]">
        <p className="label">Deliver</p>
        <h2 className="h2 mt-3 max-w-xl">One record. Intended hosts.</h2>
        <p className="mt-3 text-[14px] text-muted">In development. MCP is the intended path.</p>
        <div className="mt-8 grid gap-3 md:grid-cols-3">
          {demoHosts.map((host) => (
            <ArchWindow key={host.name} name={host.name}>
              <div className="p-5">
                <p className="text-[14px] leading-6 text-body">{host.line}</p>
              </div>
            </ArchWindow>
          ))}
        </div>
      </div>
    </section>
  );
}
