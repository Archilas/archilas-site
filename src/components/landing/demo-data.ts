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

export const contrastAsk = [
  {
    id: "catering",
    q: "What's the catering budget?",
    supported: false,
    a: "Not in the record.",
  },
  {
    id: "friday",
    q: "How do we ship Friday notes?",
    supported: true,
    a: "Written recap. Not a transcript dump.",
  },
] as const;

export const contrastCompare = {
  q: "Who owns weekend pages?",
  passages: [
    "A pager dump mixed with a birthday thread.",
    "Three retries, then a dashboard rename.",
    "The handoff still lists two owners.",
  ],
  answer: "One owner. Page after three failed retries.",
  rows: [
    { kind: "Preference", text: "Page after three failed retries." },
    { kind: "Decision", text: "Single on-call owner." },
    { kind: "Open loop", text: "Name weekend escalation before Friday." },
  ],
} as const;

export const demoHosts = [
  { name: "Claude", line: "Same memory. Intended context." },
  { name: "ChatGPT", line: "Same lines. Same object." },
  { name: "Cursor", line: "Intended over MCP." },
] as const;
