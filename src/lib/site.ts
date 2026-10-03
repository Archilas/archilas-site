import { posts } from "@/lib/posts";

export const site = {
  name: "Archilas",
  url: "https://archilas.com",
  description:
    "Ask why, when or who about any part of your codebase. Archilas answers from your team's record and cites the note it came from.",
  tagline: "The agent that knows your team's history.",
  headline: "The agent that knows your team's history.",
  email: "hello@archilas.com",
  earlyAccessUrl: "https://cal.com/archilas/archilas-intro",
  twitter: "@archilas",
  twitterUrl: "https://x.com/archilas",
  githubUrl: "https://github.com/Archilas",
  locale: "en_US",
} as const;

export const showResources = posts.length >= 2;

export const nav = [
  { href: "/#how", label: "How" },
  { href: "/#who", label: "Who" },
  { href: "/#compare", label: "Compare" },
] as const;

export const footerNav = {
  product: [
    { href: "/#how", label: "How it works" },
    { href: "/#who", label: "Who it's for" },
    { href: "/#compare", label: "Compare" },
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
