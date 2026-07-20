"use client";

import { Sparkles, Search, ChevronRight, Building2, Factory, Globe2, PackageCheck, Truck, Tag } from "lucide-react";
import Link from "next/link";

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedBusinessType: string;
  setSelectedBusinessType: (type: string) => void;
}

const businessTypes = [
  { id: "all", label: "All Types", icon: Building2 },
  { id: "manufacturer", label: "Manufacturer", icon: Factory },
  { id: "supplier", label: "Supplier", icon: PackageCheck },
  { id: "exporter", label: "Exporter", icon: Globe2 },
  { id: "wholesaler", label: "Wholesaler", icon: Truck },
  { id: "distributor", label: "Distributor", icon: Building2 },
  { id: "privatelabel", label: "Private Label", icon: Tag },
];

export default function CategoryHero({ searchQuery, setSearchQuery, selectedBusinessType, setSelectedBusinessType }: HeroProps) {
  return (
    <div className="space-y-8 pt-6 pb-2">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-1.5 text-xs text-navy-muted font-semibold">
        <Link href="/" className="hover:text-navy transition-colors">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <Link href="/marketplace" className="hover:text-navy transition-colors">Marketplace</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-navy">Categories</span>
      </div>

      {/* Hero Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-sky-accent/30 bg-brand-sky-light/40 px-3.5 py-1 text-xs font-semibold text-brand-sky-dark">
          <Sparkles className="h-3.5 w-3.5 text-brand-sky" />
          <span>Industry Directory</span>
        </div>
        <h1 className="font-sans text-3xl font-extrabold tracking-tight text-navy sm:text-5xl leading-tight">
          Explore Global Trade Categories
        </h1>
        <p className="text-sm sm:text-base text-navy-muted max-w-2xl leading-relaxed">
          Discover verified suppliers across industries worldwide. Optimized for UK & European import standards, compliance, and sustainability.
        </p>
      </div>

      {/* AI Category Search Bar */}
      <div className="space-y-3 max-w-3xl">
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            const q = searchQuery || "Biodegradable packaging";
            window.location.href = `/search?q=${encodeURIComponent(q)}`;
          }}
          className="relative flex items-center rounded-2xl border border-grey-border bg-white p-2 shadow-lg focus-within:border-brand-sky focus-within:ring-2 focus-within:ring-brand-sky-light transition-all"
        >
          <Search className="ml-3 h-5 w-5 text-navy-muted" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search categories e.g. 'Biodegradable packaging' or 'Solar hardware'..."
            className="w-full bg-transparent px-3 py-3 text-sm text-navy placeholder-navy-muted outline-none sm:text-base"
          />
          <button 
            type="submit"
            className="flex items-center gap-1.5 rounded-xl bg-brand-sky px-4 py-2.5 text-sm font-bold text-white hover:bg-brand-sky-dark transition-colors shadow-sm"
          >
            <Sparkles className="h-4 w-4" />
            <span>✨ Ask Jivora AI</span>
          </button>
        </form>
      </div>

      {/* Browse by Business Type Bar (Req 1) */}
      <div className="space-y-3 border-t border-grey-border/50 pt-6">
        <div className="flex items-center justify-between">
          <span className="text-xs font-extrabold uppercase tracking-wider text-navy-muted">Browse by Business Type:</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {businessTypes.map((type) => {
            const Icon = type.icon;
            const isSelected = selectedBusinessType === type.id;
            return (
              <button
                key={type.id}
                onClick={() => setSelectedBusinessType(type.id)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all border ${
                  isSelected 
                    ? "bg-navy text-white border-navy shadow-sm" 
                    : "bg-grey-light text-navy/80 border-grey-border/60 hover:bg-white hover:border-brand-sky hover:text-brand-sky"
                }`}
              >
                <Icon className={`h-3.5 w-3.5 ${isSelected ? "text-brand-sky-accent" : "text-navy-muted"}`} />
                <span>{type.label}</span>
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
}
