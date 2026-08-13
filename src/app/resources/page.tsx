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
      <Section className="!pb-10 !pt-16">
        <p className="mono text-[11px] text-muted">resources</p>
        <h1 className="display display-gradient mt-4 text-[clamp(2.75rem,6vw,4.5rem)]">Resources</h1>
      </Section>

      <Section className="!pt-0">
        <div className="grid gap-4 lg:grid-cols-[1.4fr_0.85fr]">
          <div className="card overflow-hidden p-0">
            <div className="border-b border-border px-5 py-3">
              <p className="mono text-[11px] text-muted">blog</p>
            </div>
            <ul>
              {latest.map((post, i) => (
                <li key={post.slug} className={i < latest.length - 1 ? "border-b border-border" : ""}>
                  <Link href={`/blog/${post.slug}`} className="block px-5 py-4 transition hover:bg-white/[0.02]">
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
            <div className="card p-6">
              <p className="mono text-[11px] text-muted">docs</p>
              <p className="mt-3 text-[14px] text-ink">Coming soon</p>
              <p className="mt-2 text-[13px] text-muted">APIs and MCP setup guides.</p>
            </div>
            <div className="card p-6">
              <p className="mono text-[11px] text-muted">start</p>
              <Link href="/#waitlist" className="mt-3 inline-block text-[14px] font-medium text-ink underline underline-offset-4">
                Join waitlist
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
