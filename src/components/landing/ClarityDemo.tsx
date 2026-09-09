"use client";

import { useEffect, useRef } from "react";
import { demoBeats, demoQuestion, memoryRows, sourceNotes } from "@/components/landing/demo-data";
import { useDemoClock } from "@/lib/use-demo-clock";
import { cn } from "@/lib/cn";

const NOTE_AT = [0.04, 0.32, 0.58] as const;

export function ClarityDemo() {
  const clock = useDemoClock();
  const { beat, local, playing, reduced, startOnce } = clock;
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startOnce();
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [startOnce]);

  const noteCount =
    beat !== "notes" ? sourceNotes.length : Math.max(1, NOTE_AT.filter((at) => local >= at).length);
  const compactCount =
    beat !== "memory" ? memoryRows.length : Math.min(memoryRows.length, Math.max(1, 1 + Math.floor(local * 2.1)));

  return (
    <div className="hero-demo" ref={rootRef} data-beat={beat} data-playing={playing ? "1" : "0"}>
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

      <div className="stage-board" data-testid="demo-stage">
        {beat === "notes" ? (
          <div className="stage-view" data-testid="stage-notes">
            <p className="stage-kicker">Notes</p>
            <p className="stage-ask">{demoQuestion.q}</p>
            <div className="stage-list">
              {sourceNotes.slice(0, noteCount).map((note) => (
                <div key={note.id} className="stage-note" data-testid={`flow-note-${note.id}`}>
                  <span className="stage-kind">{note.kind}</span>
                  <p>{note.text}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {beat === "memory" ? (
          <div className="stage-view" data-testid="flow-bundle">
            <p className="stage-kicker">Living memory</p>
            <p className="stage-ask">Compacted from the thread.</p>
            <div className="stage-list">
              {memoryRows.slice(0, compactCount).map((row) => (
                <div key={row.id} className="stage-row" data-testid={`mem-tile-${row.id}`}>
                  <span className="stage-kind">{row.kind}</span>
                  <p>{row.text}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {beat === "retrieve" ? (
          <div className="stage-view" data-testid="stage-retrieve">
            <p className="stage-kicker">Retrieve</p>
            <p className="stage-ask">{demoQuestion.q}</p>
            <div className="stage-list">
              {memoryRows
                .filter((row) => demoQuestion.citeIds.includes(row.id))
                .map((row) => (
                  <div key={row.id} className="stage-row is-cited" data-testid={`mem-tile-${row.id}`}>
                    <span className="stage-kind">{row.kind}</span>
                    <p>{row.text}</p>
                  </div>
                ))}
            </div>
          </div>
        ) : null}

        {beat === "answer" ? (
          <div className="stage-view" data-testid="flow-answer">
            <p className="stage-kicker">Answer</p>
            <p className="stage-ask">{demoQuestion.q}</p>
            <p className="stage-reply">{demoQuestion.a}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
