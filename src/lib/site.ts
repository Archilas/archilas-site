import { posts } from "@/lib/posts";

export const site = {
  name: "Archilas",
  url: "https://archilas.com",
  description:
    "The memory agent for your AI. Archilas remembers what you and your AI tools have said and done, and answers whenever anyone asks. Cursor, Claude Code and MCP coming soon.",
  tagline: "The memory agent for your AI.",
  headline: "The memory agent for your AI.",
  email: "hello@archilas.com",
  contactEmail: "hermes@archilas.com",
  twitter: "@archilas",
  twitterUrl: "https://x.com/archilas",
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
