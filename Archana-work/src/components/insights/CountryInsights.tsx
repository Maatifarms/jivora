"use client";

import { useState } from "react";
import { Globe2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CountryInsights() {
  const [activeCountry, setActiveCountry] = useState("🇬🇧 United Kingdom");

  const countries = [
    {
      flag: "🇬🇧",
      name: "United Kingdom",
      topImports: "GOTS Textiles, Bio Packaging, Solar Hardware",
      topExports: "Machinery, Fine Apparel, Financial Services",
      growingIndustry: "Eco Retail & Sustainable Apparel (+28%)",
      aov: "£14,500 / order",
      recommendedCategory: "Sustainable Textiles & Fibers"
    },
    {
      flag: "🇩🇪",
      name: "Germany",
      topImports: "Organic Fibers, Solar Cells, Packaging Paper",
      topExports: "Automotive, Industrial Tools, Renewable Tech",
      growingIndustry: "Clean Tech & Solar Hardware (+34%)",
      aov: "€18,200 / order",
      recommendedCategory: "Renewable Energy & Solar"
    },
    {
      flag: "🇫🇷",
      name: "France",
      topImports: "Linen Fabric, Organic Food, Craft Toys",
      topExports: "Luxury Goods, Wine, Cosmetics",
      growingIndustry: "Organic Home Goods & Toys (+22%)",
      aov: "€12,800 / order",
      recommendedCategory: "Sustainable Textiles"
    },
    {
      flag: "🇳🇱",
      name: "Netherlands",
      topImports: "Raw Cotton, Recycled Plastics, Medical PPE",
      topExports: "Rotterdam Logistics, Agri-Tech, Cut Flowers",
      growingIndustry: "Circular Packaging & Logistics (+31%)",
      aov: "€21,000 / order",
      recommendedCategory: "Biodegradable Packaging"
    },
    {
      flag: "🇮🇹",
      name: "Italy",
      topImports: "Organic Yarn, Solar Glass, Recycled Metals",
      topExports: "Leather Goods, Furniture, Machinery",
      growingIndustry: "Eco-Toy Crafts & Furniture (+25%)",
      aov: "€15,400 / order",
      recommendedCategory: "Wooden Furniture & Crafts"
    },
    {
      flag: "🇪🇸",
      name: "Spain",
      topImports: "Industrial Machinery, Packaging, Bio-Dyes",
      topExports: "Apparel, Olive Oil, Eco Footwear",
      growingIndustry: "Organic Agriculture & Apparel (+20%)",
      aov: "€11,900 / order",
      recommendedCategory: "Agri-Tech & Organics"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-grey-border/50 pb-3">
        <div className="flex items-center gap-2">
          <Globe2 className="h-5 w-5 text-brand-sky" />
          <h3 className="text-xl font-extrabold text-navy">Country-by-Country Trade Intelligence</h3>
        </div>
        <span className="text-xs font-bold text-navy-muted">UK & Top 5 European Hubs</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {countries.map((c, idx) => (
          <div
            key={idx}
            className="group rounded-2xl border border-grey-border bg-white p-6 space-y-4 hover:border-brand-sky transition-all duration-300 card-shadow-premium flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{c.flag}</span>
                  <h4 className="text-lg font-extrabold text-navy group-hover:text-brand-sky transition-colors">{c.name}</h4>
                </div>
                <span className="rounded bg-grey-light font-extrabold text-navy px-2.5 py-1 text-xs border border-grey-border/50">
                  {c.aov}
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-xl bg-grey-light border border-grey-border/40 space-y-0.5">
                  <span className="text-[10px] uppercase font-bold text-navy-muted block">Top Imported Lines</span>
                  <span className="font-extrabold text-navy">{c.topImports}</span>
                </div>

                <div className="p-2.5 rounded-xl bg-grey-light border border-grey-border/40 space-y-0.5">
                  <span className="text-[10px] uppercase font-bold text-navy-muted block">Fastest Growing Industry</span>
                  <span className="font-extrabold text-emerald-700">{c.growingIndustry}</span>
                </div>
              </div>
            </div>

            <div className="border-t border-grey-border/50 pt-3 flex items-center justify-between text-xs">
              <span className="text-navy-muted font-medium">Rec. Category: <strong className="text-navy">{c.recommendedCategory}</strong></span>
              <Link
                href="/marketplace"
                className="text-brand-sky font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform"
              >
                <span>Browse</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
