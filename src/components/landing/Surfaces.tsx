import { Reveal } from "@/components/Reveal";

const surfaces = ["Claude", "ChatGPT", "Cursor"] as const;

export function Surfaces() {
  return (
    <section id="surfaces" className="surfaces-band split-band scroll-mt-[var(--scroll-margin)] px-[var(--pad-x)]">
      <Reveal>
        <div className="band-plate mx-auto max-w-[1120px]">
          <p className="label">Surfaces</p>
          <h2 className="h2 mt-3">Built for the tools you already use.</h2>
          <p className="split-lede">
            Intended for Claude, ChatGPT, and Cursor. MCP support — coming soon. Not live integrations today.
          </p>
          <div className="surface-pills">
            {surfaces.map((name) => (
              <span key={name} className="surface-pill">
                {name}
              </span>
            ))}
            <span className="surface-pill">MCP — coming soon</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
