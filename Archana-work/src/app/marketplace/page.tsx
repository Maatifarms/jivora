"use client";

import { useState, useEffect, useMemo } from "react";
import MarketplaceHeader from "@/components/marketplace/MarketplaceHeader";
import MarketplaceOverview from "@/components/marketplace/MarketplaceOverview";
import SidebarFilters from "@/components/marketplace/SidebarFilters";
import ProductGrid, { ProductItem } from "@/components/marketplace/ProductGrid";
import SupplierGrid, { SupplierItem } from "@/components/marketplace/SupplierGrid";
import AIRecommendations from "@/components/marketplace/AIRecommendations";
import SupplierComparison from "@/components/marketplace/SupplierComparison";
import TradeInsightsWidget from "@/components/marketplace/TradeInsightsWidget";
import TradeAssistant from "@/components/marketplace/TradeAssistant";
import CtaBanner from "@/components/sections/CtaBanner";
import { Sparkles, MessageSquare } from "lucide-react";

// Mock Products data
const mockProducts: ProductItem[] = [
  {
    id: "p1",
    name: "Premium Organic Linen Fabric",
    category: "Sustainable Textiles",
    supplier: "LoomCraft Textiles Lda",
    trustScore: "9.9",
    flag: "🇵🇹",
    country: "Portugal",
    price: "€2.40 - €3.10 / meter",
    moq: "500",
    leadTime: "15 Days",
    sustainability: "GOTS Organic & Carbon Neutral",
    exportReady: true
  },
  {
    id: "p2",
    name: "Grid-Tied Solar Microinverter (1200W)",
    category: "Renewable Energy",
    supplier: "SolarGrid Technology GmbH",
    trustScore: "9.8",
    flag: "🇩🇪",
    country: "Germany",
    price: "€120 - €145 / unit",
    moq: "100",
    leadTime: "10 Days",
    sustainability: "CE Certified & RoHS Compliant",
    exportReady: true
  },
  {
    id: "p3",
    name: "Food-Grade Recycled PET Pellets (rPET)",
    category: "Circular Plastics",
    supplier: "Nordic Bio-Pack ApS",
    trustScore: "9.7",
    flag: "🇩🇰",
    country: "Denmark",
    price: "€850 - €920 / ton",
    moq: "10",
    leadTime: "20 Days",
    sustainability: "100% Recycled & Zero-waste raw material",
    exportReady: true
  },
  {
    id: "p4",
    name: "Bio-degradable PLA Cold Cups",
    category: "Biodegradable Packaging",
    supplier: "Nordic Bio-Pack ApS",
    trustScore: "9.9",
    flag: "🇩🇰",
    country: "Denmark",
    price: "€0.03 - €0.05 / unit",
    moq: "5000",
    leadTime: "7 Days",
    sustainability: "100% Biodegradable & Compostable",
    exportReady: true
  },
  {
    id: "p5",
    name: "CNC Machined Stainless Steel Fasteners",
    category: "Industrial Components",
    supplier: "Stuttgart Precision",
    trustScore: "9.6",
    flag: "🇩🇪",
    country: "Germany",
    price: "€0.15 - €0.22 / unit",
    moq: "10000",
    leadTime: "14 Days",
    sustainability: "ISO 9001 & TUV Certified",
    exportReady: true
  },
  {
    id: "p6",
    name: "Compostable Retail Sourcing Bags",
    category: "Biodegradable Packaging",
    supplier: "GreenPack Spain Lda",
    trustScore: "9.6",
    flag: "🇪🇸",
    country: "Spain",
    price: "€0.04 - €0.07 / unit",
    moq: "2500",
    leadTime: "10 Days",
    sustainability: "100% Home Compostable & EN 13432 certified",
    exportReady: true
  }
];

// Mock Suppliers data
const mockSuppliers: SupplierItem[] = [
  {
    id: "s1",
    name: "LoomCraft Textiles Lda",
    country: "Portugal",
    flag: "🇵🇹",
    trustScore: "9.9",
    factoryVerified: true,
    yearsInBusiness: 12,
    responseRate: "< 1 hour",
    countriesExported: "UK, Germany, France, Nordics",
    certifications: ["GOTS Organic", "OEKO-TEX 100", "ISO 9001"],
    sustainability: "Carbon Neutral Production",
    languages: ["English", "Portuguese", "Spanish"],
    isSme: false
  },
  {
    id: "s2",
    name: "SolarGrid Technology GmbH",
    country: "Germany",
    flag: "🇩🇪",
    trustScore: "9.8",
    factoryVerified: true,
    yearsInBusiness: 10,
    responseRate: "< 2 hours",
    countriesExported: "UK, France, Spain, Italy",
    certifications: ["CE Certified", "TUV Rheinland", "ISO 14001"],
    sustainability: "95% Recycled Alloys",
    languages: ["English", "German", "French"],
    isSme: false
  },
  {
    id: "s3",
    name: "Nordic Bio-Pack ApS",
    country: "Denmark",
    flag: "🇩🇰",
    trustScore: "9.7",
    factoryVerified: true,
    yearsInBusiness: 5,
    responseRate: "< 30 mins",
    countriesExported: "UK, Germany, Netherlands, Sweden",
    certifications: ["FSC Certified", "BRCGS Food Safety", "ISO 50001"],
    sustainability: "100% Biodegradable Materials",
    languages: ["English", "Danish", "German"],
    isSme: false
  },
  {
    id: "s4",
    name: "Vilar Tex Factory",
    country: "Portugal",
    flag: "🇵🇹",
    trustScore: "9.7",
    factoryVerified: true,
    yearsInBusiness: 3,
    responseRate: "< 1.5 hours",
    countriesExported: "Spain, France, UK",
    certifications: ["GOTS Organic", "ISO 9001"],
    sustainability: "Water-Recycling manufacturing",
    languages: ["English", "Portuguese"],
    isSme: true // Newly Verified SME!
  },
  {
    id: "s5",
    name: "Eco-Toy Crafts S.r.l.",
    country: "Italy",
    flag: "🇮🇹",
    trustScore: "9.8",
    factoryVerified: true,
    yearsInBusiness: 4,
    responseRate: "< 45 mins",
    countriesExported: "UK, Germany, Austria",
    certifications: ["CE Certified", "FSC Wood Certified"],
    sustainability: "100% Non-toxic wood paints",
    languages: ["English", "Italian", "Spanish"],
    isSme: true // Newly Verified SME!
  },
  {
    id: "s6",
    name: "GreenPack Spain Lda",
    country: "Spain",
    flag: "🇪🇸",
    trustScore: "9.6",
    factoryVerified: true,
    yearsInBusiness: 2,
    responseRate: "< 1 hour",
    countriesExported: "France, Germany, UK",
    certifications: ["CE Certified", "FSC Certified", "ISO 14001"],
    sustainability: "100% Compostable PLA",
    languages: ["English", "Spanish"],
    isSme: true // Newly Verified SME!
  }
];

const initialFilters = {
  categories: [] as string[],
  countries: [] as string[],
  certifications: [] as string[],
  sustainability: [] as string[],
  moq: "any",
  verifiedOnly: false
};

export default function Marketplace() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeQuery, setActiveQuery] = useState("");
  const [filters, setFilters] = useState(initialFilters);
  const [compareList, setCompareList] = useState<ProductItem[]>([]);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Trigger simulated loading state when search/filter changes
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 850);
    return () => clearTimeout(timer);
  }, [activeQuery, filters]);

  const handleSearchSubmit = (query: string) => {
    setActiveQuery(query);
  };

  const handleClearFilters = () => {
    setFilters(initialFilters);
    setActiveQuery("");
    setSearchQuery("");
  };

  // Filter products based on search inputs & sidebar checks
  const filteredProducts = useMemo(() => {
    return mockProducts.filter((p) => {
      // 1. Text Search Filter
      if (activeQuery) {
        const query = activeQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(query);
        const matchesCat = p.category.toLowerCase().includes(query);
        const matchesSupplier = p.supplier.toLowerCase().includes(query);
        if (!matchesName && !matchesCat && !matchesSupplier) return false;
      }

      // 2. Categories Filter
      if (filters.categories.length > 0 && !filters.categories.includes(p.category)) {
        return false;
      }

      // 3. Countries Filter
      if (filters.countries.length > 0 && !filters.countries.includes(p.country)) {
        return false;
      }

      // 4. MOQ Filter
      if (filters.moq !== "any") {
        const productMoq = parseInt(p.moq, 10);
        const targetMoq = parseInt(filters.moq, 10);
        if (productMoq > targetMoq) return false;
      }

      return true;
    });
  }, [activeQuery, filters]);

  // Filter suppliers based on active choices
  const filteredSuppliers = useMemo(() => {
    return mockSuppliers.filter((s) => {
      // 1. Text Search Filter
      if (activeQuery) {
        const query = activeQuery.toLowerCase();
        const matchesName = s.name.toLowerCase().includes(query);
        const matchesCountry = s.country.toLowerCase().includes(query);
        if (!matchesName && !matchesCountry) return false;
      }

      // 2. Countries Filter
      if (filters.countries.length > 0 && !filters.countries.includes(s.country)) {
        return false;
      }

      // 3. Verified Supplier Filter
      if (filters.verifiedOnly && !s.factoryVerified) {
        return false;
      }

      return true;
    });
  }, [activeQuery, filters]);

  // Sourcing overview statistics computed based on matches
  const overviewStats = useMemo(() => {
    const countriesMatched = new Set(filteredProducts.map(p => p.country));
    return {
      supplierCount: filteredSuppliers.length,
      productCount: filteredProducts.length,
      countryCount: countriesMatched.size || 1,
      aiConfidence: activeQuery ? 98 : 95
    };
  }, [filteredProducts, filteredSuppliers, activeQuery]);

  const handleCompareToggle = (product: ProductItem) => {
    setCompareList((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      }
      if (prev.length >= 3) {
        alert("You can compare up to 3 suppliers or products maximum.");
        return prev;
      }
      return [...prev, product];
    });
  };

  const handleCompareRemove = (product: ProductItem) => {
    setCompareList((prev) => prev.filter((item) => item.id !== product.id));
  };

  const handleRfqClick = (item: ProductItem | SupplierItem) => {
    window.location.href = `/rfq?${'category' in item ? `productId=${item.id}` : `supplierId=${item.id}`}`;
  };

  const handleAskAiInstead = () => {
    setSearchQuery("GOTS organic fabric supplier Portugal");
    setActiveQuery("GOTS organic fabric supplier Portugal");
  };

  return (
    <>
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* 1. Header breadcrumbs & AI input */}
        <MarketplaceHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSearch={handleSearchSubmit}
        />

        {/* 2. Sourcing results counters overview */}
        <MarketplaceOverview
          supplierCount={overviewStats.supplierCount}
          productCount={overviewStats.productCount}
          countryCount={overviewStats.countryCount}
          aiConfidence={overviewStats.aiConfidence}
          isLoading={isLoading}
        />

        {/* 3. Main Sourcing layout - Left sticky filters sidebar vs Right grid results */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:items-start pt-4">
          {/* Left sticky column */}
          <div className="lg:col-span-1 border-r border-grey-border/40 pr-2 lg:block">
            <SidebarFilters
              filters={filters}
              setFilters={setFilters}
              onClear={handleClearFilters}
            />
          </div>

          {/* Right Sourcing results */}
          <div className="lg:col-span-3 space-y-10">
            {/* Products grid */}
            <div className="space-y-4">
              <h3 className="text-lg font-extrabold text-navy border-b border-grey-border/40 pb-3">Product Catalog</h3>
              <ProductGrid
                products={filteredProducts}
                isLoading={isLoading}
                onCompareToggle={handleCompareToggle}
                compareList={compareList}
                onRfqClick={handleRfqClick}
                onAskAiClick={handleAskAiInstead}
              />
            </div>

            {/* Vetted Suppliers grid & SME highlights */}
            <SupplierGrid
              suppliers={filteredSuppliers}
              onRfqClick={handleRfqClick}
            />
          </div>
        </div>

        {/* 4. AI Explainable Recommendations */}
        <AIRecommendations />

        {/* 5. Trade Policy & Customs insights widgets */}
        <div className="space-y-6 pt-6">
          <h3 className="text-lg font-extrabold text-navy border-b border-grey-border/40 pb-3">Trade Intelligence</h3>
          <TradeInsightsWidget />
        </div>

        {/* 6. Conversion CTA */}
        <CtaBanner />
      </div>

      {/* 7. Bottom comparison drawer overlay */}
      <SupplierComparison
        compareList={compareList}
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        onRemove={handleCompareRemove}
        onOpen={() => setIsCompareOpen(true)}
      />

      {/* 8. Floating Trade Copilot Agent widget */}
      <TradeAssistant />
    </>
  );
}
