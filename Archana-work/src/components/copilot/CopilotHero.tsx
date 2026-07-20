"use client";

import { useState } from "react";
import { Sparkles, Mic, Send, ChevronRight, HelpCircle } from "lucide-react";
import Link from "next/link";

interface HeroProps {
  input: string;
  setInput: (val: string) => void;
  onSend: (text?: string) => void;
}

export default function CopilotHero({ input, setInput, onSend }: HeroProps) {
  const [isListening, setIsListening] = useState(false);

  const promptChips = [
    "Find organic cotton suppliers in Portugal",
    "Compare verified textile manufacturers",
    "Explain FOB vs CIF Incoterms",
    "Generate an RFQ for GOTS fabric",
    "Find UK import requirements for 2026"
  ];

  const handleVoice = () => {
    setIsListening(true);
    setTimeout(() => {
      onSend("Explain UK import customs accords for European suppliers");
      setIsListening(false);
    }, 2000);
  };

  return (
    <div className="space-y-6 pt-4">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-1.5 text-xs text-navy-muted font-semibold">
        <Link href="/" className="hover:text-navy transition-colors">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-navy font-bold">AI Copilot</span>
      </div>

      {/* Hero Banner */}
      <div className="relative rounded-3xl border border-brand-sky-accent/30 bg-gradient-to-br from-navy via-navy-light to-slate-900 p-6 sm:p-10 text-white space-y-6 shadow-2xl overflow-hidden">
        {/* Glow */}
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-brand-sky opacity-20 blur-3xl"></div>

        <div className="space-y-3 max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold text-brand-sky-accent backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-brand-sky-accent" />
            <span>AI Sourcing Operating System • Version 2.0</span>
          </div>

          <h1 className="text-3xl font-extrabold sm:text-5xl tracking-tight leading-tight">
            Meet JIVORA AI Copilot
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Your 24/7 intelligent trade assistant for European supplier discovery, factory audit scores, customs clearance guidance, and automated RFQ creation.
          </p>
        </div>

        {/* Chat Input Box */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSend();
          }}
          className="relative flex items-center max-w-3xl pt-2 z-10"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask AI Copilot e.g., 'Draft an RFQ for 1,000m GOTS linen from Portugal'..."
            className="w-full rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md py-4 pl-5 pr-28 text-xs sm:text-sm text-white placeholder-slate-400 outline-none focus:border-brand-sky focus:ring-2 focus:ring-brand-sky/30 shadow-lg"
          />

          <div className="absolute right-2.5 flex items-center gap-2">
            <button
              type="button"
              onClick={handleVoice}
              title="Voice Input"
              className={`p-2 rounded-xl transition-all ${
                isListening ? "bg-rose-500 text-white animate-pulse" : "bg-white/10 text-slate-300 hover:text-white hover:bg-white/20"
              }`}
            >
              <Mic className="h-4 w-4" />
            </button>

            <button
              type="submit"
              className="flex items-center gap-1.5 rounded-xl bg-brand-sky px-4 py-2.5 text-xs font-bold text-white hover:bg-brand-sky-dark transition-all shadow-md"
            >
              <span>Ask</span>
              <Send className="h-3.5 w-3.5" />
            </button>
          </div>
        </form>

        {isListening && (
          <p className="text-xs text-rose-400 font-bold animate-pulse z-10 relative">
            🎙️ Listening... Speak your sourcing inquiry.
          </p>
        )}

        {/* Suggested Prompts */}
        <div className="space-y-2 pt-2 text-xs relative z-10">
          <span className="text-slate-300 font-bold flex items-center gap-1">
            <Sparkles className="h-3.5 w-3.5 text-brand-sky-accent" />
            <span>Suggested Prompts:</span>
          </span>
          <div className="flex flex-wrap gap-2">
            {promptChips.map((chip, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => onSend(chip)}
                className="rounded-xl bg-white/10 border border-white/15 px-3 py-1.5 text-[11px] font-bold text-slate-200 hover:bg-white/20 hover:text-white transition-all backdrop-blur-sm"
              >
                ✨ {chip}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
