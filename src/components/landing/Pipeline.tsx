"use client";

import { useMemo, useState } from "react";
import { ArchWindow } from "@/components/landing/ArchWindow";
import {
  howSteps,
  pipelineQuestions,
  pipelineRecord,
  pipelineTranscript,
  type HowStepId,
} from "@/components/landing/demo-data";
import { usePipelineClock } from "@/lib/use-pipeline-clock";
import { cn } from "@/lib/cn";

export function Pipeline() {
  const clock = usePipelineClock();
  const { stage, local, playing, progress, reduced } = clock;
  const [askId, setAskId] = useState<string | null>(null);

  const compactHighlight = reduced || local > 0.12;
  const compactFly = reduced || local > 0.28;
  const compactCount = reduced || local > 0.72;

  const reasonIndex = local < 0.48 ? 0 : 1;
  const clockQuestion = pipelineQuestions[reasonIndex];
  const question = askId
    ? (pipelineQuestions.find((item) => item.id === askId) ?? clockQuestion)
    : clockQuestion;
  const reasonTyped = askId
    ? 1
    : Math.min(1, local < 0.48 ? local / 0.22 : (local - 0.48) / 0.18);
  const showAnswer = askId ? true : local < 0.48 ? local > 0.26 : local > 0.68;
  const typedQ = question.q.slice(0, Math.ceil(question.q.length * reasonTyped));

  const deliverReveal = reduced ? 1 : Math.min(1, local / 0.55);

  const kept = pipelineTranscript.filter((line) => line.keep).length;
  const discarded = pipelineTranscript.length - kept;

  const visibleRows = useMemo(() => {
    if (reduced) return pipelineRecord.length;
    if (!compactFly) return 0;
    return Math.min(
      pipelineRecord.length,
      Math.floor(((local - 0.28) / 0.5) * pipelineRecord.length) + 1,
    );
  }, [compactFly, local, reduced]);

  function selectStage(id: HowStepId) {
    setAskId(null);
    clock.jumpStage(id);
  }

  return (
    <section id="pipeline" className="scroll-mt-[var(--scroll-margin)]">
      <div className="pipeline-frame">
        <div className="mx-auto flex w-full max-w-[var(--max-width)] flex-col gap-4 px-[var(--pad-x)] py-7">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="label text-text-dark/50">The pipeline</p>
            <div className="flex flex-wrap items-center gap-2">
              {howSteps.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={cn("pipeline-tab", stage === item.id && "is-on")}
                  aria-pressed={stage === item.id}
                  onClick={() => selectStage(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {reduced ? null : (
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                className="pipeline-tab"
                onClick={() => (playing ? clock.pause() : clock.play())}
                aria-label={playing ? "Pause pipeline" : "Play pipeline"}
              >
                {playing ? "Pause" : progress >= 1 ? "Replay" : "Play"}
              </button>
              <button type="button" className="pipeline-tab" onClick={() => { setAskId(null); clock.replay(); }}>
                Run
              </button>
              <input
                type="range"
                className="scrubber min-w-[160px] flex-1"
                min={0}
                max={1}
                step={0.001}
                value={progress}
                aria-label="Pipeline progress"
                onChange={(event) => {
                  setAskId(null);
                  clock.scrub(Number(event.target.value));
                }}
              />
              <span className="mono text-text-dark/40">{Math.round(progress * 100)}%</span>
            </div>
          )}

          {stage === "compact" ? (
            <div className="grid gap-4 lg:grid-cols-2">
              <ArchWindow name="standup.txt" dark>
                <div className="space-y-0.5 p-4">
                  {pipelineTranscript.map((line) => (
                    <p
                      key={line.id}
                      className={cn(
                        "tx-line",
                        compactHighlight && line.keep && "is-signal",
                        compactHighlight && !line.keep && "is-noise",
                      )}
                    >
                      {line.text}
                    </p>
                  ))}
                </div>
              </ArchWindow>
              <ArchWindow name="record.json" dark>
                <div className="space-y-3 p-4">
                  {pipelineRecord.slice(0, visibleRows).map((row) => (
                    <div key={row.id} className="record-arrive">
                      <p className="mono uppercase tracking-[0.14em] text-text-dark/40">{row.kind}</p>
                      <p className="mt-1 text-[14px] leading-6 text-text-dark">{row.text}</p>
                    </div>
                  ))}
                  {compactCount ? (
                    <p className="pt-1 font-mono text-[11px] text-text-dark/45">
                      {kept} kept · {discarded} discarded
                    </p>
                  ) : null}
                </div>
              </ArchWindow>
            </div>
          ) : null}

          {stage === "reason" ? (
            <div className="grid gap-4 lg:grid-cols-[1fr_1.1fr]">
              <ArchWindow name="ask" dark>
                <div className="space-y-4 p-5">
                  <div className="flex flex-wrap gap-2">
                    {pipelineQuestions.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        className={cn("ask-chip", question.id === item.id && "is-on")}
                        aria-pressed={question.id === item.id}
                        onClick={() => {
                          clock.pause();
                          setAskId(item.id);
                        }}
                      >
                        {item.q}
                      </button>
                    ))}
                  </div>
                  <p className="font-mono text-[15px] leading-7 text-text-dark">
                    {typedQ}
                    {reasonTyped < 1 ? <span className="text-signal">|</span> : null}
                  </p>
                  {showAnswer ? (
                    question.supported ? (
                      <p className="text-[16px] leading-7 text-text-dark">{question.a}</p>
                    ) : (
                      <p className="text-[16px] leading-7 text-text-dark/70">Not in the record.</p>
                    )
                  ) : null}
                </div>
              </ArchWindow>
              <ArchWindow name="record.json" dark>
                <div className="space-y-2 p-4">
                  {pipelineRecord.map((row) => {
                    const cited = showAnswer && question.citeIds.includes(row.id);
                    return (
                      <div key={row.id} className={cn("cite-row", cited && "is-on")}>
                        <p className="mono uppercase tracking-[0.14em] text-text-dark/40">{row.kind}</p>
                        <p className="mt-1 text-[14px] leading-6 text-text-dark">{row.text}</p>
                      </div>
                    );
                  })}
                </div>
              </ArchWindow>
            </div>
          ) : null}

          {stage === "deliver" ? (
            <div className="space-y-3">
              <p className="text-[12px] text-text-dark/50">In development</p>
              <div className="grid gap-3 md:grid-cols-3">
                {(["Claude", "ChatGPT", "Cursor"] as const).map((host, index) => (
                  <div
                    key={host}
                    className="host-slot p-4"
                    style={{ opacity: deliverReveal > index * 0.22 ? 1 : 0.28 }}
                  >
                    <p className="mb-3 mono uppercase tracking-[0.14em] text-text-dark/40">{host}</p>
                    <p className="mono text-text-dark/45">record.json</p>
                    <p className="mt-2 text-[13px] leading-6 text-text-dark/85">
                      {pipelineRecord[index % pipelineRecord.length].text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
