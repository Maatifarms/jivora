import { BookOpen, Clock, Sparkles, ArrowRight } from "lucide-react";

export default function KnowledgeBase() {
  const articles = [
    { title: "Getting Started with Jivora B2B Sourcing", category: "Marketplace Guide", readTime: "4 min read", updated: "July 2026", aiSummary: "Core Platform Intro" },
    { title: "How to Submit & Draft an Official RFQ", category: "RFQ Guide", readTime: "6 min read", updated: "July 2026", aiSummary: "Step-by-step RFQ" },
    { title: "Understanding Jivora Factory Verification & Audit Scores", category: "Supplier Verification", readTime: "8 min read", updated: "June 2026", aiSummary: "9.9 Trust Rating" },
    { title: "Leveraging AI Copilot for Automated Matchmaking", category: "AI Copilot", readTime: "5 min read", updated: "July 2026", aiSummary: "AI Sourcing USP" },
    { title: "UK Import Customs Clearance & HMRC Accords", category: "Customs & Trade", readTime: "10 min read", updated: "July 2026", aiSummary: "Zero Border Delays" },
    { title: "EU PPWR Plastic Packaging Directives 2026", category: "EU Regulations", readTime: "9 min read", updated: "June 2026", aiSummary: "Legal Compliance" },
    { title: "Export Documentation Checklist for European Factories", category: "Export Guide", readTime: "7 min read", updated: "July 2026", aiSummary: "Commercial Invoices" },
    { title: "GOTS & FSC Sustainability Certification Standards", category: "Sustainability", readTime: "6 min read", updated: "July 2026", aiSummary: "Eco Standards" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-grey-border/50 pb-3">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-brand-sky" />
          <h3 className="text-xl font-extrabold text-navy">Featured Knowledge Base Articles</h3>
        </div>
        <span className="text-xs font-bold text-navy-muted">Curated Sourcing Documentation</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {articles.map((art, idx) => (
          <div
            key={idx}
            className="group rounded-2xl border border-grey-border bg-white p-5 space-y-3 hover:border-brand-sky transition-all duration-300 card-shadow-premium hover:-translate-y-1 flex flex-col justify-between cursor-pointer"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-navy-muted">{art.category}</span>
                <span className="rounded bg-brand-sky-light/80 text-brand-sky-dark font-extrabold px-2 py-0.5 text-[9px] border border-brand-sky-accent/20">
                  {art.aiSummary}
                </span>
              </div>

              <h4 className="text-sm font-extrabold text-navy group-hover:text-brand-sky transition-colors leading-snug">
                {art.title}
              </h4>
            </div>

            <div className="border-t border-grey-border/40 pt-3 flex items-center justify-between text-[11px] text-navy-muted">
              <span>{art.readTime}</span>
              <span className="text-brand-sky font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>Read Article</span>
                <ArrowRight className="h-3 w-3" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
