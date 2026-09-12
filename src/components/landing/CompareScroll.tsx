"use client";

import { useEffect, useRef, useState } from "react";

const typical = [
  {
    k: "Search & paste",
    v: "Dig through old chats, drop snippets into the prompt, hope it holds.",
  },
  {
    k: "Passages, not a picture",
    v: "Retrieval finds text; it doesn’t keep a current record of what matters.",
  },
  {
    k: "Breaks across sessions",
    v: "Context dies when the thread does; you rebuild from scratch.",
  },
] as const;

const ours = [
  {
    k: "Living memory",
    v: "Preferences, decisions, and open loops; compacted, revisable — not a chat dump.",
  },
  {
    k: "Reason at query time",
    v: "Answers from that compact record when it supports them; no invented bridges.",
  },
  {
    k: "One record, many surfaces",
    v: "Claude, ChatGPT, Cursor. MCP coming soon — not live yet.",
  },
] as const;

export function CompareScroll() {
  const ref = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let frame = 0;
    const measure = () => {
      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.42;
      const end = vh * 0.16;
      const raw = Math.min(1, Math.max(0, (start - rect.top) / (start - end || 1)));
      const next = raw < 0.12 ? 0 : raw > 0.88 ? 1 : (raw - 0.12) / 0.76;
      setProgress(next);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        measure();
      });
    };

    frame = window.requestAnimationFrame(() => {
      frame = 0;
      measure();
    });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      ref={ref}
      id="compare"
      className="compare-band split-band scroll-mt-[var(--scroll-margin)] px-[var(--pad-x)]"
      data-testid="compare-scroll"
      data-phase={progress < 0.08 ? "typical" : progress > 0.92 ? "ours" : "mid"}
      style={{ ["--compare" as string]: String(progress) }}
    >
      <div className="band-plate is-a mx-auto max-w-[1120px] plate-drift">
        <div className="compare-head">
          <p className="label">Compare</p>
          <div className="compare-titles">
            <h2 className="h2 compare-title compare-typical">The usual approach</h2>
            <h2 className="h2 compare-title compare-ours">Archilas</h2>
          </div>
          <p className="split-lede compare-lede">
            <span className="compare-typical">Search. Paste. Hope.</span>
            <span className="compare-ours">Compact. Reason. Deliver.</span>
          </p>
        </div>

        <div className="compare-grid">
          <div className="compare-copy">
            <ul className="compare-list compare-typical" data-testid="compare-typical">
              {typical.map((row) => (
                <li key={row.k} className="compare-row is-noise">
                  <span className="ui-kicker">{row.k}</span>
                  <p>{row.v}</p>
                </li>
              ))}
            </ul>
            <ul className="compare-list compare-ours" data-testid="compare-ours">
              {ours.map((row) => (
                <li key={row.k} className="compare-row is-clean">
                  <span className="ui-kicker">{row.k}</span>
                  <p>{row.v}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="compare-visual">
            <div className="compare-typical ui-stack" data-testid="compare-visual-typical">
              <div className="ui-card is-dim is-skew-a">
                <span className="ui-kicker">Paste memory</span>
                <p>Search. Paste. Hope.</p>
              </div>
              <div className="ui-card is-dim is-skew-b">
                <span className="ui-kicker">Search & paste</span>
                <p>Dig through old chats, drop snippets into the prompt, hope it holds.</p>
              </div>
              <div className="ui-card is-dim">
                <span className="ui-kicker">Breaks across sessions</span>
                <p>Context dies when the thread does; you rebuild from scratch.</p>
              </div>
            </div>
            <div className="compare-ours ui-stack" data-testid="compare-visual-ours">
              <div className="ui-card">
                <span className="ui-kicker">Living memory</span>
                <p>Preferences, decisions, and open loops; compacted, revisable — not a chat dump.</p>
              </div>
              <div className="ui-card">
                <span className="ui-kicker">Deliver</span>
                <p>Compact. Reason. Deliver.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
