"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

/** Problem: chat sessions fade while project timeline keeps building. */
export function ProblemFade({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.3, once: false });
  const reduced = useReducedMotion();
  const on = reduced || inView;

  const sessions = [
    { title: "Mon · Cursor", snippet: "Use 15 min auth timeout", opacity: on ? 1 : 0.35 },
    { title: "Tue · Claude", snippet: "Ship handoff to ops agent", opacity: on ? 0.55 : 0.25 },
    { title: "Wed · Bot", snippet: "Pricing FAQ locked to v2", opacity: on ? 0.28 : 0.15 },
  ];

  const events = [
    { label: "Auth timeout", x: 70 },
    { label: "Handoff", x: 210 },
    { label: "FAQ v2", x: 350 },
    { label: "Review", x: 490 },
    { label: "Deploy", x: 630 },
  ];

  return (
    <div ref={ref} className={className}>
      <svg
        className="mem-diagram mem-diagram-desktop"
        viewBox="0 0 760 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Diagram: AI chat sessions fade to empty while project history continues on a timeline"
      >
        <rect width="760" height="400" fill="var(--surface)" />

        <text
          x="36"
          y="36"
          fill="var(--muted)"
          style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 12, letterSpacing: "0.1em" }}
        >
          SESSION MEMORY
        </text>

        {sessions.map((s, i) => (
          <motion.g
            key={s.title}
            initial={false}
            animate={{ opacity: s.opacity }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
          >
            <rect
              x={36 + i * 170}
              y={54}
              width={156}
              height={132}
              rx="4"
              fill="var(--bg)"
              stroke="var(--line)"
              strokeWidth="1.5"
            />
            <text
              x={50 + i * 170}
              y={80}
              fill="var(--ink)"
              style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 12 }}
            >
              {s.title}
            </text>
            <rect
              x={50 + i * 170}
              y={96}
              width={128}
              height={52}
              rx="3"
              fill="var(--sky-soft)"
              stroke="var(--sky)"
            />
            <text
              x={58 + i * 170}
              y={118}
              fill="var(--ink)"
              style={{ fontFamily: "var(--font-geist), sans-serif", fontSize: 12, fontWeight: 560 }}
            >
              {s.snippet.split(" ").slice(0, 3).join(" ")}
            </text>
            <text
              x={58 + i * 170}
              y={136}
              fill="var(--body)"
              style={{ fontFamily: "var(--font-geist), sans-serif", fontSize: 12 }}
            >
              {s.snippet.split(" ").slice(3).join(" ") || " "}
            </text>
            {i === 2 ? (
              <text
                x={114 + i * 170}
                y={168}
                textAnchor="middle"
                fill="var(--fade)"
                style={{ fontFamily: "var(--font-geist), sans-serif", fontSize: 12 }}
              >
                fading…
              </text>
            ) : null}
          </motion.g>
        ))}

        <g opacity={on ? 0.2 : 0.08}>
          <rect x={546} y={54} width={156} height={132} rx="4" stroke="var(--ink)" strokeWidth="1.25" fill="var(--bg)" />
          <text
            x={624}
            y={124}
            textAnchor="middle"
            fill="var(--ink)"
            style={{ fontFamily: "var(--font-geist), sans-serif", fontSize: 13 }}
          >
            blank session
          </text>
        </g>

        <text
          x="36"
          y="232"
          fill="var(--muted)"
          style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 12, letterSpacing: "0.08em" }}
        >
          PROJECT HISTORY — STILL BUILDING
        </text>

        <line x1="36" y1="300" x2="724" y2="300" stroke="var(--ink)" strokeWidth="1.75" />
        {events.map((e, i) => (
          <motion.g
            key={e.label}
            initial={false}
            animate={on ? { opacity: 1, y: 0 } : { opacity: 0.25, y: 10 }}
            transition={{ duration: 0.45, delay: 0.15 + i * 0.07 }}
          >
            <circle cx={e.x} cy="300" r="6" fill="var(--signal)" />
            <rect
              x={e.x - 48}
              y={248}
              width="96"
              height="36"
              rx="3"
              fill="var(--signal-soft)"
              stroke="var(--signal)"
            />
            <text
              x={e.x}
              y={271}
              textAnchor="middle"
              fill="var(--ink)"
              style={{ fontFamily: "var(--font-geist), sans-serif", fontSize: 12, fontWeight: 560 }}
            >
              {e.label}
            </text>
          </motion.g>
        ))}

        <text
          x="36"
          y="360"
          fill="var(--body)"
          style={{ fontFamily: "var(--font-geist), sans-serif", fontSize: 13 }}
        >
          Decisions keep happening — sessions do not keep them.
        </text>
      </svg>

      <div className="mem-diagram-mobile">
        <p className="mob-kicker">Session memory</p>
        <div className="mob-session-fade">
          <div className="mob-session is-fresh">
            <strong>Mon · Cursor</strong>
            <span>Use 15 min auth timeout</span>
          </div>
          <div className="mob-session is-dim">
            <strong>Tue · Claude</strong>
            <span>Ship handoff to ops agent</span>
          </div>
          <div className="mob-session is-gone">
            <strong>Wed · Bot</strong>
            <span>Pricing FAQ locked to v2 → blank</span>
          </div>
        </div>
        <p className="mob-kicker">Project history — still building</p>
        <ol className="mob-timeline">
          {events.map((e) => (
            <li key={e.label}>{e.label}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
