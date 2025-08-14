import { Linkedin, Instagram, Facebook } from "lucide-react";
import { useState } from "react";
import { PrivacyPolicyModal } from "./ui/PrivacyPolicyModal.tsx";

const Footer = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full"></div>
              </div>

              <div className="flex flex-col py-1">
                <span className="text-xl font-bold text-white leading-none tracking-wide">
                  FourSight
                </span>
                <span className="text-xs text-white/70 hidden sm:block">
                  Web Solutions
                </span>
              </div>
            </div>

            <p className="text-white/80 mb-6 max-w-md mt-4">
              Helping businesses come online with stunning, affordable websites.
              Your success is our vision.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/foursight"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-smooth"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/foursightech/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-smooth"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/foursightweb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-smooth"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsPrivacyOpen(true)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-white/80">
              <li>Website Design</li>
              <li>E-commerce Solutions</li>
              <li>SEO Optimization</li>
              <li>AI Integration</li>
              <li>Maintenance & Support</li>
            </ul>
          </div>
        </div>

        <hr className="border-white/20 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2025 FourSight. All rights reserved.
          </p>
          <p className="text-white/60 text-sm mt-2 md:mt-0">
            Made with ❤️ for businesses ready to grow online
          </p>
        </div>
      </div>

      {isPrivacyOpen && (
        <PrivacyPolicyModal onClose={() => setIsPrivacyOpen(false)} />
      )}
    </footer>
  );
};

export default Footer;
