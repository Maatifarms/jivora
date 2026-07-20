"use client";

import { X, ShieldCheck, ArrowRight, Award, Clock, Globe2, TrendingUp } from "lucide-react";
import Link from "next/link";
import { CategoryData } from "./FeaturedCategories";

interface PreviewProps {
  category: CategoryData | null;
  onClose: () => void;
}

export default function CategoryPreview({ category, onClose }: PreviewProps) {
  if (!category) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-end justify-center transition-all duration-300">
      
      {/* Category Preview Sheet */}
      <div className="w-full max-w-4xl rounded-t-3xl border-t border-grey-border bg-white p-6 sm:p-8 shadow-2xl space-y-6 max-h-[85vh] overflow-y-auto animate-in fade-in slide-in-from-bottom-6 duration-300">
        
        {/* Header */}
        <div className="flex items-start justify-between border-b border-grey-border/50 pb-4">
          <div className="space-y-1">
            <span className="flex items-center gap-1.5 text-xs font-extrabold text-brand-sky-dark uppercase tracking-wider">
              <span>{category.flag}</span>
              <span>Primary Hub: {category.topCountry}</span>
            </span>
            <h2 className="text-2xl font-extrabold text-navy">{category.name}</h2>
          </div>

          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-grey-medium transition-colors"
          >
            <X className="h-5 w-5 text-navy-muted" />
          </button>
        </div>

        {/* Description */}
        <p className="text-sm text-navy-muted leading-relaxed">{category.description}</p>

        {/* Detailed Metrics Grid (Req 5) */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 bg-grey-light rounded-2xl p-4 border border-grey-border/50 text-xs">
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold text-navy-muted flex items-center gap-1">
              <Globe2 className="h-3.5 w-3.5 text-brand-sky" />
              <span>Export Destinations</span>
            </span>
            <span className="font-extrabold text-navy block">UK, Germany, France, Nordics</span>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold text-navy-muted flex items-center gap-1">
              <TrendingUp className="h-3.5 w-3.5 text-emerald-600" />
              <span>Seasonal Demand</span>
            </span>
            <span className="font-extrabold text-emerald-600 block">Peak: Q3 & Q4 ({category.growthTrend})</span>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold text-navy-muted flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 text-purple-600" />
              <span>Average Lead Time</span>
            </span>
            <span className="font-extrabold text-navy block">{category.leadTime}</span>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold text-navy-muted flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5 text-blue-600" />
              <span>Average MOQ</span>
            </span>
            <span className="font-extrabold text-navy block">{category.avgMoq}</span>
          </div>
        </div>

        {/* Featured Certifications */}
        <div className="space-y-2">
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-navy flex items-center gap-1.5">
            <Award className="h-4 w-4 text-brand-sky" />
            <span>Featured Industry Certifications</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {category.certifications.map((cert, idx) => (
              <span key={idx} className="rounded-lg bg-grey-medium px-3 py-1 text-xs font-bold text-navy border border-grey-border/60">
                {cert}
              </span>
            ))}
          </div>
        </div>

        {/* Top Vetted Suppliers Teaser */}
        <div className="space-y-3 border-t border-grey-border/50 pt-4">
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-navy">Top Verified Manufacturers in this Category</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <Link href="/company/s1" className="rounded-xl border border-grey-border bg-grey-light p-3 flex items-center justify-between hover:border-brand-sky transition-colors group">
              <div>
                <h5 className="font-bold text-navy group-hover:text-brand-sky transition-colors">LoomCraft Textiles Lda</h5>
                <p className="text-[10px] text-navy-muted">Porto, Portugal • GOTS Certified</p>
              </div>
              <span className="rounded bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 text-[10px]">9.9 Trust</span>
            </Link>

            <Link href="/company/s4" className="rounded-xl border border-grey-border bg-grey-light p-3 flex items-center justify-between hover:border-brand-sky transition-colors group">
              <div>
                <h5 className="font-bold text-navy group-hover:text-brand-sky transition-colors">Vilar Tex Factory</h5>
                <p className="text-[10px] text-navy-muted">Lisbon, Portugal • Verified SME</p>
              </div>
              <span className="rounded bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 text-[10px]">9.7 Trust</span>
            </Link>
          </div>
        </div>

        {/* Action Buttons: Navigation flow -> Marketplace */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-grey-border/50 pt-4">
          <span className="text-xs text-navy-muted">Ready to browse products and contact manufacturers?</span>
          <div className="flex gap-3 w-full sm:w-auto">
            <button 
              onClick={onClose}
              className="w-1/2 sm:w-auto rounded-xl border border-grey-border px-4 py-2.5 text-xs font-bold text-navy hover:bg-grey-medium transition-colors"
            >
              Close
            </button>
            <Link 
              href={`/marketplace`}
              className="w-1/2 sm:w-auto flex items-center justify-center gap-1.5 rounded-xl bg-navy px-5 py-2.5 text-xs font-bold text-white hover:bg-navy-light transition-all shadow-md"
            >
              <span>View Suppliers in Marketplace</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
