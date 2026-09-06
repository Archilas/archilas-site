import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

type BrandLogoProps = {
  className?: string;
  showName?: boolean;
  inverted?: boolean;
};

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
      <Image
        src="/archilas-logo.png"
        alt=""
        width={28}
        height={22}
        className={`h-7 w-auto ${inverted ? "brightness-0 invert" : ""}`}
        priority
      />
      {showName ? <span>{site.name}</span> : <span className="sr-only">{site.name}</span>}
    </Link>
  );
}
