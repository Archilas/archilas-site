export const howSteps = [
  { id: "compact", label: "Compact" },
  { id: "reason", label: "Reason" },
  { id: "deliver", label: "Deliver" },
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

export const explorerRecord = [
  {
    id: "e1",
    kind: "Preference" as const,
    text: "Ship Friday notes as a written recap, not a transcript dump.",
    source: "standup.txt",
    quote: "“Write the Friday recap. Don’t paste the raw dump.”",
  },
  {
    id: "e2",
    kind: "Decision" as const,
    text: "Kept the design system in-repo after the Figma-only trial stalled.",
    source: "review.txt",
    quote: "“The Figma-only trial stalled. Keep the system in-repo.”",
  },
  {
    id: "e3",
    kind: "Open loop" as const,
    text: "Confirm the launch window with legal before Thursday.",
    source: "checklist.txt",
    quote: "“Legal still has to sign the Thursday window.”",
  },
] as const;

export const compareDemo = {
  q: "Who owns weekend pages?",
  passages: [
    "Pager dump — retry talk mixed with a birthday thread and an old hostname.",
    "Search hit: three retries, then a jump to an unrelated dashboard rename.",
    "Handoff still lists two owners and a parked escalation.",
  ],
  answer: "One on-call owner. Page after three failed retries. Weekend escalation is still open.",
  rows: [
    { id: "c1", kind: "Preference" as const, text: "Page after three failed retries, not on the first timeout." },
    { id: "c2", kind: "Decision" as const, text: "Kept a single on-call owner after the split rotation failed." },
    { id: "c3", kind: "Open loop" as const, text: "Name the weekend escalation before Friday." },
  ],
} as const;

export const demoHosts = [
  { name: "Claude", line: "The record is the context. Not a paste." },
  { name: "ChatGPT", line: "Same object. Same lines." },
  { name: "Cursor", line: "Intended over MCP. Not live." },
] as const;
