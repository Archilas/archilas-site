"use client";

import { FormEvent, useState } from "react";
import { ButtonPrimary } from "@/components/ButtonPrimary";
import { Input } from "@/components/Input";
import { track } from "@/lib/analytics";
import { site } from "@/lib/site";
import type { WaitlistSource } from "@/lib/waitlist-context";

type FormStatus = "idle" | "loading" | "success" | "error";
type ErrorKind = "unavailable" | "limited" | "network" | "message";

export function WaitlistForm({
  id = "waitlist",
  source = "waitlist",
}: {
  id?: string;
  source?: WaitlistSource;
}) {
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorKind, setErrorKind] = useState<ErrorKind>("message");
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
        body: JSON.stringify({ email, hp: honeypot }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !data.ok) {
        setStatus("error");
        if (res.status === 503) {
          setErrorKind("unavailable");
        } else if (res.status === 429) {
          setErrorKind("limited");
        } else {
          setErrorKind("message");
          setMessage(data.error || "We couldn’t save that just now. Try again.");
        }
        track("waitlist_error", { source });
        return;
      }

      setStatus("success");
      setMessage("Thanks — we’ll email when Archilas opens.");
      setEmail("");
      setHoneypot("");
      track("waitlist_success", { source });
    } catch {
      setStatus("error");
      setErrorKind("network");
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
        <p className="text-[16px] font-medium not-italic text-ink">Thanks — we’ll email when Archilas opens.</p>
      </div>
    );
  }

  return (
    <form
      id={id}
      onSubmit={onSubmit}
      className="relative w-full max-w-md"
      aria-busy={status === "loading"}
      method="post"
      action="/api/waitlist"
    >
      <div className="waitlist-honeypot" aria-hidden="true">
        <label htmlFor={`${id}-hp`}>Leave this empty</label>
        <input
          id={`${id}-hp`}
          name="hp"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>
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
          aria-describedby={status === "error" ? `${id}-status` : undefined}
        />
        <ButtonPrimary type="submit" className="shrink-0" disabled={status === "loading"}>
          {status === "loading" ? "Joining…" : "Join waitlist"}
        </ButtonPrimary>
      </div>
      {status === "error" ? (
        <p id={`${id}-status`} className="mt-3 text-[13px] text-ink" role="alert">
          {errorKind === "unavailable" ? (
            <>
              The waitlist isn’t taking signups right now. Email{" "}
              <a
                href={`mailto:${site.contactEmail}`}
                className="font-medium underline underline-offset-4"
              >
                {site.contactEmail}
              </a>{" "}
              and we’ll add you.
            </>
          ) : errorKind === "limited" ? (
            <>
              Too many attempts from here. Wait a few minutes, or email{" "}
              <a
                href={`mailto:${site.contactEmail}`}
                className="font-medium underline underline-offset-4"
              >
                {site.contactEmail}
              </a>
              .
            </>
          ) : errorKind === "network" ? (
            <>
              Couldn’t reach the waitlist. Try again, or email{" "}
              <a
                href={`mailto:${site.contactEmail}`}
                className="font-medium underline underline-offset-4"
              >
                {site.contactEmail}
              </a>
              .
            </>
          ) : (
            message
          )}
        </p>
      ) : status === "loading" ? (
        <p className="mt-3 text-[13px] text-muted" role="status" aria-live="polite">
          Joining the waitlist…
        </p>
      ) : null}
    </form>
  );
}
