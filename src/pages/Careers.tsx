import React from "react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Sparkles, Code, Palette, TrendingUp, Zap } from "lucide-react";

const Careers = () => {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "JobPosting",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Rook",
        "sameAs": "https://rookhq.com",
        "logo": "https://rookhq.com/thumbnail.png"
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN",
          "addressRegion": "Delhi",
          "addressLocality": "New Delhi"
        }
      },
      "employmentType": ["FULL_TIME", "PART_TIME", "CONTRACTOR", "INTERN"],
      "workHours": "Flexible",
      "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": "INR"
      }
    }
  ];

  const faqData = [
    {
      question: "What types of roles does Rook hire for?",
      answer: "Rook hires for various roles including AI Engineers, Product Managers, Full Stack Developers, UI/UX Designers, Marketing Managers, and more. We're always looking for talented individuals who share our passion for building simple yet powerful tools."
    },
    {
      question: "Does Rook offer remote work?",
      answer: "Yes, Rook offers flexible work arrangements including remote work options. We believe in work-life balance and support our team members in working from wherever they're most productive."
    },
    {
      question: "What benefits does Rook offer?",
      answer: "Rook offers competitive salaries, flexible work arrangements, health insurance, professional development opportunities, and a collaborative work environment focused on impact-driven work."
    },
    {
      question: "How do I apply for a position at Rook?",
      answer: "You can apply for any open position by clicking the 'Apply' button on the job listing. This will open an email with a pre-filled subject and body. Simply add your details and send your application to hustle@rookhq.com."
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Careers", url: "/careers" }
  ];

  const getEmailSubject = (jobTitle: string) => {
    return encodeURIComponent(`Application for ${jobTitle} Position`);
  };

  const getEmailBody = (jobTitle: string, department: string) => {
    return encodeURIComponent(`Hi Rook Team,\n\nI am interested in applying for the ${jobTitle} position in the ${department} department.\n\n[Your message here]\n\nBest regards`);
  };

  return (
    <>
      <SEO
        title="Careers at Rook | Join Our Team - AI Engineers, Product Managers & More"
        description="Join Rook's innovative team. We're hiring AI Engineers, Product Managers, Full Stack Developers, and more. Work on cutting-edge SaaS products, enjoy flexible work, and be part of building simple tools with monumental impact."
        keywords="careers, jobs, hiring, AI engineer, product manager, software engineer, developer jobs, tech careers, SaaS jobs, remote work, startup jobs"
        canonical="/careers"
        geoRegion="IN"
        geoPlacename="India"
        structuredData={structuredData}
        faqData={faqData}
        breadcrumbs={breadcrumbs}
      />
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black mb-4 sm:mb-6 tracking-tight px-2 sm:px-0">
            Build the Future with Rook
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Join a team that's reshaping SaaS. We're building tools that empower creators, founders, and visionaries.
          </p>
        </div>
      </section>

      {/* Why Join Rook */}
      <section className="py-12 sm:py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 sm:mb-4">Why Join Rook</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              We're not just building products. We're creating an ecosystem that matters.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="border border-gray-200 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                <div className="w-12 h-12 rounded-full bg-[#dc2e3e]/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-[#dc2e3e]" />
                </div>
                <CardTitle className="text-lg text-black">Impact-Driven Work</CardTitle>
                </CardHeader>
                <CardContent>
                <p className="text-gray-600 text-sm">
                  Build products that millions of creators and entrepreneurs use every day. Your work directly shapes how people build their businesses.
                </p>
                </CardContent>
              </Card>

            <Card className="border border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-[#00d437]/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#00d437]" />
          </div>
                <CardTitle className="text-lg text-black">Remote-First Culture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Work from anywhere. We believe great work happens when you have the freedom to work how and where you're most productive.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-[#0096d4]/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-[#0096d4]" />
          </div>
                <CardTitle className="text-lg text-black">Continuous Growth</CardTitle>
                </CardHeader>
                <CardContent>
                <p className="text-gray-600 text-sm">
                  We invest in your growth. From learning budgets to mentorship programs, we're committed to helping you reach your potential.
                </p>
                </CardContent>
              </Card>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Open Positions</h2>
            <p className="text-gray-600">
              We're looking for talented individuals who share our vision. Explore our current openings.
            </p>
          </div>

          <div className="space-y-6">
            {/* Senior Full Stack Developer */}
            <Card className="border border-gray-200 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl text-black mb-2">Senior Full Stack Developer</CardTitle>
                    <p className="text-gray-600 mb-4">
                      Build scalable web applications and innovative solutions that power our SaaS ecosystem. You'll work with modern technologies to create products that millions of users rely on.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700">Engineering</Badge>
                      <Badge variant="outline" className="flex items-center gap-1 border-gray-300">
                        <MapPin className="h-3 w-3" />
                        Remote
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1 border-gray-300">
                        <Clock className="h-3 w-3" />
                        Full-time
                      </Badge>
                    </div>
                  </div>
                  <Button 
                    asChild
                    size="lg" 
                    className="bg-[#dc2e3e] hover:bg-[#dc2e3e]/90 text-white shrink-0"
                  >
                    <a href="mailto:hustle@rookhq.com?subject=Application for Senior Full Stack Developer Position&body=Hi Rook Team,%0D%0A%0D%0AI am interested in applying for the Senior Full Stack Developer position in the Engineering department.%0D%0A%0D%0A[Your message here]%0D%0A%0D%0ABest regards">
                      Apply Now
                    </a>
                    </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div>
                  <h4 className="font-medium text-sm text-black mb-2">What We're Looking For:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-center gap-2">
                      <div className="h-1 w-1 bg-gray-400 rounded-full" />
                      5+ years of experience in full stack development
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1 w-1 bg-gray-400 rounded-full" />
                      Strong proficiency in React, Node.js, and TypeScript
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1 w-1 bg-gray-400 rounded-full" />
                      Experience with cloud platforms and modern deployment practices
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1 w-1 bg-gray-400 rounded-full" />
                      Passion for building products that solve real problems
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* AI Engineer */}
            <Card className="border border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-xl text-black">AI Engineer</CardTitle>
                      <Badge className="bg-[#0096d4] text-white border-0">
                        <Sparkles className="h-3 w-3 mr-1" />
                        AI
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Build AI-powered features and integrate machine learning capabilities into our SaaS products. Help us create intelligent tools that enhance user experiences and automate complex workflows.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700">Engineering</Badge>
                      <Badge variant="outline" className="flex items-center gap-1 border-gray-300">
                        <MapPin className="h-3 w-3" />
                        Remote
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1 border-gray-300">
                        <Clock className="h-3 w-3" />
                        Full-time
                      </Badge>
                    </div>
                  </div>
                  <Button 
                    asChild
                    size="lg" 
                    className="bg-[#dc2e3e] hover:bg-[#dc2e3e]/90 text-white shrink-0"
                  >
                    <a href="mailto:hustle@rookhq.com?subject=Application for AI Engineer Position&body=Hi Rook Team,%0D%0A%0D%0AI am interested in applying for the AI Engineer position in the Engineering department.%0D%0A%0D%0A[Your message here]%0D%0A%0D%0ABest regards">
                      Apply Now
                    </a>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div>
                  <h4 className="font-medium text-sm text-black mb-2">What We're Looking For:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-center gap-2">
                      <div className="h-1 w-1 bg-gray-400 rounded-full" />
                      3+ years of experience in AI and machine learning
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1 w-1 bg-gray-400 rounded-full" />
                      Strong proficiency in Python and ML frameworks
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1 w-1 bg-gray-400 rounded-full" />
                      Experience with TensorFlow, PyTorch, or similar frameworks
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1 w-1 bg-gray-400 rounded-full" />
                      Understanding of NLP and practical AI applications
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Product Designer */}
            <Card className="border border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl text-black mb-2">Product Designer</CardTitle>
                    <p className="text-gray-600 mb-4">
                      Create beautiful and intuitive user experiences for our products. You'll work closely with engineering and product teams to design solutions that users love.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700">Design</Badge>
                      <Badge variant="outline" className="flex items-center gap-1 border-gray-300">
                      <MapPin className="h-3 w-3" />
                        Remote
                    </Badge>
                      <Badge variant="outline" className="flex items-center gap-1 border-gray-300">
                      <Clock className="h-3 w-3" />
                        Full-time
                    </Badge>
                    </div>
                  </div>
                  <Button 
                    asChild
                    size="lg" 
                    className="bg-[#dc2e3e] hover:bg-[#dc2e3e]/90 text-white shrink-0"
                  >
                    <a href="mailto:hustle@rookhq.com?subject=Application for Product Designer Position&body=Hi Rook Team,%0D%0A%0D%0AI am interested in applying for the Product Designer position in the Design department.%0D%0A%0D%0A[Your message here]%0D%0A%0D%0ABest regards">
                      Apply Now
                    </a>
                  </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div>
                  <h4 className="font-medium text-sm text-black mb-2">What We're Looking For:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-center gap-2">
                      <div className="h-1 w-1 bg-gray-400 rounded-full" />
                      3+ years of UX/UI design experience
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1 w-1 bg-gray-400 rounded-full" />
                      Proficiency in Figma and modern design tools
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1 w-1 bg-gray-400 rounded-full" />
                      Experience building and maintaining design systems
                    </li>
                    <li className="flex items-center gap-2">
                          <div className="h-1 w-1 bg-gray-400 rounded-full" />
                      Strong user research and testing skills
                        </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

            {/* AI Product Manager */}
            <Card className="border border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-xl text-black">AI Product Manager</CardTitle>
                      <Badge className="bg-[#0096d4] text-white border-0">
                        <Sparkles className="h-3 w-3 mr-1" />
                        AI
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Lead AI product initiatives and shape the future of intelligent SaaS tools. You'll define product strategy, work with engineering teams, and bring AI-powered features to market.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700">Product</Badge>
                      <Badge variant="outline" className="flex items-center gap-1 border-gray-300">
                        <MapPin className="h-3 w-3" />
                        Remote
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1 border-gray-300">
                        <Clock className="h-3 w-3" />
                        Full-time
                      </Badge>
                    </div>
                  </div>
                  <Button 
                    asChild
                    size="lg" 
                    className="bg-[#dc2e3e] hover:bg-[#dc2e3e]/90 text-white shrink-0"
                  >
                    <a href="mailto:hustle@rookhq.com?subject=Application for AI Product Manager Position&body=Hi Rook Team,%0D%0A%0D%0AI am interested in applying for the AI Product Manager position in the Product department.%0D%0A%0D%0A[Your message here]%0D%0A%0D%0ABest regards">
                      Apply Now
                    </a>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div>
                  <h4 className="font-medium text-sm text-black mb-2">What We're Looking For:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-center gap-2">
                      <div className="h-1 w-1 bg-gray-400 rounded-full" />
                      Proven experience in product management
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1 w-1 bg-gray-400 rounded-full" />
                      Strong understanding of AI and machine learning technologies
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1 w-1 bg-gray-400 rounded-full" />
                      Excellent strategic thinking and problem-solving skills
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1 w-1 bg-gray-400 rounded-full" />
                      Ability to collaborate effectively across engineering, design, and business teams
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 sm:mb-4">What We Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We believe in taking care of our team. Here's what makes working at Rook special.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border border-gray-200 text-center">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-[#dc2e3e]/10 flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-[#dc2e3e]" />
                </div>
                <CardTitle className="text-lg text-black">Competitive Compensation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  We offer competitive salaries and equity packages that reflect your impact and contribution.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 text-center">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-[#00d437]/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-[#00d437]" />
                </div>
                <CardTitle className="text-lg text-black">Health & Wellness</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Comprehensive health insurance, mental health support, and wellness programs to keep you at your best.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 text-center">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-[#0096d4]/10 flex items-center justify-center mx-auto mb-4">
                  <Code className="h-6 w-6 text-[#0096d4]" />
                </div>
                <CardTitle className="text-lg text-black">Learning Budget</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Annual budget for courses, conferences, books, and tools to help you grow professionally.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 text-center">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-[#ffd800]/10 flex items-center justify-center mx-auto mb-4">
                  <Palette className="h-6 w-6 text-[#ffd800]" />
                </div>
                <CardTitle className="text-lg text-black">Flexible Time Off</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Generous PTO policy. Take time when you need it to recharge and maintain work-life balance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-[#dc2e3e] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-4 sm:px-0">Don't See the Right Role?</h2>
          <p className="text-xl mb-8 opacity-90">
            We're always looking for talented individuals who share our vision. Send us your resume and let's start a conversation.
          </p>
          <Button 
            asChild
            variant="secondary" 
            size="lg"
            className="bg-white text-[#dc2e3e] hover:bg-gray-100"
          >
            <a href="mailto:hustle@rookhq.com?subject=General Application&body=Hi Rook Team,%0D%0A%0D%0AI am interested in exploring career opportunities at Rook.%0D%0A%0D%0A[Your message here]%0D%0A%0D%0ABest regards">
            Get in Touch
            </a>
          </Button>
        </div>
      </section>
    </div>
    </>
  );
};

export default Careers;
