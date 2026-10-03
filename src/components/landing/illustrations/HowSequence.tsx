import type { ReactNode } from "react";

/** How it works: remember → ask → answer with source; repo as secondary panel. */
export function HowSequence({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 720 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Labeled example: Archilas remembers history, answers a question about auth timeout from a Claude chat with citation, and can also learn the codebase"
    >
      <rect width="720" height="400" fill="var(--surface)" />

      <text
        x="40"
        y="32"
        fill="var(--muted)"
        style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 10, letterSpacing: "0.12em" }}
      >
        ILLUSTRATIVE EXAMPLE
      </text>

      {/* Step 1 Remember */}
      <StepBox x={40} y={52} w={200} h={120} n="01" title="Remember">
        <text x="56" y="118" fill="var(--body)" style={{ fontFamily: "var(--font-geist), sans-serif", fontSize: 11 }}>
          Agents are sent work.
        </text>
        <text x="56" y="136" fill="var(--body)" style={{ fontFamily: "var(--font-geist), sans-serif", fontSize: 11 }}>
          Archilas follows it.
        </text>
      </StepBox>

      <Arrow x={250} y={112} />

      {/* Step 2 Ask */}
      <StepBox x={280} y={52} w={200} h={120} n="02" title="Ask">
        <text x="296" y="118" fill="var(--ink)" style={{ fontFamily: "var(--font-geist), sans-serif", fontSize: 11, fontWeight: 560 }}>
          What did we decide about
        </text>
        <text x="296" y="136" fill="var(--ink)" style={{ fontFamily: "var(--font-geist), sans-serif", fontSize: 11, fontWeight: 560 }}>
          the auth timeout last week?
        </text>
      </StepBox>

      <Arrow x={490} y={112} />

      {/* Step 3 Answer */}
      <StepBox x={520} y={52} w={160} h={120} n="03" title="Answer + source">
        <rect x="536" y="108" width="128" height="44" rx="2" fill="var(--accent-soft)" stroke="var(--signal)" />
        <text x="600" y="126" textAnchor="middle" fill="var(--signal)" style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 9 }}>
          Claude chat · Tue
        </text>
        <text x="600" y="142" textAnchor="middle" fill="var(--ink)" style={{ fontFamily: "var(--font-geist), sans-serif", fontSize: 10 }}>
          15 min timeout
        </text>
      </StepBox>

      {/* Secondary: codebase */}
      <rect x="40" y="210" width="640" height="150" rx="4" fill="var(--bg)" stroke="var(--line)" strokeWidth="1.25" />
      <text
        x="60"
        y="238"
        fill="var(--muted)"
        style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 10, letterSpacing: "0.1em" }}
      >
        SECONDARY · CODEBASE MEMORY
      </text>
      <text
        x="60"
        y="268"
        fill="var(--ink)"
        style={{ fontFamily: "var(--font-geist), sans-serif", fontSize: 13, fontWeight: 560 }}
      >
        It can learn your entire codebase too.
      </text>
      <g stroke="var(--line)" strokeWidth="1">
        {[0, 1, 2, 3, 4].map((i) => (
          <rect key={i} x={60 + i * 112} y="290" width="96" height="40" rx="2" fill="var(--surface)" />
        ))}
      </g>
      {["src/auth", "sessions", "timeouts", "handoffs", "docs"].map((label, i) => (
        <text
          key={label}
          x={108 + i * 112}
          y="314"
          textAnchor="middle"
          fill="var(--body)"
          style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 10 }}
        >
          {label}
        </text>
      ))}
    </svg>
  );
}

function StepBox({
  x,
  y,
  w,
  h,
  n,
  title,
  children,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  n: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="4" fill="var(--bg)" stroke="var(--ink)" strokeWidth="1.25" />
      <text
        x={x + 16}
        y={y + 28}
        fill="var(--signal)"
        style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 11, letterSpacing: "0.08em" }}
      >
        {n}
      </text>
      <text
        x={x + 16}
        y={y + 50}
        fill="var(--ink)"
        style={{ fontFamily: "var(--font-geist), sans-serif", fontSize: 14, fontWeight: 600 }}
      >
        {title}
      </text>
      {children}
    </g>
  );
}

function Arrow({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <line x1={x} y1={y} x2={x + 20} y2={y} stroke="var(--signal)" strokeWidth="1.5" />
      <polygon points={`${x + 20},${y - 5} ${x + 30},${y} ${x + 20},${y + 5}`} fill="var(--signal)" />
    </g>
  );
}
