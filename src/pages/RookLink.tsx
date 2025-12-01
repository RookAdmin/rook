import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Link2, BarChart3, Palette, ShoppingBag, Smartphone, Monitor, Star, Check, ExternalLink, Users, Zap, Globe } from "lucide-react";
import { useEffect } from "react";

const RookLink = () => {
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
      <section className="py-12 sm:py-16 md:py-20 px-4 relative overflow-x-hidden">
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
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-[#00d437] hover:bg-[#00d437]/90 text-white"
                  onClick={() => window.open('https://links.rookhq.com', '_blank')}
                >
                  Get Started Free
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-[#0096d4] border-[#0096d4] hover:bg-[#0096d4]/5"
                  onClick={() => window.open('https://links.rookhq.com/pricing', '_blank')}
                >
                  See Pro Features
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-[#0096d4] rounded-2xl p-8 text-white shadow-xl">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Smartphone className="h-6 w-6" />
                    <span className="font-semibold">Rook Links Preview</span>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 space-y-3">
                    <div className="bg-white/20 rounded p-2 text-sm">📱 Instagram</div>
                    <div className="bg-white/20 rounded p-2 text-sm">🛍️ Shop: New Collection</div>
                    <div className="bg-white/20 rounded p-2 text-sm">🎥 Latest YouTube Video</div>
                    <div className="bg-white/20 rounded p-2 text-sm">🌐 Website</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-textPrimary mb-4">Why Rook Links?</h2>
            <p className="text-xl text-textSecondary">The modern bio link tool built for growth and conversion</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4 p-3 bg-[#0096d4]/10 rounded-full w-fit mx-auto">
                    <div className="text-[#0096d4]">{feature.icon}</div>
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-left">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Showcase Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold text-textPrimary mb-8">
            The modern link-in-bio built for growth, creators, and businesses
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Monitor className="h-5 w-5 text-[#0096d4]" />
                  <span className="font-semibold">Desktop View</span>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-100 rounded p-3 flex items-center space-x-3">
                    <div className="w-8 h-8 bg-pink-500 rounded"></div>
                    <span>Instagram Feed</span>
                  </div>
                  <div className="bg-gray-100 rounded p-3 flex items-center space-x-3">
                    <div className="w-8 h-8 bg-red-500 rounded"></div>
                    <span>YouTube Channel</span>
                  </div>
                  <div className="bg-gray-100 rounded p-3 flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#00d437] rounded"></div>
                    <span>Shop: New Products</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Smartphone className="h-5 w-5 text-[#0096d4]" />
                  <span className="font-semibold">Mobile Optimized</span>
                </div>
                <div className="space-y-2">
                  <div className="bg-[#0096d4] rounded p-2 text-white text-center text-sm">
                    @yourcreatorname
                  </div>
                  <div className="bg-gray-100 rounded p-2 text-center text-sm">📱 Follow on Instagram</div>
                  <div className="bg-gray-100 rounded p-2 text-center text-sm">🛍️ Shop Collection</div>
                  <div className="bg-gray-100 rounded p-2 text-center text-sm">🎵 Latest Playlist</div>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-textSecondary mt-8 italic">
            Rook Links mobile bio page demo with shop mode and social integration
          </p>
        </div>
      </section>

      {/* Shop Mode Highlight */}
      <section className="py-16 px-4 bg-[#00d437]/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-textPrimary mb-4">Turn Your Bio Into a Shop</h2>
          <p className="text-xl text-textSecondary mb-8">
            Transform your link-in-bio into a complete creator storefront with Shop Mode
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-[#00d437] rounded-full flex items-center justify-center mx-auto">
                <ShoppingBag className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Upload Products</h3>
              <p className="text-textSecondary">Add multiple product images with names, links, and detailed captions</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-[#0096d4] rounded-full flex items-center justify-center mx-auto">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Scrollable Gallery</h3>
              <p className="text-textSecondary">Create beautiful product carousels that integrate with your content</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-[#dc2e3e] rounded-full flex items-center justify-center mx-auto">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Direct Sales</h3>
              <p className="text-textSecondary">Link directly to checkout pages for instant purchase conversion</p>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="bg-[#dc2e3e] hover:bg-[#dc2e3e]/90 text-white"
            onClick={() => window.open('https://links.rookhq.com/pricing', '_blank')}
          >
            Upgrade to Pro for Shop Mode
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Users className="h-6 w-6 text-[#0096d4]" />
              <span className="text-lg font-semibold text-textPrimary">
                Over 10,000 creators, startups, and brands trust Rook Links to power their online presence
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-[#ffd800] fill-current" />
                    ))}
                  </div>
                  <p className="text-textPrimary italic mb-4">"{testimonial.quote}"</p>
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-10 h-10 bg-[#0096d4] rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-textPrimary">{testimonial.author}</p>
                      <p className="text-sm text-textSecondary">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-textPrimary mb-4">Start free. Upgrade anytime.</h2>
          <p className="text-xl text-textSecondary mb-12">Choose the plan that works for your goals</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-2xl">Free</CardTitle>
                <CardDescription>Perfect for getting started</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-[#00d437]" />
                    <span>Unlimited links</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-[#00d437]" />
                    <span>Basic analytics</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-[#00d437]" />
                    <span>Mobile optimized</span>
                  </div>
                </div>
                <Button 
                  className="w-full bg-[#00d437] hover:bg-[#00d437]/90"
                  onClick={() => window.open('https://links.rookhq.com', '_blank')}
                >
                  Get Started Free
                </Button>
              </CardContent>
            </Card>
            
            <Card className="relative border-[#0096d4] border-2">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#0096d4]">
                Most Popular
              </Badge>
              <CardHeader>
                <CardTitle className="text-2xl">Pro</CardTitle>
                <CardDescription>For creators and businesses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-[#00d437]" />
                    <span>Everything in Free</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-[#00d437]" />
                    <span>Shop Mode</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-[#00d437]" />
                    <span>Custom branding</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-[#00d437]" />
                    <span>Advanced analytics</span>
                  </div>
                </div>
                <Button 
                  className="w-full bg-[#0096d4] hover:bg-[#0096d4]/90"
                  onClick={() => window.open('https://links.rookhq.com/pricing', '_blank')}
                >
                  Go Pro
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
      <section className="py-16 px-4 bg-[#0096d4]">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to transform your bio link?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of creators and businesses using Rook Links to grow their online presence
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-[#0096d4]"
              onClick={() => window.open('https://links.rookhq.com', '_blank')}
            >
              Get Started Free
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-white border-white hover:bg-white/10"
            >
              Discover more Rook products
            </Button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default RookLink;
