"use client";

import { useState } from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { CategoryData } from "./FeaturedCategories";

interface PopularProps {
  categories: CategoryData[];
  onSelectCategory: (cat: CategoryData) => void;
}

export default function PopularCategories({ categories, onSelectCategory }: PopularProps) {
  const [activeTab, setActiveTab] = useState<"searched" | "trending" | "recent" | "ai">("searched");

  return (
    <div className="space-y-6 pt-4">
      {/* Header & Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-grey-border/50 pb-4">
        <div>
          <h3 className="text-lg font-extrabold text-navy">Popular Sourcing Categories</h3>
          <p className="text-xs text-navy-muted">Browse high-demand industrial categories curated by real-time trade traffic.</p>
        </div>

        {/* Tab switcher */}
        <div className="flex rounded-xl bg-grey-medium p-1 self-start sm:self-auto">
          <button
            onClick={() => setActiveTab("searched")}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${activeTab === "searched" ? "bg-white text-navy shadow-sm" : "text-navy-muted hover:text-navy"}`}
          >
            Most Searched
          </button>
          <button
            onClick={() => setActiveTab("trending")}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${activeTab === "trending" ? "bg-white text-navy shadow-sm" : "text-navy-muted hover:text-navy"}`}
          >
            ⚡ Trending
          </button>
          <button
            onClick={() => setActiveTab("recent")}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${activeTab === "recent" ? "bg-white text-navy shadow-sm" : "text-navy-muted hover:text-navy"}`}
          >
            Recently Added
          </button>
          <button
            onClick={() => setActiveTab("ai")}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all flex items-center gap-1 ${activeTab === "ai" ? "bg-navy text-white shadow-sm" : "text-navy-muted hover:text-navy"}`}
          >
            <Sparkles className="h-3 w-3" />
            <span>AI Choice</span>
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Bar container */}
      <div className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x scrollbar-thin">
        {categories.map((cat) => (
          <div
            key={cat.id}
            onClick={() => onSelectCategory(cat)}
            className="flex-shrink-0 w-64 snap-start rounded-2xl border border-grey-border bg-grey-light p-5 space-y-3 hover:border-brand-sky hover:bg-white transition-all cursor-pointer card-shadow-premium hover:-translate-y-1"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold text-brand-sky-dark">{cat.name}</span>
              <span className="text-base">{cat.flag}</span>
            </div>

            <p className="text-[11px] text-navy-muted leading-relaxed line-clamp-2">{cat.description}</p>

            <div className="flex items-center justify-between text-[10px] text-navy font-bold border-t border-grey-border/40 pt-2">
              <span>{cat.supplierCount} Suppliers</span>
              <span className="text-emerald-600 font-extrabold">{cat.growthTrend}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
