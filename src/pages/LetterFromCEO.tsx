import React, { useEffect, useState } from "react";
import DocumentMeta from "react-document-meta";
import { Download, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { client4, urlForClient4 } from "../../lib/sanity";

type CEOLetter = {
  _id: string;
  title: string;
  description: string;
  publishedAt: string;
  slug?: string;
  pdfFile?: {
    asset: {
      _ref: string;
      url?: string;
    };
    title?: string;
    slug: string;
  };
};

const LetterFromCEO = () => {
  const meta = {
    title: "Letter from the CEO | Rook Leadership",
    description:
      "Read letters from Rook's CEO sharing insights about company vision, strategy, and future direction. Stay connected with our leadership thoughts.",
    meta: {
      charset: "utf-8",
      name: {
        keywords:
          "Rook CEO letter, company vision, leadership insights, company strategy, CEO communication",
      },
    },
  };

  const navigate = useNavigate();
  const { toast } = useToast();
  const [letters, setLetters] = useState<CEOLetter[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCEOLetters = async () => {
      try {
        const query = `*[_type == "post"] | order(publishedAt desc) {
          _id,
          title,
          description,
          publishedAt,
          
           "slug": slug.current,
          pdfFile {
            asset -> {
              _ref,
              url
            },
            title
          }
        }`;

        const data = await client4.fetch(query);
        setLetters(data);
      } catch (error) {
        console.error("Error fetching CEO letters:", error);
        toast({
          title: "Error",
          description: "Failed to load CEO letters",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchCEOLetters();
  }, [toast]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied to clipboard",
      description: "You can now share this letter",
    });
  };

  const handleDownload = (
    pdfFile: { asset: { _ref: string; url?: string } },
    title: string
  ) => {
    try {
      // First, try to use the direct URL if available
      if (pdfFile.asset.url) {
        const link = document.createElement("a");
        link.href = pdfFile.asset.url;
        link.download = title || "ceo-letter.pdf";
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        return;
      }

      // If no direct URL, use Sanity's urlFor method
      const pdfUrl = urlForClient4(pdfFile).url();

      if (pdfUrl) {
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = title || "ceo-letter.pdf";
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        console.error("No PDF URL found");
        toast({
          title: "Error",
          description: "Unable to download PDF",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error downloading PDF:", error);
      toast({
        title: "Error",
        description: "Failed to download PDF",
        variant: "destructive",
      });
    }
  };

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
      <div className="min-h-screen bg-white text-black pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 overflow-x-hidden">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-8 hover:bg-[#dc2e3e]/10 text-black group"
          >
            <span className="mr-2">←</span>
            Back
          </Button>

          <div className="mb-16">
            <div className="h-1 w-20 bg-destructive mb-6 animate-pulse"></div>
            <div className="h-12 w-64 bg-gray-200 rounded mb-6 animate-pulse"></div>
            <div className="h-6 w-full max-w-3xl bg-gray-200 rounded animate-pulse"></div>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <Card
                  key={index}
                  className="bg-white text-black border-none shadow-md overflow-hidden animate-pulse"
                >
                  <CardContent className="p-6">
                    <div className="h-8 w-3/4 bg-gray-200 rounded mb-4"></div>
                    <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 w-1/2 bg-gray-200 rounded mb-6"></div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
                      <div>
                        <div className="h-4 w-24 bg-gray-200 rounded mb-2"></div>
                        <div className="h-3 w-32 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="h-10 w-24 bg-gray-200 rounded"></div>
                      <div className="h-10 w-32 bg-gray-200 rounded"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <DocumentMeta {...meta}>
      <div className="min-h-screen bg-white text-black pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 overflow-x-hidden">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <div className="h-1 w-20 bg-destructive mb-6"></div>
            <h1
              className="text-5xl font-bold mb-6 text-primary tracking-tight animate-fade-up"
              style={{ color: "black" }}
            >
              Letter from the CEO
            </h1>
            <p
              className="text-xl text-textSecondary max-w-3xl animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Official communications from our CEO about company vision,
              strategy, and leadership thoughts.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {letters.map((letter) => (
                <Card
                  key={letter._id}
                  className="bg-white text-black border-none shadow-md overflow-hidden"
                >
                  <CardContent className="p-6">
                    <Link
                      to={`/letter-from-the-ceo/${letter.slug}`}
                      className="block"
                    >
                      <h1 className="text-2xl font-bold mb-2">
                        {letter.title}
                      </h1>
                    </Link>

                    <p className="text-gray-600 mb-2">{letter.description}</p>
                    <p className="text-sm text-gray-500 mb-4">
                      {formatDate(letter.publishedAt)}
                    </p>

                    <div className="flex items-center gap-4 mb-6">
                      <img
                        src="/avr.jpeg"
                        alt="CEO Portrait"
                        className="w-16 h-16 border-2 border-[#dc2e3e] rounded-full object-cover"
                      />
                      <div>
                        <h2 className="font-bold text-xl">
                          Aravindh Ravichandran
                        </h2>
                        <p className="text-gray-600">Founder</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        onClick={handleShare}
                        className="flex items-center gap-2 border-[#0096d4] text-[#0096d4] hover:bg-[#0096d4]/10"
                      >
                        <Share2 className="w-4 h-4" />
                        Share
                      </Button>
                      <Button
                        onClick={() =>
                          letter.pdfFile &&
                          handleDownload(
                            letter.pdfFile,
                            letter.pdfFile.title || `${letter.title}.pdf`
                          )
                        }
                        className="bg-[#dc2e3e] text-white hover:bg-[#dc2e3e]/90 flex items-center gap-2"
                        disabled={!letter.pdfFile}
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DocumentMeta>
  );
};

export default LetterFromCEO;
