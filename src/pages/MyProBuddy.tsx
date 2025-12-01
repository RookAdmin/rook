import React, { useEffect, useState } from "react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, TrendingUp, Target, Zap, Shield, Rocket, CheckCircle, Star, BarChart3, Network, DollarSign } from "lucide-react";

const MyProBuddy = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    investors: 0,
    startups: 0,
    funding: 0
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
          investors: Math.floor(558 * progress),
          startups: Math.floor(1200 * progress),
          funding: Math.floor(85 * progress)
        });
        
        if (step >= steps) {
          clearInterval(interval);
          setCounters({
            investors: 558,
            startups: 1200,
            funding: 85
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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Rook × MyProBuddy",
    "description": "Startup acceleration program combining Rook's automation tools with MyProBuddy's investor network and mentorship.",
    "provider": {
      "@type": "Organization",
      "name": "Rook"
    },
    "areaServed": "Worldwide",
    "url": "https://rookhq.com/startups/myprobuddy"
  };

  return (
    <>
      <SEO
        title="Rook × MyProBuddy | Startup Acceleration with Growth Automation & Investor Network"
        description="Accelerate your startup with Rook's automation tools and MyProBuddy's investor network. Get mentorship, funding connections, and growth tools in one powerful partnership program."
        keywords="startup acceleration, MyProBuddy, investor network, startup mentorship, funding, startup growth, Rook automation, startup program"
        canonical="/startups/myprobuddy"
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
              <img src="/partners/mypro.avif" alt="MyProBuddy" className="h-14 sm:h-16 md:h-20 w-auto" />
            </div>
            
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#121212] leading-tight tracking-tight mb-6 sm:mb-8 animate-fade-up px-2 sm:px-0" style={{ animationDelay: "0.1s" }}>
              Rook for Startups <span className="text-[#dc2e3e]">×</span> <span className="text-[#0096d4]">MyProBuddy</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12 animate-fade-up px-4 sm:px-0" style={{ animationDelay: "0.2s" }}>
              The venture-acceleration partnership that empowers founders with <span className="text-[#00d437] font-semibold">smart tools</span>, <span className="text-[#0096d4] font-semibold">strategic mentorship</span>, and <span className="text-[#dc2e3e] font-semibold">investor connections</span>.
            </p>
            
            {/* CTA Button */}
            <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button 
                size="lg" 
                asChild
                className="bg-[#00d437] text-white hover:bg-[#00d437]/90 transition-all hover:translate-y-[-2px] text-lg px-12 py-4 rounded-full shadow-premium group"
              >
                <a href="https://forms.office.com/r/Ap9MBCKhTp?embed=true%22" target="_blank" rel="noopener noreferrer">
                  Get Started Today
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
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="h-1 w-12 sm:w-16 md:w-20 bg-[#0096d4] mx-auto mb-4 sm:mb-6"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-[#121212]">Why This Partnership?</h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto px-4">
              Combining Rook's cutting-edge automation tools with MyProBuddy's proven fundraising expertise to create the ultimate startup acceleration ecosystem.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-soft hover:shadow-premium transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#00d437]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-[#00d437]" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-[#121212]">AI-Driven Startup Tools</h3>
                <p className="text-gray-600 text-sm">Rook's smart automation for faster launches</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-soft hover:shadow-premium transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#0096d4]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-[#0096d4]" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-[#121212]">Investor-Ready Mentorship</h3>
                <p className="text-gray-600 text-sm">MyProBuddy's expert guidance for funding success</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-soft hover:shadow-premium transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#dc2e3e]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Network className="h-8 w-8 text-[#dc2e3e]" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-[#121212]">VC & Angel Networks</h3>
                <p className="text-gray-600 text-sm">Access to 558K+ investor connections</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-soft hover:shadow-premium transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#ffd800]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-[#ffd800]" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-[#121212]">Transparent Processes</h3>
                <p className="text-gray-600 text-sm">AI-optimized workflows for founders</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Offerings */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="h-1 w-12 sm:w-16 md:w-20 bg-[#00d437] mx-auto mb-4 sm:mb-6"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-[#121212]">Complete Startup Acceleration Suite</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/90 backdrop-blur-sm border border-[#00d437]/20 shadow-premium hover:shadow-card transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-10">
                <div className="w-20 h-20 bg-[#00d437]/10 rounded-2xl flex items-center justify-center mb-8">
                  <Rocket className="h-10 w-10 text-[#00d437]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#121212]">Startup Toolkit</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Comprehensive Rook ecosystem including Link management, Friends affiliate system, and Scoop analytics to streamline your launch operations.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#00d437] mr-2" />
                    Rook Link for smart URLs
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#00d437] mr-2" />
                    Rook Friends affiliate hub
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#00d437] mr-2" />
                    Rook Scoop insights
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border border-[#0096d4]/20 shadow-premium hover:shadow-card transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-10">
                <div className="w-20 h-20 bg-[#0096d4]/10 rounded-2xl flex items-center justify-center mb-8">
                  <Target className="h-10 w-10 text-[#0096d4]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#121212]">Investor-Ready Support</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  MyProBuddy's proven framework for VC introductions, pitch deck refinement, and valuation optimization to make you funding-ready.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#0096d4] mr-2" />
                    VC network introductions
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#0096d4] mr-2" />
                    Pitch deck optimization
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#0096d4] mr-2" />
                    Valuation guidance
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border border-[#dc2e3e]/20 shadow-premium hover:shadow-card transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-10">
                <div className="w-20 h-20 bg-[#dc2e3e]/10 rounded-2xl flex items-center justify-center mb-8">
                  <DollarSign className="h-10 w-10 text-[#dc2e3e]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#121212]">Funding Pathways</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Strategic guidance across equity funding, debt financing, grants, and CSR opportunities to maximize your capital raising potential.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#dc2e3e] mr-2" />
                    Equity & debt funding
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#dc2e3e] mr-2" />
                    Grant opportunities
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#dc2e3e] mr-2" />
                    CSR partnerships
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50/30 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="h-1 w-12 sm:w-16 md:w-20 bg-[#0096d4] mx-auto mb-4 sm:mb-6"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-[#121212]">Your Journey to Success</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              A streamlined 4-step process that takes you from startup idea to funded scale-up.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#00d437] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-premium">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#121212]">Connect</h3>
                <p className="text-gray-600">Onboard with both Rook and MyProBuddy platforms seamlessly</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#0096d4] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-premium">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#121212]">Build Smarter</h3>
                <p className="text-gray-600">Leverage Rook's automation tools to build and scale efficiently</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#dc2e3e] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-premium">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#121212]">Get Investor-Ready</h3>
                <p className="text-gray-600">MyProBuddy mentorship prepares you for successful fundraising</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#ffd800] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-premium">
                  4
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#121212]">Access Capital</h3>
                <p className="text-gray-600">Connect with our investor network and close funding rounds</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-[#121212]">Partnership Impact</h2>
            <p className="text-lg text-gray-700">Real numbers from our combined ecosystem</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0096d4] mb-3 sm:mb-4">
                {counters.investors}K+
              </div>
              <p className="text-xl text-gray-700 font-medium">Investors Connected</p>
              <p className="text-sm text-gray-500 mt-2">Through MyProBuddy network</p>
            </div>

            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#00d437] mb-4">
                {counters.startups}+
              </div>
              <p className="text-xl text-gray-700 font-medium">Startups Empowered</p>
              <p className="text-sm text-gray-500 mt-2">Using our combined platform</p>
            </div>

            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#dc2e3e] mb-4">
                ${counters.funding}M+
              </div>
              <p className="text-xl text-gray-700 font-medium">Funding Facilitated</p>
              <p className="text-sm text-gray-500 mt-2">Through our partnership</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50/50">
        <div className="container mx-auto px-4 max-w-7xl">
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
                "With Rook's smart automation tools and MyProBuddy's strategic funding support, we went from prototype to Series A in just 8 months. The partnership gave us everything we needed to scale fast and raise smart."
              </blockquote>
              <div className="text-lg font-semibold text-[#121212]">
                Sarah Chen, Founder & CEO
              </div>
              <div className="text-gray-600">
                TechFlow Solutions • $2.5M Series A
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-[#00d437]/5 via-[#0096d4]/5 to-[#dc2e3e]/5">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-[#121212]">
              Start Accelerating Your Startup Today
            </h2>
            <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
              Join the founders who are building smarter, scaling faster, and raising more effectively with our combined ecosystem.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                asChild
                className="bg-[#00d437] text-white hover:bg-[#00d437]/90 transition-all hover:translate-y-[-2px] text-lg px-12 py-4 rounded-full shadow-premium group"
              >
                <a href="https://forms.office.com/r/Ap9MBCKhTp?embed=true%22" target="_blank" rel="noopener noreferrer">
                  Start Accelerating
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
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
                No setup fees
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-[#00d437] mr-2" />
                Expert mentorship included
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-[#00d437] mr-2" />
                Investor network access
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
    </>
  );
};

export default MyProBuddy;
