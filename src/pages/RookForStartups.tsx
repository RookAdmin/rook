import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import CountUp from 'react-countup';

import {
  ArrowRight,
  Rocket,
  Star,
  Gift,
  Scale,
  Users,
  CheckCircle,
} from "lucide-react";
import mypro from "/partners/mypro.avif";

const RookForStartups = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Rook For Startups",
      "description": "Comprehensive startup program with SaaS credits, legal support, and acceleration programs for early-stage founders.",
      "provider": {
        "@type": "Organization",
        "name": "Rook",
        "url": "https://rookhq.com"
      },
      "areaServed": "Worldwide",
      "url": "https://rookhq.com/rook-for-startups",
      "serviceType": "Startup Acceleration Program",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Free startup program with SaaS credits and legal support"
      }
    }
  ];

  const faqData = [
    {
      question: "What is Rook For Startups?",
      answer: "Rook For Startups is a comprehensive startup acceleration program that provides SaaS credits, legal support, incorporation services, and mentorship to early-stage founders. The program includes partnerships with MyProBuddy for investor connections, Zoho for business tools, and Hlo Enterprise Legal+ for legal services."
    },
    {
      question: "Who is eligible for Rook For Startups?",
      answer: "The program is open to early-stage SaaS startups, D2C brand founders, tech-enabled service businesses, and student entrepreneurs with validated ideas. Whether you're a solo founder with a prototype or a 5-member team gearing up for launch, you can apply."
    },
    {
      question: "What benefits does Rook For Startups offer?",
      answer: "Benefits include exclusive SaaS credits (25M+ in total), access to Zoho for Startups, legal support and incorporation services through Hlo Enterprise Legal+, investment and fundraising support via MyProBuddy, mentorship sprints, GTM clinics, and weekly founder syncs."
    },
    {
      question: "How do I apply for Rook For Startups?",
      answer: "You can apply by filling out our simple application form. Our team will review your application and get you set up within 7 days. The application process is straightforward and designed to help us understand your startup's needs."
    },
    {
      question: "Is Rook For Startups free?",
      answer: "Yes, Rook For Startups is a free program designed to support early-stage founders. We provide SaaS credits, legal support, and acceleration resources at no cost to eligible startups."
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Rook For Startups", url: "/rook-for-startups" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <SEO
        title="Rook For Startups | Launch and Scale Your Startup with SaaS Credits & Legal Support"
        description="Join Rook's startup program for exclusive benefits, SaaS credits, legal support, and acceleration programs. Built for early-stage founders and student entrepreneurs. Get access to Zoho, MyProBuddy, and Hlo Enterprise Legal+ partnerships."
        keywords="startup program, SaaS credits, startup acceleration, legal support, incorporation services, startup funding, early-stage startups, student entrepreneurs, startup resources"
        canonical="/rook-for-startups"
        geoRegion="IN"
        geoPlacename="India"
        structuredData={structuredData}
        faqData={faqData}
        breadcrumbs={breadcrumbs}
      />
      <div
        className={`min-h-screen bg-white pt-16 transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        } overflow-hidden`}
      >
        {/* Redesigned Hero Section - Minimalistic */}
        <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white w-full overflow-hidden">
  <div className="container mx-auto px-4 max-w-7xl relative overflow-hidden">
    <div className="max-w-4xl mx-auto">
      <div className="space-y-6 sm:space-y-8">
        {/* Badge */}
        <div className="flex items-center animate-fade-up">
          <div className="h-1 w-12 sm:w-16 bg-[#0096d4] mr-2 sm:mr-3"></div>
          <span className="bg-[#0096d4]/10 text-[#0096d4] text-xs font-medium px-2 sm:px-3 py-1 rounded-full">
            For Startups
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight tracking-tight animate-fade-up px-2 sm:px-0" style={{ animationDelay: "0.2s" }}>
          Fuel Your Startup <span className="text-[#dc2e3e]">Journey</span> With Rook
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl animate-fade-up px-2 sm:px-0" style={{ animationDelay: "0.3s" }}>
          A bold startup program crafted for dreamers, doers, and disruptors. Includes vibrant founder communities, exclusive SaaS credits, IP and incorporation support, and tailored acceleration programs.
        </p>

        {/* Geometric abstract design element */}
        <div className="absolute top-32 right-0 w-64 h-64 opacity-10 -z-10 pointer-events-none max-w-full overflow-x-hidden">
          <div className="absolute w-full h-full rounded-full bg-gradient-to-r from-[#0096d4] to-[#dc2e3e] animate-pulse"></div>
          <div className="absolute w-3/4 h-3/4 top-8 left-8 rounded-full border-2 border-[#0096d4] animate-spin-slow"></div>
        </div>

        {/* Rook Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 py-4 sm:py-6 animate-fade-up px-2 sm:px-0" style={{ animationDelay: "0.4s" }}>
          <div className="bg-white border-l-2 border-[#0096d4] pl-3 sm:pl-4">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">500+</p>
            <p className="text-xs sm:text-sm text-gray-600">Startups Supported</p>
          </div>
          <div className="bg-white border-l-2 border-[#dc2e3e] pl-3 sm:pl-4">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">25M+</p>
            <p className="text-xs sm:text-sm text-gray-600">SaaS Credits</p>
          </div>
          <div className="bg-white border-l-2 border-[#00d437] pl-3 sm:pl-4 col-span-2 md:col-span-1">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">100%</p>
            <p className="text-xs sm:text-sm text-gray-600">Success Rate</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <a
            href="https://forms.office.com/r/Ap9MBCKhTp?embed=true%22"
            target="_blank"
          >
            <Button
              size="lg"
              className="bg-[#dc2e3e] text-white hover:bg-[#dc2e3e]/90 transition-all hover:translate-y-[-2px] group"
            >
              Join the Program
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-[#0096d4] text-[#0096d4] hover:bg-[#0096d4]/10 transition-all hover:translate-y-[-2px]"
            onClick={() => {
              const element = document.getElementById('program-includes');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Explore Benefits
          </Button>
        </div>
      </div>
    </div>
  </div>
</section>



        {/* Why Founders Choose Rook */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-10 items-center">
              <div className="order-2 md:order-1">
                <div className="h-1 w-20 bg-[#0096d4] mb-6"></div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
                  Why Founders Choose Rook
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  At Rook, we don't just support startups. We champion their
                  rise. With exclusive benefits that combine tech, legal, and
                  growth ecosystems, Rook For Startups is your launchpad to
                  visibility, legitimacy, and scale.
                </p>
                <p className="text-lg text-gray-700">
                  We've built this program with empathy, experience, and a
                  razor-sharp focus on what truly matters for early-stage
                  founders.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative h-[280px] md:h-[400px] flex items-center justify-center">
                  {/* Background circle */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 md:w-64 h-48 md:h-64 rounded-full bg-[#0096d4]/5 animate-pulse"></div>
                  </div>

                  {/* Content items - Adjusted for mobile */}
                  <div className="relative z-10 space-y-8 md:space-y-16">
                    <div className="bg-white rounded-lg p-3 md:p-4 shadow-soft flex items-center justify-center w-32 md:w-40 mx-auto animate-float">
                      <div className="text-center">
                        <div className="text-sm md:text-base font-bold mb-1">
                          Idea
                        </div>
                        <Rocket className="h-6 w-6 md:h-8 md:w-8 mx-auto text-[#0096d4]" />
                      </div>
                    </div>

                    <div className="w-1 h-6 md:h-10 mx-auto bg-gradient-to-b from-[#0096d4] to-transparent"></div>

                    <div
                      className="bg-white rounded-lg p-3 md:p-4 shadow-soft flex items-center justify-center w-32 md:w-40 mx-auto animate-float"
                      style={{ animationDelay: "1s" }}
                    >
                      <div className="text-center">
                        <div className="text-sm md:text-base font-bold mb-1">
                          Launch
                        </div>
                        <Rocket className="h-6 w-6 md:h-8 md:w-8 mx-auto text-[#dc2e3e] rotate-45" />
                      </div>
                    </div>

                    <div className="w-1 h-6 md:h-10 mx-auto bg-gradient-to-b from-transparent to-[#00d437]"></div>

                    <div
                      className="bg-white rounded-lg p-3 md:p-4 shadow-soft flex items-center justify-center w-32 md:w-40 mx-auto animate-float"
                      style={{ animationDelay: "2s" }}
                    >
                      <div className="text-center">
                        <div className="text-sm md:text-base font-bold mb-1">
                          Scale
                        </div>
                        <Rocket className="h-6 w-6 md:h-8 md:w-8 mx-auto text-[#00d437] rotate-90" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Program Includes */}
        <section id="program-includes" className="py-12 sm:py-16 md:py-20 bg-[#f8f9fa]">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <div className="h-1 w-12 sm:w-16 md:w-20 bg-[#0096d4] mx-auto mb-4 sm:mb-6"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                The Program Includes
              </h2>
              <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto px-4">
                Three Key Pillars, all built for your zero-to-one startup
                journey:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div className="bg-white p-8 rounded-xl shadow-soft hover:shadow-premium transition-all duration-300 transform hover:-translate-y-1">
                <div className="rounded-full bg-[#0096d4]/10 p-3 w-14 h-14 flex items-center justify-center mb-6">
                  <Star className="h-7 w-7 text-[#0096d4]" />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Acceleration & Dedicated Programs
                </h3>
                <p className="text-gray-600">
                  In partnership with MyProBuddy, we offer investment and
                  fundraising support, mentoring sprints, GTM clinics, and
                  weekly founder syncs to help you stay ahead of the curve.
                </p>
                <a href="/startups/myprobuddy">
                  <Button
                    variant="outline"
                    className="border-[#0096d4] text-[#0096d4] hover:bg-[#0096d4]/10 mt-3"
                  >
                    Learn More{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>

              </div>

              <div className="bg-white p-8 rounded-xl shadow-soft hover:shadow-premium transition-all duration-300 transform hover:-translate-y-1">
                <div className="rounded-full bg-[#dc2e3e]/10 p-3 w-14 h-14 flex items-center justify-center mb-6">
                  <Gift className="h-7 w-7 text-[#dc2e3e]" />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Startup Credits Galore
                </h3>
                <p className="text-gray-600">
                  Get early access to Zoho for Startups, plus 10+
                  startup-friendly tools. Includes exclusive Rook Startup
                  Credits to help you launch on a budget.
                </p>
                <a href="/startups/zoho">
                  <Button
                    variant="outline"
                    className="border-[#0096d4] text-[#0096d4] hover:bg-[#0096d4]/10 mt-3"
                  >
                    Learn More{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-soft hover:shadow-premium transition-all duration-300 transform hover:-translate-y-1">
                <div className="rounded-full bg-[#00d437]/10 p-3 w-14 h-14 flex items-center justify-center mb-6">
                  <Scale className="h-7 w-7 text-[#00d437]" />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Incorporation & IP Services
                </h3>
                <p className="text-gray-600">
                  Powered by HLO Enterprise Legal+, we help you register your
                  startup and protect your brand with trademark, patent, and
                  copyright services, simplified.
                </p>
                <a href="/startups/hlo-enterprise-legal">
                  <Button
                    variant="outline"
                    className="border-[#0096d4] text-[#0096d4] hover:bg-[#0096d4]/10 mt-3"
                  >
                    Learn More{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://forms.office.com/r/Ap9MBCKhTp?embed=true%22"
                target="_blank"
              >
                <Button
                  size="lg"
                  className="bg-[#dc2e3e] text-white hover:bg-[#dc2e3e]/90 group"
                >
                  Apply for the Program{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </div>

            <div className="mt-16">
              <h3 className="text-xl font-bold text-center mb-8">
                Our Powerhouse Partners
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                <div className="bg-white p-4 rounded-lg border border-gray-100 hover:border-[#0096d4]/30 transition-all flex items-center justify-center h-20">
                  {/* <div className="text-lg font-bold text-gray-400">Partner {i + 1}</div> */}
                  <img
                    src={mypro}
                    alt="MyProBuddy"
                    className="h-12 w-auto max-w-full object-contain"
                  />
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100 hover:border-[#0096d4]/30 transition-all flex items-center justify-center h-20">
                  {/* <div className="text-lg font-bold text-gray-400">Partner {i + 1}</div> */}
                  <img
                    src="/partners/zohofor.png"
                    alt="Zoho for Startups"
                    className="h-12 w-auto max-w-full object-contain"
                  />
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100 hover:border-[#0096d4]/30 transition-all flex items-center justify-center h-20">
                  {/* <div className="text-lg font-bold text-gray-400">Partner {i + 1}</div> */}
                  <img
                    src="/partners/hlolegal.png"
                    alt="Hlo Enterprise Legal+"
                    className="h-12 w-auto max-w-full object-contain"
                  />
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100 hover:border-[#0096d4]/30 transition-all flex items-center justify-center h-20">
                  {/* <div className="text-lg font-bold text-gray-400">Partner {i + 1}</div> */}
                  <img
                    src="/partners/microsoft.svg"
                    className="h-10 w-auto max-w-full object-contain"
                  />
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100 hover:border-[#0096d4]/30 transition-all flex items-center justify-center h-20">
                  {/* <div className="text-lg font-bold text-gray-400">Partner {i + 1}</div> */}
                  <img
                    src="/partners/aws.png"
                    className="h-12 w-auto max-w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who is This For */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-10 items-center">
              <div>
                <div className="h-1 w-20 bg-[#0096d4] mb-6"></div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Startups We're Built For
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Whether you're a solo founder with a prototype or a 5-member
                  team gearing up for launch, Rook For Startups is open to:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-[#0096d4] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-gray-700">
                      Early-stage SaaS startups
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-[#0096d4] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-gray-700">
                      D2C brand founders
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-[#0096d4] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-gray-700">
                      Tech-enabled service businesses
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-[#0096d4] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-gray-700">
                      Student entrepreneurs with validated ideas
                    </span>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-center text-center">
                  <Users className="h-12 w-12 text-[#0096d4] mb-4" />
                  <h3 className="font-bold mb-2">Student Entrepreneur</h3>
                  <p className="text-sm text-gray-600">
                    Fresh ideas, big dreams
                  </p>
                </div>
                <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-center text-center">
                  <Users className="h-12 w-12 text-[#0096d4] mb-4" />
                  <h3 className="font-bold mb-2">Tech Founder</h3>
                  <p className="text-sm text-gray-600">
                    Building the next big SaaS
                  </p>
                </div>
                <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-center text-center">
                  <Users className="h-12 w-12 text-[#0096d4] mb-4" />
                  <h3 className="font-bold mb-2">D2C Founder</h3>
                  <p className="text-sm text-gray-600">
                    Direct to consumer brands
                  </p>
                </div>
                <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-center text-center">
                  <Users className="h-12 w-12 text-[#0096d4] mb-4" />
                  <h3 className="font-bold mb-2">Service Business</h3>
                  <p className="text-sm text-gray-600">Tech-enabled services</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Real Impact. Real Stories. */}
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <div className="h-1 w-12 sm:w-16 md:w-20 bg-[#0096d4] mx-auto mb-4 sm:mb-6"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                Startups That Grew With Rook
              </h2>
              <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto px-4">
                From first pitch decks to full-fledged launches, Rook-backed
                startups have gone on to raise capital, win hackathons, and earn
                global visibility.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="flex items-start">
                  <div className="text-5xl text-[#0096d4] mr-4">"</div>
                  <div>
                    <p className="text-lg italic mb-6">
                      We went from idea to launch in 3 months, Rook's credits
                      and MyProBuddy's mentorship were game-changers!
                    </p>
                    <p className="font-semibold">ICM, Chennai</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="flex items-start">
                  <div className="text-5xl text-[#0096d4] mr-4">"</div>
                  <div>
                    <p className="text-lg italic mb-6">
                      Hlo Enterprise Legal+ made our trademark process so
                      seamless, we didn't even need to step out once!
                    </p>
                    <p className="font-semibold">Capital Groups, Abu Dhabi</p>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </section>

        {/* How To Join */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <div className="h-1 w-12 sm:w-16 md:w-20 bg-[#0096d4] mx-auto mb-4 sm:mb-6"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                3 Simple Steps to Get Started
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="relative z-10 flex mb-12">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0096d4] text-white flex items-center justify-center text-xl font-bold">
                    1
                  </div>
                  <div className="ml-8">
                    <h3 className="text-xl font-bold mb-2">
                      Apply to the Rook For Startups Program
                    </h3>
                    <p className="text-lg text-gray-600">
                      Fill out our simple application form to tell us about your
                      startup
                    </p>
                  </div>
                </div>

                <div className="relative z-10 flex mb-12">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0096d4] text-white flex items-center justify-center text-xl font-bold">
                    2
                  </div>
                  <div className="ml-8">
                    <h3 className="text-xl font-bold mb-2">
                      Get verified and onboarded within 7 days
                    </h3>
                    <p className="text-lg text-gray-600">
                      Our team will review your application and get you set up
                    </p>
                  </div>
                </div>

                <div className="relative z-10 flex">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0096d4] text-white flex items-center justify-center text-xl font-bold">
                    3
                  </div>
                  <div className="ml-8">
                    <h3 className="text-xl font-bold mb-2">
                      Unlock benefits + join our founder tribe
                    </h3>
                    <p className="text-lg text-gray-600">
                      Access all program benefits and connect with fellow
                      entrepreneurs
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-16">
              <a
                href="https://forms.office.com/r/Ap9MBCKhTp?embed=true%22"
                target="_blank"
              >
                <Button
                  size="lg"
                  className="bg-[#dc2e3e] text-white hover:bg-[#dc2e3e]/90"
                >
                  Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Join the Movement */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-[#0096d4]/5 to-[#dc2e3e]/5">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-10 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                  Let's Build Bold Together
                </h2>
                <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
                  Thousands of founders across India trust Rook to be their
                  quiet, powerful launch partner. We'd love to be yours too.
                </p>
                <a
                  href="https://forms.office.com/r/Ap9MBCKhTp?embed=true%22"
                  target="_blank"
                >
                  <Button
                    size="lg"
                    className="bg-[#dc2e3e] text-white hover:bg-[#dc2e3e]/90 group"
                  >
                    Get Started With Rook For Startups{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
              </div>
              <div className="flex justify-center mt-8 md:mt-0">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 flex items-center justify-center">
                  <Rocket className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 text-[#dc2e3e]" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default RookForStartups;
