
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export const Products = () => {
  return (
    <section className="py-20 bg-white" id="product">
      <div className="container">
        <div className="mb-16 max-w-xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-black">What We Do ?</h2>
          <div className="h-1 w-16 bg-[#dc2e3e] mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* Paym.me Card */}
          <Card className="border border-[#0096d4] shadow-md hover:shadow-lg transition-shadow duration-300 bg-white rounded-md">
            <CardHeader className="pb-0">
              <div className="h-2 w-12 bg-[#0096d4] mb-4"></div>
              <CardTitle className="text-2xl font-semibold text-black">Paym.me</CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-6">
              <p className="text-black">
                A Linktree-style payment link manager for freelancers, creators, and
                service providers. Share one link. Collect payments from everywhere.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="h-5 w-1 bg-[#0096d4] mt-1"></div>
                  <span className="text-black">Share a single link for all your payment gateways</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-1 bg-[#0096d4] mt-1"></div>
                  <span className="text-black">Look professional while staying simple</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-1 bg-[#0096d4] mt-1"></div>
                  <span className="text-black">Get paid. Fast.</span>
                </li>
              </ul>
              <a href="https://paym.me/" target="_blank" rel="noopener noreferrer" className="block mt-4">
  <Button className="w-full bg-white hover:bg-gray-50 text-[#0096d4] border-[#0096d4] border group">
    <span>Learn More</span>
    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
  </Button>
</a>
            </CardContent>
          </Card>

          {/* Realm by Rook Card */}
          <Card className="border border-[#dc2e3e] shadow-md hover:shadow-lg transition-shadow duration-300 bg-white rounded-md">
  <CardHeader className="pb-0">
    <div className="h-2 w-12 bg-[#dc2e3e] mb-4"></div>
    <CardTitle className="text-2xl font-semibold text-black">Realm by Rook</CardTitle>
  </CardHeader>
  <CardContent className="pt-4 space-y-6">
    <p className="text-black">
      Realm by Rook is our creative powerhouse division. We help visionary
      brands launch and scale with clarity, consistency, and soul.
    </p>
    
    <ul className="space-y-3">
      <li className="flex items-start gap-2">
        <div className="h-5 w-1 bg-[#dc2e3e] mt-1"></div>
        <span className="text-black">End-to-end branding</span>
      </li>
      <li className="flex items-start gap-2">
        <div className="h-5 w-1 bg-[#dc2e3e] mt-1"></div>
        <span className="text-black">Campaigns that convert</span>
      </li>
      <li className="flex items-start gap-2">
        <div className="h-5 w-1 bg-[#dc2e3e] mt-1"></div>
        <span className="text-black">Social, content, and strategy — done right</span>
      </li>
    </ul>

    {/* Add margin-top to space out the button */}
    <a href="https://realmrook.com/" target="_blank" rel="noopener noreferrer" className="block mt-4">
      <Button className="w-full bg-white hover:bg-gray-50 text-[#dc2e3e] border-[#dc2e3e] border group">
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
