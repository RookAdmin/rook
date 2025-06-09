
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Copy, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const BrandKit = () => {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const { toast } = useToast();

  const brandColors = [
    { name: "Rook Red", hex: "#dc2e3e", rgb: "220, 46, 62", usage: "Primary brand color, call-to-action elements" },
    { name: "Rook Blue", hex: "#0096d4", rgb: "0, 150, 212", usage: "Secondary brand color, links, information" },
    { name: "Rook Green", hex: "#00d437", rgb: "0, 212, 55", usage: "Success states, positive indicators" },
    { name: "Rook Yellow", hex: "#ffd800", rgb: "255, 216, 0", usage: "Warning states, highlights" },
    { name: "Rook Violet", hex: "#6366f1", rgb: "99, 102, 241", usage: "Accent color, premium features" }
  ];

  const logoVariants = [
    { name: "Primary Logo", format: "SVG", bg: "white", description: "Standard logo for light backgrounds" },
    { name: "White Logo", format: "SVG", bg: "black", description: "Logo for dark backgrounds" },
    { name: "Icon Only", format: "SVG", bg: "white", description: "Standalone icon for apps and favicons" },
    { name: "Horizontal Logo", format: "SVG", bg: "white", description: "Wide layout applications" },
    { name: "Horizontal Logo", format: "SVG", bg: "white", description: "Wide layout applications" }
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

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Rook Brand Kit
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Brand assets and guidelines for consistent representation across all touchpoints.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Guidelines */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Brand Guidelines</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-sm bg-white">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Brand Promise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Empowering innovation through technology. We deliver sophisticated solutions with uncompromising quality and precision.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Communication Style</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Authoritative, professional, and forward-thinking. Clear communication that demonstrates expertise and builds trust.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Visual Identity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Clean, modern design with purposeful use of color. Emphasis on clarity, functionality, and premium quality.
                </p>
              </CardContent>
            </Card>
          </div>
        <div className="flex justify-center mt-8">
            <Link to="/trademark" className="text-[#dc2e3e] hover:text-[#cc2934] text-lg font-semibold">
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

    {/* Logo Variants */}
     <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Logo Variants</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            name: "Primary Logo",
            format: "png",
            bg: "white",
            description: "Logo variant for Primary Logo branding",
            img: "/brandkit/Rook Logo Full Text.png"
          },
          {
            name: "White Logo",
            format: "png",
            bg: "white",
            description: "Logo variant for White Logo branding",
            img: "/brandkit/Rook Logo White.png"
          },
          {
            name: "Icon Only",
            format: "png",
            bg: "white",
            description: "Logo variant for Favicon branding",
            img: "/brandkit/Rook Logo - Colored.png"
          },
          {
            name: "Horizontal Logo - White",
            format: "png",
            bg: "white",
            description: "Logo variant for Horizontal Logo - White branding",
            img: "/brandkit/Rook Logo.png"
          },
          {
            name: "Horizontal Logo - Black",
            format: "png",
            bg: "white",
            description: "Logo variant for Horizontal Logo - Black branding",
            img: "/brandkit/Rook Logo Black.png"
          }
        ].map((logo, index) => (
          <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
            <div className={`h-32 flex items-center justify-center mb-4 rounded-lg ${logo.bg === 'black' ? 'bg-black' : 'bg-white border'}`}>
              <img
                src={logo.img}
                alt={logo.name}
                className="h-24 object-contain"
              />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{logo.name}</h3>
            <p className="text-sm text-gray-600 mb-4">{logo.description}</p>
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
      </div>
    </section>
    {/* Country Wise Logos */}
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Country Wise Logos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            name: "Rook Logo - America",
            format: "png",
            bg: "white",
            description: "Logo variant for America branding",
            img: "/brandkit/Rook Logo - America.png"
          },
          {
            name: "Rook Logo - Britain",
            format: "png",
            bg: "white",
            description: "Logo variant for Britain branding",
            img: "/brandkit/Rook Logo - Britain.png"
          },
          {
            name: "Rook Logo - Francais",
            format: "png",
            bg: "white",
            description: "Logo variant for Francais branding",
            img: "/brandkit/Rook Logo - Francais.png"
          },
           {
            name: "Rook Logo - UAE",
            format: "png",
            bg: "white",
            description: "Logo variant for UAE \n branding",
            img: "/brandkit/Rook Logo - UAE.png"
          }
        ].map((logo, index) => (
          <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
            <div className={`h-32 flex items-center justify-center mb-4 rounded-lg ${logo.bg === 'black' ? 'bg-black' : 'bg-white border'}`}>
              <img
                src={logo.img}
                alt={logo.name}
                className="h-24 object-contain"
              />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{logo.name}</h3>
            <p className="text-sm text-gray-600 mb-4" style={{whiteSpace: 'pre-line'}}>{logo.description}</p>
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
      </div>
    </section>

    {/* Rook for Startups Logos */}
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Rook for Startups Logos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
        {[
          {
            name: "Rook for Startups Primary Logo",
            format: "png",
            bg: "white",
            description: "Logo variant for Rook for Startups Black Text Logo branding",
            img: "/brandkit/RFS (Black).png"
          },
          {
            name: "Rook for Startups Secondary Logo",
            format: "png",
            bg: "white",
            description: "Logo variant for Rook for Startups White Text Logo branding",
            img: "/brandkit/RFS (White).png"
          },
          {
            name: "Rook for Startups Primary Label",
            format: "png",
            bg: "white",
            description: "Logo variant for Rook for Startups Black Label branding",
            img: "/brandkit/RFS Label Black.png"
          },
          {
            name: "Rook for Startups Secondary Label",
            format: "png",
            bg: "white",
            description: "Logo variant for Rook for Startups White Label branding",
            img: "/brandkit/RFS Label White.png"
          },

          {
            name: "Rook for Startups White Background",
            format: "png",
            bg: "white",
            description: "Logo variant for Rook for Startups White Background branding",
            img: "/brandkit/RFS.png"
          }
        ].map((logo, index) => (
          <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
            <div className={`h-32 flex items-center justify-center mb-4 rounded-lg ${logo.bg === 'black' ? 'bg-black' : 'bg-white border'}`}>
              <img
                src={logo.img}
                alt={logo.name}
                className="h-24 object-contain"
              />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{logo.name}</h3>
            <p className="text-sm text-gray-600 mb-4">{logo.description}</p>
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
      </div>
    </section>
      {/* Color Palette */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Brand Colors</h2>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {brandColors.map((color, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
                <CardContent className="p-6">
                  <div 
                    className="h-24 w-full rounded-lg mb-4 border"
                    style={{ backgroundColor: color.hex }}
                  ></div>
                  <h3 className="font-semibold text-gray-900 mb-2">{color.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{color.usage}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-mono text-gray-600">HEX</span>
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
                      <span className="text-sm font-mono text-gray-600">RGB</span>
                      <button
                        onClick={() => copyToClipboard(`rgb(${color.rgb})`, color.name)}
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

      {/* Download All */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete Brand Package</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Download the complete Rook brand package including all logos, color swatches, and brand guidelines.
          </p>
          <a
        href="./Rook Brand Kit.zip"
        download="Rook Brand Kit.zip"
      >
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
  );
};

export default BrandKit;