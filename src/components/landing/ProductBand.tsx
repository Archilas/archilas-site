import { demoHosts } from "@/components/landing/demo-data";

const keeps = [
  {
    kind: "Preference",
    text: "How you want the work done — Friday notes as a recap, not a dump.",
  },
  {
    kind: "Decision",
    text: "What you already chose — ship only after legal signs.",
  },
  {
    kind: "Open loop",
    text: "What is still unfinished — the launch window is unsigned.",
  },
] as const;

export function ProductBand() {
  return (
    <section id="product" className="scroll-mt-[var(--scroll-margin)] bg-[#f2f6fa] px-[var(--pad-x)] py-16 md:py-20">
      <div className="mx-auto max-w-[var(--max-width)]">
        <p className="label">What Archilas keeps</p>
        <h2 className="h2 mt-3 max-w-2xl">A living memory of preferences, decisions, and open loops.</h2>
        <p className="mt-4 max-w-2xl text-[17px] leading-7 text-body">
          Chat, docs, and threads stay messy. Archilas keeps the durable lines — then answers from that memory, not a paste.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {keeps.map((item) => (
            <div key={item.kind} className="teach-card">
              <p className="spine-label">{item.kind}</p>
              <p className="mt-3 text-[16px] leading-7 text-ink">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <p className="label">Surfaces</p>
          <h3 className="mt-3 text-[1.35rem] font-medium tracking-[-0.03em] text-ink">
            One memory. The tools you already use.
          </h3>
          <p className="mt-3 max-w-xl text-[16px] leading-7 text-body">
            Claude, ChatGPT, and Cursor are the intended hosts. Delivery is over MCP. In development.
          </p>
          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {demoHosts.map((host) => (
              <div key={host.name} className="border border-line bg-surface px-5 py-6">
                <p className="text-[16px] font-medium text-ink">{host.name}</p>
                <p className="mt-2 text-[15px] leading-6 text-body">{host.line}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
