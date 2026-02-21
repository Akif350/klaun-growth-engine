import { MapPin } from "lucide-react";
import instagramLogo from "@/assets/instagram-logo.png";
import youtubeLogo from "@/assets/youtube-logo.png";
import linkedinLogo from "@/assets/linkedin-icon.png";
import gmailLogo from "@/assets/gmail-logo.png";

const servicesColumn1 = [
  "Brand Growth Architecture",
  "Verified Performance Marketing",
  "Experiential Marketing",
  "GTM Intelligence & Market Expansion",
  "Startup Ecosystem & Fundraise",
];

const servicesColumn2 = [
  "Growth Intelligence Systems",
  "Strategic Alliances Infrastructure",
  "Performance Infrastructure",
  "Experiential Growth Systems",
  "Market Expansion Systems",
];

const servicesColumn3 = [
  "Consumer Behaviour Intelligence",
  "Geo-Market Opportunity Mapping",
  "AI-driven Targeting",
  "Fraud-resistant Acquisition",
  "Performance Intelligence Dashboards",
];

const servicesColumn4 = [
  "Creator Economy Activation",
  "Media Activation",
  "Demand Generation Loops",
  "Revenue Retention Ecosystems",
  "Growth Compounding Frameworks",
];

const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer-pattern text-secondary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 pointer-events-none" />
      <div className="container mx-auto px-6 py-12 lg:py-14 relative">
        {/* Top section - Services */}
        <div className="mb-10 lg:mb-12">
          <h3 className="font-heading text-xl lg:text-2xl font-bold mb-6 text-secondary-foreground">Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            <ul className="flex flex-col gap-2.5 text-sm text-secondary-foreground/85">
              {servicesColumn1.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <ul className="flex flex-col gap-2.5 text-sm text-secondary-foreground/85">
              {servicesColumn2.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <ul className="flex flex-col gap-2.5 text-sm text-secondary-foreground/85">
              {servicesColumn3.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <ul className="flex flex-col gap-2.5 text-sm text-secondary-foreground/85">
              {servicesColumn4.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section - About, Industries, Links, Get in Touch */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pt-8 border-t border-secondary-foreground/10">
          <div>
            <h4 className="font-heading font-bold text-base mb-3 text-secondary-foreground">About Us</h4>
            <p className="text-sm text-secondary-foreground/85 leading-relaxed">
              Global Growth Intelligence & Verified Ecosystem Infrastructure. We build verified growth ecosystem infrastructure connecting brands, creators, platforms, and performance intelligence.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-base mb-3 text-secondary-foreground">Industries</h4>
            <ul className="flex flex-col gap-2 text-sm text-secondary-foreground/85">
              <li>Consumer tech brands</li>
              <li>Startups scaling globally</li>
              <li>Platforms needing performance scale</li>
              <li>Creator economy ecosystems</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-base mb-3 text-secondary-foreground">Useful Links</h4>
            <nav className="flex flex-col gap-2 text-sm text-secondary-foreground/85">
              {["About", "Ecosystem", "Solutions", "Leadership", "Contact"].map((page) => (
                <button
                  key={page}
                  onClick={() => scrollTo(page.toLowerCase())}
                  className="text-left hover:text-primary transition-colors"
                >
                  {page === "About" ? "About Klaun" : page === "Contact" ? "Contact Us" : page}
                </button>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-heading font-bold text-base mb-3 text-secondary-foreground">Get in Touch</h4>
            <div className="flex flex-col gap-3 text-sm text-secondary-foreground/85">
              <a href="mailto:partners@klaun.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <img src={gmailLogo} alt="Gmail" className="w-5 h-5 shrink-0 object-contain" />
                partners@klaun.com
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                <span>
                  Head Quarter - Gurugram
                  <br />
                  Regional Office - Shimla , Bengaluru
                </span>
              </div>
              <div className="flex gap-3 mt-1">
                <a
                  href="https://www.linkedin.com/showcase/klaun/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <img src={linkedinLogo} alt="LinkedIn" className="w-6 h-6 object-contain" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <img src={instagramLogo} alt="Instagram" className="w-6 h-6 object-contain" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <img src={youtubeLogo} alt="YouTube" className="w-6 h-6 object-contain" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-secondary-foreground/10">
          <p className="text-xs text-secondary-foreground/50">© {new Date().getFullYear()} Klaun. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
