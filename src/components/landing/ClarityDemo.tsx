"use client";

import { demoBeats, demoQuestion, memoryRows, sourceNotes } from "@/components/landing/demo-data";
import { useDemoClock } from "@/lib/use-demo-clock";
import { cn } from "@/lib/cn";

export function ClarityDemo() {
  const clock = useDemoClock();
  const { beat, local, playing, reduced } = clock;
  const showSaved = beat !== "notes" || reduced || local > 0.55;
  const bundleCount =
    beat === "notes"
      ? 0
      : beat === "answer" || reduced
        ? memoryRows.length
        : Math.min(memoryRows.length, Math.max(1, Math.ceil(local * memoryRows.length)));

  return (
    <div className="flow-shell" data-beat={beat} data-playing={playing ? "1" : "0"}>
      <div className="demo-head">
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
              {item.label}
            </button>
          ))}
        </div>
        {reduced ? null : (
          <button type="button" className="run-btn shrink-0" data-testid="demo-play" onClick={clock.replay}>
            {playing ? "Playing" : clock.progress >= 1 ? "Replay" : "Play"}
          </button>
        )}
      </div>

      <div className="flow-gold">
        <div className="phone" data-testid="flow-phone">
          <p className="phone-notch" aria-hidden="true" />
          <div className="phone-thread">
            <div className="bubble bubble-user">
              <p>{sourceNotes[0].text}</p>
            </div>
            <div className="bubble bubble-doc">
              <p>{sourceNotes[1].text}</p>
            </div>
            <div className="bubble bubble-ai">
              <p>{sourceNotes[2].text}</p>
            </div>
          </div>
        </div>

        <div className={cn("flow-join", showSaved && "is-on")} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className={cn("saved-pill", showSaved && "is-on")} data-testid="flow-saved">
          ✓ Saved
        </div>

        <div className={cn("bundle", bundleCount > 0 && "is-on")} data-testid="flow-bundle">
          <div className="bundle-bar">
            <p className="bundle-title">Memory bundle</p>
            <span className="note-chip">{bundleCount} lines</span>
          </div>
          <div className="bundle-rows">
            {memoryRows.slice(0, bundleCount).map((row) => (
              <div
                key={row.id}
                className={cn("bundle-row", beat === "answer" && demoQuestion.citeIds.includes(row.id) && "is-cited")}
                data-testid={`mem-tile-${row.id}`}
              >
                <span className="bundle-kind">{row.kind}</span>
                <span>{row.text}</span>
              </div>
            ))}
          </div>
        </div>

        {beat === "answer" ? (
          <div className="flow-answer">
            <div className="ask-panel">
              <span className="note-chip">Ask</span>
              <p className="ask-q">{demoQuestion.q}</p>
            </div>
            <div className="reply-panel">
              <span className="note-chip">Answer</span>
              <p className="reply-a">{demoQuestion.a}</p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
