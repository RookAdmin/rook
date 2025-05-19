
import React, { useEffect, useState } from "react";
import { ServiceCard } from "@/components/ServiceCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LinkIcon, CodeIcon, BrushIcon, GlobeIcon, InstagramIcon, SearchIcon, BrainIcon, ServerIcon, PaletteIcon } from "lucide-react";

const Whatwedo = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Add a small delay to ensure smooth entrance animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Services data
  const services = [
    {
      title: "Branding",
      description: "Crafting premium digital-first brand identities for startups",
      icon: <BrushIcon className="h-6 w-6" />,
      link: "https://realmrook.com/services/branding",
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive digital experiences that users love",
      icon: <PaletteIcon className="h-6 w-6" />,
      link: "https://realmrook.com/services/ui-ux-design",
    },
    {
      title: "Web/App Development",
      description: "Building responsive, scalable digital solutions",
      icon: <CodeIcon className="h-6 w-6" />,
      link: "https://realmrook.com/services/web-app-development",
    },
    {
      title: "SEO",
      description: "Optimizing your digital presence for visibility and growth",
      icon: <SearchIcon className="h-6 w-6" />,
      link: "https://realmrook.com/services/seo",
    },
    {
      title: "Social Media Marketing",
      description: "Strategic engagement across platforms that matters",
      icon: <InstagramIcon className="h-6 w-6" />,
      link: "https://realmrook.com/services/social-media-marketing",
    },
    {
      title: "AI Business Automation",
      description: "Intelligent solutions that streamline operations",
      icon: <BrainIcon className="h-6 w-6" />,
      link: "https://realmrook.com/services/ai-business-automation",
    },
    {
      title: "Domain Name Consultation",
      description: "Expert guidance for your digital identity",
      icon: <GlobeIcon className="h-6 w-6" />,
      link: "https://realmrook.com/services/domain-name-consultation",
    },
    {
      title: "Enterprise Domain Management",
      description: "Comprehensive domain portfolio management for enterprises",
      icon: <ServerIcon className="h-6 w-6" />,
      link: "https://realmrook.com/services/enterprise-domain-management",
    }
  ];

   return (

<section className="py-32 px-4 bg-white border-t border-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <div className="h-1 w-16 bg-[#0096d4] mx-auto"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">What We Do</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg mt-4">
              <span className="text-[#0096d4] font-medium">Powered by Realm by Rook!</span>
            </p>
          </div>
          
          
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pr-4">
              {services.map((service, index) => (
                <ServiceCard 
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  link={service.link}
                />
              ))}
            </div>
         
        </div>
      </section>
       );
};

export default Whatwedo;