"use client";

import { FormEvent, useState } from "react";

export function WaitlistForm({
  id = "waitlist",
  tone = "light",
}: {
  id?: string;
  tone?: "light" | "dark";
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [message, setMessage] = useState("");
  const dark = tone === "dark";

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
    <form id={id} onSubmit={onSubmit} className="w-full">
      <label htmlFor={`${id}-email`} className="sr-only">
        Email
      </label>
      <div className="flex gap-2">
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`min-h-[38px] flex-1 rounded-sm border px-3 text-[13px] outline-none ${
            dark
              ? "border-white/15 bg-transparent text-bg placeholder:text-white/35 focus:border-white/40"
              : "border-border bg-bg text-ink placeholder:text-muted focus:border-ink"
          }`}
        />
        <button
          type="submit"
          className={`btn shrink-0 ${dark ? "bg-bg text-ink hover:opacity-90" : "btn-primary"}`}
          disabled={status === "loading"}
        >
          {status === "loading" ? "…" : "Join waitlist"}
        </button>
      </div>
      {message ? (
        <p className={`mt-2 text-[12px] ${dark ? "text-white/45" : "text-muted"}`} role="status">
          {message}
        </p>
      ) : null}
    </form>
  );
}
