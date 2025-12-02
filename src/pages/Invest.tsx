import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Target, TrendingUp, Link, Users2, BarChart3, Code } from "lucide-react";
import { useEffect, useState } from "react";

const Invest = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "InvestmentOrTrust",
    "name": "Invest in Rook",
    "description": "Invest in Rook's innovative SaaS ecosystem. Join forward-thinking investors backing simple tools with monumental impact. Rook Scoop, Rook Link, and more.",
    "url": "https://rookhq.com/invest",
    "provider": {
      "@type": "Organization",
      "name": "Rook",
      "url": "https://rookhq.com"
    }
  };

  return (
    <>
      <SEO
        title="Invest in Rook | SaaS Investment Opportunities - Rook Scoop, Rook Link & More"
        description="Invest in Rook's innovative SaaS ecosystem. Join forward-thinking investors backing simple tools with monumental impact. Explore investment opportunities in Rook Scoop, Rook Link, and our growing product portfolio. High-growth SaaS investment."
        keywords="invest in Rook, SaaS investment, tech investment, startup investment, SaaS funding, Rook investment opportunities, software investment, tech startup funding, SaaS portfolio, investment in SaaS tools"
        canonical="/invest"
        geoRegion="IN"
        geoPlacename="India"
        structuredData={structuredData}
      />
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="hero-section min-h-screen flex items-center justify-center relative overflow-x-hidden overflow-y-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-white/40 to-gray-100/20 backdrop-blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-24 relative z-10 text-center max-w-7xl">
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight px-2 sm:px-0">
              Invest In Rook
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              We don't just raise capital. We handpick investors who believe in reshaping SaaS and creating new industry standards.
            </p>
            <div className="pt-8">
              <a href="mailto:investors@rookhq.com">
              <Button 
                size="lg" 
                className="bg-[#00d437] hover:bg-[#00c132] text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
              >
                investors@rookhq.com
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2 sm:px-0">
              A New Standard for Investor Partnerships
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Rook doesn't accept every investor. Instead, we carefully select strategic partners aligned with our mission.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="backdrop-blur-sm bg-white/70 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="mb-6 inline-block p-4 bg-[#0096d4]/10 rounded-full">
                  <Target className="h-8 w-8 text-[#0096d4]" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Vision Alignment</h3>
                <p className="text-gray-600 leading-relaxed">
                  We value long-term builders over short-term gains, seeking partners who share our commitment to sustainable innovation.
                </p>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-white/70 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="mb-6 inline-block p-4 bg-[#ffd800]/10 rounded-full">
                  <TrendingUp className="h-8 w-8 text-[#ffd800]" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Industry Impact</h3>
                <p className="text-gray-600 leading-relaxed">
                  Partners who help us create category-defining products that reshape how the world thinks about SaaS tools.
                </p>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-white/70 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="mb-6 inline-block p-4 bg-[#00d437]/10 rounded-full">
                  <Users className="h-8 w-8 text-[#00d437]" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Mutual Growth</h3>
                <p className="text-gray-600 leading-relaxed">
                  Investment as collaboration, not just capital. Building meaningful relationships that drive innovation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Rook is Different */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="space-y-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 px-2 sm:px-0">
                Why Rook is Different
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#00d437] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-gray-600">
                    We're not just building products. We're creating an ecosystem that empowers creators and founders.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#0096d4] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-gray-600">
                    Our focus on simplicity and impact creates tools that genuinely solve problems, not create new ones.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#dc2e3e] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-gray-600">
                    Community-driven development ensures we build what users actually need and want.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#ffd800] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-gray-600">
                    Strategic positioning in the creator economy and SaaS automation markets with massive growth potential.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="backdrop-blur-sm bg-gradient-to-br from-white/60 to-gray-100/40 p-8 rounded-2xl shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/80 p-4 rounded-lg text-center">
                    <img src="/rook-saas-assets/rook-links.png" alt="Rook Link" className="h-8 w-auto mx-auto mb-2 object-contain" />
                    <p className="font-semibold text-gray-900">Rook Link</p>
                    <p className="text-sm text-gray-600">Link Management</p>
                  </div>
                  <div className="bg-white/80 p-4 rounded-lg text-center">
                    <Users2 className="h-8 w-8 text-[#0096d4] mx-auto mb-2" />
                    <p className="font-semibold text-gray-900">Rook Friends</p>
                    <p className="text-sm text-gray-600">Affiliate Hub</p>
                  </div>
                  <div className="bg-white/80 p-4 rounded-lg text-center">
                    <img src="/rook-saas-assets/rook-scoop.png" alt="Rook Scoop" className="h-8 w-auto mx-auto mb-2 object-contain" />
                    <p className="font-semibold text-gray-900">Rook Scoop</p>
                    <p className="text-sm text-gray-600">Data Insights</p>
                  </div>
                  <div className="bg-white/80 p-4 rounded-lg text-center">
                    <Code className="h-8 w-8 text-[#ffd800] mx-auto mb-2" />
                    <p className="font-semibold text-gray-900">Developers</p>
                    <p className="text-sm text-gray-600">Community</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We're Building */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2 sm:px-0">
              The Future of SaaS, Handcrafted at Rook
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="backdrop-blur-sm bg-white/70 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-center">
                  <img src="/rook-saas-assets/rook-scoop-blacktext.png" alt="Rook Scoop" className="h-12 w-auto object-contain" />
                </div>
                <p className="text-gray-600 text-sm">
                  Advanced insights and data analytics platform that transforms raw data into actionable business intelligence.
                </p>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-white/70 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-center">
                  <img src="/rook-saas-assets/rook-links-blacktext.png" alt="Rook Link" className="h-12 w-auto object-contain" />
                </div>
                <p className="text-gray-600 text-sm">
                  Next-generation link management that goes beyond simple shortening to provide deep analytics and user insights.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Exclusivity Callout */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="backdrop-blur-sm bg-gradient-to-br from-white/60 to-gray-100/40 p-16 rounded-3xl shadow-2xl">
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                "We choose our investors as carefully as we build our products."
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* How to Engage */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2 sm:px-0">
              Ready to Join the Journey?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0096d4] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Reach Out</h3>
              <p className="text-gray-600">
                Contact us via email to express your interest and share your investment philosophy.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#00d437] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Alignment Discussion</h3>
              <p className="text-gray-600">
                In-depth conversation with Rook leadership to ensure mutual vision and values alignment.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#ffd800] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Partnership Decision</h3>
              <p className="text-gray-600">
                Final decision based on shared vision and strategic value for both parties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="backdrop-blur-3xl bg-gradient-to-br from-white/40 to-gray-100/20 p-8 sm:p-12 md:p-16 rounded-3xl shadow-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight px-2 sm:px-0">
                If you see the world like we do, let's build the future together.
              </h2>
              <a href="mailto:investors@rookhq.com" className="inline-block">
                <Button 
                  size="lg" 
                  className="bg-[#00d437] hover:bg-[#00c132] text-white px-6 sm:px-8 md:px-10 py-4 sm:py-5 text-base sm:text-lg md:text-xl rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm w-full sm:w-auto"
                >
                  <span className="break-all sm:break-normal">investors@rookhq.com</span>
                  <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Invest;
