import { Sparkles, ArrowRight, ShieldCheck, Factory } from "lucide-react";
import Link from "next/link";

export default function RelatedProducts() {
  const similarProducts = [
    { id: "p2", name: "Grid-Tied Solar Microinverter (1200W)", country: "Germany", flag: "🇩🇪", price: "€120 - €145", moq: "100 units" },
    { id: "p3", name: "Food-Grade Recycled PET Pellets (rPET)", country: "Denmark", flag: "🇩🇰", price: "€850 - €920", moq: "10 tons" },
    { id: "p4", name: "Bio-degradable PLA Cold Cups", country: "Denmark", flag: "🇩🇰", price: "€0.03 - €0.05", moq: "5,000 units" },
  ];

  const alternativeSuppliers = [
    { name: "SolarGrid Technology GmbH", country: "Germany", flag: "🇩🇪", trust: "9.8", years: 10, response: "< 2 hours" },
    { name: "Nordic Bio-Pack ApS", country: "Denmark", flag: "🇩🇰", trust: "9.7", years: 5, response: "< 30 mins" },
    { name: "Eco-Toy Crafts S.r.l.", country: "Italy", flag: "🇮🇹", trust: "9.8", years: 4, response: "< 45 mins" },
  ];

  return (
    <div className="space-y-8">
      
      {/* 1. Similar Products Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-grey-border/50 pb-3">
          <h3 className="text-lg font-extrabold text-navy">Similar Products You Might Like</h3>
          <span className="text-xs font-bold text-navy-muted">Matched by Material & Category</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {similarProducts.map((p) => (
            <Link 
              key={p.id} 
              href={`/marketplace/product/${p.id}`}
              className="group rounded-2xl border border-grey-border bg-white p-5 space-y-3 hover:border-brand-sky transition-all card-shadow-premium hover:-translate-y-1"
            >
              <div className="flex justify-between text-xs text-navy-muted">
                <span>{p.flag} {p.country}</span>
                <span className="font-bold text-navy">MOQ: {p.moq}</span>
              </div>
              <h4 className="text-sm font-bold text-navy group-hover:text-brand-sky transition-colors">{p.name}</h4>
              <div className="flex justify-between items-center text-xs border-t border-grey-border/40 pt-2">
                <span className="font-extrabold text-navy">{p.price}</span>
                <span className="text-brand-sky font-bold flex items-center gap-0.5">
                  <span>View</span>
                  <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 2. Alternative Verified Suppliers Grid (Req 6) */}
      <div className="space-y-4 pt-4 border-t border-grey-border/50">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-extrabold text-navy">Alternative Verified Suppliers</h3>
          <span className="text-xs font-bold text-brand-sky-dark bg-brand-sky-light/40 px-2 py-0.5 rounded">AI Matched</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {alternativeSuppliers.map((s, idx) => (
            <div key={idx} className="rounded-2xl border border-grey-border bg-grey-light p-5 space-y-3 hover:border-brand-sky transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-navy">{s.flag} {s.name}</span>
                <span className="rounded bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 text-[10px]">
                  {s.trust} Trust
                </span>
              </div>
              <div className="text-[11px] text-navy-muted space-y-1">
                <div>{s.years} Years Exporting • Response: {s.response}</div>
              </div>
              <Link 
                href="/marketplace"
                className="block text-center rounded-xl border border-grey-border bg-white py-2 text-xs font-bold text-navy hover:bg-grey-medium transition-colors"
              >
                View Supplier Profile
              </Link>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
