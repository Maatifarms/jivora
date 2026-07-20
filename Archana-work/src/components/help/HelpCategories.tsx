import { ShoppingBag, Building2, Factory, Globe2, CreditCard, Truck, User, ShieldCheck, Sparkles, Store } from "lucide-react";

export default function HelpCategories() {
  const categories = [
    { title: "Buyer Help", desc: "Sourcing guides, submitting RFQs, price negotiation & sample orders.", articles: 24, icon: ShoppingBag, color: "text-blue-600", bg: "bg-blue-50" },
    { title: "Supplier Help", desc: "Listing products, factory profile setup & managing wholesale inquiries.", articles: 18, icon: Building2, color: "text-emerald-600", bg: "bg-emerald-50" },
    { title: "Manufacturer Help", desc: "Production specs, OEM/ODM tooling setup & capacity verification.", articles: 15, icon: Factory, color: "text-amber-600", bg: "bg-amber-50" },
    { title: "Exporter Help", desc: "HMRC clearance, EU tariffs, customs accords & export documentation.", articles: 21, icon: Globe2, color: "text-purple-600", bg: "bg-purple-50" },
    { title: "Payments & Customs", desc: "Escrow protection, Letter of Credit, Incoterms liability & duty payout.", articles: 12, icon: CreditCard, color: "text-teal-600", bg: "bg-teal-50" },
    { title: "Shipping & Logistics", desc: "Sea/Air cargo options, container bookings, transit times & destination ports.", articles: 16, icon: Truck, color: "text-indigo-600", bg: "bg-indigo-50" },
    { title: "Account Settings", desc: "Profile management, team member roles & notification preferences.", articles: 10, icon: User, color: "text-slate-600", bg: "bg-slate-100" },
    { title: "Security & Compliance", desc: "Data protection, GOTS/ISO cert validation & factory audit scores.", articles: 14, icon: ShieldCheck, color: "text-emerald-700", bg: "bg-emerald-50" },
    { title: "AI Copilot Guide", desc: "Understanding AI match scores, auto-RFQ optimization & predictive pricing.", articles: 8, icon: Sparkles, color: "text-brand-sky-dark", bg: "bg-brand-sky-light/40" },
    { title: "Marketplace Guide", desc: "Product discovery, sector category filters & side-by-side comparison.", articles: 20, icon: Store, color: "text-rose-600", bg: "bg-rose-50" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-grey-border/50 pb-3">
        <h3 className="text-xl font-extrabold text-navy">Explore Help Categories</h3>
        <span className="text-xs font-bold text-navy-muted">158 Articles Available</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {categories.map((c, idx) => {
          const Icon = c.icon;
          return (
            <div
              key={idx}
              className="group rounded-2xl border border-grey-border bg-white p-5 space-y-3 hover:border-brand-sky transition-all duration-300 card-shadow-premium hover:-translate-y-1 flex flex-col justify-between cursor-pointer"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${c.bg} ${c.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-grey-light font-extrabold text-navy px-2 py-0.5 text-[10px] border border-grey-border/50">
                    {c.articles} articles
                  </span>
                </div>

                <h4 className="text-sm font-extrabold text-navy group-hover:text-brand-sky transition-colors">{c.title}</h4>
                <p className="text-[11px] text-navy-muted leading-relaxed">{c.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
