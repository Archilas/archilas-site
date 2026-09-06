"use client";

import { ButtonPrimary } from "@/components/ButtonPrimary";
import { useWaitlist, type WaitlistSource } from "@/lib/waitlist-context";
import { track } from "@/lib/analytics";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

export function WaitlistCTA({
  source,
  align = "center",
  tone = "paper",
}: {
  source: WaitlistSource;
  align?: "center" | "end" | "start";
  tone?: "paper" | "sky";
}) {
  const waitlist = useWaitlist();

  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-3",
        align === "center" && "justify-center",
        align === "end" && "justify-end",
        align === "start" && "justify-start",
      )}
    >
      <ButtonPrimary
        onClick={() => {
          track("cta_click", { source });
          waitlist.show(source);
        }}
      >
        Join waitlist →
      </ButtonPrimary>
      <a
        href={`mailto:${site.email}`}
        className={cn("btn-outline", tone === "sky" && "is-sky")}
      >
        Contact
      </a>
    </div>
  );
}
