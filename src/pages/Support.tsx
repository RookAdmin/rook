
import { MessageCircle, Book, Video, Mail, Phone, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Support = () => {
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
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              How can we help you?
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Get the support you need to succeed with Rook
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input 
                placeholder="Search for help articles, guides, and more..."
                className="pl-12 pr-4 py-6 text-lg rounded-full border-2 border-gray-200 focus:border-[#0096d4]"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#0096d4] hover:bg-[#0096d4]/90 rounded-full">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your Support Channel
            </h2>
            <p className="text-lg text-gray-600">
              Multiple ways to get the help you need, when you need it
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
  );
};

export default Support;
