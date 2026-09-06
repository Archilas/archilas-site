import { demoHosts } from "@/components/landing/demo-data";

export function SurfacesRail() {
  return (
    <section className="px-[var(--pad-x)] py-12">
      <div className="mx-auto max-w-[var(--max-width)] text-center">
        <p className="label">Surfaces</p>
        <p className="mt-3 text-[15px] text-muted">In development. MCP is the intended path.</p>
        <div className="mt-8 grid gap-3 md:grid-cols-3">
          {demoHosts.map((host) => (
            <div key={host.name} className="border border-line bg-surface px-5 py-6">
              <p className="text-[15px] font-medium text-ink">{host.name}</p>
              <p className="mt-2 text-[14px] leading-6 text-body">{host.line}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
