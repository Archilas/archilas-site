import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const base =
  "inline-flex h-[var(--control-height)] items-center justify-center rounded-[var(--arch-radius-control)] border border-border-input bg-elevated px-5 text-[15px] font-medium not-italic text-ink no-underline transition-colors hover:border-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

type ButtonSecondaryProps = {
  children: ReactNode;
  href?: string;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function ButtonSecondary({
  children,
  href,
  className = "",
  type = "button",
  ...rest
}: ButtonSecondaryProps) {
  const cls = `${base} ${className}`;
  if (href) {
    const external = href.startsWith("http") || href.startsWith("mailto:");
    if (external) {
      return (
        <a href={href} className={cls} rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={cls} {...rest}>
      {children}
    </button>
  );
}
