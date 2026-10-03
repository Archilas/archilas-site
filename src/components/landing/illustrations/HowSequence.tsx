"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";

/** How it works: remember → ask → answer with source; codebase as file tree. */
export function HowSequence({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.3, once: false });
  const reduced = useReducedMotion();
  const on = reduced || inView;

  return (
    <div ref={ref} className={className}>
      <svg
        className="mem-diagram mem-diagram-desktop"
        viewBox="0 0 760 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Labeled example: Archilas remembers history, answers a question about auth timeout from a Claude chat with citation, and can also learn the codebase"
      >
        <rect width="760" height="440" fill="var(--surface)" />

        <text
          x="28"
          y="34"
          fill="var(--muted)"
          style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 12, letterSpacing: "0.1em" }}
        >
          ILLUSTRATIVE EXAMPLE
        </text>

        <Step
          x={28}
          y={52}
          w={210}
          h={150}
          n="01"
          title="Remember"
          on={on}
          delay={0}
        >
          <text x={44} y={140} fill="var(--body)" style={{ fontFamily: "var(--font-geist), sans-serif", fontSize: 13 }}>
            Agents are sent work.
          </text>
          <text x={44} y={162} fill="var(--body)" style={{ fontFamily: "var(--font-geist), sans-serif", fontSize: 13 }}>
            Archilas follows it.
          </text>
        </Step>

        <Arrow x={248} y={127} on={on} delay={0.15} />

        <Step x={278} y={52} w={220} h={150} n="02" title="Ask" on={on} delay={0.12}>
          <text x={294} y={140} fill="var(--ink)" style={{ fontFamily: "var(--font-geist), sans-serif", fontSize: 13, fontWeight: 600 }}>
            What did we decide about
          </text>
          <text x={294} y={162} fill="var(--ink)" style={{ fontFamily: "var(--font-geist), sans-serif", fontSize: 13, fontWeight: 600 }}>
            the auth timeout last week?
          </text>
        </Step>

        <Arrow x={508} y={127} on={on} delay={0.28} />

        <Step x={538} y={52} w={194} h={150} n="03" title="Answer + source" on={on} delay={0.24}>
          <rect x={554} y={118} width={162} height={60} rx="3" fill="var(--amber-soft)" stroke="var(--amber)" strokeWidth="1.5" />
          <text
            x={635}
            y={144}
            textAnchor="middle"
            fill="var(--amber)"
            style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 12 }}
          >
            Claude chat · Tue
          </text>
          <text
            x={635}
            y={164}
            textAnchor="middle"
            fill="var(--ink)"
            style={{ fontFamily: "var(--font-geist), sans-serif", fontSize: 13, fontWeight: 600 }}
          >
            15 min timeout
          </text>
        </Step>

        {/* Codebase file tree */}
        <rect x={28} y={230} width={704} height={180} rx="4" fill="var(--bg)" stroke="var(--line)" strokeWidth="1.5" />
        <text
          x={48}
          y={262}
          fill="var(--muted)"
          style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 12, letterSpacing: "0.08em" }}
        >
          SECONDARY · CODEBASE MEMORY
        </text>
        <text
          x={48}
          y={288}
          fill="var(--ink)"
          style={{ fontFamily: "var(--font-geist), sans-serif", fontSize: 14, fontWeight: 600 }}
        >
          It can learn your entire codebase too.
        </text>

        <FileTree x={48} y={308} />
      </svg>

      <div className="mem-diagram-mobile">
        <ol className="mob-steps">
          <li>
            <span className="mob-step-n">01</span>
            <div>
              <strong>Remember</strong>
              <p>Agents are sent work. Archilas follows it.</p>
            </div>
          </li>
          <li>
            <span className="mob-step-n">02</span>
            <div>
              <strong>Ask</strong>
              <p>What did we decide about the auth timeout last week?</p>
            </div>
          </li>
          <li>
            <span className="mob-step-n">03</span>
            <div>
              <strong>Answer + source</strong>
              <p className="mob-cite">Claude chat · Tue — 15 min timeout</p>
            </div>
          </li>
        </ol>
        <div className="mob-tree">
          <p className="mob-kicker">Codebase memory</p>
          <ul>
            <li>repo/</li>
            <li className="indent">src/auth/</li>
            <li className="indent2">timeout.ts</li>
            <li className="indent">sessions/</li>
            <li className="indent">docs/handoffs.md</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Step({
  x,
  y,
  w,
  h,
  n,
  title,
  children,
  on,
  delay,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  n: string;
  title: string;
  children: ReactNode;
  on: boolean;
  delay: number;
}) {
  return (
    <motion.g
      initial={false}
      animate={on ? { opacity: 1, y: 0 } : { opacity: 0.35, y: 14 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <rect x={x} y={y} width={w} height={h} rx="4" fill="var(--bg)" stroke="var(--ink)" strokeWidth="1.5" />
      <text
        x={x + 16}
        y={y + 32}
        fill="var(--signal)"
        style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 13, letterSpacing: "0.08em" }}
      >
        {n}
      </text>
      <text
        x={x + 16}
        y={y + 58}
        fill="var(--ink)"
        style={{ fontFamily: "var(--font-geist), sans-serif", fontSize: 16, fontWeight: 650 }}
      >
        {title}
      </text>
      {children}
    </motion.g>
  );
}

function Arrow({ x, y, on, delay }: { x: number; y: number; on: boolean; delay: number }) {
  return (
    <motion.g
      initial={false}
      animate={on ? { opacity: 1, x: 0 } : { opacity: 0.2, x: -6 }}
      transition={{ duration: 0.4, delay }}
    >
      <line x1={x} y1={y} x2={x + 18} y2={y} stroke="var(--signal)" strokeWidth="2" />
      <polygon points={`${x + 18},${y - 6} ${x + 30},${y} ${x + 18},${y + 6}`} fill="var(--signal)" />
    </motion.g>
  );
}

function FileTree({ x, y }: { x: number; y: number }) {
  const rows = [
    { label: "repo/", depth: 0 },
    { label: "src/auth/", depth: 1 },
    { label: "timeout.ts", depth: 2 },
    { label: "sessions/", depth: 1 },
    { label: "docs/handoffs.md", depth: 1 },
  ];
  return (
    <g>
      {rows.map((row, i) => (
        <g key={row.label}>
          <rect
            x={x + row.depth * 18}
            y={y + i * 22}
            width={220 - row.depth * 12}
            height={18}
            rx="2"
            fill={i === 2 ? "var(--amber-soft)" : "var(--surface)"}
            stroke={i === 2 ? "var(--amber)" : "var(--line)"}
          />
          <text
            x={x + 8 + row.depth * 18}
            y={y + 13 + i * 22}
            fill="var(--ink)"
            style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: 12 }}
          >
            {row.label}
          </text>
        </g>
      ))}
    </g>
  );
}
