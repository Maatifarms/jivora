import { BarChart3, TrendingUp, AlertTriangle, Sparkles, ArrowRight } from "lucide-react";

const tradeTrends = [
  {
    product: "Recycled Polyester (rPET)",
    demand: "Germany",
    growth: "+28%",
    percentage: 85,
    volume: "High Volume"
  },
  {
    product: "Solar PV Mounting Components",
    demand: "United Kingdom",
    growth: "+34%",
    percentage: 92,
    volume: "Critical Demand"
  },
  {
    product: "Food-Grade Bio-degradable PLA",
    demand: "France",
    growth: "+19%",
    percentage: 70,
    volume: "Medium Volume"
  }
];

const insights = [
  {
    type: "Regulation",
    title: "EU CBAM Phase-In Alert",
    desc: "Carbon Border Adjustment Mechanism reporting begins for raw steel and aluminum imports to the EU. GOTS and ESG reporting required.",
    date: "July 2026",
    badgeColor: "bg-amber-50 text-amber-700 border border-amber-200"
  },
  {
    type: "Tariff Update",
    title: "Post-Brexit VAT Adjustment",
    desc: "Postponed VAT accounting rules adjusted for UK importers purchasing from vetted French and German manufacturers.",
    date: "June 2026",
    badgeColor: "bg-blue-50 text-blue-700 border border-blue-200"
  }
];

export default function MarketInsights() {
  return (
    <section id="insights" className="bg-white py-20 md:py-24 border-t border-grey-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-sky font-sans">TRADE INTELLIGENCE</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Live Market Insights & Trends
          </h2>
          <p className="text-base text-navy-muted">
            Real-time trade data, tariff updates, and AI recommendations to navigate UK-EU customs.
          </p>
        </div>

        {/* Intelligence Dashboard layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          
          {/* Left Column: Live Trade Trends */}
          <div className="lg:col-span-7 rounded-2xl border border-grey-border bg-grey-light p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-grey-border/60 pb-4">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-brand-sky" />
                <h3 className="text-lg font-bold text-navy">Country-wise Demand Indices</h3>
              </div>
              <span className="rounded-full bg-white px-2.5 py-0.5 text-[10px] font-bold text-navy-muted border border-grey-border/50 flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                <span>Live Feed</span>
              </span>
            </div>

            <div className="space-y-6">
              {tradeTrends.map((trend, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between items-end text-xs">
                    <div>
                      <h4 className="font-bold text-navy">{trend.product}</h4>
                      <p className="text-[10px] text-navy-muted">Destination: {trend.demand}</p>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-emerald-600 mr-2">{trend.growth}</span>
                      <span className="text-[10px] text-navy-muted font-semibold">({trend.volume})</span>
                    </div>
                  </div>
                  
                  {/* Progress Bar Chart */}
                  <div className="h-2 w-full rounded-full bg-grey-medium overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-brand-sky-accent to-brand-sky transition-all duration-1000"
                      style={{ width: `${trend.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <p className="text-[11px] text-navy-muted italic leading-relaxed">
              Indices calculated using real-time shipment volumes and customs declarations from Eurostat and HMRC UK.
            </p>
          </div>

          {/* Right Column: Import/Export Policy & AI Recommendation */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Policy Updates */}
            <div className="rounded-2xl border border-grey-border bg-grey-light p-6 space-y-4">
              <div className="flex items-center gap-2 border-b border-grey-border/60 pb-3">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
                <h3 className="text-sm font-bold text-navy">Trade & Compliance Alerts</h3>
              </div>
              
              <div className="space-y-4">
                {insights.map((insight, index) => (
                  <div key={index} className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className={`rounded-md px-1.5 py-0.25 text-[8px] font-bold ${insight.badgeColor}`}>
                        {insight.type}
                      </span>
                      <span className="text-[9px] text-navy-muted">{insight.date}</span>
                    </div>
                    <h4 className="text-xs font-bold text-navy">{insight.title}</h4>
                    <p className="text-[11px] text-navy-muted leading-relaxed">{insight.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Sourcing Recommendation Panel */}
            <div className="rounded-2xl border border-brand-sky-accent/20 bg-brand-sky-light/20 p-5 space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-brand-sky" />
                <h3 className="text-sm font-bold text-brand-sky-dark">AI Recommendation Feed</h3>
              </div>
              <p className="text-xs text-navy leading-relaxed">
                "AI Suggests: High demand for sustainable cotton in Portugal for winter supply sourcing. UK buyers shifting to GOTS-certified suppliers in France to bypass compliance auditing queues."
              </p>
              <div className="pt-2 border-t border-brand-sky-accent/20 flex items-center justify-between text-xs">
                <a href="#copilot" className="font-bold text-brand-sky-dark flex items-center gap-1 hover:underline">
                  <span>Consult AI Copilot</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
