import Link from "next/link";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-10 px-5 py-12 md:flex-row md:items-start md:justify-between md:px-8">
        <div className="max-w-sm">
          <p className="text-[14px] font-medium text-ink">{site.name}</p>
          <p className="mt-2 text-[13px] leading-relaxed text-muted">{site.description}</p>
        </div>
        <div className="flex gap-16">
          <div>
            <p className="text-[12px] text-muted">Product</p>
            <ul className="mt-3 space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[13px] text-ink hover:text-muted">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[12px] text-muted">Contact</p>
            <ul className="mt-3 space-y-2">
              <li>
                <a href={`mailto:${site.email}`} className="mono text-[12px] text-ink hover:text-muted">
                  {site.email}
                </a>
              </li>
              <li>
                <Link href="/#waitlist" className="text-[13px] text-ink hover:text-muted">
                  Waitlist
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-[1120px] items-center justify-between px-5 py-4 md:px-8">
          <p className="text-[12px] text-muted">© {new Date().getFullYear()} {site.name}</p>
          <p className="mono text-[11px] text-muted">mcp · memory · agents</p>
        </div>
      </div>
    </footer>
  );
}
