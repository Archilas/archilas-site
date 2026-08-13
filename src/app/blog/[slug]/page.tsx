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

      <Section className="!pb-8 !pt-16">
        <p className="mono text-[11px] text-muted">
          <Link href="/blog" className="hover:text-ink">
            Blog
          </Link>
          {" / "}
          <time dateTime={post.datePublished}>{post.datePublished}</time>
          {" · "}
          {mins} min
        </p>
        <h1 className="display mt-5 max-w-3xl text-[40px] text-ink md:text-[52px]">{post.title}</h1>
        <p className="mt-5 text-[14px] text-muted">By {post.author}</p>
      </Section>

      <div className="mx-auto w-full max-w-[1120px] px-5 md:px-8">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.coverImage}
          alt={post.coverAlt}
          width={1200}
          height={630}
          className="h-auto w-full rounded-[20px] border border-border opacity-95"
        />
      </div>

      <Section>
        <div className="mx-auto max-w-2xl">
          <p className="card p-6 text-[16px] leading-relaxed text-ink md:p-8">{post.directAnswer}</p>

          <div className="mt-10 space-y-6 text-[16px] leading-relaxed text-muted">
            {post.sections.map((block, i) => {
              if (block.type === "h2") {
                return (
                  <h2 key={i} className="!mt-12 text-[26px] font-medium tracking-tight text-ink">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "h3") {
                return (
                  <h3 key={i} className="!mt-8 text-lg font-medium text-ink">
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

          <p className="mt-14">
            <Link href="/blog" className="text-[13px] font-medium text-ink underline underline-offset-4">
              All posts
            </Link>
          </p>
        </div>
      </Section>
    </article>
  );
}
