import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

type BrandLogoProps = {
  className?: string;
  showName?: boolean;
};

export function BrandLogo({ className = "", showName = true }: BrandLogoProps) {
  return (
    <Link href="/" className={`brand inline-flex items-center gap-2.5 text-[15px] text-ink ${className}`}>
      <Image
        src="/archilas-logo.png"
        alt=""
        width={188}
        height={149}
        className="h-7 w-auto"
        priority
      />
      {showName ? <span>{site.name}</span> : <span className="sr-only">{site.name}</span>}
    </Link>
  );
}
