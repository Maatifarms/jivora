"use client";

import { useState } from "react";
import CopilotHero from "@/components/copilot/CopilotHero";
import QuickActions from "@/components/copilot/QuickActions";
import ChatWindow, { ChatMessage } from "@/components/copilot/ChatWindow";
import AIRecommendations from "@/components/copilot/AIRecommendations";
import TradeAssistant from "@/components/copilot/TradeAssistant";
import InsightsDashboard from "@/components/copilot/InsightsDashboard";
import RecentChats from "@/components/copilot/RecentChats";
import AICapabilities from "@/components/copilot/AICapabilities";
import CopilotCTA from "@/components/copilot/CopilotCTA";

export default function AICopilotPage() {
  const [heroInput, setHeroInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "m1",
      sender: "ai",
      text: "Hello! I am JIVORA AI Copilot. I analyze real-time UK-EU trade accords, GOTS/ISO factory audits, and ocean freight logistics to accelerate your B2B sourcing.\n\nHow can I assist your business today?",
      timestamp: "Just now",
      followUps: [
        "Find organic cotton suppliers in Portugal",
        "Explain FOB vs CIF Incoterms",
        "Generate an RFQ for GOTS fabric"
      ]
    }
  ]);

  const handleSendPrompt = (promptText?: string) => {
    const textToSend = promptText || heroInput;
    if (!textToSend.trim()) return;

    // 1. Add User message
    const userMsg: ChatMessage = {
      id: `u_${Date.now()}`,
      sender: "user",
      text: textToSend,
      timestamp: "Just now"
    };

    setMessages((prev) => [...prev, userMsg]);
    setHeroInput("");
    setIsTyping(true);

    // Scroll to chat window smoothly
    const chatElem = document.getElementById("chat-window");
    if (chatElem) {
      chatElem.scrollIntoView({ behavior: "smooth" });
    }

    // 2. Simulate AI response after 1.2s
    setTimeout(() => {
      let replyText = `JIVORA AI has processed your request: "${textToSend}". Our 1,200+ audited European suppliers meet all UK HMRC customs compliance accords.`;
      let followUps = ["Compare alternative suppliers", "Estimate freight shipping cost", "Draft official RFQ"];

      if (textToSend.toLowerCase().includes("portugal") || textToSend.toLowerCase().includes("cotton") || textToSend.toLowerCase().includes("linen")) {
        replyText = `Found 3 Top-Ranked Portuguese Textile Mills:\n\n1. LoomCraft Textiles Lda (Porto) — Audit Score 9.9/10, GOTS Certified, MOQ 500m.\n2. Douro Weaving Co (Guimarães) — Audit Score 9.8/10, OEKO-TEX 100, MOQ 1,000m.\n3. Minho Organic Looms (Braga) — Zero-Carbon Factory, MOQ 300m.\n\nAll 3 factories offer 48-hour sample dispatch to UK and Germany with pre-cleared HMRC customs.`;
        followUps = ["Draft RFQ for LoomCraft Textiles", "Compare lead times", "Calculate DDP shipping to London"];
      } else if (textToSend.toLowerCase().includes("rfq")) {
        replyText = `Generated RFQ Specifications Template:\n\n• Target Volume: 1,000 meters\n• Material: GOTS Organic Linen (180 GSM)\n• Dyes: OEKO-TEX Standard 100\n• Preferred Incoterms: DDP London Felixstowe\n• Target Delivery: 28 days\n\nClick 'Generate RFQ' below to dispatch to competitive European bidders.`;
        followUps = ["Dispatch to 3 Portugal Suppliers", "Adjust Target Price", "Add CAD Drawing Attachment"];
      } else if (textToSend.toLowerCase().includes("fob") || textToSend.toLowerCase().includes("cif") || textToSend.toLowerCase().includes("incoterms")) {
        replyText = `Incoterms Breakdown for UK-EU Trade:\n\n• FOB (Free on Board): Supplier pays port handling in Lisbon/Porto. Buyer pays ocean freight & UK customs duty.\n• CIF (Cost, Insurance & Freight): Supplier covers ocean freight & cargo insurance to UK port. Buyer pays customs duty.\n• DDP (Delivered Duty Paid): 100% door-to-door. Supplier covers freight, UK import VAT, and clearance. Highly recommended for zero border hassle!`;
        followUps = ["Estimate DDP shipping cost", "Find DDP-ready suppliers", "Customs duty rates 2026"];
      }

      const aiMsg: ChatMessage = {
        id: `ai_${Date.now()}`,
        sender: "ai",
        text: replyText,
        timestamp: "Just now",
        followUps
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1200);
  };

  const handleRegenerate = () => {
    if (messages.length <= 1) return;
    const lastUserMsg = [...messages].reverse().find((m) => m.sender === "user");
    if (lastUserMsg) {
      handleSendPrompt(lastUserMsg.text);
    }
  };

  const handleSaveChat = () => {
    alert("Session successfully saved to your JIVORA Account Favorites!");
  };

  const handleStartNewChat = () => {
    setMessages([
      {
        id: `m_${Date.now()}`,
        sender: "ai",
        text: "New AI Copilot session initialized. Ask me anything about UK-EU sourcing, factory audits, or customs accords.",
        timestamp: "Just now",
        followUps: [
          "Find organic cotton suppliers in Portugal",
          "Explain FOB vs CIF Incoterms",
          "Generate an RFQ for GOTS fabric"
        ]
      }
    ]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* 1. AI Hero Section */}
      <CopilotHero
        input={heroInput}
        setInput={setHeroInput}
        onSend={handleSendPrompt}
      />

      {/* 2. Sourcing Quick Actions */}
      <QuickActions onActionClick={handleSendPrompt} />

      {/* 3. AI Chat Interface Window */}
      <div id="chat-window">
        <ChatWindow
          messages={messages}
          isTyping={isTyping}
          onSend={handleSendPrompt}
          onRegenerate={handleRegenerate}
          onSaveChat={handleSaveChat}
        />
      </div>

      {/* 4. AI Recommendations Grid */}
      <AIRecommendations />

      {/* 5. Trade Assistant Knowledge Cards */}
      <TradeAssistant onCardClick={handleSendPrompt} />

      {/* 6. AI Sourcing Insights Dashboard */}
      <InsightsDashboard />

      {/* 7. Recent Saved Conversations */}
      <RecentChats onLoadChat={handleSendPrompt} />

      {/* 8. AI Core Capabilities Grid */}
      <AICapabilities />

      {/* 9. Final AI Copilot CTA */}
      <CopilotCTA onNewChat={handleStartNewChat} />
    </div>
  );
}
