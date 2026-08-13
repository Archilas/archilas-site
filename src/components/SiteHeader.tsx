"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname() || "";

  return (
    <header className="border-b border-border">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4 md:px-8">
        <Link href="/" className="text-[15px] font-medium tracking-tight text-ink">
          {site.name}
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link text-[14px]"
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/#waitlist" className="btn btn-primary">
            Join the waitlist
          </Link>
        </nav>
        <Link href="/#waitlist" className="btn btn-primary md:hidden">
          Waitlist
        </Link>
      </div>
      <nav aria-label="Mobile" className="flex gap-6 overflow-x-auto border-t border-border px-6 py-3 md:hidden">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="nav-link shrink-0 text-[14px]"
            aria-current={pathname === item.href ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
