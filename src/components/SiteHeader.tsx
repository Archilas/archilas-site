"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname() || "";

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg">
      <div className="mx-auto flex h-14 w-full max-w-[1120px] items-center justify-between px-5 md:px-8">
        <Link href="/" className="text-[14px] font-medium tracking-tight text-ink">
          {site.name}
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
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
