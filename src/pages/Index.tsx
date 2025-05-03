
import React, { useEffect, useState } from "react";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { Press } from "@/components/Press";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Add a small delay to ensure smooth entrance animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen bg-white text-black transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Hero />
      <div className="relative overflow-hidden">
        <Products />
        <Press />
      </div>
    </div>
  );
};

export default Index;
