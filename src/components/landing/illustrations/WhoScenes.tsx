/** Who it's for: company internal agents vs individual AI tools. */
export function WhoScenes({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 720 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Two scenes: companies running internal agents and chatbots, and individuals who live in AI tools"
    >
      <rect width="720" height="320" fill="var(--surface)" />

      {/* Company scene */}
      <rect x="24" y="24" width="328" height="272" rx="4" fill="var(--bg)" stroke="var(--line)" />
      <text
        x="44"
        y="52"
        fill="var(--muted)"
        style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 10, letterSpacing: "0.1em" }}
      >
        COMPANIES
      </text>
      <text
        x="44"
        y="78"
        fill="var(--ink)"
        style={{ fontFamily: "var(--font-geist), sans-serif", fontSize: 15, fontWeight: 600 }}
      >
        Internal agents & chatbots
      </text>

      {/* org nodes */}
      <rect x="56" y="110" width="88" height="56" rx="3" stroke="var(--ink)" fill="var(--surface)" />
      <text x="100" y="142" textAnchor="middle" fill="var(--ink)" style={{ fontSize: 11, fontFamily: "var(--font-geist), sans-serif" }}>
        Support bot
      </text>
      <rect x="172" y="110" width="88" height="56" rx="3" stroke="var(--ink)" fill="var(--surface)" />
      <text x="216" y="142" textAnchor="middle" fill="var(--ink)" style={{ fontSize: 11, fontFamily: "var(--font-geist), sans-serif" }}>
        Ops agent
      </text>
      <rect x="116" y="196" width="120" height="56" rx="3" fill="var(--ink)" />
      <text x="176" y="220" textAnchor="middle" fill="var(--inverse)" style={{ fontSize: 12, fontFamily: "var(--font-geist), sans-serif", fontWeight: 600 }}>
        Archilas
      </text>
      <text x="176" y="238" textAnchor="middle" fill="var(--accent-soft)" style={{ fontSize: 9, fontFamily: "var(--font-geist-mono), monospace" }}>
        shared memory
      </text>
      <path d="M100 166 V196 H176" stroke="var(--signal)" strokeWidth="1.5" fill="none" />
      <path d="M216 166 V196 H176" stroke="var(--signal)" strokeWidth="1.5" fill="none" />

      {/* Individual scene */}
      <rect x="368" y="24" width="328" height="272" rx="4" fill="var(--bg)" stroke="var(--line)" />
      <text
        x="388"
        y="52"
        fill="var(--muted)"
        style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 10, letterSpacing: "0.1em" }}
      >
        INDIVIDUALS
      </text>
      <text
        x="388"
        y="78"
        fill="var(--ink)"
        style={{ fontFamily: "var(--font-geist), sans-serif", fontSize: 15, fontWeight: 600 }}
      >
        Live in AI tools
      </text>

      <rect x="400" y="110" width="100" height="40" rx="3" stroke="var(--line)" fill="var(--surface)" />
      <text x="450" y="134" textAnchor="middle" fill="var(--ink)" style={{ fontSize: 11, fontFamily: "var(--font-geist), sans-serif" }}>
        Cursor
      </text>
      <rect x="520" y="110" width="100" height="40" rx="3" stroke="var(--line)" fill="var(--surface)" />
      <text x="570" y="134" textAnchor="middle" fill="var(--ink)" style={{ fontSize: 11, fontFamily: "var(--font-geist), sans-serif" }}>
        Claude
      </text>
      <rect x="460" y="180" width="140" height="56" rx="3" fill="var(--ink)" />
      <text x="530" y="204" textAnchor="middle" fill="var(--inverse)" style={{ fontSize: 12, fontFamily: "var(--font-geist), sans-serif", fontWeight: 600 }}>
        Archilas
      </text>
      <text x="530" y="222" textAnchor="middle" fill="var(--accent-soft)" style={{ fontSize: 9, fontFamily: "var(--font-geist-mono), monospace" }}>
        personal memory
      </text>
      <path d="M450 150 V180 H530" stroke="var(--signal)" strokeWidth="1.5" fill="none" />
      <path d="M570 150 V180 H530" stroke="var(--signal)" strokeWidth="1.5" fill="none" />

      <text
        x="388"
        y="270"
        fill="var(--body)"
        style={{ fontFamily: "var(--font-geist), sans-serif", fontSize: 11 }}
      >
        Coming soon: Cursor, Claude Code, MCP
      </text>
    </svg>
  );
}
