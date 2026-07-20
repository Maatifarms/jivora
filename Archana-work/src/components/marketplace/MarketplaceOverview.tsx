import { Sparkles, Users, ShoppingBag, Globe2, ShieldCheck } from "lucide-react";

interface OverviewProps {
  supplierCount: number;
  productCount: number;
  countryCount: number;
  aiConfidence: number;
  isLoading: boolean;
}

export default function MarketplaceOverview({ supplierCount, productCount, countryCount, aiConfidence, isLoading }: OverviewProps) {
  return (
    <div className="rounded-2xl border border-grey-border bg-grey-light p-4 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
      
      {/* Summary message */}
      <div className="flex items-center gap-2">
        <span className="flex h-2.5 w-2.5 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <span className="text-xs font-bold text-navy leading-none">
          {isLoading ? "Searching database..." : "Search Completed Successfully"}
        </span>
      </div>

      {/* Metrics Row */}
      <div className="flex flex-wrap items-center gap-6 md:gap-8 text-xs text-navy-muted">
        
        {/* Suppliers */}
        <div className="flex items-center gap-2">
          <Users className="h-4.5 w-4.5 text-brand-sky flex-shrink-0" />
          <div>
            <div className="font-extrabold text-navy text-sm">{supplierCount}</div>
            <div className="text-[10px] font-bold">Vetted Suppliers</div>
          </div>
        </div>

        {/* Products */}
        <div className="flex items-center gap-2">
          <ShoppingBag className="h-4.5 w-4.5 text-purple-600 flex-shrink-0" />
          <div>
            <div className="font-extrabold text-navy text-sm">{productCount}</div>
            <div className="text-[10px] font-bold">Matching Products</div>
          </div>
        </div>

        {/* Countries */}
        <div className="flex items-center gap-2">
          <Globe2 className="h-4.5 w-4.5 text-blue-600 flex-shrink-0" />
          <div>
            <div className="font-extrabold text-navy text-sm">{countryCount}</div>
            <div className="text-[10px] font-bold">Origin Countries</div>
          </div>
        </div>

        {/* AI Confidence */}
        <div className="flex items-center gap-2 border-l border-grey-border/50 pl-6">
          <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-sky-light/50 text-brand-sky-dark">
            <Sparkles className="h-4 w-4 text-brand-sky" />
          </div>
          <div>
            <div className="font-extrabold text-navy text-sm">{aiConfidence}%</div>
            <div className="text-[10px] font-bold">AI Match Confidence</div>
          </div>
        </div>

      </div>
    </div>
  );
}
