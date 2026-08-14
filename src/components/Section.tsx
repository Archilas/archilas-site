import { ReactNode } from "react";

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
    <section id={id} className={`px-5 py-16 md:px-8 md:py-20 ${className}`}>
      <div className="mx-auto w-full max-w-[1080px]">{children}</div>
    </section>
  );
}
