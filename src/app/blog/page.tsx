import Link from "next/link";
import { Section } from "@/components/Section";
import { buildMetadata } from "@/lib/seo";
import { getAllPosts, readingTimeMinutes } from "@/lib/posts";

export const metadata = buildMetadata({
  title: "Blog",
  description: "Archilas writing on AI memory, RAG, agents, and MCP.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <Section className="!pb-8 !pt-16">
        <p className="kicker">Blog</p>
        <h1 className="display mt-4 text-[clamp(2.8rem,7vw,5rem)] text-ink">
          Direct answers first.
        </h1>
        <p className="mt-5 max-w-lg text-[17px] text-muted">Then the longer explanation.</p>
      </Section>

      <Section className="!pt-0">
        {posts.map((post, i) => {
          const mins = readingTimeMinutes(post);
          return (
            <article key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="entry group">
                <p className="entry-num">{String(i + 1).padStart(2, "0")}</p>
                <div>
                  <p className="mono text-[11px] tracking-[0.12em] text-muted">
                    <time dateTime={post.datePublished}>{post.datePublished}</time>
                    {" · "}
                    {mins} min
                  </p>
                  <h2 className="mt-2 text-[28px] italic leading-tight text-ink group-hover:text-brass">
                    {post.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-[16px] leading-relaxed text-muted">{post.excerpt}</p>
                </div>
              </Link>
            </article>
          );
        })}
      </Section>
    </>
  );
}
