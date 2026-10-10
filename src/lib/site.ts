import { posts } from "@/lib/posts";

export const site = {
  name: "Archilas",
  url: "https://www.archilas.com",
  description:
    "Archilas is a memory agent for teams and their AI agents. It remembers what those agents were told and did, and answers later with the source. Cursor, Claude Code, and MCP are coming soon.",
  tagline: "The memory agent for your AI.",
  headline: "The memory agent for your AI.",
  /** Document title. The visible H1 stays `headline`. */
  documentTitle: "A memory agent for AI agents and teams",
  email: "hermes@archilas.com",
  contactEmail: "hermes@archilas.com",
  twitter: "@archilas1",
  twitterUrl: "https://x.com/archilas1",
  githubUrl: "https://github.com/Archilas",
  calUrl: "https://cal.com/archilas/archilas-intro",
  locale: "en_US",
} as const;

export const showResources = posts.length >= 2;

export const nav = [
  { href: "/#problem", label: "Problem" },
  { href: "/#how", label: "How" },
  { href: "/#who", label: "Who" },
  { href: "/#early-access", label: "Early access" },
] as const;

export const footerNav = {
  product: [
    { href: "/#how", label: "How it works" },
    { href: "/#who", label: "Who it's for" },
    { href: "/#early-access", label: "Early access" },
  ],
  resources: showResources
    ? [
        { href: "/resources", label: "Resources" },
        { href: "/blog", label: "Blog" },
      ]
    : [],
  company: [
    { href: `mailto:${site.email}`, label: site.email },
    { href: site.twitterUrl, label: "X", external: true },
    { href: site.githubUrl, label: "GitHub", external: true },
  ],
  legal: [
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ],
} as const;
