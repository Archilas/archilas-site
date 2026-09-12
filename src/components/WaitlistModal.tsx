"use client";

import { useId, useRef } from "react";
import { WaitlistForm } from "@/components/WaitlistForm";
import { useWaitlist } from "@/lib/waitlist-context";
import { useFocusTrap } from "@/lib/use-focus-trap";

export function WaitlistModal() {
  const { open, hide, source } = useWaitlist();
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  useFocusTrap(open, panelRef, hide);

  if (!open) return null;

  return (
    <div className="waitlist-overlay" role="presentation" onClick={hide}>
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="waitlist-dialog"
        data-testid="waitlist-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <h2 id={titleId} className="h2 text-[1.5rem]">
            Join the waitlist.
          </h2>
          <button type="button" className="text-[14px] text-body underline-offset-4 hover:text-ink hover:underline" onClick={hide}>
            Close
          </button>
        </div>
        <div className="mt-6">
          <WaitlistForm id="waitlist-modal-form" source={source} />
        </div>
        <p className="mt-4 text-[13px] text-muted">
          <a href="/privacy" className="text-ink underline-offset-4 hover:underline">
            Privacy
          </a>
          . We email when Archilas opens.
        </p>
      </div>
    </div>
  );
}
