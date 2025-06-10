
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Award, CheckCircle, Check, X, AlertTriangle, BookOpen, Users, Package, FileText } from "lucide-react";

const Trademark = () => {
  const trademarks = [
    {
      name: "Rook®",
      status: "Registered Trademark",
    //   description: "Technology services and digital solutions"
    },
    {
      name: "Donum Club®",
      status: "Registered Trademark", 
    //   description: "Business networking and membership services"
    }
  ];

  const dosItems = [
    {
      icon: <Check className="h-5 w-5 text-[#00d437]" />,
      title: "Compatibility References",
      description: "Note if your product, service, or solution is interoperable or compatible with a Rook product or service.",
      example: "Nuo software is compatible with Rook platform."
    },
    {
      icon: <Check className="h-5 w-5 text-[#00d437]" />,
      title: "Integration Communication",
      description: "If your product integrates with Rook technology, clearly communicate the relationship.",
      example: "Nuo app is built on Rook infrastructure."
    },
    {
      icon: <Check className="h-5 w-5 text-[#00d437]" />,
      title: "Truthful References",
      description: "Truthfully and accurately refer to Rook and its products and services.",
      example: "Join us for a seminar about digital transformation, including the use of Rook technology."
    },
    {
      icon: <Check className="h-5 w-5 text-[#00d437]" />,
      title: "Unaltered Text Usage",
      description: "Use without alteration in text to refer to Rook and its products and services.",
      example: "Follow these steps to integrate your application using Rook APIs."
    },
    {
      icon: <Check className="h-5 w-5 text-[#00d437]" />,
      title: "News Articles",
      description: "Use in the title of news articles, when truthful and not misleading.",
      example: "Rook announces new enterprise features."
    },
    {
      icon: <Check className="h-5 w-5 text-[#00d437]" />,
      title: "Adjective Usage",
      description: "Use our brand assets as adjectives before nouns.",
      example: "Rook platform, Rook services, Rook technology."
    }
  ];

  const dontsItems = [
    {
      icon: <X className="h-5 w-5 text-[#dc2e3e]" />,
      title: "Business Names",
      description: "Don't use Rook's brand assets in the name of your business, product, service, app, or domain name.",
      example: "Nuo Rook Services, www.nuorook.com"
    },
    {
      icon: <X className="h-5 w-5 text-[#dc2e3e]" />,
      title: "Logo Usage",
      description: "Don't use Rook's logos, icons, or designs, in any manner without express permission.",
      example: "Using Rook logo in your marketing materials"
    },
    {
      icon: <X className="h-5 w-5 text-[#dc2e3e]" />,
      title: "Implied Affiliation",
      description: "Don't imply an affiliation, endorsement, sponsorship, or approval with or by Rook.",
      example: "Rook has certified the Nuo platform"
    },
    {
      icon: <X className="h-5 w-5 text-[#dc2e3e]" />,
      title: "Alterations",
      description: "Don't alter, animate, distort, or misappropriate Rook's brand assets.",
      example: "RookPowered, Rook-tastic, NuoRook"
    },
    {
      icon: <X className="h-5 w-5 text-[#dc2e3e]" />,
      title: "Noun/Verb Usage",
      description: "Don't use Rook's brand assets as nouns or verbs.",
      example: "Let's Rook this project, We're Rooking our way to success"
    },
    {
      icon: <X className="h-5 w-5 text-[#dc2e3e]" />,
      title: "Prominence",
      description: "Don't use Rook's brand assets more prominently than your own brand.",
      example: "ROOK SERVICES by Nuo"
    }
  ];

  const appGuidelines = [
    {
      icon: <Package className="h-6 w-6 text-[#131313]" />,
      title: "App Identity",
      description: "Everything about your app must be unique to you and free of Rook's brand assets, except for truthful compatibility statements in descriptions."
    },
    {
      icon: <FileText className="h-6 w-6 text-[#131313]" />,
      title: "Approved Example",
      description: "Developer: Nuo Inc. | App: Nuo App | Description: Nuo App integrates with Rook platform for enhanced productivity."
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-[#131313]" />,
      title: "Prohibited Usage",
      description: "You may not use Rook's brand assets in a manner that implies Rook published, developed, or endorsed your app."
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <Shield className="h-16 w-16 text-[#dc2e3e]" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Trademark Guidelines
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Protecting our brand while enabling partners to communicate their relationship with Rook.
            </p>
          </div>
        </div>
      </section>

      {/* Registered Trademarks */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Registered Trademarks</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
            {trademarks.map((trademark, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <Award className="h-6 w-6 text-[#dc2e3e]" />
                    <CardTitle className="text-2xl text-gray-900">{trademark.name}</CardTitle>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#00d437]" />
                    <span className="text-sm font-medium text-[#00d437]">{trademark.status}</span>
                  </div>
                </CardHeader>
                {/* <CardContent>
                  <p className="text-gray-600">{trademark.description}</p>
                </CardContent> */}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dos and Don'ts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Dos and Don'ts</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              To help you understand what you can and can't do with Rook's brand assets, we have created this comprehensive guide. 
              In general, wordmarks can be used to truthfully convey information about your product or service, as long as 
              customers will not be confused into believing Rook is affiliated with or endorses your offering.
            </p>
          </div>

          {/* Dos Section */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <CheckCircle className="h-8 w-8 text-[#00d437] mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">What You May Do</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {dosItems.map((item, index) => (
                <Card key={index} className="border-l-4 border-[#00d437] shadow-sm bg-green-50/30">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3 mb-3">
                      {item.icon}
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    </div>
                    <p className="text-gray-600 mb-3">{item.description}</p>
                    <div className="bg-white p-3 rounded border-l-2 border-[#00d437]">
                      <p className="text-sm text-gray-700 italic">{item.example}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Don'ts Section */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <X className="h-8 w-8 text-[#dc2e3e] mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">What You May Not Do</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {dontsItems.map((item, index) => (
                <Card key={index} className="border-l-4 border-[#dc2e3e] shadow-sm bg-red-50/30">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3 mb-3">
                      {item.icon}
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    </div>
                    <p className="text-gray-600 mb-3">{item.description}</p>
                    <div className="bg-white p-3 rounded border-l-2 border-[#dc2e3e]">
                      <p className="text-sm text-gray-700 italic">{item.example}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* App Guidelines */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-center mb-12">
              <Package className="h-8 w-8 text-[#dc2e3e]" />
            <h2 className="text-3xl font-bold text-gray-900">App Guidelines</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {appGuidelines.map((guideline, index) => (
              <Card key={index} className="border-0 shadow-sm bg-white">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="border-2 border-[#131313] bg-[#fffff] rounded-full p-2">
                    {guideline.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-gray-900">{guideline.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{guideline.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-0 shadow-sm bg-white">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="h-6 w-6 text-[#ffd800] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Important Note</h3>
                  <p className="text-gray-600">
                    Without a license arrangement with Rook, everything about your app must be unique to you and free of Rook's brand assets. 
                    You may only truthfully state compatibility within your app description text.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Legal Notice */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <Card className="border-0 shadow-sm bg-white">
            <CardHeader>
              <div className="flex items-center justify-center mb-4">
                <BookOpen className="h-8 w-8 text-[#dc2e3e] " />
                <CardTitle className="text-2xl text-gray-900">Legal Notice</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <div className="space-y-6 text-gray-600 text-center">
                <p>
                  <strong>Rook®</strong> and <strong>Donum Club®</strong> are registered trademarks owned by Rook. 
                  All rights reserved.
                </p>
                
                <p>
                  Unauthorized use of our trademarks is strictly prohibited and may result in legal action.
                </p>

                <p>
                  For licensing inquiries or questions regarding the use of our trademarks, 
                  contact our legal department at <strong>legal@rookhq.com</strong>.
                </p>

                <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                  <p className="text-sm italic">
                    Include a trademark footnote: "Rook, Donum Club are trademarks of Rook. 
                    All other trademarks are the property of their respective owners."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <div className="flex items-center justify-center mb-6">
            <Users className="h-8 w-8 text-[#0096d4] mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Questions?</h2>
          </div>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our legal team for trademark inquiries and licensing questions.
          </p>
          <div className="bg-white rounded-lg p-8 shadow-sm max-w-md mx-auto border-t-4 border-[#dc2e3e]">
            <h3 className="font-semibold text-gray-900 mb-4">Legal Department</h3>
            <p className="text-gray-600">legal@rookhq.com</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trademark;
