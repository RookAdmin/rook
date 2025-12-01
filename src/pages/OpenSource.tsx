import React from "react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import {
  Brain,
  Package,
  Users,
  Shield,
  Rocket,
  Zap,
  BookOpen,
  GitBranch,
  MessageSquare,
  Star,
  Check,
  Clock,
  Calendar,
  ExternalLink,
  Github,
  Mail,
  Code,
} from "lucide-react";
import { Link } from "react-router-dom";

const OpenSource = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Rook Open Source Projects",
    "description": "Explore Rook's open source initiatives and developer tools. Join our community of developers and contribute to innovative projects like Paym.me.",
    "url": "https://rookhq.com/open-source",
    "about": {
      "@type": "SoftwareApplication",
      "name": "Rook Open Source",
      "applicationCategory": "DeveloperApplication"
    }
  };

  const roadmapItems = [
    {
      quarter: "2025 Q2",
      title: "Code Foundation / Internal Audit",
      status: "in-progress",
      progress: 75,
    },
    {
      quarter: "2025 Q3",
      title: "Dev Collab Access / GitHub Public",
      status: "upcoming",
      progress: 0,
    },
    {
      quarter: "2025 Q4",
      title: "Add-ons + Third-Party Plugins",
      status: "upcoming",
      progress: 0,
    },
    {
      quarter: "2026 Q1",
      title: "Widget Marketplace / Community Highlights",
      status: "upcoming",
      progress: 0,
    },
  ];

  const testimonials = [
    "Cleanest open source repo I've ever seen.",
    "Documentation-first mindset is exceptional.",
    "Paym.me feels like what Stripe should've made.",
  ];

  const features = [
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Built with Vite + Tailwind + Payment Gatewat APIs",
      description: "Modern stack for maximum performance",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Easy-to-plug widget, link-style or iframe embed",
      description: "Multiple integration options",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "MIT Licensed, developer docs coming soon",
      description: "Free forever with comprehensive documentation",
    },
  ];

  const timeline = [
    {
      icon: <Check className="h-4 w-4 text-[#00d437]" />,
      text: "Codebase in progress",
      period: "May–June 2025",
    },
    {
      icon: <Clock className="h-4 w-4 text-[#ffd800]" />,
      text: "Private alpha testing",
      period: "July 2025",
    },
    {
      icon: <Calendar className="h-4 w-4 text-[#0096d4]" />,
      text: "Public GitHub Launch",
      period: "August 2025",
    },
  ];

  const communityFeatures = [
    {
      icon: <GitBranch className="h-5 w-5" />,
      title: "Open roadmap via GitHub Projects",
      description: "Transparent development process",
    },
    {
      icon: <MessageSquare className="h-5 w-5" />,
      title: "Transparent issue tracking",
      description: "Community-driven problem solving",
    },
    {
      icon: <Code className="h-5 w-5" />,
      title: "Clean Git commit practices",
      description: "Professional development standards",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Dedicated Slack/Discord space",
      description: "Direct collaboration channels",
    },
  ];

  const faqs = [
    {
      question: "Will Paym.me stay open source forever?",
      answer:
        "Paym.me is free if self-hosted. Pricing applies when using our hosted platform.",
    },
    {
      question: "Is there a roadmap?",
      answer: "Yes, publicly available post-launch.",
    },
    {
      question: "Will it support enterprise plugins?",
      answer: "Yes, we'll have an extension system.",
    },
    {
      question: "Is it secure for production use?",
      answer: "Yes. We follow payment guidelines + OWASP best practices.",
    },
  ];

  return (
    <>
      <SEO
        title="Open Source Projects | Rook - Developer Tools, GitHub Projects & Community"
        description="Explore Rook's open source initiatives and developer tools. Join our community of developers and contribute to innovative projects like Paym.me. Open source SaaS tools, GitHub projects, developer community."
        keywords="Rook open source, open source projects, developer tools, GitHub projects, Paym.me open source, developer community, open source SaaS, open source software, contribute to open source, open source code"
        canonical="/open-source"
        geoRegion="IN"
        geoPlacename="India"
        structuredData={structuredData}
      />
    <div className="min-h-screen bg-white pt-16">
        {/* Hero Section */}
        <section className="pt-40 py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge
                    variant="outline"
                    className="text-[#0096d4] border-[#0096d4]"
                  >
                    Paym.me by Rook. Coming Soon
                  </Badge>
                  <h1 className="text-5xl lg:text-6xl font-bold text-textPrimary leading-tight">
                    Building in the Open.{" "}
                    <span className="text-[#dc2e3e]">Backed by Rook.</span>
                  </h1>
                  <p className="text-xl text-textSecondary max-w-lg">
                    Explore our open-source projects, collaborate with
                    passionate developers, and shape a better internet,
                    together.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="https://paym.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className="bg-[#0096d4] hover:bg-[#0096d4]/90"
                    >
                      Join Paym.me Developer Collab
                    </Button>
                  </Link>
                  <Link
                    to="https://paym.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      disabled
                      className="opacity-50"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View GitHub (Coming Soon)
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-[#131313] to-[#1f1f1f] rounded-2xl p-8 text-white shadow-xl">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Code className="h-6 w-6" />
                      <span className="font-semibold">Developer Console</span>
                    </div>
                    <div className="bg-white/10 rounded p-4 font-mono text-sm">
                      <div className="text-[#00d437]">
                        $ npm install @rook/paym-me
                      </div>
                      <div className="text-gray-300 mt-2">
                        // Accept Swift payments effortlessly
                      </div>
                      <div className="text-[#00d437]">
                        {'<PaymMe amount={99} method="swift" id="user@bank" />'}
                      </div>
                      <div className="text-gray-300 mt-2">
                        {'< PaymMe smartLink = "https://paym.me/rook/" />'}
                      </div>
                      <div className="text-[#00d437] mt-1">
                        {"<PaymMe amount={99$} />"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is Rook Open Source */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-textPrimary mb-4">
                What is Rook Open Source?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {[
                {
                  icon: <Brain className="h-8 w-8 text-[#0096d4]" />,
                  title: "Transparency-first development",
                },
                {
                  icon: <Package className="h-8 w-8 text-[#00d437]" />,
                  title: "Modular, well-documented codebases",
                },
                {
                  icon: <Users className="h-8 w-8 text-[#dc2e3e]" />,
                  title: "Community before corporate",
                },
                {
                  icon: <Shield className="h-8 w-8 text-[#ffd800]" />,
                  title: "Security & best practices built in",
                },
              ].map((item, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="flex justify-center">{item.icon}</div>
                  <p className="font-medium text-textPrimary">{item.title}</p>
                </div>
              ))}
            </div>

            <Card className="bg-gray-50 border-none">
              <CardContent className="p-8">
                <blockquote className="text-xl text-textPrimary italic text-center">
                  "Open code builds open trust. Every project we release
                  reflects our obsession for clarity, performance, and impact."
                </blockquote>
                <p className="text-center text-textSecondary mt-4 font-medium">
                  Rook Dev Team
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Featured Project: Paym.me */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-3 mb-4">
                <img
                  alt="Paym.me Logo"
                  className="w-52 h-16"
                  src="./Paym.me Logo Black Text.png"
                />
                {/* <h2 className="text-3xl font-bold text-textPrimary">Paym.me by Rook</h2> */}
              </div>
              <p className="text-xl text-textSecondary max-w-4xl mx-auto">
                Paym.me by Rook is a developer-first open-source payment widget
                framework. Designed to embed payments into any site, SaaS,
                portfolio or product page. Customizable, lightweight, and
                enterprise-ready.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {features.map((feature, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>Development Timeline</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {timeline.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    {item.icon}
                    <span className="font-medium text-textPrimary">
                      {item.text}
                    </span>
                    <span className="text-textSecondary">({item.period})</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="text-center space-y-4">
              <Link
                to="https://paym.me/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-[#0096d4] hover:bg-[#0096d4]/90"
                >
                  Apply to Join Early Dev Collaborators
                </Button>
              </Link>
              <div>
                <Badge
                  variant="outline"
                  className="text-[#131313] border-[#131313]"
                >
                  Currently in Internal Build Phase
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Why Developers Love Us */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-textPrimary mb-4">
                Why Developers Love Us
              </h2>
              <p className="text-xl text-textSecondary">
                Community culture that puts developers first
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {communityFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="flex justify-center mb-2">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-textPrimary mb-6 text-center">
                Developer Testimonials
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-6 shadow-sm"
                  >
                    <p className="text-textPrimary italic">"{testimonial}"</p>
                    <div className="flex items-center mt-4 space-x-2">
                      <Star className="h-4 w-4 text-[#ffd800] fill-current" />
                      <Star className="h-4 w-4 text-[#ffd800] fill-current" />
                      <Star className="h-4 w-4 text-[#ffd800] fill-current" />
                      <Star className="h-4 w-4 text-[#ffd800] fill-current" />
                      <Star className="h-4 w-4 text-[#ffd800] fill-current" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Project Roadmap */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-textPrimary mb-4">
                Project Roadmap
              </h2>
              <p className="text-xl text-textSecondary">
                Transparent development timeline
              </p>
            </div>

            <div className="space-y-6">
              {roadmapItems.map((item, index) => (
                <Card key={index} className="relative">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <Badge className="bg-[#0096d4] text-white hover:bg-[#0096d4]/90">
                          {item.quarter}
                        </Badge>
                        <h3 className="text-lg font-semibold text-textPrimary">
                          {item.title}
                        </h3>
                      </div>
                      <Badge
                        variant="outline"
                        className={
                          item.status === "in-progress"
                            ? "text-[#00d437] border-[#00d437]"
                            : "text-textSecondary"
                        }
                      >
                        {item.status === "in-progress"
                          ? "In Progress"
                          : "Upcoming"}
                      </Badge>
                    </div>
                    {item.status === "in-progress" && (
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-[#0096d4] h-2 rounded-full transition-all duration-300"
                          style={{ width: `${item.progress}%` }}
                        ></div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Join the Movement */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-textPrimary mb-4">
              Join the Movement
            </h2>
            <p className="text-xl text-textSecondary mb-8">
              We don't just want stars, we want committers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="https://paym.me/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-[#0096d4] hover:bg-[#0096d4]/90"
                >
                  Apply to Collaborate
                </Button>
              </Link>
              <Link
                to="https://paym.me/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg">
                  <Mail className="mr-2 h-4 w-4" />
                  Get Notified on Launch
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-textPrimary mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-textPrimary mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-textSecondary">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default OpenSource;
