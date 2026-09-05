import Link from "next/link";
import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";

const base =
  "inline-flex h-[var(--control-height)] items-center justify-center rounded-[var(--arch-radius-control)] px-5 text-[15px] font-medium not-italic text-elevated no-underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

const tones = {
  accent: "bg-accent-solid hover:bg-ink",
  ink: "bg-near-black hover:bg-ink",
} as const;

type ButtonPrimaryProps = {
  children: ReactNode;
  href?: string;
  tone?: keyof typeof tones;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick">;

export function ButtonPrimary({
  children,
  href,
  tone = "accent",
  className = "",
  type = "button",
  onClick,
  ...rest
}: ButtonPrimaryProps) {
  const cls = `${base} ${tones[tone]} ${className}`;
  if (href) {
    const external = href.startsWith("http") || href.startsWith("mailto:");
    if (external) {
      return (
        <a href={href} className={cls} rel="noopener noreferrer" onClick={onClick}>
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
