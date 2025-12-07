import React from "react";
import { SEO } from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Droplet, Heart, Globe, Leaf } from "lucide-react";

const ProfitPledge = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Rook × Aravindh Initiative - Profit Pledge",
    "description": "Rook partners with the Aravindh Initiative to channel 10% of profits back to communities, fostering real change in health, welfare, and education.",
    "url": "https://rookhq.com/profit-pledge"
  };

  return (
    <>
      <SEO
        title="Rook × Aravindh Initiative – Empowering Origins, One Partnership at a Time"
        description="Rook partners with the Aravindh Initiative to channel 10% of profits back to the communities that inspire us, fostering real change in health, welfare, and beyond."
        keywords="Rook Aravindh Initiative, profit pledge, corporate social responsibility, blood donation, animal welfare, education programs, community impact, social good"
        canonical="/profit-pledge"
        geoRegion="IN"
        geoPlacename="India"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-white text-[#121212] pt-16">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-x-hidden">
          {/* Minimalistic Background VFX */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-[#dc2e3e] opacity-5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/3 right-1/4 w-56 sm:w-64 md:w-80 h-56 sm:h-64 md:h-80 bg-[#F4B400] opacity-5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/3 w-48 sm:w-56 md:w-72 h-48 sm:h-56 md:h-72 bg-[#34A853] opacity-5 rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block mb-4 sm:mb-6">
                <span className="bg-[#121212] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                  10% Profit Pledge
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-[#121212] px-2 sm:px-0">
                Empowering Origins, One Partnership at a Time
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                Rook partners with the Aravindh Initiative to channel 10% of profits back to the communities that inspire us, fostering real change in health, welfare, and beyond.
              </p>
              
              {/* Hero Visual - Interconnected Nodes */}
              <div className="mt-8 sm:mt-12 md:mt-16 relative">
                <div className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[#dc2e3e] flex items-center justify-center">
                    <Droplet className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[#F4B400] flex items-center justify-center">
                    <Heart className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[#34A853] flex items-center justify-center">
                    <Leaf className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Overview */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-[#0096d4]">
                Why Aravindh Initiative?
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                The Aravindh Initiative drives transformative projects worldwide, from blood donation drives (Red Impact) to feeding street animals (Orange Impact) and sustainable education programs. Rook's alignment ensures 10% of profits directly support these efforts, selected transparently each quarter. This partnership reflects our shared ethos: innovation with purpose, returning value to where it begins.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Highlights */}
        <section className="py-12 sm:py-16 md:py-20 bg-[#f8f9fa]">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Card 1: Red Impact */}
              <Card className="border border-[#dc2e3e] bg-white shadow-sm">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <Droplet className="w-12 h-12 text-[#dc2e3e]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#121212]">
                    Blood Donation Drives
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Mobilizing life-saving donations in underserved areas, impacting thousands through organized campaigns and awareness.
                  </p>
                </CardContent>
              </Card>

              {/* Card 2: Orange Impact */}
              <Card className="border border-[#F4B400] bg-white shadow-sm">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <Heart className="w-12 h-12 text-[#F4B400]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#121212]">
                    Street Animal Welfare
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Providing food, shelter, and care for vulnerable animals, reducing suffering and promoting humane communities.
                  </p>
                </CardContent>
              </Card>

              {/* Card 3: Broader Reach */}
              <Card className="border border-[#0096d4] bg-white shadow-sm">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <Globe className="w-12 h-12 text-[#0096d4]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#121212]">
                    Education & Sustainability
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Funding learning programs and eco-initiatives to build resilient futures, one community at a time.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* The 10% Pledge Explained */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-3xl mx-auto">
              <Card className="bg-white shadow-md border border-gray-200">
                <CardContent className="p-6 sm:p-8 md:p-12">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-[#121212] text-center">
                    10% of Profits: Transparent and Purposeful
                  </h2>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8 text-center">
                    Every quarter, 10% of Rook's profits are allocated to Aravindh Initiative projects via a joint committee. This isn't just a pledge. It's action, verified and reported for accountability. From red-impact health drives to orange-impact animal aid, your support with Rook creates lasting ripples.
                  </p>
                  <p className="text-center">
                    <a 
                      href="https://aravindh.org" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#0096d4] hover:underline"
                    >
                      Learn more at aravindh.org
                    </a>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Voices of Impact */}
        <section className="py-12 sm:py-16 md:py-20 bg-[#f8f9fa]">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 md:space-y-12">
              {/* Quote 1 */}
              <div className="bg-white p-6 sm:p-8 rounded-lg border-l-4 border-[#dc2e3e]">
                <p className="text-lg sm:text-xl text-gray-700 mb-3 sm:mb-4 italic">
                  "Through Rook's support, our blood donation drives have saved countless lives."
                </p>
                <p className="text-gray-600">– Aravindh Volunteer, India</p>
              </div>

              {/* Quote 2 */}
              <div className="bg-white p-8 rounded-lg border-l-4 border-[#F4B400]">
                <p className="text-xl text-gray-700 mb-4 italic">
                  "Feeding street animals has never been easier, thanks to this partnership."
                </p>
                <p className="text-gray-600">– Community Leader, Global</p>
              </div>

              {/* Quote 3 */}
              <div className="bg-white p-8 rounded-lg border-l-4 border-[#34A853]">
                <p className="text-xl text-gray-700 mb-4 italic">
                  "Education programs are thriving, building brighter tomorrows."
                </p>
                <p className="text-gray-600">– Beneficiary, Worldwide</p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Statement */}
        <section className="py-12 sm:py-16 md:py-20 bg-white border-t-4 border-[#34A853]">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-[#121212]">
                Join the Cycle of Good
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8 px-4 sm:px-0">
                At Rook, growth means giving back. Our partnership with Aravindh Initiative ensures 10% of profits fuel meaningful change. Explore their work to see the difference.
              </p>
              <a 
                href="https://aravindh.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-[#121212] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Visit Aravindh Initiative
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProfitPledge;

