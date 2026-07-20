"use client";

import { FileText, Download, Sparkles, Clock, Globe2, ArrowRight } from "lucide-react";

export default function FeaturedReports() {
  const reports = [
    {
      id: "r1",
      title: "UK FMCG Wholesale & Import Outlook 2026",
      industry: "FMCG & Retail",
      country: "United Kingdom",
      flag: "🇬🇧",
      updated: "July 2026",
      readTime: "8 min read",
      aiBadge: "98% Demand Match",
      pdf: "UK_FMCG_Outlook_2026.pdf",
      summary: "Analysis of UK retail inventory restocking, HMRC customs accords, and tariff-free food packaging."
    },
    {
      id: "r2",
      title: "EU Packaging PPWR Compliance & Eco-Materials",
      industry: "Packaging & Bio-Plastics",
      country: "European Union",
      flag: "🇪🇺",
      updated: "June 2026",
      readTime: "12 min read",
      aiBadge: "Regulatory Mandate",
      pdf: "EU_PPWR_Packaging_Report.pdf",
      summary: "Complete legal breakdown of single-use plastic restrictions and GOTS/FSC sourcing mandates across 27 EU nations."
    },
    {
      id: "r3",
      title: "Germany Renewable Solar & Industrial Hardware Imports",
      industry: "Clean Energy",
      country: "Germany",
      flag: "🇩🇪",
      updated: "July 2026",
      readTime: "6 min read",
      aiBadge: "High Growth ↑ 34%",
      pdf: "Germany_Solar_Imports_2026.pdf",
      summary: "Import volume spikes in North Rhine-Westphalia and solar grid tariff exemptions for European manufacturers."
    },
    {
      id: "r4",
      title: "France Sustainable Apparel & Organic Fabric Trade",
      industry: "Sustainable Textiles",
      country: "France",
      flag: "🇫🇷",
      updated: "July 2026",
      readTime: "10 min read",
      aiBadge: "GOTS Verified",
      pdf: "France_Textile_Market_2026.pdf",
      summary: "Paris fashion house sourcing trends, organic cotton price benchmarks, and direct Portuguese loom supply."
    }
  ];

  const handleDownload = (pdf: string, title: string) => {
    alert(`Downloading ${title} (${pdf})... Report generated with verified UK-EU trade data.`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-grey-border/50 pb-3">
        <div className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-brand-sky" />
          <h3 className="text-xl font-extrabold text-navy">Featured Executive Trade Reports</h3>
        </div>
        <span className="text-xs font-bold text-navy-muted">Audited B2B Intelligence</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reports.map((r) => (
          <div
            key={r.id}
            className="group rounded-2xl border border-grey-border bg-white p-6 space-y-4 hover:border-brand-sky transition-all duration-300 card-shadow-premium hover:-translate-y-1 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-navy-muted flex items-center gap-1">
                  <span>{r.flag}</span>
                  <span>{r.country}</span>
                  <span>•</span>
                  <span>{r.industry}</span>
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-brand-sky-light/80 border border-brand-sky-accent/20 px-2.5 py-0.5 text-[10px] font-extrabold text-brand-sky-dark">
                  <Sparkles className="h-3 w-3" />
                  <span>{r.aiBadge}</span>
                </span>
              </div>

              <h4 className="text-lg font-extrabold text-navy group-hover:text-brand-sky transition-colors leading-snug">
                {r.title}
              </h4>

              <p className="text-xs text-navy-muted leading-relaxed">
                {r.summary}
              </p>

              <div className="flex items-center gap-4 text-[11px] text-navy-muted font-medium pt-1">
                <span>Updated: <strong className="text-navy">{r.updated}</strong></span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{r.readTime}</span>
                </span>
              </div>
            </div>

            <div className="border-t border-grey-border/50 pt-4 mt-2 flex items-center justify-between">
              <button
                onClick={() => handleDownload(r.pdf, r.title)}
                className="flex items-center gap-1.5 rounded-xl bg-navy px-4 py-2 text-xs font-bold text-white hover:bg-navy-light transition-all shadow-sm"
              >
                <Download className="h-3.5 w-3.5 text-brand-sky" />
                <span>Download Report PDF</span>
              </button>

              <span className="text-xs font-bold text-brand-sky flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer">
                <span>Read Online</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
