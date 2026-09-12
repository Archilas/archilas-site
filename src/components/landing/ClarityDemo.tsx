"use client";

import { useEffect, useRef } from "react";
import { demoBeats, demoQuestion, memoryRows, sourceNotes } from "@/components/landing/demo-data";
import { useDemoClock } from "@/lib/use-demo-clock";
import { cn } from "@/lib/cn";

const NOTE_AT = [0.06, 0.34, 0.62] as const;
const BUBBLE_TONE = ["is-chat", "is-thread", "is-chat"] as const;

export function ClarityDemo() {
  const clock = useDemoClock();
  const { beat, local, playing, reduced, setVisible } = clock;
  const boardRef = useRef<HTMLDivElement>(null);
  const active = demoBeats.find((item) => item.id === beat) ?? demoBeats[0];

  useEffect(() => {
    const node = boardRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting && entry.intersectionRatio >= 0.5);
      },
      { threshold: [0, 0.5, 0.75, 1] },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [setVisible]);

  const noteCount =
    beat !== "notes" ? sourceNotes.length : Math.max(1, NOTE_AT.filter((at) => local >= at).length);
  const citedRows = memoryRows.filter((row) => demoQuestion.citeIds.includes(row.id));

  return (
    <div className="hero-demo" id="demo" data-beat={beat} data-playing={playing ? "1" : "0"}>
      <div className="demo-plate">
        <div className="hero-selectors">
          <div className="agency-rail" role="tablist" aria-label="How memory is built">
            {demoBeats.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                className={cn("agency-tab", beat === item.id && "is-on")}
                aria-selected={beat === item.id}
                data-testid={`demo-tab-${item.id}`}
                onClick={() => clock.jumpBeat(item.id)}
              >
                <span>{item.label}</span>
                <span className="agency-tab-spine">{item.spine}</span>
              </button>
            ))}
          </div>
          {reduced ? null : (
            <button type="button" className="run-btn shrink-0" data-testid="demo-play" onClick={clock.replay}>
              {playing ? "Playing" : "Replay"}
            </button>
          )}
        </div>

        <div className="demo-window">
        <div className="stage-board" ref={boardRef} data-testid="demo-stage">
          {beat === "notes" ? (
            <div className="stage-view" data-testid="stage-notes">
              <div className="stage-bubbles">
                {sourceNotes.slice(0, noteCount).map((note, index) => (
                  <div
                    key={note.id}
                    className={cn("stage-bubble", BUBBLE_TONE[index])}
                    data-testid={`flow-note-${note.id}`}
                  >
                    <span className="stage-kind">{note.kind}</span>
                    <p>{note.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {beat === "compact" ? (
            <div className="stage-view" data-testid="flow-bundle">
              <div className="stage-list">
                {memoryRows.map((row) => (
                  <div key={row.id} className="stage-row" data-testid={`mem-tile-${row.id}`}>
                    <span className="stage-kind">{row.kind}</span>
                    <p>{row.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {beat === "reason" ? (
            <div className="stage-view" data-testid="stage-reason">
              <p className="stage-ask">{demoQuestion.q}</p>
              <div className="stage-list">
                {citedRows.map((row) => (
                  <div key={row.id} className="stage-row is-cited" data-testid={`mem-tile-${row.id}`}>
                    <span className="stage-kind">{row.kind}</span>
                    <p>{row.text}</p>
                  </div>
                ))}
              </div>
              <p className="stage-refuse">Held back: Monday slip — not enough to invent a new plan.</p>
            </div>
          ) : null}

          {beat === "answer" ? (
            <div className="stage-view" data-testid="flow-answer">
              <p className="stage-ask">{demoQuestion.q}</p>
              <p className="stage-reply">{demoQuestion.a}</p>
              <p className="stage-refuse">{demoQuestion.refuse}</p>
            </div>
          ) : null}
        </div>
      </div>
      <p className="demo-caption" data-testid="demo-caption">
        {active.caption}
      </p>
      </div>
    </div>
  );
}
