import Link from "next/link";
import { Section } from "@/components/Section";
import { buildMetadata } from "@/lib/seo";
import { getAllPosts, readingTimeMinutes } from "@/lib/posts";

export const metadata = buildMetadata({
  title: "Resources",
  description:
    "Archilas resources hub — blog, documentation status, and reference links for persistent AI memory.",
  path: "/resources",
});

export default function ResourcesPage() {
  const latest = getAllPosts().slice(0, 3);

  return (
    <>
      <Section className="noise radial-accent !pt-16 md:!pt-24">
        <h1 className="max-w-3xl font-[family-name:var(--font-fraunces)] text-4xl font-medium text-ink md:text-6xl">
          Resources
        </h1>
        <p className="prose-measure mt-8 text-lg text-muted">
          Writing, references, and documentation as they become available. No filler lead magnets.
        </p>
      </Section>

      <Section>
        <div className="grid gap-16 lg:grid-cols-[1.4fr_0.9fr]">
          <div>
            <h2 className="font-[family-name:var(--font-fraunces)] text-3xl font-medium text-ink">
              Blog
            </h2>
            <p className="mt-4 text-muted">
              Essays on memory vs RAG, agent context, MCP, and building grounded memory in public.
            </p>
            <ul className="mt-10 space-y-8">
              {latest.map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <p className="font-medium text-ink group-hover:text-accent">{post.title}</p>
                    <p className="mt-2 text-sm text-muted">
                      {post.datePublished} · {readingTimeMinutes(post)} min read
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/blog"
              className="mt-10 inline-block text-ink underline decoration-accent/50 underline-offset-4"
            >
              View all posts
            </Link>
          </div>

          <aside className="space-y-8">
            <div className="bg-surface px-8 py-10">
              <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-medium text-ink">
                Docs
              </h2>
              <p className="mt-4 text-muted">
                Product documentation is coming soon. When public APIs and MCP setup guides ship, they will live here.
              </p>
              <p className="mt-6 text-sm font-medium text-accent">Coming soon</p>
            </div>
            <div className="px-2">
              <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-medium text-ink">
                Also
              </h2>
              <ul className="mt-4 space-y-3 text-muted">
                <li>
                  <Link href="/solutions" className="hover:text-ink">
                    Solutions by persona
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-ink">
                    Indicative pricing
                  </Link>
                </li>
                <li>
                  <Link href="/#waitlist" className="hover:text-ink">
                    Waitlist
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
