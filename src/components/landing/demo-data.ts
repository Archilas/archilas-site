export const exampleRows = [
  {
    kind: "preference",
    text: "Prefer compact records over pasted history.",
    scrap: "session notes",
  },
  {
    kind: "decision",
    text: "Left the prior vendor after repeated rate-limit failures.",
    scrap: "why we left",
  },
  {
    kind: "open loop",
    text: "Rotate API keys in CI before the next deploy.",
    scrap: "still open",
  },
] as const;

export const howSteps = [
  { id: "compact", label: "Compact", caption: "Keep a living record" },
  { id: "reason", label: "Reason", caption: "Compose when supported" },
  { id: "deliver", label: "Deliver", caption: "Into tools you already use" },
] as const;

export const contrastSteps = [
  { old: "Search", next: "Compact" },
  { old: "Paste", next: "Reason" },
  { old: "Hope", next: "Deliver" },
] as const;

export const demoHosts = ["Claude", "ChatGPT", "Cursor"] as const;

export const STEP_MS = 2600;

export type HowStepId = (typeof howSteps)[number]["id"];
