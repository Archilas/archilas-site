import { getLenis } from "@/lib/lenis";

export function scrollToHash(href: string) {
  const hash = href.includes("#") ? href.slice(href.indexOf("#") + 1) : "";
  if (!hash || typeof document === "undefined") return;
  const target = document.getElementById(hash);
  if (!target) return;

  const styles = getComputedStyle(document.documentElement);
  const marginRaw = styles.getPropertyValue("--scroll-margin").trim();
  const offset = -(Number.parseFloat(marginRaw) || 96);

  const lenis = getLenis();
  if (lenis) {
    lenis.scrollTo(target, { offset });
    return;
  }

  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const top = target.getBoundingClientRect().top + window.scrollY + offset;
  window.scrollTo({ top, behavior: reduced ? "auto" : "smooth" });
}
