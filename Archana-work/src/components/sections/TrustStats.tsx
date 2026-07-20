import { Globe, ShieldCheck, Layers, Cpu, Heart } from "lucide-react";

const stats = [
  {
    icon: Globe,
    label: "Countries Served",
    value: "120+",
    detail: "B2B connections in UK, EU, and global hubs",
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    icon: ShieldCheck,
    label: "Verified Businesses",
    value: "50K+",
    detail: "100% vetted registrations & VAT status",
    color: "text-emerald-600",
    bg: "bg-emerald-50"
  },
  {
    icon: Layers,
    label: "Products Listed",
    value: "1M+",
    detail: "High-quality raw materials & finished goods",
    color: "text-purple-600",
    bg: "bg-purple-50"
  },
  {
    icon: Heart,
    label: "Verified Suppliers",
    value: "99%",
    detail: "Strict auditing and certification compliance",
    color: "text-rose-600",
    bg: "bg-rose-50"
  },
  {
    icon: Cpu,
    label: "AI Trade Assistance",
    value: "24/7",
    detail: "Automated RFQs & multi-language translating",
    color: "text-brand-sky",
    bg: "bg-brand-sky-light/40"
  }
];

const countries = [
  { flag: "🇬🇧", name: "UK" },
  { flag: "🇩🇪", name: "Germany" },
  { flag: "🇫🇷", name: "France" },
  { flag: "🇪🇸", name: "Spain" },
  { flag: "🇳🇱", name: "Netherlands" }
];

export default function TrustStats() {
  return (
    <section className="bg-white border-y border-grey-border/50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 1. Global Trust Statistics Cards (Serving as immediate trust metrics below Hero) */}
        <div className="space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-sky">PLATFORM METRICS</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              Global Sourcing Scale
            </h2>
            <p className="text-sm text-navy-muted max-w-xl mx-auto">
              Empowering global trade with industry-leading figures. Secure your enterprise supply chain with JIVORA.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index} 
                  className="rounded-2xl border border-grey-border bg-grey-light p-6 space-y-4 hover:border-brand-sky hover:bg-white transition-all duration-300 card-shadow-premium hover:-translate-y-1"
                >
                  <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${stat.bg} ${stat.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-extrabold text-navy sm:text-3xl tracking-tight">{stat.value}</div>
                    <div className="text-sm font-semibold text-navy">{stat.label}</div>
                  </div>
                  <p className="text-[11px] text-navy-muted leading-relaxed">{stat.detail}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Trusted By Countries Marquee */}
        <div className="border-t border-grey-border/40 pt-12 flex flex-col md:flex-row items-center justify-center gap-6 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-navy-muted">
            Trusted by exporters and buyers across:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {countries.map((country, idx) => (
              <span 
                key={idx} 
                className="flex items-center gap-2 rounded-full border border-grey-border bg-grey-light px-3.5 py-1.5 text-sm font-semibold text-navy hover:border-brand-sky hover:bg-white transition-all select-none"
              >
                <span>{country.flag}</span>
                <span>{country.name}</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
