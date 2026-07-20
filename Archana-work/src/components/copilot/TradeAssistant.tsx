import { BookOpen, ShieldCheck, Scale, FileText, Truck, CreditCard, Leaf } from "lucide-react";

interface TradeAssistantProps {
  onCardClick: (topic: string) => void;
}

export default function TradeAssistant({ onCardClick }: TradeAssistantProps) {
  const tools = [
    { title: "Incoterms 2026 Matrix", desc: "FOB vs CIF vs DDP liability, freight ownership & duty payout.", topic: "Explain FOB vs CIF vs DDP Incoterms for UK import", icon: Scale, color: "text-blue-600", bg: "bg-blue-50" },
    { title: "HMRC Customs Clearance", desc: "UK VAT registration, EORI numbers & simplified border procedures.", topic: "Explain UK HMRC customs clearance requirements for European goods", icon: ShieldCheck, color: "text-emerald-600", bg: "bg-emerald-50" },
    { title: "Export Documentation", desc: "Commercial Invoices, Packing Lists & Certificates of Origin.", topic: "What export documents are required for European factories shipping to UK?", icon: FileText, color: "text-purple-600", bg: "bg-purple-50" },
    { title: "Import Duty Calculator", desc: "UK & EU tariff codes, commodity classification & VAT rates.", topic: "How to calculate UK import duty for organic textiles", icon: CreditCard, color: "text-amber-600", bg: "bg-amber-50" },
    { title: "Export Compliance", desc: "Zero-tariff EU accords, sanctions screening & trade compliance.", topic: "Explain zero-tariff EU trade accord compliance", icon: BookOpen, color: "text-indigo-600", bg: "bg-indigo-50" },
    { title: "Eco Packaging Directives", desc: "EU PPWR plastic-free retail packaging directives 2026.", topic: "Explain EU PPWR plastic packaging regulations 2026", icon: Leaf, color: "text-teal-600", bg: "bg-teal-50" }
  ];

  return (
    <div className="rounded-2xl border border-grey-border bg-white p-6 sm:p-8 space-y-6 card-shadow-premium">
      <div className="flex items-center justify-between border-b border-grey-border/50 pb-4">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-brand-sky" />
          <h3 className="text-xl font-extrabold text-navy">Trade Assistant Knowledge Cards</h3>
        </div>
        <span className="text-xs font-bold text-navy-muted">Interactive Sourcing Knowledge</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
        {tools.map((t, idx) => {
          const Icon = t.icon;
          return (
            <div
              key={idx}
              onClick={() => onCardClick(t.topic)}
              className="group rounded-xl border border-grey-border bg-grey-light/50 p-4 space-y-2 hover:border-brand-sky hover:bg-white transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${t.bg} ${t.color}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <h4 className="font-extrabold text-navy text-sm group-hover:text-brand-sky transition-colors">{t.title}</h4>
              </div>
              <p className="text-navy-muted leading-relaxed text-[11px]">{t.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
