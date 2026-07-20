"use client";

import { useState } from "react";
import { Mail, Sparkles, CheckCircle2 } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <div className="rounded-3xl border border-brand-sky-accent/30 bg-brand-sky-light/20 p-8 sm:p-10 space-y-6 relative overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2 text-center md:text-left max-w-xl">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-sky/20 px-3 py-1 text-xs font-extrabold text-brand-sky-dark border border-brand-sky-accent/30">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Weekly Executive Dispatch</span>
          </div>
          <h3 className="text-2xl font-extrabold text-navy sm:text-3xl tracking-tight">
            Subscribe to Weekly Trade Intelligence
          </h3>
          <p className="text-xs sm:text-sm text-navy-muted leading-relaxed">
            Get weekly UK & EU market reports, tariff updates, AI sourcing opportunities, and regulatory compliance alerts directly to your inbox.
          </p>
        </div>

        <div className="w-full md:w-auto min-w-[320px]">
          {subscribed ? (
            <div className="rounded-2xl bg-white p-6 border border-emerald-200 text-center space-y-2 shadow-sm">
              <CheckCircle2 className="h-8 w-8 text-emerald-600 mx-auto" />
              <div className="text-sm font-extrabold text-navy">Subscribed Successfully!</div>
              <p className="text-xs text-navy-muted">Check your email for your first weekly UK-EU trade report.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-navy-muted" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your corporate email address..."
                  className="w-full rounded-xl border border-grey-border bg-white py-3.5 pl-10 pr-4 text-xs font-semibold text-navy outline-none focus:border-brand-sky shadow-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-navy py-3.5 text-xs font-bold text-white hover:bg-navy-light transition-all shadow-md"
              >
                Join 15,000+ Wholesale Subscribers
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
