"use client";

import { useEffect, useRef } from "react";
import { demoBeats, demoQuestion, memoryRows, sourceNotes } from "@/components/landing/demo-data";
import { useDemoClock } from "@/lib/use-demo-clock";
import { cn } from "@/lib/cn";

const NOTE_AT = [0.08, 0.34, 0.58] as const;
const BUBBLE_CLASS = ["bubble-user", "bubble-doc", "bubble-ai"] as const;

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

  const showNote = (index: number) => reduced || beat !== "notes" || local >= NOTE_AT[index];
  const showLines = reduced || beat !== "notes" || local > 0.74;
  const showSaved = reduced || beat !== "notes" || local > 0.86;
  const bundleCount =
    reduced || beat === "answer"
      ? memoryRows.length
      : beat === "notes"
        ? 0
        : Math.min(memoryRows.length, 1 + Math.floor(local * 2.05));
  const showAsk = reduced || beat === "answer";
  const showReply = reduced || (beat === "answer" && local > 0.22);

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

      <div className="flow-shell">
        <div className="flow-gold">
          <div className="phone" data-testid="flow-phone">
            <p className="phone-notch" aria-hidden="true" />
            <div className="phone-thread">
              {sourceNotes.map((note, index) => (
                <div
                  key={note.id}
                  className={cn("bubble", BUBBLE_CLASS[index], showNote(index) && "is-in")}
                  data-testid={`flow-note-${note.id}`}
                >
                  <p>{note.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flow-trail">
            <div className={cn("flow-join", showLines && "is-on")} aria-hidden="true">
              <span />
              <span />
              <span />
            </div>

            <div className={cn("saved-pill", showSaved && "is-on")} data-testid="flow-saved">
              ✓ Saved
            </div>

            {bundleCount > 0 ? (
              <div className="bundle is-on" data-testid="flow-bundle">
                <div className="bundle-bar">
                  <p className="bundle-title">Memory bundle</p>
                  <span className="note-chip">{bundleCount} lines</span>
                </div>
                <div className="bundle-rows">
                  {memoryRows.slice(0, bundleCount).map((row) => (
                    <div
                      key={row.id}
                      className={cn(
                        "bundle-row",
                        beat === "answer" && demoQuestion.citeIds.includes(row.id) && "is-cited",
                      )}
                      data-testid={`mem-tile-${row.id}`}
                    >
                      <span className="bundle-kind">{row.kind}</span>
                      <span>{row.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          {showAsk ? (
            <div className="flow-answer" data-testid="flow-answer">
              <div className="ask-panel">
                <span className="note-chip">Ask</span>
                <p className="ask-q">{demoQuestion.q}</p>
              </div>
              {showReply ? (
                <div className="reply-panel">
                  <span className="note-chip">Answer</span>
                  <p className="reply-a">{demoQuestion.a}</p>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
