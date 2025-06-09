
import { Link } from "react-router-dom";
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white"><img
              src="/logo.png"
              alt="Descriptive alt text"
              className="w-[100px] h-[40px] object-cover"
            /></span>
          </Link>
            <p className="text-[#f5f5f5] text-sm">
              Simple tools. Monumental impact.
            </p>
            <div className="flex space-x-4 text-white">
  {/* Facebook */}
  <a href="https://www.facebook.com/RookCom" target="_blank" rel="noopener noreferrer">
    <FacebookIcon className="h-5 w-5 hover:text-[#0096d4] transition-colors" />
  </a>

  {/* Twitter (X) */}
  <a href="https://x.com/RookHQ" target="_blank" rel="noopener noreferrer">
    <svg 
      className="h-5 w-5 hover:text-[#0096d4] transition-colors" 
      viewBox="0 0 24 24" 
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
    </svg>
  </a>

  {/* LinkedIn */}
  <a href="https://www.linkedin.com/company/rook/" target="_blank" rel="noopener noreferrer">
    <LinkedinIcon className="h-5 w-5 hover:text-[#0096d4] transition-colors" />
  </a>

  {/* Instagram */}
  <a href="https://www.instagram.com/rookhq/" target="_blank" rel="noopener noreferrer">
    <InstagramIcon className="h-5 w-5 hover:text-[#0096d4] transition-colors" />
  </a>

  {/* YouTube */}
  <a href="https://www.youtube.com/@rookl" target="_blank" rel="noopener noreferrer">
    <YoutubeIcon className="h-5 w-5 hover:text-[#0096d4] transition-colors" />
  </a>
</div>

          </div>

<div className="space-y-4">
            <h3 className="font-semibold text-white">What We Do ?</h3>
            <ul className="space-y-2">
              <li>
                <Link to="https://realmrook.com/services/ai-agents-automation" className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm">
                  AI Agents Automation
                </Link>
              </li>
              <li>
                <Link to="https://realmrook.com/services/branding" className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm">
                  Branding
                </Link>
              </li>
              <li>
                <Link to="https://realmrook.com/services/ui-ux-design" className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="https://realmrook.com/services/web-app-development" className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm">
                  Web/App Development
                </Link>
              </li>
              
              <li>
                <Link to="https://realmrook.com/services/social-media-marketing" className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link to="https://realmrook.com/services/seo" className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm">
                  SEO
                </Link>
              </li>
              <li>
                <Link to="http://realmrook.com/services/domain-name-consultation" className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm">
                  Domain Consultation
                </Link>
              </li>
              <li>
                <Link to="https://realmrook.com/services/enterprise-domain-management" className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm">
                  Enterprise Domain
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-white">What Did We Build ?</h3>
            <ul className="space-y-2">
              <li>
                <Link to="https://paym.me/" className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm">
                  Paym.me
                </Link>
              </li>
              <li>
                <Link to="https://realmrook.com/" className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm">
                  Realm by Rook
                </Link>
              </li>
            </ul>
            
            <h3 className="font-semibold text-white mt-6">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/brand-kit" className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm">
                  Brand Kit
                </Link>
              </li>
              <li>
                <Link to="/trademark" className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm">
                  Trademark
                </Link>
              </li>
              <li>
                <Link to="/rook-for-startups" className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm">
                  Rook For Startups
                </Link>
              </li>
              <li>
                <Link to="/open-source" className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm">
                  Open Source
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm">
                  About
                </Link>
              </li>
              
              <li>
                <Link to="/perspectives" className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm">
                  Perspectives
                </Link>
              </li>
              <li>
                <Link to="/press-release" className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm">
                  Press Release
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm">
                  Terms
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
      
         
          
        
         
        </div>
        <div className="mt-12 pt-8 border-t border-[#333333]">
          <p className="text-center text-[#f5f5f5] text-sm">
            © {new Date().getFullYear()} Rook. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
