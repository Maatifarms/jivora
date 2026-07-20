import { Sparkles, Check, TrendingUp, ShieldCheck, Zap } from "lucide-react";

export default function AITradeIntelligence() {
  const insights = [
    {
      title: "High Demand Sector",
      metric: "GOTS Organic Linen",
      score: "99/100",
      reason: "UK retail orders up 34% YoY. Portugal factories offer direct-from-loom pricing with 3-day sample dispatch."
    },
    {
      title: "Fast Growing Market",
      metric: "Germany Solar & Hardware",
      score: "96/100",
      reason: "North Rhine-Westphalia clean-tech incentives created a £2.4B import surge for certified hardware."
    },
    {
      title: "Recommended Sourcing Hub",
      metric: "Porto & Lisbon, Portugal",
      score: "98/100",
      reason: "HMRC pre-cleared export accords ensure zero customs friction into UK ports (Felixstowe & London)."
    },
    {
      title: "Low Competition Niche",
      metric: "Compostable PLA Cold Cups",
      score: "94/100",
      reason: "EU PPWR law restricts traditional plastics; Nordic suppliers hold 100% biodegradable certifications."
    }
  ];

  return (
    <div className="rounded-3xl border border-brand-sky-accent/30 bg-gradient-to-br from-navy via-navy-light to-slate-900 p-6 sm:p-10 text-white space-y-8 shadow-2xl relative overflow-hidden">
      {/* Background Flare */}
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-brand-sky opacity-10 blur-3xl"></div>

      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-sky text-white shadow-lg">
            <Sparkles className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold tracking-tight">AI Trade Intelligence Dashboard</h3>
            <p className="text-xs text-slate-300">Bloomberg & McKinsey-grade predictive sourcing analytics.</p>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/15 self-start sm:self-auto">
          <Zap className="h-4 w-4 text-brand-sky-accent" />
          <span className="text-xs font-bold text-slate-200">Real-Time UK-EU Arbitrage Index</span>
        </div>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-xs">
        {insights.map((item, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-3 backdrop-blur-sm hover:border-brand-sky/60 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-sky-accent">
                  {item.title}
                </span>
                <span className="rounded bg-brand-sky/20 px-2 py-0.5 text-[10px] font-extrabold text-brand-sky-accent border border-brand-sky/30">
                  {item.score} AI Score
                </span>
              </div>

              <h4 className="text-base font-extrabold text-white">{item.metric}</h4>

              <p className="text-[11px] text-slate-300 leading-relaxed">
                {item.reason}
              </p>
            </div>

            <div className="pt-2 border-t border-white/10 flex items-center gap-1.5 text-[10px] font-extrabold text-emerald-400">
              <Check className="h-3.5 w-3.5" />
              <span>Verified Sourcing Accord</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
