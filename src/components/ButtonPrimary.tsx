"use client";

import Link from "next/link";
import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";
import { scrollToHash } from "@/lib/hash-scroll";

const base =
  "inline-flex h-[var(--control-height)] items-center justify-center rounded-[var(--arch-radius-control)] bg-near-black px-5 text-[15px] font-medium not-italic text-elevated no-underline transition-colors hover:bg-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

type ButtonPrimaryProps = {
  children: ReactNode;
  href?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick">;

export function ButtonPrimary({
  children,
  href,
  className = "",
  type = "button",
  onClick,
  ...rest
}: ButtonPrimaryProps) {
  const cls = `${base} ${className}`;
  if (href) {
    const hash = href.includes("#");
    const external = href.startsWith("http") || href.startsWith("mailto:");
    if (external || hash) {
      return (
        <a
          href={href}
          className={cls}
          {...(external ? { rel: "noopener noreferrer" } : {})}
          onClick={(event) => {
            onClick?.(event);
            if (hash) scrollToHash(href);
          }}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={cls} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
