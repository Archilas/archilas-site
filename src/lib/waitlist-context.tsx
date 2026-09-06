"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

export type WaitlistSource = "hero" | "waitlist" | "nav" | "nav-mobile";

type WaitlistContextValue = {
  open: boolean;
  source: WaitlistSource;
  show: (source: WaitlistSource) => void;
  hide: () => void;
};

const WaitlistContext = createContext<WaitlistContextValue | null>(null);

export function WaitlistProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [source, setSource] = useState<WaitlistSource>("hero");

  const show = useCallback((next: WaitlistSource) => {
    setSource(next);
    setOpen(true);
  }, []);

  const hide = useCallback(() => setOpen(false), []);

  const value = useMemo(() => ({ open, source, show, hide }), [open, source, show, hide]);

  return <WaitlistContext.Provider value={value}>{children}</WaitlistContext.Provider>;
}

export function useWaitlist() {
  const ctx = useContext(WaitlistContext);
  if (!ctx) throw new Error("useWaitlist must be used within WaitlistProvider");
  return ctx;
}
