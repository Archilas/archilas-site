"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { site } from "@/lib/site";
import { useFocusTrap } from "@/lib/use-focus-trap";
import { cn } from "@/lib/cn";

export function ContactTrigger({
  className,
  label = "Contact",
  expanded = false,
  onOpen,
}: {
  className?: string;
  label?: string;
  expanded?: boolean;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      data-contact-trigger
      className={cn("nav-link contact-popover-trigger", className)}
      aria-expanded={expanded}
      aria-haspopup="dialog"
      onClick={onOpen}
    >
      {label}
    </button>
  );
}

export function ContactDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const email = site.contactEmail;
  const mailto = `mailto:${email}`;

  const close = useCallback(() => {
    setCopied(false);
    onClose();
  }, [onClose]);

  useEffect(() => setMounted(true), []);
  useFocusTrap(open, panelRef, close, { lockScroll: true });

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 1600);
    return () => window.clearTimeout(timer);
  }, [copied]);

  useEffect(() => {
    if (!open) setCopied(false);
  }, [open]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      const input = document.createElement("textarea");
      input.value = email;
      input.setAttribute("readonly", "");
      input.style.position = "fixed";
      input.style.opacity = "0";
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
    }
  }

  if (!open || !mounted) return null;

  return createPortal(
    <div
      className="contact-modal-backdrop"
      data-testid="contact-popover-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="contact-modal-panel"
        data-testid="contact-popover"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="contact-modal-close"
          aria-label="Close"
          onClick={close}
        >
          <CloseIcon />
        </button>
        <p id={titleId} className="contact-popover-title">
          Contact
        </p>
        <p className="contact-popover-email">{email}</p>
        <div className="contact-popover-actions">
          <button type="button" className="btn-outline contact-popover-btn" onClick={copyEmail}>
            {copied ? "Copied" : "Copy"}
          </button>
          <a href={mailto} className="btn-primary contact-popover-btn">
            Send
          </a>
        </div>
      </div>
    </div>,
    document.body,
  );
}

function CloseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
      <path
        d="M3 3 L11 11 M11 3 L3 11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

/** Convenience wrapper when trigger and dialog can share local state. */
export function ContactPopover({
  className,
  triggerClassName,
  triggerLabel = "Contact",
}: {
  className?: string;
  triggerClassName?: string;
  triggerLabel?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("contact-popover", className)}>
      <ContactTrigger
        className={triggerClassName}
        label={triggerLabel}
        expanded={open}
        onOpen={() => setOpen(true)}
      />
      <ContactDialog open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
