import type { ReactNode } from "react";

export function ProductWindow({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="product-window">
      <div className="product-chrome">
        <span className="chrome-marks" aria-hidden>
          <i />
          <i />
          <i />
        </span>
        <p className="font-mono text-[12px] text-text-dark/70">{title}</p>
      </div>
      <div className="product-body">{children}</div>
    </div>
  );
}
