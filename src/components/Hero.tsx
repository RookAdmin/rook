import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

export const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = ["For Startups", "For Creators", "For Enterprises"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden pt-16 md:pt-20 lg:pt-16">
      {/* Minimal grid pattern background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #121212 1px, transparent 1px),
                           linear-gradient(to bottom, #121212 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Asymmetric Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content - Takes 7 columns */}
            <div className="lg:col-span-7 space-y-8 md:space-y-10 order-1 lg:order-none">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-gray-500 font-medium">
                  <span className="w-2 h-2 bg-[#00d437] rounded-full"></span>
                  Simple Tools. Monumental Impact.
                </div>
                
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#121212] leading-[1.1] tracking-tight">
                  Build the
                  <br />
                  <span className="relative inline-block">
                    <span className="text-[#dc2e3e]">future</span>
                    <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#dc2e3e]/20"></span>
                  </span>
                  <br />
                  of software
                </h1>
                
                <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl font-light">
                  Tools that empower. Impact that matters.
                </p>
            </div>

            {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://links.rookhq.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-[#00d437] px-6 py-3 rounded-full hover:bg-[#00d437]/90 transition-all shadow-md hover:shadow-lg w-full sm:w-auto justify-center sm:justify-start"
              >
                <span className="text-white font-medium">clickl.in/</span>
                <div className="bg-white rounded-full px-4 py-1.5">
                  <span className="text-[#121212] font-medium">reserve your username</span>
                </div>
                <ExternalLink className="h-4 w-4 text-white" />
              </a>
              </div>
            </div>

            {/* Right Visual - Takes 5 columns */}
            <div className="lg:col-span-5 order-2 lg:order-none">
              <div className="relative overflow-hidden px-2 sm:px-0">
                {/* Card Stack Effect */}
                <div className="relative space-y-4">
                  {/* Card 1 - Back */}
                  <div className="absolute top-4 left-2 sm:left-4 w-[calc(100%-0.5rem)] sm:w-full h-56 sm:h-64 bg-gray-100 rounded-2xl border border-gray-200 transform rotate-[-1deg] sm:rotate-[-2deg] opacity-60"></div>
                  
                  {/* Card 2 - Middle */}
                  <div className="absolute top-2 left-1 sm:left-2 w-[calc(100%-0.25rem)] sm:w-full h-56 sm:h-64 bg-white rounded-2xl border border-gray-200 transform rotate-[0.5deg] sm:rotate-[1deg] opacity-80"></div>
                  
                  {/* Card 3 - Front */}
                  <div className="relative w-full h-56 sm:h-64 bg-gradient-to-br from-[#00d437]/10 via-white to-[#0096d4]/10 rounded-2xl border border-gray-200 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                        <img 
                          src="/favicon.ico" 
                          alt="Rook" 
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-[#121212] mb-2">Rook Platforms</h3>
                      <p className="text-2xl sm:text-3xl font-bold text-[#121212] transition-all duration-500">
                        {texts[currentText]}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-1 h-2 bg-[#dc2e3e] rounded-full"></div>
                      <div className="flex-1 h-2 bg-[#0096d4] rounded-full"></div>
                      <div className="flex-1 h-2 bg-[#00d437] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>

            {/* Scroll indicator */}
          <div className="pt-16 md:pt-20 flex justify-center">
              <Button
                variant="ghost"
                size="icon"
              className="text-[#121212] hover:text-[#0096d4] animate-bounce"
              onClick={() => {
                window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
              }}
              >
              <ArrowDown className="h-6 w-6" />
              </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
