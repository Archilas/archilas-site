import { Reveal } from "@/components/Reveal";

const surfaces = [
  { name: "Claude", state: "Intended" },
  { name: "ChatGPT", state: "Intended" },
  { name: "Cursor", state: "Intended" },
  { name: "MCP", state: "Coming soon" },
] as const;

export function Surfaces() {
  return (
    <section id="surfaces" className="surfaces-band split-band scroll-mt-[var(--scroll-margin)] px-[var(--pad-x)]">
      <Reveal>
        <div className="split-grid is-surfaces mx-auto max-w-[1180px]">
          <div className="split-copy">
            <p className="label">Surfaces</p>
            <h2 className="h2 mt-3">Built for tools you use.</h2>
            <p className="split-lede">Claude · ChatGPT · Cursor. MCP coming soon.</p>
          </div>
          <div className="band-plate is-short plate-drift">
            <div className="plate-sky is-fjord" aria-hidden="true" />
            <div className="chrome-window">
              <div className="demo-chrome">
                <span>Surfaces</span>
              </div>
              <div className="surface-rows">
                {surfaces.map((item) => (
                  <div key={item.name} className="surface-row">
                    <span>{item.name}</span>
                    <span className="surface-state">{item.state}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
