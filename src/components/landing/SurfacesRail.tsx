import { demoHosts } from "@/components/landing/demo-data";

export function SurfacesRail() {
  return (
    <section className="px-[var(--pad-x)] py-12">
      <div className="mx-auto max-w-[var(--max-width)] text-center">
        <p className="label">Surfaces</p>
        <p className="mt-3 text-[14px] text-muted">Intended. MCP is the path.</p>
        <div className="mt-8 grid gap-3 md:grid-cols-3">
          {demoHosts.map((host) => (
            <div key={host.name} className="border border-line bg-surface px-5 py-6">
              <p className="mono uppercase tracking-[0.14em] text-muted">{host.name}</p>
              <p className="mt-3 text-[14px] leading-6 text-body">{host.line}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
