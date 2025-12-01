import React, { useEffect, useState } from "react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Scale, Rocket, CheckCircle, Building, Users, TrendingUp, FileText, Lock, Zap } from "lucide-react";

const HloLegal = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    startups: 0,
    funding: 0,
    countries: 0
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const animateCounters = () => {
        const duration = 2000;
        const steps = 60;
        const stepDuration = duration / steps;
        
        let currentStep = 0;
        
        const interval = setInterval(() => {
          currentStep++;
          const progress = currentStep / steps;
          
          setCounters({
            startups: Math.floor(1000 * progress),
            funding: Math.floor(250 * progress),
            countries: Math.floor(20 * progress)
          });
          
          if (currentStep >= steps) {
            clearInterval(interval);
            setCounters({
              startups: 1000,
              funding: 250,
              countries: 20
            });
          }
        }, stepDuration);
      };
      
      const timer = setTimeout(animateCounters, 1000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Rook × Hlo Enterprise Legal+",
    "description": "Comprehensive legal support and growth automation for startups. Entity formation, compliance, and Rook's automation tools in one package.",
    "provider": {
      "@type": "Organization",
      "name": "Rook"
    },
    "url": "https://rookhq.com/startups/hlo-enterprise-legal"
  };

  return (
    <>
      <SEO
        title="Rook × Hlo Enterprise Legal+ | Legal Support & Growth Automation for Startups"
        description="Get comprehensive legal support and growth automation for your startup. Entity formation, compliance frameworks, and Rook's automation tools combined in one powerful partnership."
        keywords="startup legal services, Hlo Legal, entity formation, legal compliance, startup legal support, incorporation services, legal automation, startup legal framework"
        canonical="/startups/hlo-enterprise-legal"
        geoRegion="IN"
        geoPlacename="India"
        structuredData={structuredData}
      />
    <div className="w-full min-h-screen bg-white pt-16 overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white w-full relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-5xl mx-auto text-center">
            {/* Co-branded logos */}
            <div className="flex items-center justify-center mb-6 sm:mb-8 animate-fade-up">
              <div className="flex items-center gap-4 sm:gap-6">
                <img src="/thumbnail.png" alt="Rook" className="h-14 sm:h-16 md:h-20 w-auto" />
                <span className="text-xl sm:text-2xl text-gray-400">×</span>
                <img src="/partners/Hlo.png" alt="Hlo Enterprise Legal+" className="h-14 sm:h-16 md:h-20 w-auto" />
              </div>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#121212] leading-tight tracking-tight mb-4 sm:mb-6 animate-fade-up px-2 sm:px-0" style={{ animationDelay: "0.2s" }}>
              Rook for Startups × <span className="text-[#dc2e3e]">Hlo Enterprise Legal+</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto mb-6 sm:mb-8 animate-fade-up px-4 sm:px-0" style={{ animationDelay: "0.3s" }}>
              Build. Scale. Protect. Legal infrastructure meets startup acceleration.
            </p>
            
            {/* CTA Button */}
            <div className="flex justify-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Button 
                size="lg" 
                asChild
                className="bg-[#00d437] text-white hover:bg-[#00d437]/90 transition-all hover:translate-y-[-2px] group text-lg px-8 py-4"
              >
                <a href="https://forms.office.com/r/Ap9MBCKhTp?embed=true%22" target="_blank" rel="noopener noreferrer">
                  Get Legal+ Growth Support
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
            
            {/* Background decoration */}
            <div className="absolute top-20 right-10 w-32 h-32 opacity-5 -z-10">
              <div className="w-full h-full rounded-full bg-[#0096d4] animate-pulse"></div>
            </div>
            <div className="absolute bottom-20 left-10 w-24 h-24 opacity-5 -z-10">
              <div className="w-full h-full rounded-full bg-[#00d437] animate-pulse" style={{ animationDelay: "1s" }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Partnership */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50/50 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="h-1 w-20 bg-[#0096d4] mb-6"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-[#121212]">Why This Partnership?</h2>
              <p className="text-lg text-gray-700 mb-8">
                The perfect synergy of startup acceleration and legal infrastructure. Build confidently with Rook's automation while staying protected with Hlo's enterprise-grade legal solutions.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="rounded-full bg-[#0096d4]/10 p-2 mr-4 flex-shrink-0">
                    <Zap className="h-5 w-5 text-[#0096d4]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Automated Legal Infrastructure</h3>
                    <p className="text-gray-600">Contracts, compliance, and IP protection streamlined through AI-driven processes.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="rounded-full bg-[#00d437]/10 p-2 mr-4 flex-shrink-0">
                    <Rocket className="h-5 w-5 text-[#00d437]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Startup Toolkit Integration</h3>
                    <p className="text-gray-600">Funding docs, founder agreements, and ESOPs integrated with growth tools.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="rounded-full bg-[#dc2e3e]/10 p-2 mr-4 flex-shrink-0">
                    <TrendingUp className="h-5 w-5 text-[#dc2e3e]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Scale Faster, Safer</h3>
                    <p className="text-gray-600">Rook's automation + Hlo's enterprise legal tech = accelerated, protected growth.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-premium border border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">Legal Dashboard</span>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-[#00d437]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#ffd800]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#dc2e3e]"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-[#00d437]/10 rounded-lg p-4">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-[#00d437] mr-2" />
                        <span className="text-sm font-medium">Entity Formation Complete</span>
                      </div>
                    </div>
                    <div className="bg-[#0096d4]/10 rounded-lg p-4">
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 text-[#0096d4] mr-2" />
                        <span className="text-sm font-medium">Investor Docs Ready</span>
                      </div>
                    </div>
                    <div className="bg-[#ffd800]/10 rounded-lg p-4">
                      <div className="flex items-center">
                        <Lock className="h-5 w-5 text-[#ffd800] mr-2" />
                        <span className="text-sm font-medium">IP Protection Active</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Offerings */}
      <section className="py-12 sm:py-16 md:py-20 bg-white w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <div className="h-1 w-20 bg-[#0096d4] mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Core Offerings</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Comprehensive solutions that cover every aspect of your startup journey from legal foundation to growth acceleration.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-soft hover:shadow-premium transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="rounded-full bg-[#0096d4]/10 p-4 w-16 h-16 flex items-center justify-center mb-6">
                <Building className="h-8 w-8 text-[#0096d4]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Legal Essentials for Startups</h3>
              <p className="text-gray-600 mb-6">
                Entity formation, contracts, and IP protection streamlined for rapid deployment and compliance.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-[#00d437] mr-2" />
                  Company Registration
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-[#00d437] mr-2" />
                  Founder Agreements
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-[#00d437] mr-2" />
                  IP & Trademark Protection
                </li>
              </ul>
            </div>

            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-soft hover:shadow-premium transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="rounded-full bg-[#00d437]/10 p-4 w-16 h-16 flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-[#00d437]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Investor-Ready Compliance</h3>
              <p className="text-gray-600 mb-6">
                Fundraising documentation and due diligence preparation made simple and investor-friendly.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-[#00d437] mr-2" />
                  Cap Table Management
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-[#00d437] mr-2" />
                  ESOP Implementation
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-[#00d437] mr-2" />
                  Due Diligence Prep
                </li>
              </ul>
            </div>

            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-soft hover:shadow-premium transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="rounded-full bg-[#dc2e3e]/10 p-4 w-16 h-16 flex items-center justify-center mb-6">
                <Rocket className="h-8 w-8 text-[#dc2e3e]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Seamless Growth Tools</h3>
              <p className="text-gray-600 mb-6">
                Rook Link, Friends, Paym.me plus legal frameworks that support scaling with confidence.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-[#00d437] mr-2" />
                  Rook Tool Integration
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-[#00d437] mr-2" />
                  Compliance Automation
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-[#00d437] mr-2" />
                  Growth Legal Support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50/50 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <div className="h-1 w-20 bg-[#0096d4] mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#0096d4]/20 z-0"></div>
              
              <div className="relative z-10 space-y-12">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0096d4] text-white flex items-center justify-center text-xl font-bold">1</div>
                  <div className="ml-8 bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-soft flex-grow">
                    <h3 className="text-xl font-bold mb-2">Onboard Your Startup</h3>
                    <p className="text-gray-600">Register on the Rook × Hlo portal and complete your startup profile for personalized legal and growth recommendations.</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00d437] text-white flex items-center justify-center text-xl font-bold">2</div>
                  <div className="ml-8 bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-soft flex-grow">
                    <h3 className="text-xl font-bold mb-2">Set Up Legal Infrastructure</h3>
                    <p className="text-gray-600">Entity formation, compliance frameworks, and founder agreements established through automated processes.</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#ffd800] text-white flex items-center justify-center text-xl font-bold">3</div>
                  <div className="ml-8 bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-soft flex-grow">
                    <h3 className="text-xl font-bold mb-2">Build Smarter with Rook</h3>
                    <p className="text-gray-600">Integrate Rook's automation tools for marketing, payments, and growth while maintaining legal compliance.</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#dc2e3e] text-white flex items-center justify-center text-xl font-bold">4</div>
                  <div className="ml-8 bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-soft flex-grow">
                    <h3 className="text-xl font-bold mb-2">Scale Confidently</h3>
                    <p className="text-gray-600">Become investor-ready with comprehensive legal documentation and continue growing with ongoing compliance support.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers & Impact */}
      <section className="py-12 sm:py-16 md:py-20 bg-white w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <div className="h-1 w-20 bg-[#0096d4] mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Numbers & Impact</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Trusted by startups worldwide for legal infrastructure and growth acceleration.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-soft border border-gray-100">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-[#0096d4]">{counters.startups.toLocaleString()}+</div>
              <p className="text-gray-600">Startups legally structured with Hlo Enterprise Legal+</p>
            </div>
            
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-soft border border-gray-100">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-[#00d437]">${counters.funding}M+</div>
              <p className="text-gray-600">In funding raised with investor-ready compliance</p>
            </div>
            
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-soft border border-gray-100">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-[#dc2e3e]">{counters.countries}+</div>
              <p className="text-gray-600">Countries served with global legal solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50/50 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <div className="h-1 w-20 bg-[#0096d4] mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Founder Stories</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-soft border border-gray-100">
              <div className="flex items-start">
                <div className="text-3xl sm:text-4xl md:text-5xl text-[#0096d4] mr-2 sm:mr-4">"</div>
                <div>
                  <p className="text-lg italic mb-6">
                    With Rook's tools and Hlo's legal frameworks, we were fundraising-ready in weeks instead of months. The integration is seamless.
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-[#0096d4]/10 flex items-center justify-center mr-4">
                      <Users className="h-6 w-6 text-[#0096d4]" />
                    </div>
                    <div>
                      <p className="font-semibold">Sarah Chen</p>
                      <p className="text-sm text-gray-600">CEO, TechFlow AI</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-soft border border-gray-100">
              <div className="flex items-start">
                <div className="text-5xl text-[#00d437] mr-4">"</div>
                <div>
                  <p className="text-lg italic mb-6">
                    The legal automation saved us months of paperwork, and Rook's growth tools helped us scale from day one. Perfect partnership.
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-[#00d437]/10 flex items-center justify-center mr-4">
                      <Users className="h-6 w-6 text-[#00d437]" />
                    </div>
                    <div>
                      <p className="font-semibold">Marcus Rodriguez</p>
                      <p className="text-sm text-gray-600">Founder, GreenTech Solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-[#0096d4]/5 to-[#00d437]/5 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Smart. Scale Secure.</h2>
            <p className="text-xl text-gray-700 mb-8">
              Join hundreds of startups building on solid legal foundations while accelerating growth with Rook's powerful automation tools.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                asChild
                className="bg-[#00d437] text-white hover:bg-[#00d437]/90 transition-all hover:translate-y-[-2px] group text-lg px-8 py-4"
              >
                <a href="https://forms.office.com/r/Ap9MBCKhTp?embed=true%22" target="_blank" rel="noopener noreferrer">
                  Apply Now
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
          </div>
        </div>
      </section>

    </div>
    </>
  );
};

export default HloLegal;
