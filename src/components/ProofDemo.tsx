"use client";

import { useEffect, useState, type ReactNode } from "react";

const panes = ["tools", "agent", "vault"] as const;
type Pane = (typeof panes)[number];

const tools = [
  { name: "Cursor", action: "Asked why deploys stalled" },
  { name: "Claude", action: "Same thread, next morning" },
  { name: "ChatGPT", action: "Planning the retry" },
];

const vaultRows = [
  {
    kind: "claim",
    text: "Switched inference host after rate limits blocked deploys",
    confidence: "high" as const,
  },
  {
    kind: "commitment",
    text: "Do not dump transcripts into the prompt",
    confidence: "high" as const,
  },
  {
    kind: "signal",
    text: "API keys in CI still unresolved",
    confidence: "mid" as const,
  },
];

const confidenceClass = {
  high: "text-confidence-high",
  mid: "text-confidence-mid",
  low: "text-confidence-low",
};

export function ProofDemo() {
  const [active, setActive] = useState<Pane>("tools");
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches || paused) return;
    const timer = window.setInterval(() => {
      setActive((current) => panes[(panes.indexOf(current) + 1) % panes.length]);
    }, 2800);
    return () => window.clearInterval(timer);
  }, [paused]);

  function select(pane: Pane) {
    setPaused(true);
    setActive(pane);
  }

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="label">Illustrative trace</p>
          <h2 className="h2 mt-3 max-w-2xl">Tools, an agent, and the vault in one pass</h2>
          <p className="mt-4 max-w-xl text-body">
            Not a product recording. A filled example of how a host, an agent, and structured
            evidence sit together.
          </p>
        </div>
        <p className="mono text-muted">{paused ? "Paused on your selection" : "Looping panes"}</p>
      </div>

      <div className="mt-8 grid items-start gap-3 lg:grid-cols-3">
        <PaneCard title="Tools" active={active === "tools"} onSelect={() => select("tools")}>
          <ul className="space-y-3">
            {tools.map((tool) => (
              <li key={tool.name} className="flex h-fit flex-col gap-1">
                <span className="inline-flex w-fit rounded-pill border border-border-input px-2.5 py-0.5 text-[12px] font-medium text-ink">
                  {tool.name}
                </span>
                <span className="text-[14px] leading-[1.5] text-body">{tool.action}</span>
              </li>
            ))}
          </ul>
        </PaneCard>

        <PaneCard title="Agent" active={active === "agent"} onSelect={() => select("agent")}>
          <p className="mono text-muted">compose</p>
          <p className="mt-2 text-[15px] font-medium text-ink">Why did last night stall?</p>
          <ul className="mt-3 space-y-2 text-[14px] leading-[1.5] text-body">
            <li>Uses 2 vault facts that support the answer.</li>
            <li>Keeps the CI key loop open. Does not invent a close.</li>
            <li>Returns one reply, not a transcript paste.</li>
          </ul>
        </PaneCard>

        <PaneCard title="Vault" active={active === "vault"} onSelect={() => select("vault")} dark>
          <ul className="space-y-3">
            {vaultRows.map((row) => (
              <li
                key={row.text}
                className="h-fit border-b border-border-dark pb-3 last:border-b-0 last:pb-0"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <p className="mono text-[11px] text-text-dark/70">{row.kind}</p>
                  <p className={`mono text-[11px] ${confidenceClass[row.confidence]}`}>
                    {row.confidence}
                  </p>
                </div>
                <p className="mt-1 text-[14px] leading-[1.5] text-text-dark">{row.text}</p>
              </li>
            ))}
          </ul>
        </PaneCard>
      </div>
    </div>
  );
}

function PaneCard({
  title,
  active,
  onSelect,
  children,
  dark = false,
}: {
  title: string;
  active: boolean;
  onSelect: () => void;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={active}
      className={`h-fit w-full rounded-[var(--arch-radius-card)] border p-5 text-left transition-colors ${
        dark ? "bg-bg-dark text-text-dark" : "bg-elevated text-ink"
      } ${active ? "border-accent" : dark ? "border-border-dark" : "border-border"}`}
    >
      <p className={`label ${dark ? "text-text-dark/70" : ""}`}>{title}</p>
      <div className="mt-4">{children}</div>
    </button>
  );
}
