import type { Metadata } from "next";
import { site } from "@/lib/site";

const defaultOgImage = `${site.url}/og-default.svg`;

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}

type PageSeo = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  authors?: string[];
};

export function buildMetadata({
  title,
  description,
  path,
  image = defaultOgImage,
  type = "website",
  publishedTime,
  authors,
}: PageSeo): Metadata {
  const url = absoluteUrl(path);
  // Layout template adds "· Archilas"; home uses absolute title.
  const isHome = title === site.name;
  const displayTitle = isHome
    ? `${site.name} — Persistent memory for AI`
    : title;

  return {
    title: isHome
      ? { absolute: displayTitle }
      : displayTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: isHome ? displayTitle : `${displayTitle} · ${site.name}`,
      description,
      url,
      siteName: site.name,
      locale: site.locale,
      type,
      images: [{ url: absoluteUrl(image), width: 1200, height: 630, alt: title }],
      ...(publishedTime ? { publishedTime } : {}),
      ...(authors ? { authors } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: isHome ? displayTitle : `${displayTitle} · ${site.name}`,
      description,
      images: [absoluteUrl(image)],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    description: site.description,
    email: site.email,
    sameAs: [`https://twitter.com/${site.twitter.replace("@", "")}`],
  };
}

export function articleJsonLd(input: {
  title: string;
  description: string;
  path: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    image: [absoluteUrl(input.image)],
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: {
      "@type": "Person",
      name: input.authorName,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    mainEntityOfPage: absoluteUrl(input.path),
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}
