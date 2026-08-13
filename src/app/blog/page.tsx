import Link from "next/link";
import { Section } from "@/components/Section";
import { buildMetadata } from "@/lib/seo";
import { getAllPosts, readingTimeMinutes } from "@/lib/posts";

export const metadata = buildMetadata({
  title: "Blog",
  description:
    "Archilas blog on AI memory, RAG, agents, MCP, and building grounded persistent memory.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <Section className="!pt-16 md:!pt-24">
        <h1 className="max-w-2xl text-4xl font-medium tracking-tight text-ink md:text-5xl">
          Blog
        </h1>
        <p className="prose-measure mt-6 text-lg text-muted">
          Direct answers first. Then the longer explanation, written for humans and for answer engines that cite sources.
        </p>
      </Section>

      <Section className="border-t border-border">
        <div className="space-y-16">
          {posts.map((post, index) => {
            const mins = readingTimeMinutes(post);
            if (index === 0) {
              return (
                <article key={post.slug} className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
                  <Link href={`/blog/${post.slug}`} className="block overflow-hidden border border-border">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.coverImage}
                      alt={post.coverAlt}
                      width={960}
                      height={540}
                      className="h-auto w-full"
                    />
                  </Link>
                  <div className="flex flex-col justify-center">
                    <p className="mono text-[13px] text-muted">
                      <time dateTime={post.datePublished}>{post.datePublished}</time>
                      {" · "}
                      {mins} min
                    </p>
                    <h2 className="mt-4 text-2xl font-medium tracking-tight text-ink md:text-3xl">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="prose-measure mt-5 text-muted">{post.excerpt}</p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-8 text-[15px] text-ink underline underline-offset-4"
                    >
                      Read post
                    </Link>
                  </div>
                </article>
              );
            }

            return (
              <article
                key={post.slug}
                className="grid gap-8 border-t border-border pt-16 md:grid-cols-[200px_1fr] md:gap-12"
              >
                <Link href={`/blog/${post.slug}`} className="block overflow-hidden border border-border">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.coverImage}
                    alt={post.coverAlt}
                    width={400}
                    height={240}
                    className="h-auto w-full"
                  />
                </Link>
                <div>
                  <p className="mono text-[13px] text-muted">
                    <time dateTime={post.datePublished}>{post.datePublished}</time>
                    {" · "}
                    {mins} min
                  </p>
                  <h2 className="mt-3 text-xl font-medium tracking-tight text-ink">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="prose-measure mt-4 text-muted">{post.excerpt}</p>
                </div>
              </article>
            );
          })}
        </div>
      </Section>
    </>
  );
}
