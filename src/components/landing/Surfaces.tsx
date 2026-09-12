import { Reveal } from "@/components/Reveal";

function ClaudeMark() {
  return (
    <svg viewBox="0 0 24 24" className="surface-mark" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 1.8 13.7 10.3 22.2 12 13.7 13.7 12 22.2 10.3 13.7 1.8 12 10.3 10.3Z"
      />
    </svg>
  );
}

function ChatGptMark() {
  return (
    <svg viewBox="0 0 24 24" className="surface-mark" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 3.2 16.8 6v6L12 15.8 7.2 12V6L12 3.2Zm0 2.4L9.2 7.1v4.8L12 13.6l2.8-1.7V7.1L12 5.6Z"
      />
      <path fill="currentColor" d="M7.2 13.1 12 16l4.8-2.9V18L12 20.8 7.2 18v-4.9Z" />
    </svg>
  );
}

function CursorMark() {
  return (
    <svg viewBox="0 0 24 24" className="surface-mark" aria-hidden="true">
      <path fill="currentColor" d="M5 3.2 19.4 12 10.7 14.2 8.6 21.8 5 3.2Z" />
    </svg>
  );
}

function McpMark() {
  return (
    <svg viewBox="0 0 24 24" className="surface-mark" aria-hidden="true">
      <circle cx="7" cy="12" r="3.2" fill="currentColor" />
      <circle cx="17" cy="12" r="3.2" fill="currentColor" />
      <rect x="9.4" y="10.8" width="5.2" height="2.4" rx="1" fill="currentColor" />
    </svg>
  );
}

const surfaces = [
  { name: "Claude", state: "Intended", Mark: ClaudeMark },
  { name: "ChatGPT", state: "Intended", Mark: ChatGptMark },
  { name: "Cursor", state: "Intended", Mark: CursorMark },
  { name: "MCP", state: "Coming soon", Mark: McpMark },
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
                    <span className="surface-brand" title={item.name} aria-label={item.name}>
                      <item.Mark />
                    </span>
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
