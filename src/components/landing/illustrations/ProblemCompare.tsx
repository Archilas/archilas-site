"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { ChatBubble, ChatWindow } from "@/components/landing/chat/ChatUi";

/** Problem visual: same new chat, without vs with Archilas — left then right reveal. */
export function ProblemCompare({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.3, once: false });
  const reduced = useReducedMotion();
  const show = reduced || inView;

  return (
    <div ref={ref} className={`problem-compare ${className}`} data-testid="problem-compare">
      <motion.div
        initial={false}
        animate={show ? { opacity: 1, x: 0 } : { opacity: 0, x: -28 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <ChatWindow title="Without Archilas" example tone="bad">
          <ChatBubble kind="you">Use the timeout we agreed on.</ChatBubble>
          <ChatBubble kind="ai">
            I don&apos;t have access to earlier conversations. Which timeout?
          </ChatBubble>
        </ChatWindow>
      </motion.div>
      <motion.div
        initial={false}
        animate={show ? { opacity: 1, x: 0 } : { opacity: 0, x: 28 }}
        transition={{ duration: 0.55, delay: show && !reduced ? 0.16 : 0, ease: [0.22, 1, 0.36, 1] }}
      >
        <ChatWindow title="With Archilas" example tone="good">
          <ChatBubble kind="you">Use the timeout we agreed on.</ChatBubble>
          <ChatBubble kind="ai">Using 15 minutes, as agreed on Tuesday.</ChatBubble>
        </ChatWindow>
      </motion.div>
    </div>
  );
}
