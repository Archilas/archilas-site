import Link from "next/link";
import { Section } from "@/components/Section";
import { buildMetadata } from "@/lib/seo";
import { getAllPosts, readingTimeMinutes } from "@/lib/posts";

export const metadata = buildMetadata({
  title: "Resources",
  description: "Archilas resources: blog, documentation status, and reference links.",
  path: "/resources",
});

export default function ResourcesPage() {
  const latest = getAllPosts().slice(0, 3);

  return (
    <>
      <Section className="!pt-16 md:!pt-24">
        <h1 className="max-w-2xl text-4xl font-medium tracking-tight text-ink md:text-5xl">
          Resources
        </h1>
        <p className="prose-measure mt-6 text-lg text-muted">
          Writing and docs as they ship. Nothing filler.
        </p>
      </Section>

      <Section className="border-t border-border">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_0.9fr]">
          <div>
            <h2 className="text-xl font-medium tracking-tight text-ink">Blog</h2>
            <p className="mt-3 text-muted">
              Memory vs RAG, agent context, MCP, and grounded memory.
            </p>
            <ul className="mt-10 divide-y divide-border border-y border-border">
              {latest.map((post) => (
                <li key={post.slug} className="py-6">
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <p className="font-medium text-ink group-hover:underline group-hover:underline-offset-4">
                      {post.title}
                    </p>
                    <p className="mono mt-2 text-[13px] text-muted">
                      {post.datePublished} · {readingTimeMinutes(post)} min
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/blog"
              className="mt-8 inline-block text-[15px] text-ink underline underline-offset-4"
            >
              All posts
            </Link>
          </div>

          <aside className="space-y-8">
            <div className="border border-border px-6 py-8">
              <h2 className="text-xl font-medium tracking-tight text-ink">Docs</h2>
              <p className="mt-4 text-[15px] text-muted">
                Product documentation is coming soon. Public APIs and MCP setup guides will live here.
              </p>
              <p className="mono mt-6 text-[12px] text-muted">status: coming soon</p>
            </div>
            <div>
              <h2 className="text-xl font-medium tracking-tight text-ink">Also</h2>
              <ul className="mt-4 space-y-3 text-[15px] text-muted">
                <li>
                  <Link href="/solutions" className="hover:text-ink">
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-ink">
                    Pricing
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
