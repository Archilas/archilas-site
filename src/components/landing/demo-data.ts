export const demoBeats = [
  { id: "notes", label: "Notes", spine: "Compact" },
  { id: "memory", label: "Compact", spine: "Reason" },
  { id: "retrieve", label: "Retrieve", spine: "Deliver" },
  { id: "answer", label: "Answer", spine: "Deliver" },
] as const;

export type DemoBeatId = (typeof demoBeats)[number]["id"];

export const sourceNotes = [
  { id: "ask", kind: "CHAT", text: "Can we still ship Friday?" },
  { id: "tests", kind: "THREAD", text: "Tests aren’t green yet." },
  { id: "slip", kind: "CHAT", text: "Alex asked if we should slip to Monday." },
] as const;

export const memoryRows = [
  { id: "dec", kind: "Decision", text: "Ship Friday if tests are green." },
  { id: "con", kind: "Constraint", text: "Tests still failing." },
  { id: "loop", kind: "Open loop", text: "Alex asked about Monday." },
] as const;

export const demoQuestion = {
  q: "Ship Friday?",
  a: "Yes — if tests go green. Hold the Monday slip until they don’t.",
  citeIds: ["dec", "con"] as readonly string[],
};
