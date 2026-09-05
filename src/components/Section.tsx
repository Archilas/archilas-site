import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-[var(--scroll-margin)] px-[var(--pad-x)] py-[var(--pad-y-mobile)] md:py-[var(--pad-y)] ${className}`}
    >
      <div className="mx-auto w-full max-w-[var(--max-width)]">{children}</div>
    </section>
  );
}
