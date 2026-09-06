"use client";

import { demoBeats, demoQuestion, memoryRows, sourceNotes } from "@/components/landing/demo-data";
import { useDemoClock } from "@/lib/use-demo-clock";
import { cn } from "@/lib/cn";

export function ClarityDemo() {
  const clock = useDemoClock();
  const { beat, local, playing, reduced } = clock;

  const memoryCount =
    beat === "notes"
      ? 0
      : beat === "answer" || reduced
        ? memoryRows.length
        : Math.min(memoryRows.length, Math.max(1, Math.ceil(local * memoryRows.length)));

  const showAnswer = beat === "answer" && (reduced || local > 0.16);
  const cited = showAnswer;

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

      <div className="demo-body">
        {beat === "notes" ? <NotesView dim={false} /> : null}

        {beat === "memory" ? (
          <div className="grid gap-6 lg:grid-cols-2">
            <NotesView dim />
            <MemoryView count={memoryCount} citeIds={[]} />
          </div>
        ) : null}

        {beat === "answer" ? (
          <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <MemoryView count={memoryRows.length} citeIds={cited ? demoQuestion.citeIds : []} />
            <AnswerView ready={showAnswer} />
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

function NotesView({ dim }: { dim: boolean }) {
  return (
    <div className={cn("space-y-3", dim && "opacity-40")}>
      {sourceNotes.map((note) => (
        <article key={note.id} className="source-card">
          <p className="spine-label">{note.kind}</p>
          <p className="mt-2 text-[17px] leading-7 text-ink">{note.text}</p>
          <p className="mt-2 text-[15px] leading-6 text-muted">{note.noise}</p>
        </article>
      ))}
    </div>
  );
}

function MemoryView({ count, citeIds }: { count: number; citeIds: readonly string[] }) {
  return (
    <div>
      <p className="spine-label">Compact</p>
      <div className="mt-3 space-y-4">
        {memoryRows.slice(0, Math.max(0, count)).map((row) => (
          <div key={row.id} className={cn("memory-row", citeIds.includes(row.id) && "is-cited")}>
            <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-muted">{row.kind}</p>
            <p className="mt-1 text-[17px] leading-7 text-ink">{row.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function AnswerView({ ready }: { ready: boolean }) {
  const used = memoryRows.filter((row) => demoQuestion.citeIds.includes(row.id));

  return (
    <div>
      <p className="spine-label">Reason · Deliver</p>
      <p className="mt-3 text-[18px] font-medium leading-7 text-ink">{demoQuestion.q}</p>
      {ready ? (
        <>
          <p className="mt-3 text-[17px] leading-7 text-body">{demoQuestion.a}</p>
          <p className="mt-5 text-[13px] font-medium uppercase tracking-[0.1em] text-muted">Used from memory</p>
          <ul className="mt-2 space-y-2">
            {used.map((row) => (
              <li key={row.id} className="text-[16px] leading-7 text-ink">
                <span className="text-muted">{row.kind}: </span>
                {row.text}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[15px] leading-6 text-muted">
            The checklist preference is in memory. It is not the blocker, so it stays uncited.
          </p>
        </>
      ) : null}
    </div>
  );
}
