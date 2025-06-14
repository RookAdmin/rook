"use client";

import DocumentMeta from "react-document-meta";
import { PortableText } from "@portabletext/react";
import { client1 } from "../../lib/sanity";
import React, { Suspense } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Calendar,
  Share2,
  Bookmark,
  MessageSquare,
  ThumbsUp,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Perspective {
  _id: string;
  title: string;
  publishedAt: string;
  description?: string;
  content: any;
  paragraph?: any[];
  body?: any[];
  mainImage?: {
    asset: {
      url: string;
    };
    alt?: string;
  };
  author?: {
    name: string;
    role?: string;
    image?: {
      asset: {
        url: string;
      };
    };
  };
  categories?: Array<{
    _id: string;
    title: string;
    slug?: {
      current: string;
    };
  }>;
  likes?: number;
}

const PerspectiveContent = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [perspective, setPerspective] = React.useState<Perspective | null>(
    null
  );
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<Error | null>(null);
  const [scrollY, setScrollY] = React.useState(0);
  const [liked, setLiked] = React.useState(false);
  const [likeCount, setLikeCount] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    if (!params?.slug) {
      setError(new Error("No slug parameter provided"));
      setLoading(false);
      return;
    }

    async function fetchPerspective() {
      try {
        const query = `*[_type == "perspective" && slug.current == $slug][0]{
          _id,
          title,
          publishedAt,
          description,
          paragraph,
          "body": body[]{
            ...,
            _type == "image" => {
              ...,
              "asset": asset->
            }
          },
          content,
          mainImage{
            asset->{
              url
            },
            alt
          },
          author->{
            name,
            role,
            image{
              asset->{
                url
              }
            }
          },
          categories[]->{
            _id,
            title,
            slug
          },
          likes
        }`;

        const fetchedPerspective = await client1.fetch(query, {
          slug: params.slug,
        });

        if (!fetchedPerspective) {
          navigate("/perspectives");
          return;
        }

        setPerspective(fetchedPerspective);
        setLikeCount(fetchedPerspective.likes || 0);
      } catch (err) {
        console.error("Error fetching perspective:", err);
        setError(err instanceof Error ? err : new Error(String(err)));
      } finally {
        setLoading(false);
      }
    }

    fetchPerspective();
  }, [params?.slug, navigate]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied to clipboard",
      description: "You can now share this perspective",
    });
  };

  const handleSave = () => {
    toast({
      title: "Perspective saved",
      description: "This perspective has been saved to your bookmarks",
    });
  };

  const handleCategoryClick = (categorySlug: string | undefined) => {
    if (categorySlug) {
      navigate(`/perspectives/categories/${categorySlug}`);
    }
  };

  const meta = {
    title: perspective
      ? `${perspective.title} | Rook Perspectives`
      : "Perspective | Rook",
    description:
      perspective?.description ||
      "Read detailed insights and analysis from Rook's thought leaders.",
    meta: {
      charset: "utf-8",
      name: {
        keywords:
          "Rook perspective, thought leadership, industry insights, technology analysis",
      },
    },
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-5 py-24 text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
        <p className="text-gray-700 mb-6">{error.message}</p>
        <Link
          to="/perspectives"
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Back to Perspectives
        </Link>
      </div>
    );
  }

  if (!perspective) {
    return null;
  }

  return (
    <DocumentMeta {...meta}>
      <div className="min-h-screen bg-white pt-24 pb-16 relative overflow-hidden">
        {/* Background decor */}
        <div
          className="absolute top-40 right-10 w-72 h-72 rounded-full bg-blue-100/50 animate-pulse hidden md:block"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        />
        <div
          className="absolute bottom-40 left-10 w-96 h-96 rounded-full bg-blue-100/50 animate-pulse hidden md:block"
          style={{
            animationDelay: "1s",
            transform: `translateY(${scrollY * -0.1}px)`,
          }}
        />

        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/perspectives")}
            className="mb-8 hover:bg-gray-100/10 group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Perspectives
          </Button>

          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-3 animate-fade-up">
              {perspective.categories?.length ? (
                <>
                  <div className="flex flex-wrap gap-2">
                    {perspective.categories.map((category) => (
                      <Button
                        key={category._id}
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          handleCategoryClick(category.slug?.current)
                        }
                        className="text-xs font-medium text-blue-600 hover:bg-blue-50"
                      >
                        {category.title}
                      </Button>
                    ))}
                  </div>
                  <span className="text-gray-300">•</span>
                </>
              ) : null}
              <span className="text-xs text-gray-500 flex items-center">
                <Calendar className="h-3 w-3 mr-1" />
                {new Date(perspective.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black tracking-tight animate-fade-up">
              {perspective.title}
            </h1>

            {perspective.description && (
              <p
                className="text-xl text-gray-600 mb-8 animate-fade-up"
                style={{ animationDelay: "0.2s" }}
              >
                {perspective.description}
              </p>
            )}

            {perspective.mainImage?.asset?.url && (
              <div
                className="mb-10 rounded-xl overflow-hidden animate-fade-up"
                style={{ animationDelay: "0.3s" }}
              >
                <img
                  src={perspective.mainImage.asset.url}
                  alt={
                    perspective.mainImage.alt ||
                    perspective.title ||
                    "Perspective image"
                  }
                  width={1200}
                  height={630}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            <div
              className="flex flex-wrap gap-4 mb-8 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <MessageSquare className="h-4 w-4" />
                Comments
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                className="flex items-center gap-2"
              >
                <Share2 className="h-4 w-4" />
                Share
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleSave}
                className="flex items-center gap-2"
              >
                <Bookmark className="h-4 w-4" />
                Save
              </Button>
            </div>

            <div
              className="prose max-w-none animate-fade-up"
              style={{ animationDelay: "0.5s" }}
            >
              {perspective.body && (
                <PortableText
                  value={perspective.body}
                  components={{
                    block: {
                      h1: ({ children }) => (
                        <h1 className="text-3xl font-bold mb-6 mt-8 text-gray-900">
                          {children}
                        </h1>
                      ),
                      h2: ({ children }) => (
                        <h2 className="text-2xl font-semibold mb-5 mt-7 text-gray-900">
                          {children}
                        </h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="text-xl font-medium mb-4 mt-6 text-gray-900">
                          {children}
                        </h3>
                      ),
                      normal: ({ children }) => (
                        <p className="text-base leading-relaxed mb-4 text-gray-600">
                          {children}
                        </p>
                      ),
                    },
                    list: {
                      bullet: ({ children }) => (
                        <ul className="list-disc ml-5 mb-4 text-gray-600">
                          {children}
                        </ul>
                      ),
                      number: ({ children }) => (
                        <ol className="list-decimal ml-5 mb-4 text-gray-600">
                          {children}
                        </ol>
                      ),
                    },
                    listItem: {
                      bullet: ({ children }) => (
                        <li className="mb-2 text-gray-600">{children}</li>
                      ),
                      number: ({ children }) => (
                        <li className="mb-2 text-gray-600">{children}</li>
                      ),
                    },
                    types: {
                      image: ({ value }) => (
                        <div className="my-6">
                          {value?.asset?.url && (
                            <img
                              src={value.asset.url}
                              alt={value.alt || ""}
                              width={800}
                              height={600}
                              className="rounded-lg"
                            />
                          )}
                          {value.caption && (
                            <p className="text-center text-sm text-gray-500 mt-2">
                              {value.caption}
                            </p>
                          )}
                        </div>
                      ),
                    },
                  }}
                />
              )}

              {perspective.author && (
                <div className="border-t border-gray-200 pt-6 mt-10">
                  <div className="flex items-center gap-4">
                    {perspective.author.image?.asset?.url && (
                      <img
                        src={perspective.author.image.asset.url}
                        alt={perspective.author.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    )}
                    <div>
                      <h3 className="font-bold text-gray-900">
                        {perspective.author.name}
                      </h3>
                      {perspective.author.role && (
                        <p className="text-sm text-gray-500">
                          {perspective.author.role}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </DocumentMeta>
  );
};

const PerspectiveDetail = () => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      }
    >
      <PerspectiveContent />
    </Suspense>
  );
};

export default PerspectiveDetail;
