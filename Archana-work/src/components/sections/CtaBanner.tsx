import { ArrowUpRight, Sparkles, ShieldCheck } from "lucide-react";

export default function CtaBanner() {
  return (
    <section id="cta" className="relative bg-navy-dark text-white py-20 overflow-hidden border-t border-navy-border/40">
      {/* Background gradients */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom_left,rgba(2,132,199,0.12)_0%,transparent_50%),radial-gradient(circle_at_top_right,rgba(56,189,248,0.15)_0%,transparent_50%)]"></div>
      
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8 space-y-8">
        
        {/* Eco & ESG tag */}
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold text-emerald-400">
          <ShieldCheck className="h-4.5 w-4.5" />
          <span>UK-EU ESG Accords Registered Sourcing</span>
        </div>

        {/* Header content */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl leading-tight">
            Ready to Expand Your Business Globally?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto">
            Create your account today. Integrate your catalog or publish sourcing RFQs under a fully protected, AI-driven B2B commerce network.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#register"
            className="flex items-center gap-1.5 rounded-xl bg-white px-7 py-4 text-base font-bold text-navy hover:bg-grey-medium transition-all shadow-lg"
          >
            <span>Become a Buyer</span>
            <ArrowUpRight className="h-5 w-5 text-navy" />
          </a>
          <a
            href="#register"
            className="flex items-center gap-1.5 rounded-xl bg-brand-sky px-7 py-4 text-base font-bold text-white hover:bg-brand-sky-dark transition-all shadow-md"
          >
            <Sparkles className="h-4.5 w-4.5" />
            <span>Become a Supplier</span>
          </a>
        </div>

        {/* Verification guarantee */}
        <p className="text-xs text-slate-400">
          Signing up triggers the corporate background and VAT check. Normal verification duration: &lt; 24 hours.
        </p>

      </div>
    </section>
  );
}
