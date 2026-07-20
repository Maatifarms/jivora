import { Building2, Package, FileText, Layers, Truck, ShieldCheck, Scale, Leaf } from "lucide-react";

interface QuickActionsProps {
  onActionClick: (prompt: string) => void;
}

export default function QuickActions({ onActionClick }: QuickActionsProps) {
  const actions = [
    { title: "Find Suppliers", desc: "Audited factories in Porto, Lisbon, Berlin & Copenhagen.", prompt: "Find verified textile suppliers in Portugal with audit score > 9.5", icon: Building2, color: "text-blue-600", bg: "bg-blue-50" },
    { title: "Find Products", desc: "Wholesale goods pre-cleared for UK/EU import accords.", prompt: "Find GOTS organic linen fabrics available for sample dispatch", icon: Package, color: "text-emerald-600", bg: "bg-emerald-50" },
    { title: "Generate RFQ", desc: "Auto-draft official quotation requests with material specs.", prompt: "Help me generate an official RFQ for 1,000 units", icon: FileText, color: "text-brand-sky-dark", bg: "bg-brand-sky-light/40" },
    { title: "Compare Suppliers", desc: "Side-by-side comparison of audit scores & lead times.", prompt: "Compare top 3 European linen manufacturers", icon: Layers, color: "text-purple-600", bg: "bg-purple-50" },
    { title: "Estimate Shipping", desc: "Ocean sea freight & air cargo transit calculator.", prompt: "Estimate shipping freight cost from Porto to London Felixstowe", icon: Truck, color: "text-indigo-600", bg: "bg-indigo-50" },
    { title: "Explain Certs", desc: "GOTS organic, ISO 9001, CE Marking & FSC standards.", prompt: "Explain GOTS certification requirements for UK textile import", icon: ShieldCheck, color: "text-amber-600", bg: "bg-amber-50" },
    { title: "Trade Regulations", desc: "HMRC UK accords, EU PPWR laws & customs duty rates.", prompt: "Explain UK HMRC customs accords for European exports", icon: Scale, color: "text-rose-600", bg: "bg-rose-50" },
    { title: "Sustainability", desc: "Zero-carbon factories & eco-dying production cycles.", prompt: "Show suppliers with zero-carbon solar powered factories", icon: Leaf, color: "text-teal-600", bg: "bg-teal-50" }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between border-b border-grey-border/50 pb-3">
        <h3 className="text-lg font-extrabold text-navy">AI Sourcing Quick Actions</h3>
        <span className="text-xs font-bold text-navy-muted">Click to Trigger AI Flow</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {actions.map((act, idx) => {
          const Icon = act.icon;
          return (
            <button
              key={idx}
              onClick={() => onActionClick(act.prompt)}
              className="group text-left rounded-2xl border border-grey-border bg-white p-4 space-y-2 hover:border-brand-sky transition-all duration-300 card-shadow-premium hover:-translate-y-1 cursor-pointer"
            >
              <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${act.bg} ${act.color} group-hover:scale-110 transition-transform`}>
                <Icon className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-xs font-extrabold text-navy group-hover:text-brand-sky transition-colors">{act.title}</h4>
                <p className="text-[10px] text-navy-muted leading-relaxed line-clamp-2 mt-0.5">{act.desc}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
