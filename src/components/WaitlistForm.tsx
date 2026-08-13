"use client";

import { FormEvent, useState } from "react";

export function WaitlistForm({ id = "waitlist" }: { id?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
        return;
      }
      setStatus("done");
      setMessage("You’re on the list. We’ll be in touch when access opens.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <form id={id} onSubmit={onSubmit} className="w-full max-w-xl">
      <label htmlFor={`${id}-email`} className="sr-only">
        Email address
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="min-h-12 flex-1 rounded bg-bg px-4 text-base text-ink outline-none ring-1 ring-ink/10 placeholder:text-muted focus:ring-2 focus:ring-accent"
        />
        <button
          type="submit"
          className="btn btn-primary shrink-0"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Joining…" : "Join the waitlist"}
        </button>
      </div>
      {message ? (
        <p
          className={`mt-3 text-sm ${status === "error" ? "text-accent" : "text-muted"}`}
          role="status"
        >
          {message}
        </p>
      ) : (
        <p className="mt-3 text-sm text-muted">No spam. Launch updates only.</p>
      )}
    </form>
  );
}
