import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, TrendingUp, Heart, Target, Sparkles, Coffee, Zap, Users2 } from "lucide-react";
import { Link } from "react-router-dom";

const Life = () => {
  const cultureValues = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaboration First",
      description: "We believe in shared wins.",
      color: "#ffd800"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Growth Mindset",
      description: "Every challenge is an opportunity.",
      color: "#00d437"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Diversity & Inclusion",
      description: "We celebrate every voice.",
      color: "#0096d4"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Purpose Driven",
      description: "Building SaaS with meaning.",
      color: "#dc2e3e"
    }
  ];

  const testimonials = [
    {
      quote: "At Rook, I've found a place where my ideas matter and my growth is genuinely supported. It's more than a job - it's a community.",
      name: "Sarah Chen",
      role: "Senior Product Designer"
    },
    {
      quote: "The culture here encourages innovation and risk-taking. I've been able to push boundaries and create solutions I never thought possible.",
      name: "Marcus Rodriguez",
      role: "Lead Developer"
    },
    {
      quote: "What I love most about Rook is how we celebrate each other's wins. Success here is truly shared, not individual.",
      name: "Aisha Patel",
      role: "Marketing Manager"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Life at Rook",
    "description": "Join Rook's purpose-driven team. Experience collaboration-first culture, growth mindset, and meaningful work. We grow together.",
    "url": "https://rookhq.com/life",
    "about": {
      "@type": "Organization",
      "name": "Rook",
      "description": "Simple tools with monumental impact"
    }
  };

  return (
    <>
      <SEO
        title="Life at Rook | Purpose-Driven Culture, Collaboration & Growth - Join Our Team"
        description="Join Rook's purpose-driven team. Experience collaboration-first culture, growth mindset, and meaningful work. We grow together. Explore our values, culture, and what makes Rook a great place to work."
        keywords="life at Rook, Rook culture, Rook careers, company culture, work at Rook, Rook team, startup culture, tech company culture, purpose-driven work, collaboration culture"
        canonical="/life"
        geoRegion="IN"
        geoPlacename="India"
        structuredData={structuredData}
      />
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-transparent overflow-hidden">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto max-w-6xl text-center relative z-10 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 md:mb-12 tracking-tight px-2 sm:px-0">
            Life at Rook
          </h1>
        </div>
        <div className="relative w-full overflow-hidden py-4 md:py-6">
          <div className="marquee-container">
            <div className="marquee-content">
              <span className="marquee-text">We Grow Together</span>
              <span className="marquee-text">We Grow Together</span>
              <span className="marquee-text">We Grow Together</span>
              <span className="marquee-text">We Grow Together</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Culture Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">The Rook Way</h2>
            <div className="w-24 h-1 bg-[#00d437] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cultureValues.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-4 p-4 rounded-2xl bg-gradient-to-br from-gray-50 to-white flex items-center justify-center" style={{color: value.color}}>
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Voices Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Employee Voices</h2>
            <p className="text-xl text-gray-600">What our team says about growing at Rook</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <blockquote className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t pt-6">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Life Beyond Work Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Life Beyond Work</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Rook, we believe that great work comes from great people living great lives. 
                We foster an environment where creativity thrives, innovation is celebrated, and 
                balance isn't just a goal. It's a practice.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From team hackathons that spark breakthrough ideas to casual moments that build 
                lasting friendships, every day at Rook is an opportunity to grow both professionally 
                and personally.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 bg-gradient-to-br from-[#00d437]/20 to-[#0096d4]/20 rounded-lg backdrop-blur-sm border border-white/30 flex items-center justify-center">
                  <Sparkles className="h-12 w-12 text-[#00d437]" />
                </div>
                <div className="h-32 bg-gradient-to-br from-[#ffd800]/20 to-[#dc2e3e]/20 rounded-lg backdrop-blur-sm border border-white/30 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-[#ffd800]" />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="h-32 bg-gradient-to-br from-[#dc2e3e]/20 to-[#00d437]/20 rounded-lg backdrop-blur-sm border border-white/30 flex items-center justify-center">
                  <Coffee className="h-8 w-8 text-[#dc2e3e]" />
                </div>
                <div className="h-48 bg-gradient-to-br from-[#0096d4]/20 to-[#ffd800]/20 rounded-lg backdrop-blur-sm border border-white/30 flex items-center justify-center">
                  <Users2 className="h-12 w-12 text-[#0096d4]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 px-4 sm:px-0">Join Our Journey</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            We're more than a company. We're a community. Come grow with us.
          </p>
          <Link to="/careers">
            <Button 
              size="lg" 
              className="bg-[#00d437] hover:bg-[#00d437]/90 text-white px-8 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explore Careers
            </Button>
          </Link>
        </div>
      </section>
    </div>
    </>
  );
};

export default Life;
