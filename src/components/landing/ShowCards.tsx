"use client";

import { useState } from "react";
import { demoHosts } from "@/components/landing/demo-data";
import { cn } from "@/lib/cn";

const asks = [
  {
    id: "block",
    q: "What's blocking launch?",
    a: "Legal hasn’t signed the launch window. Friday ship waits on that.",
    used: ["Decision", "Open loop"],
  },
  {
    id: "notes",
    q: "How do we ship Friday notes?",
    a: "Keep them in the written checklist — not a Slack dump.",
    used: ["Preference"],
  },
] as const;

export function ShowCards() {
  const [askId, setAskId] = useState<(typeof asks)[number]["id"]>("block");
  const ask = asks.find((item) => item.id === askId) ?? asks[0];

  return (
    <section id="product" className="scroll-mt-[var(--scroll-margin)] bg-bg px-[var(--pad-x)] pb-16 pt-4 md:pb-20">
      <div className="mx-auto grid max-w-[var(--max-width)] gap-5 lg:grid-cols-2">
        <article className="show-card">
          <p className="spine-label">Ask</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {asks.map((item) => (
              <button
                key={item.id}
                type="button"
                className={cn("teach-chip", askId === item.id && "is-on")}
                onClick={() => setAskId(item.id)}
              >
                {item.q}
              </button>
            ))}
          </div>
          <div className="ask-mini mt-5">
            <div className="ask-panel">
              <span className="note-chip">Ask</span>
              <p className="ask-q">{ask.q}</p>
            </div>
            <div className="reply-panel">
              <span className="note-chip">Answer</span>
              <p className="reply-a">{ask.a}</p>
              <div className="used-row">
                {ask.used.map((item) => (
                  <span key={item} className="used-chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>

        <article className="show-card">
          <p className="spine-label">Surfaces</p>
          <p className="mt-3 text-[16px] font-medium text-ink">One memory. The tools you already use.</p>
          <ul className="surface-list mt-5">
            {demoHosts.map((host) => (
              <li key={host.name} className="surface-row">
                <span className="avatar" aria-hidden="true">
                  {host.name.slice(0, 1)}
                </span>
                <div>
                  <p className="text-[15px] font-medium text-ink">{host.name}</p>
                  <p className="text-[14px] leading-6 text-body">{host.line}</p>
                </div>
                <span className="note-chip is-mute">{host.name === "Cursor" ? "MCP · intended" : "In development"}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
