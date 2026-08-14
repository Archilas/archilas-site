import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/lib/site";
import "./globals.css";

/* Resend stack ≈ Domaine + ABC Favorit + Commit Mono.
   We self-host legal near-equivalents: Zodiak + Satoshi + Commit Mono. */
const satoshi = localFont({
  src: [
    { path: "../fonts/satoshi-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/satoshi-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/satoshi-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

const zodiak = localFont({
  src: [
    { path: "../fonts/zodiak-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/zodiak-400i.woff2", weight: "400", style: "italic" },
    { path: "../fonts/zodiak-700.woff2", weight: "700", style: "normal" },
    { path: "../fonts/zodiak-700i.woff2", weight: "700", style: "italic" },
  ],
  variable: "--font-zodiak",
  display: "swap",
});

const commitMono = localFont({
  src: [{ path: "../fonts/commit-mono-400.otf", weight: "400", style: "normal" }],
  variable: "--font-commit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · Persistent memory for AI`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: site.locale,
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${satoshi.variable} ${zodiak.variable} ${commitMono.variable} h-full`}
    >
      <body className="site-atmosphere flex min-h-full flex-col font-sans text-ink antialiased">
        <SiteHeader />
        <main className="relative z-10 flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
