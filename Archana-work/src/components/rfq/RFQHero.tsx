"use client";

import { Sparkles, ChevronRight, Check } from "lucide-react";
import Link from "next/link";

interface HeroProps {
  currentStep: number;
  onStepClick: (step: number) => void;
  onAiOptimize: () => void;
}

export default function RFQHero({ currentStep, onStepClick, onAiOptimize }: HeroProps) {
  const steps = [
    { num: 1, label: "Product & Requirements" },
    { num: 2, label: "Technical Specs" },
    { num: 3, label: "Shipping & Trade Terms" },
    { num: 4, label: "Review & Submit" },
  ];

  return (
    <div className="space-y-6 pt-4">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-xs text-navy-muted font-semibold">
        <Link href="/" className="hover:text-navy transition-colors">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <Link href="/marketplace" className="hover:text-navy transition-colors">Marketplace</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-navy font-bold">Request a Quote (RFQ)</span>
      </div>

      {/* Hero Title & AI CTA */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-grey-border/50 pb-6">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-sky-accent/30 bg-brand-sky-light/40 px-3.5 py-1 text-xs font-semibold text-brand-sky-dark">
            <Sparkles className="h-3.5 w-3.5 text-brand-sky" />
            <span>AI-Guided Sourcing</span>
          </div>
          <h1 className="text-3xl font-extrabold text-navy sm:text-4xl tracking-tight">Request a Quote</h1>
          <p className="text-sm text-navy-muted max-w-xl">
            Get competitive, verifiable quotations from audited factories across the UK and Europe.
          </p>
        </div>

        <button 
          onClick={onAiOptimize}
          className="flex items-center gap-2 rounded-xl bg-brand-sky px-5 py-3 text-xs font-bold text-white hover:bg-brand-sky-dark transition-all shadow-md self-start md:self-auto"
        >
          <Sparkles className="h-4 w-4" />
          <span>✨ Auto-Optimize with Jivora AI</span>
        </button>
      </div>

      {/* Progress Step Indicator Bar */}
      <div className="rounded-2xl border border-grey-border bg-grey-light p-4 card-shadow-premium">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {steps.map((s) => {
            const isDone = currentStep > s.num;
            const isCurrent = currentStep === s.num;
            return (
              <button
                key={s.num}
                onClick={() => onStepClick(s.num)}
                className={`flex items-center gap-3 p-2.5 rounded-xl border text-left transition-all ${
                  isCurrent
                    ? "bg-navy text-white border-navy shadow-sm"
                    : isDone
                    ? "bg-white text-navy border-emerald-300"
                    : "bg-white/60 text-navy-muted border-grey-border/50 hover:bg-white"
                }`}
              >
                <div className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${
                  isCurrent
                    ? "bg-brand-sky text-white"
                    : isDone
                    ? "bg-emerald-500 text-white"
                    : "bg-grey-medium text-navy-muted"
                }`}>
                  {isDone ? <Check className="h-3.5 w-3.5" /> : s.num}
                </div>
                <div className="text-xs font-bold truncate">{s.label}</div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
