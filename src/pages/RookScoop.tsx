import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Rocket, 
  BarChart3, 
  Users, 
  Shield, 
  Zap, 
  Globe, 
  CheckCircle, 
  ArrowRight, 
  ExternalLink,
  Monitor,
  Smartphone,
  Star,
  ChevronRight,
  Building,
  Target,
  TrendingUp
} from "lucide-react";

const RookScoop = () => {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Rook Scoop",
    "description": "AI-powered SaaS publishing and product insights platform for founders, teams, and enterprises",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "priceValidUntil": "2024-12-31"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes Rook Scoop different from other SaaS tools?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rook Scoop is specifically designed for the complete SaaS lifecycle - from idea validation to market-ready product. It combines AI-powered insights, seamless integrations, and enterprise-grade security in one platform."
        }
      },
      {
        "@type": "Question",
        "name": "Can I integrate with my existing tools?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Rook Scoop integrates seamlessly with popular tools like Slack, Jira, GitHub, Figma, and more. Our API-first approach ensures smooth workflow integration."
        }
      }
    ]
  };

  const keyFeatures = [
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Launch Faster",
      description: "Take your SaaS from draft to launch in days, not months, with our streamlined publishing pipeline."
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "AI Analytics",
      description: "Get actionable insights powered by AI to optimize your product strategy and user engagement."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaboration Ready",
      description: "Built for product teams, startups, and enterprises with advanced collaboration features."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Enterprise Security",
      description: "GDPR & SOC2-ready privacy standards with enterprise-grade security and compliance."
    }
  ];

  const benefits = [
    {
      title: "Built for Founders & Product Teams",
      description: "From idea validation to market launch, Rook Scoop provides the tools and insights you need to build successful SaaS products. Track user feedback, validate features, and iterate quickly.",
      image: "dashboard",
      reverse: false
    },
    {
      title: "Seamless Integrations with Your Workflow",
      description: "Connect with the tools you already use. Slack for notifications, Jira for project management, GitHub for development tracking, and dozens more integrations.",
      image: "integrations",
      reverse: true
    },
    {
      title: "Scale Confidently with Enterprise Support",
      description: "Enterprise-grade infrastructure, dedicated support, and compliance features that grow with your business. From startup to IPO, we've got you covered.",
      image: "enterprise",
      reverse: false
    }
  ];

  const comparison = [
    {
      feature: "AI-Powered Insights",
      rook: true,
      notion: false,
      productboard: true,
      monday: false
    },
    {
      feature: "Built-in Billing & Payments",
      rook: true,
      notion: false,
      productboard: false,
      monday: false
    },
    {
      feature: "Enterprise Security",
      rook: true,
      notion: true,
      productboard: true,
      monday: true
    },
    {
      feature: "SaaS Lifecycle Management",
      rook: true,
      notion: false,
      productboard: false,
      monday: false
    },
    {
      feature: "Real-time Collaboration",
      rook: true,
      notion: true,
      productboard: true,
      monday: true
    }
  ];

  const testimonials = [
    {
      quote: "Rook Scoop helped us reduce our time to market by 60%. The AI insights are game-changing for product strategy.",
      author: "Alex Chen",
      role: "Founder, TechStart",
      company: "TechStart",
      avatar: "AC"
    },
    {
      quote: "Finally, a tool that understands the complete SaaS journey. From validation to scaling, everything is seamless.",
      author: "Sarah Rodriguez",
      role: "Product Manager, ScaleUp Inc",
      company: "ScaleUp Inc",
      avatar: "SR"
    },
    {
      quote: "The enterprise features and security compliance made our decision easy. Rook Scoop scales with our growth.",
      author: "Michael Johnson",
      role: "CTO, Enterprise Solutions",
      company: "Enterprise Solutions",
      avatar: "MJ"
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for individual founders and small teams",
      features: ["Up to 3 projects", "Basic analytics", "Community support", "Standard integrations"]
    },
    {
      name: "Growth",
      price: "$49/mo",
      description: "For growing teams and scaling products",
      features: ["Unlimited projects", "Advanced AI analytics", "Priority support", "All integrations", "Team collaboration"]
    },
    {
      name: "Pro",
      price: "$149/mo",
      description: "For established businesses and agencies",
      features: ["Everything in Growth", "White-label options", "Custom integrations", "Advanced security", "Dedicated success manager"]
    }
  ];

  const faqs = [
    {
      question: "What makes Rook Scoop different from other SaaS tools?",
      answer: "Rook Scoop is specifically designed for the complete SaaS lifecycle - from idea validation to market-ready product. It combines AI-powered insights, seamless integrations, and enterprise-grade security in one platform, unlike tools that focus on just one aspect of product development."
    },
    {
      question: "Can I integrate with my existing tools?",
      answer: "Yes, Rook Scoop integrates seamlessly with popular tools like Slack, Jira, GitHub, Figma, Notion, and more. Our API-first approach ensures smooth workflow integration without disrupting your current processes."
    },
    {
      question: "Does Rook Scoop support enterprise compliance?",
      answer: "Absolutely. Rook Scoop is built with enterprise-grade security, including GDPR compliance, SOC2 certification, and advanced data encryption. We also offer dedicated enterprise support and custom compliance features."
    },
    {
      question: "How does the AI analytics feature work?",
      answer: "Our AI analyzes user behavior, feature usage, market trends, and competitor data to provide actionable insights. It helps you make data-driven decisions about product development, pricing, and go-to-market strategies."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a free Starter plan with core features, plus a 14-day free trial of our Growth plan so you can experience the full power of Rook Scoop before committing."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer multiple support tiers: community support for Starter users, priority email and chat support for Growth users, and dedicated success managers plus phone support for Pro and Enterprise customers."
    }
  ];

  return (
    <>
      <SEO
        title="Rook Scoop | AI-Powered SaaS Publishing & Product Insights Platform"
        description="Rook Scoop is the ultimate SaaS publishing tool, helping founders, teams, and enterprises launch, analyze, and scale products faster with AI-powered insights and seamless integrations."
        keywords="SaaS publishing, product insights, AI SaaS tools, product management, SaaS analytics, product development, SaaS platform, startup tools, enterprise SaaS"
        canonical="/scoop"
        geoRegion="IN"
        geoPlacename="India"
        structuredData={{ ...productSchema, ...faqSchema }}
      />
    <div className="min-h-screen bg-white pt-16 overflow-x-hidden">
      {/* Hero Section */}
      <section className="hero-section py-12 sm:py-16 md:py-20 px-4 relative overflow-x-hidden bg-gray-50">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="outline" className="text-[#dc2e3e] border-[#dc2e3e] text-sm font-medium">
                  Rook Scoop by Rook HQ
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  AI-Powered Product Publishing & <span className="text-[#dc2e3e]">Insights</span>
                </h1>
                <h2 className="text-xl lg:text-2xl text-gray-600 max-w-lg leading-relaxed">
                  From idea validation to market-ready SaaS, Rook Scoop is your all-in-one publishing and analytics platform.
                </h2>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-[#dc2e3e] hover:bg-[#dc2e3e]/90 text-white text-lg px-8 py-4 h-auto"
                  onClick={() => window.open('https://scoop.rookhq.com', '_blank')}
                >
                  Join As Early Bird
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-[#dc2e3e] rounded-3xl p-8 text-white shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <Monitor className="h-6 w-6" />
                    <span className="font-semibold text-lg">Rook Scoop Dashboard</span>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6 space-y-4">
                    <div className="bg-white/20 rounded-lg p-3 flex items-center space-x-3">
                      <TrendingUp className="h-5 w-5" />
                      <span className="text-sm">Product Analytics</span>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3 flex items-center space-x-3">
                      <Target className="h-5 w-5" />
                      <span className="text-sm">Launch Pipeline</span>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3 flex items-center space-x-3">
                      <Users className="h-5 w-5" />
                      <span className="text-sm">Team Collaboration</span>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3 flex items-center space-x-3">
                      <BarChart3 className="h-5 w-5" />
                      <span className="text-sm">AI Insights</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything you need to launch and scale</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features designed for modern SaaS teams, from startups to enterprises
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-[#dc2e3e]/10 rounded-full">
                      <div className="text-[#dc2e3e]">{feature.icon}</div>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          {benefits.map((benefit, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 ${index === benefits.length - 1 ? 'mb-0' : ''}`}>
              <div className={`space-y-6 ${benefit.reverse ? 'order-2' : 'order-1'}`}>
                <h3 className="text-3xl font-bold text-gray-900">{benefit.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{benefit.description}</p>
                <Button 
                  variant="outline" 
                  className="text-[#0096d4] border-[#0096d4] hover:bg-[#0096d4]/5"
                >
                  Learn More
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className={`${benefit.reverse ? 'order-1' : 'order-2'}`}>
                <div className="bg-[#0096d4] rounded-2xl p-8 text-white shadow-xl">
                  <div className="space-y-4">
                    <Building className="h-12 w-12 mb-4" />
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-sm opacity-90 mb-2">{benefit.image} preview</div>
                      <div className="space-y-2">
                        <div className="bg-white/20 rounded p-2 text-xs">Feature visualization</div>
                        <div className="bg-white/20 rounded p-2 text-xs">Interactive demo</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How Rook Scoop compares</h2>
            <p className="text-xl text-gray-600">See why teams choose Rook Scoop over alternatives</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-6 font-semibold text-gray-900">Features</th>
                  <th className="text-center p-6 font-semibold text-[#dc2e3e]">Rook Scoop</th>
                  <th className="text-center p-6 font-semibold text-gray-600">Notion AI</th>
                  <th className="text-center p-6 font-semibold text-gray-600">Productboard</th>
                  <th className="text-center p-6 font-semibold text-gray-600">Monday.com</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100 last:border-b-0">
                    <td className="p-6 font-medium text-gray-900">{row.feature}</td>
                    <td className="text-center p-6">
                      {row.rook ? <CheckCircle className="h-6 w-6 text-[#dc2e3e] mx-auto" /> : <div className="h-6 w-6 mx-auto"></div>}
                    </td>
                    <td className="text-center p-6">
                      {row.notion ? <CheckCircle className="h-6 w-6 text-gray-400 mx-auto" /> : <div className="h-6 w-6 mx-auto"></div>}
                    </td>
                    <td className="text-center p-6">
                      {row.productboard ? <CheckCircle className="h-6 w-6 text-gray-400 mx-auto" /> : <div className="h-6 w-6 mx-auto"></div>}
                    </td>
                    <td className="text-center p-6">
                      {row.monday ? <CheckCircle className="h-6 w-6 text-gray-400 mx-auto" /> : <div className="h-6 w-6 mx-auto"></div>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Star className="h-6 w-6 text-[#ffd800] fill-current" />
              <span className="text-lg font-semibold text-gray-900">
                Trusted by 500+ teams worldwide
              </span>
              <Star className="h-6 w-6 text-[#ffd800] fill-current" />
            </div>
            <div className="flex items-center justify-center space-x-12 mb-12 opacity-60">
              <div className="text-gray-600 font-semibold">Rook HQ</div>
              <div className="text-gray-600 font-semibold">Realm</div>
              <div className="text-gray-600 font-semibold">HLO</div>
              <div className="text-gray-600 font-semibold">MyProBuddy</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center shadow-lg border-0">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-[#ffd800] fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-12 h-12 bg-[#dc2e3e] rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-xs text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Start free. Scale as you grow.</h2>
            <p className="text-xl text-gray-600">Choose the plan that fits your team's needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`relative ${index === 1 ? 'border-[#dc2e3e] border-2 shadow-xl' : 'shadow-lg border-0'}`}>
                {index === 1 && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#dc2e3e]">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                  <div className="text-4xl font-bold text-[#dc2e3e] my-4">{tier.price}</div>
                  <CardDescription className="text-gray-600">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-[#dc2e3e]" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${index === 1 ? 'bg-[#dc2e3e] hover:bg-[#dc2e3e]/90' : 'bg-[#0096d4] hover:bg-[#0096d4]/90'}`}
                    onClick={() => window.open('https://scoop.rookhq.com/pricing', '_blank')}
                  >
                    {tier.price === 'Free' ? 'Get Started' : 'Start Trial'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Need enterprise features?</p>
            <Button variant="outline" className="text-[#0096d4] border-[#0096d4] hover:bg-[#0096d4]/5">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 w-full">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg sm:text-xl text-gray-600">Everything you need to know about Rook Scoop</p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border-0 shadow-md">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="pt-20 pb-0 px-4 sm:px-6 lg:px-8 bg-[#dc2e3e] w-full">
        <div className="container mx-auto max-w-4xl text-center text-white pb-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to take your product from idea to launch?</h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of successful teams using Rook Scoop to build, launch, and scale their SaaS products faster than ever.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-[#121212] hover:bg-white hover:text-[#121212] text-white text-lg px-8 py-4 h-auto transition-all"
              onClick={() => window.open('https://scoop.rookhq.com', '_blank')}
            >
              Join As Early Bird
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default RookScoop;
