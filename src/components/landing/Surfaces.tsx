import { Reveal } from "@/components/Reveal";
import { ChatGptMark, ClaudeMark, CursorMark, McpMark } from "@/components/landing/BrandMarks";

const surfaces = [
  { name: "Claude", state: "Intended", Mark: ClaudeMark },
  { name: "ChatGPT", state: "Intended", Mark: ChatGptMark },
  { name: "Cursor", state: "Intended", Mark: CursorMark },
  { name: "MCP", state: "Coming soon", Mark: McpMark },
] as const;

export function Surfaces() {
  return (
    <section id="surfaces" className="surfaces-band split-band scroll-mt-[var(--scroll-margin)] px-[var(--pad-x)]">
      <div className="split-grid is-surfaces mx-auto max-w-[1180px]">
        <Reveal delay={80} className="split-copy">
          <p className="label">Surfaces</p>
          <h2 className="h2 mt-3">Built for tools you use.</h2>
        </Reveal>
        <Reveal delay={160} y={28}>
          <div className="band-plate is-short plate-drift">
            <div className="plate-sky is-fjord" aria-hidden="true" />
            <div className="chrome-window">
              <div className="demo-chrome">
                <span>Intended surfaces · not live</span>
              </div>
              <div className="surface-marks">
                {surfaces.map((item) => (
                  <div key={item.name} className="surface-cell">
                    <span className="surface-brand" title={item.name} aria-label={item.name}>
                      <item.Mark />
                    </span>
                    <span className="surface-state">{item.state}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
