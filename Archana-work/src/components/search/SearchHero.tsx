"use client";

import { useState } from "react";
import { Search, Sparkles, Mic, Camera, TrendingUp, Clock, ChevronRight, X } from "lucide-react";
import Link from "next/link";

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSearchSubmit: (e: React.FormEvent) => void;
}

export default function SearchHero({ searchQuery, setSearchQuery, onSearchSubmit }: HeroProps) {
  const [isListening, setIsListening] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([
    "Organic Linen Portugal",
    "Bio packaging UK",
    "Solar hardware Germany"
  ]);

  const trendingTopics = [
    "GOTS Textiles",
    "EU PPWR Packaging",
    "CE Certified Toys",
    "HMRC UK Accord",
    "Bio-Plastics"
  ];

  const handleVoiceSearch = () => {
    setIsListening(true);
    setTimeout(() => {
      setSearchQuery("GOTS Organic Linen Portugal");
      setIsListening(false);
    }, 2000);
  };

  const handleImageSearch = () => {
    alert("Image Search initialized: Select a product picture or CAD drawing to match audited European factories.");
  };

  const removeRecent = (item: string) => {
    setRecentSearches(recentSearches.filter((s) => s !== item));
  };

  return (
    <div className="space-y-6 pt-4">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-1.5 text-xs text-navy-muted font-semibold">
        <Link href="/" className="hover:text-navy transition-colors">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <Link href="/marketplace" className="hover:text-navy transition-colors">Marketplace</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-navy font-bold">Global AI Search Engine</span>
      </div>

      {/* Main Search Hero Box */}
      <div className="relative rounded-3xl border border-grey-border bg-gradient-to-br from-white via-brand-sky-light/20 to-grey-light p-6 sm:p-10 space-y-6 card-shadow-premium overflow-hidden text-center sm:text-left">
        {/* Background Decorative Glow */}
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-brand-sky opacity-10 blur-3xl"></div>

        <div className="space-y-2 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-sky-accent/30 bg-brand-sky-light/50 px-3.5 py-1 text-xs font-semibold text-brand-sky-dark">
            <Sparkles className="h-3.5 w-3.5 text-brand-sky" />
            <span>Unified Cross-Platform AI Search</span>
          </div>

          <h1 className="text-3xl font-extrabold text-navy sm:text-5xl tracking-tight leading-tight">
            Search Everything on JIVORA
          </h1>

          <p className="text-sm text-navy-muted leading-relaxed">
            Search across products, verified suppliers, audited factories, sector categories, market reports, and trade documentation from one place.
          </p>
        </div>

        {/* Large Multi-Modal Search Input */}
        <form onSubmit={onSearchSubmit} className="space-y-3 max-w-3xl pt-2">
          <div className="relative flex items-center">
            <Search className="absolute left-4 h-5 w-5 text-navy-muted" />
            
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products, suppliers, companies, certifications, categories..."
              className="w-full rounded-2xl border-2 border-grey-border bg-white py-4 pl-12 pr-32 text-xs sm:text-sm font-semibold text-navy outline-none focus:border-brand-sky shadow-md transition-all"
            />

            {/* Voice & Image Search Controls */}
            <div className="absolute right-3 flex items-center gap-2">
              <button
                type="button"
                onClick={handleVoiceSearch}
                title="Voice Search"
                className={`p-2 rounded-xl transition-all ${
                  isListening ? "bg-rose-500 text-white animate-pulse" : "bg-grey-light text-navy-muted hover:text-navy hover:bg-grey-medium"
                }`}
              >
                <Mic className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={handleImageSearch}
                title="Image Sourcing Search"
                className="p-2 rounded-xl bg-grey-light text-navy-muted hover:text-navy hover:bg-grey-medium transition-all"
              >
                <Camera className="h-4 w-4" />
              </button>

              <button
                type="submit"
                className="flex items-center gap-1.5 rounded-xl bg-navy px-4 py-2.5 text-xs font-bold text-white hover:bg-navy-light transition-all shadow-sm"
              >
                <Sparkles className="h-3.5 w-3.5 text-brand-sky-accent" />
                <span className="hidden sm:inline">Search</span>
              </button>
            </div>
          </div>

          {isListening && (
            <p className="text-xs text-rose-600 font-bold animate-pulse">
              🎙️ Listening... Speak your sourcing requirements now.
            </p>
          )}
        </form>

        {/* Recent & Trending Chips */}
        <div className="space-y-2 pt-2 text-xs">
          {recentSearches.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-navy-muted font-bold flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-navy-muted" />
                <span>Recent Searches:</span>
              </span>
              {recentSearches.map((s, idx) => (
                <span key={idx} className="inline-flex items-center gap-1 rounded-lg bg-white border border-grey-border/60 px-2.5 py-1 text-[11px] font-semibold text-navy">
                  <button onClick={() => setSearchQuery(s)}>{s}</button>
                  <button onClick={() => removeRecent(s)} className="text-navy-muted hover:text-rose-500">
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
            </div>
          )}

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-navy-muted font-bold flex items-center gap-1">
              <TrendingUp className="h-3.5 w-3.5 text-brand-sky" />
              <span>Trending Queries:</span>
            </span>
            {trendingTopics.map((topic, idx) => (
              <button
                key={idx}
                onClick={() => setSearchQuery(topic)}
                className="rounded-lg bg-white border border-grey-border/60 px-2.5 py-1 text-[11px] font-bold text-navy hover:border-brand-sky hover:bg-brand-sky-light/30 transition-colors"
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
