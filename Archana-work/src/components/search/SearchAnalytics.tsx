import { Activity, Clock, Globe2, TrendingUp } from "lucide-react";

export default function SearchAnalytics() {
  const metrics = [
    { label: "Total Matches Found", value: "42 Results", icon: Activity, color: "text-brand-sky", bg: "bg-brand-sky-light/40" },
    { label: "Average Response Time", value: "< 45 Mins", icon: Clock, color: "text-emerald-600", bg: "bg-emerald-50" },
    { label: "Trending Category", value: "Sustainable Textiles", icon: TrendingUp, color: "text-purple-600", bg: "bg-purple-50" },
    { label: "Popular Origin Hub", value: "Porto, Portugal 🇵🇹", icon: Globe2, color: "text-indigo-600", bg: "bg-indigo-50" }
  ];

  return (
    <div className="rounded-2xl border border-grey-border bg-grey-light p-5 card-shadow-premium">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {metrics.map((m, idx) => {
          const Icon = m.icon;
          return (
            <div key={idx} className="p-3 rounded-xl bg-white border border-grey-border/40 space-y-1 text-center shadow-2xs">
              <div className={`inline-flex h-8 w-8 items-center justify-center rounded-lg ${m.bg} ${m.color} mx-auto`}>
                <Icon className="h-4 w-4" />
              </div>
              <div className="text-sm font-extrabold text-navy">{m.value}</div>
              <div className="text-[10px] text-navy-muted font-bold">{m.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
