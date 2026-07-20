"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, ShieldCheck, Leaf, Scale, Check } from "lucide-react";

interface FilterState {
  categories: string[];
  countries: string[];
  certifications: string[];
  sustainability: string[];
  moq: string;
  verifiedOnly: boolean;
}

interface SidebarProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  onClear: () => void;
}

const categories = ["Sustainable Textiles", "Industrial Components", "Biodegradable Packaging", "Precision Electronics", "Renewable Energy"];
const countries = ["Portugal", "Germany", "France", "Spain", "Netherlands", "Denmark", "Italy"];
const certifications = ["GOTS Organic", "OEKO-TEX 100", "CE Certified", "ISO 9001", "ISO 14001", "FSC Certified"];
const sustainabilityOptions = ["Carbon Neutral Production", "100% Biodegradable", "Eco-friendly Materials", "AAA ESG Rated"];
const moqOptions = [
  { label: "Any Quantity", value: "any" },
  { label: "Under 100 units", value: "100" },
  { label: "Under 1,000 units", value: "1000" },
  { label: "Under 5,000 units", value: "5000" }
];

export default function SidebarFilters({ filters, setFilters, onClear }: SidebarProps) {
  // Collapsible accordion states
  const [openSections, setOpenSections] = useState({
    categories: true,
    countries: true,
    moq: true,
    certs: true,
    sustainability: true
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleCheckboxChange = (
    key: "categories" | "countries" | "certifications" | "sustainability",
    value: string
  ) => {
    setFilters(prev => {
      const activeList = prev[key];
      const newList = activeList.includes(value)
        ? activeList.filter(item => item !== value)
        : [...activeList, value];
      return { ...prev, [key]: newList };
    });
  };

  return (
    <aside className="w-full space-y-6 lg:sticky lg:top-20 max-h-[85vh] overflow-y-auto pr-2">
      {/* Header filter actions */}
      <div className="flex items-center justify-between border-b border-grey-border/50 pb-4">
        <h3 className="text-sm font-extrabold uppercase tracking-wider text-navy">Filter Products</h3>
        <button 
          onClick={onClear}
          className="text-xs font-semibold text-brand-sky hover:text-brand-sky-dark transition-colors"
        >
          Clear All
        </button>
      </div>

      {/* Verified Suppliers Only toggle */}
      <div className="flex items-center justify-between rounded-xl bg-grey-light p-3 border border-grey-border/50">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-4.5 w-4.5 text-emerald-600 flex-shrink-0" />
          <span className="text-xs font-bold text-navy">Verified Suppliers Only</span>
        </div>
        <button
          onClick={() => setFilters(prev => ({ ...prev, verifiedOnly: !prev.verifiedOnly }))}
          className={`relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${filters.verifiedOnly ? "bg-emerald-600" : "bg-slate-200"}`}
        >
          <span className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${filters.verifiedOnly ? "translate-x-4" : "translate-x-0"}`} />
        </button>
      </div>

      {/* Category Accordion */}
      <div className="space-y-2 border-b border-grey-border/50 pb-4">
        <button 
          onClick={() => toggleSection("categories")}
          className="flex w-full items-center justify-between font-sans text-xs font-bold uppercase tracking-wider text-navy"
        >
          <span>Category</span>
          {openSections.categories ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
        </button>
        
        {openSections.categories && (
          <div className="space-y-2 pt-1.5">
            {categories.map((cat) => (
              <label key={cat} className="flex items-center gap-2.5 text-xs text-navy/80 hover:text-navy cursor-pointer select-none">
                <input 
                  type="checkbox"
                  checked={filters.categories.includes(cat)}
                  onChange={() => handleCheckboxChange("categories", cat)}
                  className="rounded border-grey-border text-brand-sky focus:ring-brand-sky-light h-3.5 w-3.5"
                />
                <span>{cat}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Country Accordion */}
      <div className="space-y-2 border-b border-grey-border/50 pb-4">
        <button 
          onClick={() => toggleSection("countries")}
          className="flex w-full items-center justify-between font-sans text-xs font-bold uppercase tracking-wider text-navy"
        >
          <span>Country of Origin</span>
          {openSections.countries ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
        </button>
        
        {openSections.countries && (
          <div className="space-y-2 pt-1.5">
            {countries.map((country) => (
              <label key={country} className="flex items-center gap-2.5 text-xs text-navy/80 hover:text-navy cursor-pointer select-none">
                <input 
                  type="checkbox"
                  checked={filters.countries.includes(country)}
                  onChange={() => handleCheckboxChange("countries", country)}
                  className="rounded border-grey-border text-brand-sky focus:ring-brand-sky-light h-3.5 w-3.5"
                />
                <span>{country}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* MOQ Accordion */}
      <div className="space-y-2 border-b border-grey-border/50 pb-4">
        <button 
          onClick={() => toggleSection("moq")}
          className="flex w-full items-center justify-between font-sans text-xs font-bold uppercase tracking-wider text-navy"
        >
          <span>Minimum Order (MOQ)</span>
          {openSections.moq ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
        </button>
        
        {openSections.moq && (
          <div className="space-y-2 pt-1.5">
            {moqOptions.map((opt) => (
              <label key={opt.value} className="flex items-center gap-2.5 text-xs text-navy/80 hover:text-navy cursor-pointer select-none">
                <input 
                  type="radio"
                  name="moq"
                  checked={filters.moq === opt.value}
                  onChange={() => setFilters(prev => ({ ...prev, moq: opt.value }))}
                  className="border-grey-border text-brand-sky focus:ring-brand-sky-light h-3.5 w-3.5"
                />
                <span>{opt.label}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Certifications Accordion */}
      <div className="space-y-2 border-b border-grey-border/50 pb-4">
        <button 
          onClick={() => toggleSection("certs")}
          className="flex w-full items-center justify-between font-sans text-xs font-bold uppercase tracking-wider text-navy"
        >
          <span>Certifications</span>
          {openSections.certs ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
        </button>
        
        {openSections.certs && (
          <div className="space-y-2 pt-1.5">
            {certifications.map((cert) => (
              <label key={cert} className="flex items-center gap-2.5 text-xs text-navy/80 hover:text-navy cursor-pointer select-none">
                <input 
                  type="checkbox"
                  checked={filters.certifications.includes(cert)}
                  onChange={() => handleCheckboxChange("certifications", cert)}
                  className="rounded border-grey-border text-brand-sky focus:ring-brand-sky-light h-3.5 w-3.5"
                />
                <span>{cert}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Sustainability Accordion */}
      <div className="space-y-2 pb-2">
        <button 
          onClick={() => toggleSection("sustainability")}
          className="flex w-full items-center justify-between font-sans text-xs font-bold uppercase tracking-wider text-navy"
        >
          <span className="flex items-center gap-1">
            <Leaf className="h-3.5 w-3.5 text-emerald-600" />
            <span>Sustainability</span>
          </span>
          {openSections.sustainability ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
        </button>
        
        {openSections.sustainability && (
          <div className="space-y-2 pt-1.5">
            {sustainabilityOptions.map((opt) => (
              <label key={opt} className="flex items-center gap-2.5 text-xs text-navy/80 hover:text-navy cursor-pointer select-none">
                <input 
                  type="checkbox"
                  checked={filters.sustainability.includes(opt)}
                  onChange={() => handleCheckboxChange("sustainability", opt)}
                  className="rounded border-grey-border text-emerald-600 focus:ring-emerald-500 h-3.5 w-3.5"
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        )}
      </div>

    </aside>
  );
}
