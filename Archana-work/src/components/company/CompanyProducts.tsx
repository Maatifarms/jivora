import Link from "next/link";
import { ArrowRight, Package } from "lucide-react";

export default function CompanyProducts() {
  const companyProducts = [
    {
      id: "p1",
      name: "Premium Organic Linen Fabric",
      category: "Sustainable Textiles",
      price: "€2.40 - €3.10 / meter",
      moq: "500 meters",
      leadTime: "15 Days",
      trustScore: "9.9",
      flag: "🇵🇹",
      country: "Portugal"
    },
    {
      id: "p4",
      name: "Bio-degradable PLA Cold Cups",
      category: "Biodegradable Packaging",
      price: "€0.03 - €0.05 / unit",
      moq: "5,000 units",
      leadTime: "7 Days",
      trustScore: "9.9",
      flag: "🇵🇹",
      country: "Portugal"
    },
    {
      id: "p6",
      name: "Compostable Retail Sourcing Bags",
      category: "Biodegradable Packaging",
      price: "€0.04 - €0.07 / unit",
      moq: "2,500 units",
      leadTime: "10 Days",
      trustScore: "9.7",
      flag: "🇵🇹",
      country: "Portugal"
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between border-b border-grey-border/50 pb-3">
        <div className="flex items-center gap-2">
          <Package className="h-5 w-5 text-brand-sky" />
          <h3 className="text-lg font-extrabold text-navy">Factory Product Catalog</h3>
        </div>
        <span className="text-xs font-bold text-navy-muted">Showing {companyProducts.length} Product Lines</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {companyProducts.map((p) => (
          <Link 
            key={p.id}
            href={`/marketplace/product/${p.id}`}
            className="group rounded-2xl border border-grey-border bg-white p-5 space-y-4 hover:border-brand-sky transition-all duration-300 card-shadow-premium hover:-translate-y-1.5 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-navy-muted">
                <span>{p.category}</span>
                <span className="font-extrabold text-navy">{p.flag} {p.country}</span>
              </div>

              <div className="h-36 w-full rounded-xl bg-gradient-to-tr from-brand-sky-light/40 to-brand-sky-light/70 border border-brand-sky-accent/20 flex flex-col items-center justify-center p-3 text-center">
                <span className="text-sm font-extrabold text-navy group-hover:text-brand-sky transition-colors">{p.name}</span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded mt-2">EXPORT READY</span>
              </div>

              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-navy-muted">Wholesale Price:</span>
                  <span className="font-extrabold text-navy">{p.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-navy-muted">Minimum Order:</span>
                  <span className="font-extrabold text-navy">{p.moq}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-navy-muted">Production Time:</span>
                  <span className="font-extrabold text-navy">{p.leadTime}</span>
                </div>
              </div>
            </div>

            <div className="border-t border-grey-border/50 pt-3 flex items-center justify-between text-xs">
              <span className="rounded bg-brand-sky-light/60 text-brand-sky-dark font-bold px-2 py-0.5 text-[10px]">
                {p.trustScore} Trust
              </span>
              <span className="text-brand-sky font-bold flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                <span>View Details</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
