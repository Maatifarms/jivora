import { ShieldCheck, Users, Layers, Globe2 } from "lucide-react";

const metrics = [
  { label: "Verified Suppliers", value: "10,000+", icon: ShieldCheck, color: "text-emerald-600", bg: "bg-emerald-50" },
  { label: "Active Buyers", value: "25,000+", icon: Users, color: "text-brand-sky", bg: "bg-brand-sky-light/40" },
  { label: "Products Listed", value: "250,000+", icon: Layers, color: "text-purple-600", bg: "bg-purple-50" },
  { label: "Countries Served", value: "120+", icon: Globe2, color: "text-blue-600", bg: "bg-blue-50" },
];

export default function SuccessMetrics() {
  return (
    <div className="rounded-2xl border border-grey-border bg-grey-light p-6 shadow-sm">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {metrics.map((m, idx) => {
          const Icon = m.icon;
          return (
            <div key={idx} className="flex items-center gap-3 p-2">
              <div className={`inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl ${m.bg} ${m.color}`}>
                <Icon className="h-5.5 w-5.5" />
              </div>
              <div>
                <div className="text-xl font-extrabold text-navy sm:text-2xl tracking-tight">{m.value}</div>
                <div className="text-xs font-semibold text-navy-muted">{m.label}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
