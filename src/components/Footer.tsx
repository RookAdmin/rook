
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
              src="https://www.rookhq.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frook-white.5eb1fa80.png&w=3840&q=75"
              alt="Descriptive alt text"
              className="w-[100px] h-[40px] object-cover"
            /></span>
          </Link>
            <p className="text-[#f5f5f5] text-sm">
              Simple tools. Monumental impact.
            </p>
            <div className="flex space-x-4 text-white">
              <FacebookIcon className="h-5 w-5 hover:text-[#0096d4] transition-colors" />
              <TwitterIcon className="h-5 w-5 hover:text-[#0096d4] transition-colors" />
              <LinkedinIcon className="h-5 w-5 hover:text-[#0096d4] transition-colors" />
              <InstagramIcon className="h-5 w-5 hover:text-[#0096d4] transition-colors" />
              <YoutubeIcon className="h-5 w-5 hover:text-[#0096d4] transition-colors" />
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-white">What We Do</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm">
                  Paym.me
                </Link>
              </li>
              <li>
                <Link to="#" className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm">
                  Realm by Rook
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Happenings</h3>
            <ul className="space-y-2">
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
                <Link to="/media-coverage" className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm">
                  Media Coverage
                </Link>
              </li>
              <li>
                <Link to="/letter-from-ceo" className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm">
                  Letter From the CEO
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-[#f5f5f5] hover:text-[#0096d4] transition-colors text-sm">
                  About Us
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
