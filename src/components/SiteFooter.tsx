import Link from "next/link";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-10 px-5 py-12 md:flex-row md:justify-between md:px-8">
        <div className="max-w-xs">
          <p className="text-[15px] font-medium tracking-tight text-ink">{site.name}</p>
          <p className="mt-2 text-[13px] leading-relaxed text-muted">{site.description}</p>
        </div>
        <div className="flex gap-14">
          <div>
            <p className="mono text-[10px] uppercase tracking-[0.14em] text-muted">Product</p>
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
            <p className="mono text-[10px] uppercase tracking-[0.14em] text-muted">Contact</p>
            <ul className="mt-3 space-y-2">
              <li>
                <a href={`mailto:${site.email}`} className="mono text-[12px] text-ink hover:text-muted">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1180px] justify-between px-5 py-3 md:px-8">
          <p className="text-[11px] text-muted">© {new Date().getFullYear()} {site.name}</p>
          <p className="mono text-[10px] text-muted">mcp</p>
        </div>
      </div>
    </footer>
  );
}
