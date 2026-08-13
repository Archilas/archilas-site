import Link from "next/link";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-border">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-10 px-5 py-14 md:flex-row md:justify-between md:px-8">
        <div className="max-w-sm">
          <p className="text-[15px] font-medium text-ink">{site.name}</p>
          <p className="mt-3 text-[13px] leading-relaxed text-muted">{site.description}</p>
        </div>
        <div className="flex gap-16">
          <div>
            <p className="text-[12px] text-muted">Product</p>
            <ul className="mt-3 space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[13px] text-ink/90 hover:text-ink">
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
                <a href={`mailto:${site.email}`} className="mono text-[12px] text-ink/90 hover:text-ink">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1120px] justify-between px-5 py-4 md:px-8">
          <p className="text-[12px] text-muted">© {new Date().getFullYear()} {site.name}</p>
          <p className="mono text-[11px] text-muted">mcp</p>
        </div>
      </div>
    </footer>
  );
}
