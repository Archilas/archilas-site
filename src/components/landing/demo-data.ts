export const demoBeats = [
  { id: "notes", label: "Notes", spine: "Compact", caption: "Written as notes." },
  { id: "compact", label: "Compact", spine: "Reason", caption: "Compacted into living memory." },
  { id: "reason", label: "Reason", spine: "Deliver", caption: "Right memory for this question." },
  { id: "answer", label: "Answer", spine: "Deliver", caption: "One grounded answer." },
] as const;

export type DemoBeatId = (typeof demoBeats)[number]["id"];

export const sourceNotes = [
  { id: "ask", kind: "CHAT", text: "Can we still ship Friday?" },
  { id: "tests", kind: "THREAD", text: "Tests aren’t green yet." },
  { id: "slip", kind: "CHAT", text: "Alex asked if we should slip to Monday." },
] as const;

export const memoryRows = [
  { id: "pref", kind: "Preference", text: "Ship Friday when the work is ready." },
  { id: "dec", kind: "Decision", text: "Don’t ship until tests are green." },
  { id: "loop", kind: "Open loop", text: "Alex asked about slipping to Monday." },
] as const;

export const demoQuestion = {
  q: "Ship Friday?",
  a: "Yes — if tests go green.",
  refuse: "Won’t invent a Monday ship. Not enough to change the call.",
  citeIds: ["pref", "dec"] as readonly string[],
};
