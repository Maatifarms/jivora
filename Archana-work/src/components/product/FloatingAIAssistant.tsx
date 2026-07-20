"use client";

import { useState } from "react";
import { Sparkles, X, MessageSquare } from "lucide-react";

interface AssistantProps {
  productName: string;
}

export default function FloatingAIAssistant({ productName }: AssistantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const options = [
    { id: "understand", label: "Help me understand this product" },
    { id: "compliance", label: "Check EU/UK compliance" },
    { id: "shipping", label: "Estimate UK shipping cost" },
    { id: "alternatives", label: "Find cheaper alternatives" }
  ];

  const getAnswer = () => {
    switch (activeTab) {
      case "understand":
        return `This ${productName} line is a premium wholesale product certified for zero-tariff import into the UK and EU. Key advantages: GOTS organic status, fast 7-14 day lead times, and low MOQs starting at 100 units.`;
      case "compliance":
        return `Compliance Status: 100% Verified. Carries valid CE certification, GOTS organic audit (GOTS-EU-2026), and ISO 9001 quality standards. Pre-cleared for HMRC UK import.`;
      case "shipping":
        return `Estimated Freight to London/Felixstowe: Sea Freight (~12 days, ~£120/pallet) or Air Freight (~3 days, ~£420/pallet). Incoterms available: FOB, CIF, DDP.`;
      case "alternatives":
        return `Jivora AI found 3 alternative factories offering similar specs in Portugal and Italy with starting prices from £6.90/unit. Check the Alternative Suppliers grid below!`;
      default:
        return `How can Jivora AI help you evaluate ${productName}?`;
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2.5 rounded-full bg-navy px-5 py-3.5 text-white shadow-2xl hover:scale-105 hover:bg-navy-light transition-all border border-brand-sky-accent/30"
        >
          <Sparkles className="h-4.5 w-4.5 text-brand-sky-accent animate-pulse" />
          <span className="text-xs font-extrabold">Ask AI about this product</span>
        </button>
      )}

      {isOpen && (
        <div className="w-80 rounded-2xl border border-grey-border bg-white shadow-2xl p-4 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="flex items-center justify-between border-b border-grey-border/50 pb-3">
            <div className="flex items-center gap-1.5">
              <Sparkles className="h-4.5 w-4.5 text-brand-sky" />
              <span className="text-xs font-extrabold text-navy uppercase tracking-wider">Product Copilot</span>
            </div>
            <button onClick={() => { setIsOpen(false); setActiveTab(null); }} className="p-1 rounded-full hover:bg-grey-medium">
              <X className="h-4 w-4 text-navy-muted" />
            </button>
          </div>

          <div className="rounded-xl bg-grey-light p-3 border border-grey-border/40 text-[11px] text-navy">
            <p className="leading-relaxed">{getAnswer()}</p>
            {activeTab && (
              <button onClick={() => setActiveTab(null)} className="mt-2 text-[9px] font-bold text-brand-sky-dark hover:underline">
                &larr; Ask another question
              </button>
            )}
          </div>

          {!activeTab && (
            <div className="space-y-1.5">
              {options.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setActiveTab(opt.id)}
                  className="w-full p-2 rounded-lg border border-grey-border hover:border-brand-sky text-[10px] font-bold text-navy text-left transition-colors flex items-center justify-between"
                >
                  <span>{opt.label}</span>
                  <Sparkles className="h-3 w-3 text-brand-sky" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
