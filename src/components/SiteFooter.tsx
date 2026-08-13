import Link from "next/link";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto grid w-full max-w-5xl gap-12 px-6 py-20 md:grid-cols-[1.4fr_1fr] md:px-8 md:py-24">
        <div>
          <p className="text-[15px] font-medium text-ink">{site.name}</p>
          <p className="prose-measure mt-4 text-[15px] text-muted">{site.description}</p>
          <p className="mt-8 text-sm text-muted">
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="text-sm text-ink">Explore</p>
            <ul className="mt-4 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[15px] text-muted hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm text-ink">Contact</p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="mono text-[14px] text-muted hover:text-ink"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <Link href="/#waitlist" className="text-[15px] text-muted hover:text-ink">
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
