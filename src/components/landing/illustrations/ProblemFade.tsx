/** Problem: chat sessions fade to blank while a project timeline keeps building. */
export function ProblemFade({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 720 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Diagram: AI chat sessions fade to empty while project history continues on a timeline"
    >
      <rect width="720" height="360" fill="var(--surface)" />

      <text
        x="40"
        y="36"
        fill="var(--muted)"
        style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 10, letterSpacing: "0.12em" }}
      >
        SESSION MEMORY
      </text>

      {/* Fading chat panes */}
      <ChatPane x={40} y={56} opacity={1} title="Mon · Cursor" lines={3} />
      <ChatPane x={200} y={56} opacity={0.55} title="Tue · Claude" lines={2} />
      <ChatPane x={360} y={56} opacity={0.28} title="Wed · Bot" lines={1} />
      <g opacity="0.12">
        <rect x="520" y="56" width="140" height="140" rx="4" stroke="var(--ink)" strokeWidth="1.25" fill="var(--bg)" />
        <text
          x="590"
          y="128"
          textAnchor="middle"
          fill="var(--ink)"
          style={{ fontFamily: "var(--font-geist), sans-serif", fontSize: 12 }}
        >
          blank
        </text>
      </g>

      {/* Timeline below */}
      <text
        x="40"
        y="240"
        fill="var(--muted)"
        style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 10, letterSpacing: "0.12em" }}
      >
        PROJECT HISTORY (STILL BUILDING)
      </text>
      <line x1="40" y1="280" x2="680" y2="280" stroke="var(--ink)" strokeWidth="1.5" />
      {[80, 200, 320, 440, 560, 660].map((cx, i) => (
        <g key={cx}>
          <circle cx={cx} cy="280" r="5" fill={i < 5 ? "var(--signal)" : "var(--fade)"} />
          <rect
            x={cx - 18}
            y={248 - (i % 3) * 10}
            width="36"
            height={20 + (i % 3) * 8}
            rx="2"
            fill="var(--accent-soft)"
            stroke="var(--signal)"
            opacity={0.85}
          />
        </g>
      ))}
      <text
        x="40"
        y="328"
        fill="var(--body)"
        style={{ fontFamily: "var(--font-geist), sans-serif", fontSize: 12 }}
      >
        Decisions, handoffs, and chatbot lessons keep happening — sessions do not keep them.
      </text>
    </svg>
  );
}

function ChatPane({
  x,
  y,
  opacity,
  title,
  lines,
}: {
  x: number;
  y: number;
  opacity: number;
  title: string;
  lines: number;
}) {
  return (
    <g opacity={opacity}>
      <rect x={x} y={y} width="140" height="140" rx="4" fill="var(--bg)" stroke="var(--line)" strokeWidth="1.25" />
      <text
        x={x + 12}
        y={y + 22}
        fill="var(--ink)"
        style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 10 }}
      >
        {title}
      </text>
      {Array.from({ length: lines }, (_, i) => (
        <rect
          key={i}
          x={x + 12}
          y={y + 40 + i * 22}
          width={100 - i * 18}
          height="10"
          rx="2"
          fill="var(--line)"
        />
      ))}
      {opacity < 0.4 ? (
        <text
          x={x + 70}
          y={y + 110}
          textAnchor="middle"
          fill="var(--fade)"
          style={{ fontFamily: "var(--font-geist), sans-serif", fontSize: 11 }}
        >
          gone
        </text>
      ) : null}
    </g>
  );
}
