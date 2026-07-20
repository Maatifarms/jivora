"use client";

import { useState } from "react";
import { Sparkles, Send, Bot, User, Check, RefreshCw } from "lucide-react";

interface Message {
  sender: "ai" | "user";
  text: string;
}

export default function AISupportAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "ai",
      text: "Hello! I am Jivora AI Support Assistant. Ask me anything about UK-EU trade, supplier verification, HMRC customs, Incoterms, or RFQ preparation."
    }
  ]);
  const [input, setInput] = useState("");

  const promptChips = [
    "Explain Incoterms (FOB vs DDP)",
    "Help me import into UK",
    "Help me export to EU",
    "Find verified suppliers",
    "Estimate shipping costs",
    "Product compliance check"
  ];

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    // Append user message
    const newMessages: Message[] = [...messages, { sender: "user", text: query }];
    setMessages(newMessages);
    setInput("");

    // Simulated AI response
    setTimeout(() => {
      let aiReply = "Jivora AI has analyzed your inquiry against current UK-EU customs accords. Every supplier on Jivora is pre-audited for GOTS, ISO 9001, and HMRC clearance.";
      if (query.includes("Incoterms")) {
        aiReply = "FOB (Free on Board) means the supplier pays origin port fees; buyer handles ocean freight. DDP (Delivered Duty Paid) means door-to-door delivery with pre-cleared UK customs.";
      } else if (query.includes("import")) {
        aiReply = "To import into the UK: 1) Ensure supplier has HMRC registration. 2) Request GOTS/CE certificates. 3) Choose DDP terms for zero border hassle.";
      } else if (query.includes("export")) {
        aiReply = "To export to the EU: Ensure products comply with EU PPWR plastic-free packaging directives and possess verified ISO 9001 certifications.";
      }

      setMessages((prev) => [...prev, { sender: "ai", text: aiReply }]);
    }, 600);
  };

  return (
    <div className="rounded-3xl border border-brand-sky-accent/30 bg-gradient-to-br from-navy via-navy-light to-slate-900 p-6 sm:p-8 text-white space-y-6 shadow-2xl relative overflow-hidden">
      {/* Glow */}
      <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-brand-sky opacity-10 blur-3xl"></div>

      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-sky text-white shadow-md">
            <Bot className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-extrabold tracking-tight">AI Support Assistant</h3>
            <p className="text-xs text-slate-300">Instant automated answers for B2B sourcing & compliance.</p>
          </div>
        </div>
        <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-400 border border-emerald-500/30">
          🟢 Online 24/7
        </span>
      </div>

      {/* Chat Messages Box */}
      <div className="h-64 overflow-y-auto space-y-3 p-4 rounded-2xl bg-white/5 border border-white/10 text-xs">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`flex items-start gap-2.5 ${m.sender === "user" ? "flex-row-reverse" : ""}`}
          >
            <div className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold flex-shrink-0 ${
              m.sender === "user" ? "bg-brand-sky text-white" : "bg-white/10 text-brand-sky-accent"
            }`}>
              {m.sender === "user" ? <User className="h-3.5 w-3.5" /> : <Sparkles className="h-3.5 w-3.5" />}
            </div>
            <div className={`rounded-2xl p-3 max-w-lg leading-relaxed ${
              m.sender === "user" ? "bg-brand-sky text-white" : "bg-white/10 text-slate-200 border border-white/10"
            }`}>
              {m.text}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Action Chips */}
      <div className="flex flex-wrap gap-2 text-xs">
        {promptChips.map((chip, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(chip)}
            className="rounded-xl bg-white/10 border border-white/15 px-3 py-1.5 text-[11px] font-bold text-slate-200 hover:bg-white/20 hover:text-white transition-all backdrop-blur-sm"
          >
            ✨ {chip}
          </button>
        ))}
      </div>

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="flex gap-2"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask AI Assistant a question..."
          className="flex-1 rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-xs text-white placeholder-slate-400 outline-none focus:border-brand-sky"
        />
        <button
          type="submit"
          className="rounded-xl bg-brand-sky px-5 py-3 text-xs font-bold text-white hover:bg-brand-sky-dark transition-all shadow-md"
        >
          <Send className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}
