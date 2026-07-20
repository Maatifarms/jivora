"use client";

import { Sparkles, Mic, Image, Search, ChevronRight } from "lucide-react";

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSearch: (query: string) => void;
}

const exampleChips = [
  "Find FSC-certified furniture suppliers in Italy",
  "Find toy exporters to Germany",
  "Organic honey manufacturers for UK"
];

export default function MarketplaceHeader({ searchQuery, setSearchQuery, onSearch }: HeaderProps) {
  return (
    <div className="space-y-6 pt-6 pb-2">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-1.5 text-xs text-navy-muted font-semibold">
        <a href="/" className="hover:text-navy transition-colors">Home</a>
        <ChevronRight className="h-3 w-3" />
        <span className="text-navy">Marketplace</span>
      </div>

      {/* Header Info */}
      <div className="space-y-2">
        <h1 className="font-sans text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          Global Trade Marketplace
        </h1>
        <p className="text-sm text-navy-muted max-w-2xl leading-relaxed">
          Discover verified manufacturers, organic suppliers, and industrial exporters vetted for UK & European import standards.
        </p>
      </div>

      {/* AI Search Section */}
      <div className="space-y-3 max-w-3xl">
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            const q = searchQuery || "GOTS organic textile mills in Portugal";
            window.location.href = `/search?q=${encodeURIComponent(q)}`;
          }}
          className="relative flex items-center rounded-2xl border border-grey-border bg-white p-2 shadow-lg focus-within:border-brand-sky focus-within:ring-2 focus-within:ring-brand-sky-light transition-all"
        >
          <Search className="ml-3 h-5 w-5 text-navy-muted" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search with AI, e.g., 'GOTS organic textile mills in Portugal'"
            className="w-full bg-transparent px-3 py-3 text-sm text-navy placeholder-navy-muted outline-none sm:text-base"
          />
          
          {/* Right Action Icons (Voice and Image Search placeholders) */}
          <div className="flex items-center gap-2 mr-2">
            <button 
              type="button" 
              title="Voice Search (UI)"
              onClick={() => {
                window.location.href = `/search?q=${encodeURIComponent("GOTS organic textile mills in Portugal")}`;
              }}
              className="p-2 text-navy-muted hover:text-navy hover:bg-grey-medium rounded-lg transition-colors"
            >
              <Mic className="h-4 w-4" />
            </button>
            <button 
              type="button" 
              title="Image Search (UI)"
              onClick={() => {
                window.location.href = `/search?q=${encodeURIComponent("GOTS organic textile mills in Portugal")}`;
              }}
              className="p-2 text-navy-muted hover:text-navy hover:bg-grey-medium rounded-lg transition-colors"
            >
              <Image className="h-4 w-4" />
            </button>
            <button 
              type="submit"
              className="flex items-center gap-1.5 rounded-xl bg-brand-sky px-4 py-2.5 text-sm font-bold text-white hover:bg-brand-sky-dark transition-colors shadow-sm"
            >
              <Sparkles className="h-4 w-4" />
              <span>✨ Ask Jivora AI</span>
            </button>
          </div>
        </form>

        {/* Suggestion Chips */}
        <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
          <span className="text-navy-muted font-bold">Suggested:</span>
          {exampleChips.map((chip, idx) => (
            <button
              key={idx}
              onClick={() => {
                setSearchQuery(chip);
                onSearch(chip);
              }}
              className="rounded-full border border-grey-border bg-grey-light px-3 py-1 text-navy/70 hover:border-brand-sky hover:bg-white hover:text-brand-sky transition-all cursor-pointer"
            >
              {chip}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
