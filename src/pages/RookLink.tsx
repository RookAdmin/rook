import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Link2, BarChart3, Palette, ShoppingBag, Smartphone, Monitor, Star, Check, ExternalLink, Users, Zap, Globe, Layout, Image, Share2, ArrowRight, User, TrendingUp, Target, Sparkles, Settings, MousePointerClick, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const RookLink = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const impactMetrics = [
    {
      title: "Creator Profile",
      description: "Build a professional profile that showcases your brand and connects with your audience.",
      icon: <User className="h-16 w-16" />,
      color: "#00d437",
      ctaText: "Explore Profile Features",
      url: "https://links.rookhq.com/creator-profile"
    },
    {
      title: "Creator Links",
      description: "Organize all your important links in one place for easy access and better engagement.",
      icon: <Link2 className="h-16 w-16" />,
      color: "#0096d4",
      ctaText: "Start Linking",
      url: "https://links.rookhq.com/creator-links"
    },
    {
      title: "Creator Impact",
      description: "Measure and amplify your influence with detailed analytics and performance insights.",
      icon: <TrendingUp className="h-16 w-16" />,
      color: "#dc2e3e",
      ctaText: "View Analytics",
      url: "https://links.rookhq.com/creator-impact"
    },
    {
      title: "Influencer Profile",
      description: "Stand out with verified badges and premium profile features that build trust.",
      icon: <Star className="h-16 w-16" />,
      color: "#ffd800",
      ctaText: "Get Verified",
      url: "https://links.rookhq.com/influencer-profile"
    },
    {
      title: "Affiliate Links",
      description: "Monetize your content with seamless affiliate link management and tracking.",
      icon: <Zap className="h-16 w-16" />,
      color: "#00d437",
      ctaText: "Start Earning",
      url: "https://links.rookhq.com/affiliate-links"
    },
    {
      title: "Shop Tile",
      description: "Turn your bio link into a storefront with product tiles and direct purchase options.",
      icon: <ShoppingBag className="h-16 w-16" />,
      color: "#0096d4",
      ctaText: "Open Shop",
      url: "https://links.rookhq.com/shop-tile"
    },
    {
      title: "Tool Automation",
      description: "Automate workflows and integrate with your favorite tools for seamless operations.",
      icon: <Settings className="h-16 w-16" />,
      color: "#dc2e3e",
      ctaText: "Automate Now",
      url: "https://links.rookhq.com/tool-automation"
    },
    {
      title: "Retargeting & Pixels",
      description: "Track conversions and retarget visitors with pixel integration and advanced analytics.",
      icon: <Target className="h-16 w-16" />,
      color: "#ffd800",
      ctaText: "Set Up Pixels",
      url: "https://links.rookhq.com/retargeting-pixels"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % impactMetrics.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + impactMetrics.length) % impactMetrics.length);
  };

  // Auto-advance slides every 4 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % impactMetrics.length);
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

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Rook Links",
      "description": "Modern link-in-bio tool for creators and businesses",
      "applicationCategory": "SocialNetworkingApplication",
      "operatingSystem": "Web Browser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "500"
      },
      "featureList": [
        "Smart Tiles with Rich Content",
        "Shop Mode for Direct Selling",
        "Real-time Analytics Dashboard",
        "Custom Branding",
        "Social Media Integration"
      ]
    }
  ];

  const faqData = [
    {
      question: "What is Rook Links?",
      answer: "Rook Links is a modern bio link tool that helps creators, brands, and businesses share everything they do in one smart link. Add social media, videos, products, and even create a shop directly from your bio."
    },
    {
      question: "How do I add products to my Rook Links?",
      answer: "With Shop Mode (Pro feature), you can upload multiple product images with names, links, and captions. Create a scrollable product bar that integrates seamlessly with your other content tiles."
    },
    {
      question: "Is Rook Links free?",
      answer: "Yes, Rook Links offers a free plan to get started. You can upgrade to Pro anytime to unlock advanced features like Shop Mode, custom branding, and detailed analytics."
    },
    {
      question: "What is Shop Mode in Rook Links?",
      answer: "Shop Mode is a Pro feature that transforms your bio link into a storefront. Add product thumbnails, descriptions, and direct purchase links to sell directly from your link-in-bio."
    },
    {
      question: "How is Rook Links different from Linktree or Beacons?",
      answer: "Rook Links focuses on smart tiles with rich content integration, Shop Mode for direct selling, and real-time analytics. It's built for creators and businesses who want more than just basic links."
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Rook Links", url: "/links" }
  ];

  const features = [
    {
      icon: <Link2 className="h-6 w-6" />,
      title: "Smart Tiles",
      description: "Add links, embeds, and products in seconds with intelligent tile layouts that adapt to your content type and audience needs."
    },
    {
      icon: <ShoppingBag className="h-6 w-6" />,
      title: "Shop Mode (Pro)",
      description: "Sell directly from your link-in-bio with product thumbnails, captions, and purchase links. Turn your bio into a complete storefront."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Analytics Dashboard", 
      description: "Track clicks, traffic sources, and performance in real-time. Understand your audience and optimize your bio link strategy."
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Custom Branding",
      description: "Personalize your Rook Links with custom colors, logos, and layouts that match your brand identity and aesthetic preferences."
    }
  ];

  const testimonials = [
    {
      quote: "Rook Links transformed how I share my work. The Shop Mode feature helped me increase sales by 300%.",
      author: "Sarah Chen",
      role: "Digital Creator",
      avatar: "SC"
    },
    {
      quote: "Finally, a bio link tool that doesn't look generic. The analytics are incredibly detailed.",
      author: "Marcus Johnson", 
      role: "Brand Manager",
      avatar: "MJ"
    },
    {
      quote: "Clean, professional, and powerful. Exactly what our agency needed for client campaigns.",
      author: "Emma Rodriguez",
      role: "Creative Director", 
      avatar: "ER"
    }
  ];

  const faqs = [
    {
      question: "What is Rook Links?",
      answer: "Rook Links is a modern bio link tool that helps creators, brands, and businesses share everything they do in one smart link. Add social media, videos, products, and even create a shop directly from your bio."
    },
    {
      question: "How do I add products to my Rook Links?",
      answer: "With Shop Mode (Pro feature), you can upload multiple product images with names, links, and captions. Create a scrollable product bar that integrates seamlessly with your other content tiles."
    },
    {
      question: "Is Rook Links free?",
      answer: "Yes, Rook Links offers a free plan to get started. You can upgrade to Pro anytime to unlock advanced features like Shop Mode, custom branding, and detailed analytics."
    },
    {
      question: "What is Shop Mode in Rook Links?",
      answer: "Shop Mode is a Pro feature that transforms your bio link into a storefront. Add product thumbnails, descriptions, and direct purchase links to sell directly from your link-in-bio."
    },
    {
      question: "How is Rook Links different from Linktree or Beacons?",
      answer: "Rook Links focuses on smart tiles with rich content integration, Shop Mode for direct selling, and real-time analytics. It's built for creators and businesses who want more than just basic links."
    }
  ];

  return (
    <>
      <SEO
        title="Rook Links – The Modern Link in Bio Tool for Creators & Businesses"
        description="Rook Links helps creators and businesses share everything in one smart link. Add social media, videos, products, and even create a shop directly from your bio. Free to start, upgrade to Pro for advanced features."
        keywords="link in bio, bio link tool, linktree alternative, beacons alternative, social media links, creator tools, business links, shop mode, product links, bio link analytics"
        canonical="/links"
        geoRegion="IN"
        geoPlacename="India"
        structuredData={structuredData}
        faqData={faqData}
        breadcrumbs={breadcrumbs}
      />
    <div className="min-h-screen bg-white pt-16 overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:pt-8 lg:pb-20 px-4 relative overflow-x-hidden">
        {/* Background with subtle pattern */}
        <div className="absolute inset-0 bg-gray-50 opacity-60" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="text-[#00d437] border-[#00d437]">
                  Rook Links by Rook HQ
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-textPrimary leading-tight">
                  The Smart Bio Link for <span className="text-[#00d437]">Creators</span>, Brands & Businesses
                </h1>
                <h2 className="text-xl text-textSecondary max-w-lg">
                  Turn one link into a hub for everything you do: products, social, videos, and more.
                </h2>
              </div>
              
              <div className="flex items-center justify-start">
                <a 
                  href="https://links.rookhq.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 bg-[#00d437] px-6 py-3 rounded-full hover:bg-[#00d437]/90 transition-all shadow-md hover:shadow-lg"
                >
                  <span className="text-white font-medium">clickl.in/</span>
                  <div className="bg-white rounded-full px-4 py-1.5">
                    <span className="text-[#121212] font-medium">reserve your username</span>
                  </div>
                  <ExternalLink className="h-4 w-4 text-white" />
                </a>
              </div>
            </div>
            
            <div className="relative flex justify-center lg:justify-end">
              <div className="w-full max-w-[320px] sm:max-w-[360px]">
                {/* Modern Black Mobile Device */}
                <div className="bg-[#121212] rounded-[2rem] p-2 shadow-2xl relative lg:group">
                  {/* Mobile Frame */}
                  <div className="bg-white rounded-[1.75rem] overflow-hidden relative w-full h-full">
                    {/* Mobile Screen - full height and width */}
                    <div className="bg-gray-50 h-[500px] sm:h-[600px] flex flex-col w-full">
                      {/* Status Bar with URL - minimal curved rectangle */}
                      <div className="bg-white h-12 flex items-center justify-center border-b border-gray-200 px-4 shrink-0">
                        <div className="bg-gray-100 rounded-full px-8 py-1.5">
                          <span className="text-xs text-gray-700 font-medium">clickl.in/realm</span>
              </div>
            </div>
            
                      {/* Live Preview Frame - scaled down 15%, scroll on desktop only */}
                      <div className="flex-1 w-full bg-white relative overflow-hidden lg:overflow-y-auto lg:overflow-x-hidden" style={{ touchAction: 'none' }}>
                        <div 
                          className="absolute inset-0"
                          style={{ 
                            transform: 'scale(0.85)', 
                            transformOrigin: 'top left',
                            width: '117.65%',
                            height: '117.65%'
                          }}
                        >
                          <iframe
                            src="https://clickl.in/realm"
                            className="w-full h-full border-0 lg:pointer-events-auto"
                            style={{ pointerEvents: 'none' }}
                            title="Rook Links Preview"
                            loading="lazy"
                            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                            scrolling="yes"
                          />
                        </div>
                      </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Rook Links Section - Split Screen Carousel */}
      <section id="impact-metrics" className="py-16 px-4 bg-[#121212]">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Why Rook Links?</h2>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[500px]">
              {/* Left Side - Title and CTA */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
                    {impactMetrics[currentSlide].title}
                  </h3>
                  <Button 
                    className="bg-[#dc2e3e] hover:bg-[#dc2e3e]/90 text-white px-8 py-6 text-lg rounded-full"
                    onClick={() => window.open(impactMetrics[currentSlide].url, '_blank')}
                  >
                    {impactMetrics[currentSlide].ctaText}
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
              
              {/* Right Side - Curved Tile with Icon and Description */}
              <div className="relative">
                <div 
                  className="rounded-[2rem] p-12 flex flex-col items-center justify-center text-white min-h-[400px] transition-all duration-500"
                  style={{ backgroundColor: impactMetrics[currentSlide].color }}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <div className="mb-6 text-white">
                    {impactMetrics[currentSlide].icon}
                  </div>
                  <p className="text-xl text-center text-white/90 max-w-md">
                    {impactMetrics[currentSlide].description}
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
              {impactMetrics.map((_, index) => (
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

      {/* How It Works Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-textPrimary mb-4">
              How It Works
          </h2>
            <p className="text-lg text-textSecondary max-w-2xl mx-auto">
              Transform your Instagram presence in three simple steps
            </p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative">
              {/* Step 1 */}
              <div className="relative text-center space-y-4 z-10">
                <div className="relative">
                  <div className="w-20 h-20 bg-[#00d437] rounded-full flex items-center justify-center mx-auto text-white shadow-lg">
                    <Layout className="h-10 w-10" />
                </div>
                  <div className="absolute -top-2 -left-2 w-8 h-8 bg-[#00d437] rounded-full flex items-center justify-center text-white text-sm font-bold border-2 border-white">
                    1
                  </div>
                </div>
                <h3 className="text-xl font-bold text-textPrimary">Create a Workspace</h3>
                <p className="text-textSecondary leading-relaxed text-sm">
                  Secure a unique <span className="font-semibold text-textPrimary">clickl.in/username</span> and start customizing your visual brand.
                </p>
              </div>
              
              {/* Arrow 1 - Desktop only */}
              <div className="hidden md:block absolute left-[33.33%] top-10 transform -translate-x-1/2 z-0">
                <ArrowRight className="h-6 w-6 text-gray-300" />
            </div>
            
              {/* Step 2 */}
              <div className="relative text-center space-y-4 z-10">
                <div className="relative">
                  <div className="w-20 h-20 bg-[#0096d4] rounded-full flex items-center justify-center mx-auto text-white shadow-lg">
                    <Image className="h-10 w-10" />
                </div>
                  <div className="absolute -top-2 -left-2 w-8 h-8 bg-[#0096d4] rounded-full flex items-center justify-center text-white text-sm font-bold border-2 border-white">
                    2
                </div>
              </div>
                <h3 className="text-xl font-bold text-textPrimary">Add Your Instagram Grid</h3>
                <p className="text-textSecondary leading-relaxed text-sm">
                  Upload or import posts, link each image to your destination.
          </p>
        </div>
              
              {/* Arrow 2 - Desktop only */}
              <div className="hidden md:block absolute left-[66.66%] top-10 transform -translate-x-1/2 z-0">
                <ArrowRight className="h-6 w-6 text-gray-300" />
            </div>
            
              {/* Step 3 */}
              <div className="relative text-center space-y-4 z-10">
                <div className="relative">
                  <div className="w-20 h-20 bg-[#dc2e3e] rounded-full flex items-center justify-center mx-auto text-white shadow-lg">
                    <Share2 className="h-10 w-10" />
                  </div>
                  <div className="absolute -top-2 -left-2 w-8 h-8 bg-[#dc2e3e] rounded-full flex items-center justify-center text-white text-sm font-bold border-2 border-white">
                    3
              </div>
            </div>
                <h3 className="text-xl font-bold text-textPrimary">Share It Anywhere</h3>
                <p className="text-textSecondary leading-relaxed text-sm">
                  Drop your <span className="font-semibold text-textPrimary">clickl.in/username</span> link in bio. Watch conversions roll in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-sm sm:text-base text-textSecondary font-medium mb-3 sm:mb-4 tracking-wide uppercase">
              Trusted by creators worldwide
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-textPrimary max-w-3xl mx-auto leading-tight">
                Over 10,000 creators, startups, and brands trust Rook Links to power their online presence
            </h2>
          </div>
          
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                {/* Quote */}
                <div className="flex-grow mb-6">
                  <p className="text-textPrimary text-base sm:text-lg leading-relaxed font-light">
                    "{testimonial.quote}"
                  </p>
                  </div>
                
                {/* Author Info */}
                <div className="flex items-center space-x-4 pt-6 border-t border-gray-100">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#00d437] to-[#0096d4] rounded-full flex items-center justify-center text-white font-semibold text-sm sm:text-base flex-shrink-0">
                      {testimonial.avatar}
                    </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-textPrimary text-sm sm:text-base truncate">
                      {testimonial.author}
                    </p>
                    <p className="text-textSecondary text-xs sm:text-sm truncate">
                      {testimonial.role}
                    </p>
                  </div>
                    </div>
                  </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold text-textPrimary mb-4">Start free. Upgrade anytime.</h2>
          <p className="text-xl text-textSecondary mb-12">Choose the plan that works for your goals</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 items-stretch">
            {/* Free Plan */}
            <Card className="relative flex flex-col h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Free</CardTitle>
                <div className="text-3xl font-bold text-textPrimary my-2">$0<span className="text-lg text-textSecondary font-normal">/month</span></div>
                <CardDescription>Perfect for trying out Rook Links</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow p-6">
                <div className="space-y-2 text-left mb-4">
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-[#00d437]" />
                    <span>Unlimited Tiles</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-[#00d437]" />
                    <span>Unlimited Social Icons</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-[#00d437]" />
                    <span>Unlimited Scheduled Links</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-[#00d437]" />
                    <span>Picture Tiles</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-[#00d437]" />
                    <span>Mobile responsive</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-[#00d437]" />
                    <span>SEO optimized</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-[#00d437]" />
                    <span>Social Integration</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-[#00d437]" />
                    <span>Standard support</span>
                  </div>
                </div>
                <a 
                  href="https://links.rookhq.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 bg-[#00d437] text-white px-6 py-3 rounded-full hover:bg-[#00d437]/90 transition-all shadow-md hover:shadow-lg w-full mt-auto"
                >
                  <span className="text-white font-medium">clickl.in/</span>
                  <div className="bg-white rounded-full px-4 py-1.5">
                    <span className="text-[#121212] font-medium">username</span>
                  </div>
                  <ExternalLink className="h-4 w-4 text-white" />
                </a>
              </CardContent>
            </Card>
            
            {/* Pro Plan - Most Popular */}
            <Card className="relative border-[#00d437] border-2 flex flex-col h-full">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#00d437] text-white">
                Most Popular
              </Badge>
              <CardHeader>
                <div className="flex items-center justify-center gap-2">
                <CardTitle className="text-2xl">Pro</CardTitle>
                  <Check className="h-5 w-5 text-[#00d437]" />
                </div>
                <div className="text-3xl font-bold text-textPrimary my-2">$5<span className="text-lg text-textSecondary font-normal">/month</span></div>
                <CardDescription>Most popular for creators</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow p-6">
                <div className="space-y-2 text-left mb-4">
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-[#00d437]" />
                    <span>Everything in Free</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-[#00d437]" />
                    <span>Verified Tick</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-[#00d437]" />
                    <span>Video Tiles (1:1, 9:16, 16:9)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-[#00d437]" />
                    <span>Shop Tiles</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-[#00d437]" />
                    <span>Basic Analytics</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-[#00d437]" />
                    <span>Priority Support</span>
                  </div>
                </div>
                <Button 
                  className="w-full bg-[#00d437] hover:bg-[#00d437]/90 text-white mt-auto"
                  onClick={() => window.open('https://links.rookhq.com', '_blank')}
                >
                  Upgrade to Pro
                </Button>
              </CardContent>
            </Card>
            
            {/* Premium Plan */}
            <Card className="relative flex flex-col h-full">
              <CardHeader>
                <div className="flex items-center justify-center gap-2">
                  <CardTitle className="text-2xl">Premium</CardTitle>
                  <Check className="h-5 w-5 text-[#00d437]" />
                </div>
                <div className="text-3xl font-bold text-textPrimary my-2">$9<span className="text-lg text-textSecondary font-normal">/month</span></div>
                <CardDescription>For growing businesses</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow p-6">
                <div className="space-y-2 text-left mb-4">
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-[#00d437]" />
                    <span>Everything in Pro</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-[#00d437]" />
                    <span>Team Members ($1/user/month)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-[#00d437]" />
                    <span>Advanced Integrations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-[#00d437]" />
                    <span>Advanced Analytics Dashboard</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-[#00d437]" />
                    <span>Retargeting Pixels</span>
                  </div>
                </div>
                <Button 
                  variant="outline"
                  className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 mt-auto"
                  onClick={() => window.open('https://links.rookhq.com', '_blank')}
                >
                  Upgrade to Premium
                </Button>
              </CardContent>
            </Card>
            
            {/* Enterprise Plan */}
            <Card className="relative flex flex-col h-full">
              <CardHeader>
                <div className="flex items-center justify-center gap-2">
                  <CardTitle className="text-2xl">Enterprise</CardTitle>
                  <Check className="h-5 w-5 text-[#00d437]" />
                </div>
                <div className="text-3xl font-bold text-textPrimary my-2">Custom</div>
                <CardDescription>For large organizations</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow p-6">
                <div className="space-y-2 text-left mb-4">
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-[#00d437]" />
                    <span>Everything in Premium</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-[#00d437]" />
                    <span>Custom Domain Support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-[#00d437]" />
                    <span>User & Admin Roles</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-[#00d437]" />
                    <span>API Access</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-[#00d437]" />
                    <span>Custom Integrations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-[#00d437]" />
                    <span>White-label Platform</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-[#00d437]" />
                    <span>Dedicated Account Manager</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-[#00d437]" />
                    <span>SLA & Priority Support</span>
                  </div>
                </div>
                <Button 
                  variant="outline"
                  className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 mt-auto"
                  onClick={() => window.open('https://links.rookhq.com', '_blank')}
                >
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-textPrimary mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-textSecondary">Everything you need to know about Rook Links</p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-textPrimary mb-2">{faq.question}</h3>
                  <p className="text-textSecondary">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 bg-[#121212]">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to transform your bio link?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of creators and businesses using Rook Links to grow their online presence
          </p>
          
          <div className="flex justify-center">
            <a 
              href="https://links.rookhq.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-[#00d437] px-6 py-3 rounded-full hover:bg-[#00d437]/90 transition-all shadow-md hover:shadow-lg"
            >
              <span className="text-white font-medium">clickl.in/</span>
              <div className="bg-white rounded-full px-4 py-1.5">
                <span className="text-[#121212] font-medium">reserve your username</span>
              </div>
              <ExternalLink className="h-4 w-4 text-white" />
            </a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default RookLink;
