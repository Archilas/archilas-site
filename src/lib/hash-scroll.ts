export function scrollToHash(href: string) {
  const hash = href.includes("#") ? href.slice(href.indexOf("#") + 1) : "";
  if (!hash || typeof document === "undefined") return;
  const target = document.getElementById(hash);
  if (!target) return;
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}
