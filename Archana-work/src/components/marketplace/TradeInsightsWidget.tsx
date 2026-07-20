import { AlertTriangle, TrendingUp, Sparkles, BookOpen } from "lucide-react";

export default function TradeInsightsWidget() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      
      {/* 1. Trending Imports Indicators */}
      <div className="rounded-2xl border border-grey-border bg-white p-6 space-y-4 card-shadow-premium">
        <div className="flex items-center gap-2 border-b border-grey-border/50 pb-3">
          <TrendingUp className="h-5 w-5 text-brand-sky" />
          <h3 className="text-sm font-extrabold text-navy uppercase tracking-wider">Trending Imports Index</h3>
        </div>

        <div className="space-y-3.5 text-xs text-navy">
          {/* UK Sourcing */}
          <div className="flex justify-between items-center border-b border-grey-border/30 pb-2">
            <div>
              <span className="font-bold">🇬🇧 United Kingdom</span>
              <p className="text-[10px] text-navy-muted">High-volume: Sustainable Textile sourcing</p>
            </div>
            <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">+42% MoM</span>
          </div>

          {/* Germany Sourcing */}
          <div className="flex justify-between items-center border-b border-grey-border/30 pb-2">
            <div>
              <span className="font-bold">🇩🇪 Germany</span>
              <p className="text-[10px] text-navy-muted">High-volume: Bio-medical disposables</p>
            </div>
            <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">+28% MoM</span>
          </div>

          {/* France Sourcing */}
          <div className="flex justify-between items-center pb-1">
            <div>
              <span className="font-bold">🇫🇷 France</span>
              <p className="text-[10px] text-navy-muted">High-volume: Eco-friendly toy imports</p>
            </div>
            <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">+19% MoM</span>
          </div>
        </div>
      </div>

      {/* 2. EU Trade Alerts (New Regulations) */}
      <div className="rounded-2xl border border-grey-border bg-white p-6 space-y-4 card-shadow-premium">
        <div className="flex items-center gap-2 border-b border-grey-border/50 pb-3">
          <AlertTriangle className="h-5 w-5 text-amber-500" />
          <h3 className="text-sm font-extrabold text-navy uppercase tracking-wider">UK-EU Regulatory Updates</h3>
        </div>

        <div className="space-y-4 text-xs text-navy">
          {/* Carbon tax */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="rounded bg-amber-50 border border-amber-200 px-2 py-0.5 text-[9px] font-bold text-amber-700">New Policy</span>
              <span className="text-[9px] text-navy-muted">July 2026</span>
            </div>
            <h4 className="font-bold">EU ESG Reporting Adjustments</h4>
            <p className="text-[10px] text-navy-muted leading-relaxed">Scope 3 supply chain carbon metrics verified by GOTS standards are now mandatory for large apparel buyers entering Germany.</p>
          </div>

          {/* Tariffs */}
          <div className="space-y-1 border-t border-grey-border/40 pt-3">
            <div className="flex items-center justify-between">
              <span className="rounded bg-blue-50 border border-blue-200 px-2 py-0.5 text-[9px] font-bold text-blue-700">Customs alert</span>
              <span className="text-[9px] text-navy-muted">June 2026</span>
            </div>
            <h4 className="font-bold">UK Postponed VAT Accounting Audit</h4>
            <p className="text-[10px] text-navy-muted leading-relaxed">HMRC issues fresh import guidelines prioritizing pre-vetted factories under authorized registry codes to speed customs processing.</p>
          </div>
        </div>
      </div>

    </div>
  );
}
