"use client";

import { useState } from "react";
import InsightsHero from "@/components/insights/InsightsHero";
import FeaturedReports from "@/components/insights/FeaturedReports";
import IndustryTrends from "@/components/insights/IndustryTrends";
import TradeNewsTimeline from "@/components/insights/TradeNewsTimeline";
import AITradeIntelligence from "@/components/insights/AITradeIntelligence";
import CountryInsights from "@/components/insights/CountryInsights";
import ExportOpportunities from "@/components/insights/ExportOpportunities";
import LearningCenter from "@/components/insights/LearningCenter";
import NewsletterSection from "@/components/insights/NewsletterSection";
import InsightsCTA from "@/components/insights/InsightsCTA";

export default function MarketInsightsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery) {
      alert(`AI Search running for "${searchQuery}" across UK-EU trade databases...`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* 1. Hero Section */}
      <InsightsHero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearchSubmit={handleSearchSubmit}
      />

      {/* 2. Featured Executive Trade Reports */}
      <FeaturedReports />

      {/* 3. Industry Growth Trends */}
      <IndustryTrends />

      {/* 4. Trade News & Regulations Timeline */}
      <TradeNewsTimeline />

      {/* 5. AI Trade Intelligence Dashboard */}
      <AITradeIntelligence />

      {/* 6. Country-by-Country Insights */}
      <CountryInsights />

      {/* 7. Export Opportunities Matrix */}
      <ExportOpportunities />

      {/* 8. Learning Center & Trade Guides */}
      <LearningCenter />

      {/* 9. Weekly Newsletter Subscription */}
      <NewsletterSection />

      {/* 10. Final Action CTA Banner */}
      <InsightsCTA />
    </div>
  );
}
