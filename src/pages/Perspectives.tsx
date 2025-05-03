import React, { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { client1, urlForClient1 } from "../../lib/sanity";
import Categories from "@/components/perspectives-categories";
import { CATEGORIES } from "@/components/perspectives-categories";

type Post = {
  _id: string;
  title: string;
  description: string;
  paragraph: string;
  perspectiveCategory: string;
  publishedAt: string;
  category: string;
  mainImage: any;
  slug: string;
};

const Perspectives = () => {
  const [scrollY, setScrollY] = useState(0);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const sectionRef = useRef(null);
  const location = useLocation();

  // Update selected category from URL
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const categoryParam = searchParams.get("category") || "All";
    setSelectedCategory(categoryParam);
  }, [location.search]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const categoryFilter =
          selectedCategory === "All"
            ? ""
            : `&& perspectiveCategory == "${selectedCategory}"`;

        const query = `*[_type == "post" ${categoryFilter}] | order(publishedAt desc) {
          _id,
          title,
          description,
          paragraph,
          perspectiveCategory,
          publishedAt,
          category,
          mainImage,
          "slug": slug.current
        }`;

        const data = await client1.fetch(query);
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, [selectedCategory]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white text-textPrimary pt-28 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="h-8 w-64 bg-gray-200 rounded mb-6 animate-pulse"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-white rounded-lg overflow-hidden border border-borderLight shadow-card"
              >
                <div className="h-48 bg-gray-200 animate-pulse"></div>
                <div className="p-6">
                  <div className="h-4 w-24 bg-gray-200 rounded mb-3 animate-pulse"></div>
                  <div className="h-6 w-full bg-gray-200 rounded mb-2 animate-pulse"></div>
                  <div className="h-4 w-full bg-gray-200 rounded mb-4 animate-pulse"></div>
                  <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-white text-textPrimary pt-28 pb-20 relative overflow-hidden"
    >
      {/* Background decor */}
      <div
        className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary/5 animate-pulse hidden md:block"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      />
      <div
        className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-primary/5 animate-pulse hidden md:block"
        style={{
          animationDelay: "1s",
          transform: `translateY(${scrollY * -0.1}px)`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row">
        {/* Main Content */}
        <div className="flex-grow lg:pr-8 w-full lg:w-[calc(100%-380px)]">
          <div className="mb-16">
            <div className="h-1 w-20 bg-primary mb-6"></div>
            <div className="flex items-end gap-3">
              <h1
                className="text-5xl font-bold mb-6 text-primary tracking-tight animate-fade-up"
                style={{ color: "black" }}
              >
                Rook Perspectives
              </h1>
              <Sparkles className="h-5 w-5 text-secondary mb-6 animate-pulse" />
            </div>
            <p
              className="text-xl text-textSecondary max-w-3xl leading-relaxed animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Insights, analysis, and thought leadership from the Rook team on
              the future of productivity tools and digital transformation.
            </p>
          </div>

          {/* Mobile Filter Dropdown (only shows on mobile) */}
          <div className="lg:hidden mb-8 relative">
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="w-full flex items-center justify-between px-4 py-3 bg-white border border-borderLight rounded-lg shadow-sm"
            >
              <span>Filter: {selectedCategory}</span>
              <ChevronDown
                className={`h-5 w-5 transition-transform ${
                  mobileFilterOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {mobileFilterOpen && (
              <div className="absolute z-10 mt-1 w-full bg-white border border-borderLight rounded-lg shadow-lg">
                {["All", ...CATEGORIES.filter((cat) => cat !== "All")].map(
                  (category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setMobileFilterOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 hover:bg-gray-50 ${
                        selectedCategory === category
                          ? "bg-primary/10 text-primary"
                          : ""
                      }`}
                    >
                      {category}
                    </button>
                  )
                )}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <div
                key={post._id}
                className="bg-white backdrop-blur rounded-lg overflow-hidden border border-borderLight hover:border-accent/30 transition-all shadow-card hover:shadow-premium hover:translate-y-[-4px] animate-fade-up"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="relative h-56 overflow-hidden">
                  {post.mainImage && (
                    <img
                      src={urlForClient1(post.mainImage).width(800).url()}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                    <span
                      className="text-xs font-medium text-primary"
                      style={{ color: "#0096d4" }}
                    >
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-xs font-medium text-primary"
                      style={{ color: "#0096d4" }}
                    >
                      {post.perspectiveCategory || "Technology"}
                    </span>
                    <span className="text-xs text-textSecondary">
                      {formatDate(post.publishedAt)}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-textPrimary">
                    {post.title}
                  </h3>
                  <p className="text-textSecondary text-sm mb-4">
                    {post.description}
                  </p>
                  <Button
                    variant="ghost"
                    className="text-primary hover:text-secondary hover:bg-accent/20 p-0 group transition-all"
                    style={{ color: "#0096d4" }}
                    asChild
                  >
                    <Link to={`/perspectives/${post.slug}`}>
                      Read Article{" "}
                      <span className="group-hover:translate-x-1 transition-transform inline-block">
                        →
                      </span>
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Categories Sidebar (only shows on desktop) */}
        <div className="hidden lg:block w-[380px] flex-shrink-0">
          <Categories
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>
      </div>
    </div>
  );
};

export default Perspectives;
