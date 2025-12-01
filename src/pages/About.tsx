import React, { useEffect, useState } from "react";
import { SEO } from "@/components/SEO";
import { ArrowRight, Users, Award, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Rook",
      "description": "Learn about Rook's mission to simplify technology, our core values, and meet the team behind our innovative solutions.",
      "url": "https://rookhq.com/about",
      "mainEntity": {
        "@type": "Organization",
        "name": "Rook",
        "foundingDate": "2020",
        "description": "Simple SaaS tools that empower creators, freelancers, and founders to get more done with less."
      }
    }
  ];

  const faqData = [
    {
      question: "When was Rook founded?",
      answer: "Rook was founded in 2020 with a mission to create intuitive tools that help creators, entrepreneurs, and teams bring their visions to life with less friction and more joy."
    },
    {
      question: "What is Rook's mission?",
      answer: "Rook's mission is to create intuitive tools that help creators, entrepreneurs, and teams bring their visions to life. We believe technology should simplify, not complicate, and we're dedicated to helping people do their best work."
    },
    {
      question: "What products does Rook build?",
      answer: "Rook builds multiple SaaS products including Paym.me (payment link manager), Realm by Rook (branding services), Rook Links (bio link tool), and Rook Scoop (SaaS analytics platform). We also run Rook For Startups, an acceleration program for early-stage founders."
    },
    {
      question: "Where is Rook located?",
      answer: "Rook is headquartered in New Delhi, India, and serves customers worldwide. We're a global company with a focus on empowering creators and entrepreneurs everywhere."
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" }
  ];

  return (
    <>
      <SEO
        title="About Rook | Our Mission, Values, and Team"
        description="Learn about Rook's mission to simplify technology, our core values, and meet the team behind our innovative solutions. Discover how we're building simple tools with monumental impact."
        keywords="Rook company, about Rook, Rook mission, Rook values, Rook team, SaaS company, technology company, startup culture"
        canonical="/about"
        geoRegion="IN"
        geoPlacename="India"
        structuredData={structuredData}
        faqData={faqData}
        breadcrumbs={breadcrumbs}
      />
      <div className="min-h-screen bg-white text-textPrimary pt-16 pb-8 sm:pb-12 md:pb-16">
        {/* Header Section */}
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-8 sm:mb-12 md:mb-16">
            <div className="h-1 w-12 sm:w-16 md:w-20 bg-[#dc2e3e] mb-4 sm:mb-6"></div>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-primary tracking-tight animate-fade-up"
              style={{ color: "black" }}
            >
              About Rook
            </h1>
            <p
              className="text-base sm:text-lg md:text-xl text-textSecondary max-w-3xl animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              We build tools that help people and businesses harness their full
              potential in an increasingly digital world.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 mb-12 sm:mb-16 md:mb-20">
            <div className="relative">
              <div
                className="absolute -z-10 w-64 h-64 rounded-full bg-[#dc2e3e]/5 top-0 left-0"
                style={{ transform: `translateY(${scrollY * 0.1}px)` }}
              ></div>
              <div
                className="absolute -z-10 w-48 h-48 rounded-full bg-[#0096d4]/5 bottom-20 right-10"
                style={{ transform: `translateY(${scrollY * -0.05}px)` }}
              ></div>
              <h2
                className="text-3xl font-bold mb-6 text-primary"
                style={{ color: "black" }}
              >
                Our Mission
              </h2>
              <p className="text-textSecondary mb-6 leading-relaxed">
                At Rook, we believe technology should simplify, not complicate.
                Our mission is to create intuitive tools that help creators,
                entrepreneurs, and teams bring their visions to life with less
                friction and more joy.
              </p>
              <p className="text-textSecondary mb-8 leading-relaxed">
                Founded in 2020, we've grown from a small startup to a team of
                passionate builders dedicated to helping people do their best
                work.
              </p>
              <a href="#join">
                <Button
                  variant="outline"
                  className="group flex items-center gap-2"
                >
                  Join Our Journey
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </a>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-premium">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop"
                alt="Rook Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2
              className="text-3xl font-bold mb-12 text-primary text-center"
              style={{ color: "black" }}
            >
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border border-borderLight rounded-lg p-8 hover:shadow-premium transition-all hover:translate-y-[-4px]">
                <div className="w-12 h-12 bg-[#00d437]/10 flex items-center justify-center rounded-lg mb-6">
                  <Users className="h-6 w-6 text-[#00d437]" />
                </div>
                <h3
                  className="text-xl font-bold mb-3 text-primary"
                  style={{ color: "black" }}
                >
                  People First
                </h3>
                <p className="text-textSecondary">
                  We believe in putting people, both users and team members, at
                  the center of everything we do. Our products are built with
                  empathy and care.
                </p>
              </div>
              <div className="bg-white border border-borderLight rounded-lg p-8 hover:shadow-premium transition-all hover:translate-y-[-4px]">
                <div className="w-12 h-12 bg-[#ffd800]/10 flex items-center justify-center rounded-lg mb-6">
                  <Award className="h-6 w-6 text-[#ffd800]" />
                </div>
                <h3
                  className="text-xl font-bold mb-3 text-primary"
                  style={{ color: "black" }}
                >
                  Excellence
                </h3>
                <p className="text-textSecondary">
                  We take pride in our craft, pursuing excellence in every
                  detail. From code to customer service, we hold ourselves to
                  the highest standards.
                </p>
              </div>
              <div className="bg-white border border-borderLight rounded-lg p-8 hover:shadow-premium transition-all hover:translate-y-[-4px]">
                <div className="w-12 h-12 bg-[#0096d4]/10 flex items-center justify-center rounded-lg mb-6">
                  <Building className="h-6 w-6 text-[#0096d4]" />
                </div>
                <h3
                  className="text-xl font-bold mb-3 text-primary"
                  style={{ color: "black" }}
                >
                  Sustainability
                </h3>
                <p className="text-textSecondary">
                  We build for the long term. Our company, products, and
                  practices are designed to create lasting positive impact for
                  our customers and the environment.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2
              className="text-3xl font-bold mb-12 text-primary text-center"
              style={{ color: "black" }}
            >
              Leadership Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center max-w-4xl mx-auto">
              {[
                {
                  name: "Aravind Ravichandran",
                  title: "Founder & CEO",
                  image: "/avr.jpeg",
                },
                {
                  name: "Amrish Krishnan",
                  title: "Advisor",
                  image: "/amrish.JPG",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center bg-white border border-borderLight rounded-lg overflow-hidden shadow-card hover:shadow-premium transition-all animate-fade-up max-w-md w-full"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className="w-full h-64 flex justify-center items-center bg-gray-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-56 w-56 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3
                      className="font-bold text-lg text-primary"
                      style={{ color: "black" }}
                    >
                      {member.name}
                    </h3>
                    <p className="text-textSecondary text-sm">{member.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section - Updated with minimalist style using Rook colors */}
          <div
            id="join"
            className="border border-[#e5e5e5] bg-white text-[#121212] p-10 rounded-xl shadow-soft mt-20 relative overflow-hidden"
          >
            <div className="h-1 w-20 bg-[#0096d4] mb-6"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4 animate-fade-up">
                Join Our Journey
              </h2>
              <p
                className="text-lg mb-8 max-w-2xl text-textSecondary animate-fade-up"
                style={{ animationDelay: "0.1s" }}
              >
                We're always looking for talented individuals to help us build
                the future of productivity. Explore career opportunities at Rook
                and be part of something great.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.linkedin.com/company/rook/jobs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#0096d4] text-white hover:bg-[black] transition-colors">
                    View Open Positions
                  </Button>
                </a>
                <a href="./rook_coc.pdf" download="Rook Code Of Conduct.pdf">
                  <Button
                    variant="outline"
                    className="border-[#0096d4] text-[#0096d4] hover:bg-[#9b87f5]/5"
                  >
                    Download
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
