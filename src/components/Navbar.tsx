
import { Button } from "@/components/ui/button";
import { RocketIcon, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black border-b border-[#333333]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white"><img
              src="https://www.rookhq.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frook-white.5eb1fa80.png&w=3840&q=75"
              alt="Descriptive alt text"
              className="w-[100px] h-[40px] object-cover"
            /></span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white hover:text-[#0096d4] transition-colors bg-transparent">
                    What We Do
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[200px] bg-white shadow-lg">
                      <li className="row-span-1">
                        <NavigationMenuLink asChild>
                          <Link
                            to="#product"
                            className="block p-2 hover:bg-[#f5f5f5] rounded-md text-black"
                          >
                            Paym.me
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li className="row-span-1">
                        <NavigationMenuLink asChild>
                          <Link
                            to="#product"
                            className="block p-2 hover:bg-[#f5f5f5] rounded-md text-black"
                          >
                            Realm by Rook
                          </Link>
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

            <Link to="/about" className="text-white hover:text-[#0096d4] transition-colors">
              About Us
            </Link>
            
            <Button size="sm" className="bg-[#dc2e3e] text-white hover:bg-[#dc2e3e]/90">
              Get Started <RocketIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
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
            <div className="border-b border-[#333333] pb-2">
              <p className="text-white mb-2 font-medium">Products</p>
              <Link to="#product" className="block py-2 text-[#f5f5f5] hover:text-[#0096d4]">Paym.me</Link>
              <Link to="#product" className="block py-2 text-[#f5f5f5] hover:text-[#0096d4]">Realm by Rook</Link>
            </div>
            
            <div className="border-b border-[#333333] pb-2">
              <p className="text-white mb-2 font-medium">Happenings</p>
              <Link to="/perspectives" className="block py-2 text-[#f5f5f5] hover:text-[#0096d4]">Perspectives</Link>
              <Link to="/press-release" className="block py-2 text-[#f5f5f5] hover:text-[#0096d4]">Press Release</Link>
              <Link to="/media-coverage" className="block py-2 text-[#f5f5f5] hover:text-[#0096d4]">Media Coverage</Link>
              <Link to="/letter-from-ceo" className="block py-2 text-[#f5f5f5] hover:text-[#0096d4]">Letter From the CEO</Link>
            </div>

            <div className="border-b border-[#333333] pb-2">
              <Link to="/about" className="block py-2 text-[#f5f5f5] hover:text-[#0096d4]">About</Link>
            </div>

            <div className="pt-2">
              <Button className="w-full bg-[#dc2e3e] text-white hover:bg-[#dc2e3e]/90">
                Get Started <RocketIcon className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
