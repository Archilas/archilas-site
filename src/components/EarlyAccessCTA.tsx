"use client";

import { ButtonPrimary } from "@/components/ButtonPrimary";
import { track } from "@/lib/analytics";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

export function EarlyAccessCTA({
  source,
  align = "center",
  secondaryHref = "/#how",
  secondaryLabel = "See how it works",
  primaryLabel = "Get early access →",
}: {
  source: string;
  align?: "center" | "end" | "start";
  secondaryHref?: string;
  secondaryLabel?: string;
  primaryLabel?: string;
}) {
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
        href={site.calUrl}
        onClick={() => track("cta_click", { source, label: "early_access" })}
      >
        {primaryLabel}
      </ButtonPrimary>
      {secondaryHref ? (
        <a href={secondaryHref} className="btn-outline">
          {secondaryLabel}
        </a>
      ) : null}
    </div>
  );
}
