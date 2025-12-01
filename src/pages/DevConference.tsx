import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Globe, 
  Play, 
  ArrowRight, 
  Code, 
  Lightbulb, 
  Heart, 
  Zap,
  Trophy,
  Video,
  Coffee,
  Star,
  CheckCircle
} from "lucide-react";
import { useEffect, useState } from "react";

const DevConference = () => {
  const [scrollY, setScrollY] = useState(0);
  const [animatedStats, setAnimatedStats] = useState({
    attendees: 0,
    sessions: 0,
    startups: 0
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const animateStats = () => {
      const duration = 2000;
      const targets = { attendees: 1000, sessions: 50, startups: 20 };
      const start = Date.now();
      
      const updateStats = () => {
        const elapsed = Date.now() - start;
        const progress = Math.min(elapsed / duration, 1);
        
        setAnimatedStats({
          attendees: Math.floor(targets.attendees * progress),
          sessions: Math.floor(targets.sessions * progress),
          startups: Math.floor(targets.startups * progress)
        });
        
        if (progress < 1) {
          requestAnimationFrame(updateStats);
        }
      };
      
      updateStats();
    };
    
    const timer = setTimeout(animateStats, 1000);
    return () => clearTimeout(timer);
  }, []);

  const speakers = [
    {
      name: "Sarah Chen",
      title: "VP Engineering at TechCorp",
      session: "The Future of SaaS Architecture",
      image: "/placeholder.svg"
    },
    {
      name: "Marcus Rodriguez",
      title: "Open Source Advocate",
      session: "Building Developer Communities",
      image: "/placeholder.svg"
    },
    {
      name: "Dr. Elena Vasquez",
      title: "AI Research Lead",
      session: "AI-Powered Development Tools",
      image: "/placeholder.svg"
    }
  ];

  const themes = [
    {
      title: "Innovation in SaaS",
      description: "Discover cutting-edge technologies shaping the future",
      icon: <Lightbulb className="h-8 w-8" />,
      color: "text-[#0096d4]"
    },
    {
      title: "Open Source & Collaboration",
      description: "Build together, grow together in the open source ecosystem",
      icon: <Heart className="h-8 w-8" />,
      color: "text-[#00d437]"
    },
    {
      title: "Future of AI & Development",
      description: "How AI is transforming the way we build software",
      icon: <Zap className="h-8 w-8" />,
      color: "text-[#ffd800]"
    },
    {
      title: "Community & Growth",
      description: "Connecting developers worldwide for mutual success",
      icon: <Users className="h-8 w-8" />,
      color: "text-[#dc2e3e]"
    }
  ];

  const tracks = [
    {
      title: "SaaS Architecture & Scaling",
      description: "Master the art of building scalable SaaS applications",
      sessions: 12
    },
    {
      title: "UI/UX for Developers",
      description: "Create beautiful, user-friendly interfaces",
      sessions: 8
    },
    {
      title: "AI + Automation in SaaS",
      description: "Leverage AI to enhance your development workflow",
      sessions: 10
    },
    {
      title: "Open Source Contributions",
      description: "Learn how to contribute effectively to open source projects",
      sessions: 6
    },
    {
      title: "Business + Developer Collaboration",
      description: "Bridge the gap between technical and business teams",
      sessions: 7
    }
  ];

  const pricingTiers = [
    {
      name: "Free",
      price: "$0",
      description: "Basic access to livestream sessions",
      features: [
        "Live keynote access",
        "Community chat",
        "Session recordings (48hrs later)",
        "Digital swag pack"
      ],
      cta: "Register Free",
      popular: false
    },
    {
      name: "Pro",
      price: "$99",
      description: "Full access to all sessions and labs",
      features: [
        "All Free features",
        "Interactive workshops",
        "Developer labs access",
        "1:1 networking sessions",
        "Priority Q&A",
        "Exclusive Pro content"
      ],
      cta: "Get Pro Access",
      popular: true
    },
    {
      name: "VIP",
      price: "$299",
      description: "Premium experience with exclusive perks",
      features: [
        "All Pro features",
        "Private speaker sessions",
        "VIP networking lounge",
        "Physical swag package",
        "Early session recordings",
        "Conference app beta access",
        "Certificate of completion"
      ],
      cta: "Go VIP",
      popular: false
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Rook Dev Conference December 2027",
    "description": "Join 1,000+ developers, founders, and startups at Rook Dev Conference. Registration opens May 2027. Connect, learn, and build the future of SaaS.",
    "startDate": "2027-12-01",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": {
      "@type": "Place",
      "name": "TBA",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "Rook",
      "url": "https://rookhq.com"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/PreOrder",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <>
      <SEO
        title="Rook Dev Conference December 2027 | 1,000+ Developers, Founders & Startups - Registration Opens May 2027"
        description="Join 1,000+ developers, founders, and startups at Rook Dev Conference December 2027. Registration opens May 2027. Connect, learn, and build the future of SaaS. Developer conference, tech conference, SaaS conference."
        keywords="Rook Dev Conference, developer conference, tech conference, SaaS conference, developer event, startup conference, programming conference, tech meetup, developer summit, software conference, December 2027"
        canonical="/devconference"
        geoRegion="IN"
        geoPlacename="India"
        structuredData={structuredData}
      />
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-black/5 via-white to-black/5"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <Badge className="mb-6 bg-[#00d437]/10 text-[#00d437] border-[#00d437]/20 hover:bg-[#00d437]/20">
              <Calendar className="h-4 w-4 mr-2" />
              December 2027
            </Badge>
            
            <h1 className="text-6xl md:text-8xl font-bold text-black leading-tight tracking-tight">
              Rook Dev Conference
              <span className="block text-4xl md:text-5xl text-gray-600 font-normal mt-4">
                2027
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              The global developer event to learn, connect, and shape the future of SaaS tools.
            </p>
            
            <div className="flex justify-center mt-12">
              <div className="bg-[#dc2e3e] text-white px-8 py-4 rounded-full text-lg font-medium">
                Registration opens May 2027
              </div>
            </div>
            
            <p className="text-sm text-gray-500 mt-8">
              Inspired by builders. Powered by Rook.
            </p>
          </div>
        </div>
      </section>

      {/* Event Introduction */}
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-black">
                A Developer Conference,
                <span className="block text-[#0096d4]">Reimagined</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Rook Dev Conference isn't just an event. It's a movement. We're bringing together 
                  the brightest minds in SaaS development to share knowledge, forge connections, 
                  and push the boundaries of what's possible.
                </p>
                <p>
                  Whether you're a seasoned architect or just starting your journey, you'll find 
                  your place in our diverse, inclusive community of builders who are shaping 
                  the future of software.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-[#00d437] mb-2">
                    {animatedStats.attendees.toLocaleString()}+
                  </div>
                  <div className="text-sm text-gray-600">Expected Attendees</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#0096d4] mb-2">
                    {animatedStats.sessions}+
                  </div>
                  <div className="text-sm text-gray-600">Sessions</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#ffd800] mb-2">
                    {animatedStats.startups}+
                  </div>
                  <div className="text-sm text-gray-600">Startups</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Themes */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Conference Themes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Four key areas that define the future of SaaS development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {themes.map((theme, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-gray-100 cursor-pointer"
              >
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto mb-4 ${theme.color} transition-transform group-hover:scale-110`}>
                    {theme.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{theme.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    {theme.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Speakers */}
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Featured Speakers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Learn from industry leaders and innovators
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-gray-100">
                <CardHeader>
                  <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full"></div>
                  <CardTitle className="text-xl">{speaker.name}</CardTitle>
                  <CardDescription className="text-[#0096d4] font-medium">
                    {speaker.title}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{speaker.session}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Tracks */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Experience Tracks
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Deep-dive into specialized topics with expert-led sessions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tracks.map((track, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-gray-100 cursor-pointer group"
              >
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-[#00d437] transition-colors">
                    {track.title}
                  </CardTitle>
                  <Badge variant="secondary" className="w-fit">
                    {track.sessions} sessions
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {track.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Labs */}
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Developer Labs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hands-on experience with cutting-edge tools and technologies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-gray-100">
              <CardHeader>
                <div className="text-[#00d437] mb-2">
                  <Code className="h-8 w-8" />
                </div>
                <CardTitle>Interactive Workshops</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Get hands-on with the latest SaaS development tools and frameworks in guided sessions.
                </CardDescription>
                <Button variant="outline" size="sm">
                  View Labs
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-gray-100">
              <CardHeader>
                <div className="text-[#ffd800] mb-2">
                  <Trophy className="h-8 w-8" />
                </div>
                <CardTitle>Coding Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Test your skills against fellow developers in fun, competitive coding challenges.
                </CardDescription>
                <Button variant="outline" size="sm">
                  Join Challenge
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Conference Tickets
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose your experience level and join thousands of developers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <Card 
                key={index} 
                className={`relative border-gray-100 hover:shadow-lg transition-all duration-300 ${
                  tier.popular ? 'border-[#00d437] shadow-lg scale-105' : ''
                }`}
              >
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#00d437] text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
                  <div className="text-4xl font-bold text-black mb-2">{tier.price}</div>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-[#00d437] mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      tier.popular 
                        ? 'bg-[#00d437] hover:bg-[#00d437]/90 text-white' 
                        : 'bg-white border border-gray-200 text-black hover:bg-gray-50'
                    }`}
                  >
                    {tier.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>What makes Rook Dev Conference different from other SaaS events?</AccordionTrigger>
                <AccordionContent>
                  Rook Dev Conference focuses on the complete SaaS development lifecycle, from ideation to scaling. We emphasize community-driven learning, hands-on workshops, and real-world case studies from successful SaaS companies.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>Can I attend remotely or is it only in-person?</AccordionTrigger>
                <AccordionContent>
                  The conference is designed as a hybrid event. You can attend virtually with full access to livestreams, interactive sessions, and networking opportunities, or join us in person for the complete experience.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>Will session recordings be available?</AccordionTrigger>
                <AccordionContent>
                  Yes! All attendees get access to session recordings. Free tier attendees can access recordings 48 hours after the live session, while Pro and VIP attendees get immediate access.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>What is the refund policy?</AccordionTrigger>
                <AccordionContent>
                  We offer full refunds up to 30 days before the event, and 50% refunds up to 7 days before. Free registrations can be canceled anytime without penalty.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger>Do you offer student discounts?</AccordionTrigger>
                <AccordionContent>
                  Yes! Students can get 50% off Pro tickets and 30% off VIP tickets with valid student ID verification. Contact our support team for the discount code.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Be Part of the Future of
              <span className="block text-[#00d437]">SaaS Development</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join thousands of developers, architects, and innovators who are shaping 
              the next generation of SaaS applications.
            </p>
            
            <div className="flex justify-center mt-12">
              <div className="bg-[#00d437] text-white px-8 py-4 rounded-full text-lg font-medium">
                Registration opens May 2027
              </div>
            </div>
            
            <div className="pt-8">
              <p className="text-sm text-gray-400 mb-4">#RookDevConf</p>
              <div className="flex justify-center space-x-6 text-gray-400">
                <span className="flex items-center"><Calendar className="h-4 w-4 mr-2" />December 2027</span>
                <span className="flex items-center"><Globe className="h-4 w-4 mr-2" />Hybrid Event</span>
                <span className="flex items-center"><Users className="h-4 w-4 mr-2" />1,000+ Developers</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default DevConference;
