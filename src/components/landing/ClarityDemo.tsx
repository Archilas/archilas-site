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

  const notesDim = beat !== "notes";
  const showAnswer = beat === "answer" && (reduced || local > 0.18);
  const cited = showAnswer;

  return (
    <div id="how" className="scroll-mt-[var(--scroll-margin)]">
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
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
          <button
            type="button"
            className="run-btn"
            data-testid="demo-play"
            onClick={clock.replay}
          >
            {playing ? "Playing" : clock.progress >= 1 ? "Replay" : "Play"}
          </button>
        )}
      </div>

      <div className="demo-box mt-5" data-beat={beat} data-playing={playing ? "1" : "0"}>
        {beat === "notes" ? (
          <NotesView dim={false} />
        ) : null}

        {beat === "memory" ? (
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <NotesView dim={notesDim} />
            <MemoryView count={memoryCount} citeIds={[]} />
          </div>
        ) : null}

        {beat === "answer" ? (
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <MemoryView count={memoryRows.length} citeIds={cited ? demoQuestion.citeIds : []} />
            <div>
              <p className="demo-kicker">Reason · Deliver</p>
              <p className="mt-3 text-[18px] font-medium leading-7 text-ink">{demoQuestion.q}</p>
              {showAnswer ? (
                <p className="mt-4 text-[17px] leading-7 text-body">{demoQuestion.a}</p>
              ) : null}
            </div>
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
          <p className="demo-kicker">{note.kind}</p>
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
      <p className="demo-kicker">Compact</p>
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
