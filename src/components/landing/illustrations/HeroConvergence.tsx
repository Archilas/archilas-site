/** Hero: agents/chats flow into Archilas; answer returns with cited source. */
export function HeroConvergence({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 720 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Diagram: Cursor, Claude, agent handoff, and company chatbot feed into Archilas, which answers with a cited source"
    >
      <rect width="720" height="420" fill="var(--surface)" />
      {/* grid */}
      <g stroke="var(--line)" strokeWidth="1" opacity="0.55">
        {Array.from({ length: 13 }, (_, i) => (
          <line key={`v${i}`} x1={40 + i * 53} y1="24" x2={40 + i * 53} y2="396" />
        ))}
        {Array.from({ length: 8 }, (_, i) => (
          <line key={`h${i}`} x1="40" y1={24 + i * 53} x2="680" y2={24 + i * 53} />
        ))}
      </g>

      {/* Source nodes */}
      <SourceNode x={48} y={48} label="Cursor chat" sub="yesterday" />
      <SourceNode x={48} y={132} label="Claude Code" sub="session" />
      <SourceNode x={48} y={216} label="Agent handoff" sub="tool → tool" />
      <SourceNode x={48} y={300} label="Team chatbot" sub="last week" />

      {/* Flow lines into center */}
      <g stroke="var(--signal)" strokeWidth="1.75" fill="none">
        <path d="M188 72 C270 72, 310 200, 360 210" className="diag-flow" />
        <path d="M188 156 C260 156, 310 200, 360 210" className="diag-flow diag-flow-d1" />
        <path d="M188 240 C260 240, 320 220, 360 210" className="diag-flow diag-flow-d2" />
        <path d="M188 324 C270 324, 330 240, 360 210" className="diag-flow diag-flow-d3" />
      </g>

      {/* Archilas core */}
      <rect x="360" y="168" width="148" height="84" rx="4" fill="var(--ink)" />
      <text
        x="434"
        y="198"
        textAnchor="middle"
        fill="var(--inverse)"
        style={{ fontFamily: "var(--font-geist), sans-serif", fontSize: 13, fontWeight: 600 }}
      >
        Archilas
      </text>
      <text
        x="434"
        y="220"
        textAnchor="middle"
        fill="var(--accent-soft)"
        style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 10, letterSpacing: "0.08em" }}
      >
        MEMORY AGENT
      </text>
      <circle cx="434" cy="236" r="3" fill="var(--signal)" />

      {/* Outbound answer */}
      <path
        d="M508 210 H560"
        stroke="var(--signal)"
        strokeWidth="1.5"
        className="diag-flow diag-flow-d4"
      />
      <polygon points="560,204 574,210 560,216" fill="var(--signal)" />

      <rect x="580" y="150" width="108" height="120" rx="4" fill="var(--bg)" stroke="var(--ink)" strokeWidth="1.5" />
      <text
        x="634"
        y="174"
        textAnchor="middle"
        fill="var(--muted)"
        style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 9, letterSpacing: "0.1em" }}
      >
        ANSWER
      </text>
      <text
        x="634"
        y="198"
        textAnchor="middle"
        fill="var(--ink)"
        style={{ fontFamily: "var(--font-geist), sans-serif", fontSize: 11, fontWeight: 560 }}
      >
        with source
      </text>
      <rect x="596" y="214" width="76" height="36" rx="2" fill="var(--accent-soft)" stroke="var(--signal)" />
      <text
        x="634"
        y="228"
        textAnchor="middle"
        fill="var(--signal)"
        style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 8 }}
      >
        cite
      </text>
      <text
        x="634"
        y="242"
        textAnchor="middle"
        fill="var(--ink)"
        style={{ fontFamily: "var(--font-geist), sans-serif", fontSize: 9 }}
      >
        Claude · Tue
      </text>
    </svg>
  );
}

function SourceNode({
  x,
  y,
  label,
  sub,
  wide,
}: {
  x: number;
  y: number;
  label: string;
  sub: string;
  wide?: boolean;
}) {
  const w = wide ? 164 : 140;
  return (
    <g>
      <rect x={x} y={y} width={w} height={48} rx="4" fill="var(--bg)" stroke="var(--line)" strokeWidth="1.25" />
      <circle cx={x + 16} cy={y + 24} r="5" fill="none" stroke="var(--signal)" strokeWidth="1.5" />
      <text
        x={x + 30}
        y={y + 20}
        fill="var(--ink)"
        style={{ fontFamily: "var(--font-geist), sans-serif", fontSize: 12, fontWeight: 560 }}
      >
        {label}
      </text>
      <text
        x={x + 30}
        y={y + 36}
        fill="var(--muted)"
        style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 10 }}
      >
        {sub}
      </text>
    </g>
  );
}
