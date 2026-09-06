"use client";

import { ButtonPrimary } from "@/components/ButtonPrimary";
import { useWaitlist, type WaitlistSource } from "@/lib/waitlist-context";
import { track } from "@/lib/analytics";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

export function WaitlistCTA({
  source,
  align = "center",
}: {
  source: WaitlistSource;
  align?: "center" | "end" | "start";
}) {
  const waitlist = useWaitlist();

  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-x-5 gap-y-2",
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
      <a href={`mailto:${site.email}`} className="text-[15px] text-ink underline-offset-4 hover:underline">
        Contact
      </a>
    </div>
  );
}
