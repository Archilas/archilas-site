"use client";

import type { ReactNode } from "react";
import { SmoothScroll } from "@/components/SmoothScroll";
import { WaitlistModal } from "@/components/WaitlistModal";
import { WaitlistProvider } from "@/lib/waitlist-context";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <WaitlistProvider>
      <SmoothScroll />
      {children}
      <WaitlistModal />
    </WaitlistProvider>
  );
}
