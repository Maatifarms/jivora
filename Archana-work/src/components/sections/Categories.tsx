"use client";

import { useState } from "react";
import { Sparkles, Shirt, HardHat, Package, Cpu, Sun, Plug, HeartPulse, Recycle, ArrowRight, LucideIcon } from "lucide-react";

interface CategoryItem {
  icon: LucideIcon;
  name: string;
  suppliers: string;
  items: string;
  badge: string;
  trust: string;
  aiReason?: string;
}

const popularCats = [
  {
    icon: Shirt,
    name: "Sustainable Textiles",
    suppliers: "140+ Vetted Suppliers",
    items: "Organic Cotton, Hemp Fabric, Recycled Polyester",
    badge: "Eco-certified",
    trust: "9.8 Avg Trust"
  },
  {
    icon: HardHat,
    name: "Industrial Components",
    suppliers: "95+ Vetted Suppliers",
    items: "CNC Machining, Fasteners, Castings",
    badge: "ISO 9001",
    trust: "9.7 Avg Trust"
  },
  {
    icon: Package,
    name: "Biodegradable Packaging",
    suppliers: "85+ Vetted Suppliers",
    items: "Cardboard Boxes, Pulp Trays, PLA Films",
    badge: "Carbon Neutral",
    trust: "9.9 Avg Trust"
  },
  {
    icon: Cpu,
    name: "Precision Electronics",
    suppliers: "110+ Vetted Suppliers",
    items: "PCBs, Microcontrollers, Connector Cables",
    badge: "CE Certified",
    trust: "9.6 Avg Trust"
  }
];

const trendingCats = [
  {
    icon: Sun,
    name: "Solar Hardware",
    suppliers: "60+ Vetted Suppliers",
    items: "PV Panels, Inverters, Mounting Systems",
    badge: "High Growth",
    trust: "9.8 Avg Trust"
  },
  {
    icon: Plug,
    name: "EV Charging Infrastructure",
    suppliers: "45+ Vetted Suppliers",
    items: "DC Fast Chargers, EV Plugs, Cable Harnesses",
    badge: "EU Compliant",
    trust: "9.9 Avg Trust"
  },
  {
    icon: Recycle,
    name: "Circular Plastics",
    suppliers: "50+ Vetted Suppliers",
    items: "rPET Pellets, Recycled PP, Bio-polyethylene",
    badge: "Eco-certified",
    trust: "9.8 Avg Trust"
  }
];

const aiRecommendedCats = [
  {
    icon: HeartPulse,
    name: "Bio-Medical Devices",
    suppliers: "75+ Vetted Suppliers",
    items: "Diagnostics, Medical Disposables, PPE",
    badge: "MDR Compliant",
    trust: "9.9 Avg Trust",
    aiReason: "High demand in Germany & France"
  },
  {
    icon: Shirt,
    name: "Recycled Yarn",
    suppliers: "80+ Vetted Suppliers",
    items: "Post-consumer Cotton, Recycled Wool",
    badge: "Eco-verified",
    trust: "9.7 Avg Trust",
    aiReason: "UK Carbon-tax exempt import alternative"
  }
];

export default function Categories() {
  const [activeTab, setActiveTab] = useState("popular");

  const getActiveList = (): CategoryItem[] => {
    if (activeTab === "trending") return trendingCats;
    if (activeTab === "ai") return aiRecommendedCats;
    return popularCats;
  };

  return (
    <section id="categories" className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-sky">PRODUCT DIRECTORY</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              Source by Sector
            </h2>
            <p className="text-sm text-navy-muted max-w-xl">
              Browse premium industrial and product categories optimized for European import regulations and carbon compliance.
            </p>
          </div>

          {/* Modern Tabs Switcher */}
          <div className="flex rounded-xl bg-grey-medium p-1 self-start">
            <button
              onClick={() => setActiveTab("popular")}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all ${activeTab === "popular" ? "bg-white text-navy shadow-sm" : "text-navy-muted hover:text-navy"}`}
            >
              Popular
            </button>
            <button
              onClick={() => setActiveTab("trending")}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all ${activeTab === "trending" ? "bg-white text-navy shadow-sm" : "text-navy-muted hover:text-navy"}`}
            >
              ⚡ Trending
            </button>
            <button
              onClick={() => setActiveTab("ai")}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all flex items-center gap-1.5 ${activeTab === "ai" ? "bg-navy text-white shadow-sm" : "text-navy-muted hover:text-navy"}`}
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>AI Recommended</span>
            </button>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {getActiveList().map((cat, index) => {
            const Icon = cat.icon;
            return (
              <div 
                key={index}
                className="group relative rounded-2xl border border-grey-border bg-grey-light p-6 space-y-4 hover:border-brand-sky hover:bg-white transition-all duration-300 card-shadow-premium hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-sky-light/50 text-brand-sky-dark group-hover:bg-brand-sky group-hover:text-white transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-white border border-grey-border px-2 py-0.5 text-[10px] font-bold text-navy-muted">
                    {cat.badge}
                  </span>
                </div>

                <div className="space-y-1 pt-2">
                  <h3 className="text-base font-bold text-navy group-hover:text-brand-sky transition-colors">{cat.name}</h3>
                  <div className="text-xs font-semibold text-brand-sky-dark">{cat.suppliers}</div>
                </div>

                <p className="text-xs text-navy-muted leading-relaxed line-clamp-2">{cat.items}</p>

                {/* AI Recommendation Reason */}
                {cat.aiReason && (
                  <div className="mt-3 rounded-lg bg-brand-sky-light/30 border border-brand-sky-accent/20 p-2.5 flex items-start gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-brand-sky flex-shrink-0 mt-0.5" />
                    <span className="text-[10px] font-semibold text-brand-sky-dark leading-snug">{cat.aiReason}</span>
                  </div>
                )}

                <div className="border-t border-grey-border/50 pt-3 mt-4 flex items-center justify-between text-xs text-navy-muted">
                  <span className="font-semibold text-navy/70">{cat.trust}</span>
                  <span className="flex items-center gap-0.5 text-brand-sky font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Source</span>
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
