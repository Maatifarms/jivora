import { Sparkles, Check, TrendingUp } from "lucide-react";

interface SummaryProps {
  productName: string;
}

export default function AISummary({ productName }: SummaryProps) {
  const points = [
    "High sourcing demand in UK & Northern Europe",
    "Strong supplier response rate (< 1 hour guaranteed)",
    "Competitive pricing tier with bulk volume discounts",
    "Full CE & GOTS certified for zero-tariff European import"
  ];

  return (
    <div className="rounded-2xl border border-brand-sky-accent/30 bg-brand-sky-light/20 p-6 sm:p-8 space-y-6 relative overflow-hidden">
      {/* Glow background effect */}
      <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-brand-sky opacity-10 blur-2xl"></div>

      <div className="flex items-center justify-between border-b border-brand-sky-accent/20 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-sky text-white shadow-sm">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-base font-extrabold text-navy">AI Product Insights & Summary</h3>
            <p className="text-[11px] text-navy-muted">Real-time trade analysis generated for UK & EU importers.</p>
          </div>
        </div>
        <span className="rounded-full bg-brand-sky/20 px-3 py-1 text-xs font-bold text-brand-sky-dark border border-brand-sky-accent/30">
          99% Trade Match
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Left: Summary text */}
        <div className="space-y-3 text-xs text-navy leading-relaxed">
          <p>
            This <strong>{productName}</strong> line is manufactured using verified eco-friendly production methods in Europe. Designed specifically for UK & European retailers seeking low MOQs, rapid customs clearance, and GOTS/CE compliance.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            <span className="rounded bg-white px-2.5 py-1 font-bold text-navy border border-grey-border/60">
              ⚡ 7-14 Day Delivery
            </span>
            <span className="rounded bg-white px-2.5 py-1 font-bold text-emerald-700 border border-emerald-200">
              🌿 Carbon Neutral
            </span>
            <span className="rounded bg-white px-2.5 py-1 font-bold text-blue-700 border border-blue-200">
              🇪🇺 UK-EU Accord Approved
            </span>
          </div>
        </div>

        {/* Right: Why Jivora Recommends (Req 5) */}
        <div className="rounded-xl bg-white p-4 space-y-3 border border-grey-border/50 shadow-sm">
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-brand-sky-dark flex items-center gap-1.5">
            <TrendingUp className="h-4 w-4 text-brand-sky" />
            <span>Why Jivora Recommends This Product:</span>
          </h4>
          <ul className="space-y-2 text-xs">
            {points.map((pt, idx) => (
              <li key={idx} className="flex items-start gap-2 text-navy font-semibold">
                <Check className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
