import React from "react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Star, TrendingUp, Zap, CreditCard, Gift } from "lucide-react";

const RookFriends = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Rook Friends",
    "description": "Earn with Rook. Affiliate and referral program for creators, influencers, and businesses. Turn your network into income with Rook Friends.",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "url": "https://rookhq.com/friends"
  };

  return (
    <>
      <SEO
        title="Rook Friends | Affiliate & Referral Program - Earn with Rook, Turn Your Network into Income"
        description="Earn with Rook. It's more than business. It's lifestyle. Join Rook Friends affiliate and referral program. Turn your network into income. Earn commissions by sharing Rook's products. Perfect for creators, influencers, and businesses."
        keywords="Rook Friends, affiliate program, referral program, earn money online, affiliate marketing, referral marketing, commission program, influencer program, creator earnings, affiliate network"
        canonical="/friends"
        geoRegion="IN"
        geoPlacename="India"
        structuredData={structuredData}
      />
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-16 overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-12 sm:pt-16 md:pt-24 lg:pt-32 pb-12 sm:pb-16 md:pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto bg-white/40 backdrop-blur-sm border border-white/20 rounded-3xl p-12 shadow-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
              Rook Friends
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-8 font-light">
              Earn with Rook. It's more than business. It's lifestyle.
            </h2>
            <Button 
              size="lg" 
              className="bg-[#00d437] hover:bg-[#00c132] text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Join Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Rook Friends */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm border border-white/30 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-[#00d437]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-[#00d437]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Earn with Purpose</h3>
              <p className="text-gray-600">Share Rook products, earn commissions.</p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm border border-white/30 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-[#0096d4]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-[#0096d4]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Lifestyle Perks</h3>
              <p className="text-gray-600">Affiliate rewards + exclusive community benefits.</p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm border border-white/30 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-[#ffd800]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-[#ffd800]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Grow Together</h3>
              <p className="text-gray-600">Be part of Rook's vision of creating new industry standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-gray-50/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">How It Works</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-white/80 backdrop-blur-sm border border-white/40 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-2xl font-bold text-[#00d437]">1</span>
                </div>
                <h3 className="font-semibold mb-2 text-gray-900">Sign Up</h3>
                <p className="text-gray-600 text-sm">Start at friends.rookhq.com</p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-white/80 backdrop-blur-sm border border-white/40 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-2xl font-bold text-[#0096d4]">2</span>
                </div>
                <h3 className="font-semibold mb-2 text-gray-900">Share</h3>
                <p className="text-gray-600 text-sm">Promote Rook tools with your unique link</p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-white/80 backdrop-blur-sm border border-white/40 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-2xl font-bold text-[#ffd800]">3</span>
                </div>
                <h3 className="font-semibold mb-2 text-gray-900">Earn</h3>
                <p className="text-gray-600 text-sm">Get payouts directly, no hassle</p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-white/80 backdrop-blur-sm border border-white/40 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-2xl font-bold text-[#dc2e3e]">4</span>
                </div>
                <h3 className="font-semibold mb-2 text-gray-900">Level Up</h3>
                <p className="text-gray-600 text-sm">Unlock lifestyle perks as you grow</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community & Lifestyle */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Community & Lifestyle</h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Join a global movement of creators, entrepreneurs, and visionaries who share Rook's mission. 
                Connect with like-minded individuals who are building the future of SaaS.
              </p>
              <div className="bg-white/60 backdrop-blur-sm border border-white/30 rounded-2xl p-6">
                <p className="text-lg font-medium text-gray-900 italic">
                  "Rook Friends isn't just affiliate marketing. It's a lifestyle."
                </p>
              </div>
            </div>
            <div className="bg-white/40 backdrop-blur-sm border border-white/20 rounded-3xl p-8 text-center">
              <div className="space-y-6">
                <div className="text-6xl">🌍</div>
                <h3 className="text-2xl font-semibold text-gray-900">Global Community</h3>
                <p className="text-gray-600">Work from anywhere, connect with everyone, grow together.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payout & Rewards */}
      <section className="py-20 px-4 bg-gray-50/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Payout & Rewards</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm border border-white/40 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-[#00d437]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CreditCard className="h-8 w-8 text-[#00d437]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Transparent Payouts</h3>
              <p className="text-gray-600">Fast and clear commission structure.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-white/40 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-[#0096d4]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-[#0096d4]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Flexible Options</h3>
              <p className="text-gray-600">Choose payout methods that fit you.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-white/40 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-[#ffd800]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Gift className="h-8 w-8 text-[#ffd800]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Exclusive Friend Perks</h3>
              <p className="text-gray-600">Rook events, merch, and invites.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto bg-white/40 backdrop-blur-sm border border-white/20 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Start your journey today.
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 font-light">
              Earn, grow, and live the Rook lifestyle.
            </p>
            <Button 
              size="lg" 
              className="bg-[#00d437] hover:bg-[#00c132] text-white px-12 py-6 text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Join Rook Friends
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default RookFriends;
