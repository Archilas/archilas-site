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
      className={`scroll-mt-[var(--scroll-margin)] px-[var(--pad-x)] pt-[calc(var(--nav-height)+var(--pad-y-mobile))] pb-[var(--pad-y-mobile)] md:pt-[calc(var(--nav-height)+var(--pad-y))] md:pb-[var(--pad-y)] ${className}`}
    >
      <div className="mx-auto w-full max-w-[var(--max-width)]">{children}</div>
    </section>
  );
}
