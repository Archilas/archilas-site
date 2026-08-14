import Link from "next/link";
import { Section } from "@/components/Section";
import { buildMetadata } from "@/lib/seo";
import { getAllPosts, readingTimeMinutes } from "@/lib/posts";

export const metadata = buildMetadata({
  title: "Resources",
  description: "Archilas blog, docs status, and references.",
  path: "/resources",
});

export default function ResourcesPage() {
  const latest = getAllPosts().slice(0, 4);

  return (
    <>
      <Section className="!pb-8 !pt-16">
        <p className="kicker">Resources</p>
        <h1 className="display mt-4 text-[clamp(2.8rem,7vw,5rem)] text-ink">From the register.</h1>
      </Section>

      <Section className="!pt-0">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.75fr]">
          <div>
            <p className="kicker mb-2">Writing</p>
            {latest.map((post, i) => (
              <article key={post.slug} className={i === 0 ? "border-t border-border" : ""}>
                <Link href={`/blog/${post.slug}`} className="entry group">
                  <p className="entry-num">{String(i + 1).padStart(2, "0")}</p>
                  <div>
                    <h2 className="text-[22px] italic text-ink group-hover:text-brass">{post.title}</h2>
                    <p className="mono mt-2 text-[11px] tracking-[0.12em] text-muted">
                      {post.datePublished} · {readingTimeMinutes(post)} min
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
          <div className="space-y-10 border-t border-border pt-8 lg:border-t-0 lg:pt-0">
            <div>
              <p className="kicker">Docs</p>
              <p className="mt-4 text-[22px] italic text-ink">Coming soon</p>
              <p className="mt-2 text-[16px] text-muted">APIs and MCP setup guides.</p>
            </div>
            <div>
              <p className="kicker">Start</p>
              <Link href="/#waitlist" className="mt-4 inline-block text-[18px] italic text-brass hover:underline">
                Join the register
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
