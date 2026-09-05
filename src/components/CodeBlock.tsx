"use client";

import { useState } from "react";

export function CodeBlock({
  code,
  label = "Code",
}: {
  code: string;
  label?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(code);
      } else {
        const field = document.createElement("textarea");
        field.value = code;
        field.setAttribute("readonly", "");
        field.style.position = "fixed";
        field.style.left = "-9999px";
        document.body.appendChild(field);
        field.select();
        document.execCommand("copy");
        field.remove();
      }
    } catch {
      // Still show confirmation; clipboard permission can fail in some browsers.
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className="h-fit overflow-hidden rounded-[var(--arch-radius-card)] border border-border bg-bg-dark text-text-dark">
      <div className="flex items-center justify-between gap-3 border-b border-border-dark px-4 py-2">
        <p className="label text-text-dark/70">{label}</p>
        <button
          type="button"
          onClick={copy}
          className="h-8 rounded-[var(--arch-radius-control)] border border-border-dark px-2.5 text-[12px] font-medium not-italic text-text-dark"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="m-0 overflow-x-auto p-4">
        <code className="mono block whitespace-pre text-text-dark">{code}</code>
      </pre>
    </div>
  );
}
