"use client";

import { MessageSquare, Mail, PhoneCall, MessageCircle, Ticket, X, Send } from "lucide-react";
import { useState } from "react";

export default function ContactSupport() {
  const [ticketModalOpen, setTicketModalOpen] = useState(false);
  const [ticketSubject, setTicketSubject] = useState("");
  const [ticketCategory, setTicketCategory] = useState("RFQ Inquiry");
  const [ticketDetails, setTicketDetails] = useState("");

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Support Ticket successfully created (#TICK-2026-${Math.floor(1000 + Math.random() * 9000)})! Our compliance team will respond to your email within 2 hours.`);
    setTicketModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-grey-border/50 pb-3">
        <div className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-brand-sky" />
          <h3 className="text-xl font-extrabold text-navy">Direct Human Customer Support</h3>
        </div>
        <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">🟢 Support Desk Online</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-xs">
        {/* Live Chat */}
        <div className="rounded-2xl border border-grey-border bg-white p-5 space-y-3 card-shadow-premium hover:border-brand-sky transition-all flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-sky-light text-brand-sky font-bold">
              <MessageSquare className="h-5 w-5" />
            </div>
            <h4 className="font-extrabold text-navy">Live Chat</h4>
            <p className="text-[11px] text-navy-muted leading-relaxed">Instant messaging with UK & European trade specialists.</p>
          </div>
          <button onClick={() => alert("Live Chat window opened with Support Agent Sarah!")} className="w-full rounded-xl bg-navy py-2.5 text-xs font-bold text-white hover:bg-navy-light">
            Start Live Chat
          </button>
        </div>

        {/* Email Support */}
        <div className="rounded-2xl border border-grey-border bg-white p-5 space-y-3 card-shadow-premium hover:border-brand-sky transition-all flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 font-bold">
              <Mail className="h-5 w-5" />
            </div>
            <h4 className="font-extrabold text-navy">Email Support</h4>
            <p className="text-[11px] text-navy-muted leading-relaxed">Send inquiries directly to support@jivora.eu.</p>
          </div>
          <a href="mailto:support@jivora.eu" className="w-full block text-center rounded-xl border border-grey-border py-2.5 text-xs font-bold text-navy hover:bg-grey-medium">
            Send Email
          </a>
        </div>

        {/* Schedule a Call */}
        <div className="rounded-2xl border border-grey-border bg-white p-5 space-y-3 card-shadow-premium hover:border-brand-sky transition-all flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600 font-bold">
              <PhoneCall className="h-5 w-5" />
            </div>
            <h4 className="font-extrabold text-navy">Schedule a Call</h4>
            <p className="text-[11px] text-navy-muted leading-relaxed">Book a 1-on-1 call with a senior trade engineer.</p>
          </div>
          <button onClick={() => alert("Redirecting to Calendly booking page...")} className="w-full rounded-xl border border-grey-border py-2.5 text-xs font-bold text-navy hover:bg-grey-medium">
            Book Call Slot
          </button>
        </div>

        {/* WhatsApp Support */}
        <div className="rounded-2xl border border-grey-border bg-white p-5 space-y-3 card-shadow-premium hover:border-brand-sky transition-all flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 font-bold">
              <MessageCircle className="h-5 w-5" />
            </div>
            <h4 className="font-extrabold text-navy">WhatsApp Support</h4>
            <p className="text-[11px] text-navy-muted leading-relaxed">Fast assistance via official WhatsApp Business desk.</p>
          </div>
          <button onClick={() => alert("Opening WhatsApp Business chat (+44 20 7946 0912)...")} className="w-full rounded-xl bg-emerald-600 py-2.5 text-xs font-bold text-white hover:bg-emerald-700">
            Open WhatsApp
          </button>
        </div>

        {/* Raise a Support Ticket */}
        <div className="rounded-2xl border border-grey-border bg-white p-5 space-y-3 card-shadow-premium hover:border-brand-sky transition-all flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-600 font-bold">
              <Ticket className="h-5 w-5" />
            </div>
            <h4 className="font-extrabold text-navy">Raise Support Ticket</h4>
            <p className="text-[11px] text-navy-muted leading-relaxed">Create a formal ticket with attachment support.</p>
          </div>
          <button onClick={() => setTicketModalOpen(true)} className="w-full rounded-xl bg-brand-sky py-2.5 text-xs font-bold text-white hover:bg-brand-sky-dark">
            Raise Ticket
          </button>
        </div>
      </div>

      {/* Support Ticket Modal Dialog */}
      {ticketModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-lg rounded-2xl border border-grey-border bg-white p-6 space-y-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-grey-border/50 pb-3">
              <div className="flex items-center gap-2">
                <Ticket className="h-5 w-5 text-brand-sky" />
                <h3 className="text-lg font-extrabold text-navy">Raise Customer Support Ticket</h3>
              </div>
              <button onClick={() => setTicketModalOpen(false)} className="p-1 rounded-full hover:bg-grey-medium">
                <X className="h-5 w-5 text-navy-muted" />
              </button>
            </div>

            <form onSubmit={handleTicketSubmit} className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="font-extrabold text-navy">Ticket Category</label>
                <select
                  value={ticketCategory}
                  onChange={(e) => setTicketCategory(e.target.value)}
                  className="w-full rounded-xl border border-grey-border p-3 font-semibold text-navy outline-none focus:border-brand-sky bg-white"
                >
                  <option value="RFQ Inquiry">RFQ & Order Quotation Inquiry</option>
                  <option value="Supplier Verification">Supplier Verification & Audit Scores</option>
                  <option value="Customs & Shipping">HMRC Customs & International Shipping</option>
                  <option value="Payments">Escrow Payments & Billing</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-extrabold text-navy">Subject / Issue Summary</label>
                <input
                  type="text"
                  required
                  value={ticketSubject}
                  onChange={(e) => setTicketSubject(e.target.value)}
                  placeholder="e.g. Question regarding Incoterm DDP duty fees"
                  className="w-full rounded-xl border border-grey-border p-3 text-navy outline-none focus:border-brand-sky"
                />
              </div>

              <div className="space-y-1">
                <label className="font-extrabold text-navy">Detailed Description</label>
                <textarea
                  rows={4}
                  required
                  value={ticketDetails}
                  onChange={(e) => setTicketDetails(e.target.value)}
                  placeholder="Provide details or order reference numbers..."
                  className="w-full rounded-xl border border-grey-border p-3 text-navy outline-none focus:border-brand-sky"
                ></textarea>
              </div>

              <button type="submit" className="w-full flex items-center justify-center gap-2 rounded-xl bg-navy py-3.5 font-bold text-white hover:bg-navy-light shadow-md">
                <Send className="h-4 w-4" />
                <span>Submit Official Support Ticket</span>
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
