import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FileText, ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { client2, urlForClient2 } from "../../lib/sanity";

type PressRelease = {
  _id: string;
  title: string;
  excerpt: string;
  description: string;
  publishedAt: string;
  content: any[];
  pdfFile?: {
    asset: {
      _ref: string;
    };
    title?: string;
  };
  slug: string;
};

const PressReleasePage = () => {
  const [pressReleases, setPressReleases] = useState<PressRelease[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPressReleases = async () => {
      try {
        const query = `*[_type == "post"] | order(publishedAt desc) {
          _id,
          title,
          description,
          excerpt,
          content,
          publishedAt,
          pdfFile {
            asset -> {
              _ref,
              url
            },
            title
          },
          "slug": slug.current
        }`;

        const data = await client2.fetch(query);
        setPressReleases(data);
      } catch (error) {
        console.error("Error fetching press releases:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPressReleases();
  }, []);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const getFirstParagraph = (content: any[]) => {
    if (!content) return "";
    const firstBlock = content.find((block) => block._type === "block");
    return firstBlock ? firstBlock.children[0].text : "";
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
        link.download = title || "press-release.pdf";
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        return;
      }

      // If no direct URL, use Sanity's urlFor method
      const pdfUrl = urlForClient2(pdfFile).url();

      if (pdfUrl) {
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = title || "press-release.pdf";
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        console.error("No PDF URL found");
        alert("Unable to download PDF");
      }
    } catch (error) {
      console.error("Error downloading PDF:", error);
      alert("Error downloading PDF");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white text-textPrimary pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Loading skeleton remains the same */}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-textPrimary pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <div className="h-1 w-20 bg-destructive mb-6"></div>
          <h1
            className="text-5xl font-bold mb-6 text-primary tracking-tight animate-fade-up"
            style={{ color: "black" }}
          >
            Press Release
          </h1>
          <p
            className="text-xl text-textSecondary max-w-3xl animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Official announcements and news from Rook about product launches,
            partnerships, and company milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pressReleases.map((release, index) => (
            <div
              key={release._id}
              className="bg-white rounded-lg overflow-hidden border border-borderLight hover:border-accent/30 shadow-card hover:shadow-premium hover:translate-y-[-4px] transition-all animate-fade-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 text-xs font-medium bg-destructive/10 text-destructive rounded-full">
                    Press Release
                  </span>
                  <span className="text-textSecondary">•</span>
                  <span className="text-xs text-textSecondary">
                    {formatDate(release.publishedAt)}
                  </span>
                </div>
                <h3
                  className="text-2xl font-bold mb-3 text-primary"
                  style={{ color: "black" }}
                >
                  {release.title}
                </h3>
                <p className="text-textSecondary text-sm mb-4">
                  {release.description || release.excerpt}
                </p>
                {release.content && (
                  <p className="text-textSecondary mb-6">
                    {getFirstParagraph(release.content)}...
                  </p>
                )}
                <div className="flex justify-between items-center">
                  {release.pdfFile?.asset && (
                    <Button
                      variant="outline"
                      className="flex items-center gap-2 border-borderLight hover:bg-accent/5"
                      onClick={() =>
                        handleDownload(
                          release.pdfFile!,
                          release.pdfFile?.title || `${release.title}.pdf`
                        )
                      }
                    >
                      <Download className="h-4 w-4" />
                      Download PDF
                    </Button>
                  )}
                  <Button
                    className="bg-destructive text-white hover:bg-destructive/90 flex items-center gap-2 group"
                    asChild
                  >
                    <Link to={`/press-release/${release.slug}`}>
                      Read Full Release
                      <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PressReleasePage;
