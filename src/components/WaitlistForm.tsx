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
        setMessage(data.error || "Something went wrong.");
        return;
      }
      setStatus("done");
      setMessage("You're on the list.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network error.");
    }
  }

  return (
    <form id={id} onSubmit={onSubmit} className="w-full max-w-md">
      <label htmlFor={`${id}-email`} className="sr-only">
        Email
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="min-h-10 flex-1 rounded-full border border-border-strong bg-white/[0.03] px-4 text-[13px] text-ink outline-none placeholder:text-muted focus:border-ink/40"
        />
        <button type="submit" className="btn btn-primary shrink-0" disabled={status === "loading"}>
          {status === "loading" ? "…" : "Join waitlist"}
        </button>
      </div>
      {message ? (
        <p className="mt-3 text-[12px] text-muted" role="status">
          {message}
        </p>
      ) : null}
    </form>
  );
}
