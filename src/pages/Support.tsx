import { SEO } from "@/components/SEO";
import { MessageCircle, Book, Video, Mail, Search, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useState, useMemo } from "react";

const Support = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const faqData = [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Rook Support - Help Center & Knowledge Base",
      "description": "Get help with Rook products. 24/7 live chat, raise tickets, watch tutorials, or contact our support team. Comprehensive knowledge base for Rook Links, Rook Scoop, and Paym.me.",
      "url": "https://rookhq.com/support",
      "mainEntity": {
        "@type": "Organization",
        "name": "Rook Support",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Service",
          "availableLanguage": "English",
          "areaServed": "Worldwide",
          "email": "support@rookhq.com",
          "telephone": "+91",
          "contactOption": ["TollFree", "HearingImpairedSupported"],
          "hoursAvailable": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "00:00",
            "closes": "23:59"
          }
        }
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://rookhq.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Support",
            "item": "https://rookhq.com/support"
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqData.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Rook Support Knowledge Base Articles",
      "description": "Comprehensive knowledge base articles for Rook Links, Rook Scoop, and Paym.me",
      "itemListElement": allArticles.map((article, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": article.title,
        "description": article.description,
        "url": `https://rookhq.com/support/knowledge-base/${article.toolSlug}/${article.slug}`
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "QAPage",
      "mainEntity": {
        "@type": "Question",
        "name": "How can I get help with Rook products?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can get help with Rook products through multiple channels: 24/7 live chat support via WhatsApp, comprehensive knowledge base articles, video tutorials on YouTube, email support at support@rookhq.com, or by raising a support ticket. Our knowledge base covers Rook Links (link-in-bio tool), Rook Scoop (SaaS publishing platform), and Paym.me (payment link manager) with detailed guides, tutorials, and FAQs.",
          "author": {
            "@type": "Organization",
            "name": "Rook Support Team"
          },
          "upvoteCount": 1000,
          "dateCreated": "2024-01-01T00:00:00Z"
        }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": "Rook Support Knowledge Base",
      "description": "Learn how to use Rook products effectively with comprehensive guides, tutorials, and documentation",
      "educationalLevel": "Beginner to Advanced",
      "learningResourceType": "Tutorial, Guide, Documentation",
      "teaches": [
        "How to use Rook Links for link-in-bio",
        "How to use Rook Scoop for SaaS publishing",
        "How to use Paym.me for payment links",
        "Product setup and configuration",
        "Feature usage and best practices",
        "Troubleshooting and problem solving"
      ],
      "about": [
        {
          "@type": "SoftwareApplication",
          "name": "Rook Links",
          "description": "Rook Links is a link-in-bio tool that allows creators, brands, and businesses to create a single clickl.in/username link that contains all their important links. It features smart tiles, shop mode, analytics, custom branding, and verified badges. Perfect for Instagram, TikTok, YouTube creators, and businesses.",
          "applicationCategory": "SocialMediaApplication",
          "operatingSystem": "Web, iOS, Android",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "1000"
          }
        },
        {
          "@type": "SoftwareApplication",
          "name": "Rook Scoop",
          "description": "Rook Scoop is an AI-powered SaaS publishing and product insights platform that helps startups and enterprises launch their SaaS products faster. It provides AI-powered analytics, SaaS lifecycle management, tool integrations, product launch scheduling, and team collaboration features.",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.7",
            "reviewCount": "500"
          }
        },
        {
          "@type": "SoftwareApplication",
          "name": "Paym.me",
          "description": "Paym.me is a payment link manager that allows freelancers, creators, and service providers to share one paym.me/username link for all their payment gateways. It supports multiple payment gateways, professional branding, transaction tracking, and secure payment processing.",
          "applicationCategory": "FinanceApplication",
          "operatingSystem": "Web",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "800"
          }
        }
      ],
      "provider": {
        "@type": "Organization",
        "name": "Rook",
        "url": "https://rookhq.com",
        "logo": "https://rookhq.com/thumbnail.png",
        "sameAs": [
          "https://twitter.com/rookhq",
          "https://linkedin.com/company/rookhq"
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Customer Support",
      "provider": {
        "@type": "Organization",
        "name": "Rook",
        "url": "https://rookhq.com"
      },
      "areaServed": "Worldwide",
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceType": "Customer Support",
        "availableLanguage": ["English"],
        "serviceUrl": "https://rookhq.com/support"
      },
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Support", url: "/support" }
  ];

  // Popular articles (most accessed)
  const popularArticles = [
    allArticles.find(a => a.slug === "getting-started-with-rook-links"),
    allArticles.find(a => a.slug === "how-to-add-and-manage-smart-tiles"),
    allArticles.find(a => a.slug === "getting-started-with-rook-scoop"),
    allArticles.find(a => a.slug === "getting-started-with-paym-me"),
    allArticles.find(a => a.slug === "setting-up-shop-mode"),
    allArticles.find(a => a.slug === "ai-powered-insights-and-analytics")
  ].filter(Boolean);

  // Filter articles based on search query
  const filteredArticles = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase();
    return allArticles.filter(article => 
      article.title.toLowerCase().includes(query) ||
      article.description.toLowerCase().includes(query) ||
      article.category.toLowerCase().includes(query) ||
      article.tags.some(tag => tag.toLowerCase().includes(query)) ||
      article.tool.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is handled by filteredArticles
  };

  const supportOptions = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: MessageCircle,
      availability: "24/7 Available",
      action: "Start Chat",
      link: "https://api.whatsapp.com/send/?phone=917094300022&text=Hi%20Rook%20Support%2C%20I%20need%20help%20with"
    },
    {
      title: "Raise a Ticket",
      description: "Submit your issues and track their progress",
      icon: Book,
      availability: "Response in 24h",
      action: "Coming Soon",
      link: "#",
      disabled: true
    },
    {
      title: "Video Tutorials",
      description: "Learn with step-by-step video guides",
      icon: Video,
      availability: "On-Demand",
      action: "Watch Videos",
      link: "https://www.youtube.com/@rookl"
    },
    {
      title: "Email Support",
      description: "Send us detailed questions via email",
      icon: Mail,
      availability: "24h Response",
      action: "Send Email",
      link: "mailto:support@rookhq.com?subject=Support%20Request%20-%20Rook%20Platform&body=Hi%20Rook%20Support%20Team%2C%0A%0AI%20need%20assistance%20with%3A%0A%0A%5BPlease%20describe%20your%20issue%20or%20question%20here%5D%0A%0AThank%20you%21"
    }
  ];

  return (
    <>
      <SEO
        title="Rook Support | 24/7 Help Center - Knowledge Base, Live Chat, Tickets & Tutorials"
        description="Get comprehensive help with Rook products. 24/7 live chat support via WhatsApp, raise support tickets, watch video tutorials, or email our support team. Access detailed knowledge base articles for Rook Links (clickl.in link-in-bio), Rook Scoop (AI-powered SaaS publishing), and Paym.me (payment link manager). Find answers to FAQs, setup guides, feature tutorials, troubleshooting tips, and best practices."
        keywords="Rook support, Rook help center, Rook knowledge base, Rook Links help, Rook Links documentation, clickl.in help, Rook Scoop help, Rook Scoop documentation, Paym.me help, Paym.me documentation, customer support, 24/7 support, live chat support, support tickets, FAQ, tutorials, setup guides, troubleshooting, link-in-bio help, SaaS publishing help, payment links help, Rook Links setup, Rook Scoop setup, Paym.me setup, Rook customer service, technical support, product support, Rook assistance"
        canonical="/support"
        geoRegion="IN"
        geoPlacename="India"
        structuredData={structuredData}
        faqData={faqData}
        breadcrumbs={breadcrumbs}
        articlePublishedTime="2024-01-01T00:00:00Z"
        articleModifiedTime={new Date().toISOString()}
      />
      <div className="pt-16 min-h-screen bg-white w-full overflow-x-hidden">
      {/* Hero Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              How can we help you?
            </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10">
              Get the support you need to succeed with Rook
            </p>
            
            {/* Search Bar */}
              <form onSubmit={handleSearch} className="max-w-2xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 z-10" />
              <Input 
                  type="text"
                placeholder="Search for help articles, guides, and more..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-24 py-6 text-base rounded-full border-2 border-gray-200 focus:border-[#0096d4] w-full"
              />
                <Button 
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#0096d4] hover:bg-[#0096d4]/90 rounded-full px-6 py-2"
                >
                Search
              </Button>
              </form>

              {/* Search Results */}
              {searchQuery && filteredArticles.length > 0 && (
                <div className="max-w-2xl mx-auto mt-6 bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto">
                  {filteredArticles.map((article) => (
                    <Link
                      key={article.id}
                      to={`/support/knowledge-base/${article.toolSlug}/${article.slug}`}
                      className="block p-4 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{article.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">{article.description}</p>
                          <div className="flex items-center gap-2">
                            <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                              {article.tool}
                            </span>
                            <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                              {article.category}
                            </span>
                          </div>
                        </div>
                        <ArrowRight className="h-5 w-5 text-gray-400 ml-4 flex-shrink-0" />
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {searchQuery && filteredArticles.length === 0 && (
                <div className="max-w-2xl mx-auto mt-6 bg-white rounded-lg shadow-lg border border-gray-200 p-8 text-center">
                  <p className="text-gray-600">No results found for "{searchQuery}"</p>
                  <p className="text-sm text-gray-500 mt-2">Try different keywords or browse by tool below</p>
                </div>
              )}
          </div>
        </div>
      </section>

        {/* Knowledge Base Tools - Icon wise below search */}
        <section className="py-12 sm:py-16 bg-white w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Browse by Tool
            </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Find help articles organized by product
            </p>
          </div>
          
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {knowledgeBaseTools.map((tool) => (
                <Link
                  key={tool.slug}
                  to={`/support/knowledge-base/${tool.slug}`}
                  className="group bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8 hover:border-[#0096d4] transition-all duration-300 text-center"
                >
                <div className="flex justify-center mb-4">
                    <img 
                      src={tool.logo} 
                      alt={tool.name}
                      className="h-16 sm:h-20 object-contain group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    {tool.description}
                  </p>
                  <div className="flex items-center justify-center text-[#0096d4] font-medium text-sm">
                    <span>View Articles</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
                </Link>
            ))}
          </div>
        </div>
      </section>

        {/* Popular Help Articles */}
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50 w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Popular Help Articles
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Quick answers to the most common questions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
              {popularArticles.map((article) => (
                <Link
                  key={article.id}
                  to={`/support/knowledge-base/${article.toolSlug}/${article.slug}`}
                  className="bg-white p-5 sm:p-6 rounded-xl border border-gray-200 hover:border-[#0096d4] hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <img 
                          src={knowledgeBaseTools.find(t => t.slug === article.toolSlug)?.iconLogo || knowledgeBaseTools.find(t => t.slug === article.toolSlug)?.logo || ""}
                          alt={article.tool}
                          className="w-5 h-5 object-contain"
                          onError={(e) => {
                            // Fallback to text logo if icon doesn't exist
                            const tool = knowledgeBaseTools.find(t => t.slug === article.toolSlug);
                            if (tool && tool.logo) {
                              (e.target as HTMLImageElement).src = tool.logo;
                            } else {
                              (e.target as HTMLImageElement).style.display = 'none';
                            }
                          }}
                        />
                        <span className="text-xs font-medium text-gray-500">{article.tool}</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-[#0096d4] transition-colors mb-2">
                        {article.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {article.description}
                      </p>
                    </div>
                    <Book className="h-5 w-5 text-gray-400 group-hover:text-[#0096d4] transition-colors ml-3 flex-shrink-0" />
                  </div>
                  <div className="flex items-center text-[#0096d4] text-sm font-medium mt-4">
                    <span>Read more</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-8 sm:mt-12">
              <Button 
                variant="outline" 
                className="border-2 border-[#0096d4] text-[#0096d4] hover:bg-[#0096d4] hover:text-white px-6 py-2"
                onClick={() => setSearchQuery("")}
              >
                View All Articles
              </Button>
            </div>
          </div>
        </section>

        {/* Choose Your Support Channel */}
        <section className="py-12 sm:py-16 md:py-20 bg-white w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                Choose Your Support Channel
              </h2>
              <p className="text-base sm:text-lg text-gray-600 px-4">
                Multiple ways to get the help you need, when you need it
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
              {supportOptions.map((option, index) => (
                option.disabled ? (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-md border border-gray-100 opacity-75 cursor-not-allowed"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-blue-50 rounded-full">
                        <option.icon className="h-8 w-8 text-[#0096d4]" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-2 text-gray-900">{option.title}</h3>
                    <p className="text-gray-600 text-center mb-4 text-sm">{option.description}</p>
                    <div className="text-center mb-4">
                      <span className="inline-block px-3 py-1 bg-green-50 text-green-700 text-xs rounded-full font-medium">
                        {option.availability}
                      </span>
                    </div>
                    <Button className="w-full bg-gray-400 text-white cursor-not-allowed" disabled>
                      {option.action}
                    </Button>
                  </div>
                ) : (
                  <a
                    key={index}
                    href={option.link}
                    target={option.link.startsWith('mailto:') ? undefined : '_blank'}
                    rel={option.link.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-xl hover:border-[#0096d4] transition-all duration-300 group"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-blue-50 rounded-full group-hover:bg-[#0096d4]/10 transition-colors">
                        <option.icon className="h-8 w-8 text-[#0096d4]" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-2 text-gray-900">{option.title}</h3>
                    <p className="text-gray-600 text-center mb-4 text-sm">{option.description}</p>
                    <div className="text-center mb-4">
                      <span className="inline-block px-3 py-1 bg-green-50 text-green-700 text-xs rounded-full font-medium">
                        {option.availability}
                      </span>
                    </div>
                    <Button className="w-full bg-[#0096d4] hover:bg-[#0096d4]/90 text-white">
                      {option.action}
                    </Button>
                  </a>
                )
              ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50 w-full mb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-[#dc2e3e] to-[#cc2934] rounded-2xl p-8 sm:p-12 text-white text-center">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Still Need Help?
              </h2>
                <p className="text-base sm:text-lg mb-8 opacity-90">
                Our support team is here to help you succeed
              </p>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="h-5 w-5" />
                  <a href="mailto:support@rookhq.com" className="hover:underline">
                    support@rookhq.com
                  </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Support;
