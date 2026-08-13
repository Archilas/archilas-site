import Link from "next/link";
import { Section } from "@/components/Section";
import { buildMetadata } from "@/lib/seo";
import { getAllPosts, readingTimeMinutes } from "@/lib/posts";

export const metadata = buildMetadata({
  title: "Resources",
  description: "Archilas blog, docs status, and references.",
  path: "/resources",
});

export default function ResourcesPage() {
  const latest = getAllPosts().slice(0, 4);

  return (
    <>
      <Section className="!pb-10 !pt-12 md:!pt-14">
        <p className="mono text-[12px] text-muted">resources</p>
        <h1 className="mt-3 text-[36px] font-medium tracking-[-0.035em] text-ink md:text-[44px]">
          Resources
        </h1>
        <p className="mt-4 max-w-lg text-[15px] text-muted">
          Writing and docs as they ship.
        </p>
      </Section>

      <Section className="!pt-0">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.85fr]">
          <div className="overflow-hidden rounded-lg border border-border">
            <div className="border-b border-border bg-surface px-5 py-3">
              <p className="mono text-[12px] text-muted">blog</p>
            </div>
            <ul>
              {latest.map((post, i) => (
                <li
                  key={post.slug}
                  className={i < latest.length - 1 ? "border-b border-border" : ""}
                >
                  <Link href={`/blog/${post.slug}`} className="block px-5 py-4 hover:bg-surface">
                    <p className="text-[14px] font-medium text-ink">{post.title}</p>
                    <p className="mono mt-1 text-[11px] text-muted">
                      {post.datePublished} · {readingTimeMinutes(post)} min
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="border-t border-border px-5 py-3">
              <Link href="/blog" className="text-[13px] font-medium text-ink underline underline-offset-4">
                All posts
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg border border-border p-5">
              <p className="mono text-[12px] text-muted">docs</p>
              <p className="mt-3 text-[14px] text-ink">Coming soon</p>
              <p className="mt-2 text-[13px] text-muted">
                APIs and MCP setup guides will land here.
              </p>
            </div>
            <div className="rounded-lg border border-border p-5">
              <p className="mono text-[12px] text-muted">links</p>
              <ul className="mt-3 space-y-2 text-[13px]">
                <li>
                  <Link href="/solutions" className="text-ink hover:text-muted">
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-ink hover:text-muted">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/#waitlist" className="text-ink hover:text-muted">
                    Waitlist
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
