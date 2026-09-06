export const howSteps = [
  { id: "transcript", label: "Transcript" },
  { id: "compact", label: "Compact" },
  { id: "reason", label: "Reason" },
  { id: "deliver", label: "Deliver" },
  { id: "record", label: "Record" },
] as const;

export type HowStepId = (typeof howSteps)[number]["id"];
export type RecordKind = "Preference" | "Decision" | "Open loop";

export const pipelineTranscript = [
  { id: "n1", keep: false, text: "ok looping back — also grab lunch prefs for the offsite" },
  { id: "p1", keep: "preference" as const, text: "keep deploys under 15 minutes or we miss the Friday window" },
  { id: "n2", keep: false, text: "lol the zoom echo is back" },
  { id: "d1", keep: "decision" as const, text: "we left Northwind after the third rate-limit incident" },
  { id: "n3", keep: false, text: "paste of last month’s changelog · · · · ·" },
  { id: "o1", keep: "open loop" as const, text: "rotate the CI deploy keys before Tuesday" },
  { id: "n4", keep: false, text: "anyway where’s that Figma link" },
] as const;

export const pipelineRecord = [
  { id: "p1", kind: "Preference" as const, text: "Keep deploys under 15 minutes." },
  { id: "d1", kind: "Decision" as const, text: "Left Northwind after repeated rate-limit failures." },
  { id: "o1", kind: "Open loop" as const, text: "Rotate CI deploy keys before Tuesday." },
] as const;

export const pipelineQuestions = [
  {
    id: "budget",
    q: "What's the deploy budget?",
    supported: false,
    a: "Not in the record.",
    citeIds: [] as readonly string[],
  },
  {
    id: "vendor",
    q: "Why did we leave Northwind?",
    supported: true,
    a: "Left Northwind after repeated rate-limit failures.",
    citeIds: ["d1"] as readonly string[],
  },
] as const;

export const askCard = [
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

export const compareCard = {
  q: "Who owns weekend pages?",
  passages: [
    "Pager dump mixed with a birthday thread.",
    "Three retries, then a dashboard rename.",
    "Handoff still lists two owners.",
  ],
  answer: "One owner. Page after three failed retries.",
  rows: [
    { kind: "Preference" as const, text: "Page after three failed retries." },
    { kind: "Decision" as const, text: "Single on-call owner." },
    { kind: "Open loop" as const, text: "Name weekend escalation before Friday." },
  ],
} as const;

export const demoHosts = [
  { name: "Claude", line: "The record is the context." },
  { name: "ChatGPT", line: "Same object. Same lines." },
  { name: "Cursor", line: "Intended over MCP." },
] as const;
