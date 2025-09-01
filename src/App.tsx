import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Perspectives from "./pages/Perspectives";
import PerspectiveDetail from "./pages/PerspectiveDetail";
import PerspectivesDetails from "./pages/persdetail";
import PressRelease from "./pages/PressRelease";
import PressReleaseDetail from "./pages/PressReleaseDetail";
import MediaCoverage from "./pages/MediaCoverage";
import LetterFromCEO from "./pages/LetterFromCEO";
import CEOLetter from "./pages/LetterFromCEODetails";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import RookForStartups from "./pages/RookForStartups";
import BrandKit from "./pages/BrandKit";
import Trademark from "./pages/Trademark";
import OpenSource from "./pages/OpenSource";

import Careers from "./pages/Careers";

const App = () => {
  const queryClient = new QueryClient();

  // Google Analytics Integration
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-7WRHQFLLDH";
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-7WRHQFLLDH');
    `;
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/perspectives" element={<Perspectives />} />
                <Route
                  path="/perspectives/:slug"
                  element={<PerspectivesDetails />}
                />
                <Route path="/press-release" element={<PressRelease />} />
                <Route
                  path="/press-release/:slug"
                  element={<PressReleaseDetail />}
                />
                <Route path="/media-coverage" element={<MediaCoverage />} />
                <Route path="/letter-from-the-ceo" element={<LetterFromCEO />} />
                <Route path="/letter-from-the-ceo/:slug" element={<CEOLetter />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/rook-for-startups" element={<RookForStartups />} />
                <Route path="/brand-kit" element={<BrandKit />} />
                <Route path="/trademark" element={<Trademark />} />
                <Route path="/open-source" element={<OpenSource />} />
                <Route path="/careers" element={<Careers />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
