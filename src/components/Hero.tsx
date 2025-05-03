
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Zap, ArrowDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
    <div ref={heroRef} className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      {/* Minimalist background */}
      <div className="absolute inset-0 bg-white" />
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          <div className="space-y-8 relative">
            <div className="space-y-2 animate-fade-down" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-center gap-2 mb-6">
                <div className="h-1 w-20 bg-[#dc2e3e]"></div>
                <div className="px-3 py-1 bg-[#00d437]/10 rounded-full text-[#00d437] text-xs font-medium flex items-center gap-1">
                  <span className="w-2 h-2 bg-[#00d437] rounded-full"></span>
                  New Release
                </div>
              </div>
              <div className="relative inline-block mb-6">
                <h1 className="text-6xl md:text-7xl font-bold text-black mb-6 leading-tight tracking-tight">
                  Simple Tools.
                  <br />
                  <span className="text-[#dc2e3e] relative">
                    Monumental Impact.
                  </span>
                </h1>
              </div>
              <p className="text-xl text-black max-w-2xl leading-relaxed animate-fade-up" style={{ animationDelay: "0.3s" }}>
                We craft focused SaaS products that empower creators, freelancers, and
                founders to get more done with less.
              </p>
              
              {/* Benefit indicators */}
              <div className="flex flex-wrap gap-6 mt-8 animate-fade-up" style={{ animationDelay: "0.4s" }}>
                <div className="flex items-center gap-2 text-black">
                  <ShieldCheck className="h-5 w-5 text-[#00d437]" />
                  <span>Enterprise Security</span>
                </div>
                <div className="flex items-center gap-2 text-black">
                  <Zap className="h-5 w-5 text-[#ffd800]" />
                  <span>Lightning Fast</span>
                </div>
              </div>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.5s" }}>
              <Button 
                size="lg" 
                className="bg-[#dc2e3e] text-white hover:bg-[#dc2e3e]/90 transition-all hover:translate-y-[-2px] group"
              >
                Explore Now 
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-black border-black/20 hover:bg-black/5 transition-all hover:translate-y-[-2px]"
              >
                Learn More
              </Button>
            </div>

            {/* Scroll indicator */}
            <div className="pt-20 flex justify-center animate-fade-up" style={{ animationDelay: "0.7s" }}>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-black hover:text-[#0096d4] animate-bounce relative"
              >
                <ArrowDown className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
