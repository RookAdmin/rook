import React, { useEffect, useState } from "react";
import DocumentMeta from "react-document-meta";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { Press } from "@/components/Press";
import Whatwedo from "@/components/Whatwedo";
import { AnnouncementDialog } from "@/components/AnnouncementDialog";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

 const meta = {
  title: "Rook – Bold SaaS Tools for Creators, Freelancers & Visionary Brands",
  description:
    "Empower your business with Rook’s simple yet powerful SaaS tools like Paym.me and Realm. From seamless payment links to unforgettable brand storytelling, we help creators and entrepreneurs work smarter, faster, and bigger.",
  meta: {
    charset: "utf-8",
    name: {
      keywords:
        "SaaS tools, creator economy, Paym.me, digital marketing, Realm by Rook, payment link tool, branding services, freelancers, entrepreneurs, Rook Vision, software for creators, simple SaaS, linktree alternative, future of software, AI-driven SaaS",
    },
  },
};


  useEffect(() => {
    // Add a small delay to ensure smooth entrance animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <DocumentMeta {...meta}>
      <div
        className={`min-h-screen bg-white text-black transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <AnnouncementDialog />
        <Hero />
        <div className="relative overflow-hidden">
          <Whatwedo />
          <Products />
          <Press />
        </div>
      </div>
    </DocumentMeta>
  );
};

export default Index;
