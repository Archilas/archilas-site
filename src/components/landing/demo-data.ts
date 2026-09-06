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
  { id: "compact", label: "Compact", caption: "Keep a living record — not a chat dump." },
  { id: "reason", label: "Reason", caption: "Compose from linked preferences and decisions." },
  { id: "deliver", label: "Deliver", caption: "Into tools you already use. MCP is the intended path." },
] as const;

export const contrastSteps = [
  { old: "Search", next: "Compact" },
  { old: "Paste", next: "Reason" },
  { old: "Hope", next: "Deliver" },
] as const;

export const searchSnippets = ["old thread", "rate limits", "vendor note", "CI keys"] as const;

export const ragPassages = ["rate limits", "vendor note", "CI keys", "old thread", "session notes"] as const;

export const demoHosts = ["Claude", "ChatGPT", "Cursor"] as const;

/** Full Compact → Reason → Deliver loop is ~4.2s. */
export const HOW_STEP_MS = 1400;

export type HowStepId = (typeof howSteps)[number]["id"];
