"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { ChatBubble, ChatWindow, ExampleLabel } from "@/components/landing/chat/ChatUi";
import { ChatGptMark, ClaudeMark, CursorMark, McpMark } from "@/components/landing/BrandMarks";

const INTEGRATIONS = [
  { name: "Claude", Mark: ClaudeMark },
  { name: "Cursor", Mark: CursorMark },
  { name: "MCP", Mark: McpMark },
  { name: "ChatGPT", Mark: ChatGptMark },
] as const;

/** Who visual: realistic example chats for teams, individuals, and codebase. */
export function WhoChats({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.2, once: false });
  const reduced = useReducedMotion();
  const show = reduced || inView;

  return (
    <div ref={ref} className={`who-chats ${className}`} data-testid="who-chats">
      <div className="who-chat-grid">
        <motion.div
          initial={false}
          animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.5 }}
        >
          <ChatWindow title="Teams" example>
            <ChatBubble kind="you">Why did the support bot stop offering refunds?</ChatBubble>
            <ChatBubble kind="archilas" source="ops thread">
              The refund policy changed on Sep 12 and the ops agent updated its instructions.
            </ChatBubble>
          </ChatWindow>
        </motion.div>
        <motion.div
          initial={false}
          animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.5, delay: show && !reduced ? 0.1 : 0 }}
        >
          <ChatWindow title="You" example>
            <ChatBubble kind="you">What was that library Claude recommended last month?</ChatBubble>
            <ChatBubble kind="archilas" source="Claude chat, Sep 8">
              Zod, for validating form input.
            </ChatBubble>
          </ChatWindow>
        </motion.div>
        <motion.div
          className="who-chat-code"
          initial={false}
          animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.5, delay: show && !reduced ? 0.18 : 0 }}
        >
          <div className="chat-window tone-default who-code-window">
            <div className="chat-window-chrome">
              <span className="chat-window-dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <span className="chat-window-title">Codebase</span>
              <ExampleLabel />
            </div>
            <div className="chat-window-body">
              <ChatBubble kind="you">Where do we handle session expiry?</ChatBubble>
              <ChatBubble kind="archilas" source="repo">
                src/auth/timeout.ts
              </ChatBubble>
            </div>
          </div>
        </motion.div>
      </div>

      <p className="who-cross-line">
        Built-in AI memory stays inside one app. Archilas remembers across all of them.
      </p>

      <div className="who-integrations" aria-label="Integrations coming soon">
        <p className="who-integrations-label">Coming soon</p>
        <ul className="who-integrations-list">
          {INTEGRATIONS.map(({ name, Mark }) => (
            <li key={name} className="who-integration">
              <Mark className="who-integration-mark" />
              <span className="who-integration-name">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
