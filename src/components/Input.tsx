import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

export function Input({ className = "", ...rest }: InputProps) {
  return (
    <input
      className={`h-[var(--control-height)] w-full rounded-[var(--arch-radius-control)] border border-border-input bg-elevated px-3.5 text-[15px] not-italic text-ink outline-none placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent aria-[invalid=true]:border-ink ${className}`}
      {...rest}
    />
  );
}
