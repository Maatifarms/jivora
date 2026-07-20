"use client";

import { useState } from "react";
import { Sparkles, MessageSquare, X, Send, Compass, Calculator, FileText, CheckCircle2 } from "lucide-react";

export default function TradeAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeQuery, setActiveQuery] = useState<string | null>(null);

  const queryOptions = [
    { id: "uk", label: "Export to UK Guide", icon: Compass },
    { id: "docs", label: "Import Documentation", icon: FileText },
    { id: "shipping", label: "Shipping Cost Estimate", icon: Calculator },
    { id: "tax", label: "Taxes & VAT Rules", icon: CheckCircle2 }
  ];

  const getSimulatedResponse = () => {
    switch (activeQuery) {
      case "uk":
        return "To export from the EU to the UK: (1) Ensure your supplier has a valid EORI number. (2) Provide complete customs declaration details. (3) If importing textile/food items, check safety certificate thresholds under HMRC standards. Jivora pre-vetting takes care of EORI registries automatically.";
      case "docs":
        return "Standard UK-EU B2B documentation includes: Commercial Invoice, Packing List, Certificate of Origin (for tariff exemptions), and GOTS/FSC compliance certificates where applicable. You can generate these instantly in JIVORA's AI RFQ suite.";
      case "shipping":
        return "Estimated sea freight Portugal -> UK ranges between €1,200 - €1,800 per container. Road transit (Lisbon -> London Gateway) takes 4 days, averaging €2,100 per truckload. AI shipping router offset matches can offset carbon footprints up to 100%.";
      case "tax":
        return "UK-EU Trade Accord grants 0% tariffs if goods satisfy the rules of origin (e.g. processed/manufactured in the exporter country). Standard UK Import VAT of 20% applies, but can be deferred using Postponed VAT Accounting (PVA) at checkout.";
      default:
        return "Select a trade topic below to receive instant guidance from Jivora AI.";
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* Floating Action Button (FAB) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-navy text-white shadow-2xl hover:scale-105 hover:bg-navy-light transition-all animate-pulse-slow border border-brand-sky-accent/20"
        >
          <MessageSquare className="h-6 w-6 text-brand-sky-accent" />
        </button>
      )}

      {/* Conversational Assistant Card */}
      {isOpen && (
        <div className="w-80 rounded-2xl border border-grey-border bg-white shadow-2xl p-4 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-grey-border/50 pb-3">
            <div className="flex items-center gap-1.5">
              <Sparkles className="h-4.5 w-4.5 text-brand-sky" />
              <span className="text-xs font-extrabold text-navy uppercase tracking-wider">Jivora Sourcing Copilot</span>
            </div>
            <button 
              onClick={() => { setIsOpen(false); setActiveQuery(null); }}
              className="p-1 rounded-full hover:bg-grey-medium transition-colors"
            >
              <X className="h-4 w-4 text-navy-muted" />
            </button>
          </div>

          {/* Chat bubble body */}
          <div className="rounded-xl bg-grey-light p-3 border border-grey-border/40 text-[11px] text-navy min-h-[100px] flex flex-col justify-between">
            <p className="leading-relaxed">{getSimulatedResponse()}</p>
            {activeQuery && (
              <button 
                onClick={() => setActiveQuery(null)}
                className="mt-3 text-[9px] font-bold text-brand-sky-dark hover:underline text-left self-start"
              >
                &larr; Choose another topic
              </button>
            )}
          </div>

          {/* Quick choices grid */}
          {!activeQuery && (
            <div className="grid grid-cols-2 gap-2">
              {queryOptions.map((opt) => {
                const Icon = opt.icon;
                return (
                  <button
                    key={opt.id}
                    onClick={() => setActiveQuery(opt.id)}
                    className="flex flex-col items-center justify-center p-2 rounded-lg border border-grey-border hover:border-brand-sky hover:bg-brand-sky-light/10 text-center gap-1.5 transition-all"
                  >
                    <Icon className="h-4 w-4 text-brand-sky" />
                    <span className="text-[9px] font-bold text-navy">{opt.label}</span>
                  </button>
                );
              })}
            </div>
          )}

          {/* Disclaimer */}
          <div className="text-[9px] text-navy-muted leading-tight border-t border-grey-border/40 pt-2 text-center">
            Guidance based on HMRC UK & European Union customs rules as of July 2026.
          </div>

        </div>
      )}

    </div>
  );
}
