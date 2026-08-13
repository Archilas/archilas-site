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
      <Section className="!pb-8 !pt-12">
        <p className="mono text-[11px] uppercase tracking-[0.14em] text-muted">resources</p>
        <h1 className="display mt-4 text-[40px] text-ink md:text-[48px]">Resources</h1>
      </Section>

      <Section className="!pt-0">
        <div className="grid gap-4 lg:grid-cols-[1.4fr_0.85fr]">
          <div className="overflow-hidden rounded-sm border border-border">
            <div className="border-b border-border bg-surface px-5 py-3">
              <p className="mono text-[11px] uppercase tracking-[0.14em] text-muted">blog</p>
            </div>
            <ul>
              {latest.map((post, i) => (
                <li key={post.slug} className={i < latest.length - 1 ? "border-b border-border" : ""}>
                  <Link href={`/blog/${post.slug}`} className="block px-5 py-4 hover:bg-surface">
                    <p className="text-[14px] font-medium text-ink">{post.title}</p>
                    <p className="mono mt-1 text-[11px] text-muted">
                      {post.datePublished} · {readingTimeMinutes(post)} min
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <div className="rounded-sm border border-border p-5">
              <p className="mono text-[11px] uppercase tracking-[0.14em] text-muted">docs</p>
              <p className="mt-3 text-[14px] text-ink">Coming soon</p>
              <p className="mt-2 text-[13px] text-muted">APIs and MCP setup guides.</p>
            </div>
            <div className="rounded-sm bg-ink p-5 text-bg">
              <p className="mono text-[11px] uppercase tracking-[0.14em] text-white/45">start</p>
              <Link href="/#waitlist" className="mt-3 inline-block text-[14px] font-medium underline underline-offset-4">
                Join waitlist
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
