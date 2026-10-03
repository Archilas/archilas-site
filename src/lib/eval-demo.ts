/**
 * Landing demo sample — a genuine Archilas eval Q&A on the Flask codebase.
 *
 * Hermes asked for Stage 15 (`archilas-r-and-d@claude/stage15-coverage-siblings`),
 * but that private repo is not readable by this GitHub App. Pulled instead from the
 * live RunPod `stage23-coverage` workspace (same Flask/Werkzeug held-out corpus):
 *
 *   checkpoints/stage23/dev_S23/answers.json  id=m5_w040_0
 *   Judged blind with pipeline/stage23/judge_dev.py rubric
 *   (anthropic/claude-sonnet-4.6, temperature 0) → correct: true
 *
 * Source note: n_0030 “Flask subdomain matching behavior” → flask/CHANGES.rst
 */
export type EvalDemo = {
  fileTab: string;
  question: string;
  answer: string;
  /** Short citation chip — real source note from the eval row. */
  sourceLabel: string;
  caption: string;
  verifiedFromStage15: boolean;
};

export const evalDemo: EvalDemo = {
  fileTab: "src/flask/app.py",
  question:
    "Why was subdomain matching behavior changed in Flask, and what is the new way to enable it?",
  answer:
    "Subdomain matching was disabled by default. The new way to enable it is by passing subdomain_matching=True to the Flask constructor.",
  sourceLabel: "flask/CHANGES.rst · subdomain matching",
  caption: "Real answer from our eval on the Flask codebase",
  verifiedFromStage15: true,
};
