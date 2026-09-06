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

/** Compare windows use a different example than the hero record. */
export const compareRows = [
  {
    kind: "preference",
    text: "Ship Friday notes as a written recap, not a transcript dump.",
  },
  {
    kind: "decision",
    text: "Kept the design system in-repo after the Figma-only trial stalled.",
  },
  {
    kind: "open loop",
    text: "Confirm the launch window with legal before Thursday.",
  },
] as const;

export const retrievalPassages = [
  {
    id: "notes",
    title: "Friday standup transcript",
    excerpt: "1,842 tokens · chat export",
    body: "A long dump of the Friday call. Design-system talk is mixed with lunch plans, a hiring aside, and a paste of last month’s changelog.",
  },
  {
    id: "figma",
    title: "Figma trial thread",
    excerpt: "966 tokens · Slack search",
    body: "A search hit about the Figma-only trial. It mentions tokens drifting from production and a stalled handoff, then jumps to an unrelated file rename.",
  },
  {
    id: "legal",
    title: "Launch checklist draft",
    excerpt: "2,210 tokens · doc snippet",
    body: "A retrieved checklist with legal still unchecked. Nearby paragraphs cover pricing experiments and an old domain question.",
  },
] as const;

export const howSteps = [
  { id: "compact", label: "Compact", caption: "Keep a living record — not a chat dump." },
  { id: "reason", label: "Reason", caption: "Compose from linked preferences and decisions." },
  { id: "deliver", label: "Deliver", caption: "Into tools you already use. MCP is the intended path." },
] as const;

export const demoHosts = ["Claude", "ChatGPT", "Cursor"] as const;

export const holdCards = [
  {
    title: "Preferences",
    body: "How you like to work. A line in the record, not a pasted chat.",
    kind: "preference",
    inset: "Prefer written recaps over transcript dumps.",
  },
  {
    title: "Decisions",
    body: "What you chose, and why. The reason stays attached to the choice.",
    kind: "decision",
    inset: "Kept the design system in-repo.",
  },
  {
    title: "Open loops",
    body: "Work still in play. Unfinished work stays visible until it closes.",
    kind: "open loop",
    inset: "Confirm the launch window with legal.",
  },
] as const;

/** Full Compact → Reason → Deliver loop is ~4.2s. */
export const HOW_STEP_MS = 1400;

export type HowStepId = (typeof howSteps)[number]["id"];
