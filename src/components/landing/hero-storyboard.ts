export const HERO_QUERY =
  "We’re negotiating pricing with Acme. What did we already decide, what’s still open, and what must we not promise?";

export const HERO_ANSWER =
  "Keep the $12k floor. You can offer up to 20% on annual. Don’t promise the usage add-on until legal clears.";

export const HERO_TOOL = "archilas_get_context";
export const HERO_TOOL_SUB = "Archilas · Memory SLM · early access";
export const HERO_DIFF = "We don’t dump old chats into the prompt — we return the living record.";
export const HERO_RESULT_NOTE = "Living memory · memory SLM · early access";

export const HERO_STATUS_DONE = "Done";

export const HERO_STEPS = [
  { id: "call", label: "Calling Archilas…" },
  { id: "retrieve", label: "Retrieving living memory…" },
  { id: "select", label: "Selecting what matters…" },
  { id: "return", label: "Returning context…" },
] as const;

export const HERO_SHARDS = [
  { id: "pref", date: "Mar 3", kind: "Pref", text: "Cap annual plans at 20% discount", pick: true },
  { id: "dec", date: "Mar 18", kind: "Decision", text: "Enterprise floor stays $12k", pick: true },
  { id: "open", date: "Apr 2", kind: "Open", text: "Legal still reviewing usage add-on", pick: true },
] as const;

export const HERO_RESULT = [
  { id: "pref", kind: "preference", text: "Cap annual discount at 20%" },
  { id: "dec", kind: "decision", text: "Enterprise floor stays $12k" },
  { id: "open", kind: "open_loop", text: "Usage add-on — legal not cleared" },
] as const;

export const HERO_LOOP_MS = 22000;
export const HERO_TYPE_START = 220;
export const HERO_TYPE_MS = 21;
export const HERO_SEND = 3400;
export const HERO_TOOL_AT = 3700;
export const HERO_TOOL_OPEN = 4200;
export const HERO_RETRIEVE_AT = 5200;
export const HERO_PICK_AT = 6400;
export const HERO_RESULT_AT = 10000;
export const HERO_TOOL_DONE = 10800;
export const HERO_ANSWER_AT = 11800;
export const HERO_ANSWER_MS = 18;
export const HERO_FADE = 19800;
