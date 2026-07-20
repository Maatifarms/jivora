import { Search, Scale, FileText, CheckCircle2, ArrowRight, UserPlus, ShieldCheck, PlusCircle, Inbox, Send } from "lucide-react";

const buyerSteps = [
  {
    icon: Search,
    title: "1. Search",
    desc: "Type in natural language to search AI matched factories."
  },
  {
    icon: Scale,
    title: "2. Compare",
    desc: "Review detailed trust scores, carbon statistics, and certs."
  },
  {
    icon: FileText,
    title: "3. RFQ",
    desc: "Create and dispatch structured specifications in seconds."
  },
  {
    icon: ShieldCheck,
    title: "4. Secure Order",
    desc: "Execute terms under secure international trade protocols."
  },
  {
    icon: Send,
    title: "5. Track Cargo",
    desc: "Monitor customs clearance and shipping coordinates."
  }
];

const supplierSteps = [
  {
    icon: UserPlus,
    title: "1. Register",
    desc: "Enter business details and list corporate registry codes."
  },
  {
    icon: ShieldCheck,
    title: "2. Verification",
    desc: "Pass the Jivora audits, validating VAT, ISO, and ESG scores."
  },
  {
    icon: PlusCircle,
    title: "3. List Catalog",
    desc: "Publish export listings with automated AI descriptors."
  },
  {
    icon: Inbox,
    title: "4. Receive Leads",
    desc: "Get matched directly to active UK & European enterprise buyers."
  },
  {
    icon: Send,
    title: "5. Ship & Scale",
    desc: "Execute delivery under logistics and customs coordination."
  }
];

export default function HowItWorks() {
  return (
    <section id="journey" className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-sky">TRANSPARENT PROCESS</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Sourcing Reimagined
          </h2>
          <p className="text-base text-navy-muted">
            Whether you are looking to source premium products or publish your manufacture capacity, JIVORA offers a frictionless path.
          </p>
        </div>

        {/* Dual Journey Columns */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* Buyer Sourcing Journey */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 border-b border-grey-border/50 pb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-sky-light/80 text-brand-sky-dark font-bold text-sm">B</span>
              <h3 className="text-xl font-bold text-navy">Buyer Sourcing Journey</h3>
            </div>
            
            <div className="space-y-6 relative pl-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[1.5px] before:bg-grey-border">
              {buyerSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative space-y-1.5 group">
                    {/* Bullet marker */}
                    <div className="absolute -left-[22px] top-1.5 h-3 w-3 rounded-full border-2 border-brand-sky bg-white group-hover:bg-brand-sky transition-colors"></div>
                    <div className="flex items-center gap-2">
                      <Icon className="h-4.5 w-4.5 text-brand-sky flex-shrink-0" />
                      <h4 className="text-sm font-bold text-navy">{step.title}</h4>
                    </div>
                    <p className="text-xs text-navy-muted pl-6 max-w-md leading-relaxed">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Supplier Exporting Journey */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 border-b border-grey-border/50 pb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 font-bold text-sm border border-emerald-200">S</span>
              <h3 className="text-xl font-bold text-navy">Supplier Export Journey</h3>
            </div>

            <div className="space-y-6 relative pl-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[1.5px] before:bg-grey-border">
              {supplierSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative space-y-1.5 group">
                    {/* Bullet marker */}
                    <div className="absolute -left-[22px] top-1.5 h-3 w-3 rounded-full border-2 border-emerald-500 bg-white group-hover:bg-emerald-500 transition-colors"></div>
                    <div className="flex items-center gap-2">
                      <Icon className="h-4.5 w-4.5 text-emerald-600 flex-shrink-0" />
                      <h4 className="text-sm font-bold text-navy">{step.title}</h4>
                    </div>
                    <p className="text-xs text-navy-muted pl-6 max-w-md leading-relaxed">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
