export const HERO_QUERY =
  "We’re jumping on with Acme in 10 minutes. What should I tell them about enterprise pricing — only what we already decided, and call out anything still open so I don’t overpromise?";

export const HERO_ANSWER =
  "Keep the $12k floor. Offer up to 20% on annual. Don’t promise the usage add-on until legal clears.";

export const HERO_TOOL = "archilas_memory";

export const HERO_SHARDS = [
  { id: "pref", date: "Mar 3", kind: "Pref", text: "Cap annual plans at 20% discount", pick: true },
  { id: "dec", date: "Mar 18", kind: "Decision", text: "Enterprise floor stays $12k", pick: true },
  { id: "open", date: "Apr 2", kind: "Open", text: "Legal still reviewing usage add-on", pick: true },
  { id: "note", date: "Apr 9", kind: "Note", text: "Customer asked for multi-year in Q2 call", pick: true },
  { id: "dim-a", date: "Feb 11", kind: "Note", text: "Renewal thread started in Slack", pick: false },
  { id: "dim-b", date: "Jan 22", kind: "Note", text: "Pricing one-pager sent last quarter", pick: false },
] as const;

export const HERO_COMPACT = [
  { id: "pref", kind: "Preference", text: "20% annual cap" },
  { id: "dec", kind: "Decision", text: "$12k floor" },
  { id: "open", kind: "Open loop", text: "Legal on usage add-on" },
] as const;

export const HERO_LOOP_MS = 20000;
export const HERO_TYPE_START = 220;
export const HERO_TYPE_MS = 21;
export const HERO_SEND = 4300;
export const HERO_TOOL_AT = 4600;
export const HERO_TOOL_OPEN = 5100;
export const HERO_PICK_AT = 6200;
export const HERO_COMPACT_AT = 10800;
export const HERO_TOOL_DONE = 12600;
export const HERO_TOOL_CLOSE = 13600;
export const HERO_ANSWER_AT = 14800;
export const HERO_ANSWER_MS = 18;
export const HERO_FADE = 19000;
