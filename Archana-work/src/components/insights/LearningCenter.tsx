import { BookOpen, ShieldCheck, Truck, FileText, Search, Scale } from "lucide-react";

export default function LearningCenter() {
  const guides = [
    {
      title: "Complete Export Documentation Guide",
      desc: "Step-by-step paperwork guide for Commercial Invoices, Bills of Lading, and HMRC Accords.",
      icon: FileText,
      readTime: "5 min read"
    },
    {
      title: "UK & EU Customs Clearance Process",
      desc: "How to avoid port clearance delays at Felixstowe, Rotterdam, and Hamburg.",
      icon: Scale,
      readTime: "7 min read"
    },
    {
      title: "Incoterms 2026 Masterclass",
      desc: "Deep dive into FOB, CIF, EXW, and DDP trade liability and freight cost distribution.",
      icon: Truck,
      readTime: "10 min read"
    },
    {
      title: "Supplier On-Site Audit & Verification",
      desc: "How Jivora audits European factories for GOTS, ISO 9001, and zero-carbon compliance.",
      icon: ShieldCheck,
      readTime: "6 min read"
    }
  ];

  return (
    <div className="rounded-2xl border border-grey-border bg-white p-6 sm:p-8 space-y-6 card-shadow-premium">
      <div className="flex items-center justify-between border-b border-grey-border/50 pb-4">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-brand-sky" />
          <h3 className="text-xl font-extrabold text-navy">Global Trade Learning Center & Guides</h3>
        </div>
        <span className="text-xs font-bold text-navy-muted">Practical Sourcing Guides</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
        {guides.map((g, idx) => {
          const Icon = g.icon;
          return (
            <div key={idx} className="rounded-xl border border-grey-border bg-grey-light p-4 space-y-2 hover:border-brand-sky hover:bg-white transition-all cursor-pointer group">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-sky-light text-brand-sky group-hover:bg-navy group-hover:text-white transition-colors">
                <Icon className="h-4.5 w-4.5" />
              </div>
              <h4 className="font-extrabold text-navy group-hover:text-brand-sky transition-colors">{g.title}</h4>
              <p className="text-[11px] text-navy-muted leading-relaxed">{g.desc}</p>
              <span className="text-[10px] font-bold text-navy-muted block pt-1">{g.readTime}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
