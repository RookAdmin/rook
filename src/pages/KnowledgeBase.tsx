import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowRight, Book } from "lucide-react";
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const KnowledgeBase = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTool, setSelectedTool] = useState<string | null>(null);

  const tools = [
    {
      name: "Rook Links",
      slug: "rook-links",
      logo: "/rook-saas-assets/rooklinks-greenwhitelogo.png",
      description: "Link-in-bio tool for creators",
      color: "#0D6E42",
      articleCount: 6
    },
    {
      name: "Rook Scoop",
      slug: "rook-scoop",
      logo: "/rook-saas-assets/rookscoop-redwhitelogo.png",
      description: "Newsletter platform for creators",
      color: "#0096d4",
      articleCount: 6
    },
    {
      name: "Paym.me by Rook",
      slug: "paym-me",
      logo: "/rook-saas-assets/paym-logo.png",
      description: "Payment solutions platform",
      color: "#dc2e3e",
      articleCount: 6
    }
  ];

  const allArticles = [
    // Rook Links
    { id: "rl-1", title: "Getting Started with Rook Links", tool: "Rook Links", toolSlug: "rook-links", category: "Getting Started" },
    { id: "rl-2", title: "How to Add and Manage Tiles", tool: "Rook Links", toolSlug: "rook-links", category: "Features" },
    { id: "rl-3", title: "Setting Up Shop Mode", tool: "Rook Links", toolSlug: "rook-links", category: "Pro Features" },
    { id: "rl-4", title: "Understanding Analytics Dashboard", tool: "Rook Links", toolSlug: "rook-links", category: "Analytics" },
    { id: "rl-5", title: "Custom Branding and Themes", tool: "Rook Links", toolSlug: "rook-links", category: "Customization" },
    { id: "rl-6", title: "Video Tiles Setup Guide", tool: "Rook Links", toolSlug: "rook-links", category: "Features" },
    // Rook Scoop
    { id: "rs-1", title: "Creating Your First Newsletter", tool: "Rook Scoop", toolSlug: "rook-scoop", category: "Getting Started" },
    { id: "rs-2", title: "Subscriber Management", tool: "Rook Scoop", toolSlug: "rook-scoop", category: "Management" },
    { id: "rs-3", title: "Designing Newsletter Templates", tool: "Rook Scoop", toolSlug: "rook-scoop", category: "Design" },
    { id: "rs-4", title: "Scheduling and Automation", tool: "Rook Scoop", toolSlug: "rook-scoop", category: "Automation" },
    { id: "rs-5", title: "Analytics and Performance Tracking", tool: "Rook Scoop", toolSlug: "rook-scoop", category: "Analytics" },
    { id: "rs-6", title: "Integrating with Social Media", tool: "Rook Scoop", toolSlug: "rook-scoop", category: "Integrations" },
    // Paym.me
    { id: "pm-1", title: "Setting Up Your Payment Account", tool: "Paym.me by Rook", toolSlug: "paym-me", category: "Getting Started" },
    { id: "pm-2", title: "Accepting Payments", tool: "Paym.me by Rook", toolSlug: "paym-me", category: "Payments" },
    { id: "pm-3", title: "Payment Links and Invoicing", tool: "Paym.me by Rook", toolSlug: "paym-me", category: "Features" },
    { id: "pm-4", title: "Security and Compliance", tool: "Paym.me by Rook", toolSlug: "paym-me", category: "Security" },
    { id: "pm-5", title: "Transaction Management", tool: "Paym.me by Rook", toolSlug: "paym-me", category: "Management" },
    { id: "pm-6", title: "API Integration Guide", tool: "Paym.me by Rook", toolSlug: "paym-me", category: "Integration" }
  ];

  const filteredArticles = useMemo(() => {
    let articles = allArticles;
    
    if (selectedTool) {
      articles = articles.filter(a => a.toolSlug === selectedTool);
    }
    
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      articles = articles.filter(a => 
        a.title.toLowerCase().includes(query) ||
        a.category.toLowerCase().includes(query) ||
        a.tool.toLowerCase().includes(query)
      );
    }
    
    return articles;
  }, [searchQuery, selectedTool]);

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Support", url: "/support" },
    { name: "Knowledge Base", url: "/support/knowledge-base" }
  ];

  return (
    <>
      <SEO
        title="Knowledge Base | Rook Support"
        description="Browse comprehensive help articles and guides for Rook Links, Rook Scoop, and Paym.me by Rook."
        canonical="/support/knowledge-base"
        breadcrumbs={breadcrumbs}
      />
      <div className="pt-16 min-h-screen bg-white w-full overflow-x-hidden">
        {/* Header */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-white w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
                Knowledge Base
              </h1>
              <p className="text-base sm:text-lg text-gray-600 mb-8 text-center">
                Find answers and guides for all Rook products
              </p>

              {/* Search */}
              <div className="relative max-w-2xl mx-auto mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-6 rounded-full border-2 border-gray-200 focus:border-[#0096d4] w-full"
                />
              </div>

              {/* Tool Filters */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <button
                  onClick={() => setSelectedTool(null)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    !selectedTool
                      ? 'bg-[#0096d4] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All Tools
                </button>
                {tools.map((tool) => (
                  <button
                    key={tool.slug}
                    onClick={() => setSelectedTool(tool.slug)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
                      selectedTool === tool.slug
                        ? 'bg-[#0096d4] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <img src={tool.logo} alt={tool.name} className="w-4 h-4 object-contain" />
                    {tool.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-12 bg-white w-full mb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((article) => {
                  const tool = tools.find(t => t.slug === article.toolSlug);
                  return (
                    <Link
                      key={article.id}
                      to={`/support/knowledge-base/${article.toolSlug}/${article.id}`}
                      className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#0096d4] hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          {tool && (
                            <img
                              src={tool.logo}
                              alt={tool.name}
                              className="w-5 h-5 object-contain"
                            />
                          )}
                          <span className="text-xs font-medium text-gray-500">{article.tool}</span>
                        </div>
                        <Book className="h-5 w-5 text-gray-400 group-hover:text-[#0096d4] transition-colors" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#0096d4] transition-colors">
                        {article.title}
                      </h3>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-xs px-3 py-1 bg-blue-50 text-blue-700 rounded-full">
                          {article.category}
                        </span>
                        <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-[#0096d4] group-hover:translate-x-1 transition-all" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No articles found</p>
                <p className="text-gray-500 text-sm mt-2">Try adjusting your search or filter</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default KnowledgeBase;

