import { Reveal } from "@/components/Reveal";

const surfaces = ["Claude", "ChatGPT", "Cursor"] as const;

export function Surfaces() {
  return (
    <section id="surfaces" className="surfaces-band split-band scroll-mt-[var(--scroll-margin)] px-[var(--pad-x)]">
      <Reveal>
        <div className="split-grid mx-auto max-w-[1120px]">
          <div className="split-copy">
            <p className="label">Surfaces</p>
            <h2 className="h2 mt-3">The tools you already use.</h2>
            <p className="split-lede">MCP coming soon — not live yet.</p>
          </div>
          <div className="band-plate plate-drift">
            <div className="plate-sky is-fjord" aria-hidden="true" />
            <div className="frost-panel">
              <div className="surface-pills">
                {surfaces.map((name) => (
                  <span key={name} className="surface-pill">
                    {name}
                  </span>
                ))}
                <span className="surface-pill">MCP — coming soon</span>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
