"use client";

import { useState } from "react";
import { Sparkles, X, MessageSquare, ArrowRight, HelpCircle } from "lucide-react";

export default function CategoryAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeQuery, setActiveQuery] = useState<string | null>(null);

  const options = [
    { id: "custom", label: "Custom Manufacturing" },
    { id: "cert", label: "GOTS/CE Certifications" },
    { id: "moq", label: "Low MOQ Categories" },
    { id: "uk", label: "UK Import Demand" }
  ];

  const getResponse = () => {
    switch (activeQuery) {
      case "custom":
        return "Jivora AI can route custom production requests (e.g. CNC metal parts or bespoke textile weaves) directly to verified European factories with active capacity.";
      case "cert":
        return "Looking for certified suppliers? Categories like Sustainable Textiles, Bio-packaging, and Solar Hardware feature 100% audited GOTS, FSC, and CE certification badges.";
      case "moq":
        return "Small business? Browse Categories like Eco Toys, Sustainable Textiles, or Apparel where suppliers offer low MOQs starting from 100 units.";
      case "uk":
        return "Top categories currently imported into the UK with 0% tariff accord status: Sustainable Cotton Textiles, FSC Wood Packaging, and Bio-medical Devices.";
      default:
        return "Need help choosing a category? Ask Jivora AI for real-time recommendations.";
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2.5 rounded-full bg-navy px-5 py-3.5 text-white shadow-2xl hover:scale-105 hover:bg-navy-light transition-all border border-brand-sky-accent/30"
        >
          <Sparkles className="h-4.5 w-4.5 text-brand-sky-accent" />
          <span className="text-xs font-extrabold">Need help choosing a category? Ask Jivora AI</span>
        </button>
      )}

      {isOpen && (
        <div className="w-80 rounded-2xl border border-grey-border bg-white shadow-2xl p-4 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="flex items-center justify-between border-b border-grey-border/50 pb-3">
            <div className="flex items-center gap-1.5">
              <Sparkles className="h-4.5 w-4.5 text-brand-sky" />
              <span className="text-xs font-extrabold text-navy uppercase tracking-wider">Category Assistant</span>
            </div>
            <button onClick={() => { setIsOpen(false); setActiveQuery(null); }} className="p-1 rounded-full hover:bg-grey-medium">
              <X className="h-4 w-4 text-navy-muted" />
            </button>
          </div>

          <div className="rounded-xl bg-grey-light p-3 border border-grey-border/40 text-[11px] text-navy">
            <p className="leading-relaxed">{getResponse()}</p>
            {activeQuery && (
              <button onClick={() => setActiveQuery(null)} className="mt-2 text-[9px] font-bold text-brand-sky-dark hover:underline">
                &larr; View all questions
              </button>
            )}
          </div>

          {!activeQuery && (
            <div className="grid grid-cols-2 gap-1.5">
              {options.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setActiveQuery(opt.id)}
                  className="p-2 rounded-lg border border-grey-border hover:border-brand-sky text-[10px] font-bold text-navy text-left transition-colors"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
