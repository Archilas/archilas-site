import type { ReactNode } from "react";

export function ProductWindow({
  title,
  children,
  tone = "ink",
}: {
  title: string;
  children: ReactNode;
  tone?: "ink" | "paper";
}) {
  return (
    <div className={`product-window${tone === "paper" ? " is-paper" : ""}`}>
      <div className="product-chrome">
        <p
          className={`font-mono text-[11px] lowercase tracking-[0.08em] ${
            tone === "paper" ? "text-muted" : "text-text-dark/70"
          }`}
        >
          {title}
        </p>
      </div>
      <div className="product-body">{children}</div>
    </div>
  );
}
