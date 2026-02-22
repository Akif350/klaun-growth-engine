import Marquee from "react-fast-marquee";
import { Button } from "@/components/ui/button";
import TypewriterText from "@/components/TypewriterText";
import AnimatedSection from "@/components/AnimatedSection";
import heroBanner from "@/assets/hero-growth-chart.png";
import contactImage from "@/assets/contact-image.png";
import aveshSharmaImage from "@/assets/avesh-sharma.png";
import premBhimavaramImage from "@/assets/prem-bhimavaram.png";
import ashwaniChauhanImage from "@/assets/ashwani-chauhan.png";
import aboutRobotImage from "@/assets/about-top-new.png";
import aboutBottomImage from "@/assets/about-bottom-new.png";
import whyKlaunBanner from "@/assets/why-klaun-banner.png";
import visionCardImage from "@/assets/vision-card.png";
import missionCardImage from "@/assets/mission-card.png";
import klaunFlowerImage from "@/assets/klaun-flower.png";
import whyKlaunRobot from "@/assets/why-klaun-robot.png";
import robotCircle from "@/assets/robot-circle.png";
import topLeftWave from "@/assets/top-left-wave.png";
import strategicAlliancesImage from "@/assets/strategic-alliances.png";
import growthIntelligenceImage from "@/assets/growth-intelligence.png";
import performanceInfraImage from "@/assets/performance-infra.png";
import experientialGrowthImage from "@/assets/experiential-growth.png";
import marketExpansionImage from "@/assets/market-expansion.png";
import growthSolutionsBanner from "@/assets/growth-solutions-banner-2.png";
import consumerTechImage from "@/assets/consumer-tech.png";
import startupsGlobalImage from "@/assets/startups-global.png";
import performanceScaleImage from "@/assets/performance-scale.png";
import creatorEconomyImage from "@/assets/creator-economy.png";
import mentorVineetImage from "@/assets/mentor-vineet.png";
import mentorVivekImage from "@/assets/mentor-vivek.png";
import assocXiaomi from "@/assets/assoc-xiaomi.png";
import assocMarsh from "@/assets/assoc-marsh.png";
import assocStartupLab from "@/assets/assoc-startuplab.png";
import assocTremis from "@/assets/assoc-tremis.png";
import {
  ArrowRight,
  BarChart3,
  Globe,
  Zap,
  Shield,
  Users,
  Rocket,
  Target,
  TrendingUp,
  Network,
  Layers,
  CheckCircle,
  Compass,
  Map,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const heroMarqueeItems = [
  { icon: Rocket, label: "Consumer tech brands" },
  { icon: TrendingUp, label: "Startups scaling globally" },
  { icon: Target, label: "Platforms needing performance scale" },
  { icon: Users, label: "Creator economy ecosystems" },
  { icon: BarChart3, label: "Growth Intelligence" },
  { icon: Globe, label: "Strategic Ecosystems" },
];

const ecosystemLayers = [
  {
    icon: BarChart3,
    title: "Growth Intelligence Layer",
    items: ["Consumer Behaviour Intelligence", "Geo-Market Opportunity Mapping", "AI-driven targeting architecture", "Fraud-resistant acquisition systems", "Performance intelligence dashboards"],
  },
  {
    icon: Globe,
    title: "Strategic Ecosystem Layer",
    items: ["Strategic Alliances (B2B, B2C)", "Brand GTM architecture", "Fundraise & Startup ecosystem integration", "Founder ecosystem partnerships", "Cross-market expansion systems"],
  },
  {
    icon: Zap,
    title: "Execution Intelligence Layer",
    items: ["Performance Marketing", "Experiential Marketing", "Creator Economy Systems", "Media Activation", "Marketplace Growth Engines"],
  },
  {
    icon: Shield,
    title: "Sustainability Layer",
    items: ["Brand lifetime value growth", "Demand generation loops", "Revenue retention ecosystems", "Growth compounding frameworks"],
  },
];

const ecosystemSections = [
  {
    icon: Network,
    title: "Strategic Alliances Infrastructure",
    desc: "Building verified partnerships across B2B and B2C ecosystems, enabling brands to access new markets through trusted alliance networks.",
    tag: "Klaun",
    image: strategicAlliancesImage,
  },
  {
    icon: BarChart3,
    title: "Growth Intelligence Systems",
    desc: "AI-driven consumer behavior intelligence, geo-market mapping, fraud-resistant acquisition, and real-time performance dashboards.",
    tag: "Klaun",
    image: growthIntelligenceImage,
  },
  {
    icon: Zap,
    title: "Performance Infrastructure",
    desc: "Verified performance marketing across paid, affiliate, and organic channels with full-funnel attribution and fraud-free traffic.",
    tag: "Klaun",
    image: performanceInfraImage,
  },
  {
    icon: Globe,
    title: "Experiential Growth Systems",
    desc: "Creator economy activation, experiential marketing, media partnerships, and community-driven growth engines.",
    tag: "Klaun",
    image: experientialGrowthImage,
  },
  {
    icon: TrendingUp,
    title: "Market Expansion Systems",
    desc: "Cross-market GTM architecture, geo-expansion playbooks, and localized growth strategies for new territories.",
    tag: "Klaun",
    image: marketExpansionImage,
  },
];

const growthSolutionsImage = growthSolutionsBanner;

const solutions = [
  { icon: Layers, title: "Brand Growth Architecture", desc: "End-to-end growth ecosystem design from market diagnosis to scalable revenue architecture." },
  { icon: CheckCircle, title: "Verified Performance Marketing", desc: "Fraud-resistant, verified traffic acquisition through CPI/CPA/CPS frameworks with full transparency." },
  { icon: Compass, title: "Experiential Marketing Systems", desc: "Creator economy activation, experiential campaigns, and community-led growth strategies." },
  { icon: Map, title: "GTM Intelligence & Market Expansion", desc: "Go-to-market architecture with geo-market intelligence and cross-border expansion playbooks." },
  { icon: Rocket, title: "Startup Ecosystem & Fundraise Enablement", desc: "Strategic integration into startup ecosystems, founder partnerships, and growth-stage acceleration." },
];

const workWith = [
  { icon: Rocket, label: "Consumer tech brands", image: consumerTechImage },
  { icon: TrendingUp, label: "Startups scaling globally", image: startupsGlobalImage },
  { icon: Target, label: "Platforms needing performance scale", image: performanceScaleImage },
  { icon: Users, label: "Creator economy ecosystems", image: creatorEconomyImage },
];

const engagementSteps = [
  { step: "01", title: "Diagnosis", desc: "Deep analysis of your brand's growth challenges and market position." },
  { step: "02", title: "Architecture", desc: "Custom ecosystem blueprint designed for your specific growth trajectory." },
  { step: "03", title: "Activation", desc: "Strategic execution across all verified growth channels." },
  { step: "04", title: "Scale", desc: "Compounding growth through intelligent systems and alliances." },
];

const leaders = [
  { name: "Avesh Sharma", role: "Founder & Chief Ecosystem Officer", association: "Leadership experience across experiential ecosystems, strategic partnerships, and global brand activation including Xiaomi, Marsh, and experiential media platforms.", tags: "Strategic Alliances | Enterprise Partnerships | Experiential Growth", image: aveshSharmaImage },
  { name: "Prem Bhimavaram", role: "Director, Growth Intelligence & Performance Infrastructure", association: "Global performance acquisition leadership across gaming, fintech, ecommerce, travel, education, and platform growth ecosystems.", tags: "Performance Infrastructure | Acquisition Intelligence | Growth Engineering", image: premBhimavaramImage },
  { name: "Ashwani Chauhan", role: "Director, Product & Martech Systems", association: "Product innovation leadership across growth technology frameworks, performance infrastructure systems, and scalable ecosystem product integration.", tags: "Product Innovation | Ecosystem Technology | Growth Frameworks", image: ashwaniChauhanImage },
];

const mentors = [
  { name: "Vineet Singh", role: "Strategic Brand & Growth Advisor", desc: "Advising enterprise growth ecosystems, digital transformation, and scalable brand expansion across digital-first organizations and growth-stage platforms.", image: mentorVineetImage },
  {
    name: "Vivek Jhorar",
    role: "Strategic Partnerships & Investment Ecosystem Advisor",
    desc: "Expertise in institutional partnerships, investment ecosystems, cross-market growth enablement, and alliance-driven expansion frameworks supporting startup and enterprise growth corridors.",
    image: mentorVivekImage,
  },
];

type FormType = "enterprise" | "partnership" | "startup";
const formTitles: Record<FormType, string> = {
  enterprise: "Enterprise Growth Enquiry",
  partnership: "Strategic Partnership Enquiry",
  startup: "Startup Ecosystem Onboarding",
};

const Index = () => {
  const [activeForm, setActiveForm] = useState<FormType>("enterprise");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [engagementModelHovered, setEngagementModelHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [leadershipHovered, setLeadershipHovered] = useState(false);
  const [stats, setStats] = useState({ projects: 0, team: 0 });
  const statsRef = useRef<HTMLDivElement | null>(null);
  const engagementRef = useRef<HTMLDivElement | null>(null);
  const leadershipRef = useRef<HTMLDivElement | null>(null);
  const statsInView = useInView(statsRef, { amount: 0.35 });
  const engagementInView = useInView(engagementRef, { amount: 0.2, once: true });
  const leadershipInView = useInView(leadershipRef, { amount: 0.2, once: true });

  useEffect(() => {
    let rafId = 0;
    const durationMs = 900;
    const targets = { projects: 500, team: 50 };

    const animate = (startTime: number) => {
      const tick = (now: number) => {
        const progress = Math.min((now - startTime) / durationMs, 1);
        setStats({
          projects: Math.floor(targets.projects * progress),
          team: Math.floor(targets.team * progress),
        });
        if (progress < 1) {
          rafId = requestAnimationFrame(tick);
        }
      };
      rafId = requestAnimationFrame(tick);
    };

    if (statsInView) {
      setStats({ projects: 0, team: 0 });
      animate(performance.now());
    } else {
      setStats({ projects: 0, team: 0 });
    }

    return () => cancelAnimationFrame(rafId);
  }, [statsInView]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const legacyMediaQuery = mediaQuery as MediaQueryList & {
      addListener?: (listener: () => void) => void;
      removeListener?: (listener: () => void) => void;
    };
    const updateIsMobile = () => setIsMobile(mediaQuery.matches);
    updateIsMobile();
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", updateIsMobile);
      return () => mediaQuery.removeEventListener("change", updateIsMobile);
    }
    if (legacyMediaQuery.addListener) {
      legacyMediaQuery.addListener(updateIsMobile);
      return () => legacyMediaQuery.removeListener?.(updateIsMobile);
    }
    return () => undefined;
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const company = String(formData.get("company") || "").trim();
    const stage = String(formData.get("stage") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const enquiryType = formTitles[activeForm];

    const subject = `${enquiryType}${name ? ` - ${name}` : ""}`;
    const body = [
      `Enquiry Type: ${enquiryType}`,
      `Name: ${name || "-"}`,
      `Email: ${email || "-"}`,
      `Phone: ${phone || "-"}`,
      `Company / Brand: ${company || "-"}`,
      stage ? `Stage: ${stage}` : null,
      "",
      "Message:",
      message || "-",
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:partners@klaun.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    setTimeout(() => {
      setIsSubmitting(false);
      toast({ title: "Email Draft Ready", description: "Please send the email from your mail app to complete the enquiry." });
      form.reset();
    }, 300);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">
        <img src={heroBanner} alt="Klaun growth ecosystem intelligence" className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-overlay" />
        <div className="relative z-10 flex-1 flex flex-col justify-center items-center px-6 max-w-6xl mx-auto w-full pt-20 sm:pt-24 pb-14 sm:pb-16">
          <div className="text-center w-full">
            <TypewriterText />
            <p className="mt-5 sm:mt-6 text-primary-foreground text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto font-medium leading-relaxed w-[90%] sm:w-[60%]">
              Klaun is a Global Growth Intelligence & Verified Ecosystem Infrastructure company enabling brands to scale sustainably.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => scrollTo("contact")} className="btn-hero-shine inline-flex">
                <Button variant="hero" size="lg" className="text-base px-8 py-6 sm:px-8 sm:py-6 md:px-10 md:py-6">
                  Build Your Growth Ecosystem
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </button>
              <button onClick={() => scrollTo("about")}>
                <Button variant="heroOutline" size="lg" className="text-base px-8 py-6">
                  Learn More
                </Button>
              </button>
            </div>
          </div>
        </div>
        <div className="relative z-10 absolute bottom-0 left-0 right-0 w-full py-4 bg-[hsl(var(--hero-overlay)/0.3)] backdrop-blur-sm">
          <Marquee speed={40} pauseOnHover gradient={false}>
            {[...heroMarqueeItems, ...heroMarqueeItems].map((item, i) => (
              <div key={i} className="flex items-center gap-4 mx-6 px-4 py-2 rounded-lg bg-white/10 text-primary-foreground whitespace-nowrap">
                <item.icon className="w-5 h-5 shrink-0 text-primary" />
                <span className="font-medium text-sm sm:text-base">{item.label}</span>
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      <div className="philosophy-strip">Solve → Serve → Scale → Smile</div>

      {/* What is Klaun */}
      <section id="about" className="section-padding bg-background scroll-mt-20 relative overflow-hidden pb-10 sm:pb-12">
        <div className="about-dot-wave" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-3 items-start">
            <AnimatedSection>
              <div className="bg-background/95 rounded-2xl p-6 sm:p-8 shadow-sm">
                <div className="inline-flex items-center gap-2 bg-muted text-foreground text-xs uppercase tracking-wider font-semibold px-3 py-1 rounded-full mb-4">
                  About Klaun
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  We provide intelligent growth ecosystem solutions.
                </h2>
                <p className="text-foreground text-base leading-relaxed mb-6 max-w-xl">
                  Klaun is not an agency. Klaun is an intelligence-driven ecosystem infrastructure designed to diagnose, engineer, and scale sustainable growth for brands through strategic alliances, performance intelligence, experiential activation, and verified growth systems.
                  <br />
                  <br />
                  Inspired by the metaphor of a performer who prepares deeply before stepping on stage to make the audience smile, Klaun operates with one simple mission:
                  <br />
                  Solve → Serve → Scale → Smile
                  <br />
                  <br />
                  We do not sell services. We design growth ecosystems tailored to each brand's problem statement, consumer behavior, and long-term market positioning.
                </p>
                <button onClick={() => scrollTo("contact")}>
                  <Button variant="heroOutline" size="lg" className="text-sm px-6 py-4">
                    Read More
                  </Button>
                </button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="max-w-[420px] space-y-5 lg:-mt-8">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border">
                  <img
                    src={aboutRobotImage}
                    alt="Growth intelligence technology"
                    className="w-full h-[240px] sm:h-[280px] object-cover"
                  />
                  <button
                    type="button"
                    className="absolute -bottom-6 left-6 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary"
                    aria-label="Play"
                  >
                    <span className="ml-0.5">▶</span>
                  </button>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl border border-border">
                  <img
                    src={aboutBottomImage}
                    alt="Strategic planning session"
                    className="w-full h-[200px] sm:h-[220px] object-cover"
                  />
                </div>
                <div ref={statsRef} className="bg-white rounded-2xl shadow-lg border border-border px-6 py-4 flex items-center gap-6 mt-2">
                  <div>
                    <p className="text-3xl font-heading font-bold text-primary">{stats.projects}+</p>
                    <p className="text-sm text-foreground">Completed Work</p>
                  </div>
                  <div className="h-10 w-px bg-border" />
                  <div>
                    <p className="text-3xl font-heading font-bold text-primary">{stats.team}+</p>
                    <p className="text-sm text-foreground">Experienced Team</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.15}>
            <div className="mt-6 hidden" />
          </AnimatedSection>
        </div>
      </section>

      {/* Why Klaun Exists */}
      <section className="section-padding bg-muted relative overflow-visible pb-10 sm:pb-12">
        <div className="why-klaun-bg" />
        <img
          src={klaunFlowerImage}
          alt="Klaun floral accent"
          className="absolute -top-6 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 md:w-[28rem] pointer-events-none z-20"
        />
        <div className="container mx-auto max-w-none relative z-10 flex flex-col lg:flex-row gap-6 lg:gap-10 items-center">
          <AnimatedSection>
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border bg-white w-full max-w-[45vw] mr-auto">
              <img
                src={whyKlaunBanner}
                alt="Growth strategy visualization"
                className="w-full h-[280px] sm:h-[320px] md:h-[360px] object-cover object-right opacity-45 brightness-75"
              />
              <div className="absolute inset-0 flex items-center justify-center px-6 sm:px-10">
                <div className="max-w-3xl text-center">
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Why Klaun Exists</h2>
                  <p className="text-foreground text-base md:text-lg leading-relaxed mb-4">
                    Traditional models suffer from fragmented agencies delivering isolated outputs, fraudulent traffic and low-quality performance models, absence of consumer-behavior intelligence, lack of cross-ecosystem alliances, and zero accountability across lifecycle growth.
                  </p>
                  <p className="text-foreground text-base md:text-lg leading-relaxed">
                    Klaun fills the gap by creating a verified ecosystem layer between brands, platforms, creators, and performance channels — ensuring trust, intelligence, and scalable revenue architecture.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="w-full max-w-[55vw] ml-auto flex justify-end relative lg:pl-4">
              <img
                src={robotCircle}
                alt="Tech ring background"
                className="absolute -z-10 w-[360px] sm:w-[420px] md:w-[480px] opacity-80 spin-slow ring-red"
              />
              <img
                src={whyKlaunRobot}
                alt="Klaun AI assistant"
                className="max-h-[420px] w-auto object-contain"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-background relative overflow-hidden vision-mission-bg pt-8 sm:pt-10">
        <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-8 relative z-10">
          <AnimatedSection>
            <div className="relative rounded-2xl border border-primary/20 bg-background shadow-lg shadow-black/5 overflow-hidden h-full min-h-[260px] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/40">
              <img
                src={visionCardImage}
                alt="Vision background"
                className="absolute inset-0 w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-black/35" />
              <div className="relative z-10 p-7 md:p-9">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4 uppercase text-center">VISION</h2>
                <p className="text-foreground leading-relaxed">
                  To become the world's most trusted growth ecosystem infrastructure — where every brand, creator, and platform scales through verified, intelligent, and sustainable systems.
                </p>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="relative rounded-2xl border border-primary/20 bg-background shadow-lg shadow-black/5 overflow-hidden h-full min-h-[260px] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/40">
              <img
                src={missionCardImage}
                alt="Mission background"
                className="absolute inset-0 w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-black/35" />
              <div className="relative z-10 p-7 md:p-9">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4 uppercase text-center">MISSION</h2>
                <p className="text-foreground leading-relaxed">
                  <span className="block text-center font-semibold text-foreground">Solve → Serve → Scale → Smile.</span>
                  We diagnose growth challenges, architect custom ecosystems, activate verified channels, and compound sustainable revenue for every partner.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Ecosystem Architecture */}
      <section id="ecosystem" className="bg-muted scroll-mt-20 py-8 sm:py-10 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute left-0 top-0 w-[260px] sm:w-[320px] md:w-[380px] h-[180px] sm:h-[220px] md:h-[260px] opacity-25 bg-primary"
          style={{
            maskImage: `url(${topLeftWave})`,
            WebkitMaskImage: `url(${topLeftWave})`,
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskSize: "contain",
            WebkitMaskSize: "contain",
            maskPosition: "left top",
            WebkitMaskPosition: "left top",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute right-0 top-0 w-[260px] sm:w-[320px] md:w-[380px] h-[180px] sm:h-[220px] md:h-[260px] opacity-25 bg-primary scale-x-[-1]"
          style={{
            maskImage: `url(${topLeftWave})`,
            WebkitMaskImage: `url(${topLeftWave})`,
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskSize: "contain",
            WebkitMaskSize: "contain",
            maskPosition: "left top",
            WebkitMaskPosition: "left top",
          }}
        />
        <div className="container mx-auto relative z-10">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">Ecosystem Architecture</h2>
            <p className="text-foreground text-center mb-16 max-w-2xl mx-auto">Four interconnected layers powering sustainable brand growth.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4">
            {ecosystemLayers.map((layer, i) => (
              <AnimatedSection key={layer.title} delay={i * 0.1}>
                <div
                  className={`bg-white rounded-2xl p-7 card-hover border border-border/60 h-full w-full max-w-[380px] shadow-sm relative ${
                    i % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                  }`}
                >
                  <div className="absolute -top-4 right-4 w-10 h-10 rounded-full bg-muted text-foreground text-sm font-semibold flex items-center justify-center shadow-sm">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="font-heading text-xl font-semibold text-card-foreground">{layer.title}</h3>
                    <layer.icon className="w-9 h-9 text-primary shrink-0" />
                  </div>
                  <ul className="space-y-2">
                    {layer.items.map((item) => (
                      <li key={item} className="text-sm text-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Infrastructure Systems */}
      <section className="bg-background py-8 sm:py-10">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-4">Ecosystem Infrastructure</h2>
            <p className="text-foreground text-center mb-12">Five interconnected systems forming the backbone of sustainable brand growth.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-x-4">
            {ecosystemSections.slice(0, 3).map((section, i) => (
              <AnimatedSection key={section.title} delay={i * 0.1}>
                <div className="bg-white rounded-3xl border border-border/60 shadow-sm overflow-hidden h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative h-44 bg-muted/60">
                    {section.image ? (
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted" />
                    )}
                    <span className="absolute bottom-3 right-3 rounded-full bg-white/95 text-primary text-xs font-semibold px-3 py-1.5 shadow-md border border-primary/20">
                      {section.tag}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                      {section.title}
                    </h3>
                    <p className="text-sm text-foreground leading-relaxed">{section.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="mt-6 flex flex-col md:flex-row items-stretch justify-center gap-5">
            {ecosystemSections.slice(3).map((section, i) => (
              <AnimatedSection key={section.title} delay={(i + 3) * 0.1}>
                <div className="bg-white rounded-3xl border border-border/60 shadow-sm overflow-hidden h-full w-full max-w-[360px] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative h-44 bg-muted/60">
                    {section.image ? (
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted" />
                    )}
                    <span className="absolute bottom-3 right-3 rounded-full bg-white/95 text-primary text-xs font-semibold px-3 py-1.5 shadow-md border border-primary/20">
                      {section.tag}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                      {section.title}
                    </h3>
                    <p className="text-sm text-foreground leading-relaxed">{section.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="bg-muted scroll-mt-20 py-8 sm:py-10">
        <div className="container mx-auto max-w-6xl">
          <div className="relative h-32 sm:h-40 md:h-48 rounded-3xl border border-border/60 bg-muted/40 overflow-hidden mb-2">
            {growthSolutionsImage ? (
              <img
                src={growthSolutionsImage}
                alt="Growth solutions visual"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-muted/60" />
            )}
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center text-center px-6 sm:px-10">
              <div className="max-w-3xl">
                <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                  Growth Solutions
                </h2>
                <p className="text-white/90 text-sm sm:text-base md:text-lg">
                  Tailored growth systems designed to diagnose, architect, activate, and scale.
                </p>
              </div>
            </div>
          </div>
          <Marquee speed={35} pauseOnHover gradient={false}>
            {[...solutions, ...solutions].map((sol, i) => (
              <div key={`${sol.title}-${i}`} className="mx-4 w-[280px]">
                <div className="bg-white rounded-3xl border border-border/60 shadow-sm p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="font-heading text-lg font-semibold text-foreground">{sol.title}</h3>
                    <sol.icon className="w-9 h-9 text-primary shrink-0" />
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">{sol.desc}</p>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="bg-background py-8 sm:py-10 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute left-0 top-0 w-[220px] sm:w-[280px] md:w-[340px] h-[150px] sm:h-[190px] md:h-[220px] opacity-25 bg-primary"
          style={{
            maskImage: `url(${topLeftWave})`,
            WebkitMaskImage: `url(${topLeftWave})`,
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskSize: "contain",
            WebkitMaskSize: "contain",
            maskPosition: "left top",
            WebkitMaskPosition: "left top",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute right-0 top-0 w-[220px] sm:w-[280px] md:w-[340px] h-[150px] sm:h-[190px] md:h-[220px] opacity-25 bg-primary scale-x-[-1]"
          style={{
            maskImage: `url(${topLeftWave})`,
            WebkitMaskImage: `url(${topLeftWave})`,
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskSize: "contain",
            WebkitMaskSize: "contain",
            maskPosition: "left top",
            WebkitMaskPosition: "left top",
          }}
        />
        <div className="container mx-auto relative z-10">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-16">Who We Work With</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workWith.map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 0.1}>
                <div className="text-center">
                  {"image" in item && item.image ? (
                    <img
                      src={item.image}
                      alt={item.label}
                      className="w-16 h-16 rounded-full object-cover mx-auto mb-3"
                    />
                  ) : (
                    <item.icon className="w-12 h-12 text-primary mx-auto mb-3" />
                  )}
                  <p className="text-xs font-heading font-semibold text-card-foreground">{item.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Model */}
      <section
        className="section-padding engagement-model-section text-secondary-foreground relative overflow-hidden cursor-default"
        onMouseEnter={() => {
          if (!isMobile) setEngagementModelHovered(true);
        }}
        onMouseLeave={() => {
          if (!isMobile) setEngagementModelHovered(false);
        }}
      >
        <div ref={engagementRef} className="container mx-auto relative z-10">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-16">Engagement Model</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {engagementSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: i < 2 ? -80 : 80 }}
                animate={engagementInView || engagementModelHovered || isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: i < 2 ? -80 : 80 }}
                transition={{ duration: 0.5, delay: engagementInView || engagementModelHovered || isMobile ? i * 0.1 : 0, ease: "easeOut" }}
                whileHover={{ scale: 1.03, y: -4, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.3)" }}
                className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 text-center transition-colors duration-300 hover:bg-white/10 hover:border-primary/40"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-primary bg-primary/10 mb-3">
                  <span className="text-xl font-heading font-bold text-primary">{step.step}</span>
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-secondary-foreground/70 text-xs leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section
        id="leadership"
        className="scroll-mt-20 cursor-default"
        onMouseEnter={() => setLeadershipHovered(true)}
        onMouseLeave={() => setLeadershipHovered(false)}
      >
        <div ref={leadershipRef} className="leadership-header pt-16 pb-24 lg:pb-32 px-6 text-center relative">
          <span className="inline-block px-4 py-1.5 rounded-md bg-secondary/90 text-secondary-foreground/90 text-xs font-semibold uppercase tracking-wider mb-6">
            Leadership
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Leadership Experience That{" "}
            <span className="border-b-2 border-white pb-1">Speaks Volumes</span>
          </h2>
          <p className="text-white/90 text-base lg:text-lg max-w-2xl mx-auto">
            We measure success through long-term partnerships and measurable outcomes. Leadership experience across global brands and ecosystem platforms.
          </p>
        </div>

        <div className="container mx-auto px-6 -mt-16 lg:-mt-20 relative z-10 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leaders.map((leader, i) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 50, scale: 0.92 }}
                animate={leadershipInView || leadershipHovered ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.92 }}
                transition={{ duration: 0.6, delay: leadershipInView || leadershipHovered ? i * 0.15 : 0, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="bg-white rounded-2xl shadow-xl shadow-black/10 border border-border p-6 flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 hover:border-primary/30">
                  <div className="flex-shrink-0 flex justify-center mb-4">
                    <div className="w-24 h-24 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                      {"image" in leader && leader.image ? (
                        <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                      ) : (
                        <span className="font-heading text-2xl font-bold text-primary">
                          {leader.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 relative">
                    <span className="absolute -top-1 right-0 text-5xl font-serif text-primary/10 leading-none select-none">"</span>
                    <p className="text-foreground text-sm leading-relaxed pr-6 relative z-10">
                      {leader.association}
                    </p>
                    <p className="text-xs text-foreground mt-2 tracking-wide">{leader.tags}</p>
                    <p className="font-heading font-bold text-primary mt-4">{leader.name}</p>
                    <p className="text-foreground text-xs mt-0.5">{leader.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-background py-12">
          <div className="container mx-auto px-6 max-w-5xl">
            <AnimatedSection>
              <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground text-center mb-6">
                Strategic Mentors
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
              {mentors.map((mentor, i) => (
                <motion.div
                  key={mentor.name}
                  initial={{ opacity: 0, y: 30, scale: 0.96 }}
                  animate={leadershipInView || leadershipHovered ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.96 }}
                  transition={{ duration: 0.5, delay: leadershipInView || leadershipHovered ? i * 0.12 : 0, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="bg-white rounded-2xl border border-border p-5 shadow-md shadow-black/5 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/30">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                        {"image" in mentor && mentor.image ? (
                          <img src={mentor.image} alt={mentor.name} className="w-full h-full object-cover" />
                        ) : (
                          <span className="font-heading text-xl font-bold text-primary">
                            {mentor.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        )}
                      </div>
                      <div>
                        <p className="font-heading font-semibold text-foreground">{mentor.name}</p>
                        <p className="text-xs text-foreground/70">{mentor.role}</p>
                      </div>
                    </div>
                    <p className="text-sm text-foreground mt-4 leading-relaxed">{mentor.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-background py-10">
          <div className="container mx-auto text-center">
            <AnimatedSection>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-8">Leadership Experience & Ecosystem Associations</h2>
              <div className="flex flex-wrap justify-center gap-6 items-center text-foreground">
                {[
                  { label: "Xiaomi", image: assocXiaomi },
                  { label: "Marsh", image: assocMarsh },
                  { label: "StartupLab", image: assocStartupLab },
                  { label: "Tremis", image: assocTremis },
                ].map((brand) => (
                  <div key={brand.label} className="flex flex-col items-center gap-2">
                    <div className="w-20 h-20 rounded-xl border border-primary/30 bg-primary/5 shadow-md shadow-primary/10 ring-1 ring-primary/15 flex items-center justify-center transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20">
                      {"image" in brand && brand.image ? (
                        <img src={brand.image} alt={brand.label} className="max-h-12 max-w-[60px] object-contain" />
                      ) : (
                        <span className="text-sm font-heading font-semibold text-foreground">{brand.label}</span>
                      )}
                    </div>
                    <span className="text-xs font-heading font-semibold text-foreground">{brand.label}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-3xl">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Growth Ecosystem?</h2>
            <p className="text-primary-foreground/80 mb-10 text-lg">Let's diagnose your growth challenges and architect a verified, scalable ecosystem for your brand.</p>
            <button onClick={() => scrollTo("contact")}>
              <Button variant="heroOutline" size="lg" className="text-base px-10 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Start a Conversation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-20 bg-background py-8 sm:py-10">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24 max-w-[1400px]">
          <div className="rounded-2xl border-2 border-primary/40 p-4 sm:p-6 lg:p-8 bg-background shadow-lg relative overflow-hidden">
            <AnimatedSection className="text-center pl-6 sm:pl-10 lg:pl-16 relative z-10">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-1.5">Contact Us</h2>
              <p className="text-foreground text-sm lg:text-base mb-3 max-w-2xl mx-auto text-center">
                Have a project in mind or need expert guidance on growth ecosystem solutions?<br />
                Our team is here to help you turn ideas into scalable, intelligent solutions.
              </p>
            </AnimatedSection>
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 items-stretch relative z-10">
            {/* Form Container */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative overflow-hidden flex-1 min-w-0 rounded-2xl border-2 border-primary/40 bg-gradient-to-br from-card via-card to-primary/5 shadow-xl shadow-black/5 p-2.5 sm:p-4 lg:p-5 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/60 transition-all duration-500"
            >
              <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-primary/5 blur-3xl" />
              <div className="absolute -bottom-12 -left-12 w-32 h-32 rounded-full bg-primary/5 blur-2xl" />
              <div className="relative z-10">
                <div className="flex flex-nowrap gap-2 mb-2 overflow-x-auto pb-1">
                  {(Object.keys(formTitles) as FormType[]).map((type) => (
                    <motion.button
                      key={type}
                      onClick={() => setActiveForm(type)}
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 ${
                        activeForm === type ? "bg-primary text-primary-foreground" : "bg-muted text-foreground hover:bg-accent"
                      }`}
                    >
                      {formTitles[type]}
                    </motion.button>
                  ))}
                </div>
                <form onSubmit={handleSubmit} className="space-y-2.5">
                  <input type="hidden" name="enquiryType" value={formTitles[activeForm]} />
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    <div className="space-y-1">
                      <label className="block text-sm font-semibold text-foreground">Name</label>
                      <Input
                        name="name"
                        placeholder="Name"
                        required
                        className="h-9 text-sm rounded-full border border-input bg-white px-3.5 transition-all duration-300 focus:ring-2 focus:ring-primary/30 focus:border-primary/50 placeholder:text-foreground"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-sm font-semibold text-foreground">Email</label>
                      <Input
                        name="email"
                        placeholder="Email"
                        type="email"
                        required
                        className="h-9 text-sm rounded-full border border-input bg-white px-3.5 transition-all duration-300 focus:ring-2 focus:ring-primary/30 focus:border-primary/50 placeholder:text-foreground"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="block text-sm font-semibold text-foreground">Phone Number</label>
                    <Input
                      name="phone"
                      placeholder="Phone number"
                      type="tel"
                      className="h-9 text-sm rounded-full border border-input bg-white px-3.5 transition-all duration-300 focus:ring-2 focus:ring-primary/30 focus:border-primary/50 placeholder:text-foreground"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-sm font-semibold text-foreground">Company / Brand Name</label>
                    <Input
                      name="company"
                      placeholder="Company / Brand Name"
                      required
                      className="h-9 text-sm rounded-full border border-input bg-white px-3.5 transition-all duration-300 focus:ring-2 focus:ring-primary/30 focus:border-primary/50 placeholder:text-foreground"
                    />
                  </div>
                  {activeForm === "startup" && (
                    <div className="space-y-1">
                      <label className="block text-sm font-semibold text-foreground">Stage</label>
                      <Input
                        name="stage"
                        placeholder="Pre-seed / Seed / Series A"
                        className="h-9 text-sm rounded-full border border-input bg-white px-3.5 transition-all duration-300 placeholder:text-foreground"
                      />
                    </div>
                  )}
                  <div className="space-y-1">
                    <label className="block text-sm font-semibold text-foreground">Message</label>
                    <Textarea
                      name="message"
                      placeholder="Message"
                      rows={2}
                      required
                      className="text-sm rounded-2xl border border-input bg-white px-3.5 py-2 min-h-[52px] transition-all duration-300 focus:ring-2 focus:ring-primary/30 focus:border-primary/50 placeholder:text-foreground resize-none"
                    />
                  </div>
                  <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                    <Button type="submit" variant="cta" size="lg" className="w-full py-3 text-sm rounded-full transition-all duration-200" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>
                  </motion.div>
                </form>
              </div>
            </motion.div>
            {/* Image Container - same size as form (flex items-stretch makes both equal height) */}
            <div className="flex-1 min-w-0 min-h-[180px] lg:min-h-0 lg:h-auto rounded-2xl border-2 border-primary/40 overflow-hidden shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/60 transition-all duration-500 relative">
              <img
                src={contactImage}
                alt="Klaun team - expert guidance for your growth ecosystem"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
