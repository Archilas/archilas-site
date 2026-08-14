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
      setMessage("You're on the register.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network error.");
    }
  }

  return (
    <form id={id} onSubmit={onSubmit} className="w-full max-w-lg">
      <label htmlFor={`${id}-email`} className="sr-only">
        Email
      </label>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-stretch">
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="min-h-[38px] flex-1 rounded-[5px] border border-border-strong bg-transparent px-3 font-[family-name:var(--font-commit)] text-[13px] tracking-wide text-ink outline-none placeholder:text-muted focus:border-brass"
        />
        <button type="submit" className="btn btn-primary shrink-0" disabled={status === "loading"}>
          {status === "loading" ? "…" : "Join the register"}
        </button>
      </div>
      {message ? (
        <p className="mono mt-3 text-[11px] tracking-[0.12em] text-muted" role="status">
          {message}
        </p>
      ) : null}
    </form>
  );
}
