"use client";

import { useState, use, useMemo } from "react";
import SearchHero from "@/components/search/SearchHero";
import SmartFilters from "@/components/search/SmartFilters";
import SearchResults, { SearchResultItem } from "@/components/search/SearchResults";
import AISuggestions from "@/components/search/AISuggestions";
import ExplainableAI from "@/components/search/ExplainableAI";
import CompareSection from "@/components/search/CompareSection";
import SavedSearches from "@/components/search/SavedSearches";
import SearchAnalytics from "@/components/search/SearchAnalytics";
import SearchCTA from "@/components/search/SearchCTA";

interface SearchPageProps {
  searchParams?: Promise<{ q?: string }>;
}

export default function GlobalSearchPage({ searchParams }: SearchPageProps) {
  const resolvedSearchParams = searchParams ? use(searchParams) : {};
  const initialQuery = resolvedSearchParams?.q || "Organic Linen";

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [activeTab, setActiveTab] = useState("all");
  const [selectedCountry, setSelectedCountry] = useState("All Countries");
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [selectedCert, setSelectedCert] = useState("All Certifications");
  const [comparedItems, setComparedItems] = useState<SearchResultItem[]>([]);

  // Mock global database containing products, suppliers, companies, categories, and market insights
  const mockDatabase: SearchResultItem[] = [
    {
      id: "p1",
      type: "product",
      title: "Premium Organic Linen Fabric",
      categoryOrSector: "Sustainable Textiles",
      country: "Portugal",
      flag: "🇵🇹",
      aiMatch: "99%",
      description: "GOTS certified 100% organic European linen fabric woven in Porto. Available in natural off-white and custom Pantone dyes.",
      priceOrMetric: "€2.40 - €3.10 / m",
      moqOrExperience: "MOQ: 500 meters",
      trustScore: "9.9",
      reasons: ["Matches search criteria", "High UK retail demand", "Verified supplier"]
    },
    {
      id: "s1",
      type: "supplier",
      title: "LoomCraft Textiles Lda",
      categoryOrSector: "Sustainable Textiles",
      country: "Portugal",
      flag: "🇵🇹",
      aiMatch: "98%",
      description: "Audited European manufacturer with 15,000 m² factory floor in Porto. 12+ years exporting GOTS organic linen & cotton.",
      priceOrMetric: "< 1 hr Response",
      moqOrExperience: "12 Yrs Exporting",
      trustScore: "9.9",
      reasons: ["HMRC Accord Pre-Cleared", "Carbon Neutral Facility", "< 1hr Response"]
    },
    {
      id: "s2",
      type: "company",
      title: "SolarGrid Technology GmbH",
      categoryOrSector: "Clean Energy & Solar",
      country: "Germany",
      flag: "🇩🇪",
      aiMatch: "96%",
      description: "TUV Rheinland certified manufacturer of 450W solar modules and clean energy hardware in Cologne.",
      priceOrMetric: "€145 - €180 / unit",
      moqOrExperience: "10 Yrs Exporting",
      trustScore: "9.8",
      reasons: ["0% EU Tariff Exemption", "TUV Rheinland Certified"]
    },
    {
      id: "p3",
      type: "product",
      title: "Bio-degradable PLA Cold Cups",
      categoryOrSector: "Biodegradable Packaging",
      country: "Denmark",
      flag: "🇩🇰",
      aiMatch: "97%",
      description: "100% compostable cold drink cups compliant with EU PPWR single-use plastic restrictions.",
      priceOrMetric: "€0.03 - €0.05 / unit",
      moqOrExperience: "MOQ: 5,000 units",
      trustScore: "9.7",
      reasons: ["EU PPWR Law Compliant", "100% Compostable"]
    },
    {
      id: "cat1",
      type: "category",
      title: "Sustainable Textiles & Fibers Directory",
      categoryOrSector: "Industry Sector",
      country: "Europe",
      flag: "🇪🇺",
      aiMatch: "95%",
      description: "Explore 140+ verified European textile factories, organic yarn spinners, and private label apparel makers.",
      priceOrMetric: "140+ Factories",
      moqOrExperience: "GOTS & OEKO-TEX",
      reasons: ["Popular Sourcing Sector", "High Growth ↑ 24%"]
    },
    {
      id: "rep1",
      type: "insight",
      title: "UK FMCG Wholesale & Import Outlook 2026",
      categoryOrSector: "Executive Report",
      country: "United Kingdom",
      flag: "🇬🇧",
      aiMatch: "94%",
      description: "Market intelligence breakdown of UK retail inventory restocking and HMRC border clearance accords.",
      priceOrMetric: "PDF Report",
      moqOrExperience: "Updated July 2026",
      reasons: ["UK Compliance Guide", "Tariff Analysis"]
    }
  ];

  // Filtered search results computed reactively
  const filteredResults = useMemo(() => {
    return mockDatabase.filter((item) => {
      // 1. Query Filter
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesCategory = item.categoryOrSector.toLowerCase().includes(q);
        const matchesCountry = item.country.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        if (!matchesTitle && !matchesCategory && !matchesCountry && !matchesDesc) return false;
      }

      // 2. Tab Filter
      if (activeTab === "products" && item.type !== "product") return false;
      if (activeTab === "suppliers" && item.type !== "supplier") return false;
      if (activeTab === "companies" && item.type !== "company") return false;
      if (activeTab === "categories" && item.type !== "category") return false;
      if (activeTab === "insights" && item.type !== "insight") return false;

      // 3. Country Filter
      if (selectedCountry !== "All Countries" && item.country !== selectedCountry) return false;

      return true;
    });
  }, [searchQuery, activeTab, selectedCountry]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleCompareToggle = (item: SearchResultItem) => {
    const exists = comparedItems.some((i) => i.id === item.id);
    if (exists) {
      setComparedItems(comparedItems.filter((i) => i.id !== item.id));
    } else {
      if (comparedItems.length >= 3) {
        alert("You can compare up to 3 sourcing options maximum.");
        return;
      }
      setComparedItems([...comparedItems, item]);
    }
  };

  const handleResetFilters = () => {
    setSelectedCountry("All Countries");
    setSelectedCert("All Certifications");
    setVerifiedOnly(false);
    setActiveTab("all");
  };

  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* 1. Multi-Modal Search Hero */}
      <SearchHero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearchSubmit={handleSearchSubmit}
      />

      {/* 2. Real-Time Search Analytics Counter Bar */}
      <SearchAnalytics />

      {/* 3. AI Refinement & Suggestions Bar */}
      <AISuggestions
        query={searchQuery}
        onSuggestionClick={(s) => setSearchQuery(s)}
      />

      {/* 4. Smart Tabs & Sidebar Filters */}
      <SmartFilters
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        verifiedOnly={verifiedOnly}
        setVerifiedOnly={setVerifiedOnly}
        selectedCert={selectedCert}
        setSelectedCert={setSelectedCert}
        onResetFilters={handleResetFilters}
      />

      {/* 5. Unified Search Results Grid */}
      <SearchResults
        results={filteredResults}
        onCompareToggle={handleCompareToggle}
        comparedIds={comparedItems.map((i) => i.id)}
      />

      {/* 6. Explainable AI Rationale & Saved Searches Side-by-Side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ExplainableAI />
        <SavedSearches />
      </div>

      {/* 7. Floating Comparison Drawer */}
      <CompareSection
        comparedItems={comparedItems}
        onRemove={(id) => setComparedItems(comparedItems.filter((i) => i.id !== id))}
        onClear={() => setComparedItems([])}
      />

      {/* 8. Search Conversion CTA Banner */}
      <SearchCTA />
    </div>
  );
}
