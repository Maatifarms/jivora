import { ShieldCheck, Package, Globe2, ShoppingBag, Users, Factory, UserCheck } from "lucide-react";

export default function CompanyStats() {
  const stats = [
    { label: "Years in Business", value: "12+ Years", icon: ShieldCheck, color: "text-emerald-600", bg: "bg-emerald-50" },
    { label: "Products Listed", value: "45+ Lines", icon: Package, color: "text-brand-sky", bg: "bg-brand-sky-light/40" },
    { label: "Countries Exported", value: "24+ Nations", icon: Globe2, color: "text-purple-600", bg: "bg-purple-50" },
    { label: "Completed Orders", value: "1,200+", icon: ShoppingBag, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Verified Buyers", value: "450+ Importers", icon: UserCheck, color: "text-indigo-600", bg: "bg-indigo-50" },
    { label: "Factory Floor", value: "15,000 m²", icon: Factory, color: "text-amber-600", bg: "bg-amber-50" },
    { label: "Staff & Engineers", value: "250+ Employees", icon: Users, color: "text-teal-600", bg: "bg-teal-50" },
  ];

  return (
    <div className="rounded-2xl border border-grey-border bg-grey-light p-6 card-shadow-premium">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
        {stats.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div key={idx} className="flex flex-col items-center justify-center text-center p-3 rounded-xl bg-white border border-grey-border/50 space-y-1.5 shadow-sm">
              <div className={`inline-flex h-9 w-9 items-center justify-center rounded-xl ${s.bg} ${s.color}`}>
                <Icon className="h-4.5 w-4.5" />
              </div>
              <div className="text-base font-extrabold text-navy tracking-tight">{s.value}</div>
              <div className="text-[10px] font-semibold text-navy-muted leading-tight">{s.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
