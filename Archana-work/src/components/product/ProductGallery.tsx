"use client";

import { useState } from "react";
import { Sparkles, Heart, Share2, Scale, FileText, MessageSquare, ShieldCheck, CheckCircle2, ChevronRight, Eye, RefreshCw } from "lucide-react";
import Link from "next/link";

interface GalleryProps {
  productName: string;
  category: string;
  originCountry: string;
  flag: string;
  supplierName: string;
  trustScore: string;
  onRfqClick: () => void;
  onChatClick: () => void;
}

export default function ProductGallery({
  productName,
  category,
  originCountry,
  flag,
  supplierName,
  trustScore,
  onRfqClick,
  onChatClick
}: GalleryProps) {
  const [activeImg, setActiveImg] = useState(0);
  const [isSaved, setIsSaved] = useState(false);
  const [isCompared, setIsCompared] = useState(false);

  const images = [
    "Product Overview View",
    "Material & Finish Close-up",
    "Packaging & Outer Box",
    "Factory Quality Control Inspection"
  ];

  return (
    <div className="space-y-6">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-1.5 text-xs text-navy-muted font-semibold">
        <Link href="/" className="hover:text-navy transition-colors">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <Link href="/marketplace" className="hover:text-navy transition-colors">Marketplace</Link>
        <ChevronRight className="h-3 w-3" />
        <Link href="/marketplace/categories" className="hover:text-navy transition-colors">Categories</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-navy font-bold truncate max-w-[200px]">{productName}</span>
      </div>

      {/* Main Hero Grid: Gallery vs Sticky Desktop Action Panel */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
        
        {/* Left Column: Image Gallery & Badges (8 cols) */}
        <div className="lg:col-span-7 space-y-4">
          
          {/* Main Visual Frame */}
          <div className="relative h-80 sm:h-96 w-full rounded-2xl bg-gradient-to-tr from-brand-sky-light/40 to-brand-sky-light/80 border border-brand-sky-accent/20 flex flex-col items-center justify-center p-6 text-center shadow-md overflow-hidden group">
            <span className="text-xl sm:text-2xl font-extrabold text-navy max-w-md">{productName}</span>
            <span className="text-xs font-semibold text-brand-sky-dark mt-2">[{images[activeImg]}]</span>
            
            {/* 360 Degree Preview Badge Placeholder */}
            <button className="absolute top-3 left-3 rounded-full bg-white/80 backdrop-blur-sm px-3 py-1 text-[10px] font-bold text-navy border border-grey-border/60 flex items-center gap-1.5 hover:bg-white shadow-sm">
              <RefreshCw className="h-3 w-3 text-brand-sky animate-spin-slow" />
              <span>360° Interactive Preview</span>
            </button>

            {/* Country Flag Badge */}
            <span className="absolute top-3 right-3 rounded-full bg-white/80 backdrop-blur-sm px-3 py-1 text-xs font-bold text-navy border border-grey-border/60 flex items-center gap-1 shadow-sm">
              <span>{flag}</span>
              <span>{originCountry}</span>
            </span>
          </div>

          {/* Thumbnails row */}
          <div className="grid grid-cols-4 gap-3">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImg(idx)}
                className={`h-16 rounded-xl border p-2 text-[10px] font-bold transition-all flex items-center justify-center text-center ${
                  activeImg === idx 
                    ? "border-brand-sky bg-brand-sky-light/30 text-brand-sky-dark ring-2 ring-brand-sky-light" 
                    : "border-grey-border bg-grey-light text-navy-muted hover:border-grey-border/80 hover:bg-white"
                }`}
              >
                <span>View {idx + 1}</span>
              </button>
            ))}
          </div>

          {/* Product Availability Badges (Req 3) */}
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700 border border-emerald-200">
              <CheckCircle2 className="h-3.5 w-3.5" />
              <span>Ready to Export</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-md bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-700 border border-blue-200">
              <span>Private Label Available</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-md bg-purple-50 px-2.5 py-1 text-xs font-bold text-purple-700 border border-purple-200">
              <span>OEM/ODM Available</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-md bg-amber-50 px-2.5 py-1 text-xs font-bold text-amber-700 border border-amber-200">
              <span>Sample Available</span>
            </span>
          </div>

        </div>

        {/* Right Column: Sticky Desktop Action Panel (5 cols) (Req 7) */}
        <div className="lg:col-span-5 lg:sticky lg:top-20">
          <div className="rounded-2xl border border-grey-border bg-white p-6 space-y-6 card-shadow-premium">
            
            {/* Header info */}
            <div className="space-y-2 border-b border-grey-border/50 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-sky">{category}</span>
              <h1 className="text-xl font-extrabold text-navy">{productName}</h1>
              <div className="flex items-center justify-between text-xs text-navy-muted">
                <span>By <strong className="text-navy">{supplierName}</strong></span>
                <span className="rounded bg-brand-sky-light/80 px-2 py-0.5 font-bold text-brand-sky-dark">
                  Trust: {trustScore}/10
                </span>
              </div>
            </div>

            {/* Quick Price Tier Preview */}
            <div className="space-y-1 bg-grey-light rounded-xl p-3.5 border border-grey-border/50">
              <div className="text-[10px] uppercase font-bold text-navy-muted">Wholesale Price Range</div>
              <div className="text-2xl font-extrabold text-navy">£7.20 - £8.50 <span className="text-xs font-semibold text-navy-muted">/ unit</span></div>
              <p className="text-[11px] text-emerald-600 font-semibold pt-0.5">In Stock • Production Lead Time: 7 - 14 Days</p>
            </div>

            {/* Primary Action Buttons */}
            <div className="space-y-3">
              <button 
                onClick={onRfqClick}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-navy py-3.5 text-sm font-bold text-white hover:bg-navy-light transition-all shadow-md hover:-translate-y-0.5"
              >
                <FileText className="h-4 w-4" />
                <span>Generate Official RFQ</span>
              </button>

              <button 
                onClick={onChatClick}
                className="w-full flex items-center justify-center gap-2 rounded-xl border border-grey-border bg-white py-3.5 text-sm font-bold text-navy hover:bg-grey-medium transition-all shadow-sm"
              >
                <MessageSquare className="h-4 w-4 text-brand-sky" />
                <span>Chat with Supplier</span>
              </button>
            </div>

            {/* Actions Strip: Save, Compare, Share */}
            <div className="flex items-center justify-between border-t border-grey-border/50 pt-4 text-xs font-semibold text-navy">
              <button 
                onClick={() => setIsSaved(!isSaved)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${isSaved ? "text-rose-500 bg-rose-50 font-bold" : "text-navy-muted hover:text-navy hover:bg-grey-medium"}`}
              >
                <Heart className={`h-4 w-4 ${isSaved ? "fill-current" : ""}`} />
                <span>{isSaved ? "Saved" : "Save Product"}</span>
              </button>

              <button 
                onClick={() => setIsCompared(!isCompared)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${isCompared ? "text-brand-sky bg-brand-sky-light/40 font-bold" : "text-navy-muted hover:text-navy hover:bg-grey-medium"}`}
              >
                <Scale className="h-4 w-4" />
                <span>{isCompared ? "In Comparison" : "Compare"}</span>
              </button>

              <button 
                onClick={() => { navigator.clipboard?.writeText(window.location.href); alert("Product link copied to clipboard!"); }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-navy-muted hover:text-navy hover:bg-grey-medium transition-colors"
              >
                <Share2 className="h-4 w-4" />
                <span>Share</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
