import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export type SpeakerKind = "you" | "archilas" | "agent" | "ai";

const SPEAKER_META: Record<SpeakerKind, { label: string; initial: string }> = {
  you: { label: "You", initial: "Y" },
  archilas: { label: "Archilas", initial: "A" },
  agent: { label: "Cursor agent", initial: "C" },
  ai: { label: "AI", initial: "AI" },
};

export function ExampleLabel({ className }: { className?: string }) {
  return <span className={cn("chat-example-label", className)}>Example</span>;
}

export function SourceChip({ children }: { children: ReactNode }) {
  return <span className="chat-source-chip">{children}</span>;
}

export function SpeakerBadge({ kind, name }: { kind: SpeakerKind; name?: string }) {
  const meta = SPEAKER_META[kind];
  return (
    <span className={cn("chat-speaker", `is-${kind}`)}>
      <span className="chat-speaker-icon" aria-hidden="true">
        {meta.initial}
      </span>
      <span className="chat-speaker-name">{name ?? meta.label}</span>
    </span>
  );
}

export function ChatBubble({
  kind,
  name,
  children,
  source,
  className,
}: {
  kind: SpeakerKind;
  name?: string;
  children: ReactNode;
  source?: string;
  className?: string;
}) {
  return (
    <div className={cn("chat-bubble", `is-${kind}`, className)}>
      <SpeakerBadge kind={kind} name={name} />
      <div className="chat-bubble-body">
        <p className="chat-bubble-text">{children}</p>
        {source ? <SourceChip>{source}</SourceChip> : null}
      </div>
    </div>
  );
}

export function ChatWindow({
  title,
  children,
  example = false,
  className,
  tone = "default",
}: {
  title: string;
  children: ReactNode;
  example?: boolean;
  className?: string;
  tone?: "default" | "bad" | "good";
}) {
  return (
    <div className={cn("chat-window", `tone-${tone}`, className)}>
      <div className="chat-window-chrome">
        <span className="chat-window-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="chat-window-title">{title}</span>
        {example ? <ExampleLabel /> : <span className="chat-window-spacer" />}
      </div>
      <div className="chat-window-body">{children}</div>
    </div>
  );
}
