import { posts } from "@/lib/posts";

export const site = {
  name: "Archilas",
  url: "https://archilas.com",
  description:
    "The agent that knows your team's history. Ask why, when or who about your codebase and get a cited answer. Cursor, Claude Code and MCP coming soon.",
  tagline: "Team memory for engineering teams.",
  headline: "The agent that knows your team's history.",
  email: "hello@archilas.com",
  twitter: "@archilas",
  twitterUrl: "https://x.com/archilas",
  githubUrl: "https://github.com/Archilas",
  calUrl: "https://cal.com/archilas/archilas-intro",
  locale: "en_US",
} as const;

export const showResources = posts.length >= 2;

export const nav = [
  { href: "/#how", label: "How" },
  { href: "/#who", label: "Who" },
  { href: "/#why", label: "Why" },
  { href: "/#early-access", label: "Early access" },
] as const;

export const footerNav = {
  product: [
    { href: "/#how", label: "How it works" },
    { href: "/#who", label: "Who it's for" },
    { href: "/#why", label: "Why Archilas" },
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
