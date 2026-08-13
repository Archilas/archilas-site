"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname() || "";

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/95">
      <div className="mx-auto flex h-12 w-full max-w-[1180px] items-center justify-between px-5 md:px-8">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="text-[15px] font-medium tracking-[-0.03em] text-ink">{site.name}</span>
          <span className="mono hidden text-[10px] text-muted sm:inline">memory</span>
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link text-[13px]"
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/#waitlist" className="btn btn-primary">
            Join waitlist
          </Link>
        </nav>
        <Link href="/#waitlist" className="btn btn-primary md:hidden">
          Waitlist
        </Link>
      </div>
    </header>
  );
}
