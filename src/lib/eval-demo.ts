/**
 * Landing demo sample — must be a genuine Stage-15 correct judgement.
 *
 * Source of truth (Hermes):
 *   github.com/Archilas/archilas-r-and-d @ claude/stage15-coverage-siblings
 *   checkpoints/stage15/final/answers.json
 *   judge/judgements.jsonl  (verdict: correct)
 * Prefer a why/decision or version question about Flask/Werkzeug.
 *
 * This Cloud Agent’s GitHub App can only read Archilas/archilas-site, so the
 * private R&D paths 404. Do not invent Q/A/source. When access lands (or a
 * correct row is pasted), set `verifiedFromStage15: true` and fill the fields
 * from that row exactly.
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

/** Empty until a Stage-15 correct row is wired. UI renders a real editor shell. */
export const evalDemo: EvalDemo = {
  fileTab: "src/flask/app.py",
  question: "",
  answer: "",
  sourceLabel: "",
  caption: "Real answer from our eval on the Flask codebase",
  verifiedFromStage15: false,
};
