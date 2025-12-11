import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const JoinRookFriends = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white w-full overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-[#121212]">Join Rook Friends</h2>
          <div className="h-1 w-16 bg-[#34A853] mx-auto"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Icon Section */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 flex items-center justify-center mx-auto md:mx-0">
                <img 
                  src="/rook-saas-assets/Rook Friends/rookfriends-blackcoloredlogo.png" 
                  alt="Rook Friends" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-[#121212] mb-8 text-lg leading-relaxed">
                Earn with Rook. It's more than business. It's lifestyle. Turn your network into income with our affiliate and referral program.
              </p>
              <Link to="/friends" className="inline-flex items-center group">
                <Button variant="link" className="p-0 text-[#34A853] hover:text-[#34A853]/80">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
