export const site = {
  name: "Archilas",
  url: "https://archilas.com",
  description:
    "Persistent memory for AI. Reasons over your history instead of searching old messages and pasting them into a prompt.",
  tagline: "Persistent memory for AI.",
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
