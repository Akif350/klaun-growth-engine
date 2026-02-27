import { MapPin, ArrowRight, ArrowUpRight } from "lucide-react";
import instagramLogo from "@/assets/instagram-logo.png";
import youtubeLogo from "@/assets/youtube-logo.png";
import linkedinLogo from "@/assets/linkedin-icon.png";
import gmailLogo from "@/assets/gmail-logo.png";

const solutionsColumn1 = [
  "Brand Foundation",
  "Strategic Partnership Canvas",
  "Platform Integration",
];

const solutionsColumn2 = [
  "Performance Intelligence",
  "Revenue Sustainability",
];

const Footer = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden footer-pattern text-secondary-foreground">

      {/* ── Deep layered background atmosphere ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[600px] h-[500px] rounded-full bg-primary/10 blur-[140px]" />
        <div className="absolute top-20 left-1/3 w-[300px] h-[200px] rounded-full bg-primary/8 blur-[80px]" />
        <div className="absolute -bottom-20 -right-20 w-[500px] h-[400px] rounded-full bg-primary/6 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "repeating-linear-gradient(135deg, hsl(var(--primary)) 0px, hsl(var(--primary)) 1px, transparent 1px, transparent 60px)",
          }}
        />
      </div>

      {/* ── Top red gradient rule ── */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />

      {/* ════════════════════════════════════
          HERO IDENTITY ROW
      ════════════════════════════════════ */}
      <div className="relative z-10 container mx-auto px-6 lg:px-14 pt-16 pb-12 border-b border-white/[0.07]">
        <div className="flex flex-col lg:flex-row lg:items-end gap-10 lg:justify-between">

          {/* LEFT — Brand wordmark + description */}
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-xl shadow-primary/40 shrink-0">
                <span className="font-heading font-black text-white text-lg leading-none">K</span>
                <div className="absolute inset-0 rounded-xl ring-2 ring-primary/50 ring-offset-2 ring-offset-transparent" />
              </div>
              <div>
                <span className="font-heading font-black text-white text-xl tracking-tight leading-none block">KLAUN</span>
                <span className="text-[9px] text-primary uppercase tracking-[0.3em] font-bold">Growth Infrastructure</span>
              </div>
            </div>
            <p className="text-white/45 text-sm leading-[1.8] max-w-[50ch]">
              Klaun builds verified growth ecosystem infrastructure connecting brands,
              creators, platforms, and performance intelligence into a unified scalable
              revenue growth engine through strategic alliances, experiential activation,
              and verified performance systems.
            </p>
          </div>

          {/* RIGHT — Stats + CTA */}
          <div className="flex items-stretch gap-0 shrink-0">
            <div className="px-8 py-5 border border-white/8 rounded-l-2xl bg-white/[0.03] text-center">
              <p className="font-heading text-4xl font-black text-white leading-none mb-1">
                500<span className="text-primary">+</span>
              </p>
              <p className="text-[9px] text-white/30 uppercase tracking-[0.2em] font-bold">Brands Served</p>
            </div>
            <div className="w-px bg-white/8" />
            <div className="px-8 py-5 border-y border-white/8 bg-white/[0.03] text-center">
              <p className="font-heading text-4xl font-black text-white leading-none mb-1">
                50<span className="text-primary">+</span>
              </p>
              <p className="text-[9px] text-white/30 uppercase tracking-[0.2em] font-bold">Team Members</p>
            </div>
            <div className="w-px bg-white/8" />
            <div
              className="px-7 py-5 border border-primary/30 rounded-r-2xl bg-primary/10 flex flex-col items-center justify-center gap-2 cursor-pointer group hover:bg-primary/20 transition-all duration-300"
              onClick={() => scrollTo("contact")}
            >
              <ArrowUpRight className="w-5 h-5 text-primary group-hover:rotate-45 transition-transform duration-300" />
              <span className="text-[9px] text-primary uppercase tracking-[0.2em] font-black whitespace-nowrap">Get Started</span>
            </div>
          </div>

        </div>
      </div>

      {/* ════════════════════════════════════
          4-COLUMN LINKS
      ════════════════════════════════════ */}
      <div className="relative z-10 container mx-auto px-6 lg:px-14 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.1fr_1fr_1fr_1.3fr] gap-10 lg:gap-8">

          {/* Solutions */}
          <div>
            <div className="flex items-center gap-2.5 mb-7">
              <div className="w-6 h-6 rounded-md bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-primary block" />
              </div>
              <h4 className="font-heading font-black text-[11px] uppercase tracking-[0.22em] text-white/70">Solutions</h4>
            </div>
            <ul>
              {[...solutionsColumn1, ...solutionsColumn2].map((item) => (
                <li key={item} className="group flex items-center gap-3 py-3 border-b border-white/[0.06] last:border-0 cursor-default">
                  <div className="w-0.5 h-4 bg-primary/20 rounded-full group-hover:bg-primary group-hover:h-5 transition-all duration-200 shrink-0" />
                  <span className="text-[13px] text-white/45 group-hover:text-white/85 transition-colors duration-200 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <div className="flex items-center gap-2.5 mb-7">
              <div className="w-6 h-6 rounded-md bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-primary block" />
              </div>
              <h4 className="font-heading font-black text-[11px] uppercase tracking-[0.22em] text-white/70">Industries</h4>
            </div>
            <ul>
              {[
                "Consumer tech brands",
                "Startups scaling globally",
                "Performance scale platforms",
                "Creator economy ecosystems",
              ].map((item) => (
                <li key={item} className="group flex items-center gap-3 py-3 border-b border-white/[0.06] last:border-0 cursor-default">
                  <div className="w-0.5 h-4 bg-primary/20 rounded-full group-hover:bg-primary group-hover:h-5 transition-all duration-200 shrink-0" />
                  <span className="text-[13px] text-white/45 group-hover:text-white/85 transition-colors duration-200 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigate */}
          <div>
            <div className="flex items-center gap-2.5 mb-7">
              <div className="w-6 h-6 rounded-md bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-primary block" />
              </div>
              <h4 className="font-heading font-black text-[11px] uppercase tracking-[0.22em] text-white/70">Navigate</h4>
            </div>
            <nav>
              {["About", "Ecosystem", "Solutions", "Leadership", "Contact"].map((page) => (
                <button
                  key={page}
                  onClick={() => scrollTo(page.toLowerCase())}
                  className="group w-full flex items-center gap-3 py-3 border-b border-white/[0.06] last:border-0 text-left"
                >
                  <div className="w-0.5 h-4 bg-primary/20 rounded-full group-hover:bg-primary group-hover:h-5 transition-all duration-200 shrink-0" />
                  <span className="text-[13px] text-white/45 group-hover:text-white/85 transition-colors duration-200 font-medium flex-1">
                    {page === "About" ? "About Klaun" : page === "Contact" ? "Contact Us" : page}
                  </span>
                  <ArrowRight className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200 shrink-0" />
                </button>
              ))}
            </nav>
          </div>

          {/* Get in Touch */}
          <div>
            <div className="flex items-center gap-2.5 mb-7">
              <div className="w-6 h-6 rounded-md bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-primary block" />
              </div>
              <h4 className="font-heading font-black text-[11px] uppercase tracking-[0.22em] text-white/70">Get in Touch</h4>
            </div>

            <div className="space-y-3 mb-7">
              {/* Email card */}
              <a
                href="mailto:partners@klaun.com"
                className="group relative flex items-center gap-3.5 p-4 rounded-2xl border border-white/8 bg-white/[0.03] hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
                <div className="w-9 h-9 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/40 transition-all duration-300">
                  <img src={gmailLogo} alt="Gmail" className="w-4 h-4 object-contain" />
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] text-white/25 uppercase tracking-[0.2em] font-bold mb-0.5">Email Us</p>
                  <p className="text-xs text-white/60 group-hover:text-white/90 transition-colors duration-200 font-medium truncate">partners@klaun.com</p>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-primary opacity-0 group-hover:opacity-100 ml-auto shrink-0 transition-all duration-300" />
              </a>

              {/* Location card */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl border border-white/8 bg-white/[0.03]">
                <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-primary/70" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[9px] text-primary uppercase tracking-[0.2em] font-black">HQ</span>
                    <span className="text-xs text-white/55 font-medium">Gurugram</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] text-white/30 uppercase tracking-[0.2em] font-black">Regional</span>
                    <span className="text-xs text-white/40">Shimla · Bengaluru</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div>
              <p className="text-[9px] text-white/20 uppercase tracking-[0.25em] font-black mb-3">Follow Us</p>
              <div className="flex gap-2.5">
                {[
                  { href: "https://www.linkedin.com/showcase/klaun/", img: linkedinLogo, label: "LinkedIn" },
                  { href: "https://instagram.com", img: instagramLogo, label: "Instagram" },
                  { href: "https://youtube.com", img: youtubeLogo, label: "YouTube" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-1 transition-all duration-300"
                  >
                    <img src={s.img} alt={s.label} className="w-5 h-5 object-contain" />
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ════════════════════════════════════
          COPYRIGHT STRIP
      ════════════════════════════════════ */}
      <div className="relative z-10 border-t border-white/[0.07]">
        <div className="h-px bg-gradient-to-r from-primary/40 via-primary/15 to-transparent" />
        <div className="container mx-auto px-6 lg:px-14 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">

            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-md bg-primary flex items-center justify-center shrink-0">
                <span className="font-heading font-black text-white text-[9px]">K</span>
              </div>
              <p className="text-[11px] text-white/20 font-medium">
                © {new Date().getFullYear()} Klaun. All rights reserved.
              </p>
            </div>

            <div className="flex items-center gap-5 text-[11px] text-white/20">
              <span className="hover:text-white/50 transition-colors cursor-pointer">Privacy Policy</span>
              <span className="w-px h-3 bg-white/10 block" />
              <span className="hover:text-white/50 transition-colors cursor-pointer">Terms of Service</span>
              <span className="w-px h-3 bg-white/10 block" />
              <span className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                All Systems Operational
              </span>
            </div>

          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;