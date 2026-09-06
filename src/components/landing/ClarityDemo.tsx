"use client";

import { demoBeats, demoQuestion, memoryRows, sourceNotes } from "@/components/landing/demo-data";
import { useDemoClock } from "@/lib/use-demo-clock";
import { cn } from "@/lib/cn";

const avatars = { chat: "AL", doc: "JN", thread: "KR" } as const;

export function ClarityDemo() {
  const clock = useDemoClock();
  const { beat, local, playing, reduced } = clock;

  const memoryCount =
    beat === "notes"
      ? 0
      : beat === "answer" || reduced
        ? memoryRows.length
        : Math.min(memoryRows.length, Math.max(1, Math.ceil(local * memoryRows.length)));

  return (
    <div id="how" className="demo-card scroll-mt-[var(--scroll-margin)]" data-beat={beat} data-playing={playing ? "1" : "0"}>
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

      <div className="demo-glass">
        {beat === "notes" ? <NotesBoard /> : null}

        {beat === "memory" ? (
          <div className="demo-stage">
            <NotesBoard compact />
            <MemoryBoard count={memoryCount} citeIds={[]} />
          </div>
        ) : null}

        {beat === "answer" ? (
          <div className="demo-stage demo-stage-answer">
            <MemoryBoard count={memoryRows.length} citeIds={demoQuestion.citeIds} />
            <AnswerBoard />
          </div>
        ) : null}

        <p className="demo-caption">
          {beat === "notes"
            ? "Notes live in different places — plus a bit of noise."
            : beat === "memory"
              ? "Many sources → one memory. Living, not a chat log."
              : "At query time — coherent, not copy-paste."}
        </p>
      </div>
    </div>
  );
}

function NotesBoard({ compact = false }: { compact?: boolean }) {
  return (
    <div className={cn("note-grid", compact && "is-compact")}>
      <p className="spine-label">Sources</p>
      <div className="note-row">
        {sourceNotes.map((note) => (
          <article key={note.id} className={cn("note-card", `is-${note.id}`)} data-testid={`note-card-${note.id}`}>
            <div className="note-card-bar">
              <span className="avatar" aria-hidden="true">
                {avatars[note.id]}
              </span>
              <span className="note-chip">{note.kind}</span>
              <span className="note-chip is-mute">{note.id === "chat" ? "standup" : note.id === "doc" ? "checklist" : "launch"}</span>
            </div>
            {note.id === "chat" ? (
              <div className="note-bubble">
                <p>{note.text}</p>
              </div>
            ) : note.id === "doc" ? (
              <div className="note-doc">
                <span className="note-doc-rule" />
                <p>{note.text}</p>
                <span className="note-doc-rule" />
                <span className="note-doc-rule is-short" />
              </div>
            ) : (
              <div className="note-thread">
                <span className="note-thread-dot" />
                <p>{note.text}</p>
              </div>
            )}
            <p className="note-noise">{note.noise}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function MemoryBoard({ count, citeIds }: { count: number; citeIds: readonly string[] }) {
  const filled = Math.max(0, count);
  return (
    <div>
      <p className="spine-label">Compact</p>
      <div className="mem-meter" aria-hidden="true">
        <span style={{ width: `${(filled / memoryRows.length) * 100}%` }} />
      </div>
      <div className="mem-row">
        {memoryRows.slice(0, filled).map((row) => (
          <article
            key={row.id}
            className={cn("mem-tile", citeIds.includes(row.id) && "is-cited")}
            data-testid={`mem-tile-${row.id}`}
          >
            <span className="note-chip">{row.kind}</span>
            <p className="mem-line">{row.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function AnswerBoard() {
  const used = memoryRows.filter((row) => demoQuestion.citeIds.includes(row.id));

  return (
    <div>
      <p className="spine-label">Reason · Deliver</p>
      <div className="qa-stack">
        <div className="ask-panel">
          <span className="note-chip">Ask</span>
          <p className="ask-q">{demoQuestion.q}</p>
        </div>
        <div className="reply-panel">
          <span className="note-chip">Answer</span>
          <p className="reply-a">{demoQuestion.a}</p>
          <div className="used-row">
            {used.map((row) => (
              <span key={row.id} className="used-chip">
                {row.kind}
              </span>
            ))}
          </div>
          <p className="note-noise">Checklist preference stays in memory. Uncited — not the blocker.</p>
        </div>
      </div>
    </div>
  );
}
