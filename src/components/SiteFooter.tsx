import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { footerNav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer relative z-10">
      <div className="mx-auto flex w-full max-w-[var(--max-width)] flex-col gap-8 px-[var(--pad-x)] py-12 md:flex-row md:items-end md:justify-between">
        <div className="max-w-sm text-left">
          <BrandLogo />
          <p className="mt-3 text-[14px] leading-relaxed text-body">{site.tagline}</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px] text-body">
          {footerNav.product.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-ink">
              {item.label}
            </Link>
          ))}
          <a href={`mailto:${site.email}`} className="hover:text-ink">
            {site.email}
          </a>
          <Link href="/privacy" className="hover:text-ink">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-ink">
            Terms
          </Link>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[var(--max-width)] flex-wrap items-center justify-between gap-x-4 gap-y-2 px-[var(--pad-x)] py-4">
          <p className="text-[12px] text-muted">
            © {new Date().getFullYear()} {site.name}
          </p>
          <p className="text-[12px] text-muted">MCP support — coming soon.</p>
        </div>
      </div>
    </footer>
  );
}
