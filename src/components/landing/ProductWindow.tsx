import type { ReactNode } from "react";

export function ProductWindow({
  title,
  children,
  mini = false,
}: {
  title: string;
  children: ReactNode;
  mini?: boolean;
}) {
  return (
    <div className={`product-window${mini ? " is-mini" : ""}`}>
      <div className="product-chrome">
        <span className="chrome-marks" aria-hidden>
          <i />
          <i />
          <i />
        </span>
        <p className="font-mono text-[12px] text-text-dark/70">{title}</p>
      </div>
      <div className="product-body theme-dark">{children}</div>
    </div>
  );
}
