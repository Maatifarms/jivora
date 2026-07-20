"use client";

import { useState } from "react";
import { Sparkles, User, Copy, RefreshCw, Bookmark, Check, Send, Bot, ShieldCheck, ArrowRight } from "lucide-react";

export interface ChatMessage {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: string;
  followUps?: string[];
  type?: "text" | "rfq_draft" | "supplier_match" | "shipping_estimate";
}

interface ChatProps {
  messages: ChatMessage[];
  isTyping: boolean;
  onSend: (text?: string) => void;
  onRegenerate: () => void;
  onSaveChat: () => void;
}

export default function ChatWindow({ messages, isTyping, onSend, onRegenerate, onSaveChat }: ChatProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [inputVal, setInputVal] = useState("");

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="rounded-3xl border border-grey-border bg-white shadow-2xl overflow-hidden space-y-0">
      {/* Top Chat Header */}
      <div className="bg-navy text-white px-6 py-4 flex items-center justify-between border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-sky text-white shadow-md">
            <Bot className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-sm font-extrabold tracking-tight">JIVORA AI Copilot Session</h3>
            <p className="text-[11px] text-slate-300">Connected to 1,200+ Audited European Factories</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onRegenerate}
            title="Regenerate Last Response"
            className="flex items-center gap-1 rounded-lg bg-white/10 px-2.5 py-1.5 text-xs font-semibold text-slate-200 hover:bg-white/20 hover:text-white transition-all"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Regenerate</span>
          </button>

          <button
            onClick={onSaveChat}
            title="Save Conversation"
            className="flex items-center gap-1 rounded-lg bg-brand-sky px-3 py-1.5 text-xs font-bold text-white hover:bg-brand-sky-dark transition-all shadow-sm"
          >
            <Bookmark className="h-3.5 w-3.5" />
            <span>Save Session</span>
          </button>
        </div>
      </div>

      {/* Message History Area */}
      <div className="h-96 overflow-y-auto p-6 space-y-6 bg-grey-light/30 text-xs">
        {messages.map((m) => (
          <div key={m.id} className={`space-y-2 ${m.sender === "user" ? "flex flex-col items-end" : "flex flex-col items-start"}`}>
            <div className={`flex items-start gap-3 max-w-2xl ${m.sender === "user" ? "flex-row-reverse" : ""}`}>
              <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold flex-shrink-0 ${
                m.sender === "user" ? "bg-brand-sky text-white" : "bg-navy text-white shadow-sm"
              }`}>
                {m.sender === "user" ? <User className="h-4 w-4" /> : <Sparkles className="h-4 w-4 text-brand-sky-accent" />}
              </div>

              <div className={`rounded-2xl p-4 space-y-2 shadow-sm ${
                m.sender === "user" ? "bg-brand-sky text-white" : "bg-white text-navy border border-grey-border/60"
              }`}>
                <div className="leading-relaxed whitespace-pre-line">{m.text}</div>

                {m.sender === "ai" && (
                  <div className="flex items-center justify-between border-t border-grey-border/40 pt-2 text-[10px] text-navy-muted">
                    <span>{m.timestamp}</span>
                    <button
                      onClick={() => handleCopy(m.id, m.text)}
                      className="flex items-center gap-1 hover:text-navy transition-colors font-bold"
                    >
                      {copiedId === m.id ? <Check className="h-3 w-3 text-emerald-600" /> : <Copy className="h-3 w-3" />}
                      <span>{copiedId === m.id ? "Copied!" : "Copy"}</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Suggested Follow-Ups */}
            {m.sender === "ai" && m.followUps && m.followUps.length > 0 && (
              <div className="pl-11 flex flex-wrap gap-1.5 pt-1">
                {m.followUps.map((f, idx) => (
                  <button
                    key={idx}
                    onClick={() => onSend(f)}
                    className="rounded-lg bg-white border border-grey-border/80 px-2.5 py-1 text-[11px] font-bold text-navy hover:border-brand-sky hover:bg-brand-sky-light/30 transition-colors shadow-2xs"
                  >
                    💡 {f}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Typing Indicator UI */}
        {isTyping && (
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-white shadow-sm">
              <Sparkles className="h-4 w-4 text-brand-sky-accent animate-spin" />
            </div>
            <div className="rounded-2xl bg-white border border-grey-border/60 p-3 text-xs text-navy-muted flex items-center gap-2">
              <span className="font-bold text-navy">JIVORA AI is analyzing UK-EU customs accords</span>
              <span className="flex gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-sky animate-bounce"></span>
                <span className="h-1.5 w-1.5 rounded-full bg-brand-sky animate-bounce [animation-delay:0.2s]"></span>
                <span className="h-1.5 w-1.5 rounded-full bg-brand-sky animate-bounce [animation-delay:0.4s]"></span>
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Input Bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (inputVal.trim()) {
            onSend(inputVal);
            setInputVal("");
          }
        }}
        className="p-4 bg-white border-t border-grey-border flex gap-2"
      >
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Type your sourcing question..."
          className="flex-1 rounded-xl border border-grey-border px-4 py-3 text-xs text-navy outline-none focus:border-brand-sky bg-grey-light/50"
        />
        <button
          type="submit"
          className="rounded-xl bg-navy px-5 py-3 text-xs font-bold text-white hover:bg-navy-light transition-all shadow-md flex items-center gap-1.5"
        >
          <span>Send</span>
          <Send className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}
