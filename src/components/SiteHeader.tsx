"use client";

import { useCallback, useId, useRef, useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { ButtonPrimary } from "@/components/ButtonPrimary";
import { nav } from "@/lib/site";
import { useFocusTrap } from "@/lib/use-focus-trap";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const drawerId = useId();
  const drawerRef = useRef<HTMLDivElement>(null);
  const close = useCallback(() => setOpen(false), []);
  useFocusTrap(open, drawerRef, close);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-elevated">
      <div className="mx-auto flex h-[var(--nav-height)] w-full max-w-[var(--max-width)] items-center justify-between px-[var(--pad-x)]">
        <BrandLogo />
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="nav-link text-[14px]">
              {item.label}
            </a>
          ))}
          <ButtonPrimary href="/#waitlist">Join waitlist</ButtonPrimary>
        </nav>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--arch-radius-control)] border border-border-input text-ink md:hidden"
          aria-expanded={open}
          aria-controls={drawerId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <MenuIcon open={open} />
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 top-[var(--nav-height)] z-50 md:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-near-black/40"
            aria-label="Close menu"
            onClick={close}
          />
          <div
            id={drawerId}
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Primary"
            className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-elevated px-[var(--pad-x)] py-6 shadow-lg"
          >
            <button
              type="button"
              className="mb-4 self-end text-[14px] font-medium not-italic text-ink"
              onClick={close}
            >
              Close
            </button>
            <nav className="flex flex-col gap-1">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="nav-link rounded-[var(--arch-radius-control)] px-2 py-3 text-[16px]"
                  onClick={close}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-6">
              <ButtonPrimary href="/#waitlist" className="w-full" onClick={close}>
                Join waitlist
              </ButtonPrimary>
            </div>
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
