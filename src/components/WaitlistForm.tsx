"use client";

import { FormEvent, useState } from "react";
import { ButtonPrimary } from "@/components/ButtonPrimary";
import { Input } from "@/components/Input";
import { track } from "@/lib/analytics";

type FormStatus = "idle" | "loading" | "success" | "error";

export function WaitlistForm({
  id = "waitlist",
  source = "waitlist",
}: {
  id?: string;
  source?: "hero" | "waitlist";
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    track("waitlist_submit", { source });

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };

      // Contract: valid email and duplicates both succeed.
      if (!res.ok || !data.ok) {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Try again.");
        track("waitlist_error", { source });
        return;
      }

      setStatus("success");
      setMessage("You are on the list. We will email when access opens.");
      setEmail("");
      track("waitlist_success", { source });
    } catch {
      setStatus("error");
      setMessage("Network error. Try again.");
      track("waitlist_error", { source });
    }
  }

  if (status === "success") {
    return (
      <div
        className="w-full max-w-md rounded-[var(--arch-radius-card)] border border-border bg-elevated px-5 py-6 text-center"
        role="status"
        aria-live="polite"
      >
        <p className="text-[16px] font-medium not-italic text-ink">You are on the list.</p>
        <p className="mt-2 text-[15px] text-body">We will email when early access opens.</p>
      </div>
    );
  }

  return (
    <form id={id} onSubmit={onSubmit} className="w-full max-w-md">
      <label htmlFor={`${id}-email`} className="sr-only">
        Email
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Input
          id={`${id}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1"
          disabled={status === "loading"}
          aria-invalid={status === "error"}
          aria-describedby={message ? `${id}-status` : undefined}
        />
        <ButtonPrimary type="submit" className="shrink-0" disabled={status === "loading"}>
          {status === "loading" ? "Joining" : "Join waitlist"}
        </ButtonPrimary>
      </div>
      {message ? (
        <p id={`${id}-status`} className="mt-3 text-[13px] text-body" role="status" aria-live="polite">
          {message}
        </p>
      ) : null}
    </form>
  );
}
