import React, { useEffect, useState } from "react";
import { ServiceCard } from "@/components/ServiceCard";
import { motion } from "framer-motion";
import {
  LinkIcon,
  CodeIcon,
  BrushIcon,
  GlobeIcon,
  InstagramIcon,
  SearchIcon,
  BrainIcon,
  ServerIcon,
  PaletteIcon,
} from "lucide-react";

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
      title: "AI Agents Automation",
      description: "Intelligent solutions that streamline operations",
      icon: <BrainIcon className="h-6 w-6" />,
      link: "https://realmrook.com/services/ai-agents-automation",
    },
    {
      title: "Web/App Development",
      description: "Building responsive, scalable digital solutions",
      icon: <CodeIcon className="h-6 w-6" />,
      link: "https://realmrook.com/services/web-app-development",
    },
    {
      title: "Social Media Marketing",
      description: "Strategic engagement across platforms that matters",
      icon: <InstagramIcon className="h-6 w-6" />,
      link: "https://realmrook.com/services/social-media-marketing",
    },
    {
      title: "Branding",
      description:
        "Crafting premium digital-first brand identities for startups",
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
      title: "SEO",
      description: "Optimizing your digital presence for visibility and growth",
      icon: <SearchIcon className="h-6 w-6" />,
      link: "https://realmrook.com/services/seo",
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
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section className="py-12 sm:py-20 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 w-full overflow-x-hidden mb-20">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24"
        >
          <div className="inline-block mb-4 sm:mb-6">
            <div className="h-1 w-16 sm:w-20 md:w-24 bg-[#0096d4] mx-auto rounded-full"></div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4 sm:mb-6">
            What We <span className="text-[#0096d4]">Do</span> ?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg font-light px-4">
            Transforming ideas into digital excellence with{" "}
            <a 
              href="https://realmrook.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img 
                src="/rook-saas-assets/realm-black.png" 
                alt="Realm by Rook" 
                className="inline-block align-middle"
                style={{ height: '42px' }}
              />
            </a>
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
                target="_blank"
                rel="noopener noreferrer"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Whatwedo;
