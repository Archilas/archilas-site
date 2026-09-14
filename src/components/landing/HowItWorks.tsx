"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/cn";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

const STAGES = [
  { id: "notes", label: "Notes", status: "Written as notes." },
  { id: "compact", label: "Compact", status: "Compacting into a memory KV…" },
  { id: "reason", label: "Reason", status: "Searching · selecting what matters · thinking." },
  { id: "deliver", label: "Deliver", status: "One clear answer." },
] as const;

type StageId = (typeof STAGES)[number]["id"];

const NOTES = [
  {
    id: "n1",
    date: "Mar 3",
    stamp: "2026-03-03",
    body: "Mar 3 call w/ Acme — they pushed hard on annual pricing; we said we can flex on term discounts but not below the enterprise floor we quoted last cycle.",
  },
  {
    id: "n2",
    date: "Mar 18",
    stamp: "2026-03-18",
    body: "Mar 18 internal — locked enterprise floor at $12k; annual discount capped at 20%; no handshake on usage-based add-on until legal reviews the draft.",
  },
  {
    id: "n3",
    date: "Apr 2",
    stamp: "2026-04-02",
    body: "Apr 2 thread + follow-ups through now — legal still has the usage add-on; customer keeps asking; we have not cleared it for promises on live calls.",
  },
] as const;

const KV_ROWS = [
  { key: "preference", value: "Cap annual discount at 20%" },
  { key: "decision", value: "Enterprise floor stays $12k" },
  { key: "open loop", value: "Usage add-on — legal not cleared" },
] as const;

const REASON_STEPS = ["Searching…", "Selecting what matters…", "Thinking…"] as const;

const ANSWER = "Keep the $12k floor. Cap annual at 20%. Don’t promise the usage add-on yet.";

const STAGE_MS = 4200;
const REASON_STEP_MS = 1400;

export function HowItWorks() {
  const reduced = usePrefersReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const holdRef = useRef<StageId | null>(null);
  const elapsedRef = useRef(0);
  const [id, setId] = useState<StageId>("notes");
  const [reasonStep, setReasonStep] = useState(0);

  useEffect(() => {
    if (reduced) {
      setReasonStep(REASON_STEPS.length);
      return;
    }
    const node = rootRef.current;
    let visible = true;
    const observer = node
      ? new IntersectionObserver(
          ([entry]) => {
            visible = entry.isIntersecting && entry.intersectionRatio >= 0.28;
          },
          { threshold: [0, 0.28, 0.6] },
        )
      : null;
    if (node && observer) observer.observe(node);

    let last = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      frame = window.requestAnimationFrame(tick);
      const dt = Math.min(40, now - last);
      last = now;
      if (!visible) return;
      elapsedRef.current += dt;
      const elapsed = elapsedRef.current;
      if (holdRef.current) {
        if (holdRef.current === "reason") {
          setReasonStep(Math.min(REASON_STEPS.length, 1 + Math.floor(elapsed / REASON_STEP_MS)));
        }
        return;
      }
      const cycle = STAGE_MS * STAGES.length;
      const t = elapsed % cycle;
      const next = STAGES[Math.min(STAGES.length - 1, Math.floor(t / STAGE_MS))].id;
      setId((prev) => (prev === next ? prev : next));
      if (next === "reason") {
        const local = t - STAGE_MS * 2;
        setReasonStep(Math.min(REASON_STEPS.length, 1 + Math.floor(local / REASON_STEP_MS)));
      } else {
        setReasonStep(0);
      }
    };
    frame = window.requestAnimationFrame(tick);
    return () => {
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, [reduced]);

  const pick = (next: StageId) => {
    holdRef.current = next;
    elapsedRef.current = 0;
    setId(next);
    setReasonStep(next === "reason" ? (reduced ? REASON_STEPS.length : 1) : 0);
  };

  const stage = STAGES.find((item) => item.id === id) ?? STAGES[0];

  return (
    <section id="how" className="how-band split-band scroll-mt-[var(--scroll-margin)] px-[var(--pad-x)]">
      <Reveal>
        <div className="split-grid is-how is-reverse mx-auto max-w-[1180px]">
          <div className="split-copy">
            <p className="label">How it works</p>
            <h2 className="h2 mt-3">Notes in. Answers out.</h2>
            <p className="split-lede">Compact what matters. Reason when you ask.</p>
          </div>
          <div className="band-plate is-mid plate-drift">
            <div className="plate-sky is-alpine" aria-hidden="true" />
            <div ref={rootRef} className="chrome-window how-stage" data-testid="how-stage" data-stage={id}>
              <div className="demo-chrome">
                <span>How it works</span>
              </div>
              <div className="chip-row how-tabs">
                {STAGES.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={cn("chip", id === item.id && "is-on")}
                    onClick={() => pick(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <p className="how-status">{stage.status}</p>
              {id === "notes" ? (
                <div className="how-notes" data-testid="how-notes">
                  {NOTES.map((note, index) => (
                    <article key={note.id} className={cn("how-note", `is-t${index}`)}>
                      <time dateTime={note.stamp}>{note.date}</time>
                      <p>{note.body}</p>
                    </article>
                  ))}
                </div>
              ) : null}
              {id === "compact" ? (
                <div className="how-kv" data-testid="how-kv">
                  <p className="how-kv-head">Compacting into a memory KV…</p>
                  {KV_ROWS.map((row) => (
                    <div key={row.key} className="how-kv-row">
                      <span>{row.key}</span>
                      <p>{row.value}</p>
                    </div>
                  ))}
                </div>
              ) : null}
              {id === "reason" ? (
                <ol className="how-reason" data-testid="how-reason">
                  {REASON_STEPS.map((label, index) => {
                    const n = index + 1;
                    return (
                      <li
                        key={label}
                        className={cn(
                          "how-reason-step",
                          reasonStep === n && "is-on",
                          reasonStep > n && "is-done",
                        )}
                      >
                        <span className="how-reason-mark" aria-hidden="true" />
                        {label}
                      </li>
                    );
                  })}
                </ol>
              ) : null}
              {id === "deliver" ? (
                <div className="how-answer" data-testid="how-answer">
                  <p>{ANSWER}</p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
