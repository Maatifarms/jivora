import { Truck, ShieldCheck, DollarSign, Clock, Anchor } from "lucide-react";

export default function MoqPricingTable() {
  const tiers = [
    { qty: "100 - 499 pcs", price: "£8.50 / unit", savings: "Standard MOQ" },
    { qty: "500 - 999 pcs", price: "£7.80 / unit", savings: "Save 8%" },
    { qty: "1,000 - 4,999 pcs", price: "£7.20 / unit", savings: "Save 15%" },
    { qty: "5,000+ pcs", price: "£6.50 / unit", savings: "Save 23% (VIP Tier)" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      
      {/* Left Column: Tiered MOQ Pricing Table (7 cols) (Req 2) */}
      <div className="lg:col-span-7 rounded-2xl border border-grey-border bg-white p-6 sm:p-8 space-y-5 card-shadow-premium">
        <div className="flex items-center justify-between border-b border-grey-border/50 pb-4">
          <div className="flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-emerald-600" />
            <h3 className="text-lg font-extrabold text-navy">Wholesale Tiered MOQ Pricing</h3>
          </div>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">Volume Discounts</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-grey-border text-navy-muted uppercase font-extrabold">
                <th className="py-2.5 px-3">Order Quantity</th>
                <th className="py-2.5 px-3">Unit Price (GBP)</th>
                <th className="py-2.5 px-3">Tier Advantage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-grey-border/40">
              {tiers.map((row, idx) => (
                <tr key={idx} className="hover:bg-grey-light/60 transition-colors">
                  <td className="py-3 px-3 font-extrabold text-navy">{row.qty}</td>
                  <td className="py-3 px-3 font-extrabold text-brand-sky-dark text-sm">{row.price}</td>
                  <td className="py-3 px-3">
                    <span className="rounded bg-emerald-50 text-emerald-700 font-extrabold px-2 py-0.5 text-[10px] border border-emerald-200">
                      {row.savings}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Right Column: Availability & Logistics Details (5 cols) (Req 1) */}
      <div className="lg:col-span-5 rounded-2xl border border-grey-border bg-white p-6 space-y-5 card-shadow-premium">
        <div className="flex items-center justify-between border-b border-grey-border/50 pb-4">
          <div className="flex items-center gap-2">
            <Truck className="h-5 w-5 text-brand-sky" />
            <h3 className="text-base font-extrabold text-navy">Logistics & Incoterms</h3>
          </div>
          <span className="text-[10px] font-bold text-navy-muted">UK Customs Ready</span>
        </div>

        <div className="space-y-3 text-xs">
          <div className="flex justify-between items-center p-2.5 rounded-xl bg-grey-light border border-grey-border/40">
            <span className="font-bold text-navy-muted">Production Status</span>
            <span className="font-extrabold text-navy">Made to Order (7 - 14 Days)</span>
          </div>

          <div className="flex justify-between items-center p-2.5 rounded-xl bg-grey-light border border-grey-border/40">
            <span className="font-bold text-navy-muted">Shipping Options</span>
            <span className="font-extrabold text-navy">Sea Freight, Air Cargo, Express</span>
          </div>

          <div className="flex justify-between items-center p-2.5 rounded-xl bg-grey-light border border-grey-border/40">
            <span className="font-bold text-navy-muted">Available Incoterms</span>
            <span className="font-extrabold text-navy">FOB, CIF, EXW, DDP</span>
          </div>

          <div className="flex justify-between items-center p-2.5 rounded-xl bg-grey-light border border-grey-border/40">
            <span className="font-bold text-navy-muted">Customs Clearance</span>
            <span className="font-extrabold text-emerald-700">Pre-cleared for UK HMRC</span>
          </div>
        </div>
      </div>

    </div>
  );
}
