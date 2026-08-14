"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname() || "";

  return (
    <header className="relative z-40 border-b border-border pl-7 md:pl-12">
      <div className="mx-auto flex w-full max-w-[1080px] items-end justify-between gap-6 px-5 py-5 md:px-8">
        <div>
          <Link href="/" className="brand text-[28px] leading-none text-ink">
            {site.name}
          </Link>
          <p className="kicker mt-2">Vol. 01 · Memory register</p>
        </div>
        <div className="flex items-end gap-6 pb-1">
          <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="mono hidden text-[10px] tracking-[0.14em] text-muted sm:block">Pre-launch</p>
          <Link href="/#waitlist" className="btn btn-primary">
            Join
          </Link>
        </div>
      </div>
      <nav
        aria-label="Mobile"
        className="flex flex-wrap gap-x-5 gap-y-2 border-t border-border px-5 py-3 md:hidden"
      >
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="nav-link"
            aria-current={pathname === item.href ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
