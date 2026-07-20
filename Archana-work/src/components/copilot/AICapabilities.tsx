import { Sparkles, Building2, FileText, Scale, Truck, Activity } from "lucide-react";

export default function AICapabilities() {
  const caps = [
    { title: "Product Matching", desc: "Cross-checks technical parameters (GSM density, material blend, certs) against verified inventory.", icon: Sparkles },
    { title: "Supplier Discovery", desc: "Identifies pre-audited European factories with proven export transaction logs into Northern Europe.", icon: Building2 },
    { title: "RFQ Drafting", desc: "Auto-populates Incoterms (FOB/CIF/DDP), target prices, target delivery dates, and CAD attachments.", icon: FileText },
    { title: "Compliance Guidance", desc: "Analyzes UK HMRC customs accords, EU PPWR plastic packaging directives, and ISO certs.", icon: Scale },
    { title: "Shipping Advice", desc: "Calculates estimated sea freight transit days and air cargo container rates.", icon: Truck },
    { title: "Market Intelligence", desc: "Tracks sector demand fluctuations across UK, Germany, France, Netherlands, and Italy.", icon: Activity }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-grey-border/50 pb-3">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-brand-sky" />
          <h3 className="text-xl font-extrabold text-navy">JIVORA AI Capabilities</h3>
        </div>
        <span className="text-xs font-bold text-navy-muted">Core OS Features</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-xs">
        {caps.map((c, idx) => {
          const Icon = c.icon;
          return (
            <div key={idx} className="rounded-2xl border border-grey-border bg-white p-5 space-y-2 card-shadow-premium hover:border-brand-sky transition-all">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-sky-light text-brand-sky font-bold">
                  <Icon className="h-4 w-4" />
                </div>
                <h4 className="font-extrabold text-navy text-sm">{c.title}</h4>
              </div>
              <p className="text-navy-muted leading-relaxed text-[11px] pt-1">{c.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
