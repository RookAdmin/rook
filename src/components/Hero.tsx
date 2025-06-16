import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Zap, ArrowDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import BackgroundPaths from "./background-paths";

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={heroRef}
      className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden pt-16 md:pt-20"
    >
      <BackgroundPaths />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 md:space-y-8 relative">
            <div
              className="space-y-4 md:space-y-6 animate-fade-down"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="flex items-center gap-2 mb-4 md:mb-6">
                <div className="h-1 w-12 md:w-20 bg-[#dc2e3e]"></div>
                <div className="px-2 py-1 md:px-3 md:py-1 bg-[#00d437]/10 rounded-full text-[#00d437] text-xs font-medium flex items-center gap-1">
                  <span className="w-2 h-2 bg-[#00d437] rounded-full"></span>
                  New Release
                </div>
              </div>
              <div className="relative inline-block mb-4 md:mb-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-4 md:mb-6 leading-tight tracking-tight">
                  Simple Tools.
                  <br />
                  <span className="text-[#dc2e3e] relative">
                    Monumental Impact.
                  </span>
                </h1>
              </div>
              <p
                className="text-base sm:text-lg md:text-xl text-black max-w-2xl leading-relaxed animate-fade-up"
                style={{ animationDelay: "0.3s" }}
              >
                We craft focused SaaS products that empower creators,
                freelancers, and founders to get more done with less.
              </p>

              {/* Benefit indicators */}
              <div
                className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-6 md:mt-8 animate-fade-up"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="flex items-center gap-2 text-black">
                  <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5 text-[#00d437]" />
                  <span className="text-sm sm:text-base">
                    Enterprise Security
                  </span>
                </div>
                <div className="flex items-center gap-2 text-black">
                  <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-[#ffd800]" />
                  <span className="text-sm sm:text-base">Lightning Fast</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-up"
              style={{ animationDelay: "0.5s" }}
            >
              {/* Support Button - External Link */}
              <a
                href="https://support.rookhq.com/portal/en/home"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-[#dc2e3e] text-white hover:bg-[#dc2e3e]/90 transition-all hover:translate-y-[-2px] group"
                >
                  Support
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>

              {/* Who We Are? Button - Internal Link */}
              <a href="/about" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full text-black border-black/20 hover:bg-black/5 transition-all hover:translate-y-[-2px]"
                >
                  Who We Are?
                </Button>
              </a>
            </div>

            {/* Scroll indicator */}
            <div
              className="pt-12 sm:pt-16 md:pt-20 flex justify-center animate-fade-up"
              style={{ animationDelay: "0.7s" }}
            >
              <Button
                variant="ghost"
                size="icon"
                className="text-black hover:text-[#0096d4] animate-bounce relative"
              >
                <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
