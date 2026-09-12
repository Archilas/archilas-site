"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type Stage = "paste" | "record" | "answer";

function stageFrom(progress: number): Stage {
  if (progress < 0.34) return "paste";
  if (progress < 0.66) return "record";
  return "answer";
}

const copy = {
  paste: {
    title: "The usual way",
    line: "You hunt old chats and paste scraps into the prompt.",
    micro: "Search. Paste. Hope.",
  },
  record: {
    title: "Archilas",
    line: "You keep what matters — and get a clear answer when you ask.",
    micro: "Compact. Reason. Deliver.",
  },
  answer: {
    title: "Archilas",
    line: "You keep what matters — and get a clear answer when you ask.",
    micro: "Compact. Reason. Deliver.",
  },
} as const;

export function CompareScroll() {
  const trackRef = useRef<HTMLElement>(null);
  const stageRef = useRef<Stage>("paste");
  const [stage, setStage] = useState<Stage>("paste");
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const apply = () => {
      const on = mq.matches;
      frame = window.requestAnimationFrame(() => {
        setReduced(on);
        if (on) {
          stageRef.current = "answer";
          setStage("answer");
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
      track.dataset.stage = "answer";
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
      const k = 1 - Math.exp(-dt / 180);
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

  const text = copy[stage];

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
            hidden={reduced || stage !== "paste"}
            onClick={() => jumpTo(0.5)}
          >
            Scroll to compare
            <span className="compare-dots" aria-hidden="true">
              <i className={stage === "paste" ? "is-on" : undefined} />
              <i className={stage === "record" ? "is-on" : undefined} />
              <i className={stage === "answer" ? "is-on" : undefined} />
            </span>
          </button>

          <div key={stage} className="compare-stage split-grid" data-testid={`compare-stage-${stage}`}>
            <div className="split-copy compare-head">
              <p className="label">Compare</p>
              <h2 className="h2 compare-title">{text.title}</h2>
              <p className="split-lede">{text.line}</p>
              <p className="compare-micro">{text.micro}</p>
            </div>

            <div className="compare-visual">
              {stage === "paste" ? (
                <div className="ui-stack" data-testid="compare-typical">
                  <div className="ui-card is-dim is-skew-a">
                    <span className="ui-kicker">Scrap</span>
                    <p>Ship Friday? Monday? tests??</p>
                  </div>
                  <div className="ui-card is-dim is-skew-b">
                    <span className="ui-kicker">Old chat</span>
                    <p>Alex said something — maybe slip it.</p>
                  </div>
                  <div className="ui-card is-dim">
                    <span className="ui-kicker">Paste</span>
                    <p>Drop it in the prompt. Hope it holds.</p>
                  </div>
                </div>
              ) : null}

              {stage === "record" ? (
                <div className="ui-stack" data-testid="compare-record">
                  <div className="ui-card">
                    <span className="ui-kicker">Preference</span>
                    <p>Ship Friday when the work is ready.</p>
                  </div>
                  <div className="ui-card">
                    <span className="ui-kicker">Decision</span>
                    <p>Don’t ship until tests are green.</p>
                  </div>
                  <div className="ui-card">
                    <span className="ui-kicker">Open loop</span>
                    <p>Alex asked about Monday.</p>
                  </div>
                </div>
              ) : null}

              {stage === "answer" ? (
                <div className="ui-stack" data-testid="compare-ours">
                  <div className="ui-card is-dim">
                    <span className="ui-kicker">Ask</span>
                    <p>Ship Friday?</p>
                  </div>
                  <div className="ui-card">
                    <span className="ui-kicker">Answer</span>
                    <p>Yes — if tests go green.</p>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
