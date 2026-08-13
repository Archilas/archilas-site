import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { getAllPosts, getPost, readingTimeMinutes } from "@/lib/posts";
import { articleJsonLd, buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.coverImage,
    type: "article",
    publishedTime: post.datePublished,
    authors: [post.author],
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const mins = readingTimeMinutes(post);

  return (
    <article>
      <JsonLd
        data={articleJsonLd({
          title: post.title,
          description: post.excerpt,
          path: `/blog/${post.slug}`,
          image: post.coverImage,
          datePublished: post.datePublished,
          authorName: post.author,
        })}
      />

      <Section className="!pb-12 !pt-16 md:!pt-24">
        <p className="text-sm text-muted">
          <Link href="/blog" className="hover:text-ink">
            Blog
          </Link>
          {" / "}
          <time dateTime={post.datePublished}>{post.datePublished}</time>
          {" · "}
          {mins} min read
        </p>
        <h1 className="mt-6 max-w-3xl font-[family-name:var(--font-fraunces)] text-4xl font-medium leading-tight text-ink md:text-5xl">
          {post.title}
        </h1>
        <p className="mt-6 text-muted">By {post.author}</p>
      </Section>

      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.coverImage}
          alt={post.coverAlt}
          width={1200}
          height={630}
          className="h-auto w-full bg-surface"
        />
      </div>

      <Section>
        <div className="mx-auto max-w-2xl">
          <p className="bg-surface px-6 py-8 text-lg text-ink md:px-8">{post.directAnswer}</p>

          <div className="prose-measure mt-12 space-y-6 text-lg text-muted">
            {post.sections.map((block, i) => {
              if (block.type === "h2") {
                return (
                  <h2
                    key={i}
                    className="!mt-14 font-[family-name:var(--font-fraunces)] text-3xl font-medium text-ink"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "h3") {
                return (
                  <h3 key={i} className="!mt-10 text-xl font-medium text-ink">
                    {block.text}
                  </h3>
                );
              }
              if (block.type === "ul") {
                return (
                  <ul key={i} className="list-disc space-y-3 pl-6">
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return <p key={i}>{block.text}</p>;
            })}
          </div>

          <p className="mt-16 text-muted">
            <Link href="/blog" className="text-ink underline decoration-accent/50 underline-offset-4">
              ← All posts
            </Link>
          </p>
        </div>
      </Section>
    </article>
  );
}
