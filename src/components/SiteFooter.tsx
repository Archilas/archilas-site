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
  const className = "text-[14px] not-italic text-text-dark hover:text-accent-dark";
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
    <footer className="theme-dark relative z-10 border-t border-border-dark">
      <div className="mx-auto flex w-full max-w-[var(--max-width)] flex-col gap-12 px-[var(--pad-x)] py-14 md:flex-row md:justify-between">
        <div className="max-w-sm">
          <BrandLogo inverted />
          <p className="mt-3 text-[14px] leading-relaxed text-text-dark/80">{site.description}</p>
        </div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-4">
          <FooterColumn title="Product" links={footerNav.product} />
          <FooterColumn title="Resources" links={footerNav.resources} />
          <FooterColumn title="Company" links={footerNav.company} />
          <FooterColumn title="Legal" links={footerNav.legal} />
        </div>
      </div>
      <div className="border-t border-border-dark">
        <div className="mx-auto flex max-w-[var(--max-width)] justify-between gap-4 px-[var(--pad-x)] py-4">
          <p className="text-[12px] text-text-dark/70">
            © {new Date().getFullYear()} {site.name}
          </p>
          <a href={`mailto:${site.email}`} className="text-[12px] text-text-dark/70 hover:text-accent-dark">
            {site.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
