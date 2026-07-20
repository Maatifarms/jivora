"use client";

import { MessageSquare, Clock, ArrowRight, Trash2 } from "lucide-react";
import { useState } from "react";

interface RecentChatsProps {
  onLoadChat: (prompt: string) => void;
}

export default function RecentChats({ onLoadChat }: RecentChatsProps) {
  const [history, setHistory] = useState([
    { id: "1", title: "RFQ Specs for 1,000m GOTS Organic Linen", date: "2 hours ago", prompt: "Draft an RFQ for 1,000 meters of GOTS organic linen from Portugal" },
    { id: "2", title: "FOB vs CIF UK Customs Comparison", date: "Yesterday", prompt: "Explain FOB vs CIF Incoterms for UK import clearance" },
    { id: "3", title: "Porto Factory Audit & Quality Scores", date: "July 18, 2026", prompt: "Find verified textile suppliers in Portugal with audit score > 9.5" }
  ]);

  const removeHistory = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setHistory(history.filter((h) => h.id !== id));
  };

  if (history.length === 0) return null;

  return (
    <div className="rounded-2xl border border-grey-border bg-white p-6 space-y-4 card-shadow-premium">
      <div className="flex items-center justify-between border-b border-grey-border/50 pb-3">
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-brand-sky" />
          <h3 className="text-base font-extrabold text-navy">Recent AI Sourcing Conversations</h3>
        </div>
        <span className="text-xs font-bold text-navy-muted">Saved Sessions</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
        {history.map((h) => (
          <div
            key={h.id}
            onClick={() => onLoadChat(h.prompt)}
            className="group relative rounded-xl border border-grey-border bg-grey-light/50 p-4 space-y-2 hover:border-brand-sky hover:bg-white transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-navy-muted font-bold">{h.date}</span>
                <button onClick={(e) => removeHistory(h.id, e)} className="text-navy-muted hover:text-rose-500">
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
              <h4 className="font-extrabold text-navy text-xs group-hover:text-brand-sky transition-colors">{h.title}</h4>
            </div>

            <div className="flex items-center justify-between text-[11px] font-bold text-brand-sky pt-1">
              <span>Resume Session</span>
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
