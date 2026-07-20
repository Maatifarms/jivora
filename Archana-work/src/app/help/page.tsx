"use client";

import { useState } from "react";
import HelpHero from "@/components/help/HelpHero";
import HelpCategories from "@/components/help/HelpCategories";
import FAQAccordion from "@/components/help/FAQAccordion";
import AISupportAssistant from "@/components/help/AISupportAssistant";
import KnowledgeBase from "@/components/help/KnowledgeBase";
import VideoTutorials from "@/components/help/VideoTutorials";
import ContactSupport from "@/components/help/ContactSupport";
import CommunitySection from "@/components/help/CommunitySection";
import SystemStatus from "@/components/help/SystemStatus";
import HelpCTA from "@/components/help/HelpCTA";

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery) {
      alert(`Searching Jivora Knowledge Base & Help Articles for "${searchQuery}"...`);
    }
  };

  const handleAiAssistantClick = () => {
    const aiSection = document.getElementById("ai-assistant");
    if (aiSection) {
      aiSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 1200, behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* 1. Help Hero Section */}
      <HelpHero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearchSubmit={handleSearchSubmit}
        onAiAssistantClick={handleAiAssistantClick}
      />

      {/* 2. Help Categories Grid */}
      <HelpCategories />

      {/* 3. Popular FAQs Accordion */}
      <FAQAccordion />

      {/* 4. AI Support Assistant Chatbot */}
      <div id="ai-assistant">
        <AISupportAssistant />
      </div>

      {/* 5. Knowledge Base Featured Articles */}
      <KnowledgeBase />

      {/* 6. Video Tutorials & Walkthroughs */}
      <VideoTutorials />

      {/* 7. Direct Contact Support & Ticket Modal */}
      <ContactSupport />

      {/* 8. Trade Community & Success Stories */}
      <CommunitySection />

      {/* 9. Platform Real-Time System Status */}
      <SystemStatus />

      {/* 10. Final Action Help CTA */}
      <HelpCTA />
    </div>
  );
}
