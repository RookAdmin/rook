import React, { useEffect, useState } from "react";
import { SEO } from "@/components/SEO";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { Press } from "@/components/Press";
import { JoinRookFriends } from "@/components/JoinRookFriends";
import Whatwedo from "@/components/Whatwedo";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Rook",
      "alternateName": "Rook HQ",
      "url": "https://rookhq.com",
      "logo": "https://rookhq.com/thumbnail.png",
      "description": "Simple SaaS tools that empower creators, freelancers, and founders to get more done with less.",
      "foundingDate": "2020",
      "sameAs": [
        "https://twitter.com/rookhq",
        "https://linkedin.com/company/rookhq"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "email": "support@rookhq.com",
        "availableLanguage": ["English"]
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN",
        "addressRegion": "Delhi",
        "addressLocality": "New Delhi"
      },
      "areaServed": "Worldwide",
      "knowsAbout": [
        "SaaS",
        "Software Development",
        "Digital Marketing",
        "Startup Acceleration",
        "Business Automation",
        "Payment Solutions",
        "Link Management",
        "Product Analytics"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Rook Platform",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "1000"
      }
    }
  ];

  const faqData = [
    {
      question: "What is Rook?",
      answer: "Rook is a SaaS company that builds simple yet powerful tools for creators, freelancers, and founders. Our products include Paym.me for payment links, Realm by Rook for branding, Rook Links for bio links, and Rook Scoop for SaaS analytics."
    },
    {
      question: "What products does Rook offer?",
      answer: "Rook offers multiple SaaS products including Paym.me (payment link manager), Realm by Rook (branding and marketing services), Rook Links (smart bio link tool), and Rook Scoop (SaaS publishing and analytics platform)."
    },
    {
      question: "Is Rook free to use?",
      answer: "Rook offers both free and paid plans depending on the product. Many of our tools have free tiers with premium features available for paid subscriptions."
    },
    {
      question: "Where is Rook based?",
      answer: "Rook is based in India, with a global presence serving customers worldwide. We're headquartered in New Delhi, India."
    },
    {
      question: "How can I contact Rook support?",
      answer: "You can contact Rook support through our support portal at support.rookhq.com, via email at support@rookhq.com, or through our 24/7 live chat feature."
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" }
  ];


  useEffect(() => {
    // Add a small delay to ensure smooth entrance animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <SEO
        title="Rook – Bold SaaS Tools for Creators, Freelancers & Visionary Brands"
        description="Empower your business with Rook's simple yet powerful SaaS tools like Paym.me and Realm. From seamless payment links to unforgettable brand storytelling, we help creators and entrepreneurs work smarter, faster, and bigger."
        keywords="SaaS tools, creator economy, Paym.me, digital marketing, Realm by Rook, payment link tool, branding services, freelancers, entrepreneurs, Rook Vision, software for creators, simple SaaS, linktree alternative, future of software, AI-driven SaaS"
        canonical="/"
        geoRegion="IN"
        geoPlacename="India"
        structuredData={structuredData}
        faqData={faqData}
        breadcrumbs={breadcrumbs}
      />
      <div className="min-h-screen bg-white text-[#121212] overflow-x-hidden">
        <Hero />
        <div className="relative overflow-hidden">
          <Products />
          <Whatwedo />
          <JoinRookFriends />
          <Press />
        </div>
      </div>
    </>
  );
};

export default Index;
