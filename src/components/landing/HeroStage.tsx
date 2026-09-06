"use client";

import { useMemo, useState } from "react";
import { ArchWindow } from "@/components/landing/ArchWindow";
import {
  demoHosts,
  howSteps,
  pipelineQuestions,
  pipelineRecord,
  pipelineTranscript,
  type HowStepId,
} from "@/components/landing/demo-data";
import { usePipelineClock } from "@/lib/use-pipeline-clock";
import { cn } from "@/lib/cn";

export function HeroStage({ clock }: { clock: ReturnType<typeof usePipelineClock> }) {
  const { stage, local, playing, reduced } = clock;
  const [askId, setAskId] = useState<string | null>(null);

  const compactHighlight = stage !== "transcript" && (reduced || stage !== "compact" || local > 0.18);
  const compactFly = stage === "compact" ? reduced || local > 0.28 : stage !== "transcript";
  const compactCount = stage === "record" || (stage === "compact" && (reduced || local > 0.72));

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

  const deliverReveal = reduced ? 1 : Math.min(1, local / 0.5);
  const kept = pipelineTranscript.filter((line) => line.keep).length;
  const discarded = pipelineTranscript.length - kept;

  const visibleRows = useMemo(() => {
    if (stage === "transcript") return 0;
    if (stage !== "compact" || reduced) return pipelineRecord.length;
    if (!compactFly) return 0;
    return Math.min(
      pipelineRecord.length,
      Math.floor(((local - 0.28) / 0.5) * pipelineRecord.length) + 1,
    );
  }, [compactFly, local, reduced, stage]);

  function selectStage(id: HowStepId) {
    setAskId(null);
    clock.jumpStage(id);
  }

  return (
    <div id="how" className="scroll-mt-[var(--scroll-margin)]">
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <div className="agency-rail" role="tablist" aria-label="Demo stages">
          {howSteps.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              className={cn("agency-tab", stage === item.id && "is-on")}
              aria-selected={stage === item.id}
              data-testid={`pipeline-tab-${item.id}`}
              onClick={() => selectStage(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        {reduced ? null : (
          <button
            type="button"
            className="run-btn"
            data-testid="pipeline-run"
            onClick={() => {
              setAskId(null);
              clock.replay();
            }}
          >
            {playing ? "Running" : "Run"}
          </button>
        )}
      </div>

      <div className="hero-box mt-5" data-stage={stage} data-playing={playing ? "1" : "0"}>
        <div className="p-4 md:p-5">
          {stage === "transcript" || stage === "compact" ? (
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
                    {reasonTyped < 1 ? <span className="text-text-dark/50">|</span> : null}
                  </p>
                  {showAnswer ? (
                    <p className="text-[16px] leading-7 text-text-dark/85">
                      {question.supported ? question.a : "Not in the record."}
                    </p>
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
            <div className="space-y-3 p-1">
              <p className="text-[12px] text-text-dark/50">In development</p>
              <div className="grid gap-3 md:grid-cols-3">
                {demoHosts.map((host, index) => (
                  <div
                    key={host.name}
                    className="host-slot p-4"
                    style={{ opacity: deliverReveal > index * 0.2 ? 1 : 0.28 }}
                  >
                    <p className="mb-3 mono uppercase tracking-[0.14em] text-text-dark/40">{host.name}</p>
                    <p className="mono text-text-dark/45">record.json</p>
                    <p className="mt-2 text-[13px] leading-6 text-text-dark/85">
                      {pipelineRecord[index % pipelineRecord.length].text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {stage === "record" ? (
            <ArchWindow name="record.json" dark>
              <div className="space-y-3 p-5">
                {pipelineRecord.map((row) => (
                  <div key={row.id}>
                    <p className="mono uppercase tracking-[0.14em] text-text-dark/40">{row.kind}</p>
                    <p className="mt-1 text-[15px] leading-7 text-text-dark">{row.text}</p>
                  </div>
                ))}
                <p className="pt-2 font-mono text-[11px] text-text-dark/45">
                  {kept} kept · {discarded} discarded
                </p>
              </div>
            </ArchWindow>
          ) : null}
        </div>
      </div>
    </div>
  );
}
