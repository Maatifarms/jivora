"use client";

import { Filter, Check, RotateCcw } from "lucide-react";

interface FilterProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  selectedCountry: string;
  setSelectedCountry: (c: string) => void;
  verifiedOnly: boolean;
  setVerifiedOnly: (v: boolean) => void;
  selectedCert: string;
  setSelectedCert: (cert: string) => void;
  onResetFilters: () => void;
}

export default function SmartFilters({
  activeTab,
  setActiveTab,
  selectedCountry,
  setSelectedCountry,
  verifiedOnly,
  setVerifiedOnly,
  selectedCert,
  setSelectedCert,
  onResetFilters
}: FilterProps) {
  const tabs = [
    { id: "all", label: "All Results", count: 42 },
    { id: "products", label: "Products", count: 18 },
    { id: "suppliers", label: "Suppliers", count: 12 },
    { id: "companies", label: "Companies", count: 6 },
    { id: "categories", label: "Categories", count: 4 },
    { id: "insights", label: "Market Insights", count: 2 }
  ];

  const countries = ["All Countries", "Portugal", "Germany", "Denmark", "United Kingdom", "France", "Spain"];
  const certs = ["All Certifications", "GOTS Organic", "ISO 9001", "CE Certified", "FSC Wood", "RoHS"];

  return (
    <div className="space-y-6">
      {/* Horizontal Tabs Controller */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-grey-border/50 scrollbar-none">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                isActive
                  ? "bg-navy text-white shadow-sm"
                  : "bg-grey-light text-navy-muted hover:bg-white border border-grey-border/50"
              }`}
            >
              <span>{tab.label}</span>
              <span className={`rounded-full px-2 py-0.25 text-[10px] ${isActive ? "bg-white/20 text-white" : "bg-grey-medium text-navy font-bold"}`}>
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Sidebar / Top Filter Bar Controls */}
      <div className="rounded-2xl border border-grey-border bg-white p-5 space-y-4 card-shadow-premium text-xs">
        <div className="flex items-center justify-between border-b border-grey-border/40 pb-3">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-brand-sky" />
            <h3 className="font-extrabold text-navy">Smart Sourcing Filters</h3>
          </div>
          <button
            onClick={onResetFilters}
            className="flex items-center gap-1 text-[11px] font-bold text-navy-muted hover:text-navy"
          >
            <RotateCcw className="h-3 w-3" />
            <span>Reset Filters</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          {/* Country Filter */}
          <div className="space-y-1">
            <label className="font-extrabold text-navy block">Manufacturing Country</label>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full rounded-xl border border-grey-border p-2.5 font-bold text-navy text-xs outline-none focus:border-brand-sky bg-grey-light"
            >
              {countries.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Certifications Filter */}
          <div className="space-y-1">
            <label className="font-extrabold text-navy block">Certification Standards</label>
            <select
              value={selectedCert}
              onChange={(e) => setSelectedCert(e.target.value)}
              className="w-full rounded-xl border border-grey-border p-2.5 font-bold text-navy text-xs outline-none focus:border-brand-sky bg-grey-light"
            >
              {certs.map((cert) => (
                <option key={cert} value={cert}>{cert}</option>
              ))}
            </select>
          </div>

          {/* Response Speed */}
          <div className="space-y-1">
            <label className="font-extrabold text-navy block">Response Speed</label>
            <select className="w-full rounded-xl border border-grey-border p-2.5 font-bold text-navy text-xs outline-none focus:border-brand-sky bg-grey-light">
              <option value="all">Any Speed</option>
              <option value="fast">&lt; 30 mins</option>
              <option value="1hr">&lt; 1 hour</option>
            </select>
          </div>

          {/* Verified Exporters Checkbox */}
          <div className="flex items-center pt-4">
            <label className="flex items-center gap-2 cursor-pointer font-extrabold text-navy select-none">
              <input
                type="checkbox"
                checked={verifiedOnly}
                onChange={(e) => setVerifiedOnly(e.target.checked)}
                className="h-4 w-4 rounded border-grey-border text-brand-sky accent-navy"
              />
              <span>100% Factory Vetted Only</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
