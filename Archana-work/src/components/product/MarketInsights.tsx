import { BarChart3, TrendingUp, Globe2, Calendar } from "lucide-react";

export default function MarketInsights() {
  return (
    <div className="rounded-2xl border border-grey-border bg-white p-6 sm:p-8 space-y-6 card-shadow-premium">
      <div className="flex items-center justify-between border-b border-grey-border/50 pb-4">
        <div className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-emerald-600" />
          <h3 className="text-lg font-extrabold text-navy">Market Intelligence & Trade Trends</h3>
        </div>
        <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">EU Tariff Index</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
        {/* 1. Average Price */}
        <div className="rounded-xl bg-grey-light p-4 space-y-1 border border-grey-border/40">
          <span className="text-[10px] uppercase font-bold text-navy-muted">Avg Market Price</span>
          <div className="text-lg font-extrabold text-navy">£7.50 - £9.20</div>
          <p className="text-[10px] text-emerald-600 font-semibold">Competitive (+4% below average)</p>
        </div>

        {/* 2. Demand Trend */}
        <div className="rounded-xl bg-grey-light p-4 space-y-1 border border-grey-border/40">
          <span className="text-[10px] uppercase font-bold text-navy-muted flex items-center gap-1">
            <TrendingUp className="h-3.5 w-3.5 text-emerald-600" />
            <span>Demand Growth</span>
          </span>
          <div className="text-lg font-extrabold text-emerald-600">↑ +24% YoY</div>
          <p className="text-[10px] text-navy-muted">High Q3/Q4 import volume</p>
        </div>

        {/* 3. Top Buyer Destinations */}
        <div className="rounded-xl bg-grey-light p-4 space-y-1 border border-grey-border/40">
          <span className="text-[10px] uppercase font-bold text-navy-muted flex items-center gap-1">
            <Globe2 className="h-3.5 w-3.5 text-brand-sky" />
            <span>Popular Import Hubs</span>
          </span>
          <div className="text-sm font-extrabold text-navy">🇬🇧 UK, 🇩🇪 DE, 🇫🇷 FR</div>
          <p className="text-[10px] text-navy-muted">Zero-tariff accord status</p>
        </div>

        {/* 4. Seasonality */}
        <div className="rounded-xl bg-grey-light p-4 space-y-1 border border-grey-border/40">
          <span className="text-[10px] uppercase font-bold text-navy-muted flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5 text-purple-600" />
            <span>Peak Seasonality</span>
          </span>
          <div className="text-sm font-extrabold text-navy">August - November</div>
          <p className="text-[10px] text-navy-muted">Lead times extend +3 days in Q4</p>
        </div>
      </div>
    </div>
  );
}
