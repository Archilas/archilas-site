"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { ChatGptMark, ClaudeMark, CursorMark, McpMark } from "@/components/landing/BrandMarks";

const INTEGRATIONS = [
  { name: "Claude", Mark: ClaudeMark },
  { name: "Cursor", Mark: CursorMark },
  { name: "MCP", Mark: McpMark },
  { name: "ChatGPT", Mark: ChatGptMark },
] as const;

/** Who it's for: company internal agents vs individual AI tools. */
export function WhoScenes({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.28, once: false });
  const reduced = useReducedMotion();
  const on = reduced || inView;

  return (
    <div ref={ref} className={className}>
      <svg
        className="mem-diagram mem-diagram-desktop who-diagram"
        viewBox="0 0 760 168"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Two scenes: companies running internal agents and chatbots, and individuals who live in AI tools"
      >
        <rect width="760" height="168" fill="transparent" />

        <motion.g
          initial={false}
          animate={on ? { opacity: 1, x: 0 } : { opacity: 0.4, x: -12 }}
          transition={{ duration: 0.55 }}
        >
          <rect x="0" y="0" width="364" height="168" rx="4" fill="var(--bg-mint)" stroke="var(--line)" />
          <text
            x="20"
            y="28"
            fill="var(--muted)"
            style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 11, letterSpacing: "0.1em" }}
          >
            COMPANIES
          </text>
          <text
            x="20"
            y="50"
            fill="var(--ink)"
            style={{ fontFamily: "var(--font-geist), sans-serif", fontSize: 14, fontWeight: 650 }}
          >
            Internal agents & chatbots
          </text>

          <AgentChip x={20} y={66} label="Support bot" />
          <AgentChip x={128} y={66} label="Ops agent" />
          <AgentChip x={236} y={66} label="Legal bot" />
          <AgentChip x={20} y={104} label="Sales agent" />
          <AgentChip x={128} y={104} label="Oncall bot" />

          <rect x={236} y={104} width={108} height={44} rx="3" fill="var(--ink)" />
          <text
            x={290}
            y={122}
            textAnchor="middle"
            fill="var(--inverse)"
            style={{ fontFamily: "var(--font-geist), sans-serif", fontSize: 12, fontWeight: 650 }}
          >
            Archilas
          </text>
          <text
            x={290}
            y={138}
            textAnchor="middle"
            fill="var(--signal-soft)"
            style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 10 }}
          >
            shared memory
          </text>
        </motion.g>

        <motion.g
          initial={false}
          animate={on ? { opacity: 1, x: 0 } : { opacity: 0.4, x: 12 }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          <rect x="396" y="0" width="364" height="168" rx="4" fill="var(--bg-warm)" stroke="var(--line)" />
          <text
            x="416"
            y="28"
            fill="var(--muted)"
            style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 11, letterSpacing: "0.1em" }}
          >
            INDIVIDUALS
          </text>
          <text
            x="416"
            y="50"
            fill="var(--ink)"
            style={{ fontFamily: "var(--font-geist), sans-serif", fontSize: 14, fontWeight: 650 }}
          >
            Live in AI tools
          </text>

          <AgentChip x={416} y={66} label="Cursor" warm />
          <AgentChip x={524} y={66} label="Claude" warm />
          <AgentChip x={416} y={104} label="ChatGPT" warm />
          <AgentChip x={524} y={104} label="Local agents" warm />

          <rect x={632} y={104} width={108} height={44} rx="3" fill="var(--ink)" />
          <text
            x={686}
            y={122}
            textAnchor="middle"
            fill="var(--inverse)"
            style={{ fontFamily: "var(--font-geist), sans-serif", fontSize: 12, fontWeight: 650 }}
          >
            Archilas
          </text>
          <text
            x={686}
            y={138}
            textAnchor="middle"
            fill="var(--amber-soft)"
            style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 10 }}
          >
            personal memory
          </text>
        </motion.g>
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
      </div>

      <div className="who-integrations" aria-label="Integrations coming soon">
        <p className="who-integrations-label">Coming soon</p>
        <ul className="who-integrations-list">
          {INTEGRATIONS.map(({ name, Mark }) => (
            <li key={name} className="who-integration">
              <Mark className="who-integration-mark" />
              <span className="who-integration-name">{name}</span>
            </li>
          ))}
        </ul>
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
        width={100}
        height={28}
        rx="3"
        fill={warm ? "var(--amber-soft)" : "var(--sky-soft)"}
        stroke={warm ? "var(--amber)" : "var(--sky)"}
        strokeWidth="1.25"
      />
      <text
        x={x + 50}
        y={y + 18}
        textAnchor="middle"
        fill="var(--ink)"
        style={{ fontFamily: "var(--font-geist), sans-serif", fontSize: 11, fontWeight: 560 }}
      >
        {label}
      </text>
    </g>
  );
}
