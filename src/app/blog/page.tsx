import Link from "next/link";
import { Section } from "@/components/Section";
import { buildMetadata } from "@/lib/seo";
import { getAllPosts, readingTimeMinutes } from "@/lib/posts";

export const metadata = buildMetadata({
  title: "Blog",
  description:
    "Archilas blog on AI memory, RAG, agents, MCP, and building grounded persistent memory in public.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <Section className="noise radial-accent !pt-16 md:!pt-24">
        <h1 className="max-w-3xl font-[family-name:var(--font-fraunces)] text-4xl font-medium text-ink md:text-6xl">
          Blog
        </h1>
        <p className="prose-measure mt-8 text-lg text-muted">
          Direct answers first. Then the longer explanation — written for humans and for answer engines that cite sources.
        </p>
      </Section>

      <Section>
        <div className="space-y-20">
          {posts.map((post, index) => {
            const mins = readingTimeMinutes(post);
            if (index === 0) {
              return (
                <article key={post.slug} className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
                  <Link href={`/blog/${post.slug}`} className="block overflow-hidden bg-surface">
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
                    <p className="text-sm text-muted">
                      <time dateTime={post.datePublished}>{post.datePublished}</time>
                      {" · "}
                      {mins} min read
                    </p>
                    <h2 className="mt-4 font-[family-name:var(--font-fraunces)] text-3xl font-medium text-ink md:text-4xl">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="prose-measure mt-6 text-muted">{post.excerpt}</p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-8 text-ink underline decoration-accent/50 underline-offset-4"
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
                className="grid gap-8 pt-8 md:grid-cols-[200px_1fr] md:gap-12"
              >
                <Link href={`/blog/${post.slug}`} className="block overflow-hidden bg-surface">
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
                  <p className="text-sm text-muted">
                    <time dateTime={post.datePublished}>{post.datePublished}</time>
                    {" · "}
                    {mins} min read
                  </p>
                  <h2 className="mt-3 font-[family-name:var(--font-fraunces)] text-2xl font-medium text-ink">
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
