
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Press = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#f5f5f5] w-full overflow-x-hidden mb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-[#121212]">In the Press</h2>
          <div className="h-1 w-16 bg-[#00d437] mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Card className="border-none shadow-md bg-white">
            <div className="h-2 bg-[#00d437] w-full"></div>
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center gap-8 mb-8">
                <div className="w-24 h-24 rounded-full bg-[#f0f0f0] flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
                  <img 
                    src="/avr.jpeg"
                    alt="Award Icon" 
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#121212] mb-2">FiNext Award Dubai</h3>
                  <p className="text-[#121212]">Innovation in Technology and SaaS</p>
                </div>
              </div>
              
              <blockquote className="border-l-4 border-[#00d437] pl-6 italic text-[#121212] mb-8">
                "Our founder was honored with the FiNext Award in Dubai for innovation
                in technology and SaaS. A proud moment that reflects our dedication
                to building tools that matter."
              </blockquote>
              
              <a
                href="https://www.finextcon.com/aravindh-ravichandran-receives-excellence-in-finance-startups-award-at-finext-conference-2024/"
                className="inline-flex items-center group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="link" className="p-0 text-[#00d437] hover:text-[#00d437]/80">
                  <span>Read the article</span>
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
