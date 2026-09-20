import Link from "next/link";
import { site } from "@/lib/site";

type BrandLogoProps = {
  className?: string;
  showName?: boolean;
  inverted?: boolean;
};

export function ArchilasMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1633.867 1759.156"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <polygon
        fill="currentColor"
        points="516.777,531.830 1035.777,121.321 1035.777,563.214 516.777,973.722"
      />
      <polygon
        fill="currentColor"
        points="717.488,798.835 1078.816,798.835 1512.546,1637.835 1151.218,1637.835"
      />
      <polygon
        fill="currentColor"
        points="403.888,1118.835 777.477,1118.835 494.910,1637.835 121.321,1637.835"
      />
    </svg>
  );
}

export function BrandLogo({
  className = "",
  showName = true,
  inverted = false,
}: BrandLogoProps) {
  return (
    <Link
      href="/"
      className={`brand inline-flex items-center gap-2.5 text-[15px] ${inverted ? "text-text-dark" : "text-ink"} ${className}`}
    >
      <ArchilasMark className="brand-mark" />
      {showName ? <span>{site.name}</span> : <span className="sr-only">{site.name}</span>}
    </Link>
  );
}
