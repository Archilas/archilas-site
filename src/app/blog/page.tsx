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
      <Section className="!pb-8 !pt-12 md:!pt-14">
        <p className="mono text-[12px] text-muted">blog</p>
        <h1 className="mt-3 text-[36px] font-medium tracking-[-0.035em] text-ink md:text-[44px]">
          Blog
        </h1>
        <p className="mt-4 max-w-lg text-[15px] text-muted">
          Direct answers first. Then the longer explanation.
        </p>
      </Section>

      <Section className="!pt-0">
        <div className="overflow-hidden rounded-lg border border-border">
          {posts.map((post, index) => {
            const mins = readingTimeMinutes(post);
            return (
              <article
                key={post.slug}
                className={`grid gap-5 p-5 md:grid-cols-[200px_1fr] md:gap-8 md:p-6 ${
                  index < posts.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <Link href={`/blog/${post.slug}`} className="block overflow-hidden rounded border border-border">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.coverImage}
                    alt={post.coverAlt}
                    width={400}
                    height={220}
                    className="h-auto w-full"
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
