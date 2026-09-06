import { cn } from "@/lib/cn";

export function ArchWindow({
  name,
  children,
  className,
  dark = false,
}: {
  name: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div className={cn("arch-window", dark && "is-ink", className)}>
      <div className="arch-chrome">
        <span className="mono uppercase tracking-[0.12em]">{name}</span>
      </div>
      {children}
    </div>
  );
}
