export const demoBeats = [
  { id: "notes", label: "Detailed notes" },
  { id: "memory", label: "Compacted memory" },
  { id: "answer", label: "Smart answer" },
] as const;

export type DemoBeatId = (typeof demoBeats)[number]["id"];

export const sourceNotes = [
  {
    id: "chat",
    kind: "CHAT",
    text: "I usually work from cafés on Fridays. Strong flat white. Deep work around 10.",
    noise: "atlas wifi is spotty again",
  },
  {
    id: "doc",
    kind: "CAL",
    text: "Friday mornings stay open — no meetings before 11.",
    noise: "standup notes from last week",
  },
  {
    id: "thread",
    kind: "THREAD",
    text: "Want to grab coffee Friday, or book around your focus block?",
    noise: "lunch poll??",
  },
] as const;

export const memoryRows = [
  { id: "pref", kind: "Preference", text: "Café Fridays. Strong flat white." },
  { id: "dec", kind: "Decision", text: "Deep work from 10 — no meetings before 11." },
  { id: "loop", kind: "Open loop", text: "Friday coffee still unscheduled." },
] as const;

export const demoQuestion = {
  q: "When should we book Friday?",
  a: "After 11. You deep-work from 10 in a café — keep the morning clear.",
  citeIds: ["pref", "dec"] as readonly string[],
};

export const demoHosts = [
  { name: "Claude", line: "The memory is the context — not a paste." },
  { name: "ChatGPT", line: "Same object. Same durable lines." },
  { name: "Cursor", line: "Intended over MCP." },
] as const;
