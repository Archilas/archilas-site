"use client";

import { FormEvent, type ReactNode, useState } from "react";
import { ButtonPrimary } from "@/components/ButtonPrimary";
import { Input } from "@/components/Input";

export function WaitlistForm({
  id = "waitlist",
  children,
  className = "max-w-md",
}: {
  id?: string;
  children?: ReactNode;
  className?: string;
}) {
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
    <form id={id} onSubmit={onSubmit} className={`w-full ${className}`}>
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
        />
        <ButtonPrimary type="submit" className="shrink-0" disabled={status === "loading"}>
          {status === "loading" ? "Joining" : "Join waitlist"}
        </ButtonPrimary>
      </div>
      {message ? (
        <p className="mt-3 text-[13px] text-muted" role="status">
          {message}
        </p>
      ) : null}
      {children}
    </form>
  );
}
