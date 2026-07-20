"use client";

import { useState } from "react";
import { Sparkles, Search, FileText, CheckCircle2, ShieldCheck, Ship, MessageSquare, ArrowRight, RefreshCw } from "lucide-react";

export default function AICopilot() {
  const [activeTab, setActiveTab] = useState("suppliers");
  const [rfqInput, setRfqInput] = useState({ product: "Bio-degradable PLA Cups", qty: "50,000", terms: "FOB Lisbon" });
  const [rfqGenerated, setRfqGenerated] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "suppliers":
        return (
          <div className="space-y-4">
            <div className="rounded-xl border border-navy-border/30 bg-navy p-3 text-xs flex items-center justify-between">
              <span className="text-slate-300">Prompt: "Find certified recyclable box suppliers in Italy with ISO 9001"</span>
              <span className="rounded bg-brand-sky/20 px-2 py-0.5 font-bold text-brand-sky-accent">Active</span>
            </div>
            
            <div className="space-y-2">
              <div className="rounded-xl border border-grey-border/50 bg-white p-3 flex items-center justify-between text-navy">
                <div>
                  <h4 className="text-xs font-bold">Imballaggi Bio S.r.l.</h4>
                  <p className="text-[10px] text-navy-muted">Milan, Italy • ISO 9001 & FSC Certified</p>
                </div>
                <div className="text-right">
                  <span className="rounded bg-emerald-50 px-2 py-0.5 text-[9px] font-bold text-emerald-700">9.9 Trust</span>
                </div>
              </div>
              <div className="rounded-xl border border-grey-border/50 bg-white p-3 flex items-center justify-between text-navy">
                <div>
                  <h4 className="text-xs font-bold">Cartonbox Venice SpA</h4>
                  <p className="text-[10px] text-navy-muted">Venice, Italy • ISO 9001 & CE Compliant</p>
                </div>
                <div className="text-right">
                  <span className="rounded bg-emerald-50 px-2 py-0.5 text-[9px] font-bold text-emerald-700">9.7 Trust</span>
                </div>
              </div>
            </div>
            <p className="text-[11px] text-navy-muted">AI matched 2 suppliers out of 1,200 Italian packaging firms based on certifications.</p>
          </div>
        );
      
      case "rfq":
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-2">
              <div>
                <label className="text-[9px] font-bold uppercase text-navy-muted">Product</label>
                <input 
                  type="text" 
                  value={rfqInput.product} 
                  onChange={(e) => setRfqInput({...rfqInput, product: e.target.value})}
                  className="w-full rounded border border-grey-border bg-white px-2 py-1 text-[11px] text-navy outline-none"
                />
              </div>
              <div>
                <label className="text-[9px] font-bold uppercase text-navy-muted">Quantity</label>
                <input 
                  type="text" 
                  value={rfqInput.qty} 
                  onChange={(e) => setRfqInput({...rfqInput, qty: e.target.value})}
                  className="w-full rounded border border-grey-border bg-white px-2 py-1 text-[11px] text-navy outline-none"
                />
              </div>
              <div>
                <label className="text-[9px] font-bold uppercase text-navy-muted">Incoterms</label>
                <input 
                  type="text" 
                  value={rfqInput.terms} 
                  onChange={(e) => setRfqInput({...rfqInput, terms: e.target.value})}
                  className="w-full rounded border border-grey-border bg-white px-2 py-1 text-[11px] text-navy outline-none"
                />
              </div>
            </div>

            <button 
              onClick={() => setRfqGenerated(true)}
              className="w-full flex items-center justify-center gap-1.5 rounded-lg bg-navy py-2 text-xs font-semibold text-white hover:bg-navy-light transition-colors"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>Generate B2B RFQ Draft</span>
            </button>

            {rfqGenerated && (
              <div className="rounded-xl border border-brand-sky-accent/20 bg-brand-sky-light/20 p-3 font-mono text-[10px] text-navy leading-relaxed">
                <div className="font-bold border-b border-brand-sky-accent/20 pb-1.5 mb-1.5">JIVORA GENERATED RFQ: #RFQ-88219</div>
                <strong>Request:</strong> Sourcing {rfqInput.product}<br />
                <strong>Target Qty:</strong> {rfqInput.qty} units | <strong>Terms:</strong> {rfqInput.terms}<br />
                <strong>Specifications:</strong> EU REACH directive compliance required. Certificates GOTS/FSC preferred. Target Delivery: UK ports.
              </div>
            )}
          </div>
        );

      case "compliance":
        return (
          <div className="space-y-4">
            <div className="rounded-xl bg-grey-light border border-grey-border p-3 space-y-3">
              <div className="flex items-center justify-between border-b border-grey-border/50 pb-2">
                <span className="text-xs font-bold text-navy">Category: Sustainable Textiles (Import to UK)</span>
                <span className="rounded bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[9px] font-bold text-emerald-700">Checked</span>
              </div>
              
              <ul className="space-y-2 text-[11px] text-navy">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span><strong>GOTS Standard:</strong> Valid certificate matching consignee required for duty-exempt import status.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span><strong>UK REACH:</strong> Chemicals used in processing dye comply with safety thresholds.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span><strong>VAT:</strong> Postponed VAT accounting applicable for registered UK importers.</span>
                </li>
              </ul>
            </div>
            <p className="text-[11px] text-navy-muted">Compliance engine checks real-time database updates for UK HMRC & European Union trade codes.</p>
          </div>
        );

      case "shipping":
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="space-y-2">
                <div className="border border-grey-border bg-grey-light rounded-lg p-2.5">
                  <div className="text-[9px] uppercase font-bold text-navy-muted">From Route</div>
                  <div className="font-bold text-navy">Porto, Portugal (SME Hub)</div>
                </div>
                <div className="border border-grey-border bg-grey-light rounded-lg p-2.5">
                  <div className="text-[9px] uppercase font-bold text-navy-muted">To Route</div>
                  <div className="font-bold text-navy">London Gateway, UK</div>
                </div>
              </div>

              <div className="border border-grey-border bg-grey-light rounded-lg p-2.5 flex flex-col justify-between">
                <div>
                  <div className="text-[9px] uppercase font-bold text-navy-muted">Customs & Duty Estimate</div>
                  <div className="text-lg font-extrabold text-navy">£420.00 <span className="text-[10px] font-semibold text-navy-muted">VAT excl.</span></div>
                </div>
                <div className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                  <Ship className="h-3.5 w-3.5" />
                  <span>Est. Time: 4 days (Road + Ferry)</span>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-2.5 flex items-center justify-between text-[11px] text-emerald-800">
              <span className="font-semibold">🌿 Carbon Footprint Offset: 240kg CO2</span>
              <span className="rounded bg-emerald-600 px-2 py-0.5 text-[9px] font-bold text-white uppercase">Offset Active</span>
            </div>
          </div>
        );

      case "qa":
        return (
          <div className="space-y-4">
            <div className="space-y-2.5 max-h-[180px] overflow-y-auto pr-1">
              <div className="rounded-lg bg-grey-medium p-2.5 text-xs text-navy max-w-[85%] self-start">
                "What is the EU tariff rate for importing recycled organic yarn?"
              </div>
              <div className="rounded-lg bg-brand-sky-light/50 border border-brand-sky-accent/20 p-2.5 text-xs text-navy max-w-[90%] ml-auto flex items-start gap-2">
                <Sparkles className="h-3.5 w-3.5 text-brand-sky flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Under the UK-EU Trade Accord, recycled organic yarn (HS Code 5205.11) enters tariff-free (0% duty) if origin rules are satisfied. Normal UK import VAT (20%) applies.
                </p>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section id="copilot" className="bg-navy-dark py-20 md:py-24 text-white relative overflow-hidden">
      {/* Subtle overlay gradients */}
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-brand-sky opacity-10 blur-3xl"></div>
      <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-indigo-500 opacity-5 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Text Grid */}
          <div className="space-y-8 lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-sky-accent/30 bg-brand-sky/10 px-3.5 py-1 text-xs font-bold text-brand-sky-accent">
              <Sparkles className="h-3.5 w-3.5" />
              <span>PLATFORM UNIQUE SELLING POINT (USP)</span>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Your AI Trade Copilot
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                B2B trade across borders used to require customs brokers, translator bureaus, and weeks of compliance checks. Jivora's Copilot automates these steps in real-time, helping you draft, check, and source in seconds.
              </p>
            </div>

            <ul className="space-y-3.5">
              <li className="flex items-center gap-3 text-sm text-slate-300">
                <CheckCircle2 className="h-5 w-5 text-brand-sky-accent" />
                <span>Automated compliance checks against UK HMRC & EU custom directives</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-300">
                <CheckCircle2 className="h-5 w-5 text-brand-sky-accent" />
                <span>Instant drafting of industry-compliant, technically detailed B2B RFQs</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-300">
                <CheckCircle2 className="h-5 w-5 text-brand-sky-accent" />
                <span>Real-time duty, tariff, and shipping carbon offset estimates</span>
              </li>
            </ul>
          </div>

          {/* Right Interactive Card Panel */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-navy-border/40 bg-navy p-6 shadow-2xl space-y-6">
              
              {/* Tab Selector Buttons */}
              <div className="grid grid-cols-3 gap-1 md:grid-cols-5 bg-navy-dark rounded-xl p-1">
                <button
                  onClick={() => { setActiveTab("suppliers"); setRfqGenerated(false); }}
                  className={`rounded-lg py-2 text-[10px] font-bold uppercase tracking-wider transition-all ${activeTab === "suppliers" ? "bg-navy text-white" : "text-slate-400 hover:text-white"}`}
                >
                  Find
                </button>
                <button
                  onClick={() => { setActiveTab("rfq"); setRfqGenerated(false); }}
                  className={`rounded-lg py-2 text-[10px] font-bold uppercase tracking-wider transition-all ${activeTab === "rfq" ? "bg-navy text-white" : "text-slate-400 hover:text-white"}`}
                >
                  RFQ
                </button>
                <button
                  onClick={() => { setActiveTab("compliance"); setRfqGenerated(false); }}
                  className={`rounded-lg py-2 text-[10px] font-bold uppercase tracking-wider transition-all ${activeTab === "compliance" ? "bg-navy text-white" : "text-slate-400 hover:text-white"}`}
                >
                  Comply
                </button>
                <button
                  onClick={() => { setActiveTab("shipping"); setRfqGenerated(false); }}
                  className={`rounded-lg py-2 text-[10px] font-bold uppercase tracking-wider transition-all ${activeTab === "shipping" ? "bg-navy text-white" : "text-slate-400 hover:text-white"}`}
                >
                  Ship
                </button>
                <button
                  onClick={() => { setActiveTab("qa"); setRfqGenerated(false); }}
                  className={`rounded-lg py-2 text-[10px] font-bold uppercase tracking-wider transition-all ${activeTab === "qa" ? "bg-navy text-white" : "text-slate-400 hover:text-white"}`}
                >
                  Ask
                </button>
              </div>

              {/* Dynamic Tab Body Container */}
              <div className="rounded-xl border border-navy-border/40 bg-navy-dark p-5 min-h-[220px] flex flex-col justify-between">
                {renderTabContent()}
              </div>

              {/* Console Status */}
              <div className="flex items-center justify-between text-[10px] font-semibold text-slate-400">
                <span className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                  <span>Active Customs API Connections</span>
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="h-3.5 w-3.5 text-brand-sky-accent" />
                  <span>Sourcing Secured</span>
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
