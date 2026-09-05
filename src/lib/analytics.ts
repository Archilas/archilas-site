export type AnalyticsEventName =
  | "waitlist_submit"
  | "waitlist_success"
  | "waitlist_error"
  | "cta_click";

export type AnalyticsProps = {
  source?: string;
  label?: string;
};

type AnalyticsWindow = Window & {
  plausible?: (name: string, options?: { props?: Record<string, string> }) => void;
  gtag?: (...args: unknown[]) => void;
};

export function track(name: AnalyticsEventName, props: AnalyticsProps = {}) {
  if (typeof window === "undefined") return;

  const detail = { name, ...props };
  window.dispatchEvent(new CustomEvent("archilas:analytics", { detail }));

  const w = window as AnalyticsWindow;
  const flat = Object.fromEntries(
    Object.entries(props).filter((entry): entry is [string, string] => typeof entry[1] === "string"),
  );

  w.plausible?.(name, { props: flat });
  w.gtag?.("event", name, flat);
}
