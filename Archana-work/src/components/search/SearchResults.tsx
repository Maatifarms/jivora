"use client";

import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck, FileText, CheckCircle2, Heart } from "lucide-react";

export interface SearchResultItem {
  id: string;
  type: "product" | "supplier" | "company" | "category" | "insight";
  title: string;
  categoryOrSector: string;
  country: string;
  flag: string;
  aiMatch: string;
  description: string;
  priceOrMetric?: string;
  moqOrExperience?: string;
  trustScore?: string;
  reasons: string[];
}

interface ResultsProps {
  results: SearchResultItem[];
  onCompareToggle: (item: SearchResultItem) => void;
  comparedIds: string[];
}

export default function SearchResults({ results, onCompareToggle, comparedIds }: ResultsProps) {
  if (results.length === 0) {
    return (
      <div className="rounded-2xl border border-grey-border bg-white p-12 text-center space-y-4 shadow-sm">
        <Sparkles className="h-10 w-10 text-navy-muted mx-auto" />
        <h3 className="text-lg font-extrabold text-navy">No Direct Matches Found</h3>
        <p className="text-xs text-navy-muted max-w-sm mx-auto">
          Try adjusting your search query or reset smart filters to explore alternative European suppliers.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-grey-border/50 pb-3">
        <h3 className="text-lg font-extrabold text-navy">Search Results ({results.length})</h3>
        <span className="text-xs font-bold text-navy-muted">Sorted by AI Match Score</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((item) => {
          const isCompared = comparedIds.includes(item.id);

          return (
            <div
              key={item.id}
              className="group rounded-2xl border border-grey-border bg-white p-6 space-y-4 hover:border-brand-sky transition-all duration-300 card-shadow-premium hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Header Tag & AI Match */}
                <div className="flex items-center justify-between">
                  <span className="rounded bg-grey-light font-extrabold text-navy px-2 py-0.5 text-[10px] uppercase border border-grey-border/50">
                    {item.type}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-brand-sky-light/80 border border-brand-sky-accent/30 px-2.5 py-0.5 text-[10px] font-extrabold text-brand-sky-dark">
                    <Sparkles className="h-3 w-3" />
                    <span>{item.aiMatch} Match</span>
                  </span>
                </div>

                {/* Title & Origin */}
                <div>
                  <span className="text-[11px] font-semibold text-navy-muted block">
                    {item.flag} {item.country} • {item.categoryOrSector}
                  </span>
                  <h4 className="text-base font-extrabold text-navy group-hover:text-brand-sky transition-colors leading-snug mt-0.5">
                    {item.title}
                  </h4>
                </div>

                {/* Description */}
                <p className="text-xs text-navy-muted leading-relaxed line-clamp-2">
                  {item.description}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-2 text-xs bg-grey-light rounded-xl p-3 border border-grey-border/40 font-semibold text-navy">
                  <div>
                    <span className="text-[10px] text-navy-muted block">Price / Metric</span>
                    <span>{item.priceOrMetric || "Factory Direct"}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-navy-muted block">MOQ / Exp</span>
                    <span>{item.moqOrExperience || "Audit Score 9.9"}</span>
                  </div>
                </div>

                {/* Explainable AI Rationale Chips */}
                <div className="space-y-1 pt-1 border-t border-grey-border/40">
                  <span className="text-[10px] uppercase font-bold text-navy-muted block">Why Recommended:</span>
                  <div className="flex flex-wrap gap-1">
                    {item.reasons.map((r, idx) => (
                      <span key={idx} className="rounded bg-emerald-50 text-emerald-800 font-bold px-2 py-0.5 text-[10px] border border-emerald-100 flex items-center gap-1">
                        <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                        <span>{r}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="border-t border-grey-border/50 pt-4 mt-2 flex items-center justify-between">
                <label className="flex items-center gap-1.5 text-xs font-semibold text-navy cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={isCompared}
                    onChange={() => onCompareToggle(item)}
                    className="h-3.5 w-3.5 rounded border-grey-border text-brand-sky focus:ring-brand-sky-light"
                  />
                  <span>Compare</span>
                </label>

                <div className="flex gap-2">
                  <Link
                    href={item.type === "supplier" || item.type === "company" ? `/company/${item.id}` : `/marketplace/product/${item.id}`}
                    className="flex items-center gap-1 rounded-xl bg-navy px-3.5 py-1.5 text-xs font-bold text-white hover:bg-navy-light transition-all"
                  >
                    <span>View</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}
