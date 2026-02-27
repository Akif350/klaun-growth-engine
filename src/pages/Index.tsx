import Marquee from "react-fast-marquee";
import TypewriterText from "@/components/TypewriterText";
import { Button } from "@/components/ui/button";
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
  Compass,
  Map,
  Building2,
  Brain,
  ShieldCheck,
  Infinity,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

/* ─── Static data ───────────────────────────────────────────── */

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
    title: "Growth Intelligence",
    items: ["Consumer Intelligence", "AI Targeting Systems", "Verified Attribution"],
  },
  {
    icon: Globe,
    title: "Strategic Ecosystem",
    items: ["Alliance Architecture", "GTM Infrastructure", "Cross-Market Expansion"],
  },
  {
    icon: Zap,
    title: "Execution Intelligence",
    items: ["Performance Infrastructure", "Creator Monetization", "Experiential Activation"],
  },
  {
    icon: Shield,
    title: "Sustainability Layer",
    items: ["LTV Optimization", "Retention Systems", "Growth Compounding"],
  },
];

const ecosystemSections = [
  {
    icon: Network,
    title: "Strategic Alliances Infrastructure",
    desc: "Verified B2B and B2C partnerships enabling brands to access new markets.",
    tag: "Klaun",
    image: strategicAlliancesImage,
  },
  {
    icon: BarChart3,
    title: "Growth Intelligence Systems",
    desc: "AI-driven consumer intelligence, geo-market mapping, and real-time dashboards.",
    tag: "Klaun",
    image: growthIntelligenceImage,
  },
  {
    icon: Zap,
    title: "Performance Infrastructure",
    desc: "Full-funnel attribution and fraud-free traffic across paid, affiliate, organic.",
    tag: "Klaun",
    image: performanceInfraImage,
  },
  {
    icon: Globe,
    title: "Experiential Growth Systems",
    desc: "Creator economy activation, experiential marketing, and media partnerships.",
    tag: "Klaun",
    image: experientialGrowthImage,
  },
  {
    icon: TrendingUp,
    title: "Global Growth Corridors",
    desc: "GTM and localized strategies across India | Central Asia | Emerging Markets.",
    tag: "Klaun",
    image: marketExpansionImage,
  },
];

const solutions = [
  { icon: Layers,    title: "Brand Foundation",            desc: "Strategy, positioning, and market architecture." },
  { icon: Network,   title: "Strategic Partnership Canvas", desc: "Influencer systems and content ecosystems." },
  { icon: Zap,       title: "Platform Integration",         desc: "Multi-channel execution and optimization." },
  { icon: BarChart3, title: "Performance Intelligence",     desc: "Attribution, analytics, and decision systems." },
  { icon: Shield,    title: "Revenue Sustainability",       desc: "LTV optimization and retention loops." },
];

const workWith = [
  { icon: Rocket,     label: "Consumer tech brands",               image: consumerTechImage },
  { icon: TrendingUp, label: "Startups scaling globally",          image: startupsGlobalImage },
  { icon: Target,     label: "Platforms needing performance scale", image: performanceScaleImage },
  { icon: Users,      label: "Creator economy ecosystems",         image: creatorEconomyImage },
];

const impactOutcomes = [
  { step: "01", icon: Layers,      title: "Unified Growth Architecture",      desc: "Single ecosystem blueprint." },
  { step: "02", icon: ShieldCheck, title: "Fraud-Resistant Acquisition",      desc: "Verified, quality traffic." },
  { step: "03", icon: Target,      title: "Verified Attribution Intelligence", desc: "Full-funnel transparency." },
  { step: "04", icon: TrendingUp,  title: "Lifecycle Revenue Compounding",    desc: "Sustainable growth loops." },
];

const dnaPrinciples = [
  {
    icon: Building2,
    title: "Customisable Ecosystem",
    desc: "Building permanent systems, not temporary solutions.",
    gradient: "from-violet-600 via-indigo-600 to-blue-600",
  },
  {
    icon: Brain,
    title: "Intelligence Over Assumption",
    desc: "Data-driven decisions replacing guesswork.",
    gradient: "from-cyan-500 via-teal-500 to-emerald-600",
  },
  {
    icon: ShieldCheck,
    title: "Verification Over Vanity",
    desc: "Real metrics that drive sustainable outcomes.",
    gradient: "from-pink-500 via-rose-500 to-red-600",
  },
  {
    icon: Network,
    title: "Alliances Over Isolation",
    desc: "Connected ecosystems generating compounding value.",
    gradient: "from-violet-600 via-indigo-600 to-blue-600",
  },
  {
    icon: Infinity,
    title: "Lifecycle Accountability",
    desc: "End-to-end ownership from acquisition to revenue.",
    gradient: "from-cyan-500 via-teal-500 to-emerald-600",
  },
];

const leaders = [
  {
    name: "Avesh Sharma",
    role: "Founder & Chief Ecosystem Officer",
    bio: "Strategic partnerships and global brand activation across experiential ecosystems. Associated with Xiaomi, Marsh, and experiential media platforms.",
    tags: "Strategic Alliances | Enterprise Partnerships | Experiential Growth",
    image: aveshSharmaImage,
  },
  {
    name: "Prem Bhimavaram",
    role: "Director, Growth Intelligence & Performance Infrastructure",
    bio: "Performance acquisition across gaming, fintech, ecommerce, travel, and education — specializing in CPI/CPA/CPS frameworks and revenue optimization.",
    tags: "Performance Infrastructure | Acquisition Intelligence | Growth Engineering",
    image: premBhimavaramImage,
  },
  {
    name: "Ashwani Chauhan",
    role: "Director, Product & Martech Systems",
    bio: "Product innovation across growth technology frameworks, performance infrastructure, and scalable ecosystem architectures.",
    tags: "Product Innovation | Ecosystem Technology | Growth Frameworks",
    image: ashwaniChauhanImage,
  },
];

const mentors = [
  {
    name: "Vineet Singh",
    role: "Strategic Brand & Growth Advisor",
    desc: "Advising enterprise growth ecosystems, digital transformation, and scalable brand expansion across digital-first organizations.",
    image: mentorVineetImage,
  },
  {
    name: "Vivek Jhorar",
    role: "Strategic Partnerships & Investment Ecosystem Advisor",
    desc: "Expertise in institutional partnerships, investment ecosystems, and alliance-driven expansion frameworks supporting enterprise growth corridors.",
    image: mentorVivekImage,
  },
];

type FormType = "enterprise" | "partnership" | "startup";
const formTitles: Record<FormType, string> = {
  enterprise: "Enterprise Growth Enquiry",
  partnership: "Strategic Partnership Enquiry",
  startup:    "Startup Ecosystem Onboarding",
};

/* ─── Component ─────────────────────────────────────────────── */

const Index = () => {
  const [activeForm, setActiveForm] = useState<FormType>("enterprise");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [engagementModelHovered, setEngagementModelHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [leadershipHovered, setLeadershipHovered] = useState(false);
  const [stats, setStats] = useState({ projects: 0, team: 0 });
  const statsRef      = useRef<HTMLDivElement | null>(null);
  const engagementRef = useRef<HTMLDivElement | null>(null);
  const leadershipRef = useRef<HTMLDivElement | null>(null);
  const statsInView      = useInView(statsRef,      { amount: 0.35 });
  const engagementInView = useInView(engagementRef, { amount: 0.2, once: true });
  const leadershipInView = useInView(leadershipRef, { amount: 0.2, once: true });

  /* counter animation */
  useEffect(() => {
    let rafId = 0;
    const durationMs = 900;
    const targets = { projects: 500, team: 50 };

    const animate = (startTime: number) => {
      const tick = (now: number) => {
        const progress = Math.min((now - startTime) / durationMs, 1);
        setStats({
          projects: Math.floor(targets.projects * progress),
          team:     Math.floor(targets.team     * progress),
        });
        if (progress < 1) rafId = requestAnimationFrame(tick);
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

  /* mobile detection */
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  /* form submit */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form     = e.currentTarget;
    const formData = new FormData(form);
    const name     = String(formData.get("name")    || "").trim();
    const email    = String(formData.get("email")   || "").trim();
    const phone    = String(formData.get("phone")   || "").trim();
    const company  = String(formData.get("company") || "").trim();
    const stage    = String(formData.get("stage")   || "").trim();
    const message  = String(formData.get("message") || "").trim();
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

    window.location.href = `mailto:partners@klaun.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

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

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">
        <img
          src={heroBanner}
          alt="Klaun growth ecosystem intelligence"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay" />

        <div className="relative z-10 flex-1 flex flex-col justify-center items-center px-6 max-w-6xl mx-auto w-full pt-24 sm:pt-28 pb-20 sm:pb-24">
          <div className="text-center w-full">
            <TypewriterText />
            <p className="mt-6 sm:mt-8 text-primary-foreground text-sm sm:text-base md:text-lg lg:text-xl max-w-[52ch] mx-auto font-medium leading-relaxed">
              We design unified growth systems connecting Brand → Creator → Platform → Performance → Revenue.
            </p>
            <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => scrollTo("contact")} className="btn-hero-shine inline-flex">
                <Button variant="hero" size="lg" className="text-base px-8 py-6 sm:px-10 sm:py-6">
                  Build Growth Infrastructure
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </button>
              <button onClick={() => scrollTo("ecosystem")}>
                <Button variant="heroOutline" size="lg" className="text-base px-8 py-6">
                  Explore Ecosystem
                </Button>
              </button>
            </div>
          </div>
        </div>

        {/* bottom marquee */}
        <div className="relative z-10 absolute bottom-0 left-0 right-0 w-full py-4 bg-[hsl(var(--hero-overlay)/0.3)] backdrop-blur-sm">
          <Marquee speed={40} pauseOnHover gradient={false}>
            {[...heroMarqueeItems, ...heroMarqueeItems].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 mx-6 px-4 py-2 rounded-lg bg-white/10 text-primary-foreground whitespace-nowrap"
              >
                <item.icon className="w-5 h-5 shrink-0 text-primary" />
                <span className="font-medium text-sm sm:text-base">{item.label}</span>
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* ── PHILOSOPHY STRIP ─────────────────────────────────── */}
      <div className="philosophy-strip">Solve → Serve → Scale → Smile</div>

      {/* ── WHAT IS KLAUN ────────────────────────────────────── */}
      <section id="about" className="section-padding bg-background scroll-mt-20 relative overflow-hidden">
        <div className="about-dot-wave" />
        <div className="container mx-auto max-w-[1400px] w-full px-6 md:px-12 lg:px-20 relative z-10">
          <div className="grid lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-20 items-center">

            <AnimatedSection>
              <div className="inline-flex items-center gap-2 bg-primary/8 text-primary text-xs uppercase tracking-widest font-bold px-4 py-1.5 rounded-full mb-7 border border-primary/20">
                About Klaun
              </div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-[1.15]">
                Klaun is Not an Agency.{" "}
                <span className="text-primary">Klaun is Growth Infrastructure.</span>
              </h2>
              <p className="text-foreground/70 text-base md:text-lg leading-relaxed mb-10 max-w-[44ch]">
                We unify intelligence, alliances, performance systems, and revenue architecture into one scalable growth ecosystem.
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  "Verified ecosystem — no fragmented models",
                  "Intelligence-first, not assumption-driven",
                  "Built for lifecycle revenue compounding",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-foreground/75">
                    <span className="w-5 h-5 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary block" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              <button onClick={() => scrollTo("contact")}>
                <Button variant="default" size="lg" className="text-sm px-8 py-4 rounded-full">
                  Get in Touch
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </button>
            </AnimatedSection>

            <AnimatedSection delay={0.12}>
              <div className="grid grid-cols-[1.1fr_1fr] grid-rows-[auto_auto] gap-4 lg:gap-5">
                <div className="row-span-2 relative rounded-2xl overflow-hidden shadow-lg border border-border/40 bg-muted">
                  <img
                    src={aboutRobotImage}
                    alt="Klaun growth intelligence"
                    className="w-full h-full object-cover object-center min-h-[340px] lg:min-h-[420px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
                  <button
                    type="button"
                    className="absolute bottom-5 left-5 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center text-primary hover:scale-105 transition-transform"
                    aria-label="Play"
                  >
                    <span className="ml-0.5 text-sm">▶</span>
                  </button>
                </div>

                <div className="relative rounded-2xl overflow-hidden shadow-md border border-border/40 bg-muted h-[175px] lg:h-[200px]">
                  <img
                    src={aboutBottomImage}
                    alt="Strategic planning session"
                    className="w-full h-full object-cover object-center"
                  />
                  <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-primary text-[10px] font-bold px-2.5 py-1 rounded-full border border-primary/20 shadow-sm">
                    Klaun
                  </span>
                </div>

                <div
                  ref={statsRef}
                  className="rounded-2xl bg-secondary text-secondary-foreground border border-secondary shadow-md p-5 flex flex-col justify-center gap-4 h-[175px] lg:h-[200px]"
                >
                  <div>
                    <p className="text-4xl font-heading font-bold text-primary leading-none">{stats.projects}+</p>
                    <p className="text-xs text-secondary-foreground/70 mt-1 uppercase tracking-wider">Completed Work</p>
                  </div>
                  <div className="h-px bg-secondary-foreground/15 w-full" />
                  <div>
                    <p className="text-4xl font-heading font-bold text-primary leading-none">{stats.team}+</p>
                    <p className="text-xs text-secondary-foreground/70 mt-1 uppercase tracking-wider">Experienced Team</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* ── WHY KLAUN EXISTS ─────────────────────────────────── */}
      <section className="relative overflow-hidden bg-secondary py-24 lg:py-32">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-32 left-0 w-[400px] h-[400px] rounded-full bg-primary/8 blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1400px] relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            <AnimatedSection>
              <div className="inline-flex items-center gap-2 bg-primary/15 text-primary text-xs uppercase tracking-widest font-bold px-4 py-2 rounded-full mb-8 border border-primary/25">
                <span className="w-1.5 h-1.5 rounded-full bg-primary block" />
                Why Klaun Exists
              </div>

              <h2 className="font-heading text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white mb-8 leading-[1.1]">
                The Growth World{" "}
                <span className="text-primary">Was Broken.</span>
                <br />
                We Fixed It.
              </h2>

              <div className="space-y-4 mb-10">
                <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
                    <span className="text-primary text-lg font-bold leading-none">✕</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">The Problem</p>
                    <p className="text-white/60 text-sm leading-relaxed">
                      Fragmented models, fraudulent traffic, and zero accountability hold brands back from real scale.
                    </p>
                  </div>
                </div>
                <div className="rounded-xl border border-primary/30 bg-primary/10 backdrop-blur-sm p-5 flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/30 border border-primary/40 flex items-center justify-center shrink-0">
                    <span className="text-primary text-lg font-bold leading-none">✓</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">The Klaun Solution</p>
                    <p className="text-white/70 text-sm leading-relaxed">
                      A verified layer connecting brands, platforms, creators, and performance — with full accountability.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {["Brand", "Creator", "Platform", "Performance", "Revenue"].map((step, i, arr) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="px-3 py-1.5 rounded-lg bg-white/8 border border-white/15 text-white/80 text-xs font-semibold">
                      {step}
                    </span>
                    {i < arr.length - 1 && (
                      <span className="text-primary text-xs font-bold">→</span>
                    )}
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="relative flex items-center justify-center">
                <img
                  src={robotCircle}
                  alt=""
                  aria-hidden="true"
                  className="absolute w-[340px] sm:w-[400px] lg:w-[460px] opacity-70 spin-slow ring-red pointer-events-none"
                />
                <img
                  src={whyKlaunRobot}
                  alt="Klaun AI assistant"
                  className="relative z-10 max-h-[400px] lg:max-h-[460px] w-auto object-contain drop-shadow-2xl"
                />
                <div className="absolute top-6 left-0 sm:left-4 z-20 bg-white rounded-xl shadow-lg border border-border px-4 py-2.5 flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-foreground text-xs font-bold whitespace-nowrap">Verified Ecosystem</span>
                </div>
                <div className="absolute bottom-10 right-0 sm:right-4 z-20 bg-secondary border border-primary/30 rounded-xl shadow-lg px-4 py-2.5 flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-white text-xs font-bold whitespace-nowrap">Fraud-Free Traffic</span>
                </div>
                <div className="absolute bottom-28 left-0 sm:-left-2 z-20 bg-primary rounded-xl shadow-lg px-4 py-2.5">
                  <span className="text-white text-xs font-bold whitespace-nowrap">500+ Brands Served</span>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ─────────────────────────────────── */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.045]"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(var(--primary)) 1.5px, transparent 1.6px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="container mx-auto max-w-5xl relative z-10">
          <AnimatedSection>
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-primary/8 text-primary text-xs uppercase tracking-widest font-bold px-4 py-2 rounded-full mb-5 border border-primary/20">
                <span className="w-1.5 h-1.5 rounded-full bg-primary block" />
                Our Direction
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Where We're Going & How We Get There
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <AnimatedSection>
              <div className="group relative rounded-2xl overflow-hidden border border-border bg-secondary h-full min-h-[300px] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/15 hover:border-primary/40 cursor-default">
                <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-br-full pointer-events-none" />
                <div className="absolute top-0 left-0 w-16 h-16 bg-primary/20 rounded-br-full pointer-events-none" />
                <span className="absolute bottom-4 right-6 text-[8rem] font-heading font-black text-white/[0.04] leading-none select-none pointer-events-none">V</span>
                <div className="relative z-10 p-8 md:p-10 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center shrink-0 shadow-lg shadow-primary/30">
                      <Compass className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-primary">Vision</span>
                  </div>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-secondary-foreground mb-4 leading-snug">
                    The World's Most Trusted Growth Infrastructure
                  </h3>
                  <p className="text-secondary-foreground/65 text-sm leading-relaxed flex-1">
                    Where every brand, creator, and platform scales through verified, intelligent systems — with zero guesswork.
                  </p>
                  <div className="mt-8 h-0.5 w-12 bg-primary rounded-full group-hover:w-24 transition-all duration-500" />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="group relative rounded-2xl overflow-hidden border border-primary/25 bg-primary h-full min-h-[300px] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/25 cursor-default">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full pointer-events-none" />
                <div className="absolute top-0 right-0 w-16 h-16 bg-white/15 rounded-bl-full pointer-events-none" />
                <span className="absolute bottom-4 left-6 text-[8rem] font-heading font-black text-white/[0.08] leading-none select-none pointer-events-none">M</span>
                <div className="relative z-10 p-8 md:p-10 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-11 h-11 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center shrink-0">
                      <Map className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-white/80">Mission</span>
                  </div>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-4 leading-snug">
                    Solve → Serve → Scale → Smile
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed flex-1">
                    Diagnose, architect, activate, and compound sustainable revenue for every partner — from first signal to lifecycle growth.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {["Diagnose", "Architect", "Activate", "Compound"].map((s) => (
                      <span key={s} className="px-3 py-1 rounded-lg bg-white/15 border border-white/20 text-white text-xs font-semibold">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── DNA OF KLAUN ─────────────────────────────────────── */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #c8c8c8 1.2px, transparent 1.2px)",
            backgroundSize: "20px 20px",
            opacity: 0.55,
          }}
        />
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primary/5 blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-primary/5 blur-[80px] pointer-events-none" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
              The DNA of Klaun
            </h2>
            <p className="text-foreground/55 text-base md:text-lg mb-14 max-w-[60ch]">
              Our foundation principles define how we engineer sustainable growth systems, not temporary campaign bursts.
            </p>
          </AnimatedSection>

          <div className="space-y-6">
            {[
              { icon: Building2,   title: "Customisable Ecosystem",      desc: "Building permanent systems, not temporary solutions.",      variant: "red"  },
              { icon: Brain,       title: "Intelligence Over Assumption", desc: "Data-driven decisions replacing guesswork.",                variant: "dark" },
              { icon: ShieldCheck, title: "Verification Over Vanity",     desc: "Real metrics that drive sustainable outcomes.",             variant: "red"  },
              { icon: Network,     title: "Alliances Over Isolation",     desc: "Connected ecosystems generating compounding value.",        variant: "dark" },
              { icon: Infinity,    title: "Lifecycle Accountability",     desc: "End-to-end ownership from acquisition to revenue.",         variant: "red"  },
            ].map((principle, i) => {
              const isRed     = principle.variant === "red";
              const gradFrom  = isRed ? "hsl(0,84%,50%)"  : "hsl(0,0%,12%)";
              const gradTo    = isRed ? "hsl(0,84%,38%)"  : "hsl(0,0%,6%)";
              const iconColor = isRed ? "hsl(0,84%,50%)"  : "hsl(0,0%,10%)";
              return (
                <AnimatedSection key={principle.title} delay={i * 0.08}>
                  <div className={`flex items-center gap-6 sm:gap-8 group rounded-2xl border px-6 sm:px-8 py-5 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 ${isRed ? "border-primary/20 hover:border-primary/45 hover:shadow-primary/10" : "border-border/70 hover:border-foreground/20"}`}>
                    <div className="relative flex-shrink-0 w-[68px] h-[76px] sm:w-[80px] sm:h-[90px]">
                      <svg viewBox="0 0 80 92" className="absolute inset-0 w-full h-full" fill="none">
                        <defs>
                          <linearGradient id={`cg-${i}`} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor={gradFrom} />
                            <stop offset="100%" stopColor={gradTo} />
                          </linearGradient>
                        </defs>
                        <path d="M4,4 L56,4 L76,46 L56,88 L4,88 Z" stroke={`url(#cg-${i})`} strokeWidth="2.5" fill="white" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center pr-3">
                        <principle.icon
                          className="w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:scale-110"
                          style={{ color: iconColor }}
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground mb-1.5">{principle.title}</h3>
                      <p className="text-foreground/55 text-sm sm:text-base leading-relaxed">{principle.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ECOSYSTEM ARCHITECTURE ───────────────────────────── */}
      <section id="ecosystem" className="bg-secondary scroll-mt-20 section-padding relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute left-0 top-0 w-[260px] sm:w-[320px] md:w-[380px] h-[180px] sm:h-[220px] md:h-[260px] opacity-15 bg-primary"
          style={{ maskImage: `url(${topLeftWave})`, WebkitMaskImage: `url(${topLeftWave})`, maskRepeat: "no-repeat", WebkitMaskRepeat: "no-repeat", maskSize: "contain", WebkitMaskSize: "contain", maskPosition: "left top", WebkitMaskPosition: "left top" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute right-0 top-0 w-[260px] sm:w-[320px] md:w-[380px] h-[180px] sm:h-[220px] md:h-[260px] opacity-15 bg-primary scale-x-[-1]"
          style={{ maskImage: `url(${topLeftWave})`, WebkitMaskImage: `url(${topLeftWave})`, maskRepeat: "no-repeat", WebkitMaskRepeat: "no-repeat", maskSize: "contain", WebkitMaskSize: "contain", maskPosition: "left top", WebkitMaskPosition: "left top" }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{ backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)", backgroundSize: "48px 48px" }}
        />

        <div className="container mx-auto relative z-10 px-6 md:px-12 lg:px-20">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/15 text-primary text-xs uppercase tracking-widest font-bold px-4 py-2 rounded-full mb-5 border border-primary/25">
                <span className="w-1.5 h-1.5 rounded-full bg-primary block" />
                Infrastructure Layers
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-3">Ecosystem Architecture</h2>
              <p className="text-white/55 text-base max-w-[40ch] mx-auto">
                Four interconnected layers powering sustainable brand growth.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1400px] mx-auto w-full">
            {ecosystemLayers.map((layer, i) => (
              <AnimatedSection key={layer.title} delay={i * 0.1}>
                <div className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-7 h-full flex flex-col transition-all duration-300 hover:bg-white/10 hover:border-primary/40 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10 overflow-hidden cursor-default">
                  <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-5 right-5 w-7 h-7 rounded-full bg-primary/15 border border-primary/25 flex items-center justify-center">
                    <span className="text-primary text-xs font-bold leading-none">0{i + 1}</span>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/30">
                    <layer.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading text-base sm:text-lg font-bold text-white mb-5 pr-8 leading-snug">{layer.title}</h3>
                  <div className="h-px bg-white/10 mb-5 group-hover:bg-primary/30 transition-colors duration-300" />
                  <ul className="space-y-3 flex-1">
                    {layer.items.map((item) => (
                      <li key={item} className="text-sm text-white/60 flex items-start gap-3 group-hover:text-white/75 transition-colors duration-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-[5px] shrink-0" />
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

      {/* ── ECOSYSTEM INFRASTRUCTURE SYSTEMS ─────────────────── */}
      <section className="bg-muted section-padding relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.5]"
          style={{ backgroundImage: "radial-gradient(circle, #d1d5db 1px, transparent 1px)", backgroundSize: "24px 24px" }}
        />
        <div className="container mx-auto max-w-[1400px] relative z-10">
          <AnimatedSection>
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-primary/8 text-primary text-xs uppercase tracking-widest font-bold px-4 py-2 rounded-full mb-5 border border-primary/20">
                <span className="w-1.5 h-1.5 rounded-full bg-primary block" />
                Five Systems
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">Ecosystem Infrastructure</h2>
              <p className="text-foreground/55 text-base max-w-[42ch] mx-auto">
                Five systems forming the backbone of sustainable brand growth.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ecosystemSections.slice(0, 3).map((section, i) => (
              <AnimatedSection key={section.title} delay={i * 0.1}>
                <div className="group bg-white rounded-2xl border border-border/50 shadow-sm overflow-hidden h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30">
                  <div className="relative h-48 overflow-hidden bg-secondary">
                    {section.image && (
                      <img src={section.image} alt={section.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/40">
                      <section.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="absolute top-3 right-3 rounded-full bg-white text-primary text-[10px] font-bold px-2.5 py-1 shadow-md border border-primary/20 tracking-wide">
                      {section.tag}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-0.5 h-6 bg-primary rounded-full shrink-0 mt-0.5" />
                      <h3 className="font-heading text-base font-bold text-foreground leading-snug">{section.title}</h3>
                    </div>
                    <p className="text-sm text-foreground/60 leading-relaxed pl-3.5">{section.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
            {ecosystemSections.slice(3).map((section, i) => (
              <AnimatedSection key={section.title} delay={(i + 3) * 0.1}>
                <div className="group bg-white rounded-2xl border border-border/50 shadow-sm overflow-hidden h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30">
                  <div className="flex flex-col sm:flex-row h-full">
                    <div className="relative sm:w-52 lg:w-64 h-48 sm:h-auto overflow-hidden bg-secondary shrink-0">
                      {section.image && (
                        <img src={section.image} alt={section.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-secondary/40 sm:bg-gradient-to-b sm:from-transparent sm:to-secondary/60" />
                      <div className="absolute bottom-4 left-4 w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/40">
                        <section.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="absolute top-3 right-3 rounded-full bg-white text-primary text-[10px] font-bold px-2.5 py-1 shadow-md border border-primary/20 tracking-wide">
                        {section.tag}
                      </span>
                    </div>
                    <div className="flex-1 p-6 flex flex-col justify-center">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-0.5 h-6 bg-primary rounded-full shrink-0 mt-0.5" />
                        <h3 className="font-heading text-base font-bold text-foreground leading-snug">{section.title}</h3>
                      </div>
                      <p className="text-sm text-foreground/60 leading-relaxed pl-3.5">{section.desc}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS ────────────────────────────────────────── */}
      <section id="solutions" className="bg-background scroll-mt-20 section-padding relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.045]"
          style={{ backgroundImage: "radial-gradient(circle, hsl(var(--primary)) 1.5px, transparent 1.6px)", backgroundSize: "28px 28px" }}
        />
        <div className="container mx-auto max-w-[1400px] relative z-10">
          <AnimatedSection>
            <div className="relative rounded-2xl overflow-hidden mb-12 w-full min-h-[200px] sm:min-h-[240px]">
              <img src={growthSolutionsBanner} alt="Growth solutions" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/75 to-primary/40" />
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.06]"
                style={{ backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)", backgroundSize: "36px 36px" }}
              />
              <div className="relative z-10 px-8 sm:px-12 py-10 sm:py-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 bg-primary/20 text-primary text-xs uppercase tracking-widest font-bold px-3 py-1.5 rounded-full mb-4 border border-primary/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary block" />
                    What We Offer
                  </div>
                  <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">Growth Solutions</h2>
                  <p className="text-white/65 text-sm sm:text-base max-w-[42ch]">
                    Tailored growth systems to diagnose, architect, activate, and scale.
                  </p>
                </div>
                <span className="text-[6rem] sm:text-[8rem] font-heading font-black text-white/[0.06] leading-none select-none shrink-0 hidden sm:block">05</span>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.map((sol, i) => {
              const isDark = i % 2 === 0;
              return (
                <AnimatedSection key={sol.title} delay={i * 0.08}>
                  <div className={`group relative rounded-2xl overflow-hidden h-full min-h-[200px] flex flex-col transition-all duration-300 hover:-translate-y-2 cursor-default ${isDark ? "bg-secondary border border-white/8 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/15" : "bg-white border border-border/60 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"}`}>
                    <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${isDark ? "bg-primary/20" : "bg-primary/10"}`} />
                    <div className="relative z-10 p-7 flex flex-col h-full">
                      <div className="flex items-start justify-between mb-6">
                        <div className={`w-[52px] h-[52px] rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm ${isDark ? "bg-primary/20 border border-primary/30 group-hover:bg-primary group-hover:shadow-primary/40 group-hover:shadow-lg" : "bg-primary/8 border border-primary/20 group-hover:bg-primary group-hover:shadow-primary/30 group-hover:shadow-md"}`}>
                          <sol.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                        </div>
                        <span className={`text-5xl font-heading font-black leading-none select-none transition-colors duration-300 ${isDark ? "text-white/[0.06] group-hover:text-primary/20" : "text-foreground/[0.06] group-hover:text-primary/15"}`}>
                          0{i + 1}
                        </span>
                      </div>
                      <h3 className={`font-heading text-lg font-bold mb-3 leading-snug ${isDark ? "text-white" : "text-foreground"}`}>{sol.title}</h3>
                      <div className="h-0.5 w-8 bg-primary rounded-full mb-4 group-hover:w-16 transition-all duration-400" />
                      <p className={`text-sm leading-relaxed flex-1 ${isDark ? "text-white/55" : "text-foreground/55"}`}>{sol.desc}</p>
                      <div className={`mt-6 flex items-center gap-2 text-xs font-semibold transition-all duration-300 translate-y-1 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 ${isDark ? "text-primary" : "text-primary"}`}>
                        <span className="tracking-wide uppercase">Learn more</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <div className="h-[3px] bg-gradient-to-r from-primary/80 via-primary to-primary/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHO WE WORK WITH ─────────────────────────────────── */}
      <section className="bg-secondary section-padding relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{ backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)", backgroundSize: "48px 48px" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute left-0 top-0 w-[220px] sm:w-[280px] md:w-[320px] h-[150px] sm:h-[190px] md:h-[210px] opacity-10 bg-primary"
          style={{ maskImage: `url(${topLeftWave})`, WebkitMaskImage: `url(${topLeftWave})`, maskRepeat: "no-repeat", WebkitMaskRepeat: "no-repeat", maskSize: "contain", WebkitMaskSize: "contain", maskPosition: "left top", WebkitMaskPosition: "left top" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute right-0 top-0 w-[220px] sm:w-[280px] md:w-[320px] h-[150px] sm:h-[190px] md:h-[210px] opacity-10 bg-primary scale-x-[-1]"
          style={{ maskImage: `url(${topLeftWave})`, WebkitMaskImage: `url(${topLeftWave})`, maskRepeat: "no-repeat", WebkitMaskRepeat: "no-repeat", maskSize: "contain", WebkitMaskSize: "contain", maskPosition: "left top", WebkitMaskPosition: "left top" }}
        />

        <div className="container mx-auto relative z-10 px-6 md:px-12 lg:px-20 max-w-[1400px]">
          <AnimatedSection>
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-primary/15 text-primary text-xs uppercase tracking-widest font-bold px-4 py-2 rounded-full mb-5 border border-primary/25">
                <span className="w-1.5 h-1.5 rounded-full bg-primary block" />
                Our Partners
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-3">Who We Work With</h2>
              <p className="text-white/50 text-base max-w-[38ch] mx-auto">
                Trusted by brands, startups, platforms, and creators across industries.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {workWith.map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 0.1}>
                <div className="group relative rounded-2xl overflow-hidden border border-white/8 cursor-default transition-all duration-400 hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20">
                  <div className="relative h-52 overflow-hidden bg-secondary/80">
                    {"image" in item && item.image ? (
                      <img src={item.image} alt={item.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 brightness-75 group-hover:brightness-90" />
                    ) : (
                      <div className="w-full h-full bg-white/5 flex items-center justify-center">
                        <item.icon className="w-16 h-16 text-primary/40" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent" />
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                      <span className="text-primary text-xs font-bold">0{i + 1}</span>
                    </div>
                  </div>
                  <div className="bg-secondary px-5 pb-6 pt-0 -mt-1">
                    <div className="h-0.5 w-8 bg-primary rounded-full mb-4 group-hover:w-16 transition-all duration-400" />
                    <h3 className="font-heading text-base font-bold text-white leading-snug mb-1.5">{item.label}</h3>
                    <p className="text-white/40 text-xs">
                      {i === 0 && "Scale through verified brand systems"}
                      {i === 1 && "GTM infrastructure for global reach"}
                      {i === 2 && "Performance & acquisition intelligence"}
                      {i === 3 && "Creator monetization ecosystems"}
                    </p>
                    <div className="mt-4 flex items-center gap-1.5 text-primary text-xs font-semibold opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                      <span className="tracking-wide uppercase text-[10px]">Learn more</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPACT / OUTCOMES ────────────────────────────────── */}
      <section
        className="section-padding engagement-model-section text-secondary-foreground relative overflow-hidden cursor-default"
        onMouseEnter={() => { if (!isMobile) setEngagementModelHovered(true); }}
        onMouseLeave={() => { if (!isMobile) setEngagementModelHovered(false); }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/8 blur-[120px] rounded-full pointer-events-none" />

        <div ref={engagementRef} className="container mx-auto relative z-10 px-6 md:px-12 lg:px-20 max-w-[1400px]">
          <AnimatedSection>
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-primary/15 text-primary text-xs uppercase tracking-widest font-bold px-4 py-2 rounded-full mb-5 border border-primary/25">
                <span className="w-1.5 h-1.5 rounded-full bg-primary block" />
                What We Deliver
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-3">Impact</h2>
              <p className="text-white/50 text-base max-w-[38ch] mx-auto">Outcomes we enable for every partner.</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {impactOutcomes.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                animate={
                  engagementInView || engagementModelHovered || isMobile
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 40 }
                }
                transition={{ duration: 0.5, delay: engagementInView || engagementModelHovered || isMobile ? i * 0.1 : 0, ease: "easeOut" }}
                whileHover={{ y: -8, boxShadow: "0 24px 48px -12px rgba(220,38,38,0.25)" }}
                className="group relative rounded-2xl border border-white/8 bg-white/5 backdrop-blur-sm overflow-hidden flex flex-col transition-colors duration-300 hover:border-primary/50 hover:bg-white/8"
              >
                <div className="h-[3px] bg-gradient-to-r from-primary via-primary/60 to-transparent" />
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="relative w-14 h-14 shrink-0">
                      <svg viewBox="0 0 56 56" className="absolute inset-0 w-full h-full -rotate-90">
                        <circle cx="28" cy="28" r="24" fill="none" stroke="hsl(var(--primary)/0.2)" strokeWidth="2" />
                        <circle cx="28" cy="28" r="24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray={`${(i + 1) * 37.7} 150.8`} strokeLinecap="round" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center bg-primary/10 rounded-full border border-primary/20">
                        <span className="text-primary text-sm font-heading font-bold">{step.step}</span>
                      </div>
                    </div>
                    <step.icon className="w-6 h-6 text-white/20 group-hover:text-primary/60 transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading text-base sm:text-lg font-bold text-white mb-3 leading-snug">{step.title}</h3>
                  <div className="h-0.5 w-8 bg-primary/60 rounded-full mb-4 group-hover:w-16 group-hover:bg-primary transition-all duration-400" />
                  <p className="text-white/45 text-sm leading-relaxed flex-1 group-hover:text-white/60 transition-colors duration-300">{step.desc}</p>
                </div>
                <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-primary/10 blur-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ───────────────────────────────────────────────────── */}
      <section
        id="leadership"
        className="scroll-mt-20 cursor-default bg-secondary relative overflow-hidden"
        onMouseEnter={() => setLeadershipHovered(true)}
        onMouseLeave={() => setLeadershipHovered(false)}
      >
        {/* bg grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        {/* top red glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[280px] bg-primary/12 blur-[120px] rounded-full pointer-events-none" />

        {/* ── Header banner ── */}
        <div ref={leadershipRef} className="leadership-header relative pt-24 pb-56 lg:pb-64 px-6 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-primary/15 text-primary text-xs uppercase tracking-widest font-bold px-4 py-2 rounded-full mb-8 border border-primary/25">
              <span className="w-1.5 h-1.5 rounded-full bg-primary block" />
              Leadership
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5 leading-[1.05]">
              Leadership That{" "}
              <span className="text-primary relative">
                Speaks Volumes
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-primary rounded-full opacity-60" />
              </span>
            </h2>
            <p className="text-white/50 text-base lg:text-lg max-w-xl mx-auto">
              We measure success through long-term partnerships and measurable outcomes.
            </p>
          </AnimatedSection>
        </div>

        {/* ── Leader cards — overlap the banner ── */}
        <div className="relative -mt-44 pb-0 z-10">
          <div className="container mx-auto px-6 max-w-6xl">

            {/* ── NEW: Section title above photos ── */}
            <AnimatedSection>
              <div className="flex items-center gap-4 mb-10">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/15" />
                <h3 className="font-heading text-xs font-bold text-white/50 uppercase tracking-[0.25em] px-4 whitespace-nowrap">
                  Leadership Behind the Infrastructure
                </h3>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/15" />
              </div>
            </AnimatedSection>

            {/* ── Cards grid ── */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {leaders.map((leader, i) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 60 }}
                  animate={leadershipInView || leadershipHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                  transition={{ duration: 0.65, delay: leadershipInView || leadershipHovered ? i * 0.15 : 0, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="group relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30 h-full flex flex-col cursor-default transition-all duration-400 hover:-translate-y-3 hover:shadow-primary/25">

                    {/* ── Consistent image: fixed h-64, object-cover object-top ── */}
                    <div className="relative h-64 w-full overflow-hidden bg-secondary shrink-0">
                      {"image" in leader && leader.image ? (
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="w-full h-full object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-secondary to-primary/30 flex items-center justify-center">
                          <span className="font-heading text-6xl font-black text-white/20">
                            {leader.name.split(" ").map((n) => n[0]).join("")}
                          </span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/20 to-transparent" />
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                      <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">0{i + 1}</span>
                      </div>
                    </div>

                    {/* ── Card body ── */}
                    <div className="bg-secondary px-6 pb-6 pt-4 flex flex-col flex-1 gap-3 border border-white/8 border-t-0 rounded-b-2xl">
                      <div>
                        <p className="font-heading font-black text-white text-xl leading-tight">{leader.name}</p>
                        <p className="text-primary text-xs font-bold mt-1 uppercase tracking-widest">{leader.role}</p>
                      </div>
                      <div className="h-px bg-white/8 group-hover:bg-primary/30 transition-colors duration-300" />
                      {/* ── Bio: ~25-30% shorter ── */}
                      <p className="text-white/55 text-sm leading-relaxed flex-1 group-hover:text-white/75 transition-colors duration-300">
                        {leader.bio}
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {leader.tags.split(" | ").map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-full bg-white/6 border border-white/10 text-white/45 text-[10px] font-semibold group-hover:bg-primary/15 group-hover:border-primary/30 group-hover:text-primary transition-all duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ── MENTORS — increased top spacing ── */}
        <div className="bg-secondary pt-28 lg:pt-36 pb-20 lg:pb-28 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className="absolute inset-0 pointer-events-none opacity-[0.035]" style={{ backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[220px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="container mx-auto px-6 max-w-5xl relative z-10">
            <AnimatedSection>
              <div className="flex items-end justify-between mb-14 gap-6 flex-wrap">
                <div>
                  <div className="inline-flex items-center gap-2 bg-primary/15 text-primary text-xs uppercase tracking-widest font-bold px-4 py-2 rounded-full mb-4 border border-primary/25">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse block" />
                    Advisory Board
                  </div>
                  <h2 className="font-heading text-3xl md:text-4xl font-black text-white leading-tight">
                    Strategic<br /><span className="text-primary">Mentors</span>
                  </h2>
                </div>
                <p className="text-white/35 text-sm max-w-[28ch] leading-relaxed text-right">
                  Guiding the Klaun ecosystem with decades of industry expertise.
                </p>
              </div>
            </AnimatedSection>

            <div className="space-y-4">
              {mentors.map((mentor, i) => (
                <motion.div
                  key={mentor.name}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  animate={leadershipInView || leadershipHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  transition={{ duration: 0.6, delay: leadershipInView || leadershipHovered ? i * 0.15 : 0, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="group relative rounded-2xl border border-white/8 overflow-hidden bg-white/[0.03] backdrop-blur-sm transition-all duration-400 hover:bg-white/[0.07] hover:border-primary/40 hover:shadow-xl hover:shadow-primary/15">
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-primary/80 via-primary to-primary/20 opacity-40 group-hover:opacity-100 transition-opacity duration-400" />
                    <div className="flex items-center gap-5 px-7 py-5">
                      <span className="text-5xl font-heading font-black text-white/[0.05] leading-none select-none shrink-0 group-hover:text-primary/15 transition-colors duration-400 w-10 text-center">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="relative shrink-0">
                        <div className="w-[68px] h-[68px] rounded-xl overflow-hidden ring-2 ring-white/10 group-hover:ring-primary/40 transition-all duration-300 shadow-lg">
                          {"image" in mentor && mentor.image ? (
                            <img src={mentor.image} alt={mentor.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-400" />
                          ) : (
                            <div className="w-full h-full bg-primary/15 flex items-center justify-center">
                              <span className="font-heading font-bold text-primary text-xl">{mentor.name.split(" ").map((n) => n[0]).join("")}</span>
                            </div>
                          )}
                        </div>
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-primary text-white text-[8px] font-black tracking-widest whitespace-nowrap shadow-md shadow-primary/40">
                          ADVISOR
                        </div>
                      </div>
                      <div className="w-px h-14 bg-white/8 shrink-0 group-hover:bg-primary/25 transition-colors duration-300" />
                      <div className="shrink-0 min-w-[150px]">
                        <p className="font-heading font-black text-white text-lg leading-tight">{mentor.name}</p>
                        <p className="text-primary text-xs font-bold mt-1 tracking-wide">{mentor.role}</p>
                      </div>
                      <div className="w-px h-14 bg-white/8 shrink-0 hidden md:block group-hover:bg-primary/25 transition-colors duration-300" />
                      <p className="text-sm text-white/45 leading-relaxed flex-1 hidden md:block group-hover:text-white/65 transition-colors duration-300">{mentor.desc}</p>
                      <ArrowRight className="w-5 h-5 text-white/15 shrink-0 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                    <div className="md:hidden px-7 pb-5 -mt-1">
                      <p className="text-sm text-white/45 leading-relaxed">{mentor.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ── BRAND ASSOCIATIONS — increased spacing ── */}
        <div className="relative bg-secondary overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[180px] bg-primary/8 blur-[100px] rounded-full pointer-events-none" />

          <div className="container mx-auto px-6 max-w-6xl relative z-10 py-24 lg:py-32">
            <AnimatedSection>

              {/* Header */}
              <div className="text-center mb-14">
                <div className="inline-flex items-center gap-2 bg-primary/15 text-primary text-xs uppercase tracking-widest font-bold px-4 py-2 rounded-full mb-5 border border-primary/25">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary block" />
                  Ecosystem Trust
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-black text-white mb-3">
                  Leadership Experience & Ecosystem Associations
                </h2>
                <p className="text-white/35 text-sm max-w-[40ch] mx-auto leading-relaxed">
                  Leadership exposure across global brands and ecosystem platforms.
                </p>
              </div>

              {/* Logo cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Xiaomi",     image: assocXiaomi     },
                  { label: "Marsh",      image: assocMarsh      },
                  { label: "StartupLab", image: assocStartupLab },
                  { label: "Tremis",     image: assocTremis     },
                ].map((brand, i) => (
                  <AnimatedSection key={brand.label} delay={i * 0.08}>
                    <div className="group relative rounded-2xl border border-white/8 bg-white/4 overflow-hidden transition-all duration-350 hover:-translate-y-2 hover:border-primary/45 hover:shadow-xl hover:shadow-primary/20 cursor-default">
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-400" />
                      <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-primary/10 blur-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                      <div className="p-8 flex flex-col items-center gap-5 relative z-10">
                        <div className="w-20 h-20 rounded-xl bg-white flex items-center justify-center shadow-lg shadow-black/20 group-hover:shadow-primary/20 group-hover:scale-105 transition-all duration-300">
                          {"image" in brand && brand.image ? (
                            <img src={brand.image} alt={brand.label} className="max-h-11 max-w-[52px] object-contain" />
                          ) : (
                            <span className="text-sm font-heading font-semibold text-foreground">{brand.label}</span>
                          )}
                        </div>
                        <div className="text-center">
                          <p className="font-heading font-bold text-white text-sm group-hover:text-primary transition-colors duration-300">{brand.label}</p>
                          <div className="h-[1.5px] w-4 bg-primary/40 rounded-full mx-auto mt-1.5 group-hover:w-10 group-hover:bg-primary transition-all duration-400" />
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              {/* ── NEW: Disclaimer text under logo strip ── */}
              <p className="text-center text-xs text-white/20 mt-10 max-w-[52ch] mx-auto leading-relaxed">
                Leadership exposure across global brands and ecosystem platforms. Associations represent prior professional experience and strategic partnerships.
              </p>

            </AnimatedSection>
          </div>
        </div>

      </section>

      {/* ── ENTERPRISE CTA ───────────────────────────────────── */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-3xl">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your Growth Ecosystem?
            </h2>
            <p className="text-primary-foreground/80 mb-10 text-lg max-w-[45ch] mx-auto">
              Diagnose your growth challenges and architect a scalable ecosystem.
            </p>
            <button onClick={() => scrollTo("contact")}>
              <Button variant="cta" size="lg" className="text-base px-10 py-6 border-2 border-white/40">
                Start a Conversation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────── */}
      <section id="contact" className="scroll-mt-20 relative overflow-hidden bg-white">

        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #d0d0d0 1.3px, transparent 1.3px)", backgroundSize: "22px 22px", opacity: 0.5 }} />

        <div className="absolute left-0 top-0 bottom-0 w-full lg:w-[48%] overflow-hidden">
          <img src={contactImage} alt="Klaun team" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-white lg:to-white/0" />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/60 to-secondary/90 lg:hidden" />
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        </div>

        <div className="container mx-auto max-w-[1400px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">

            {/* LEFT — dark info panel */}
            <AnimatedSection>
              <div className="flex flex-col justify-center gap-8 px-8 sm:px-12 lg:px-14 xl:px-20 py-20 lg:py-28 h-full">
                <div className="inline-flex items-center gap-2 bg-primary text-white text-xs uppercase tracking-widest font-black px-4 py-2 rounded-full w-fit shadow-lg shadow-primary/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/70 block" />
                  Get In Touch
                </div>
                <div>
                  <h2 className="font-heading text-5xl md:text-6xl font-black text-white leading-[1.0] mb-5">
                    Contact<br />
                    <span className="text-primary">Us</span>
                  </h2>
                  <p className="text-white/50 text-base leading-relaxed max-w-[30ch]">
                    Have a project in mind? Our team is ready to help you build.
                  </p>
                </div>
                <div className="h-[2px] w-16 bg-primary rounded-full" />
                <div className="flex flex-col gap-4">
                  {[
                    { num: "500+", label: "Brands Served Globally" },
                    { num: "24h",  label: "Response Guarantee" },
                    { num: "🔒",   label: "100% Confidential" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0">
                        <span className="text-primary font-heading font-black text-sm">{item.num}</span>
                      </div>
                      <span className="text-white/60 text-sm font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* RIGHT — form panel */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col justify-center"
            >
              <div className="bg-white lg:rounded-none px-8 sm:px-10 lg:px-12 xl:px-16 py-16 lg:py-20 h-full flex flex-col justify-center shadow-2xl shadow-black/5 border-l border-border/30">

                <div className="mb-8">
                  <p className="text-foreground/40 text-xs uppercase tracking-[0.2em] font-bold mb-1">Enquiry Type</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {(Object.keys(formTitles) as FormType[]).map((type) => (
                      <motion.button
                        key={type}
                        onClick={() => setActiveForm(type)}
                        type="button"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 border-2 ${
                          activeForm === type
                            ? "bg-primary text-white border-primary shadow-md shadow-primary/25"
                            : "bg-transparent text-foreground/50 border-border/50 hover:border-primary/40 hover:text-primary"
                        }`}
                      >
                        {formTitles[type]}
                      </motion.button>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <input type="hidden" name="enquiryType" value={formTitles[activeForm]} />

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="block text-[10px] font-black text-foreground/40 uppercase tracking-[0.18em]">Name</label>
                      <Input name="name" placeholder="Your full name" required className="h-12 text-sm rounded-xl border-2 border-border/40 bg-muted/40 px-4 focus:bg-white transition-all duration-200 focus:ring-0 focus:border-primary hover:border-border placeholder:text-foreground/30 font-medium" />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-[10px] font-black text-foreground/40 uppercase tracking-[0.18em]">Email</label>
                      <Input name="email" placeholder="you@company.com" type="email" required className="h-12 text-sm rounded-xl border-2 border-border/40 bg-muted/40 px-4 focus:bg-white transition-all duration-200 focus:ring-0 focus:border-primary hover:border-border placeholder:text-foreground/30 font-medium" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="block text-[10px] font-black text-foreground/40 uppercase tracking-[0.18em]">Phone Number</label>
                      <Input name="phone" placeholder="+91 00000 00000" type="tel" className="h-12 text-sm rounded-xl border-2 border-border/40 bg-muted/40 px-4 focus:bg-white transition-all duration-200 focus:ring-0 focus:border-primary hover:border-border placeholder:text-foreground/30 font-medium" />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-[10px] font-black text-foreground/40 uppercase tracking-[0.18em]">Company / Brand Name</label>
                      <Input name="company" placeholder="Your company" required className="h-12 text-sm rounded-xl border-2 border-border/40 bg-muted/40 px-4 focus:bg-white transition-all duration-200 focus:ring-0 focus:border-primary hover:border-border placeholder:text-foreground/30 font-medium" />
                    </div>
                  </div>

                  {activeForm === "startup" && (
                    <div className="space-y-2">
                      <label className="block text-[10px] font-black text-foreground/40 uppercase tracking-[0.18em]">Stage</label>
                      <Input name="stage" placeholder="Pre-seed / Seed / Series A" className="h-12 text-sm rounded-xl border-2 border-border/40 bg-muted/40 px-4 focus:bg-white transition-all duration-200 focus:ring-0 focus:border-primary placeholder:text-foreground/30 font-medium" />
                    </div>
                  )}

                  <div className="space-y-2">
                    <label className="block text-[10px] font-black text-foreground/40 uppercase tracking-[0.18em]">Message</label>
                    <Textarea name="message" placeholder="Tell us about your growth challenges..." rows={4} required className="text-sm rounded-xl border-2 border-border/40 bg-muted/40 px-4 py-3 focus:bg-white transition-all duration-200 focus:ring-0 focus:border-primary placeholder:text-foreground/30 resize-none font-medium" />
                  </div>

                  <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} className="pt-2">
                    <Button
                      type="submit"
                      variant="cta"
                      size="lg"
                      className="w-full h-[54px] text-base font-black rounded-xl shadow-xl shadow-primary/25 tracking-wide transition-all duration-200"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </motion.div>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </main>
  );
};

export default Index;