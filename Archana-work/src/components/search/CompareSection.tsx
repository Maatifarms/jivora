"use client";

import { X, Layers, ArrowRight, Check } from "lucide-react";
import { SearchResultItem } from "./SearchResults";

interface CompareProps {
  comparedItems: SearchResultItem[];
  onRemove: (id: string) => void;
  onClear: () => void;
}

export default function CompareSection({ comparedItems, onRemove, onClear }: CompareProps) {
  if (comparedItems.length === 0) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-full max-w-4xl px-4 animate-in slide-in-from-bottom-5 duration-300">
      <div className="rounded-2xl border-2 border-navy bg-navy text-white p-4 space-y-3 shadow-2xl backdrop-blur-md">
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <div className="flex items-center gap-2">
            <Layers className="h-4 w-4 text-brand-sky-accent" />
            <h4 className="text-xs font-extrabold tracking-tight">
              Compare Sourcing Options ({comparedItems.length} / 3)
            </h4>
          </div>
          <button onClick={onClear} className="text-[11px] text-slate-300 hover:text-white underline font-semibold">
            Clear All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          {comparedItems.map((item) => (
            <div key={item.id} className="relative p-2.5 rounded-xl bg-white/10 border border-white/15 space-y-1">
              <button
                onClick={() => onRemove(item.id)}
                className="absolute top-1.5 right-1.5 p-0.5 rounded-full hover:bg-white/20 text-slate-300 hover:text-white"
              >
                <X className="h-3.5 w-3.5" />
              </button>
              <div className="font-bold truncate pr-5 text-white">{item.title}</div>
              <div className="text-[10px] text-slate-300">{item.flag} {item.country} • {item.aiMatch} Match</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
