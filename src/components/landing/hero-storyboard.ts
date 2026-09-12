export const HERO_QUERY =
  "We’re on a call about pricing. What did we already decide, what’s still open, and what should we not promise yet?";

export const HERO_ANSWER =
  "Keep the $12k floor. You can offer up to 20% off on annual. Don’t promise the usage add-on until legal clears.";

export const HERO_TOOL = "search_living_memory";

export const HERO_STATUS_SEARCH = "Searching…";
export const HERO_STATUS_SELECT = "Selecting memories…";
export const HERO_STATUS_DONE = "Done";

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
export const HERO_SEND = 3400;
export const HERO_TOOL_AT = 3700;
export const HERO_TOOL_OPEN = 4200;
export const HERO_PICK_AT = 5300;
export const HERO_COMPACT_AT = 10800;
export const HERO_TOOL_DONE = 12600;
export const HERO_TOOL_CLOSE = 13600;
export const HERO_ANSWER_AT = 14800;
export const HERO_ANSWER_MS = 18;
export const HERO_FADE = 19000;
