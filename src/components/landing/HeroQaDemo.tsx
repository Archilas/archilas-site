"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { evalDemo } from "@/lib/eval-demo";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

const TYPE_MS = 22;
const HOLD_Q = 500;
const HOLD_A = 5200;
const LOOP_GAP = 800;

/**
 * Editor-style demo: file tab + Ask Archilas side panel.
 * Types the question, then reveals a short answer and citation chip.
 */
export function HeroQaDemo() {
  const reduced = usePrefersReducedMotion();
  const question = evalDemo.question;
  const answer = evalDemo.answer;
  const ready = evalDemo.verifiedFromStage15 && question.length > 0 && answer.length > 0;
  const [typed, setTyped] = useState(() => (reduced && ready ? question.length : 0));
  const [showAnswer, setShowAnswer] = useState(() => reduced && ready);

  useEffect(() => {
    if (!ready) return;
    if (reduced) {
      const id = window.requestAnimationFrame(() => {
        setTyped(question.length);
        setShowAnswer(true);
      });
      return () => window.cancelAnimationFrame(id);
    }
    let frame = 0;
    let start = performance.now();
    const tick = (now: number) => {
      frame = window.requestAnimationFrame(tick);
      const elapsed = now - start;
      const typeEnd = question.length * TYPE_MS;
      if (elapsed < typeEnd) {
        setTyped(Math.min(question.length, Math.floor(elapsed / TYPE_MS)));
        setShowAnswer(false);
        return;
      }
      setTyped(question.length);
      if (elapsed < typeEnd + HOLD_Q) {
        setShowAnswer(false);
        return;
      }
      setShowAnswer(true);
      if (elapsed > typeEnd + HOLD_Q + HOLD_A + LOOP_GAP) {
        start = now;
        setTyped(0);
        setShowAnswer(false);
      }
    };
    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [reduced, ready, question]);

  return (
    <div className="editor-demo" data-testid="hero-qa-demo">
      {ready ? <p className="editor-demo-caption">{evalDemo.caption}</p> : null}
      <div className="editor-shell">
        <div className="editor-main">
          <div className="editor-tabs" aria-hidden="true">
            <span className="editor-tab is-on">{evalDemo.fileTab}</span>
            <span className="editor-tab">README.md</span>
          </div>
          <pre className="editor-code">
            <code>
              <span className="ed-line">
                <span className="ed-n">12</span>
                <span className="ed-kw">from</span> flask <span className="ed-kw">import</span> Flask
              </span>
              <span className="ed-line">
                <span className="ed-n">13</span>
              </span>
              <span className="ed-line">
                <span className="ed-n">14</span>
                app = Flask(__name__)
              </span>
              <span className="ed-line">
                <span className="ed-n">15</span>
              </span>
              <span className="ed-line is-dim">
                <span className="ed-n">16</span>
                <span className="ed-cmt"># team decisions live outside this file</span>
              </span>
            </code>
          </pre>
        </div>
        <aside className="editor-ask" aria-label="Ask Archilas">
          <div className="editor-ask-head">
            <span>Ask Archilas</span>
            {ready ? <span className="editor-ask-dot" aria-hidden="true" /> : null}
          </div>
          <div className="editor-ask-body">
            {ready ? (
              <>
                <p className="editor-q">
                  <span className="editor-q-label">Q</span>
                  <span>
                    {question.slice(0, typed)}
                    {typed < question.length ? <span className="hero-caret" /> : null}
                  </span>
                </p>
                <div className={cn("editor-a", showAnswer && "is-on")}>
                  <p>
                    <span className="editor-q-label">A</span>
                    <span>{answer}</span>
                  </p>
                  {evalDemo.sourceLabel ? (
                    <span className="editor-cite">{evalDemo.sourceLabel}</span>
                  ) : null}
                </div>
              </>
            ) : (
              <div className="editor-idle" data-testid="eval-demo-pending">
                <p className="editor-idle-hint">Ask why, when, or who…</p>
                <p className="editor-pending">A cited answer from your team&apos;s record.</p>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
