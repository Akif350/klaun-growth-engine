import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import klaunLogo from "@/assets/klaun-logo.png";
import linkedinIcon from "@/assets/linkedin-icon.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Solutions", href: "#solutions" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

const SCROLL_THRESHOLD = 50;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
      const sections = navLinks.map((l) => l.href.slice(1));
      const scrollPos = window.scrollY + 150;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showSolidNav = isScrolled;

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSolidNav ? "bg-white shadow-sm border-b border-border" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-14 lg:h-16 px-4 sm:px-6">
        <button onClick={() => scrollTo("#home")} className="shrink-0 flex items-center hover:opacity-90 transition-opacity">
          <img
            src={klaunLogo}
            alt="KLAUN"
            className={`h-20 lg:h-24 w-auto object-contain transition-all duration-300 ${showSolidNav ? "" : "brightness-0 invert"}`}
          />
        </button>

        <nav className="hidden lg:flex items-center gap-3 xl:gap-5 2xl:gap-6 shrink min-w-0">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`text-sm xl:text-base font-medium transition-colors duration-200 whitespace-nowrap shrink-0 ${
                activeSection === link.href ? "text-primary" : showSolidNav ? "text-muted-foreground hover:text-primary" : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2 xl:gap-4 shrink-0">
          <a
            href="https://www.linkedin.com/showcase/klaun/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center hover:opacity-80 transition-opacity"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="h-6 w-6 xl:h-7 xl:w-7 object-contain" />
          </a>
          <button onClick={() => scrollTo("#contact")} className="shrink-0">
            <Button variant="cta" size="sm" className="text-xs xl:text-sm px-3 xl:px-4">
              Get Started
            </Button>
          </button>
        </div>

        <button className={`lg:hidden transition-colors ${showSolidNav ? "text-foreground" : "text-white"}`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <nav className="flex flex-col gap-1 p-6">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`py-3 text-sm font-medium text-left transition-colors border-b border-border ${activeSection === link.href ? "text-primary" : "text-muted-foreground"}`}
                >
                  {link.label}
                </button>
              ))}
              <button onClick={() => scrollTo("#contact")} className="mt-4">
                <Button variant="cta" className="w-full">
                  Get Started
                </Button>
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
