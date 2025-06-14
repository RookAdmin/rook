import React, { useEffect, useState } from "react";
import DocumentMeta from "react-document-meta";
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
  const meta = {
    title: "Press Releases | Rook News & Updates",
    description:
      "Stay updated with Rook's latest press releases, company announcements, and news. Read about our product launches, partnerships, and milestones.",
    meta: {
      charset: "utf-8",
      name: {
        keywords:
          "Rook press releases, company news, announcements, product updates, partnerships",
      },
    },
  };

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
      <div className="min-h-screen bg-white text-textPrimary pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="h-1 w-20 bg-destructive mb-6"></div>
          <div className="h-12 w-64 bg-gray-200 rounded mb-6 animate-pulse"></div>
          <div className="h-6 w-full max-w-3xl bg-gray-200 rounded mb-16 animate-pulse"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-white rounded-lg overflow-hidden border border-borderLight shadow-card p-6"
              >
                <div className="h-4 w-24 bg-gray-200 rounded mb-4 animate-pulse"></div>
                <div className="h-6 w-full bg-gray-200 rounded mb-3 animate-pulse"></div>
                <div className="h-4 w-full bg-gray-200 rounded mb-4 animate-pulse"></div>
                <div className="h-4 w-full bg-gray-200 rounded mb-6 animate-pulse"></div>
                <div className="flex justify-between">
                  <div className="h-10 w-32 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-10 w-40 bg-gray-200 rounded animate-pulse"></div>
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
      <div className="min-h-screen bg-white text-textPrimary pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="mb-12 md:mb-16">
            <div className="h-1 w-20 bg-destructive mb-4 md:mb-6"></div>
            <h1
              className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-primary tracking-tight"
              style={{ color: "black" }}
            >
              Press Release
            </h1>
            <p className="text-lg md:text-xl text-textSecondary max-w-3xl">
              Official announcements and news from Rook about product launches,
              partnerships, and company milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {pressReleases.map((release, index) => (
              <div
                key={release._id}
                className="bg-white rounded-lg overflow-hidden border border-borderLight hover:border-accent/30 shadow-card hover:shadow-premium hover:translate-y-[-4px] transition-all"
              >
                <div className="p-5 md:p-6">
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className="px-2 py-1 text-xs font-medium bg-destructive/10 text-destructive rounded-full">
                      Press Release
                    </span>
                    <span className="text-textSecondary hidden md:block">
                      •
                    </span>
                    <span className="text-xs text-textSecondary">
                      {formatDate(release.publishedAt)}
                    </span>
                  </div>
                  <h3
                    className="text-xl md:text-2xl font-bold mb-3 text-primary"
                    style={{ color: "black" }}
                  >
                    {release.title}
                  </h3>
                  <p className="text-textSecondary text-sm mb-4">
                    {release.description || release.excerpt}
                  </p>
                  {release.content && (
                    <p className="text-textSecondary mb-4 md:mb-6 text-sm md:text-base">
                      {getFirstParagraph(release.content)}...
                    </p>
                  )}
                  <div className="flex flex-col sm:flex-row justify-between gap-3">
                    {release.pdfFile?.asset && (
                      <Button
                        variant="outline"
                        className="flex items-center gap-2 border-borderLight hover:bg-accent/5 w-full sm:w-auto justify-center sm:justify-start"
                        onClick={() =>
                          handleDownload(
                            release.pdfFile!,
                            release.pdfFile?.title || `${release.title}.pdf`
                          )
                        }
                      >
                        <Download className="h-4 w-4" />
                        <span>Download PDF</span>
                      </Button>
                    )}
                    <Button
                      className="bg-destructive text-white hover:bg-destructive/90 flex items-center gap-2 group w-full sm:w-auto justify-center sm:justify-start"
                      asChild
                    >
                      <Link to={`/press-release/${release.slug}`}>
                        <span>Read Full Release</span>
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
    </DocumentMeta>
  );
};

export default PressReleasePage;
