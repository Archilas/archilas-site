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
        <p className="mono text-[11px] text-muted">blog</p>
        <h1 className="display mt-4 text-[44px] text-ink md:text-[56px]">Blog</h1>
        <p className="mt-4 max-w-lg text-[15px] text-muted">
          Direct answers first. Then the longer explanation.
        </p>
      </Section>

      <Section className="!pt-0">
        <div className="grid gap-4">
          {posts.map((post) => {
            const mins = readingTimeMinutes(post);
            return (
              <article key={post.slug} className="card grid gap-5 p-5 md:grid-cols-[220px_1fr] md:gap-8 md:p-6">
                <Link href={`/blog/${post.slug}`} className="block overflow-hidden rounded-2xl border border-border">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.coverImage}
                    alt={post.coverAlt}
                    width={400}
                    height={220}
                    className="h-auto w-full opacity-90"
                  />
                </Link>
                <div className="flex flex-col justify-center">
                  <p className="mono text-[11px] text-muted">
                    <time dateTime={post.datePublished}>{post.datePublished}</time>
                    {" · "}
                    {mins} min
                  </p>
                  <h2 className="mt-2 text-[18px] font-medium tracking-tight text-ink">
                    <Link href={`/blog/${post.slug}`} className="hover:underline hover:underline-offset-4">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-2 max-w-xl text-[14px] text-muted">{post.excerpt}</p>
                </div>
              </article>
            );
          })}
        </div>
      </Section>
    </>
  );
}
