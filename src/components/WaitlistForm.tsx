"use client";

import { FormEvent, useState } from "react";
import { ButtonPrimary } from "@/components/ButtonPrimary";
import { Input } from "@/components/Input";
import { track } from "@/lib/analytics";
import type { WaitlistSource } from "@/lib/waitlist-context";

type FormStatus = "idle" | "loading" | "success" | "error";

export function WaitlistForm({
  id = "waitlist",
  source = "waitlist",
}: {
  id?: string;
  source?: WaitlistSource;
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

      if (!res.ok || !data.ok) {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Try again.");
        track("waitlist_error", { source });
        return;
      }

      setStatus("success");
      setMessage("You’re on the list. We’ll email when Archilas opens.");
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
        className="w-full max-w-md border border-line bg-surface px-5 py-6 text-left"
        role="status"
        aria-live="polite"
      >
        <p className="text-[16px] font-medium not-italic text-ink">You’re on the list.</p>
        <p className="mt-2 text-[15px] text-body">We’ll email when Archilas opens.</p>
      </div>
    );
  }

  return (
    <form
      id={id}
      onSubmit={onSubmit}
      className="w-full max-w-md"
      aria-busy={status === "loading"}
      method="post"
      action="/api/waitlist"
    >
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
          aria-describedby={status === "error" && message ? `${id}-status` : undefined}
        />
        <ButtonPrimary type="submit" className="shrink-0" disabled={status === "loading"}>
          {status === "loading" ? "Joining…" : "Join waitlist"}
        </ButtonPrimary>
      </div>
      {status === "error" && message ? (
        <p id={`${id}-status`} className="mt-3 text-[13px] text-ink" role="alert">
          {message}
        </p>
      ) : status === "loading" ? (
        <p className="mt-3 text-[13px] text-muted" role="status" aria-live="polite">
          Joining the waitlist…
        </p>
      ) : null}
    </form>
  );
}
