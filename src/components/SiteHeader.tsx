"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname() || "";

  return (
    <header>
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 md:px-8">
        <Link
          href="/"
          className="font-[family-name:var(--font-fraunces)] text-2xl font-medium tracking-tight text-ink"
        >
          {site.name}
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link text-[15px]"
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/#waitlist" className="btn btn-primary text-[15px]">
            Join the waitlist
          </Link>
        </nav>
        <Link href="/#waitlist" className="btn btn-primary text-[15px] md:hidden">
          Waitlist
        </Link>
      </div>
      <nav aria-label="Mobile" className="flex gap-6 overflow-x-auto px-6 pb-4 md:hidden">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="nav-link shrink-0 text-[15px]"
            aria-current={pathname === item.href ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
