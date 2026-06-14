"use client";

import { LucideProvider } from "lucide-react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LucideProvider strokeWidth={2} size={24}>
      {children}
    </LucideProvider>
  );
}
