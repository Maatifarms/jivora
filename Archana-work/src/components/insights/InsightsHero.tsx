"use client";

import { useState } from "react";
import { Sparkles, Search, TrendingUp, ChevronRight } from "lucide-react";
import Link from "next/link";

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSearchSubmit: (e: React.FormEvent) => void;
}

export default function InsightsHero({ searchQuery, setSearchQuery, onSearchSubmit }: HeroProps) {
  const trendingTopics = [
    "GOTS Organic Textiles",
    "EU Packaging PPWR Laws",
    "Germany Solar Imports",
    "UK HMRC Accord 2026",
    "Bio-Plastics Demand"
  ];

  return (
    <div className="space-y-6 pt-4">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-1.5 text-xs text-navy-muted font-semibold">
        <Link href="/" className="hover:text-navy transition-colors">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-navy font-bold">Market Insights & Intelligence</span>
      </div>

      {/* Hero Banner */}
      <div className="relative rounded-3xl border border-grey-border bg-gradient-to-br from-white via-brand-sky-light/20 to-grey-light p-6 sm:p-10 space-y-6 card-shadow-premium overflow-hidden">
        {/* Background Decorative Glow */}
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-brand-sky opacity-10 blur-3xl"></div>

        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-sky-accent/30 bg-brand-sky-light/50 px-3.5 py-1 text-xs font-semibold text-brand-sky-dark">
            <Sparkles className="h-3.5 w-3.5 text-brand-sky" />
            <span>AI Trade Intelligence • UK & Europe 2026</span>
          </div>

          <h1 className="text-3xl font-extrabold text-navy sm:text-5xl tracking-tight leading-tight">
            Global Trade Intelligence
          </h1>

          <p className="text-sm sm:text-base text-navy-muted leading-relaxed">
            Discover market opportunities, demand trends, import/export regulations, and AI-powered trade recommendations across the UK and Europe.
          </p>
        </div>

        {/* Search Bar */}
        <form onSubmit={onSearchSubmit} className="flex flex-col sm:flex-row gap-3 max-w-2xl pt-2">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-navy-muted" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search industries, HS codes, UK-EU tariffs, or country reports..."
              className="w-full rounded-xl border border-grey-border bg-white py-3.5 pl-10 pr-4 text-xs font-semibold text-navy outline-none focus:border-brand-sky shadow-sm"
            />
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-xl bg-navy px-6 py-3.5 text-xs font-bold text-white hover:bg-navy-light transition-all shadow-md"
          >
            <Sparkles className="h-4 w-4 text-brand-sky-accent" />
            <span>AI Search</span>
          </button>
        </form>

        {/* Trending Chips */}
        <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
          <span className="text-navy-muted font-bold flex items-center gap-1">
            <TrendingUp className="h-3.5 w-3.5 text-brand-sky" />
            <span>Trending Intelligence:</span>
          </span>
          {trendingTopics.map((topic, idx) => (
            <button
              key={idx}
              onClick={() => setSearchQuery(topic)}
              className="rounded-lg bg-white border border-grey-border/60 px-2.5 py-1 text-[11px] font-bold text-navy hover:border-brand-sky hover:bg-brand-sky-light/30 transition-colors shadow-2xs"
            >
              {topic}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
