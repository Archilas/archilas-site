"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { WaitlistCTA } from "@/components/WaitlistCTA";
import { scrollToHash } from "@/lib/hash-scroll";
import { nav, site } from "@/lib/site";
import { useFocusTrap } from "@/lib/use-focus-trap";
import { useWaitlist } from "@/lib/waitlist-context";
import { track } from "@/lib/analytics";
import { ButtonPrimary } from "@/components/ButtonPrimary";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const drawerId = useId();
  const drawerRef = useRef<HTMLDivElement>(null);
  const close = useCallback(() => setOpen(false), []);
  const waitlist = useWaitlist();
  useFocusTrap(open, drawerRef, close);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${solid ? " is-solid" : ""}`}>
      <div className="nav-shell">
        <div className="nav-pill">
          <BrandLogo />
          <nav aria-label="Primary" className="hidden items-center justify-center gap-7 lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link"
                onClick={() => scrollToHash(item.href)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="nav-cta hidden lg:flex">
            <WaitlistCTA source="nav" align="end" />
          </div>
          <button
            type="button"
            className="header-menu inline-flex h-10 w-10 items-center justify-center justify-self-end lg:hidden"
            aria-expanded={open}
            aria-controls={drawerId}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <MenuIcon open={open} />
          </button>
        </div>
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
                className="nav-link px-1 py-3 text-[16px]"
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
              className="w-full"
              onClick={() => {
                track("cta_click", { source: "nav-mobile" });
                waitlist.show("nav-mobile");
                close();
              }}
            >
              Join waitlist →
            </ButtonPrimary>
            <a href={`mailto:${site.email}`} className="btn-outline w-full">
              Contact
            </a>
            <button type="button" className="self-start text-[14px] font-medium not-italic text-ink" onClick={close}>
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
