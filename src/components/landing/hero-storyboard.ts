export const HERO_QUERY =
  "We’re renegotiating Acme this week. Since March, what did we lock on enterprise pricing, what’s still open with legal, and what must we not promise on the call?";

export const HERO_ANSWER =
  "Keep the $12k floor we locked in March. You can offer up to 20% on annual. Don’t promise the usage add-on — legal still hasn’t cleared it since April.";

export const HERO_TOOL = "archilas_get_context";
export const HERO_TOOL_SUB = "Archilas · Memory SLM · early access";
export const HERO_DIFF = "We don’t dump old chats into the prompt — we return the living record.";
export const HERO_RESULT_NOTE = "Living memory · memory SLM · early access";
export const HERO_SHEET_KICKER = "Living record · already compacted";

export const HERO_STATUS_DONE = "Done";

export const HERO_STEPS = [
  { id: "search", label: "Searching for the right notes…" },
  { id: "pull", label: "Pulling up extra context…" },
  { id: "reason", label: "Reasoning over the living record…" },
  { id: "explain", label: "Explaining what matters…" },
  { id: "return", label: "Answering / returning to the model…" },
] as const;

export const HERO_RESULT = [
  { id: "pref", kind: "preference", text: "Since Mar 3 — annual discount capped at 20%" },
  { id: "dec", kind: "decision", text: "Since Mar 18 — enterprise floor stays $12k" },
  { id: "open", kind: "open_loop", text: "Since Apr 2 — usage add-on blocked until legal clears" },
] as const;

function buildTypeAt(start: number) {
  const at: number[] = [];
  let t = start;
  for (let i = 0; i < HERO_QUERY.length; i++) {
    const ch = HERO_QUERY[i];
    let dt = 50;
    if (i < 8) dt += 20 - i * 2;
    if (ch === " ") dt += 18;
    if (ch === "," || ch === "—" || ch === "-") dt += 88;
    if (ch === "." || ch === "?") dt += 170;
    dt += ((i * 13) % 11) - 4;
    t += Math.max(34, dt);
    at.push(t);
  }
  return at;
}

export const HERO_TYPE_START = 420;
export const HERO_TYPE_AT = buildTypeAt(HERO_TYPE_START);
export const HERO_TYPE_DONE = HERO_TYPE_AT[HERO_TYPE_AT.length - 1] ?? HERO_TYPE_START;

export function typedCount(ms: number) {
  if (ms < HERO_TYPE_START) return 0;
  let n = 0;
  for (const t of HERO_TYPE_AT) {
    if (t <= ms) n += 1;
    else break;
  }
  return n;
}

export const HERO_SEND = HERO_TYPE_DONE + 520;
export const HERO_POP_MS = 720;
export const HERO_TOOL_AT = HERO_SEND + 780;
export const HERO_SHEET_AT = HERO_TOOL_AT + 640;
export const HERO_STEP_MS = 2300;
export const HERO_RESULT_AT = HERO_SHEET_AT + HERO_STEPS.length * HERO_STEP_MS + 280;
export const HERO_TOOL_DONE = HERO_RESULT_AT + 720;
export const HERO_SHEET_DOWN = HERO_RESULT_AT + 2800;
export const HERO_ANSWER_AT = HERO_SHEET_DOWN + 520;
export const HERO_ANSWER_MS = 28;
export const HERO_FADE = HERO_ANSWER_AT + HERO_ANSWER.length * HERO_ANSWER_MS + 5200;
export const HERO_LOOP_MS = HERO_FADE + 1600;
