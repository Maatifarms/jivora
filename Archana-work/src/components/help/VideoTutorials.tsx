"use client";

import { Video, Play, Clock } from "lucide-react";

export default function VideoTutorials() {
  const tutorials = [
    { title: "How to Create & Submit an RFQ on Jivora", duration: "3:45", category: "RFQ Tutorial" },
    { title: "Finding Verified Factories & Audited Suppliers", duration: "4:20", category: "Sourcing Walkthrough" },
    { title: "Using AI Copilot for Auto-Matchmaking", duration: "2:50", category: "AI Tools" },
    { title: "Navigating Categories & Sector Filters", duration: "3:10", category: "Platform Guide" }
  ];

  const handlePlayVideo = (title: string) => {
    alert(`Playing Video Tutorial: "${title}"... (HD Stream initialized)`);
  };

  return (
    <div className="rounded-2xl border border-grey-border bg-white p-6 sm:p-8 space-y-6 card-shadow-premium">
      <div className="flex items-center justify-between border-b border-grey-border/50 pb-4">
        <div className="flex items-center gap-2">
          <Video className="h-5 w-5 text-brand-sky" />
          <h3 className="text-xl font-extrabold text-navy">Video Tutorials & Walkthroughs</h3>
        </div>
        <span className="text-xs font-bold text-navy-muted">HD Video Guides</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {tutorials.map((t, idx) => (
          <div
            key={idx}
            onClick={() => handlePlayVideo(t.title)}
            className="group relative rounded-xl border border-grey-border bg-grey-light p-4 space-y-3 hover:border-brand-sky hover:bg-white transition-all cursor-pointer"
          >
            <div className="relative h-28 w-full rounded-lg bg-gradient-to-tr from-navy via-navy-light to-slate-800 flex flex-col items-center justify-center p-3 text-center border border-grey-border/40 overflow-hidden">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-sky text-white group-hover:scale-110 transition-transform shadow-md">
                <Play className="h-5 w-5 fill-current ml-0.5" />
              </div>
              <span className="absolute bottom-2 right-2 rounded bg-black/60 px-1.5 py-0.5 text-[9px] font-bold text-white backdrop-blur-xs flex items-center gap-1">
                <Clock className="h-2.5 w-2.5" />
                <span>{t.duration}</span>
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-bold text-navy-muted uppercase">{t.category}</span>
              <h4 className="text-xs font-extrabold text-navy group-hover:text-brand-sky transition-colors">{t.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
