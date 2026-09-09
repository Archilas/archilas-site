import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { footerNav, site } from "@/lib/site";

function FooterLink({
  href,
  label,
  external,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  const className = "text-[14px] not-italic text-body underline-offset-4 hover:text-ink hover:underline";
  if (external || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={className}
        {...(external ? { rel: "noopener noreferrer", target: "_blank" } : {})}
      >
        {label}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { href: string; label: string; external?: boolean }[];
}) {
  if (links.length === 0) return null;
  return (
    <div>
      <p className="label">{title}</p>
      <ul className="mt-3 space-y-2">
        {links.map((item) => (
          <li key={`${item.href}-${item.label}`}>
            <FooterLink href={item.href} label={item.label} external={item.external} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-line bg-bg">
      <div className="mx-auto flex w-full max-w-[var(--max-width)] flex-col gap-12 px-[var(--pad-x)] py-14 md:flex-row md:justify-between">
        <div className="max-w-sm text-left">
          <BrandLogo />
          <p className="mt-3 text-[14px] leading-relaxed text-body">{site.description}</p>
        </div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-8 text-left sm:grid-cols-4">
          <FooterColumn title="Product" links={footerNav.product} />
          <FooterColumn title="Resources" links={footerNav.resources} />
          <FooterColumn title="Company" links={footerNav.company} />
          <FooterColumn title="Legal" links={footerNav.legal} />
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[var(--max-width)] flex-wrap items-center justify-between gap-x-4 gap-y-2 px-[var(--pad-x)] py-4">
          <p className="text-[12px] text-muted">
            © {new Date().getFullYear()} {site.name}
          </p>
          <p className="text-[12px] text-muted">MCP support — coming soon.</p>
          <a href={`mailto:${site.email}`} className="text-[12px] text-muted hover:text-ink">
            {site.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
