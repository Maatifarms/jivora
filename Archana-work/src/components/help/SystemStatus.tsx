import { Activity, CheckCircle2 } from "lucide-react";

export default function SystemStatus() {
  const services = [
    { name: "Marketplace Search Engine", status: "Operational", uptime: "99.99%" },
    { name: "AI Copilot Matchmaking", status: "Operational", uptime: "100%" },
    { name: "RFQ Generation Service", status: "Operational", uptime: "99.98%" },
    { name: "HMRC Customs Validation", status: "Operational", uptime: "100%" },
    { name: "Authentication & Security", status: "Operational", uptime: "100%" }
  ];

  return (
    <div className="rounded-2xl border border-grey-border bg-grey-light p-6 card-shadow-premium space-y-4">
      <div className="flex items-center justify-between border-b border-grey-border/50 pb-3">
        <div className="flex items-center gap-2">
          <Activity className="h-5 w-5 text-emerald-600" />
          <h3 className="text-sm font-extrabold text-navy">Platform Real-Time System Status</h3>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-bold text-emerald-700 border border-emerald-200">
          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
          <span>All Systems Operational</span>
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-5 text-xs">
        {services.map((s, idx) => (
          <div key={idx} className="p-3 rounded-xl bg-white border border-grey-border/40 space-y-1">
            <span className="text-[10px] text-navy-muted font-bold block truncate">{s.name}</span>
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-emerald-700 text-[11px]">🟢 {s.status}</span>
              <span className="text-[10px] text-navy-muted font-mono">{s.uptime}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
