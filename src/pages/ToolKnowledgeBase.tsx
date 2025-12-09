import { SEO } from "@/components/SEO";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, Book, ArrowLeft } from "lucide-react";
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const ToolKnowledgeBase = () => {
  const { toolSlug } = useParams<{ toolSlug: string }>();
  const [searchQuery, setSearchQuery] = useState("");

  const tools = {
    "rook-links": {
      name: "Rook Links",
      logo: "/rook-saas-assets/Rook Links/rooklinks-greenwhitelogo.png",
      description: "Link-in-bio tool for creators",
      color: "#34A853"
    },
    "rook-scoop": {
      name: "Rook Scoop",
      logo: "/rook-saas-assets/Rook Scoop/rookscoop-redwhitelogo.png",
      description: "AI-powered SaaS publishing platform",
      color: "#0096d4"
    },
    "paym-me": {
      name: "Paym.me by Rook",
      logo: "/rook-saas-assets/Paym.me by Rook/paymme-bluewhitelogo.png",
      description: "Payment solutions platform",
      color: "#dc2e3e"
    }
  };

  const allArticles = {
    "rook-links": [
      { id: "getting-started-with-rook-links", slug: "getting-started-with-rook-links", title: "Getting Started with Rook Links", category: "Getting Started", description: "Learn how to create your clickl.in/username and set up your first bio link" },
      { id: "how-to-add-and-manage-smart-tiles", slug: "how-to-add-and-manage-smart-tiles", title: "How to Add and Manage Smart Tiles", category: "Features", description: "Step-by-step guide to adding links, images, videos, and content to your bio" },
      { id: "setting-up-shop-mode", slug: "setting-up-shop-mode", title: "Setting Up Shop Mode", category: "Pro Features", description: "Turn your bio link into a storefront with product tiles and direct selling" },
      { id: "understanding-analytics-dashboard", slug: "understanding-analytics-dashboard", title: "Understanding Analytics Dashboard", category: "Analytics", description: "Track clicks, traffic sources, and performance metrics in real-time" },
      { id: "custom-branding-and-themes", slug: "custom-branding-and-themes", title: "Custom Branding and Themes", category: "Customization", description: "Personalize your Rook Links with custom colors, logos, and layouts" },
      { id: "creator-profile-and-verified-badges", slug: "creator-profile-and-verified-badges", title: "Creator Profile and Verified Badges", category: "Features", description: "Build a professional profile and get verified to build trust with your audience" }
    ],
    "rook-scoop": [
      { id: "getting-started-with-rook-scoop", slug: "getting-started-with-rook-scoop", title: "Getting Started with Rook Scoop", category: "Getting Started", description: "Launch your SaaS product faster with AI-powered publishing and insights" },
      { id: "ai-powered-insights-and-analytics", slug: "ai-powered-insights-and-analytics", title: "AI-Powered Insights and Analytics", category: "Analytics", description: "Get actionable insights powered by AI to optimize your product strategy" },
      { id: "saas-lifecycle-management", slug: "saas-lifecycle-management", title: "SaaS Lifecycle Management", category: "Management", description: "Manage your complete SaaS journey from idea validation to market launch" },
      { id: "tool-integrations-and-workflow", slug: "tool-integrations-and-workflow", title: "Tool Integrations and Workflow", category: "Integrations", description: "Connect with Slack, Jira, GitHub, Figma, and more for seamless workflows" },
      { id: "product-launch-scheduling", slug: "product-launch-scheduling", title: "Product Launch Scheduling", category: "Planning", description: "Plan and schedule your product launches effectively with Rook Scoop's scheduling features" },
      { id: "team-collaboration-features", slug: "team-collaboration-features", title: "Team Collaboration Features", category: "Collaboration", description: "Built for product teams, startups, and enterprises with advanced collaboration" }
    ],
    "paym-me": [
      { id: "getting-started-with-paym-me", slug: "getting-started-with-paym-me", title: "Getting Started with Paym.me", category: "Getting Started", description: "Create your paym.me/username and start collecting payments with one link" },
      { id: "creating-and-sharing-payment-links", slug: "creating-and-sharing-payment-links", title: "Creating and Sharing Payment Links", category: "Payments", description: "Share a single link for all your payment gateways and get paid fast" },
      { id: "managing-payment-gateways", slug: "managing-payment-gateways", title: "Managing Payment Gateways", category: "Features", description: "Connect and manage multiple payment gateways through one platform" },
      { id: "professional-payment-presentation", slug: "professional-payment-presentation", title: "Professional Payment Presentation", category: "Branding", description: "Look professional while staying simple with branded payment links" },
      { id: "tracking-payments-and-transactions", slug: "tracking-payments-and-transactions", title: "Tracking Payments and Transactions", category: "Management", description: "Monitor all your payments and transactions in one place" },
      { id: "security-and-privacy", slug: "security-and-privacy", title: "Security and Privacy", category: "Security", description: "Understanding security measures and privacy protection for your payments" }
    ]
  };

  const tool = toolSlug ? tools[toolSlug as keyof typeof tools] : null;
  const articles = toolSlug ? allArticles[toolSlug as keyof typeof allArticles] || [] : [];

  const filteredArticles = useMemo(() => {
    if (!searchQuery.trim()) return articles;
    const query = searchQuery.toLowerCase();
    return articles.filter(article =>
      article.title.toLowerCase().includes(query) ||
      article.description.toLowerCase().includes(query) ||
      article.category.toLowerCase().includes(query)
    );
  }, [searchQuery, articles]);

  if (!tool) {
    return (
      <div className="pt-16 min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Tool not found</h1>
          <Link to="/support" className="text-[#0096d4] hover:underline">
            Back to Support
          </Link>
        </div>
      </div>
    );
  }

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Support", url: "/support" },
    { name: tool.name, url: `/support/knowledge-base/${toolSlug}` }
  ];

  return (
    <>
      <SEO
        title={`${tool.name} Knowledge Base | Help Articles, Guides & Documentation | Rook Support`}
        description={`Comprehensive knowledge base for ${tool.name}. Find detailed help articles, step-by-step guides, tutorials, and documentation. Learn how to set up, use features, troubleshoot issues, and get the most out of ${tool.name}. Browse articles by category: Getting Started, Features, Analytics, Customization, and more.`}
        keywords={`${tool.name} help, ${tool.name} documentation, ${tool.name} guides, ${tool.name} tutorials, ${tool.name} setup, ${tool.name} features, ${tool.name} support, ${tool.name} knowledge base, ${tool.name} articles, ${tool.name} FAQ, how to use ${tool.name}, ${tool.name} tips, ${tool.name} best practices`}
        canonical={`/support/knowledge-base/${toolSlug}`}
        breadcrumbs={breadcrumbs}
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": `${tool.name} Knowledge Base`,
            "description": `Help articles and guides for ${tool.name}`,
            "url": `https://rookhq.com/support/knowledge-base/${toolSlug}`,
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": articles.length,
              "itemListElement": articles.map((article, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": article.title,
                "description": article.description,
                "url": `https://rookhq.com/support/knowledge-base/${toolSlug}/${article.slug}`
              }))
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "LearningResource",
            "name": `${tool.name} Help Center`,
            "description": `Comprehensive learning resources and documentation for ${tool.name}. Learn how to set up, configure, and use ${tool.name} effectively with step-by-step guides, tutorials, and best practices.`,
            "educationalLevel": "Beginner to Advanced",
            "learningResourceType": "Tutorial, Guide, Documentation, FAQ",
            "teaches": articles.map(a => `How to ${a.title.toLowerCase()}`),
            "about": {
              "@type": "SoftwareApplication",
              "name": tool.name,
              "description": tool.description,
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            },
            "provider": {
              "@type": "Organization",
              "name": "Rook",
              "url": "https://rookhq.com"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "QAPage",
            "mainEntity": {
              "@type": "Question",
              "name": `How do I use ${tool.name}?`,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": `${tool.name} is ${tool.description}. You can learn how to use ${tool.name} by following our comprehensive knowledge base articles covering setup, features, customization, and best practices. Our guides include step-by-step instructions, tutorials, and troubleshooting tips to help you get the most out of ${tool.name}.`,
                "author": {
                  "@type": "Organization",
                  "name": "Rook Support Team"
                }
              }
            }
          }
        ]}
        articlePublishedTime="2024-01-01T00:00:00Z"
        articleModifiedTime={new Date().toISOString()}
      />
      <div className="pt-16 min-h-screen bg-white w-full overflow-x-hidden">
        {/* Header */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-white w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <Link
              to="/support"
              className="inline-flex items-center text-[#0096d4] hover:text-[#0096d4]/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Support
            </Link>

            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <img src={tool.logo} alt={tool.name} className="w-16 h-16 object-contain" />
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">{tool.name}</h1>
                  <p className="text-gray-600 mt-1">{tool.description}</p>
                </div>
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder={`Search ${tool.name} articles...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-6 rounded-full border-2 border-gray-200 focus:border-[#0096d4] w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="py-12 bg-white w-full mb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((article) => (
                  <Link
                    key={article.id}
                    to={`/support/knowledge-base/${toolSlug}/${article.slug}`}
                    className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#0096d4] hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <img src={tool.logo} alt={tool.name} className="w-5 h-5 object-contain" />
                        <span className="text-xs font-medium text-gray-500">{tool.name}</span>
                      </div>
                      <Book className="h-5 w-5 text-gray-400 group-hover:text-[#0096d4] transition-colors" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#0096d4] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{article.description}</p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xs px-3 py-1 bg-blue-50 text-blue-700 rounded-full">
                        {article.category}
                      </span>
                      <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-[#0096d4] group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No articles found</p>
                <p className="text-gray-500 text-sm mt-2">Try a different search term</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default ToolKnowledgeBase;
