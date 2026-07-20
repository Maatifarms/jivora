"use client";

import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

interface SuggestionsProps {
  query: string;
  onSuggestionClick: (s: string) => void;
}

export default function AISuggestions({ query, onSuggestionClick }: SuggestionsProps) {
  const suggestions = [
    "GOTS Organic Cotton Fabrics Porto",
    "FSC Paper Packaging Suppliers UK",
    "CE Certified Toys Manufacturers Italy"
  ];

  return (
    <div className="rounded-2xl border border-brand-sky-accent/30 bg-brand-sky-light/20 p-5 space-y-4">
      <div className="flex items-center gap-2">
        <Sparkles className="h-4 w-4 text-brand-sky" />
        <h4 className="text-xs font-extrabold text-navy uppercase tracking-wider">AI Search Refinement & Suggestions</h4>
      </div>

      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className="text-navy-muted font-bold">Did you mean:</span>
        {suggestions.map((s, idx) => (
          <button
            key={idx}
            onClick={() => onSuggestionClick(s)}
            className="rounded-lg bg-white border border-grey-border/60 px-2.5 py-1 text-xs font-bold text-navy hover:border-brand-sky hover:bg-white transition-all shadow-2xs"
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
