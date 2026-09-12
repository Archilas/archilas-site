"use client";

import { useEffect, useRef, useState } from "react";

const typical = [
  { k: "Snippets", v: "Finds a passage — not a decision." },
  { k: "Dump", v: "Pastes the chat log back into context." },
  { k: "Bridges", v: "Invented links when memory is thin." },
  { k: "Clutter", v: "Raw notes ride along every turn." },
] as const;

const ours = [
  { k: "Compact", v: "Preferences, decisions, open loops." },
  { k: "Reason", v: "Only the memory this question needs." },
  { k: "Refuse", v: "Unsupported bridges are held back." },
  { k: "One layer", v: "Same record for chat and agents." },
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
            <h2 className="h2 compare-title compare-typical">Typical AI memory</h2>
            <h2 className="h2 compare-title compare-ours">Archilas</h2>
          </div>
          <p className="split-lede compare-lede">
            <span className="compare-typical">Paste, search, hope — snippets in, clutter out.</span>
            <span className="compare-ours">Living memory. Reason when supported. Refuse the rest.</span>
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
                <span className="ui-kicker">Paste</span>
                <p>notes dump — maybe Monday? tests?? another search hit</p>
              </div>
              <div className="ui-card is-dim is-skew-b">
                <span className="ui-kicker">Snippet</span>
                <p>“…green yet…” · other turns riding along</p>
              </div>
              <div className="ui-card is-dim">
                <span className="ui-kicker">Invented</span>
                <p>A bridge that was never decided.</p>
              </div>
            </div>
            <div className="compare-ours ui-stack" data-testid="compare-visual-ours">
              <div className="ui-card">
                <span className="ui-kicker">Living memory</span>
                <p>Preference · Decision · Open loop</p>
              </div>
              <div className="ui-card">
                <span className="ui-kicker">Answer</span>
                <p>One grounded reply. Held back: unsupported slip.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
