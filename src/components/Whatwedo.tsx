import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  CodeIcon,
  BrushIcon,
  GlobeIcon,
  InstagramIcon,
  SearchIcon,
  BrainIcon,
  ServerIcon,
  PaletteIcon,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Bot,
} from "lucide-react";

const Whatwedo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Services data with Rook colors
  const services = [
    {
      title: "GEO",
      description: "Location-based solutions and geographic intelligence services",
      icon: <MapPin className="h-16 w-16" />,
      link: "https://realmrook.com/services/geo",
      color: "#0096d4", // Rook Blue
      ctaText: "Explore GEO Services",
    },
    {
      title: "Agentica",
      description: "Advanced AI agent platform for intelligent automation",
      icon: <Bot className="h-16 w-16" />,
      link: "https://realmrook.com/services/agentica",
      color: "#00d437", // Rook Green
      ctaText: "Discover Agentica",
    },
    {
      title: "AI Agents Automation",
      description: "Intelligent solutions that streamline operations",
      icon: <BrainIcon className="h-16 w-16" />,
      link: "https://realmrook.com/services/ai-agents-automation",
      color: "#dc2e3e", // Rook Red
      ctaText: "Explore AI Automation",
    },
    {
      title: "Web/App Development",
      description: "Building responsive, scalable digital solutions",
      icon: <CodeIcon className="h-16 w-16" />,
      link: "https://realmrook.com/services/web-app-development",
      color: "#0096d4", // Rook Blue
      ctaText: "Start Building",
    },
    {
      title: "Social Media Marketing",
      description: "Strategic engagement across platforms that matters",
      icon: <InstagramIcon className="h-16 w-16" />,
      link: "https://realmrook.com/services/social-media-marketing",
      color: "#00d437", // Rook Green
      ctaText: "Boost Engagement",
    },
    {
      title: "Branding",
      description:
        "Crafting premium digital-first brand identities for startups",
      icon: <BrushIcon className="h-16 w-16" />,
      link: "https://realmrook.com/services/branding",
      color: "#ffd800", // Rook Yellow
      ctaText: "Build Your Brand",
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive digital experiences that users love",
      icon: <PaletteIcon className="h-16 w-16" />,
      link: "https://realmrook.com/services/ui-ux-design",
      color: "#dc2e3e", // Rook Red
      ctaText: "Design Experience",
    },
    {
      title: "SEO",
      description: "Optimizing your digital presence for visibility and growth",
      icon: <SearchIcon className="h-16 w-16" />,
      link: "https://realmrook.com/services/seo",
      color: "#0096d4", // Rook Blue
      ctaText: "Optimize Now",
    },
    {
      title: "Domain Name Consultation",
      description: "Expert guidance for your digital identity",
      icon: <GlobeIcon className="h-16 w-16" />,
      link: "https://realmrook.com/services/domain-name-consultation",
      color: "#00d437", // Rook Green
      ctaText: "Get Consultation",
    },
    {
      title: "Enterprise Domain Management",
      description: "Comprehensive domain portfolio management for enterprises",
      icon: <ServerIcon className="h-16 w-16" />,
      link: "https://realmrook.com/services/enterprise-domain-management",
      color: "#ffd800", // Rook Yellow
      ctaText: "Manage Domains",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  // Auto-advance slides every 4 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#121212] w-full overflow-x-hidden mb-20">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What We <span className="text-[#0096d4]">Do</span> ?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg font-light mt-4">
            Transforming ideas into digital excellence with{" "}
            <a 
              href="https://realmrook.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img 
                src="/rook-saas-assets/realmlogo-white.png" 
                alt="Realm by Rook" 
                className="inline-block align-middle"
                style={{ height: '42px' }}
                onError={(e) => {
                  // Fallback to black logo if white version doesn't exist
                  (e.target as HTMLImageElement).src = "/rook-saas-assets/realm-black.png";
                }}
              />
            </a>
          </p>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[500px]">
            {/* Left Side - Title and CTA */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
                  {services[currentSlide].title}
                </h3>
                <Button 
                  className="bg-[#dc2e3e] hover:bg-[#dc2e3e]/90 text-white px-8 py-6 text-lg rounded-full"
                  onClick={() => window.open(services[currentSlide].link, '_blank')}
                >
                  {services[currentSlide].ctaText}
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            
            {/* Right Side - Curved Tile with Icon and Description */}
            <div className="relative">
              <div 
                className="rounded-[2rem] p-12 flex flex-col items-center justify-center text-white min-h-[400px] transition-all duration-500"
                style={{ backgroundColor: services[currentSlide].color }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="mb-6 text-white">
                  {services[currentSlide].icon}
                </div>
                <p className="text-xl text-center text-white/90 max-w-md">
                  {services[currentSlide].description}
                </p>
              </div>
          
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all z-10"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6 text-gray-800" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all z-10"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6 text-gray-800" />
              </button>
            </div>
          </div>
        
          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all rounded-full ${
                  index === currentSlide
                    ? 'w-8 h-3 bg-white'
                    : 'w-3 h-3 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whatwedo;
