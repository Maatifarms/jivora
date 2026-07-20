"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Globe, Menu, X } from "lucide-react";

const languages = [
  { code: "en", label: "EN (UK)" },
  { code: "de", label: "DE (German)" },
  { code: "fr", label: "FR (French)" },
  { code: "es", label: "ES (Spanish)" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);
  const [activeLang, setActiveLang] = useState(languages[0]);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  const linkClass = (path: string) => {
    const active = isActive(path);
    return `text-xs lg:text-sm font-semibold transition-all relative ${
      active
        ? "text-navy font-extrabold underline underline-offset-8 decoration-brand-sky decoration-2"
        : "text-navy/70 hover:text-navy"
    }`;
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-grey-border/50 glass-effect">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-6 lg:gap-8">
            <Link href="/" className="flex items-center gap-2 font-sans text-xl font-bold tracking-tight text-navy">
              <span>JIVORA</span>
              <span className="flex items-center gap-1 rounded-full bg-brand-sky-light px-2 py-0.5 text-[10px] font-semibold text-brand-sky-dark animate-pulse-slow">
                <Sparkles className="h-3 w-3 text-brand-sky" />
                AI POWERED
              </span>
            </Link>

            {/* Desktop Navigation Links - Complete Platform Direct Access */}
            <div className="hidden md:flex items-center gap-3 lg:gap-4">
              <Link href="/" className={linkClass("/")}>Home</Link>
              <Link href="/marketplace" className={linkClass("/marketplace")}>Marketplace</Link>
              <Link href="/marketplace/categories" className={linkClass("/marketplace/categories")}>Categories</Link>
              <Link href="/marketplace/product/p1" className={linkClass("/marketplace/product")}>Products</Link>
              <Link href="/company/s1" className={linkClass("/company")}>Suppliers</Link>
              <Link href="/rfq" className={linkClass("/rfq")}>RFQ</Link>
              <Link href="/market-insights" className={linkClass("/market-insights")}>Insights</Link>
              <Link href="/help" className={linkClass("/help")}>Help</Link>
              <Link href="/search" className={linkClass("/search")}>Search</Link>
              <Link href="/ai-copilot" className={`text-xs lg:text-sm font-bold text-brand-sky hover:text-brand-sky-dark transition-colors flex items-center gap-1 ${
                isActive("/ai-copilot") ? "underline underline-offset-8 decoration-brand-sky decoration-2" : ""
              }`}>
                <Sparkles className="h-3.5 w-3.5" />
                AI Copilot
              </Link>
            </div>
          </div>

          {/* Right Action Menu */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            {/* Language Switcher */}
            <div className="relative">
              <button 
                onClick={() => setLangDropdown(!langDropdown)}
                className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-navy/70 hover:bg-grey-medium hover:text-navy transition-colors"
              >
                <Globe className="h-4 w-4" />
                <span>{activeLang.label}</span>
              </button>

              {langDropdown && (
                <div className="absolute right-0 mt-2 w-36 rounded-xl border border-grey-border bg-white py-1 shadow-lg animate-in fade-in duration-200">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setActiveLang(lang);
                        setLangDropdown(false);
                      }}
                      className="w-full text-left px-3 py-1.5 text-xs font-medium text-navy hover:bg-grey-light transition-colors"
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTAs */}
            <Link
              href="/rfq"
              className="rounded-xl border border-grey-border bg-white px-3.5 py-2 text-xs font-bold text-navy hover:bg-grey-medium transition-all shadow-2xs hover:scale-105 active:scale-95"
            >
              Generate RFQ
            </Link>

            <Link
              href="/company/s1"
              className="rounded-xl bg-navy px-4 py-2 text-xs font-bold text-white hover:bg-navy-light transition-all shadow-sm hover:scale-105 active:scale-95"
            >
              Start Selling
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg p-2 text-navy hover:bg-grey-medium transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="border-b border-grey-border bg-white px-4 pt-2 pb-6 md:hidden animate-in slide-in-from-top duration-200 space-y-1">
          <Link href="/" onClick={() => setIsOpen(false)} className={`block rounded-lg px-3 py-2 text-sm ${linkClass("/")}`}>Home</Link>
          <Link href="/marketplace" onClick={() => setIsOpen(false)} className={`block rounded-lg px-3 py-2 text-sm ${linkClass("/marketplace")}`}>Marketplace</Link>
          <Link href="/marketplace/categories" onClick={() => setIsOpen(false)} className={`block rounded-lg px-3 py-2 text-sm ${linkClass("/marketplace/categories")}`}>Categories</Link>
          <Link href="/marketplace/product/p1" onClick={() => setIsOpen(false)} className={`block rounded-lg px-3 py-2 text-sm ${linkClass("/marketplace/product")}`}>Products</Link>
          <Link href="/company/s1" onClick={() => setIsOpen(false)} className={`block rounded-lg px-3 py-2 text-sm ${linkClass("/company")}`}>Suppliers</Link>
          <Link href="/rfq" onClick={() => setIsOpen(false)} className={`block rounded-lg px-3 py-2 text-sm ${linkClass("/rfq")}`}>RFQ</Link>
          <Link href="/market-insights" onClick={() => setIsOpen(false)} className={`block rounded-lg px-3 py-2 text-sm ${linkClass("/market-insights")}`}>Market Insights</Link>
          <Link href="/help" onClick={() => setIsOpen(false)} className={`block rounded-lg px-3 py-2 text-sm ${linkClass("/help")}`}>Help Center</Link>
          <Link href="/search" onClick={() => setIsOpen(false)} className={`block rounded-lg px-3 py-2 text-sm ${linkClass("/search")}`}>Global Search</Link>
          <Link href="/ai-copilot" onClick={() => setIsOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-bold text-brand-sky hover:bg-grey-medium">AI Copilot (USP)</Link>

          <div className="border-t border-grey-border/50 pt-3 flex flex-col gap-2">
            <Link href="/rfq" onClick={() => setIsOpen(false)} className="w-full text-center rounded-xl border border-grey-border bg-white py-2 text-xs font-bold text-navy">
              Generate RFQ
            </Link>
            <Link href="/company/s1" onClick={() => setIsOpen(false)} className="w-full text-center rounded-xl bg-navy py-2 text-xs font-bold text-white">
              Start Selling
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
