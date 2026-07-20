import { BarChart3, TrendingUp, AlertCircle, ArrowUpRight } from "lucide-react";

export default function MarketInsights() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {/* 1. Growing Categories */}
      <div className="rounded-2xl border border-grey-border bg-white p-6 space-y-4 card-shadow-premium">
        <div className="flex items-center justify-between border-b border-grey-border/50 pb-3">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-emerald-600" />
            <h3 className="text-sm font-extrabold text-navy">Growing Categories</h3>
          </div>
          <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">EU Top</span>
        </div>
        <ul className="space-y-3 text-xs text-navy">
          <li className="flex justify-between items-center">
            <span>Bio-degradable Packaging</span>
            <span className="font-bold text-emerald-600">+34%</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Solar Hardware Components</span>
            <span className="font-bold text-emerald-600">+28%</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Recycled Apparel Yarn</span>
            <span className="font-bold text-emerald-600">+21%</span>
          </li>
        </ul>
      </div>

      {/* 2. UK & European Demand */}
      <div className="rounded-2xl border border-grey-border bg-white p-6 space-y-4 card-shadow-premium">
        <div className="flex items-center justify-between border-b border-grey-border/50 pb-3">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-brand-sky" />
            <h3 className="text-sm font-extrabold text-navy">UK & EU Demand Index</h3>
          </div>
          <span className="text-[9px] font-bold text-brand-sky-dark bg-brand-sky-light/50 px-2 py-0.5 rounded">HMRC Verified</span>
        </div>
        <ul className="space-y-3 text-xs text-navy">
          <li className="flex justify-between items-center">
            <span>🇬🇧 UK Textile Imports</span>
            <span className="font-bold text-navy">High Volume</span>
          </li>
          <li className="flex justify-between items-center">
            <span>🇩🇪 Germany Solar Panels</span>
            <span className="font-bold text-navy">Critical Demand</span>
          </li>
          <li className="flex justify-between items-center">
            <span>🇫🇷 France Bio-Toys</span>
            <span className="font-bold text-navy">Rising Sourcing</span>
          </li>
        </ul>
      </div>

      {/* 3. Import & Export Opportunities */}
      <div className="rounded-2xl border border-grey-border bg-white p-6 space-y-4 card-shadow-premium">
        <div className="flex items-center justify-between border-b border-grey-border/50 pb-3">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-purple-600" />
            <h3 className="text-sm font-extrabold text-navy">Trade Opportunities</h3>
          </div>
          <span className="text-[9px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">Tariff Exemption</span>
        </div>
        <p className="text-xs text-navy-muted leading-relaxed">
          Zero-tariff trade opportunities exist under the UK-EU Accord for GOTS-certified textiles and FSC-certified wood products.
        </p>
        <a href="/marketplace" className="text-xs font-bold text-brand-sky-dark hover:underline inline-flex items-center gap-1">
          <span>Explore Tariff Opportunities</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}
