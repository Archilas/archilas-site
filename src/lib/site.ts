import { posts } from "@/lib/posts";

export const site = {
  name: "Archilas",
  url: "https://archilas.com",
  description:
    "Persistent memory layer for AI. A compact, grounded, revisable record of preferences, decisions, and open loops — delivered into the tools you already use.",
  tagline: "Persistent memory layer for AI.",
  email: "hello@archilas.com",
  twitter: "@archilas",
  twitterUrl: "https://x.com/archilas",
  githubUrl: "https://github.com/Archilas",
  locale: "en_US",
} as const;

export const showResources = posts.length >= 2;

const primaryNav = [
  { href: "/#how", label: "How it works" },
  { href: "/#product", label: "Product" },
  { href: "/#waitlist", label: "Waitlist" },
] as const;

export const nav = showResources
  ? ([...primaryNav, { href: "/resources", label: "Resources" }] as const)
  : primaryNav;

export const footerNav = {
  product: [
    { href: "/#how", label: "How it works" },
    { href: "/#product", label: "Product" },
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
