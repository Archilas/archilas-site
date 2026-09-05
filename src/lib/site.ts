export const site = {
  name: "Archilas",
  url: "https://archilas.com",
  description:
    "AI memory infrastructure. Structured evidence: claims, commitments, and signals with confidence. Not raw transcripts. MCP native, plus API and SDK.",
  tagline: "AI memory infrastructure.",
  email: "hello@archilas.com",
  twitter: "@archilas",
  twitterUrl: "https://x.com/archilas",
  githubUrl: "https://github.com/Archilas",
  mcpUrl: "https://mcp.archilas.com",
  locale: "en_US",
} as const;

export const nav = [
  { href: "/#product", label: "Product" },
  { href: "/#demo", label: "Demo" },
  { href: "/#how", label: "How it works" },
  { href: "/#developers", label: "Developers" },
  { href: "/#security", label: "Security" },
] as const;

export const footerNav = {
  product: [
    { href: "/#product", label: "Platform" },
    { href: "/#demo", label: "Demo" },
    { href: "/#how", label: "How it works" },
    { href: "/#security", label: "Security" },
  ],
  developers: [
    { href: "/#developers", label: "Docs" },
    { href: site.mcpUrl, label: "MCP server", external: true },
    { href: "/#developers", label: "API" },
  ],
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
