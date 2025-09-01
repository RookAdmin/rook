
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Users, 
  BookOpen, 
  Calendar, 
  Star, 
  MessageCircle, 
  Github, 
  Trophy,
  Lightbulb,
  Zap,
  Target,
  Globe
} from "lucide-react";

const Developers = () => {
  const communityHighlights = [
    {
      icon: <BookOpen className="h-8 w-8 text-[#0096d4]" />,
      title: "Learn & Share",
      description: "Access tutorials, guides, and documentation. Share your knowledge through blog posts and technical articles.",
      badge: "Knowledge Hub"
    },
    {
      icon: <Users className="h-8 w-8 text-[#00d437]" />,
      title: "Collaborate", 
      description: "Work together on tools, extensions, and shared resources. Build the future of SaaS development.",
      badge: "Team Up"
    },
    {
      icon: <Calendar className="h-8 w-8 text-[#ffd800]" />,
      title: "Events & Meetups",
      description: "Join online dev jams, hackathons, AMAs, and community calls. Connect with fellow builders.",
      badge: "Coming Soon"
    },
    {
      icon: <Trophy className="h-8 w-8 text-[#dc2e3e]" />,
      title: "Recognition",
      description: "Get featured in our contributor spotlight, earn badges, and climb the community leaderboard.",
      badge: "Achievements"
    }
  ];

  const contributionOpportunities = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Write Guides & Tutorials",
      description: "Share your expertise with step-by-step guides and technical tutorials."
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Submit Ideas & Features",
      description: "Propose new tool ideas and feature requests that shape our roadmap."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Join Hackathons",
      description: "Participate in coding challenges and collaborative development sprints."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Design & UX Input",
      description: "Contribute to design discussions and user experience improvements."
    }
  ];

  const testimonials = [
    {
      quote: "Rook Developers gave me a platform to share my ideas and connect with other SaaS builders. The community is incredibly supportive.",
      author: "Sarah Chen",
      role: "Full-Stack Developer",
      avatar: "SC"
    },
    {
      quote: "I learned so much while contributing to the Rook ecosystem. It's amazing to see your ideas come to life in real products.",
      author: "Marcus Rodriguez", 
      role: "Frontend Engineer",
      avatar: "MR"
    },
    {
      quote: "The collaborative spirit here is unmatched. From code reviews to design feedback, everyone helps everyone grow.",
      author: "Priya Patel",
      role: "DevOps Engineer", 
      avatar: "PP"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Meta Tags */}
      <title>Rook Developers – Community Hub for Builders & Innovators</title>
      <meta 
        name="description" 
        content="Rook Developers is a community hub for builders to collaborate, share, and grow. Contribute guides, join events, and help shape the Rook ecosystem."
      />
      <meta name="keywords" content="developer community, SaaS dev hub, Rook developers, open source SaaS builders, contribute to SaaS tools" />

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden bg-gray-50">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-[#00d437]/10 text-[#00d437] border-[#00d437]/20">
                  <Users className="h-4 w-4 mr-2" />
                  Join the Community
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-black leading-tight">
                  Rook Developers
                </h1>
                <h2 className="text-2xl lg:text-3xl text-gray-600 leading-relaxed">
                  Build, Share, and Grow with the Community
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed max-w-lg">
                  Join the Rook developer ecosystem. Learn, collaborate, and shape the future of SaaS tools together.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-[#00d437] hover:bg-[#00d437]/90 text-white">
                  <Users className="h-5 w-5 mr-2" />
                  Join Rook Developers
                </Button>
                <Button size="lg" variant="outline" className="border-[#0096d4] text-[#0096d4] hover:bg-[#0096d4] hover:text-white">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Contribute Ideas
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-[#0096d4] rounded-3xl p-8 text-white shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <Code2 className="h-8 w-8" />
                    <span className="text-xl font-semibold">Developer Hub</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold">500+</div>
                      <div className="text-sm opacity-90">Developers</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold">50+</div>
                      <div className="text-sm opacity-90">Contributions</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-[#00d437] rounded-full"></div>
                      <span>Active Community</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-[#ffd800] rounded-full"></div>
                      <span>Growing Fast</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-bold text-black">What is Rook Developers?</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Rook Developers is more than just an API hub—it's a thriving community where builders, creators, and innovators come together to shape the future of SaaS tools. We believe in the power of collaboration and shared knowledge.
              </p>
              <p>
                Our community provides a platform for developers to collaborate on projects, learn from each other through tutorials and discussions, and contribute to open-source initiatives that benefit everyone in the ecosystem.
              </p>
              <p>
                Whether you're sharing your latest tool, writing technical guides, or participating in community challenges, Rook Developers is your space to grow, learn, and make a meaningful impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Highlights */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Community Highlights</h2>
            <p className="text-xl text-gray-600">Discover what makes our developer community special</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {communityHighlights.map((highlight, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 bg-white border-gray-200">
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-4 w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center">
                    {highlight.icon}
                  </div>
                  <Badge className="mx-auto mb-2 bg-gray-100 text-gray-700 border-gray-200">
                    {highlight.badge}
                  </Badge>
                  <CardTitle className="text-xl text-black">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contribution Opportunities */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Ways to Get Involved</h2>
            <p className="text-xl text-gray-600">Choose how you want to contribute to the community</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {contributionOpportunities.map((opportunity, index) => (
              <div key={index} className="flex space-x-4 p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#0096d4]/10 rounded-xl flex items-center justify-center text-[#0096d4]">
                    {opportunity.icon}
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-black">{opportunity.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{opportunity.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg" className="bg-[#00d437] hover:bg-[#00d437]/90 text-white">
              <Star className="h-5 w-5 mr-2" />
              Become a Contributor
            </Button>
          </div>
        </div>
      </section>

      {/* Community Voices */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Community Voices</h2>
            <p className="text-xl text-gray-600">What our developers are saying</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed italic">"{testimonial.quote}"</p>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-[#0096d4] rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-black">{testimonial.author}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events & Resources */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Events & Learning Resources</h2>
            <p className="text-xl text-gray-600">Stay updated with community activities and learning opportunities</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-8 w-8 text-[#ffd800]" />
                  <CardTitle className="text-xl text-black">Upcoming Events</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-semibold text-black">Monthly Community Call</div>
                    <div className="text-sm text-gray-600">First Friday of every month</div>
                  </div>
                  <Badge className="bg-[#00d437]/10 text-[#00d437] border-[#00d437]/20">
                    Regular
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-semibold text-black">Rook Dev Challenge</div>
                    <div className="text-sm text-gray-600">Quarterly hackathon</div>
                  </div>
                  <Badge className="bg-[#dc2e3e]/10 text-[#dc2e3e] border-[#dc2e3e]/20">
                    Coming Soon
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <BookOpen className="h-8 w-8 text-[#0096d4]" />
                  <CardTitle className="text-xl text-black">Learning Hub</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <Globe className="h-5 w-5 text-[#0096d4]" />
                    <span className="text-black">Developer Documentation</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <Code2 className="h-5 w-5 text-[#00d437]" />
                    <span className="text-black">Community Tutorials</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <Github className="h-5 w-5 text-[#ffd800]" />
                    <span className="text-black">Open Source Projects</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-[#0096d4]">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Be Part of the Rook Developer Ecosystem</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join a growing community of builders, innovators, and creators who are shaping the future of SaaS development.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-[#00d437] hover:bg-[#00d437]/90 text-white">
              <Users className="h-5 w-5 mr-2" />
              Join Now (Free)
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#0096d4]">
              <Lightbulb className="h-5 w-5 mr-2" />
              Contribute Ideas
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Developers;
