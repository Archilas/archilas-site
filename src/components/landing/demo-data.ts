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
    text: "Ship Friday only if legal signs. Otherwise we slip the window.",
    noise: "also the zoom echo is back",
  },
  {
    id: "doc",
    kind: "DOC",
    text: "Keep launch notes in the written checklist — not Slack dumps.",
    noise: "paste of last month’s changelog",
  },
  {
    id: "thread",
    kind: "THREAD",
    text: "Legal still has not signed the Thursday window.",
    noise: "lunch poll??",
  },
] as const;

export const memoryRows = [
  { id: "pref", kind: "Preference", text: "Keep launch notes in the written checklist." },
  { id: "dec", kind: "Decision", text: "Friday ship only after legal signs." },
  { id: "loop", kind: "Open loop", text: "Legal has not signed the launch window." },
] as const;

export const demoQuestion = {
  q: "What's blocking launch?",
  a: "Legal hasn’t signed the launch window. Friday ship waits on that.",
  citeIds: ["dec", "loop"] as readonly string[],
};

export const demoHosts = [
  { name: "Claude", line: "The memory is the context — not a paste." },
  { name: "ChatGPT", line: "Same object. Same durable lines." },
  { name: "Cursor", line: "Intended over MCP." },
] as const;
