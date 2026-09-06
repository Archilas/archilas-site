import type { MouseEvent } from "react";

export function scrollToHash(href: string, event?: MouseEvent<HTMLElement>) {
  const hash = href.includes("#") ? href.slice(href.indexOf("#") + 1) : "";
  if (!hash || typeof document === "undefined") return;
  const target = document.getElementById(hash);
  if (!target) return;
  event?.preventDefault();
  target.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.pushState(null, "", `/#${hash}`);
}
