import Link from "next/link";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-surface">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-40 md:grid-cols-[1.4fr_1fr] md:px-8 md:py-48">
        <div>
          <p className="font-[family-name:var(--font-fraunces)] text-3xl font-medium text-ink">
            {site.name}
          </p>
          <p className="prose-measure mt-4 text-muted">{site.description}</p>
          <p className="mt-8 text-sm text-muted">
            © {new Date().getFullYear()} {site.name}. Pre-launch.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="text-sm font-medium text-ink">Explore</p>
            <ul className="mt-4 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-muted hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium text-ink">Contact</p>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={`mailto:${site.email}`} className="text-muted hover:text-ink">
                  {site.email}
                </a>
              </li>
              <li>
                <Link href="/#waitlist" className="text-muted hover:text-ink">
                  Waitlist
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
