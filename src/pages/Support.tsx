import { SEO } from "@/components/SEO";
import { MessageCircle, Book, Video, Mail, Phone, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Support = () => {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Rook Support",
      "description": "Get help with Rook products. 24/7 live chat, raise tickets, watch tutorials, or contact our support team. We're here to help.",
      "url": "https://rookhq.com/support",
      "mainEntity": {
        "@type": "Organization",
        "name": "Rook Support",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Service",
          "availableLanguage": "English",
          "areaServed": "Worldwide",
          "email": "support@rookhq.com"
        }
      }
    }
  ];

  const faqData = [
    {
      question: "How can I get support for Rook products?",
      answer: "You can get support through multiple channels: 24/7 live chat via WhatsApp, raise a ticket through our support portal, watch video tutorials on YouTube, or email us at support@rookhq.com. We typically respond within 24 hours."
    },
    {
      question: "Is Rook support available 24/7?",
      answer: "Yes, our live chat support is available 24/7 via WhatsApp. For ticket-based support, we aim to respond within 24 hours. Video tutorials are available on-demand anytime."
    },
    {
      question: "Where can I find documentation for Rook products?",
      answer: "You can find comprehensive documentation, guides, and tutorials in our support portal at support.rookhq.com. We also have video tutorials available on our YouTube channel."
    },
    {
      question: "How do I raise a support ticket?",
      answer: "You can raise a support ticket by visiting our support portal at support.rookhq.com. Simply browse articles or submit a new ticket with your question or issue, and our team will get back to you within 24 hours."
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Support", url: "/support" }
  ];

  const supportOptions = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: MessageCircle,
      availability: "24/7 Available",
      action: "Start Chat",
      link: "https://api.whatsapp.com/send/?phone=917094300022"
    },
    {
      title: "Raise a Ticket",
      description: "Submit your issues and track their progress",
      icon: Book,
      availability: "Response in 24h",
      action: "Browse Articles",
      link: "https://support.rookhq.com/portal/en/home"
    },
    {
      title: "Video Tutorials",
      description: "Learn with step-by-step video guides",
      icon: Video,
      availability: "On-Demand",
      action: "Watch Videos",
      link: "https://www.youtube.com/@rookl"
    },
    {
      title: "Email Support",
      description: "Send us detailed questions via email",
      icon: Mail,
      availability: "24h Response",
      action: "Send Email",
      link: "mailto:support@rookhq.com"
    }
  ];

  const popularArticles = [
    "Getting Started with Rook Platform",
    "Setting Up Your First Project",
    "Managing Team Members and Permissions",
    "API Documentation and Integration Guide",
    "Billing and Subscription Management",
    "Security Best Practices"
  ];

  return (
    <>
      <SEO
        title="Rook Support | 24/7 Help Center - Live Chat, Tickets, Tutorials & Contact"
        description="Get help with Rook products. 24/7 live chat support, raise tickets, watch video tutorials, or contact our support team. We're here to help you succeed with Rook's tools."
        keywords="Rook support, customer support, help center, live chat, support tickets, Rook help, customer service, technical support, product support, Rook assistance"
        canonical="/support"
        geoRegion="IN"
        geoPlacename="India"
        structuredData={structuredData}
        faqData={faqData}
        breadcrumbs={breadcrumbs}
      />
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2 sm:px-0">
              How can we help you?
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 px-4 sm:px-0">
              Get the support you need to succeed with Rook
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative px-4 sm:px-0">
              <Search className="absolute left-4 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 sm:h-5 sm:w-5" />
              <Input 
                placeholder="Search for help articles, guides, and more..."
                className="pl-10 sm:pl-12 pr-20 sm:pr-24 py-4 sm:py-6 text-sm sm:text-base md:text-lg rounded-full border-2 border-gray-200 focus:border-[#0096d4]"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#0096d4] hover:bg-[#0096d4]/90 rounded-full text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Choose Your Support Channel
            </h2>
            <p className="text-base sm:text-lg text-gray-600 px-4">
              Multiple ways to get the help you need, when you need it
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {supportOptions.map((option, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <option.icon className="h-8 w-8 text-[#0096d4]" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">{option.title}</h3>
                <p className="text-gray-600 text-center mb-4">{option.description}</p>
                <div className="text-center mb-4">
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                    {option.availability}
                  </span>
                </div>
                <a href={option.link} target="_blank">
                <Button className="w-full bg-[#0096d4] hover:bg-[#0096d4]/90">
                  {option.action}
                </Button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Popular Help Articles
              </h2>
              <p className="text-lg text-gray-600">
                Quick answers to the most common questions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {popularArticles.map((article, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border hover:border-[#0096d4] transition-colors cursor-pointer">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900 hover:text-[#0096d4]">{article}</span>
                    <Book className="h-4 w-4 text-gray-400" />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button variant="outline" className="border-[#0096d4] text-[#0096d4] hover:bg-[#0096d4] hover:text-white">
                View All Articles
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#dc2e3e] to-[#cc2934] rounded-2xl p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Still Need Help?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Our support team is here to help you succeed
              </p>
              <div className="grid md:grid-cols-1 gap-6 max-w-2xl mx-auto">
                {/* <div className="flex items-center justify-center space-x-3">
                  <Phone className="h-5 w-5" />
                  <span>+1 (555) 123-4567</span>
                </div> */}
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="h-5 w-5" />
                  <span>support@rookhq.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Support;
