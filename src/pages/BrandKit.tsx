import React from "react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Copy, CheckCircle, Search } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";

const BrandKit = () => {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { toast } = useToast();

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Rook",
      "url": "https://rookhq.com",
      "logo": "https://rookhq.com/thumbnail.png",
      "description": "Official Rook brand kit with logos, colors, and brand guidelines",
    },
  ];

  const brandColors = [
    {
      name: "Rook Red",
      hex: "#dc2e3e",
      rgb: "220, 46, 62",
      usage: "Primary brand color, call-to-action elements",
    },
    {
      name: "Rook Blue",
      hex: "#0096d4",
      rgb: "0, 150, 212",
      usage: "Secondary brand color, links, information",
    },
    {
      name: "Rook Green",
      hex: "#0D6E42",
      rgb: "13, 110, 66",
      usage: "Success states, positive indicators",
    },
    {
      name: "Rook Yellow",
      hex: "#F4B400",
      rgb: "244, 180, 0",
      usage: "Warning states, highlights",
    },
    {
      name: "Rook Violet",
      hex: "#6366f1",
      rgb: "99, 102, 241",
      usage: "Accent color, premium features",
    },
  ];

  const logoVariants = [
    {
      name: "Primary Logo",
      format: "SVG",
      bg: "white",
      description: "Standard logo for light backgrounds",
    },
    {
      name: "White Logo",
      format: "SVG",
      bg: "black",
      description: "Logo for dark backgrounds",
    },
    {
      name: "Icon Only",
      format: "SVG",
      bg: "white",
      description: "Standalone icon for apps and favicons",
    },
    {
      name: "Horizontal Logo",
      format: "SVG",
      bg: "white",
      description: "Wide layout applications",
    },
    {
      name: "Horizontal Logo",
      format: "SVG",
      bg: "white",
      description: "Wide layout applications",
    },
  ];

  const copyToClipboard = (text: string, colorName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(colorName);
    toast({
      title: "Color copied!",
      description: `${text} copied to clipboard`,
    });
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const downloadAsset = (assetName: string) => {
    toast({
      title: "Download started",
      description: `${assetName} is being prepared for download`,
    });
  };

  const filterLogos = (logos: any[], category?: string) => {
    if (!searchQuery.trim()) return logos;
    
    const query = searchQuery.toLowerCase().trim();
    return logos.filter((logo) => {
      const matchesName = logo.name.toLowerCase().includes(query);
      const matchesDescription = logo.description?.toLowerCase().includes(query);
      const matchesCategory = category?.toLowerCase().includes(query);
      return matchesName || matchesDescription || matchesCategory;
    });
  };

  const hasMatchingLogos = (logos: any[], category?: string) => {
    return filterLogos(logos, category).length > 0;
  };

  // Check if there are any results across all sections
  const hasAnyResults = () => {
    if (!searchQuery.trim()) return true;
    
    const query = searchQuery.toLowerCase().trim();
    
    // Check logo sections
    const logoSections = [
      { name: "Primary Logo", description: "Logo variant for Primary Logo branding" },
      { name: "White Logo", description: "Logo variant for White Logo branding" },
      { name: "Icon Only", description: "Logo variant for Favicon branding" },
      { name: "Horizontal Logo - White", description: "Logo variant for Horizontal Logo - White branding" },
      { name: "Horizontal Logo - Black", description: "Logo variant for Horizontal Logo - Black branding" },
      { name: "Rook Logo - America", description: "Logo variant for America branding" },
      { name: "Rook Logo - Britain", description: "Logo variant for Britain branding" },
      { name: "Rook Logo - Francais", description: "Logo variant for Francais branding" },
      { name: "Rook Logo - UAE", description: "Logo variant for UAE branding" },
      { name: "Rook for Startups Primary Logo", description: "Logo variant for Rook for Startups Black Text Logo branding" },
      { name: "Rook for Startups Secondary Logo", description: "Logo variant for Rook for Startups White Text Logo branding" },
      { name: "Rook for Startups Primary Label", description: "Logo variant for Rook for Startups Black Label branding" },
      { name: "Rook for Startups Secondary Label", description: "Logo variant for Rook for Startups White Label branding" },
      { name: "Rook for Startups White Background", description: "Logo variant for Rook for Startups White Background branding" },
      { name: "Rook Links Primary Logo", description: "Logo variant for Rook Links primary branding" },
      { name: "Rook Links Black Text", description: "Logo variant for Rook Links with black text" },
      { name: "Rook Links White Text", description: "Logo variant for Rook Links with white text" },
      { name: "Rook Links Black Text (JPG)", description: "Logo variant for Rook Links black text in JPG format" },
      { name: "Rook Scoop Primary Logo", description: "Logo variant for Rook Scoop primary branding" },
      { name: "Rook Scoop Black Text", description: "Logo variant for Rook Scoop with black text" },
      { name: "Rook Scoop White Text", description: "Logo variant for Rook Scoop with white text" },
      { name: "Rook Scoop Black Text (JPG)", description: "Logo variant for Rook Scoop black text in JPG format" },
    ];
    
    const hasLogoMatch = logoSections.some((item) => {
      return item.name.toLowerCase().includes(query) || item.description.toLowerCase().includes(query);
    });
    
    // Check color section
    const hasColorMatch = brandColors.some((color) => {
      return (
        color.name.toLowerCase().includes(query) ||
        color.hex.toLowerCase().includes(query) ||
        color.usage.toLowerCase().includes(query)
      );
    });
    
    return hasLogoMatch || hasColorMatch;
  };

  const renderLogoSection = (
    logos: any[],
    category: string,
    title: string,
    bgClass: string = "bg-white",
    gridClass: string = "md:grid-cols-2 lg:grid-cols-3"
  ) => {
    const filteredLogos = filterLogos(logos, category);
    
    // Hide section if there's a search query and no matches
    if (searchQuery.trim() && filteredLogos.length === 0) return null;
    
    return (
      <section className={`py-16 ${bgClass} w-full`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {title}
          </h2>
          {filteredLogos.length === 0 && searchQuery.trim() ? (
            <p className="text-center text-gray-500">No results found for "{searchQuery}"</p>
          ) : (
            <div className={`grid ${gridClass} gap-6`}>
              {filteredLogos.map((logo, index) => (
              <Card
                key={index}
                className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white"
              >
                <CardContent className="p-6">
                  <div
                    className={`h-32 flex items-center justify-center mb-4 rounded-lg ${
                      logo.bg === "black" ? "bg-[#121212]" : "bg-white border"
                    }`}
                  >
                    <img
                      src={logo.img}
                      alt={logo.name}
                      className="h-24 object-contain"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {logo.name}
                  </h3>
                  <p
                    className="text-sm text-gray-600 mb-4"
                    style={logo.description.includes('\n') ? { whiteSpace: "pre-line" } : {}}
                  >
                    {logo.description}
                  </p>
                  <a
                    href={logo.img}
                    download
                    onClick={() => downloadAsset(logo.name)}
                    className="block"
                  >
                    <Button
                      className="w-full bg-[#dc2e3e] hover:bg-[#cc2934] text-white"
                      size="sm"
                      type="button"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download {logo.format}
                    </Button>
                  </a>
                </CardContent>
              </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    );
  };

  return (
    <>
      <SEO
        title="Rook Brand Kit | Download Logos, Colors & Brand Guidelines - Official Assets"
        description="Download Rook's official brand assets, logos, colors, and brand guidelines. Get high-resolution logos, brand colors (Rook Red, Rook Blue, Rook Green, Rook Yellow), and usage guidelines for partners, media, and developers."
        keywords="Rook brand kit, Rook logo, brand assets, brand guidelines, logo download, brand colors, Rook branding, official assets, brand resources, media kit"
        canonical="/brand-kit"
        geoRegion="IN"
        geoPlacename="India"
        structuredData={structuredData}
      />
    <div className="min-h-screen bg-white pt-16 overflow-x-hidden w-full mb-20">
        {/* Hero Section */}
        <section className="hero-section py-12 sm:py-16 md:py-20 bg-white w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Rook Brand Kit
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Brand assets and guidelines for consistent representation across
                all touchpoints.
              </p>
            </div>
          </div>
        </section>

        {/* Brand Guidelines */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Brand Guidelines
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="border-0 shadow-sm bg-white">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">
                    Brand Promise
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Empowering innovation through technology. We deliver
                    sophisticated solutions with uncompromising quality and
                    precision.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm bg-white">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">
                    Communication Style
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Authoritative, professional, and forward-thinking. Clear
                    communication that demonstrates expertise and builds trust.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm bg-white">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">
                    Visual Identity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Clean, modern design with purposeful use of color. Emphasis
                    on clarity, functionality, and premium quality.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center mt-8">
              <Link
                to="/trademark"
                className="text-[#dc2e3e] hover:text-[#cc2934] text-lg font-semibold"
              >
                <Button
                  className="bg-[#dc2e3e] hover:bg-[#cc2934] text-white px-6 py-2 text-base"
                  type="button"
                >
                  View Trademark Guidelines
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Search Box */}
        <section className="py-8 bg-white w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
              <Input
                type="text"
                placeholder="Search logos, colors, or brand assets..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                }}
                className="pl-12 pr-10 py-6 text-base border-2 border-gray-300 focus:border-[#dc2e3e] rounded-full w-full"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 z-10"
                  type="button"
                >
                  ✕
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="text-center text-sm text-gray-500 mt-4">
                Searching for: <strong>"{searchQuery}"</strong>
              </p>
            )}
          </div>
        </section>

        {/* Logo Variants */}
        {renderLogoSection(
          [
            {
              name: "Primary Logo",
              format: "png",
              bg: "white",
              description: "Logo variant for Primary Logo branding",
              img: "/brandkit/Rook Logo Full Text.png",
            },
            {
              name: "White Logo",
              format: "png",
              bg: "white",
              description: "Logo variant for White Logo branding",
              img: "/brandkit/Rook Logo White.png",
            },
            {
              name: "Icon Only",
              format: "png",
              bg: "white",
              description: "Logo variant for Favicon branding",
              img: "/brandkit/Rook Logo - Colored.png",
            },
            {
              name: "Horizontal Logo - White",
              format: "png",
              bg: "white",
              description:
                "Logo variant for Horizontal Logo - White branding",
              img: "/brandkit/Rook Logo.png",
            },
            {
              name: "Horizontal Logo - Black",
              format: "png",
              bg: "white",
              description:
                "Logo variant for Horizontal Logo - Black branding",
              img: "/brandkit/Rook Logo Black.png",
            },
          ],
          "Logo Variants",
          "Logo Variants",
          "bg-white",
          "md:grid-cols-2 lg:grid-cols-3"
        )}

        {/* Country Wise Logos */}
        {renderLogoSection(
          [
            {
              name: "Rook Logo - America",
              format: "png",
              bg: "white",
              description: "Logo variant for America branding",
              img: "/brandkit/Rook Logo - America.png",
            },
            {
              name: "Rook Logo - Britain",
              format: "png",
              bg: "white",
              description: "Logo variant for Britain branding",
              img: "/brandkit/Rook Logo - Britain.png",
            },
            {
              name: "Rook Logo - Francais",
              format: "png",
              bg: "white",
              description: "Logo variant for Francais branding",
              img: "/brandkit/Rook Logo - Francais.png",
            },
            {
              name: "Rook Logo - UAE",
              format: "png",
              bg: "white",
              description: "Logo variant for UAE \n branding",
              img: "/brandkit/Rook Logo - UAE.png",
            },
          ],
          "Country Wise Logos",
          "Country Wise Logos",
          "bg-white",
          "md:grid-cols-2 lg:grid-cols-4"
        )}

        {/* Rook for Startups Logos */}
        {renderLogoSection(
          [
            {
              name: "Rook for Startups Primary Logo",
              format: "png",
              bg: "white",
              description:
                "Logo variant for Rook for Startups Black Text Logo branding",
              img: "/brandkit/RFS (Black).png",
            },
            {
              name: "Rook for Startups Secondary Logo",
              format: "png",
              bg: "white",
              description:
                "Logo variant for Rook for Startups White Text Logo branding",
              img: "/brandkit/RFS (White).png",
            },
            {
              name: "Rook for Startups Primary Label",
              format: "png",
              bg: "white",
              description:
                "Logo variant for Rook for Startups Black Label branding",
              img: "/brandkit/RFS Label Black.png",
            },
            {
              name: "Rook for Startups Secondary Label",
              format: "png",
              bg: "white",
              description:
                "Logo variant for Rook for Startups White Label branding",
              img: "/brandkit/RFS Label White.png",
            },
            {
              name: "Rook for Startups White Background",
              format: "png",
              bg: "white",
              description:
                "Logo variant for Rook for Startups White Background branding",
              img: "/brandkit/RFS.png",
            },
          ],
          "Rook for Startups Logos",
          "Rook for Startups Logos",
          "bg-white",
          "md:grid-cols-2 lg:grid-cols-5"
        )}

        {/* Rook Links Logos */}
        {renderLogoSection(
          [
            {
              name: "Rook Links Primary Logo",
              format: "png",
              bg: "white",
              description: "Logo variant for Rook Links primary branding",
              img: "/rook-saas-assets/rook-links.png",
            },
            {
              name: "Rook Links Black Text",
              format: "png",
              bg: "white",
              description: "Logo variant for Rook Links with black text",
              img: "/rook-saas-assets/rook-links-blacktext.png",
            },
            {
              name: "Rook Links White Text",
              format: "png",
              bg: "black",
              description: "Logo variant for Rook Links with white text",
              img: "/rook-saas-assets/rook-links-whitetext.png",
            },
            {
              name: "Rook Links Black Text (JPG)",
              format: "jpg",
              bg: "white",
              description: "Logo variant for Rook Links black text in JPG format",
              img: "/rook-saas-assets/rook-links-blacktext.jpg",
            },
          ],
          "Rook Links Logos",
          "Rook Links Logos",
          "bg-white",
          "md:grid-cols-2 lg:grid-cols-4"
        )}

        {/* Rook Scoop Logos */}
        {renderLogoSection(
          [
            {
              name: "Rook Scoop Primary Logo",
              format: "png",
              bg: "white",
              description: "Logo variant for Rook Scoop primary branding",
              img: "/rook-saas-assets/rook-scoop.png",
            },
            {
              name: "Rook Scoop Black Text",
              format: "png",
              bg: "white",
              description: "Logo variant for Rook Scoop with black text",
              img: "/rook-saas-assets/rook-scoop-blacktext.png",
            },
            {
              name: "Rook Scoop White Text",
              format: "png",
              bg: "black",
              description: "Logo variant for Rook Scoop with white text",
              img: "/rook-saas-assets/rook-scoop-whitetext.png",
            },
            {
              name: "Rook Scoop Black Text (JPG)",
              format: "jpg",
              bg: "white",
              description: "Logo variant for Rook Scoop black text in JPG format",
              img: "/rook-saas-assets/rook-scoop-blacktext.jpg",
            },
          ],
          "Rook Scoop Logos",
          "Rook Scoop Logos",
          "bg-gray-50",
          "md:grid-cols-2 lg:grid-cols-4"
        )}

        {/* Color Palette */}
        {(() => {
          const filteredColors = searchQuery.trim()
            ? brandColors.filter((color) => {
                const query = searchQuery.toLowerCase();
                return (
                  color.name.toLowerCase().includes(query) ||
                  color.hex.toLowerCase().includes(query) ||
                  color.usage.toLowerCase().includes(query)
                );
              })
            : brandColors;

          if (filteredColors.length === 0 && searchQuery) return null;

          return (
            <section className="py-16 bg-gray-50 w-full">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                  Brand Colors
                </h2>

                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                  {filteredColors.map((color, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white"
                >
                  <CardContent className="p-6">
                    <div
                      className="h-24 w-full rounded-lg mb-4 border"
                      style={{ backgroundColor: color.hex }}
                    ></div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {color.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">{color.usage}</p>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-mono text-gray-600">
                          HEX
                        </span>
                        <button
                          onClick={() => copyToClipboard(color.hex, color.name)}
                          className="flex items-center space-x-1 text-sm font-mono text-gray-900 hover:text-[#dc2e3e] transition-colors"
                        >
                          <span>{color.hex}</span>
                          {copiedColor === color.name ? (
                            <CheckCircle className="h-3 w-3 text-green-500" />
                          ) : (
                            <Copy className="h-3 w-3" />
                          )}
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-mono text-gray-600">
                          RGB
                        </span>
                        <button
                          onClick={() =>
                            copyToClipboard(`rgb(${color.rgb})`, color.name)
                          }
                          className="flex items-center space-x-1 text-sm font-mono text-gray-900 hover:text-[#dc2e3e] transition-colors"
                        >
                          <span>{color.rgb}</span>
                          <Copy className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                  ))}
                </div>
              </div>
            </section>
          );
        })()}

        {/* Logo Usage Guidelines */}
        <section className="py-16 bg-white w-full border-t-4 border-[#dc2e3e]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Logo Usage Guidelines
              </h2>
              <div className="h-1 w-24 bg-[#dc2e3e] mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto font-semibold">
                Maintain brand integrity with modern, clean, and minimalistic design principles
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Do's */}
              <Card className="border-2 border-[#0D6E42] shadow-lg bg-white">
                <CardHeader className="bg-[#0D6E42]/10">
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <CheckCircle className="h-6 w-6 text-[#0D6E42]" />
                    Do's
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="h-2 w-2 bg-[#0D6E42] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-gray-900">Use logos as provided</strong>
                        <p className="text-gray-600 text-sm mt-1">Download and use the official logo files without modifications</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-2 w-2 bg-[#0D6E42] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-gray-900">Maintain clear space</strong>
                        <p className="text-gray-600 text-sm mt-1">Provide adequate breathing room around the logo (minimum 20% of logo height)</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-2 w-2 bg-[#0D6E42] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-gray-900">Keep it minimalistic</strong>
                        <p className="text-gray-600 text-sm mt-1">Use clean backgrounds and avoid cluttered designs around the logo</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-2 w-2 bg-[#0D6E42] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-gray-900">Preserve proportions</strong>
                        <p className="text-gray-600 text-sm mt-1">Maintain the original aspect ratio when resizing</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-2 w-2 bg-[#0D6E42] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-gray-900">Use appropriate variants</strong>
                        <p className="text-gray-600 text-sm mt-1">Choose the right logo variant for light or dark backgrounds</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Don'ts */}
              <Card className="border-2 border-[#dc2e3e] shadow-lg bg-white">
                <CardHeader className="bg-[#dc2e3e]/10">
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <span className="text-[#dc2e3e] text-2xl">✕</span>
                    Don'ts
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="h-2 w-2 bg-[#dc2e3e] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-gray-900">Never alter or modify</strong>
                        <p className="text-gray-600 text-sm mt-1">Do not change colors, distort, rotate, or add effects to the logo</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-2 w-2 bg-[#dc2e3e] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-gray-900">No stretching or skewing</strong>
                        <p className="text-gray-600 text-sm mt-1">Never stretch, compress, or change the logo's proportions</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-2 w-2 bg-[#dc2e3e] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-gray-900">Avoid busy backgrounds</strong>
                        <p className="text-gray-600 text-sm mt-1">Do not place the logo on cluttered or distracting backgrounds</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-2 w-2 bg-[#dc2e3e] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-gray-900">No custom colors</strong>
                        <p className="text-gray-600 text-sm mt-1">Do not recolor the logo or use non-brand colors</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-2 w-2 bg-[#dc2e3e] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-gray-900">No text additions</strong>
                        <p className="text-gray-600 text-sm mt-1">Do not add text, taglines, or other elements to the logo</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Design Philosophy */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-gray-50 to-white">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Design Philosophy
                  </h3>
                  <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                    Our logos are designed with <strong className="text-[#dc2e3e]">modern minimalism</strong> in mind. 
                    They work best in clean, uncluttered environments that emphasize clarity and purpose. 
                    When using our logos, embrace <strong className="text-[#dc2e3e]">white space</strong>, 
                    maintain <strong className="text-[#dc2e3e]">visual hierarchy</strong>, and let the logo 
                    breathe in a <strong className="text-[#dc2e3e]">minimalistic design</strong> that reflects 
                    our brand's commitment to simplicity and excellence.
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
                    <div className="h-16 flex items-center justify-center mb-3">
                      <img
                        src="/brandkit/Rook Logo - Colored.png"
                        alt="Rook Icon"
                        className="h-16 w-auto object-contain"
                      />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Modern</h4>
                    <p className="text-sm text-gray-600">Contemporary design that stands the test of time</p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
                    <div className="h-16 flex items-center justify-center mb-3">
                      <img
                        src="/rook-saas-assets/rook-links.png"
                        alt="Rook Links Icon"
                        className="h-16 w-auto object-contain"
                      />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Clean</h4>
                    <p className="text-sm text-gray-600">Uncluttered, purposeful, and focused presentation</p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
                    <div className="h-16 flex items-center justify-center mb-3">
                      <img
                        src="/rook-saas-assets/rook-scoop.png"
                        alt="Rook Scoop Icon"
                        className="h-16 w-auto object-contain"
                      />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Minimalistic</h4>
                    <p className="text-sm text-gray-600">Less is more - simplicity drives impact</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* No Results Message */}
        {searchQuery.trim() && !hasAnyResults() && (
          <section className="py-16 bg-white w-full">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center">
              <p className="text-xl text-gray-600 mb-4">
                No results found for <strong className="text-gray-900">"{searchQuery}"</strong>
              </p>
              <p className="text-gray-500 mb-6">
                Try searching for logo names, colors, or categories
              </p>
              <Button
                onClick={() => setSearchQuery("")}
                className="bg-[#dc2e3e] hover:bg-[#cc2934] text-white"
              >
                Clear Search
              </Button>
            </div>
          </section>
        )}

        {/* Download All */}
        <section className="py-16 bg-white w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Complete Brand Package
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Download the complete Rook brand package including all logos,
              color swatches, and brand guidelines.
            </p>
            <a href="./Rook Brand Kit.rar" download="Rook Brand Kit.rar">
              <Button
                onClick={() => downloadAsset("Complete Brand Package")}
                className="bg-[#dc2e3e] hover:bg-[#cc2934] text-white px-8 py-3 text-lg"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Complete Kit
              </Button>
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default BrandKit;
