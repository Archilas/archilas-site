export const HERO_QUERY =
  "What should we tell the customer about pricing — based on what we already decided and what’s still open?";

export const HERO_ANSWER =
  "Keep the $12k floor. Offer ≤20% on annual. Don’t promise the usage add-on until legal clears.";

export const HERO_SHARDS = [
  { id: "pref", date: "Mar 3", kind: "Pref", text: "Cap annual plans at 20% discount", pick: true },
  { id: "dec", date: "Mar 18", kind: "Decision", text: "Enterprise floor stays $12k", pick: true },
  { id: "open", date: "Apr 2", kind: "Open", text: "Legal still reviewing usage add-on", pick: true },
  { id: "note", date: "Apr 9", kind: "Note", text: "Customer asked for multi-year in Q2 call", pick: true },
  { id: "dim-a", date: "Feb 11", kind: "Note", text: "Renewal thread started in Slack", pick: false },
  { id: "dim-b", date: "Jan 22", kind: "Note", text: "Pricing one-pager sent last quarter", pick: false },
] as const;

export const HERO_COMPACT = [
  { id: "pref", kind: "Preference", text: "Cap annual plans at 20% discount", support: true },
  { id: "dec", kind: "Decision", text: "Enterprise floor stays $12k", support: true },
  { id: "open", kind: "Open loop", text: "Legal still reviewing usage add-on", support: false },
] as const;

export const HERO_LOOP_MS = 22000;
export const HERO_TYPE_START = 380;
export const HERO_TYPE_MS = 48;
