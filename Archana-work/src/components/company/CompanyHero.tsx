"use client";

import { useState } from "react";
import { Sparkles, ShieldCheck, CheckCircle2, Clock, Globe2, MessageSquare, FileText, Bookmark, UserPlus, Heart, ChevronRight } from "lucide-react";
import Link from "next/link";

interface HeroProps {
  companyName: string;
  country: string;
  flag: string;
  trustScore: string;
  yearsInBusiness: number;
  responseRate: string;
  industry: string;
  onChatClick: () => void;
  onRfqClick: () => void;
}

export default function CompanyHero({
  companyName,
  country,
  flag,
  trustScore,
  yearsInBusiness,
  responseRate,
  industry,
  onChatClick,
  onRfqClick
}: HeroProps) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="space-y-6 pt-4">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-1.5 text-xs text-navy-muted font-semibold">
        <Link href="/" className="hover:text-navy transition-colors">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <Link href="/marketplace" className="hover:text-navy transition-colors">Marketplace</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-navy font-bold">{companyName}</span>
      </div>

      {/* Hero Banner Card */}
      <div className="rounded-2xl border border-grey-border bg-white p-6 sm:p-8 space-y-6 card-shadow-premium">
        
        {/* Top Info Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-grey-border/50 pb-6">
          <div className="flex items-start gap-4">
            {/* Logo */}
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-navy text-white text-2xl font-extrabold shadow-md flex-shrink-0">
              {companyName.substring(0, 2).toUpperCase()}
            </div>

            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-extrabold text-navy tracking-tight">{companyName}</h1>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-bold text-emerald-700 border border-emerald-200">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Factory Vetted Exporter</span>
                </span>
              </div>
              <p className="text-xs text-navy-muted font-medium">
                {flag} {country} • Industry: <strong className="text-navy">{industry}</strong>
              </p>
            </div>
          </div>

          {/* Trust Score Box */}
          <div className="flex items-center gap-4 self-start md:self-auto bg-brand-sky-light/30 border border-brand-sky-accent/30 rounded-2xl p-4">
            <div>
              <div className="text-[10px] uppercase font-bold text-brand-sky-dark">Jivora Audit Score</div>
              <div className="text-3xl font-extrabold text-navy">{trustScore} <span className="text-xs font-semibold text-navy-muted">/ 10</span></div>
            </div>
            <div className="h-10 w-px bg-brand-sky-accent/30"></div>
            <div className="text-xs text-navy space-y-0.5">
              <div className="font-extrabold text-emerald-700">✓ 100% Verified Audit</div>
              <div className="text-navy-muted">{yearsInBusiness} Years Exporting</div>
            </div>
          </div>
        </div>

        {/* Credentials Bar */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 bg-grey-light rounded-xl p-3 border border-grey-border/40 text-xs">
          <div>
            <span className="text-[10px] uppercase font-bold text-navy-muted block">Response Speed</span>
            <span className="font-extrabold text-navy">{responseRate}</span>
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold text-navy-muted block">Export License</span>
            <span className="font-extrabold text-emerald-700">Active HMRC Accord</span>
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold text-navy-muted block">Primary Market</span>
            <span className="font-extrabold text-navy">UK & Northern Europe</span>
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold text-navy-muted block">Sample Dispatch</span>
            <span className="font-extrabold text-navy">Within 3 Business Days</span>
          </div>
        </div>

        {/* Quick Actions (Req 1) */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-grey-border/50 pt-4">
          <div className="flex gap-2">
            <button 
              onClick={() => setIsFollowing(!isFollowing)}
              className={`flex items-center gap-1.5 rounded-xl border px-3.5 py-2 text-xs font-bold transition-all ${
                isFollowing 
                  ? "border-brand-sky bg-brand-sky-light/40 text-brand-sky-dark" 
                  : "border-grey-border text-navy hover:bg-grey-medium"
              }`}
            >
              <UserPlus className="h-3.5 w-3.5" />
              <span>{isFollowing ? "Following" : "Follow Company"}</span>
            </button>

            <button 
              onClick={() => setIsSaved(!isSaved)}
              className={`flex items-center gap-1.5 rounded-xl border px-3.5 py-2 text-xs font-bold transition-all ${
                isSaved 
                  ? "border-rose-300 bg-rose-50 text-rose-700" 
                  : "border-grey-border text-navy hover:bg-grey-medium"
              }`}
            >
              <Heart className={`h-3.5 w-3.5 ${isSaved ? "fill-current" : ""}`} />
              <span>{isSaved ? "Saved" : "Save Supplier"}</span>
            </button>
          </div>

          <div className="flex gap-3 w-full sm:w-auto">
            <button 
              onClick={onChatClick}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 rounded-xl border border-grey-border px-4 py-2.5 text-xs font-bold text-navy hover:bg-grey-medium transition-colors"
            >
              <MessageSquare className="h-4 w-4 text-brand-sky" />
              <span>Chat Now</span>
            </button>
            <button 
              onClick={onRfqClick}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 rounded-xl bg-navy px-5 py-2.5 text-xs font-bold text-white hover:bg-navy-light transition-all shadow-sm"
            >
              <FileText className="h-4 w-4" />
              <span>Generate Official RFQ</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
