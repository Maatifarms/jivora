"use client";

import { ReactNode } from "react";
import { ThemeProvider, QueryProvider, ModalProvider, ToastProvider } from "@/providers";

/**
 * Composite AppProviders component.
 * Integrates all global providers in the strictly defined architectural hierarchy:
 * ThemeProvider -> QueryProvider -> ModalProvider -> ToastProvider -> children
 */
export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <QueryProvider>
        <ModalProvider>
          <ToastProvider>{children}</ToastProvider>
        </ModalProvider>
      </QueryProvider>
    </ThemeProvider>
  );
}
