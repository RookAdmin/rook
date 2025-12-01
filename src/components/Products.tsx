
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export const Products = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white" id="product">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-8 sm:mb-12 md:mb-16 max-w-xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-black">What Did We Build?</h2>
          <div className="h-1 w-12 sm:w-16 bg-[#dc2e3e] mx-auto"></div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {/* Rook Scoop Card */}
          <Card className="border border-[#dc2e3e] shadow-md hover:shadow-lg transition-shadow duration-300 bg-white rounded-md flex flex-col h-full">
            <CardHeader className="pb-0">
              <div className="h-2 w-12 bg-[#dc2e3e] mb-4"></div>
              <div className="flex flex-col items-start">
                <img 
                  src="/rook-saas-assets/rook-scoop-blacktext.png" 
                  alt="Rook Scoop" 
                  className="mb-3 sm:mb-4 object-contain"
                  style={{ height: 'clamp(40px, 8vw, 57.6px)' }}
                />
              </div>
            </CardHeader>
            <CardContent className="pt-3 sm:pt-4 flex flex-col flex-grow">
              <div className="space-y-4 sm:space-y-5 md:space-y-6 flex-grow">
                <p className="text-sm sm:text-base text-black">
                  AI-powered SaaS publishing and product insights platform. Help founders, teams, and enterprises launch, analyze, and scale products faster.
                </p>
                
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="h-4 sm:h-5 w-[2px] bg-[#dc2e3e] mt-1 flex-shrink-0"></div>
                    <span className="text-black text-sm sm:text-base">Complete SaaS lifecycle management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-4 sm:h-5 w-[2px] bg-[#dc2e3e] mt-1 flex-shrink-0"></div>
                    <span className="text-black text-sm sm:text-base">AI-powered insights and analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-4 sm:h-5 w-[2px] bg-[#dc2e3e] mt-1 flex-shrink-0"></div>
                    <span className="text-black text-sm sm:text-base">Seamless tool integrations</span>
                  </li>
                </ul>
              </div>
              <a href="/scoop" className="block mt-4 sm:mt-5 md:mt-6">
                <Button className="w-full bg-white hover:bg-gray-50 text-[#dc2e3e] border-[#dc2e3e] border group">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* Rook Links Card */}
          <Card className="border border-[#00d437] shadow-md hover:shadow-lg transition-shadow duration-300 bg-white rounded-md flex flex-col h-full">
            <CardHeader className="pb-0">
              <div className="h-2 w-12 bg-[#00d437] mb-4"></div>
              <div className="flex flex-col items-start">
                <img 
                  src="/rook-saas-assets/rook-links-blacktext.png" 
                  alt="Rook Links" 
                  className="mb-3 sm:mb-4 object-contain"
                  style={{ height: 'clamp(40px, 8vw, 57.6px)' }}
                />
              </div>
            </CardHeader>
            <CardContent className="pt-4 flex flex-col flex-grow">
              <div className="space-y-6 flex-grow">
                <p className="text-black text-sm sm:text-base">
                  The smart bio link tool for creators, brands, and businesses. Turn one link into a hub for everything you do: products, social, videos, and more. Create your <span className="font-bold">clickl.in/username</span> domain name.
                </p>
                
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="h-4 sm:h-5 w-[2px] bg-[#00d437] mt-1 flex-shrink-0"></div>
                    <span className="text-black text-sm sm:text-base">Smart tiles with rich content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-4 sm:h-5 w-[2px] bg-[#00d437] mt-1 flex-shrink-0"></div>
                    <span className="text-black text-sm sm:text-base">Shop Mode for direct selling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-4 sm:h-5 w-[2px] bg-[#00d437] mt-1 flex-shrink-0"></div>
                    <span className="text-black text-sm sm:text-base">Real-time analytics dashboard</span>
                  </li>
                </ul>
              </div>
              <a href="/links" className="block mt-4 sm:mt-5 md:mt-6">
                <Button className="w-full bg-white hover:bg-gray-50 text-[#00d437] border-[#00d437] border group">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* Paym.me Card */}
          <Card className="border border-[#0096d4] shadow-md hover:shadow-lg transition-shadow duration-300 bg-white rounded-md flex flex-col h-full">
            <CardHeader className="pb-0">
              <div className="h-2 w-12 bg-[#0096d4] mb-4"></div>
              <div className="flex flex-col items-start">
                <img 
                  src="/rook-saas-assets/paym-logoname.png" 
                  alt="Paym.me" 
                  className="mb-3 sm:mb-4 object-contain"
                  style={{ height: 'clamp(40px, 8vw, 57.6px)' }}
                />
              </div>
            </CardHeader>
            <CardContent className="pt-4 flex flex-col flex-grow">
              <div className="space-y-6 flex-grow">
                <p className="text-black text-sm sm:text-base">
                  A payment link manager for freelancers, creators, and service providers. Get your <span className="font-bold">paym.me/username</span> link and share one link to collect payments from everywhere.
                </p>
                
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="h-4 sm:h-5 w-[2px] bg-[#0096d4] mt-1 flex-shrink-0"></div>
                    <span className="text-black text-sm sm:text-base">Share a single link for all your payment gateways</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-4 sm:h-5 w-[2px] bg-[#0096d4] mt-1 flex-shrink-0"></div>
                    <span className="text-black text-sm sm:text-base">Look professional while staying simple</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-4 sm:h-5 w-[2px] bg-[#0096d4] mt-1 flex-shrink-0"></div>
                    <span className="text-black text-sm sm:text-base">Get paid. Fast.</span>
                  </li>
                </ul>
              </div>
              <a href="https://paym.me/" target="_blank" rel="noopener noreferrer" className="block mt-4 sm:mt-5 md:mt-6">
                <Button className="w-full bg-white hover:bg-gray-50 text-[#0096d4] border-[#0096d4] border group">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* Realm by Rook Card */}
          <Card className="border border-[#131313] shadow-md hover:shadow-lg transition-shadow duration-300 bg-white rounded-md flex flex-col h-full">
            <CardHeader className="pb-0">
              <div className="h-2 w-12 bg-[#131313] mb-4"></div>
              <div className="flex flex-col items-start">
                <img 
                  src="/rook-saas-assets/realm-black.png" 
                  alt="Realm by Rook" 
                  className="mb-3 sm:mb-4 object-contain"
                  style={{ height: 'clamp(40px, 8vw, 57.6px)' }}
                />
              </div>
            </CardHeader>
            <CardContent className="pt-4 flex flex-col flex-grow">
              <div className="space-y-6 flex-grow">
                <p className="text-black text-sm sm:text-base">
                  Realm by Rook is our creative powerhouse venture. Become A Top 1% Brand and scale with clarity, consistency, and soul.
                </p>
                
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="h-4 sm:h-5 w-[2px] bg-[#131313] mt-1 flex-shrink-0"></div>
                    <span className="text-black text-sm sm:text-base">End-to-end branding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-4 sm:h-5 w-[2px] bg-[#131313] mt-1 flex-shrink-0"></div>
                    <span className="text-black text-sm sm:text-base">Campaigns that convert</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-4 sm:h-5 w-[2px] bg-[#131313] mt-1 flex-shrink-0"></div>
                    <span className="text-black text-sm sm:text-base">Social, content, and strategy done right</span>
                  </li>
                </ul>
              </div>

              <a href="https://realmrook.com/" target="_blank" rel="noopener noreferrer" className="block mt-4 sm:mt-5 md:mt-6">
                <Button className="w-full bg-white hover:bg-gray-50 text-[#131313] border-[#131313] border group">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
