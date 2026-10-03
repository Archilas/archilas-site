"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

/** Hero: agents/chats flow into Archilas; answer returns with cited source. */
export function HeroConvergence({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.2, once: false });
  const reduced = useReducedMotion();
  // Hero diagram starts "on" so first paint isn't empty; still reverses when scrolled away.
  const on = reduced || inView || true;

  return (
    <div ref={ref} className={className}>
      <svg
        className="mem-diagram mem-diagram-desktop"
        viewBox="0 0 760 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Diagram: Cursor, Claude, agent handoff, and company chatbot feed into Archilas, which answers with a cited source"
      >
        <rect width="760" height="460" fill="var(--surface)" />
        <g stroke="var(--line)" strokeWidth="1" opacity="0.45">
          {Array.from({ length: 14 }, (_, i) => (
            <line key={`v${i}`} x1={28 + i * 54} y1="20" x2={28 + i * 54} y2="440" />
          ))}
          {Array.from({ length: 9 }, (_, i) => (
            <line key={`h${i}`} x1="28" y1={20 + i * 52.5} x2="732" y2={20 + i * 52.5} />
          ))}
        </g>

        <SourceNode x={40} y={40} label="Cursor chat" sub="yesterday" fill="var(--sky-soft)" stroke="var(--sky)" />
        <SourceNode x={40} y={132} label="Claude Code" sub="session" fill="var(--sky-soft)" stroke="var(--sky)" />
        <SourceNode x={40} y={224} label="Agent handoff" sub="tool → tool" fill="var(--sky-soft)" stroke="var(--sky)" />
        <SourceNode x={40} y={316} label="Team chatbot" sub="last week" fill="var(--sky-soft)" stroke="var(--sky)" />

        {(
          [
            "M210 72 C300 72, 330 220, 390 230",
            "M210 164 C290 164, 340 220, 390 230",
            "M210 256 C290 250, 350 240, 390 230",
            "M210 348 C300 340, 350 260, 390 230",
          ] as const
        ).map((d, i) => (
          <motion.path
            key={d}
            d={d}
            stroke="var(--signal)"
            strokeWidth="2.25"
            fill="none"
            strokeDasharray="10 7"
            initial={false}
            animate={on ? { pathLength: 1, opacity: 1, x: 0 } : { pathLength: 0.15, opacity: 0.35, x: -12 }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}

        <motion.g
          initial={false}
          animate={on ? { scale: 1, opacity: 1 } : { scale: 0.94, opacity: 0.55 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          style={{ transformOrigin: "466px 230px" }}
        >
          <rect x="390" y="176" width="152" height="108" rx="4" fill="var(--ink)" />
          <text
            x="466"
            y="214"
            textAnchor="middle"
            fill="var(--inverse)"
            style={{ fontFamily: "var(--font-geist), sans-serif", fontSize: 16, fontWeight: 650 }}
          >
            Archilas
          </text>
          <text
            x="466"
            y="238"
            textAnchor="middle"
            fill="var(--signal-soft)"
            style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 12, letterSpacing: "0.08em" }}
          >
            MEMORY AGENT
          </text>
          <circle cx="466" cy="262" r="4" fill="var(--signal)" />
        </motion.g>

        <motion.path
          d="M542 230 H590"
          stroke="var(--amber)"
          strokeWidth="2.25"
          initial={false}
          animate={on ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0.3 }}
          transition={{ duration: 0.5, delay: 0.45 }}
        />
        <polygon points="590,223 608,230 590,237" fill="var(--amber)" />

        <rect x="616" y="150" width="120" height="160" rx="4" fill="var(--bg)" stroke="var(--ink)" strokeWidth="1.75" />
        <text
          x="676"
          y="178"
          textAnchor="middle"
          fill="var(--muted)"
          style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 12, letterSpacing: "0.1em" }}
        >
          ANSWER
        </text>
        <text
          x="676"
          y="204"
          textAnchor="middle"
          fill="var(--ink)"
          style={{ fontFamily: "var(--font-geist), sans-serif", fontSize: 14, fontWeight: 600 }}
        >
          with source
        </text>
        <rect x="632" y="224" width="88" height="56" rx="3" fill="var(--amber-soft)" stroke="var(--amber)" strokeWidth="1.5" />
        <text
          x="676"
          y="248"
          textAnchor="middle"
          fill="var(--amber)"
          style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 12 }}
        >
          cite
        </text>
        <text
          x="676"
          y="268"
          textAnchor="middle"
          fill="var(--ink)"
          style={{ fontFamily: "var(--font-geist), sans-serif", fontSize: 12, fontWeight: 560 }}
        >
          Claude · Tue
        </text>
      </svg>

      <div className="mem-diagram-mobile" aria-label="Agents feed Archilas; it answers with a cited source">
        <div className="mob-flow-stack">
          {["Cursor chat · yesterday", "Claude Code · session", "Agent handoff · tool → tool", "Team chatbot · last week"].map(
            (label) => (
              <div key={label} className="mob-node mob-node-sky">
                {label}
              </div>
            ),
          )}
          <div className="mob-arrow" aria-hidden="true">
            ↓ into Archilas
          </div>
          <div className="mob-node mob-node-ink">Archilas · memory agent</div>
          <div className="mob-arrow mob-arrow-amber" aria-hidden="true">
            ↓ answers with source
          </div>
          <div className="mob-node mob-node-amber">cite · Claude · Tue</div>
        </div>
      </div>
    </div>
  );
}

function SourceNode({
  x,
  y,
  label,
  sub,
  fill,
  stroke,
}: {
  x: number;
  y: number;
  label: string;
  sub: string;
  fill: string;
  stroke: string;
}) {
  return (
    <g>
      <rect x={x} y={y} width={170} height={64} rx="4" fill={fill} stroke={stroke} strokeWidth="1.5" />
      <circle cx={x + 18} cy={y + 32} r="6" fill="none" stroke={stroke} strokeWidth="2" />
      <text
        x={x + 34}
        y={y + 28}
        fill="var(--ink)"
        style={{ fontFamily: "var(--font-geist), sans-serif", fontSize: 14, fontWeight: 600 }}
      >
        {label}
      </text>
      <text
        x={x + 34}
        y={y + 48}
        fill="var(--body)"
        style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 12 }}
      >
        {sub}
      </text>
    </g>
  );
}
