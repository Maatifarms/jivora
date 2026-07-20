import { Globe2, ArrowUpRight } from "lucide-react";

const markets = [
  { flag: "🇬🇧", name: "United Kingdom", volume: "High Sourcing Demand", topImport: "Organic Textiles & Packaging" },
  { flag: "🇩🇪", name: "Germany", volume: "Critical Sourcing Demand", topImport: "Bio-medical & Solar Hardware" },
  { flag: "🇫🇷", name: "France", volume: "High Sourcing Demand", topImport: "Eco Toys & Sustainable FMCG" },
  { flag: "🇳🇱", name: "Netherlands", volume: "Logistics Import Hub", topImport: "Circular Plastics & Electronics" },
  { flag: "🇮🇹", name: "Italy", volume: "High Sourcing Demand", topImport: "FSC Furniture & Agro-products" },
];

export default function TrendingMarkets() {
  return (
    <div className="rounded-2xl border border-grey-border bg-white p-6 space-y-4 card-shadow-premium">
      <div className="flex items-center justify-between border-b border-grey-border/50 pb-3">
        <div className="flex items-center gap-2">
          <Globe2 className="h-5 w-5 text-brand-sky" />
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-navy">Trending European Markets</h3>
        </div>
        <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Live Trade Accords</span>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
        {markets.map((m, idx) => (
          <div key={idx} className="rounded-xl border border-grey-border/60 bg-grey-light p-3 space-y-1.5 hover:border-brand-sky transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-xl">{m.flag}</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-brand-sky" />
            </div>
            <h4 className="text-xs font-bold text-navy">{m.name}</h4>
            <p className="text-[9px] text-navy-muted leading-tight">{m.topImport}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
