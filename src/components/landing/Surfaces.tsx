import { Reveal } from "@/components/Reveal";

function ClaudeMark() {
  return (
    <svg viewBox="0 0 24 24" className="surface-mark" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 1.2 13.55 9.4 21.8 11 13.55 12.6 12 20.8 10.45 12.6 2.2 11 10.45 9.4Z"
      />
    </svg>
  );
}

function ChatGptMark() {
  return (
    <svg viewBox="0 0 24 24" className="surface-mark" aria-hidden="true">
      <path
        fill="currentColor"
        d="M8.3 4.2c1.1-.7 2.4-.9 3.6-.6L13 3.3c.4-1.2 1.4-2.1 2.7-2.3 1.8-.3 3.5.8 4 2.5.3 1 .1 2.1-.5 2.9l.8.3c1.6.6 2.6 2.2 2.4 3.9-.2 1.8-1.7 3.2-3.5 3.3h-.2c.2.5.2 1.1.1 1.6-.4 1.7-2 3-3.8 3l-.6-.1c-.3 1.1-1.1 2-2.2 2.5-1.6.7-3.5.2-4.6-1.2l-.3-.4c-.7.7-1.7 1.1-2.8 1-1.8-.2-3.2-1.7-3.3-3.5-.1-1 .3-2 1-2.7l-.7-.5C.9 14 .4 12.4.8 10.8 1.3 9 2.8 7.8 4.6 7.8h.4C4.8 7.2 4.8 6.6 5 6c.5-1.7 2.1-2.8 3.9-2.6.4 0 .8.1 1.1.3l.3.2Zm1.2 2.2c-.2-.1-.5-.2-.8-.2-1 0-1.8.7-2 1.6-.1.4 0 .8.2 1.1l5.3 3.1v.2L8.4 14.3c-.3.2-.5.5-.5.9 0 .6.5 1.1 1.1 1.1.2 0 .4 0 .6-.2l4.2-2.4 1.4.8-4.3 2.5c-.5.3-.7.9-.4 1.4.2.5.8.7 1.3.5l6.2-3.6c.3-.2.5-.5.5-.9 0-.6-.5-1.1-1.1-1.1-.2 0-.4 0-.5.1l-1.3.8-1.4-.8 3.8-2.2c.5-.3.7-.9.4-1.4-.2-.5-.8-.7-1.3-.5l-6.2 3.6c-.2.1-.3.1-.4.1-.6 0-1.1-.5-1.1-1.1 0-.4.2-.7.5-.9l3.7-2.1-1.4-.8-3.6 2.1c-.2.1-.4.2-.6.2-.6 0-1.1-.5-1.1-1.1 0-.4.2-.7.5-.9l4.2-2.4Z"
      />
    </svg>
  );
}

function CursorMark() {
  return (
    <svg viewBox="0 0 24 24" className="surface-mark" aria-hidden="true">
      <path fill="currentColor" d="M4.6 2.8 20.2 12l-9.4 2.4L8.4 21.6 4.6 2.8Z" />
    </svg>
  );
}

function McpMark() {
  return (
    <svg viewBox="0 0 24 24" className="surface-mark" aria-hidden="true">
      <path
        fill="currentColor"
        d="M7.2 6.2a3.4 3.4 0 0 1 3.3 2.7h2.2A4.8 4.8 0 1 0 8 13.6v2.2a3.4 3.4 0 1 1-1.6-6.6 3.3 3.3 0 0 1 .8.1Zm9.6 1.6a3.4 3.4 0 1 1-3.3 4.1h-2.2a4.8 4.8 0 1 0 4.6 4.7h.1a3.4 3.4 0 0 1 .8-8.8Z"
      />
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
          </div>
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
        </div>
      </Reveal>
    </section>
  );
}
