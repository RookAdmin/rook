import React, { useEffect, useState } from "react";
import { SEO } from "@/components/SEO";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { Press } from "@/components/Press";
import Whatwedo from "@/components/Whatwedo";
import { X, RotateCcw } from "lucide-react";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showAnniversaryPopup, setShowAnniversaryPopup] = useState(false);
  const [videoFinished, setVideoFinished] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

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

    // Check if user has seen the anniversary popup
    const hasSeenPopup = localStorage.getItem('rook-5th-anniversary-seen');
    if (!hasSeenPopup) {
      // Show popup after a brief delay for better UX
      setTimeout(() => {
        setShowAnniversaryPopup(true);
      }, 500);
    }

    return () => clearTimeout(timer);
  }, []);

  // Handle video autoplay with sound on mobile/tablet
  useEffect(() => {
    if (showAnniversaryPopup && videoRef.current) {
      const video = videoRef.current;
      
      // Set video properties for mobile autoplay
      video.muted = false;
      video.volume = 1.0;
      
      // Attempt to play with sound
      const playPromise = video.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Autoplay started successfully with sound
            video.muted = false;
            video.volume = 1.0;
          })
          .catch((error) => {
            // Autoplay was prevented, try unmuting and playing again
            video.muted = false;
            video.volume = 1.0;
            video.play().catch(() => {
              // If still blocked, ensure video is ready for user interaction
              video.muted = false;
              video.volume = 1.0;
            });
          });
      }
      
      // Also try to enable sound on user interaction with the popup
      const enableSound = () => {
        if (video) {
          video.muted = false;
          video.volume = 1.0;
          video.play().catch(() => {});
        }
      };
      
      // Add click handler to popup container to enable sound
      const popupContainer = document.querySelector('.anniversary-popup-container');
      if (popupContainer) {
        popupContainer.addEventListener('click', enableSound, { once: true });
      }
      
      return () => {
        if (popupContainer) {
          popupContainer.removeEventListener('click', enableSound);
        }
      };
    }
  }, [showAnniversaryPopup]);

  const handleClosePopup = () => {
    setShowAnniversaryPopup(false);
    localStorage.setItem('rook-5th-anniversary-seen', 'true');
  };

  const handleReplayVideo = () => {
    if (videoRef.current) {
      setVideoFinished(false);
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {
        // If play fails, try again with sound enabled
        if (videoRef.current) {
          videoRef.current.muted = false;
          videoRef.current.volume = 1.0;
          videoRef.current.play();
        }
      });
    }
  };

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
          <Press />
        </div>
      </div>

      {/* 5th Year Anniversary Popup */}
      {showAnniversaryPopup && (
        <div className="anniversary-popup-container fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-4xl mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden animate-scale-in">
            {/* Close Button */}
            <button
              onClick={handleClosePopup}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/30 transition-colors backdrop-blur-sm"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Video Container */}
            <div className="relative w-full bg-black group">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                webkit-playsinline="true"
                loop={false}
                className="w-full h-auto"
                preload="auto"
                style={{ outline: 'none' }}
                onEnded={() => setVideoFinished(true)}
              >
                <source src="/rook-saas-assets/rook-5thyear.MP4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Replay Button - Only show after video finishes */}
              {videoFinished && (
                <button
                  onClick={handleReplayVideo}
                  className="absolute bottom-4 right-4 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-black/60 hover:bg-black/80 transition-all backdrop-blur-sm"
                  aria-label="Replay video"
                >
                  <RotateCcw className="w-5 h-5 text-white" />
                </button>
              )}
            </div>

            {/* Title Section - Apple Style */}
            <div className="px-8 py-6 text-center bg-white">
              <h2 className="text-3xl font-light tracking-tight text-[#121212] mb-2">
                Rook. 5 Years.
              </h2>
              <p className="text-lg text-gray-600 font-light">
                We Grow Together
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
