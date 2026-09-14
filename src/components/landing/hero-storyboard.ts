export const HERO_QUERY =
  "Since March, what pricing did we lock for Acme, what changed last quarter, and what’s still open that we must not promise on today’s call?";

export const HERO_ANSWER =
  "Since March the floor is $12k and annual discounts max out at 20%. Last quarter you ruled out multi-year without legal. Don’t promise the usage add-on — it’s been open since April.";

export const HERO_TOOL = "archilas_get_context";
export const HERO_TOOL_SUB = "Archilas · Memory SLM · early access";
export const HERO_DIFF = "We don’t dump old chats into the prompt — we return the living record.";
export const HERO_RESULT_NOTE = "Living memory · memory SLM · early access";
export const HERO_SHEET_KICKER = "Living memory · memory SLM · early access";

export const HERO_STATUS_DONE = "Done";

export const HERO_STEPS = [
  { id: "search", label: "Searching for the right notes…" },
  { id: "pull", label: "Pulling extra context…" },
  { id: "reason", label: "Reasoning over the living record…" },
  { id: "explain", label: "Explaining what matters…" },
  { id: "return", label: "Returning answer to the model…" },
] as const;

export const HERO_RESULT =
  "Since March, Acme’s enterprise floor is $12k and annual discounts max out at 20%. Multi-year was ruled out last quarter without legal. The usage add-on has been open since April — don’t promise it.";

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
