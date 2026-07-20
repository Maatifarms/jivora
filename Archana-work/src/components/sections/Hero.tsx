"use client";

import { useState, useEffect } from "react";
import { Sparkles, Play, Search, ArrowRight, ShieldCheck, Cpu, Zap, ChevronDown, Check } from "lucide-react";

const searchExamples = [
  "Find eco-friendly textile manufacturers in Portugal",
  "Find certified organic wine exporters in France",
  "Locate ISO 9001 automotive parts suppliers in Germany",
  "Find FSC-certified sustainable wood workshops in Italy"
];

// Interactive Demo queries and results
const demoScenarios = [
  {
    query: "Find GOTS organic cotton in Portugal",
    thinking: "Matching certifications [GOTS] + fabric [cotton] + region [Portugal]",
    matchingText: "Analyzing 12,000+ European trade registries...",
    suppliers: [
      { name: "LoomCraft Textiles Lda", city: "Porto, Portugal", certs: "GOTS, OEKO-TEX 100", trust: "9.9" },
      { name: "Vilar Tex Factory", city: "Lisbon, Portugal", certs: "GOTS, ISO 9001", trust: "9.7" }
    ]
  },
  {
    query: "Locate ISO 9001 parts in Germany",
    thinking: "Matching requirements [ISO 9001] + category [automotive] + region [Germany]",
    matchingText: "Checking German Chamber of Commerce audit status...",
    suppliers: [
      { name: "SolarGrid Tech GmbH", city: "Munich, Germany", certs: "CE, ISO 9001, ISO 14001", trust: "9.8" },
      { name: "Stuttgart Precision", city: "Stuttgart, Germany", certs: "ISO 9001, VDA 6.3", trust: "9.6" }
    ]
  }
];

export default function Hero() {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [searchVal, setSearchVal] = useState("");
  
  // Interactive demo states
  const [demoIndex, setDemoIndex] = useState(0);
  const [demoState, setDemoState] = useState<"typing" | "searching" | "results" | "card">("typing");
  const [typedText, setTypedText] = useState("");

  // Placeholder rotations
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % searchExamples.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  // Demo state machine
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const scenario = demoScenarios[demoIndex];
    
    if (demoState === "typing") {
      let charIndex = typedText.length;
      if (charIndex < scenario.query.length) {
        timer = setTimeout(() => {
          setTypedText((prev) => prev + scenario.query[charIndex]);
        }, 60);
      } else {
        timer = setTimeout(() => {
          setDemoState("searching");
        }, 1200);
      }
    } else if (demoState === "searching") {
      timer = setTimeout(() => {
        setDemoState("results");
      }, 2000);
    } else if (demoState === "results") {
      timer = setTimeout(() => {
        setDemoState("card");
      }, 1500);
    } else if (demoState === "card") {
      timer = setTimeout(() => {
        // Reset and rotate to next scenario
        setDemoState("typing");
        setTypedText("");
        setDemoIndex((prev) => (prev + 1) % demoScenarios.length);
      }, 5000);
    }

    return () => clearTimeout(timer);
  }, [demoState, typedText, demoIndex]);

  const handleChipClick = (example: string) => {
    setSearchVal(example);
  };

  return (
    <section className="relative overflow-hidden gradient-bg-hero pt-16 pb-24 md:pt-20 md:pb-28">
      {/* Background world map trade route outline - Premium aesthetics */}
      <div className="absolute inset-0 z-0 opacity-15 select-none pointer-events-none">
        <svg className="w-full h-full min-h-[600px]" fill="none" viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg">
          {/* Grids */}
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e2e8f0" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Trade route paths */}
          <path d="M150,450 Q350,150 550,220" stroke="#0ea5e9" strokeWidth="1.5" strokeDasharray="6 6" className="animate-[dash_30s_linear_infinite]" />
          <path d="M550,220 Q750,120 850,320" stroke="#0ea5e9" strokeWidth="1.5" strokeDasharray="6 6" />
          <path d="M150,450 Q500,520 850,320" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 4" />
          
          {/* Trade node pulses */}
          <circle cx="150" cy="450" r="6" fill="#0ea5e9" className="animate-ping opacity-75" />
          <circle cx="150" cy="450" r="4" fill="#0284c7" />
          
          <circle cx="550" cy="220" r="6" fill="#38bdf8" className="animate-ping opacity-75" />
          <circle cx="550" cy="220" r="4" fill="#0ea5e9" />
          
          <circle cx="850" cy="320" r="6" fill="#0ea5e9" className="animate-ping opacity-75" />
          <circle cx="850" cy="320" r="4" fill="#0284c7" />
        </svg>
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Text Column */}
          <div className="space-y-8 lg:col-span-7">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-sky-accent/30 bg-brand-sky-light/40 px-3.5 py-1 text-xs font-semibold text-brand-sky-dark">
              <Sparkles className="h-3.5 w-3.5 text-brand-sky animate-spin-slow" />
              <span>Next-Gen B2B Trade Engine</span>
            </div>

            {/* Value Proposition */}
            <div className="space-y-4">
              <h1 className="font-sans text-4xl font-extrabold tracking-tight text-navy sm:text-5xl md:text-6xl leading-[1.1] max-w-2xl">
                Trade Globally.<br />
                Grow Smarter.<br />
                <span className="gradient-text-sky">Powered by AI.</span>
              </h1>
              <p className="text-lg font-bold text-navy/90 max-w-xl">
                Helping small businesses trade globally with confidence.
              </p>
              <p className="text-sm sm:text-base text-navy-muted max-w-xl leading-relaxed">
                Connect directly with pre-vetted manufacturers and exporters across the UK and Europe. Remove trade complexity with integrated compliance checks and automated RFQ creation.
              </p>
            </div>

            {/* Buyer & Supplier Entry Points (CTA Right Below Hero Text) */}
            <div className="flex flex-wrap items-center gap-4">
              <a href="#cta" className="rounded-xl bg-navy px-6 py-3.5 text-base font-semibold text-white hover:bg-navy-light transition-all shadow-md hover:-translate-y-0.5">
                I'm a Buyer
              </a>
              <a href="#cta" className="rounded-xl border border-grey-border bg-white px-6 py-3.5 text-base font-semibold text-navy hover:bg-grey-medium transition-all shadow-sm hover:-translate-y-0.5">
                I'm a Supplier
              </a>
              <button className="inline-flex items-center gap-2 rounded-xl px-4 py-3 text-base font-semibold text-navy/80 hover:text-navy transition-colors">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md border border-grey-border hover:scale-105 transition-all text-brand-sky">
                  <Play className="h-3.5 w-3.5 fill-current ml-0.5" />
                </span>
                <span className="text-sm font-bold">Watch Demo</span>
              </button>
            </div>

            {/* AI Search Bar */}
            <div className="space-y-3 max-w-2xl border-t border-grey-border/50 pt-6">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const q = searchVal || searchExamples[placeholderIndex];
                  window.location.href = `/search?q=${encodeURIComponent(q)}`;
                }}
                className="relative flex items-center rounded-2xl border border-grey-border bg-white p-2 shadow-lg focus-within:border-brand-sky focus-within:ring-2 focus-within:ring-brand-sky-light transition-all"
              >
                <Search className="ml-3 h-5 w-5 text-navy-muted" />
                <input
                  type="text"
                  value={searchVal}
                  onChange={(e) => setSearchVal(e.target.value)}
                  placeholder={`Try: "${searchExamples[placeholderIndex]}"`}
                  className="w-full bg-transparent px-3 py-3 text-sm text-navy placeholder-navy-muted outline-none sm:text-base"
                />
                <button type="submit" className="flex items-center gap-1.5 rounded-xl bg-brand-sky px-4 py-2.5 text-sm font-bold text-white hover:bg-brand-sky-dark transition-colors shadow-sm">
                  <Sparkles className="h-4 w-4" />
                  <span>✨ Ask Jivora AI</span>
                </button>
              </form>

              {/* Natural Language Example Chips */}
              <div className="flex flex-wrap gap-2 pt-1">
                {searchExamples.map((example, i) => (
                  <button
                    key={i}
                    onClick={() => handleChipClick(example)}
                    className="rounded-full border border-grey-border bg-white/60 px-3 py-1 text-xs font-medium text-navy/70 hover:border-brand-sky hover:bg-white hover:text-brand-sky transition-all cursor-pointer"
                  >
                    {example}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Interactive AI Demo Panel */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-brand-sky-accent to-brand-sky opacity-20 blur-xl"></div>
            <div className="relative rounded-2xl border border-navy-border/10 bg-navy-dark p-6 text-white shadow-2xl overflow-hidden min-h-[380px] flex flex-col justify-between transition-all duration-500">
              
              {/* Card top headers */}
              <div className="flex items-center justify-between border-b border-navy-border/40 pb-4">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-rose-500"></span>
                  <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                  <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                  <span className="ml-2 font-mono text-[10px] tracking-wider text-navy-muted uppercase font-bold">JIVORA TRADE AGENT v1.1</span>
                </div>
                <span className="rounded bg-brand-sky/20 px-2 py-0.5 font-mono text-[9px] font-bold text-brand-sky-accent">ACTIVE SIMULATOR</span>
              </div>

              {/* Dynamic typing and execution stage */}
              <div className="my-6 space-y-4 flex-grow font-mono text-xs leading-relaxed text-slate-300">
                
                {/* 1. Typing stage */}
                <div className="flex gap-2 items-start">
                  <span className="text-brand-sky-accent font-bold">&gt;</span>
                  <div>
                    <span className="text-navy-muted">Query: </span>
                    <span className="text-white font-bold">"{typedText}"</span>
                    {demoState === "typing" && <span className="inline-block w-1.5 h-3.5 bg-brand-sky ml-0.5 animate-pulse"></span>}
                  </div>
                </div>

                {/* 2. Searching stage */}
                {(demoState === "searching" || demoState === "results" || demoState === "card") && (
                  <div className="flex gap-2 items-start pl-4 animate-pulse">
                    <Cpu className="h-4.5 w-4.5 text-brand-sky-accent flex-shrink-0 mt-0.5" />
                    <span className="text-slate-400">{demoScenarios[demoIndex].matchingText}</span>
                  </div>
                )}

                {/* 3. Results stage */}
                {(demoState === "results" || demoState === "card") && (
                  <div className="flex gap-2 items-start pl-4 text-emerald-400">
                    <Check className="h-4.5 w-4.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Found: <strong className="text-white font-semibold">{demoScenarios[demoIndex].suppliers.length} vetted factories</strong> matching parameters</span>
                  </div>
                )}
              </div>

              {/* 4. Rich Supplier Card Mockup revealed at final stage */}
              <div className={`transition-all duration-500 transform ${demoState === "card" ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95 pointer-events-none"} rounded-xl border border-navy-border/50 bg-navy p-4 space-y-3`}>
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-white">{demoScenarios[demoIndex].suppliers[0]?.name}</h4>
                    <p className="text-[10px] text-navy-muted">{demoScenarios[demoIndex].suppliers[0]?.city}</p>
                  </div>
                  <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-[9px] font-bold text-emerald-400 border border-emerald-500/20">
                    Trust: {demoScenarios[demoIndex].suppliers[0]?.trust}/10
                  </span>
                </div>
                
                <div className="flex items-center justify-between text-[9px] text-slate-400">
                  <span>Certs: {demoScenarios[demoIndex].suppliers[0]?.certs}</span>
                  <span className="flex items-center gap-0.5 font-bold text-brand-sky-accent hover:underline cursor-pointer">
                    <span>Contact Supplier</span>
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Scroll Indicator (Subtle bottom marker) */}
        <div className="flex flex-col items-center justify-center pt-16 text-navy-muted animate-bounce select-none">
          <span className="text-[10px] font-bold uppercase tracking-widest mb-1.5">Discover More</span>
          <ChevronDown className="h-4 w-4 text-navy-muted" />
        </div>

      </div>
    </section>
  );
}
