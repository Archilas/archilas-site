import Link from "next/link";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-border pl-7 md:pl-12">
      <div className="mx-auto grid w-full max-w-[1080px] gap-10 px-5 py-12 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div>
          <p className="brand text-[22px] text-ink">{site.name}</p>
          <p className="mt-3 max-w-sm text-[16px] leading-relaxed text-muted">{site.description}</p>
        </div>
        <div>
          <p className="kicker">Index</p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-[16px] text-ink hover:text-brass">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="kicker">Colophon</p>
          <p className="mt-4 text-[16px] text-ink">
            <a href={`mailto:${site.email}`} className="hover:text-brass">
              {site.email}
            </a>
          </p>
          <p className="mono mt-3 text-[11px] tracking-[0.12em] text-muted">MCP · Claude · ChatGPT · Cursor</p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1080px] justify-between px-5 py-4 md:px-8">
          <p className="mono text-[11px] tracking-[0.12em] text-muted">
            © {new Date().getFullYear()} {site.name}
          </p>
          <p className="mono text-[11px] tracking-[0.12em] text-muted">No fabricate</p>
        </div>
      </div>
    </footer>
  );
}
