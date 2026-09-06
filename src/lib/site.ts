import { posts } from "@/lib/posts";

export const site = {
  name: "Archilas",
  url: "https://archilas.com",
  description:
    "Persistent memory layer for AI. A compact, grounded, revisable record of preferences, decisions, and open loops — delivered into the tools you already use.",
  tagline: "Persistent memory layer for AI.",
  headline: "Passages aren't memory. A record is.",
  email: "hello@archilas.com",
  twitter: "@archilas",
  twitterUrl: "https://x.com/archilas",
  githubUrl: "https://github.com/Archilas",
  locale: "en_US",
} as const;

export const showResources = posts.length >= 2;

export const nav = [
  { href: "/#pipeline", label: "Pipeline" },
  { href: "/#record", label: "Record" },
  { href: "/#waitlist", label: "Waitlist" },
] as const;

export const footerNav = {
  product: [
    { href: "/#pipeline", label: "Pipeline" },
    { href: "/#record", label: "Record" },
    { href: "/#compare", label: "Compare" },
    { href: "/#waitlist", label: "Waitlist" },
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
