"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

/** Who it's for: company internal agents vs individual AI tools. */
export function WhoScenes({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.28, once: false });
  const reduced = useReducedMotion();
  const on = reduced || inView;

  return (
    <div ref={ref} className={className}>
      <svg
        className="mem-diagram mem-diagram-desktop"
        viewBox="0 0 760 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Two scenes: companies running internal agents and chatbots, and individuals who live in AI tools"
      >
        <rect width="760" height="340" fill="transparent" />

        {/* Company scene — no outer nested frame beyond the panel */}
        <motion.g
          initial={false}
          animate={on ? { opacity: 1, x: 0 } : { opacity: 0.4, x: -16 }}
          transition={{ duration: 0.55 }}
        >
          <rect x="0" y="0" width="364" height="300" rx="4" fill="var(--bg-mint)" stroke="var(--line)" />
          <text
            x="24"
            y="36"
            fill="var(--muted)"
            style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 12, letterSpacing: "0.1em" }}
          >
            COMPANIES
          </text>
          <text
            x="24"
            y="64"
            fill="var(--ink)"
            style={{ fontFamily: "var(--font-geist), sans-serif", fontSize: 16, fontWeight: 650 }}
          >
            Internal agents & chatbots
          </text>

          <AgentChip x={24} y={90} label="Support bot" />
          <AgentChip x={140} y={90} label="Ops agent" />
          <AgentChip x={256} y={90} label="Legal bot" />
          <AgentChip x={24} y={148} label="Sales agent" />
          <AgentChip x={140} y={148} label="Oncall bot" />

          <rect x={100} y={214} width={164} height={58} rx="4" fill="var(--ink)" />
          <text
            x={182}
            y={240}
            textAnchor="middle"
            fill="var(--inverse)"
            style={{ fontFamily: "var(--font-geist), sans-serif", fontSize: 14, fontWeight: 650 }}
          >
            Archilas
          </text>
          <text
            x={182}
            y={260}
            textAnchor="middle"
            fill="var(--signal-soft)"
            style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 12 }}
          >
            shared memory
          </text>
          <path d="M80 186 V214 H182" stroke="var(--signal)" strokeWidth="1.75" fill="none" />
          <path d="M196 186 V214 H182" stroke="var(--signal)" strokeWidth="1.75" fill="none" />
          <path d="M302 128 V200 H182" stroke="var(--signal)" strokeWidth="1.5" fill="none" opacity="0.7" />
        </motion.g>

        <motion.g
          initial={false}
          animate={on ? { opacity: 1, x: 0 } : { opacity: 0.4, x: 16 }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          <rect x="396" y="0" width="364" height="300" rx="4" fill="var(--bg-warm)" stroke="var(--line)" />
          <text
            x="420"
            y="36"
            fill="var(--muted)"
            style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 12, letterSpacing: "0.1em" }}
          >
            INDIVIDUALS
          </text>
          <text
            x="420"
            y="64"
            fill="var(--ink)"
            style={{ fontFamily: "var(--font-geist), sans-serif", fontSize: 16, fontWeight: 650 }}
          >
            Live in AI tools
          </text>

          <AgentChip x={420} y={100} label="Cursor" />
          <AgentChip x={536} y={100} label="Claude" />
          <AgentChip x={420} y={158} label="ChatGPT" warm />
          <AgentChip x={536} y={158} label="Local agents" warm />

          <rect x={470} y={220} width={164} height={58} rx="4" fill="var(--ink)" />
          <text
            x={552}
            y={246}
            textAnchor="middle"
            fill="var(--inverse)"
            style={{ fontFamily: "var(--font-geist), sans-serif", fontSize: 14, fontWeight: 650 }}
          >
            Archilas
          </text>
          <text
            x={552}
            y={266}
            textAnchor="middle"
            fill="var(--amber-soft)"
            style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 12 }}
          >
            personal memory
          </text>
          <path d="M476 196 V220 H552" stroke="var(--amber)" strokeWidth="1.75" fill="none" />
          <path d="M592 196 V220 H552" stroke="var(--amber)" strokeWidth="1.75" fill="none" />
        </motion.g>

        <text
          x="380"
          y="328"
          textAnchor="middle"
          fill="var(--body)"
          style={{ fontFamily: "var(--font-geist), sans-serif", fontSize: 13 }}
        >
          Coming soon: Cursor, Claude Code and MCP support
        </text>
      </svg>

      <div className="mem-diagram-mobile">
        <div className="mob-who-card mint">
          <p className="mob-kicker">Companies</p>
          <strong>Internal agents & chatbots</strong>
          <ul className="mob-chip-row">
            <li>Support bot</li>
            <li>Ops agent</li>
            <li>Legal bot</li>
            <li>Sales agent</li>
            <li>Oncall bot</li>
          </ul>
          <div className="mob-node mob-node-ink">Archilas · shared memory</div>
        </div>
        <div className="mob-who-card warm">
          <p className="mob-kicker">Individuals</p>
          <strong>Live in AI tools</strong>
          <ul className="mob-chip-row">
            <li>Cursor</li>
            <li>Claude</li>
            <li>ChatGPT</li>
            <li>Local agents</li>
          </ul>
          <div className="mob-node mob-node-ink">Archilas · personal memory</div>
        </div>
        <p className="mob-soon">Coming soon: Cursor, Claude Code and MCP support</p>
      </div>
    </div>
  );
}

function AgentChip({
  x,
  y,
  label,
  warm,
}: {
  x: number;
  y: number;
  label: string;
  warm?: boolean;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={104}
        height={40}
        rx="3"
        fill={warm ? "var(--amber-soft)" : "var(--sky-soft)"}
        stroke={warm ? "var(--amber)" : "var(--sky)"}
        strokeWidth="1.25"
      />
      <text
        x={x + 52}
        y={y + 25}
        textAnchor="middle"
        fill="var(--ink)"
        style={{ fontFamily: "var(--font-geist), sans-serif", fontSize: 12, fontWeight: 560 }}
      >
        {label}
      </text>
    </g>
  );
}
