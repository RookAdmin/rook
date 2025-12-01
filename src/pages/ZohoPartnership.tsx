import React, { useEffect, useState } from "react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, TrendingUp, Zap, Shield, Globe, CheckCircle, Star, BarChart3, Building, Smartphone, Award } from "lucide-react";

const ZohoPartnership = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    zohoUsers: 0,
    startupsAccelerated: 0,
    countries: 0
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    // Animate counters
    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const increment = duration / steps;
      
      let step = 0;
      const interval = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounters({
          zohoUsers: Math.floor(90 * progress),
          startupsAccelerated: Math.floor(1000 * progress),
          countries: Math.floor(20 * progress)
        });
        
        if (step >= steps) {
          clearInterval(interval);
          setCounters({
            zohoUsers: 90,
            startupsAccelerated: 1000,
            countries: 20
          });
        }
      }, increment);
    };

    const counterTimer = setTimeout(animateCounters, 1000);

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
      clearTimeout(counterTimer);
    };
  }, []);

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Rook × Zoho for Startups",
      "description": "Complete business stack combining Rook's growth automation with Zoho's 50+ business apps for startups.",
      "provider": {
        "@type": "Organization",
        "name": "Rook",
        "url": "https://rookhq.com"
      },
      "areaServed": "Worldwide",
      "url": "https://rookhq.com/startups/zoho",
      "serviceType": "Startup Business Stack",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Startup credits available"
      }
    }
  ];

  return (
    <>
      <SEO
        title="Rook × Zoho for Startups | Complete Business Stack with Growth Automation"
        description="Get everything you need to build, run, and grow your startup. Rook's growth automation combined with Zoho's 50+ business apps. Exclusive startup credits available."
        keywords="Zoho for startups, startup business apps, CRM for startups, startup tools, Zoho credits, startup software, business automation, startup stack"
        canonical="/startups/zoho"
        geoRegion="IN"
        geoPlacename="India"
        structuredData={structuredData}
      />
    <div className="w-full min-h-screen bg-white pt-16 overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white relative overflow-x-hidden">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Co-branding badges */}
            <div className="flex items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-8 animate-fade-up">
              <img src="/thumbnail.png" alt="Rook" className="h-14 sm:h-16 md:h-20 w-auto" />
              <span className="text-xl sm:text-2xl text-gray-400">×</span>
              <img src="/partners/zoho-logo-web.svg" alt="Zoho" className="h-14 sm:h-16 md:h-20 w-auto" />
            </div>
            
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#121212] leading-tight tracking-tight mb-6 sm:mb-8 animate-fade-up px-2 sm:px-0" style={{ animationDelay: "0.1s" }}>
              Rook for Startups <span className="text-[#dc2e3e]">×</span> <span className="text-[#0096d4]">Zoho for Startups</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12 animate-fade-up px-4 sm:px-0" style={{ animationDelay: "0.2s" }}>
              Everything you need to <span className="text-[#00d437] font-semibold">build</span>, <span className="text-[#0096d4] font-semibold">run</span>, and <span className="text-[#dc2e3e] font-semibold">grow</span> your startup faster and smarter.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button 
                size="lg" 
                asChild
                className="bg-[#00d437] text-white hover:bg-[#00d437]/90 transition-all hover:translate-y-[-2px] text-lg px-12 py-4 rounded-full shadow-premium group"
              >
                <a href="https://forms.office.com/r/Ap9MBCKhTp?embed=true%22" target="_blank" rel="noopener noreferrer">
                Apply for Startup Access
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-[#00d437]/5 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 rounded-full bg-[#0096d4]/5 animate-pulse" style={{ animationDelay: "1s" }}></div>
      </section>

      {/* Why This Partnership */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            {/* Left: Logos */}
            <div className="relative flex items-center justify-center gap-3 sm:gap-4 md:gap-6">
              <img 
                src="/partners/rfs-labelblack.png" 
                alt="Rook for Startups" 
                className="h-12 sm:h-16 md:h-20 w-auto object-contain"
              />
              <span className="text-lg sm:text-xl md:text-2xl text-gray-400">×</span>
              <img 
                src="/partners/zohofor.png" 
                alt="Zoho for Startups" 
                className="h-12 sm:h-16 md:h-20 w-auto object-contain"
              />
            </div>

            {/* Right: Value Points */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="h-1 w-20 bg-[#0096d4]"></div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#121212]">Why This Partnership?</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The perfect synergy of startup growth automation and comprehensive business management.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#00d437]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="h-6 w-6 text-[#00d437]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#121212] mb-2">Startup growth powered by Rook automation</h3>
                    <p className="text-gray-600">Smart link management, affiliate systems, and payment solutions</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0096d4]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Building className="h-6 w-6 text-[#0096d4]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#121212] mb-2">Business management simplified with Zoho's 50+ SaaS apps</h3>
                    <p className="text-gray-600">CRM, Finance, HR, Support, Marketing. Everything in one ecosystem.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#ffd800]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="h-6 w-6 text-[#ffd800]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#121212] mb-2">Credits for early-stage founders</h3>
                    <p className="text-gray-600">Exclusive startup credits to maximize your runway</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#dc2e3e]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="h-6 w-6 text-[#dc2e3e]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#121212] mb-2">Scale confidently with tools trusted by millions</h3>
                    <p className="text-gray-600">Enterprise-grade security and reliability from day one</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Benefits */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <div className="h-1 w-20 bg-[#00d437] mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#121212]">Complete Startup Stack</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Everything you need to launch, manage, and scale your startup in one integrated ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white/90 backdrop-blur-sm border border-[#dc2e3e]/20 shadow-premium hover:shadow-card transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#dc2e3e]/10 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-[#dc2e3e]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#121212]">Legal & Compliance Ready</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Via Rook integrations and Zoho's compliance management tools for global operations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border border-[#0096d4]/20 shadow-premium hover:shadow-card transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#0096d4]/10 rounded-2xl flex items-center justify-center mb-6">
                  <Building className="h-8 w-8 text-[#0096d4]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#121212]">Business Apps Suite</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  CRM, Finance, HR, Support, Marketing. 50+ integrated Zoho applications for complete business management.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border border-[#00d437]/20 shadow-premium hover:shadow-card transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#00d437]/10 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="h-8 w-8 text-[#00d437]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#121212]">Growth Stack</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Rook's growth automation tools integrated with Zoho's business suite for seamless operations and rapid scaling.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border border-[#ffd800]/20 shadow-premium hover:shadow-card transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#ffd800]/10 rounded-2xl flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-[#ffd800]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#121212]">Founder-Friendly Credits</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Startup credits designed to maximize your runway and growth potential.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50/30 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <div className="h-1 w-20 bg-[#0096d4] mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#121212]">How It Works</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              A streamlined process to get your startup powered by the best tools in the industry.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#00d437] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-premium">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#121212]">Apply for Rook × Zoho Startups</h3>
                <p className="text-gray-600">Submit your application for review by Zoho team</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#0096d4] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-premium">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#121212]">Activate Your Zoho Suite Credits</h3>
                <p className="text-gray-600">Access Zoho apps tailored for startup operations</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#dc2e3e] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-premium">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#121212]">Integrate with Rook Tools</h3>
                <p className="text-gray-600">Connect Rook's growth automation with your Zoho workspace</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#ffd800] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-premium">
                  4
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#121212]">Scale Faster with Growth + Operations Unified</h3>
                <p className="text-gray-600">Manage everything from one integrated ecosystem</p>
              </div>
            </div>
            
            {/* Disclaimer */}
            <div className="mt-12 max-w-4xl mx-auto">
              <div className="bg-gray-50 border-l-4 border-[#0096d4] p-6 rounded-r-lg">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong>Important:</strong> Approval to Zoho for Startups program is subject to Zoho team's pure decision. Rook does not guarantee approval or acceptance into the Zoho for Startups program. All applications are reviewed and approved solely by Zoho Corporation Private Limited.
                </p>
              </div>
            </div>
            
            {/* Trademark Notice */}
            <div className="mt-8 text-center">
              <p className="text-xs italic text-gray-500">
                Zoho trademarks belong to Zoho Corporation Private Limited.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Impact */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-[#121212]">Global Impact</h2>
            <p className="text-lg text-gray-700">Trusted by millions of businesses worldwide</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0096d4] mb-3 sm:mb-4">
                {counters.zohoUsers}M+
              </div>
              <p className="text-xl text-gray-700 font-medium">Zoho Users Worldwide</p>
              <p className="text-sm text-gray-500 mt-2">Across 50+ integrated applications</p>
            </div>

            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#00d437] mb-4">
                {counters.startupsAccelerated}+
              </div>
              <p className="text-xl text-gray-700 font-medium">Startups Accelerated by Rook</p>
              <p className="text-sm text-gray-500 mt-2">Using our growth automation platform</p>
            </div>

            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#dc2e3e] mb-4">
                {counters.countries}+
              </div>
              <p className="text-xl text-gray-700 font-medium">Countries Supported</p>
              <p className="text-sm text-gray-500 mt-2">With local compliance & growth solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Startup Success Stories */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <div className="h-1 w-20 bg-[#0096d4] mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#121212]">Startup Success Stories</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-premium p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-[#ffd800] fill-current" />
                  ))}
                </div>
              </div>
              <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-800 mb-6 sm:mb-8 italic leading-relaxed px-4 sm:px-0">
                "Zoho gave us the backbone to run operations seamlessly, while Rook helped us accelerate growth with smart automation. It's the perfect combo for early-stage founders who want to scale fast without losing control."
              </blockquote>
              <div className="text-lg font-semibold text-[#121212]">
                Alex Rodriguez, Co-Founder & CEO
              </div>
              <div className="text-gray-600">
                GrowthTech Solutions • $1.8M Seed Round
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-[#00d437]/5 via-[#0096d4]/5 to-[#dc2e3e]/5">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#121212]">
              Start Smart. Scale Confidently.
            </h2>
            <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
              Join hundreds of startups building their future with Rook's growth automation and Zoho's comprehensive business suite.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                asChild
                className="bg-[#00d437] text-white hover:bg-[#00d437]/90 transition-all hover:translate-y-[-2px] text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-12 py-3 sm:py-3.5 md:py-4 rounded-full shadow-premium group w-full sm:w-auto"
              >
                <a href="https://forms.office.com/r/Ap9MBCKhTp?embed=true%22" target="_blank" rel="noopener noreferrer" className="text-center">
                <span className="block sm:inline">Apply Now for Rook × Zoho Startup Credits</span>
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1 inline-block" />
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                asChild
                className="border-[#121212] text-[#121212] hover:bg-[#121212] hover:text-white transition-all"
              >
                <a href="/rook-for-startups" target="_blank" rel="noopener noreferrer">
                  Learn More
                </a>
              </Button>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-[#00d437] mr-2" />
                Exclusive startup credits
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-[#00d437] mr-2" />
                50+ integrated business apps
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-[#00d437] mr-2" />
                Growth automation included
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
    </>
  );
};

export default ZohoPartnership;
