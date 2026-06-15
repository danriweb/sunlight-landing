"use client";

import { LucideProvider } from "lucide-react";

import QueryProvider from "./QueryProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryProvider>
      <LucideProvider strokeWidth={2} size={24}>
        {children}
      </LucideProvider>
    </QueryProvider>
  );
}
