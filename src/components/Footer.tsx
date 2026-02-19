import { Link } from "react-router-dom";
import { Linkedin, Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-4">KLAUN</h3>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed">
              Global Growth Intelligence & Verified Ecosystem Infrastructure
            </p>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider">Pages</h4>
            <nav className="flex flex-col gap-2">
              {["About", "Ecosystem", "Solutions", "Leadership", "Contact"].map((page) => (
                <Link key={page} to={`/${page.toLowerCase()}`} className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
                  {page}
                </Link>
              ))}
            </nav>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider">Solutions</h4>
            <ul className="flex flex-col gap-2 text-sm text-secondary-foreground/60">
              <li>Brand Growth Architecture</li>
              <li>Verified Performance Marketing</li>
              <li>Experiential Marketing</li>
              <li>GTM Intelligence</li>
              <li>Startup Ecosystem</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider">Connect</h4>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/60 hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/60 hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/60 hover:text-primary transition-colors"><Youtube className="w-5 h-5" /></a>
              <a href="mailto:hello@klaun.com" className="text-secondary-foreground/60 hover:text-primary transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        {/* SEO Footer */}
        <div className="mt-16 pt-8 border-t border-secondary-foreground/10">
          <p className="text-xs text-secondary-foreground/40 leading-relaxed max-w-4xl">
            Klaun builds verified growth ecosystem infrastructure connecting brands, creators, platforms, and performance intelligence into a unified scalable revenue growth engine through strategic alliances, experiential activation, and verified performance systems.
          </p>
          <p className="mt-4 text-xs text-secondary-foreground/30">
            © {new Date().getFullYear()} Klaun. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
