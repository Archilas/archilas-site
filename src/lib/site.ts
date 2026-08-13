export const site = {
  name: "Archilas",
  url: "https://archilas.com",
  description:
    "A persistent memory layer for AI. Your tools reason over your history instead of searching text and pasting it into a prompt.",
  tagline: "Memory that stays with your AI.",
  email: "hello@archilas.com",
  twitter: "@archilas",
  locale: "en_US",
} as const;

export const nav = [
  { href: "/solutions", label: "Solutions" },
  { href: "/pricing", label: "Pricing" },
  { href: "/resources", label: "Resources" },
  { href: "/blog", label: "Blog" },
] as const;
