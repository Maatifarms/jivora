"use client";

import { Sparkles, Heart, FileText, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  supplier: string;
  trustScore: string;
  flag: string;
  country: string;
  price: string;
  moq: string;
  leadTime: string;
  sustainability: string;
  exportReady: boolean;
}

interface GridProps {
  products: ProductItem[];
  isLoading: boolean;
  onCompareToggle: (product: ProductItem) => void;
  compareList: ProductItem[];
  onRfqClick: (product: ProductItem) => void;
  onAskAiClick: () => void;
}

export default function ProductGrid({ products, isLoading, onCompareToggle, compareList, onRfqClick, onAskAiClick }: GridProps) {
  
  // Render Premium Skeleton Cards during load
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="rounded-2xl border border-grey-border bg-grey-light p-6 space-y-4 animate-pulse">
            <div className="h-40 w-full rounded-xl bg-grey-medium"></div>
            <div className="h-4 w-2/3 rounded bg-grey-medium"></div>
            <div className="h-3 w-1/2 rounded bg-grey-medium"></div>
            <div className="space-y-2 border-t border-grey-border/50 pt-4">
              <div className="h-3 w-full rounded bg-grey-medium"></div>
              <div className="h-3 w-3/4 rounded bg-grey-medium"></div>
            </div>
            <div className="flex gap-2 pt-2">
              <div className="h-8 w-1/3 rounded-lg bg-grey-medium"></div>
              <div className="h-8 w-2/3 rounded-lg bg-grey-medium"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Render Empty State
  if (products.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-grey-border p-12 text-center space-y-6 bg-grey-light/50">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-sky-light text-brand-sky">
          <Sparkles className="h-6 w-6" />
        </div>
        <div className="space-y-2">
          <h3 className="text-base font-bold text-navy">No suppliers or products found.</h3>
          <p className="text-xs text-navy-muted max-w-xs mx-auto">
            Try adjusting your sidebar filter choices, or let Jivora AI draft a sourcing matches route.
          </p>
        </div>
        <button 
          onClick={onAskAiClick}
          className="inline-flex items-center gap-1.5 rounded-xl bg-navy px-4 py-2.5 text-xs font-bold text-white hover:bg-navy-light transition-all shadow-sm"
        >
          <Sparkles className="h-4 w-4" />
          <span>Ask AI instead</span>
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p) => {
        const isCompared = compareList.some(item => item.id === p.id);
        return (
          <div 
            key={p.id}
            className="group rounded-2xl border border-grey-border bg-white p-5 space-y-4 hover:border-brand-sky transition-all duration-300 card-shadow-premium hover:-translate-y-1 flex flex-col justify-between"
          >
            <div className="space-y-3">
              {/* Product Category & Country flag */}
              <div className="flex items-center justify-between text-[11px] text-navy-muted">
                <span className="font-semibold">{p.category}</span>
                <span className="flex items-center gap-1">
                  <span>{p.flag}</span>
                  <span>{p.country}</span>
                </span>
              </div>

              {/* Product Visual Box representation */}
              <div className="h-32 w-full rounded-xl bg-gradient-to-tr from-brand-sky-light/30 to-brand-sky-light/80 border border-brand-sky-accent/10 flex items-center justify-center text-center p-3 relative overflow-hidden group-hover:scale-[1.02] transition-transform">
                <span className="font-sans text-xs font-extrabold text-brand-sky-dark select-none leading-snug">{p.name}</span>
                
                {/* Export Ready Tag */}
                {p.exportReady && (
                  <span className="absolute bottom-2 right-2 rounded bg-navy px-2 py-0.5 text-[8px] font-bold text-white tracking-widest uppercase">
                    Export Ready
                  </span>
                )}
              </div>

              {/* Title & Supplier Reference */}
              <div className="space-y-1 pt-1">
                <h3 className="text-sm font-bold text-navy line-clamp-1 group-hover:text-brand-sky transition-colors">{p.name}</h3>
                <div className="flex items-center justify-between text-[10px] text-navy-muted">
                  <span className="font-semibold">Supplier: {p.supplier}</span>
                  <span className="rounded bg-brand-sky-light/50 px-1.5 py-0.25 font-bold text-brand-sky-dark">
                    Trust: {p.trustScore}
                  </span>
                </div>
              </div>

              {/* Specs: MOQ, Price, Lead Time */}
              <div className="space-y-1.5 border-t border-grey-border/50 pt-3 text-[11px] text-navy">
                <div className="flex items-center justify-between">
                  <span className="text-navy-muted">Price Range:</span>
                  <span className="font-bold">{p.price}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-navy-muted">MOQ:</span>
                  <span className="font-bold">{p.moq}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-navy-muted">Lead Time:</span>
                  <span className="font-bold">{p.leadTime}</span>
                </div>
              </div>

              {/* Sustainability Badge */}
              <div className="rounded-lg bg-emerald-50 border border-emerald-100/50 p-2 flex items-center gap-1.5 text-[10px] font-bold text-emerald-800">
                <span className="text-xs">🌿</span>
                <span className="truncate">{p.sustainability}</span>
              </div>
            </div>

            {/* Bottom quick actions */}
            <div className="border-t border-grey-border/50 pt-3 mt-2 flex items-center justify-between">
              
              {/* Left Action: Save & Compare Check */}
              <div className="flex items-center gap-2">
                <button 
                  title="Save Product"
                  className="p-2 text-navy-muted hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-colors"
                >
                  <Heart className="h-4 w-4" />
                </button>
                <label className="flex items-center gap-1.5 text-[11px] font-semibold text-navy cursor-pointer select-none">
                  <input 
                    type="checkbox"
                    checked={isCompared}
                    onChange={() => onCompareToggle(p)}
                    className="rounded border-grey-border text-brand-sky focus:ring-brand-sky-light h-3.5 w-3.5"
                  />
                  <span>Compare</span>
                </label>
              </div>

              {/* Right Action: RFQ */}
              <button 
                onClick={() => onRfqClick(p)}
                className="flex items-center gap-1 rounded-lg bg-navy px-3 py-1.5 text-[11px] font-bold text-white hover:bg-navy-light transition-colors"
              >
                <FileText className="h-3 w-3" />
                <span>Quick RFQ</span>
              </button>

            </div>

          </div>
        );
      })}
    </div>
  );
}
