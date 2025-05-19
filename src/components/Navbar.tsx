import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll to top and close mobile menu whenever location changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Smooth scroll animation
    });
    setIsMobileMenuOpen(false);
  }, [location]);

  const services = [
    {
      title: "Branding",
      description: "Crafting premium digital-first brand identities for startups",
      link: "https://realmrook.com/services/branding"
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive digital experiences that users love",
      link: "https://realmrook.com/services/ui-ux-design"
    },
    {
      title: "Web/App Development",
      description: "Building responsive, scalable digital solutions",
      link: "https://realmrook.com/services/web-app-development"
    },
    {
      title: "SEO",
      description: "Optimizing your digital presence for visibility and growth",
      link: "https://realmrook.com/services/seo"
    },
    {
      title: "Social Media Marketing",
      description: "Strategic engagement across platforms that matters",
      link: "https://realmrook.com/services/social-media-marketing"
    },
    {
      title: "AI Business Automation",
      description: "Intelligent solutions that streamline operations",
      link: "https://realmrook.com/services/ai-business-automation"
    },
    {
      title: "Domain Name Consultation",
      description: "Expert guidance for your digital identity",
      link: "https://realmrook.com/services/domain-name-consultation"
    },
    {
      title: "Enterprise Domain Management",
      description: "Comprehensive domain portfolio management for enterprises",
      link: "https://realmrook.com/services/enterprise-domain-management"
    }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black border-b border-[#333333]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">
              <img
                src="/logo.png"
                alt="Company Logo"
                className="w-[100px] h-[40px] object-cover"
              />
            </span>
          </Link>

          

          <div className="hidden md:flex items-center space-x-8">
          
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white hover:text-[#0096d4] transition-colors bg-transparent">
                    What We Do ?
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="w-[350px] bg-white/95 backdrop-blur-sm shadow-xl p-0 z-50 rounded-lg border-0">
                    <ul className="grid gap-3 p-4 w-[350px] bg-white">
                      <li className="row-span-1">
                      
                      <div className="p-3 max-h-[400px] overflow-y-auto">
                      {services.map((service, index) => (
                    <NavigationMenuLink  className="p-0 focus:bg-transparent hover:bg-transparent" key={index}>
                      <Link
                        to={service.link}
                        className="w-full p-3 rounded-md text-black group transition-all duration-200"
                      >
                        <div className="font-medium group-hover:text-[#0096d4] transition-colors">{service.title}</div>
                        <p className="text-xs text-gray-500 mt-1">{service.description}</p>
                      </Link>
                    </NavigationMenuLink>
                  ))}
                  </div>
                  </li></ul>                     
                  </NavigationMenuContent>
                </NavigationMenuItem>                
              </NavigationMenuList>
            </NavigationMenu>


            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white hover:text-[#0096d4] transition-colors bg-transparent">
                    What Did We Build ?
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[200px] bg-white shadow-lg">
                      <li className="row-span-1">
                        <NavigationMenuLink asChild>
                          <a
                            href="https://paym.me/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-2 hover:bg-[#f5f5f5] rounded-md text-black"
                          >
                            Paym.me
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li className="row-span-1">
                        <NavigationMenuLink asChild>
                          <a
                            href="https://realmrook.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-2 hover:bg-[#f5f5f5] rounded-md text-black"
                          >
                            Realm by Rook
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white hover:text-[#0096d4] transition-colors bg-transparent">
                    Happenings
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[220px] bg-white shadow-lg">
                      <li className="row-span-1">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/perspectives"
                            className="block p-2 hover:bg-[#f5f5f5] rounded-md text-black"
                          >
                            Perspectives
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li className="row-span-1">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/press-release"
                            className="block p-2 hover:bg-[#f5f5f5] rounded-md text-black"
                          >
                            Press Release
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li className="row-span-1">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/media-coverage"
                            className="block p-2 hover:bg-[#f5f5f5] rounded-md text-black"
                          >
                            Media Coverage
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li className="row-span-1">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/letter-from-ceo"
                            className="block p-2 hover:bg-[#f5f5f5] rounded-md text-black"
                          >
                            Letter From the CEO
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              to="/about"
              className="text-white hover:text-[#0096d4] text-sm font-[410] transition-colors"
            >
              Who We Are ?
            </Link>

            <Link to="/rook-for-startups" className="text-white hover:text-[#0096d4] text-sm font-[410] transition-colors">
              Rook For Startups
            </Link>

            <a
              href="https://support.rookhq.com/portal/en/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                className="bg-[#dc2e3e] text-white hover:bg-[#dc2e3e]/90"
              >
                Support <RocketIcon className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black py-4">
          <div className="container mx-auto px-4 space-y-4">
             <div className="border-b border-white/10 pb-2">
              <p className="text-white mb-2 font-medium">What We Do ?</p>
              {services.map((service, index) => (
                <Link 
                  key={index} 
                  to={service.link} 
                  className="block py-1.5 text-[#f5f5f5] hover:text-[#0096d4] text-sm"
                >
                  {service.title}
                </Link>
              ))}
            </div>

            <div className="border-b border-[#333333] pb-2">
              <p className="text-white mb-2 font-medium">What We Build ?</p>
              <a
                href="https://paym.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 text-[#f5f5f5] hover:text-[#0096d4]"
              >
                Paym.me
              </a>
              <a
                href="https://realmrook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 text-[#f5f5f5] hover:text-[#0096d4]"
              >
                Realm by Rook
              </a>
            </div>

            <div className="border-b border-[#333333] pb-2">
              <p className="text-white mb-2 font-medium">Happenings</p>
              <Link
                to="/perspectives"
                className="block py-2 text-[#f5f5f5] hover:text-[#0096d4]"
              >
                Perspectives
              </Link>
              <Link
                to="/press-release"
                className="block py-2 text-[#f5f5f5] hover:text-[#0096d4]"
              >
                Press Release
              </Link>
              <Link
                to="/media-coverage"
                className="block py-2 text-[#f5f5f5] hover:text-[#0096d4]"
              >
                Media Coverage
              </Link>
              <Link
                to="/letter-from-ceo"
                className="block py-2 text-[#f5f5f5] hover:text-[#0096d4]"
              >
                Letter From the CEO
              </Link>
            </div>

            <div className="border-b border-[#333333] pb-2">
              <Link
                to="/about"
                className="block py-2 text-[#f5f5f5] hover:text-[#0096d4]"
              >
                Who We Are ?
              </Link>
              <Link to="/rook-for-startups" className="block py-2 text-[#f5f5f5] hover:text-[#0096d4]">Rook For Startups</Link>

            </div>

            <div className="pt-2">
              <a
                href="https://support.rookhq.com/portal/en/home"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="sm"
                  className="bg-[#dc2e3e] text-white hover:bg-[#dc2e3e]/90 w-full"
                >
                  Support <RocketIcon className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};