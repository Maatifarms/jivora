"use client";

import { Search, Sparkles, HelpCircle, ChevronRight } from "lucide-react";
import Link from "next/link";

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSearchSubmit: (e: React.FormEvent) => void;
  onAiAssistantClick: () => void;
}

export default function HelpHero({ searchQuery, setSearchQuery, onSearchSubmit, onAiAssistantClick }: HeroProps) {
  const popularChips = [
    "How to create an RFQ",
    "Find verified suppliers",
    "Import into the UK",
    "Export documentation",
    "Shipping terms",
    "Payment methods"
  ];

  return (
    <div className="space-y-6 pt-4">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-1.5 text-xs text-navy-muted font-semibold">
        <Link href="/" className="hover:text-navy transition-colors">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-navy font-bold">Help Center & Support</span>
      </div>

      {/* Hero Banner */}
      <div className="relative rounded-3xl border border-grey-border bg-gradient-to-br from-white via-brand-sky-light/20 to-grey-light p-6 sm:p-10 space-y-6 card-shadow-premium overflow-hidden text-center sm:text-left">
        {/* Decorative Glow */}
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-brand-sky opacity-10 blur-3xl"></div>

        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-sky-accent/30 bg-brand-sky-light/50 px-3.5 py-1 text-xs font-semibold text-brand-sky-dark">
            <HelpCircle className="h-3.5 w-3.5 text-brand-sky" />
            <span>24/7 AI Sourcing Assistance & Knowledge Base</span>
          </div>

          <h1 className="text-3xl font-extrabold text-navy sm:text-5xl tracking-tight leading-tight">
            How can we help you today?
          </h1>

          <p className="text-sm sm:text-base text-navy-muted leading-relaxed">
            Find answers, explore trade guides, and get AI-powered assistance for buying, selling, exporting, and sourcing across the UK and Europe.
          </p>
        </div>

        {/* Search Bar & AI Button */}
        <form onSubmit={onSearchSubmit} className="flex flex-col sm:flex-row gap-3 max-w-2xl pt-2">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-navy-muted" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search help articles, RFQ guides, UK customs, Incoterms..."
              className="w-full rounded-xl border border-grey-border bg-white py-3.5 pl-10 pr-4 text-xs font-semibold text-navy outline-none focus:border-brand-sky shadow-sm"
            />
          </div>

          <button
            type="button"
            onClick={onAiAssistantClick}
            className="flex items-center justify-center gap-2 rounded-xl bg-brand-sky px-6 py-3.5 text-xs font-bold text-white hover:bg-brand-sky-dark transition-all shadow-md"
          >
            <Sparkles className="h-4 w-4" />
            <span>Ask AI Assistant</span>
          </button>
        </form>

        {/* Popular Suggestions */}
        <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs">
          <span className="text-navy-muted font-bold">Popular Searches:</span>
          {popularChips.map((chip, idx) => (
            <button
              key={idx}
              onClick={() => setSearchQuery(chip)}
              className="rounded-lg bg-white border border-grey-border/60 px-2.5 py-1 text-[11px] font-bold text-navy hover:border-brand-sky hover:bg-brand-sky-light/30 transition-colors shadow-2xs"
            >
              {chip}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
