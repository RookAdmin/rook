import { Link } from "react-router-dom";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#121212] py-12 w-full overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and Social Icons Section - Top (Mobile/Tablet only) */}
        <div className="mb-8 md:mb-0 md:hidden">
          <Link to="/" className="flex items-center space-x-2 mb-4">
            <span className="text-2xl font-bold text-white">
              <img
                src="/logo.png"
                alt="Descriptive alt text"
                className="w-[100px] h-[40px] object-cover"
              />
            </span>
          </Link>
          <p className="text-[#f5f5f5] text-sm mb-4">
            Simple tools. Monumental impact.
          </p>
          <div className="flex space-x-4 text-white">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/RookCom"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon className="h-5 w-5 hover:text-[#0096d4] transition-colors" />
            </a>

            {/* Twitter (X) */}
            <a
              href="https://x.com/RookHQ"
              target="_blank"
              rel="noopener noreferrer"
            >
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
            <a
              href="https://www.linkedin.com/company/rook/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon className="h-5 w-5 hover:text-[#0096d4] transition-colors" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/rookhq/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="h-5 w-5 hover:text-[#0096d4] transition-colors" />
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@rookl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YoutubeIcon className="h-5 w-5 hover:text-[#0096d4] transition-colors" />
            </a>
          </div>
        </div>

        {/* Navigation Sections - 2 Column Layout on Mobile, 5 Column on Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
          {/* Left Column - Desktop: Logo (1st section), Mobile: What We Do (1st section) */}
          <div className="col-span-1 md:col-span-1 space-y-4">
            {/* Logo and Social - Desktop only */}
            <div className="hidden md:block">
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <span className="text-2xl font-bold text-white">
                  <img
                    src="/logo.png"
                    alt="Descriptive alt text"
                    className="w-[100px] h-[40px] object-cover"
                  />
                </span>
              </Link>
              <p className="text-[#f5f5f5] text-sm mb-4">
                Simple tools. Monumental impact.
              </p>
              <div className="flex space-x-4 text-white">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/RookCom"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon className="h-5 w-5 hover:text-[#0096d4] transition-colors" />
                </a>

                {/* Twitter (X) */}
                <a
                  href="https://x.com/RookHQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
                <a
                  href="https://www.linkedin.com/company/rook/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinIcon className="h-5 w-5 hover:text-[#0096d4] transition-colors" />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/rookhq/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon className="h-5 w-5 hover:text-[#0096d4] transition-colors" />
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@rookl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <YoutubeIcon className="h-5 w-5 hover:text-[#0096d4] transition-colors" />
                </a>
              </div>
            </div>
            
            {/* What We Do - Mobile only */}
            <div className="md:hidden">
              <h3 className="font-semibold text-white mb-3">What We Do ?</h3>
              <ul className="space-y-2">
              <li>
                <a
                  href="https://realmrook.com/services/ai-agents-automation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                >
                  AI Agents Automation
                </a>
              </li>
              <li>
                <a
                  href="https://realmrook.com/services/web-app-development"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                >
                  Web/App Development
                </a>
              </li>
              <li>
                <a
                  href="https://realmrook.com/services/social-media-marketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                >
                  Social Media Marketing
                </a>
              </li>
              <li>
                <a
                  href="https://realmrook.com/services/branding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                >
                  Branding
                </a>
              </li>
              <li>
                <a
                  href="https://realmrook.com/services/ui-ux-design"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                >
                  UI/UX Design
                </a>
              </li>
              <li>
                <a
                  href="https://realmrook.com/services/seo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                >
                  SEO
                </a>
              </li>
              <li>
                <a
                  href="http://realmrook.com/services/domain-name-consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                >
                  Domain Consultation
                </a>
              </li>
              <li>
                <a
                  href="https://realmrook.com/services/enterprise-domain-management"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                >
                  Enterprise Domain
                </a>
              </li>
            </ul>
            </div>
          </div>
          
          {/* Column 2 - Desktop: What We Do, Mobile: What Did We Build + For Developers */}
          <div className="col-span-1 md:col-span-1 space-y-4">
            {/* What We Do - Desktop only */}
            <div className="hidden md:block">
              <h3 className="font-semibold text-white mb-3">What We Do ?</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://realmrook.com/services/ai-agents-automation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                  >
                    AI Agents Automation
                  </a>
                </li>
                <li>
                  <a
                    href="https://realmrook.com/services/web-app-development"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                  >
                    Web/App Development
                  </a>
                </li>
                <li>
                  <a
                    href="https://realmrook.com/services/social-media-marketing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                  >
                    Social Media Marketing
                  </a>
                </li>
                <li>
                  <a
                    href="https://realmrook.com/services/branding"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                  >
                    Branding
                  </a>
                </li>
                <li>
                  <a
                    href="https://realmrook.com/services/ui-ux-design"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                  >
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a
                    href="https://realmrook.com/services/seo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                  >
                    SEO
                  </a>
                </li>
                <li>
                  <a
                    href="http://realmrook.com/services/domain-name-consultation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                  >
                    Domain Consultation
                  </a>
                </li>
                <li>
                  <a
                    href="https://realmrook.com/services/enterprise-domain-management"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                  >
                    Enterprise Domain
                  </a>
                </li>
              </ul>
            </div>
            
            {/* What Did We Build + For Developers - Mobile only */}
            <div className="md:hidden">
              <h3 className="font-semibold text-white mb-3">What Did We Build ?</h3>
              <ul className="space-y-2">
              <li>
                <a
                  href="https://paym.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                >
                  Paym.me
                </a>
              </li>
              <li>
                <a
                  href="/links"
                  rel="noopener noreferrer"
                  className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                >
                  Rook Links
                </a>
              </li>
              <li>
                <a
                  href="/scoop"
                  rel="noopener noreferrer"
                  className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                >
                  Rook Scoop
                </a>
              </li>
              <li>
                <a
                  href="/friends"
                  rel="noopener noreferrer"
                  className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                >
                  Rook Friends
                </a>
              </li>
              <li>
                <a
                  href="https://realmrook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                >
                  Realm by Rook
                </a>
              </li>
            </ul>
              <h3 className="font-semibold text-white mt-4 mb-3">For Developers</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/developers"
                    className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                  >
                    Rook Developers
                  </Link>
                </li>

                <li>
                  <Link
                    to="/devconference"
                    className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                  >
                    Dev Conference
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Column 3 - Desktop: What Did We Build + For Developers, Mobile: Company */}
          <div className="col-span-1 md:col-span-1 space-y-4">
            {/* What Did We Build + For Developers - Desktop only */}
            <div className="hidden md:block">
              <h3 className="font-semibold text-white mb-3">What Did We Build ?</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://paym.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                  >
                    Paym.me
                  </a>
                </li>
                <li>
                  <a
                    href="/links"
                    rel="noopener noreferrer"
                    className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                  >
                    Rook Links
                  </a>
                </li>
                <li>
                  <a
                    href="/scoop"
                    rel="noopener noreferrer"
                    className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                  >
                    Rook Scoop
                  </a>
                </li>
                <li>
                  <a
                    href="/friends"
                    rel="noopener noreferrer"
                    className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                  >
                    Rook Friends
                  </a>
                </li>
                <li>
                  <a
                    href="https://realmrook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                  >
                    Realm by Rook
                  </a>
                </li>
              </ul>
              <h3 className="font-semibold text-white mt-4 mb-3">For Developers</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/developers"
                    className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                  >
                    Rook Developers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/devconference"
                    className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                  >
                    Dev Conference
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Company - Mobile only */}
            <div className="md:hidden">
              <h3 className="font-semibold text-white mb-3">Company</h3>
              <ul className="space-y-2">
              <li>
                <Link
                  to="/life"
                  className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                >
                  Life
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/invest"
                  className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                >
                  Invest
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/perspectives"
                  className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                >
                  Perspectives
                </Link>
              </li>
              <li>
                <Link
                  to="/press-release"
                  className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                >
                  Press Release
                </Link>
              </li>
              <li>
                <Link
                  to="/media-coverage"
                  className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                >
                  Media Coverage
                </Link>
              </li>
              <li>
                <Link
                  to="/letter-from-the-ceo"
                  className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                >
                  Letter From The CEO
                </Link>
              </li>
              <li>
                <Link
                  to="/profit-pledge"
                  className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                >
                  Profit Pledge
                </Link>
              </li>
            </ul>
            </div>
          </div>
          
          {/* Column 4 - Desktop: Company, Mobile: Resources */}
          <div className="col-span-1 md:col-span-1 space-y-4">
            {/* Company - Desktop only */}
            <div className="hidden md:block">
              <h3 className="font-semibold text-white mb-3">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/life"
                    className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                  >
                    Life
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/invest"
                    className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                  >
                    Invest
                  </Link>
                </li>
                <li>
                  <Link
                    to="/careers"
                    className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/perspectives"
                    className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                  >
                    Perspectives
                  </Link>
                </li>
                <li>
                  <Link
                    to="/press-release"
                    className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                  >
                    Press Release
                  </Link>
                </li>
                <li>
                  <Link
                    to="/media-coverage"
                    className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                  >
                    Media Coverage
                  </Link>
                </li>
                <li>
                  <Link
                    to="/letter-from-the-ceo"
                    className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                  >
                    Letter From The CEO
                  </Link>
                </li>
                <li>
                  <Link
                    to="/profit-pledge"
                    className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                  >
                    Profit Pledge
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Resources - Mobile only */}
            <div className="md:hidden">
              <h3 className="font-semibold text-white mb-3">Resources</h3>
              <ul className="space-y-2">
              <li>
                <Link
                  to="/support"
                  className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  to="/brand-kit"
                  className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                >
                  Brand Kit
                </Link>
              </li>
              <li>
                <Link
                  to="/trademark"
                  className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                >
                  Trademark
                </Link>
              </li>
              <li>
                <Link
                  to="/open-source"
                  className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                >
                  Open Source
                </Link>
              </li>
              <li>
                <Link
                  to="/rook-for-startups"
                  className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                >
                  Rook For Startups
                </Link>
              </li>
              <li>
                <Link
                  to="/startups/hlo-enterprise-legal"
                  className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                >
                  Hlo Enterprise Legal+
                </Link>
              </li>
              <li>
                <Link
                  to="/startups/myprobuddy"
                  className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                >
                  MyProBuddy
                </Link>
              </li>              
              <li>
                <Link
                  to="/startups/zoho"
                  className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                >
                  Zoho For Startups
                </Link>
              </li>
              <li>
                <a
                  href="https://design.rookhq.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                >
                  Rook Design
                </a>
              </li>
            </ul>
            </div>
          </div>
          
          {/* Column 5 - Desktop: Resources only */}
          <div className="hidden md:block md:col-span-1 space-y-4">
            <h3 className="font-semibold text-white mb-3">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/support"
                  className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  to="/brand-kit"
                  className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                >
                  Brand Kit
                </Link>
              </li>
              <li>
                <Link
                  to="/trademark"
                  className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                >
                  Trademark
                </Link>
              </li>
              <li>
                <Link
                  to="/open-source"
                  className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                >
                  Open Source
                </Link>
              </li>
              <li>
                <Link
                  to="/rook-for-startups"
                  className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                >
                  Rook For Startups
                </Link>
              </li>
              <li>
                <Link
                  to="/startups/hlo-enterprise-legal"
                  className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                >
                  Hlo Enterprise Legal+
                </Link>
              </li>
              <li>
                <Link
                  to="/startups/myprobuddy"
                  className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                >
                  MyProBuddy
                </Link>
              </li>
              <li>
                <Link
                  to="/startups/zoho"
                  className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                >
                  Zoho For Startups
                </Link>
              </li>
              <li>
                <a
                  href="https://design.rookhq.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
                >
                  Rook Design
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[#333333]">
          <div className="flex flex-col md:flex-row justify-between items-center mt-4">
            <p className="text-left text-[#f5f5f5] text-sm">
              © 2020 - {new Date().getFullYear()} Rook Platforms. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link
                to="/terms"
                className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
              >
                Terms
              </Link>
              <span className="text-[#f5f5f5] text-sm">|</span>
              <Link
                to="/privacy"
                className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
              >
                Privacy
              </Link>
              <span className="text-[#f5f5f5] text-sm">|</span>
              <Link
                to="/compliance"
                className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm"
              >
                Compliance
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
