"use client";

import Link from "next/link";
import { Sparkles, ArrowRight, Globe, ShieldCheck, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-grey-border bg-grey-light">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Info & Newsletter */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2 font-sans text-xl font-bold tracking-tight text-navy">
              <span>JIVORA</span>
              <span className="flex items-center gap-1 rounded-full bg-brand-sky-light px-2 py-0.5 text-[10px] font-semibold text-brand-sky-dark">
                <Sparkles className="h-3 w-3 text-brand-sky" />
                AI POWERED
              </span>
            </Link>

            <p className="text-sm text-navy-muted max-w-xs leading-relaxed">
              The intelligent digital operating system for global commerce. Connecting UK & European buyers, suppliers, exporters, and manufacturers with pre-audited trust metrics.
            </p>

            <div className="space-y-2 text-xs text-navy-muted">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-sky" />
                <span>London, United Kingdom • Porto, Portugal</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-sky" />
                <span>support@jivora.eu • compliance@jivora.uk</span>
              </div>
            </div>

            <div className="space-y-3 max-w-sm">
              <h4 className="text-xs font-bold uppercase tracking-wider text-navy">Subscribe to Live Trade Insights</h4>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter work email"
                  required
                  className="w-full rounded-xl border border-grey-border bg-white px-3 py-2 text-xs text-navy placeholder-navy-muted focus:border-brand-sky focus:outline-none"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center rounded-xl bg-navy px-4 py-2 text-white hover:bg-navy-light transition-all shadow-sm"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
              <p className="text-[10px] text-navy-muted">Weekly newsletter. GDPR Compliant. Unsubscribe anytime.</p>
            </div>
          </div>

          {/* Links 1 - Trade Hub */}
          <div className="space-y-4">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-navy">Trade Hub</h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/marketplace" className="text-navy/70 hover:text-navy transition-colors font-medium">Explore Marketplace</Link></li>
              <li><Link href="/marketplace/categories" className="text-navy/70 hover:text-navy transition-colors font-medium">Product Categories</Link></li>
              <li><Link href="/company/s1" className="text-navy/70 hover:text-navy transition-colors font-medium">Verified Exporters</Link></li>
              <li><Link href="/rfq" className="text-navy/70 hover:text-navy transition-colors font-medium">RFQ Builder</Link></li>
              <li><Link href="/search" className="text-navy/70 hover:text-navy transition-colors font-medium">Global AI Search</Link></li>
            </ul>
          </div>

          {/* Links 2 - AI & Intelligence */}
          <div className="space-y-4">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-navy">Intelligence</h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/ai-copilot" className="text-navy/70 hover:text-navy transition-colors font-medium">AI Copilot</Link></li>
              <li><Link href="/market-insights" className="text-navy/70 hover:text-navy transition-colors font-medium">Trade Reports</Link></li>
              <li><Link href="/help" className="text-navy/70 hover:text-navy transition-colors font-medium">Help Center</Link></li>
              <li><Link href="/help#tutorials" className="text-navy/70 hover:text-navy transition-colors font-medium">Video Tutorials</Link></li>
              <li><Link href="/help#status" className="text-navy/70 hover:text-navy transition-colors font-medium font-bold text-emerald-700">🟢 System Status</Link></li>
            </ul>
          </div>

          {/* Links 3 - Legal & Compliance */}
          <div className="space-y-4">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-navy">Trust & Legal</h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/company/s1#certs" className="text-navy/70 hover:text-navy transition-colors font-medium">Factory Verification</Link></li>
              <li><Link href="/help#faq" className="text-navy/70 hover:text-navy transition-colors font-medium">EU PPWR Accords</Link></li>
              <li><Link href="/help#privacy" className="text-navy/70 hover:text-navy transition-colors font-medium">Privacy Policy</Link></li>
              <li><Link href="/help#terms" className="text-navy/70 hover:text-navy transition-colors font-medium">Terms of Service</Link></li>
              <li><Link href="/help#support" className="text-navy/70 hover:text-navy transition-colors font-medium">Contact Desk</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & badges */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-grey-border/50 pt-8 text-xs text-navy-muted">
          <p>&copy; {new Date().getFullYear()} Jivora Ltd. All rights reserved. Registered in England & Wales.</p>

          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded bg-white border border-grey-border px-2.5 py-1 text-[10px] font-bold text-navy">GDPR Compliant</span>
            <span className="rounded bg-white border border-grey-border px-2.5 py-1 text-[10px] font-bold text-navy">Carbon Neutral OS</span>
            <span className="rounded bg-white border border-grey-border px-2.5 py-1 text-[10px] font-bold text-navy">UK-EU Accord Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
