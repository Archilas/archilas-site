"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { ButtonPrimary } from "@/components/ButtonPrimary";
import { track } from "@/lib/analytics";
import { scrollToHash } from "@/lib/hash-scroll";
import { nav } from "@/lib/site";
import { useFocusTrap } from "@/lib/use-focus-trap";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const drawerId = useId();
  const drawerRef = useRef<HTMLDivElement>(null);
  const close = useCallback(() => setOpen(false), []);
  useFocusTrap(open, drawerRef, close);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="site-header relative sticky top-0 z-40">
      <div className="mx-auto flex h-[var(--nav-height)] w-full max-w-[var(--max-width)] items-center justify-between px-[var(--pad-x)]">
        <BrandLogo />
        <nav aria-label="Primary" className="hidden items-center gap-5 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link text-[14px]"
              onClick={() => scrollToHash(item.href)}
            >
              {item.label}
            </a>
          ))}
          <ButtonPrimary href="/#waitlist" onClick={() => track("cta_click", { source: "nav" })}>
            Join waitlist
          </ButtonPrimary>
        </nav>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--arch-radius-control)] border border-border-input bg-elevated text-ink lg:hidden"
          aria-expanded={open}
          aria-controls={drawerId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <MenuIcon open={open} />
        </button>
      </div>
      {open ? (
        <div
          id={drawerId}
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Primary"
          data-testid="mobile-drawer"
          className="mobile-drawer lg:hidden"
        >
          <nav className="flex flex-col gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link rounded-[var(--arch-radius-control)] px-2 py-3 text-[16px]"
                onClick={() => {
                  scrollToHash(item.href);
                  close();
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <ButtonPrimary
              href="/#waitlist"
              className="w-full"
              onClick={() => {
                track("cta_click", { source: "nav-mobile" });
                close();
              }}
            >
              Join waitlist
            </ButtonPrimary>
            <button
              type="button"
              className="self-start text-[14px] font-medium not-italic text-ink"
              onClick={close}
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      {open ? (
        <path
          d="M4 4 L14 14 M14 4 L4 14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="square"
        />
      ) : (
        <path
          d="M3 5 H15 M3 9 H15 M3 13 H15"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="square"
        />
      )}
    </svg>
  );
}
