import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`h-fit rounded-[var(--arch-radius-card)] border border-border bg-elevated ${className}`}
    >
      {children}
    </div>
  );
}
