"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

const CUT = 0.5;

function stageFrom(progress: number): "typical" | "ours" {
  return progress < CUT ? "typical" : "ours";
}

export function CompareScroll() {
  const trackRef = useRef<HTMLElement>(null);
  const stageRef = useRef<"typical" | "ours">("typical");
  const [stage, setStage] = useState<"typical" | "ours">("typical");
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const apply = () => {
      const on = mq.matches;
      frame = window.requestAnimationFrame(() => {
        setReduced(on);
        if (on) {
          stageRef.current = "ours";
          setStage("ours");
        }
      });
    };
    apply();
    mq.addEventListener("change", apply);
    return () => {
      mq.removeEventListener("change", apply);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    if (reduced) {
      track.dataset.progress = "1.000";
      track.dataset.stage = "ours";
      track.style.setProperty("--compare-progress", "1");
      return;
    }

    const target = { v: 0 };
    const current = { v: 0 };
    let frame = 0;
    let last = performance.now();

    const readTarget = () => {
      const rect = track.getBoundingClientRect();
      const total = track.offsetHeight - window.innerHeight;
      target.v = total <= 0 ? 1 : Math.min(1, Math.max(0, -rect.top / total));
    };

    const publish = (value: number) => {
      track.dataset.progress = value.toFixed(3);
      track.style.setProperty("--compare-progress", value.toFixed(4));
      const next = stageFrom(value);
      track.dataset.stage = next;
      if (next !== stageRef.current) {
        stageRef.current = next;
        setStage(next);
      }
    };

    const tick = (now: number) => {
      frame = window.requestAnimationFrame(tick);
      const dt = Math.min(40, now - last);
      last = now;
      readTarget();
      const k = 1 - Math.exp(-dt / 160);
      current.v += (target.v - current.v) * k;
      if (Math.abs(target.v - current.v) < 0.0008) current.v = target.v;
      publish(current.v);
    };

    readTarget();
    current.v = target.v;
    publish(current.v);
    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [reduced]);

  const jumpTo = (progress: number) => {
    const track = trackRef.current;
    if (!track || reduced) return;
    const total = Math.max(1, track.offsetHeight - window.innerHeight);
    const top = window.scrollY + track.getBoundingClientRect().top + total * progress;
    window.scrollTo({ top, behavior: "auto" });
  };

  const ours = stage === "ours";

  return (
    <section
      ref={trackRef}
      id="compare"
      className={cn("compare-track", reduced && "is-static")}
      data-testid="compare-scroll"
      data-stage={stage}
    >
      <div className="compare-sticky">
        <div className="band-plate compare-plate plate-drift mx-auto w-full max-w-[1120px]">
          <div className="plate-sky" aria-hidden="true" />
          <div className="compare-scrub" aria-hidden="true" />

          <button
            type="button"
            className="compare-cue"
            data-testid="compare-cue"
            hidden={reduced || ours}
            onClick={() => jumpTo(0.72)}
          >
            Scroll to compare
            <span className="compare-dots" aria-hidden="true">
              <i className={!ours ? "is-on" : undefined} />
              <i className={ours ? "is-on" : undefined} />
            </span>
          </button>

          <div key={stage} className="compare-stage split-grid" data-testid={`compare-stage-${stage}`}>
            <div className="split-copy compare-head">
              <p className="label">Compare</p>
              <h2 className="h2 compare-title">{ours ? "Archilas" : "The usual approach"}</h2>
              <p className="split-lede">{ours ? "Compact. Reason. Deliver." : "Search. Paste. Hope."}</p>
            </div>

            <div className="compare-visual">
              {ours ? (
                <div className="ui-stack" data-testid="compare-ours">
                  <div className="ui-card">
                    <span className="ui-kicker">Living memory</span>
                    <p>Preference: Ship Friday when the work is ready.</p>
                    <p>Decision: Don’t ship until tests are green.</p>
                    <p>Open loop: Alex asked about Monday.</p>
                    <p className="ui-held">Held back: Monday slip — not enough to invent a new plan.</p>
                  </div>
                </div>
              ) : (
                <div className="ui-stack" data-testid="compare-typical">
                  <div className="ui-card is-dim is-skew-a">
                    <span className="ui-kicker">Paste</span>
                    <p>Ship Friday? Monday? tests?? Alex said something — maybe slip it.</p>
                  </div>
                  <div className="ui-card is-dim is-skew-b">
                    <span className="ui-kicker">Search</span>
                    <p>Old chat. Drop it in. Hope it holds.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
