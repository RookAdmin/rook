import React, { useEffect, useState } from "react";
import DocumentMeta from "react-document-meta";
import { ArrowRight } from "lucide-react";
import { client3, urlForClient3 } from "../../lib/sanity";
import imageUrlBuilder from "@sanity/image-url";
import { Button } from "@/components/ui/button";

type MediaCoverage = {
  _id: string;
  title: string;
  description: string;
  excerpt: string;
  publishedAt: string;
  link: {
    url: string;
    label?: string;
  };
  publication: {
    name: string;
    logo: any;
  };
  coverImage: any;
  mainImage: any;
  category: string;
};

const MediaCoverage = () => {
  const meta = {
    title: "Media Coverage | Rook in the News",
    description:
      "Read the latest news and media coverage about Rook. Stay updated with our press releases, interviews, and company announcements.",
    meta: {
      charset: "utf-8",
      name: {
        keywords:
          "Rook news, media coverage, press releases, company announcements, Rook updates",
      },
    },
  };

  const [mediaCoverages, setMediaCoverages] = useState<MediaCoverage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMediaCoverage = async () => {
      try {
        const query = `*[_type == "post"] | order(publishedAt desc) {
          _id,
          title,
          description,
          excerpt,
          publishedAt,
          link {
            url,
            label
          },
          publication->{
            name,
            logo
          },
          coverImage,
          mainImage,
          category
        }`;

        const data = await client3.fetch(query);
        setMediaCoverages(data);
      } catch (error) {
        console.error("Error fetching media coverage:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMediaCoverage();
  }, []);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const getImageUrl = (image: any) => {
    if (!image) return null;

    try {
      const builder = imageUrlBuilder(client3);
      return builder.image(image).width(800).url();
    } catch (error) {
      console.error("Error building image URL:", error);
      return null;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white text-textPrimary pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <div className="h-1 w-20 bg-success mb-6 animate-pulse"></div>
            <div className="h-12 w-64 bg-gray-200 rounded mb-6 animate-pulse"></div>
            <div className="h-6 w-full max-w-3xl bg-gray-200 rounded animate-pulse"></div>
          </div>

          <div className="space-y-16">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex flex-col md:flex-row gap-8 pb-12">
                <div className="md:w-2/5">
                  <div className="h-64 md:h-80 bg-gray-200 rounded-lg animate-pulse"></div>
                </div>
                <div className="md:w-3/5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-8 w-8 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                  <div className="h-8 w-full bg-gray-200 rounded mb-4 animate-pulse"></div>
                  <div className="h-4 w-full bg-gray-200 rounded mb-2 animate-pulse"></div>
                  <div className="h-4 w-3/4 bg-gray-200 rounded mb-6 animate-pulse"></div>
                  <div className="h-5 w-32 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <DocumentMeta {...meta}>
      <div className="min-h-screen bg-white text-textPrimary pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <div className="h-1 w-20 bg-success mb-6"></div>
            <h1
              className="text-5xl font-bold mb-6 text-primary tracking-tight animate-fade-up"
              style={{ color: "black" }}
            >
              Media Coverage
            </h1>
            <p
              className="text-xl text-textSecondary max-w-3xl animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              See what the press is saying about Rook and our innovative
              productivity tools.
            </p>
          </div>

          <div className="space-y-16">
            {mediaCoverages.map((coverage, index) => (
              <div
                key={coverage._id}
                className="flex flex-col md:flex-row gap-8 pb-12 animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="md:w-2/5">
                  <div className="relative overflow-hidden rounded-lg group">
                    {(coverage.mainImage || coverage.coverImage) && (
                      <img
                        src={getImageUrl(
                          coverage.mainImage || coverage.coverImage
                        )}
                        alt={coverage.title}
                        className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          console.error("Image load error:", e);
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
                <div className="md:w-3/5">
                  <div className="flex items-center gap-3 mb-4">
                    {coverage.publication?.logo && (
                      <img
                        src={getImageUrl(coverage.publication.logo)}
                        alt={coverage.publication.name}
                        className="h-8 w-8 object-cover rounded"
                        onError={(e) => {
                          console.error("Publication logo load error:", e);
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                    )}
                    <span className="text-sm text-textSecondary">
                      {formatDate(coverage.publishedAt)}
                    </span>
                  </div>
                  <h2
                    className="text-3xl font-bold mb-4 text-primary"
                    style={{ color: "black" }}
                  >
                    {coverage.title}
                  </h2>
                  <p className="text-textSecondary text-sm mb-6">
                    {coverage.description}
                  </p>
                  <div className="flex flex-col items-start gap-4">
                    <a
                      href={coverage.link?.url}
                      className="text-destructive hover:text-destructive/90 font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {coverage.link?.label || "Read Full Article"}
                    </a>

                    <Button
                      className="bg-destructive text-white hover:bg-destructive/90 flex items-center gap-2"
                      asChild
                    >
                      <a
                        href={coverage.link?.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read the Article
                        <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DocumentMeta>
  );
};

export default MediaCoverage;
