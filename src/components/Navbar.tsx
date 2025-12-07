import { Button } from "@/components/ui/button";
import { RocketIcon, ChevronDownIcon, ChevronUpIcon, ExternalLink } from "lucide-react";
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
  const [scrollProgress, setScrollProgress] = useState(0);

  const [mobileDropdowns, setMobileDropdowns] = useState({
    whatWeDo: false,
    whatWeBuild: false,
    happenings: false,
  });

  const toggleDropdown = (key: string) => {
    setMobileDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Scroll progress tracking
  useEffect(() => {
    const calculateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener("scroll", calculateScrollProgress);
    return () => window.removeEventListener("scroll", calculateScrollProgress);
  }, []);

  // Scroll to top and close mobile menu whenever location changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll animation
    });
    setIsMobileMenuOpen(false);
  }, [location]);

  const services = [
    {
      title: "AI Agents Automation",
      description: "Intelligent solutions that streamline operations",
      link: "https://realmrook.com/services/ai-agents-automation",
    },
    {
      title: "Web/App Development",
      description: "Building responsive, scalable digital solutions",
      link: "https://realmrook.com/services/web-app-development",
    },
    {
      title: "Social Media Marketing",
      description: "Strategic engagement across platforms that matters",
      link: "https://realmrook.com/services/social-media-marketing",
    },
    {
      title: "Branding",
      description:
        "Crafting premium digital-first brand identities for startups",
      link: "https://realmrook.com/services/branding",
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive digital experiences that users love",
      link: "https://realmrook.com/services/ui-ux-design",
    },
    {
      title: "SEO",
      description: "Optimizing your digital presence for visibility and growth",
      link: "https://realmrook.com/services/seo",
    },
    {
      title: "Domain Name Consultation",
      description: "Expert guidance for your digital identity",
      link: "https://realmrook.com/services/domain-name-consultation",
    },
    {
      title: "Enterprise Domain Management",
      description: "Comprehensive domain portfolio management for enterprises",
      link: "https://realmrook.com/services/enterprise-domain-management",
    },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#121212] border-b border-[#333333]">
      {/* Scroll Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-[3px] bg-[#db2e3f]"
        style={{
          width: `${scrollProgress}%`,
          transition: "width 0.2s ease-out",
        }}
      />
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-16 gap-2">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">
              <img
                src="/logo.png"
                alt="Company Logo"
                className="w-[100px] h-[40px] object-cover"
              />
            </span>
          </Link>

          <div className="hidden md:flex items-center justify-end space-x-4 lg:space-x-6 xl:space-x-8 flex-1 min-w-0">
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
                            <NavigationMenuLink
                              className="p-0 focus:bg-transparent hover:bg-transparent"
                              key={index}
                            >
                              <a
                                href={service.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full p-3 rounded-md text-[#121212] group transition-all duration-200"
                              >
                                <div className="font-medium group-hover:text-[#0096d4] transition-colors">
                                  {service.title}
                                </div>
                                <p className="text-xs text-gray-500 mt-1">
                                  {service.description}
                                </p>
                              </a>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </li>
                    </ul>
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
                            className="block p-2 hover:bg-[#f5f5f5] rounded-md text-[#121212]"
                          >
                            Paym.me
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li className="row-span-1">
                        <NavigationMenuLink asChild>
                          <a
                            href="/links"
                            rel="noopener noreferrer"
                            className="block p-2 hover:bg-[#f5f5f5] rounded-md text-[#121212]"
                          >
                            Rook Links
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li className="row-span-1">
                        <NavigationMenuLink asChild>
                          <a
                            href="/scoop"
                            rel="noopener noreferrer"
                            className="block p-2 hover:bg-[#f5f5f5] rounded-md text-[#121212]"
                          >
                            Rook Scoop
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li className="row-span-1">
                        <NavigationMenuLink asChild>
                          <a
                            href="/friends"
                            rel="noopener noreferrer"
                            className="block p-2 hover:bg-[#f5f5f5] rounded-md text-[#121212]"
                          >
                            Rook Friends
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li className="row-span-1">
                        <NavigationMenuLink asChild>
                          <a
                            href="https://realmrook.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-2 hover:bg-[#f5f5f5] rounded-md text-[#121212]"
                          >
                            Realm by Rook
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              to="/rook-for-startups"
              className="text-white hover:text-[#0096d4] text-xs lg:text-sm font-[410] transition-colors whitespace-nowrap"
            >
              Rook For Startups
            </Link>

            <NavigationMenu>
              <NavigationMenuList>
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
                            className="block p-2 hover:bg-[#f5f5f5] rounded-md text-[#121212]"
                          >
                            Perspectives
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li className="row-span-1">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/press-release"
                            className="block p-2 hover:bg-[#f5f5f5] rounded-md text-[#121212]"
                          >
                            Press Release
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li className="row-span-1">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/media-coverage"
                            className="block p-2 hover:bg-[#f5f5f5] rounded-md text-[#121212]"
                          >
                            Media Coverage
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li className="row-span-1">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/letter-from-the-ceo"
                            className="block p-2 hover:bg-[#f5f5f5] rounded-md text-[#121212]"
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
              className="text-white hover:text-[#0096d4] text-xs lg:text-sm font-[410] transition-colors whitespace-nowrap"
            >
              Who We Are ?
            </Link>

            <a
              href="https://links.rookhq.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1 bg-[#34A853] px-2.5 py-1.5 rounded-full hover:bg-[#34A853]/90 transition-all shadow-md hover:shadow-lg flex-shrink-0"
            >
              <span className="text-white font-medium text-[10px] sm:text-xs whitespace-nowrap hidden lg:inline">clickl.in/</span>
              <span className="text-white font-medium text-[10px] sm:text-xs whitespace-nowrap lg:hidden">c.in/</span>
              <div className="bg-white rounded-full px-2 py-0.5 flex-shrink-0">
                <span className="text-[#121212] font-medium text-[10px] sm:text-xs whitespace-nowrap hidden xl:inline">reserve your username</span>
                <span className="text-[#121212] font-medium text-[10px] sm:text-xs whitespace-nowrap xl:hidden">reserve</span>
              </div>
              <ExternalLink className="h-3 w-3 text-white flex-shrink-0 ml-0.5" />
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
        <div className="md:hidden bg-[#121212] py-4 relative">
          {/* Scroll Progress Bar for Mobile */}
          <div
            className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-[#F4B400] via-[#34A853] to-[#0096d4]"
            style={{
              width: `${scrollProgress}%`,
              transition: "width 0.2s ease-out",
            }}
          />
          <div className="container mx-auto px-4 space-y-4 overflow-y-auto max-h-[80vh]">
            {/* What We Do Section */}
            <div className="border-b border-[#333333] pb-2">
              <button
                onClick={() => toggleDropdown("whatWeDo")}
                className="text-white mb-2 font-medium w-full text-left flex items-center justify-between"
              >
                What We Do ?
                <span>
                  {mobileDropdowns.whatWeDo ? (
                    <ChevronUpIcon className="h-5 w-5 text-white" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 text-white" />
                  )}
                </span>
              </button>
              {mobileDropdowns.whatWeDo && (
                <div className="space-y-2">
                  {services.map((service, index) => (
                    <a
                      key={index}
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-1.5 text-[#f5f5f5] hover:text-[#0096d4] text-sm"
                    >
                      {service.title}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* What We Build Section */}
            <div className="border-b border-[#333333] pb-2">
              <button
                onClick={() => toggleDropdown("whatWeBuild")}
                className="text-white mb-2 font-medium w-full text-left flex items-center justify-between"
              >
                What We Build ?
                <span>
                  {mobileDropdowns.whatWeBuild ? (
                    <ChevronUpIcon className="h-5 w-5 text-white" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 text-white" />
                  )}
                </span>
              </button>
              {mobileDropdowns.whatWeBuild && (
                <div className="space-y-2">
                  <a
                    href="https://paym.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-2 text-[#f5f5f5] hover:text-[#0096d4]"
                  >
                    Paym.me
                  </a>
                  <a
                    href="/links"
                    rel="noopener noreferrer"
                    className="block py-2 text-[#f5f5f5] hover:text-[#0096d4]"
                  >
                    Rook Links
                  </a>
                  <a
                    href="/scoop"
                    rel="noopener noreferrer"
                    className="block py-2 text-[#f5f5f5] hover:text-[#0096d4]"
                  >
                    Rook Scoop
                  </a>
                  <a
                    href="/friends"
                    rel="noopener noreferrer"
                    className="block py-2 text-[#f5f5f5] hover:text-[#0096d4]"
                  >
                    Rook Friends
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
              )}
            </div>

            {/* Rook For Startups Section */}
            <div className="border-b border-[#333333] pb-2">
              <Link
                to="/rook-for-startups"
                className="block py-2 text-[#f5f5f5] hover:text-[#0096d4] font-medium"
              >
                Rook For Startups
              </Link>
            </div>

            {/* Happenings Section */}
            <div className="border-b border-[#333333] pb-2">
              <button
                onClick={() => toggleDropdown("happenings")}
                className="text-white mb-2 font-medium w-full text-left flex items-center justify-between"
              >
                Happenings
                <span>
                  {mobileDropdowns.happenings ? (
                    <ChevronUpIcon className="h-5 w-5 text-white" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 text-white" />
                  )}
                </span>
              </button>
              {mobileDropdowns.happenings && (
                <div className="space-y-2">
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
                    to="/letter-from-the-ceo"
                    className="block py-2 text-[#f5f5f5] hover:text-[#0096d4]"
                  >
                    Letter From the CEO
                  </Link>
                </div>
              )}
            </div>

            {/* Who We Are Section */}
            <div className="border-b border-[#333333] pb-2">
              <Link
                to="/about"
                className="block py-2 text-[#f5f5f5] hover:text-[#0096d4] font-medium"
              >
                Who We Are ?
              </Link>
            </div>

            {/* Support Button Section */}
            <div className="pt-2">
              <a
                href="https://links.rookhq.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-[#34A853] px-4 py-2 rounded-full hover:bg-[#34A853]/90 transition-all shadow-md hover:shadow-lg w-full justify-center"
              >
                <span className="text-white font-medium text-sm">clickl.in/</span>
                <div className="bg-white rounded-full px-3 py-1">
                  <span className="text-[#121212] font-medium text-sm">reserve your username</span>
                </div>
                <ExternalLink className="h-3 w-3 text-white" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
