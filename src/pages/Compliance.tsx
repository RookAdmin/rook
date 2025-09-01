
import { Shield, FileCheck, Globe, Eye, Lock, Building, CheckCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Compliance = () => {
  const complianceStandards = [
    {
      title: "Data Privacy Laws",
      description: "Full compliance with GDPR, CCPA, and India DPDP Act",
      icon: Eye,
      color: "text-blue-600"
    },
    {
      title: "Financial Regulations",
      description: "GST compliance and international VAT support",
      icon: Building,
      color: "text-green-600"
    },
    {
      title: "Security Standards",
      description: "SOC 2 readiness and ISO/IEC 27001 alignment",
      icon: Lock,
      color: "text-yellow-600"
    },
    {
      title: "Government Relations",
      description: "Active collaboration with regulatory bodies worldwide",
      icon: Shield,
      color: "text-red-600"
    }
  ];

  const commitments = [
    {
      title: "Government Registration",
      description: "Registered & compliant with state and central government laws",
      icon: FileCheck
    },
    {
      title: "Data Protection Ready",
      description: "Built-in readiness for GDPR, CCPA, India DPDP Act",
      icon: Shield
    },
    {
      title: "Trusted Partnerships",
      description: "Government-approved agency partnerships",
      icon: Building
    },
    {
      title: "Continuous Monitoring",
      description: "Real-time tracking of new policies & regulatory changes",
      icon: Eye
    }
  ];

  const complianceProcess = [
    { step: "Monitor", description: "Track regulatory changes", icon: Eye },
    { step: "Update", description: "Adapt systems & processes", icon: AlertTriangle },
    { step: "Audit", description: "Regular compliance reviews", icon: FileCheck },
    { step: "Report", description: "Transparent documentation", icon: Globe },
    { step: "Certify", description: "Official compliance validation", icon: CheckCircle }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20">
                <Shield className="h-16 w-16 text-[#00d437]" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Built to Comply. Ready to Scale.
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We work with government agencies, legal bodies, and industry regulators worldwide. 
              Rook is designed for compliance from day one.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-[#00d437] hover:bg-[#00d437]/90 text-white px-8 py-3">
                Read Our Compliance Standards
              </Button>
              <Button variant="outline" className="border-[#0096d4] text-[#0096d4] hover:bg-[#0096d4] hover:text-white px-8 py-3">
                Contact Compliance Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Compliance Is in Our DNA
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every feature, every process, every decision is made with regulatory compliance at its core.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commitments.map((commitment, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <commitment.icon className="h-12 w-12 text-[#00d437]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{commitment.title}</h3>
                  <p className="text-gray-600 text-sm">{commitment.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Legal & Regulatory Coverage */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Global-Ready Compliance
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive coverage across data privacy, financial regulations, and security standards.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {complianceStandards.map((standard, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm border-white/30 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <standard.icon className={`h-12 w-12 ${standard.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">{standard.title}</h3>
                  <p className="text-gray-600 text-center">{standard.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20">
                  <div className="flex justify-center mb-4">
                    <Shield className="h-24 w-24 text-[#00d437]" />
                  </div>
                  <Globe className="h-16 w-16 text-[#0096d4] mx-auto" />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why This Matters
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Startups, enterprises, and investors need confidence that every tool they use respects the law. 
                Rook was designed to operate within government frameworks and strengthen compliance across industries.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#00d437] mt-0.5" />
                  <p className="text-gray-700">Enterprise-grade security and privacy protection</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#00d437] mt-0.5" />
                  <p className="text-gray-700">Investor confidence through regulatory transparency</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#00d437] mt-0.5" />
                  <p className="text-gray-700">Global scalability with local compliance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Process */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How Rook Ensures Compliance
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our systematic approach to maintaining regulatory compliance across all operations.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
            {complianceProcess.map((process, index) => (
              <div key={index} className="flex flex-col items-center max-w-xs">
                <div className="p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 mb-4">
                  <process.icon className="h-12 w-12 text-[#0096d4]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{process.step}</h3>
                <p className="text-gray-600 text-center">{process.description}</p>
                {index < complianceProcess.length - 1 && (
                  <div className="hidden lg:block w-8 h-0.5 bg-gray-300 mt-4 transform rotate-90" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Relations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Industry & Government Relations
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              We work hand-in-hand with regulators, government law agencies, and industry partners 
              to ensure safety, legality, and trust.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20">
                <Shield className="h-12 w-12 text-[#00d437] mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Security Certified</h3>
                <p className="text-gray-600 text-sm">Industry-standard security compliance</p>
              </div>
              <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20">
                <Globe className="h-12 w-12 text-[#0096d4] mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Global Standards</h3>
                <p className="text-gray-600 text-sm">International regulatory alignment</p>
              </div>
              <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20">
                <Building className="h-12 w-12 text-[#ffd800] mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Enterprise Ready</h3>
                <p className="text-gray-600 text-sm">Corporate governance compliance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#00d437] to-[#00b82f]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Compliance That Scales With You
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Ready to build with confidence? Our compliance team is here to support your growth.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="secondary" className="bg-white text-[#00d437] hover:bg-gray-100 px-8 py-3">
                View Compliance Documentation
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
                Talk to Our Legal & Policy Team
              </Button>
            </div>
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-sm opacity-75">
                Questions about compliance? Reach out to us at{" "}
                <a href="mailto:compliance@rookhq.com" className="underline hover:no-underline">
                  compliance@rookhq.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Compliance;
