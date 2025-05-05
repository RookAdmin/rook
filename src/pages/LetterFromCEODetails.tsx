"use client";

import { PortableText } from "@portabletext/react";
import { client4 } from "../../lib/sanity";
import React, { Suspense } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, FileText, Share2, Bookmark } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CEOLetter {
  _id: string;
  title: string;
  publishedAt: string;
  content: any;
  body?: any[];
  mainImage?: {
    asset: {
      url: string;
    };
    alt?: string;
  };
  pdfFile?: {
    asset: {
      url: string;
    };
  };
  author?: {
    name: string;
    position: string;
    bio?: string;
    image?: {
      asset: {
        url: string;
      };
    };
  };
}

const CEOLetterContent = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [ceoLetter, setCEOLetter] = React.useState<CEOLetter | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    console.log("Slug parameter:", params?.slug);

    if (!params?.slug) {
      console.error("No slug parameter provided");
      setError(new Error("No slug parameter provided"));
      setLoading(false);
      return;
    }

    async function fetchCEOLetter() {
      try {
        const query = `*[_type == "post" && slug.current == $slug][0]{
          _id,
          title,
          publishedAt,
          description,
          "slug": slug.current,
          content,
          "body": body[]{
            ...,
            _type == "image" => {
              ...,
              "asset": asset->
            }
          },
          mainImage{
            asset->{
              url
            },
            alt
          },
          pdfFile{
            asset->{
              url
            }
          },
          author->{
            name,
            position,
            bio,
            image{
              asset->{
                url
              }
            }
          }
        }`;

        console.log("Fetching with query:", query);
        console.log("Slug for fetch:", params.slug);

        const fetchedCEOLetter = await client4.fetch(query, {
          slug: params.slug,
        });

        console.log("Fetched CEO Letter:", fetchedCEOLetter);

        if (!fetchedCEOLetter) {
          console.error("No CEO letter found for slug:", params.slug);
          navigate("/letter-from-ceo");
          return;
        }

        setCEOLetter(fetchedCEOLetter);
      } catch (err) {
        console.error("Error fetching CEO letter:", err);
        setError(err instanceof Error ? err : new Error(String(err)));
      } finally {
        setLoading(false);
      }
    }

    fetchCEOLetter();
  }, [params?.slug, navigate]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied to clipboard",
      description: "You can now share this letter",
    });
  };

  const handleSave = () => {
    toast({
      title: "Letter saved",
      description: "This letter has been saved to your bookmarks",
    });
  };

  const handleDownloadPDF = () => {
    if (ceoLetter?.pdfFile?.asset?.url) {
      window.open(ceoLetter.pdfFile.asset.url, "_blank");
    } else {
      toast({
        title: "PDF not available",
        description: "This letter doesn't have an associated PDF file",
        variant: "destructive",
      });
    }
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
        <Button
          onClick={() => navigate("/letter-from-ceo")}
          className="px-6 py-2"
        >
          Back to CEO Letters
        </Button>
      </div>
    );
  }

  if (!ceoLetter) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        <Button
          variant="ghost"
          onClick={() => navigate("/letter-from-ceo")}
          className="mb-8 hover:bg-accent/10 group"
        >
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to CEO Letters
        </Button>

        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-3 animate-fade-up">
            <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
              Letter from CEO
            </span>
            <span className="text-textSecondary">•</span>
            <span className="text-xs text-textSecondary flex items-center">
              <Calendar className="h-3 w-3 mr-1" />
              {new Date(ceoLetter.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black tracking-tight animate-fade-up">
            {ceoLetter.title}
          </h1>

          {ceoLetter.mainImage?.asset?.url && (
            <div
              className="mb-10 rounded-xl overflow-hidden animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              <img
                src={ceoLetter.mainImage.asset.url}
                alt={
                  ceoLetter.mainImage.alt ||
                  ceoLetter.title ||
                  "CEO letter image"
                }
                width={1200}
                height={630}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          <div
            className="flex flex-wrap gap-4 mb-8 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
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
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownloadPDF}
              className="flex items-center gap-2"
              disabled={!ceoLetter.pdfFile?.asset?.url}
            >
              <FileText className="h-4 w-4" />
              Download PDF
            </Button>
          </div>

          <div
            className="prose max-w-none animate-fade-up text-justify"
            style={{ animationDelay: "0.3s" }}
          >
            {ceoLetter.body && (
              <PortableText
                value={ceoLetter.body}
                components={{
                  block: {
                    h1: ({ children }) => (
                      <h1 className="text-3xl font-bold mb-6 mt-8 text-primary">
                        {children}
                      </h1>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-2xl font-semibold mb-5 mt-7 text-primary">
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-xl font-medium mb-4 mt-6 text-primary">
                        {children}
                      </h3>
                    ),
                    normal: ({ children }) => (
                      <p className="text-base leading-relaxed mb-4 text-textSecondary">
                        {children}
                      </p>
                    ),
                  },
                  list: {
                    bullet: ({ children }) => (
                      <ul className="list-disc pl-6 mb-4 text-textSecondary">
                        {children}
                      </ul>
                    ),
                    number: ({ children }) => (
                      <ol className="list-decimal pl-6 mb-4 text-textSecondary">
                        {children}
                      </ol>
                    ),
                  },
                  listItem: {
                    bullet: ({ children }) => (
                      <li className="mb-2 text-textSecondary">{children}</li>
                    ),
                    number: ({ children }) => (
                      <li className="mb-2 text-textSecondary">{children}</li>
                    ),
                  },
                  marks: {
                    link: ({ children, value }) => (
                      <a
                        href={value?.href}
                        className="text-primary hover:text-secondary underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {children}
                      </a>
                    ),
                    strong: ({ children }) => (
                      <strong className="font-semibold">{children}</strong>
                    ),
                  },
                }}
              />
            )}

            {ceoLetter.author && (
              <div className="border-t border-gray-200 pt-6 mt-10">
                <div className="flex items-start gap-4">
                  {ceoLetter.author.image?.asset?.url && (
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <img
                        src={ceoLetter.author.image.asset.url}
                        alt={ceoLetter.author.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <p className="font-bold text-primary">
                      {ceoLetter.author.name}
                    </p>
                    <p className="text-sm text-textSecondary">
                      {ceoLetter.author.position}
                    </p>
                    {ceoLetter.author.bio && (
                      <p className="text-sm mt-2 text-textSecondary">
                        {ceoLetter.author.bio}
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
  );
};

const CEOLetterDetail = () => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      }
    >
      <CEOLetterContent />
    </Suspense>
  );
};

export default CEOLetterDetail;
