import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import HeroSection from "@/components/features/HeroSection";
import AIImagePlaceholder from "@/components/features/AIImagePlaceholder";
import AnalyticalTextBlock from "@/components/features/AnalyticalTextBlock";
import WhatIfTable from "@/components/features/WhatIfTable";
import AIAgentBox from "@/components/features/AIAgentBox";
import AIVideoPlayer from "@/components/features/AIVideoPlayer";
import AudioPlayerControls from "@/components/features/AudioPlayerControls";
import ChatbotWidget from "@/components/features/ChatbotWidget";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* ── HEADER ── */}
      <SiteHeader />

      {/* ── MAIN ── */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">

        {/* 1. Hero Section Banner */}
        <HeroSection />

        {/* 2 & 3. AI Image + Analytical Text — side by side on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AIImagePlaceholder />
          <AnalyticalTextBlock />
        </div>

        {/* 4. Dynamic What-If Table */}
        <WhatIfTable />

        {/* 5 & 6. AI Agent + AI Video — side by side on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AIAgentBox />
          <AIVideoPlayer />
        </div>

        {/* 7. Audio Player Controls */}
        <AudioPlayerControls />

      </main>

      {/* ── FOOTER ── */}
      <SiteFooter />

      {/* ── FLOATING CHATBOT ── */}
      <ChatbotWidget />
    </div>
  );
};

export default Index;
