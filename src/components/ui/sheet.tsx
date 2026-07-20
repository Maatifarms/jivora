"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export type SheetSide = "top" | "bottom" | "left" | "right";

interface SheetProps {
  isOpen: boolean;
  onClose: () => void;
  side?: SheetSide;
  children: React.ReactNode;
  className?: string;
}

export function Sheet({ isOpen, onClose, side = "right", children, className }: SheetProps) {
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sideClasses: Record<SheetSide, string> = {
    top: "inset-x-0 top-0 border-b w-full h-80 animate-slide-down",
    bottom: "inset-x-0 bottom-0 border-t w-full h-80 animate-slide-up",
    left: "inset-y-0 left-0 border-r w-80 sm:w-96 h-full animate-slide-down",
    right: "inset-y-0 right-0 border-l w-80 sm:w-96 h-full animate-slide-down",
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-fade-in"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        className={cn(
          "fixed z-50 flex max-w-full bg-background p-6 shadow-xl transition-all",
          sideClasses[side],
          className
        )}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 b2b-focus-ring"
          aria-label="Close drawer"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="w-full flex flex-col">{children}</div>
      </div>
    </div>
  );
}
