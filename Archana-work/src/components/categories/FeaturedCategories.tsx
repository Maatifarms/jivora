"use client";

import { Sparkles, ArrowRight, Shirt, HardHat, Package, Cpu, Sun, HeartPulse, Recycle, ShoppingCart, ToyBrick, Sprout, Utensils, Armchair, Home } from "lucide-react";

export interface CategoryData {
  id: string;
  name: string;
  iconName: string;
  supplierCount: string;
  productCount: string;
  topCountry: string;
  flag: string;
  growthTrend: string;
  avgMoq: string;
  isEco: boolean;
  ecoBadge?: string;
  description: string;
  leadTime: string;
  certifications: string[];
  businessType: string[];
}

interface FeaturedProps {
  categories: CategoryData[];
  onSelectCategory: (category: CategoryData) => void;
  onAskAiClick: () => void;
}

const getCategoryIcon = (name: string) => {
  switch (name) {
    case "FMCG": return ShoppingCart;
    case "Toys": return ToyBrick;
    case "Agriculture": return Sprout;
    case "Food & Beverages": return Utensils;
    case "Furniture": return Armchair;
    case "Packaging": return Package;
    case "Electronics": return Cpu;
    case "Healthcare": return HeartPulse;
    case "Industrial Equipment": return HardHat;
    case "Home Decor": return Home;
    case "Fashion": return Shirt;
    case "Sustainable Products": return Recycle;
    default: return Package;
  }
};

export default function FeaturedCategories({ categories, onSelectCategory, onAskAiClick }: FeaturedProps) {
  
  if (categories.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-grey-border p-12 text-center space-y-6 bg-grey-light/50">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-sky-light text-brand-sky">
          <Sparkles className="h-6 w-6" />
        </div>
        <div className="space-y-2">
          <h3 className="text-base font-bold text-navy">No matching category found.</h3>
          <p className="text-xs text-navy-muted max-w-xs mx-auto">
            Ask Jivora AI to help you discover the right industry or custom manufacturing match.
          </p>
        </div>
        <button 
          onClick={onAskAiClick}
          className="inline-flex items-center gap-1.5 rounded-xl bg-navy px-4 py-2.5 text-xs font-bold text-white hover:bg-navy-light transition-all shadow-sm"
        >
          <Sparkles className="h-4 w-4" />
          <span>Ask Jivora AI</span>
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-grey-border/50 pb-3">
        <h3 className="text-lg font-extrabold text-navy">Featured Trade Sectors</h3>
        <span className="text-xs font-semibold text-navy-muted">Showing {categories.length} Categories</span>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((cat) => {
          const Icon = getCategoryIcon(cat.name);
          return (
            <div 
              key={cat.id}
              onClick={() => onSelectCategory(cat)}
              className="group relative rounded-2xl border border-grey-border bg-white p-5 space-y-4 hover:border-brand-sky transition-all duration-300 card-shadow-premium hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Header: Icon & Growth Trend */}
                <div className="flex items-center justify-between">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-sky-light/60 text-brand-sky-dark group-hover:bg-brand-sky group-hover:text-white transition-colors">
                    <Icon className="h-5.5 w-5.5" />
                  </div>
                  <span className="rounded-full bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[10px] font-extrabold text-emerald-700">
                    {cat.growthTrend}
                  </span>
                </div>

                {/* Name */}
                <div>
                  <h4 className="text-base font-bold text-navy group-hover:text-brand-sky transition-colors">{cat.name}</h4>
                  <p className="text-[10px] text-navy-muted">Top Country: {cat.flag} {cat.topCountry}</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-2 bg-grey-light rounded-xl p-2.5 border border-grey-border/40 text-[10px]">
                  <div>
                    <span className="text-navy-muted font-semibold block">Suppliers</span>
                    <span className="font-extrabold text-navy">{cat.supplierCount}</span>
                  </div>
                  <div>
                    <span className="text-navy-muted font-semibold block">Avg MOQ</span>
                    <span className="font-extrabold text-navy">{cat.avgMoq}</span>
                  </div>
                </div>

                {/* Eco Badge */}
                {cat.isEco && (
                  <span className="inline-flex items-center gap-1 rounded bg-emerald-50 px-2 py-0.5 text-[9px] font-bold text-emerald-700 border border-emerald-100">
                    🌿 {cat.ecoBadge || "Eco-certified Sector"}
                  </span>
                )}
              </div>

              {/* Card Footer Action */}
              <div className="border-t border-grey-border/50 pt-3 mt-2 flex items-center justify-between text-xs text-navy-muted">
                <span className="text-[10px] font-semibold text-navy-muted">{cat.productCount} Products</span>
                <span className="flex items-center gap-0.5 text-brand-sky font-bold group-hover:translate-x-0.5 transition-transform">
                  <span>Explore</span>
                  <ArrowRight className="h-3 w-3" />
                </span>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}
