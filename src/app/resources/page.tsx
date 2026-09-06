import Link from "next/link";
import { Section } from "@/components/Section";
import { buildMetadata } from "@/lib/seo";
import { getAllPosts, readingTimeMinutes } from "@/lib/posts";

export const metadata = buildMetadata({
  title: "Resources",
  description: "Archilas writing on persistent memory, RAG, agents, and MCP.",
  path: "/resources",
});

export default function ResourcesPage() {
  const latest = getAllPosts().slice(0, 4);

  return (
    <>
      <Section className="!pb-10 !pt-16">
        <p className="label">Resources</p>
        <h1 className="display mt-4">Resources</h1>
      </Section>

      <Section className="!pt-0">
        <div className="grid gap-4 lg:grid-cols-[1.4fr_0.85fr]">
          <div className="card overflow-hidden p-0">
            <div className="border-b border-border px-5 py-3">
              <p className="label">Blog</p>
            </div>
            <ul>
              {latest.map((post, i) => (
                <li key={post.slug} className={i < latest.length - 1 ? "border-b border-border" : ""}>
                  <Link href={`/blog/${post.slug}`} className="block px-5 py-4 transition hover:bg-surface">
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
              <p className="label">Guides</p>
              <p className="mt-3 text-[14px] text-ink">Coming as the product opens.</p>
              <p className="mt-2 text-[13px] text-body">
                Writing lives here first. Setup guides follow when delivery surfaces exist.
              </p>
            </div>
            <div className="card p-6">
              <p className="label">Waitlist</p>
              <Link
                href="/#waitlist"
                className="mt-3 inline-block text-[14px] font-medium text-ink underline underline-offset-4"
              >
                Join waitlist
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
