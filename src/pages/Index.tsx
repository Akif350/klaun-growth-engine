import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import TypewriterText from "@/components/TypewriterText";
import AnimatedSection from "@/components/AnimatedSection";
import heroBanner from "@/assets/hero-banner.jpg";
import { ArrowRight, BarChart3, Globe, Zap, Shield, Users, Rocket, Target, TrendingUp } from "lucide-react";

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

const workWith = [
  { icon: Rocket, label: "Consumer tech brands" },
  { icon: TrendingUp, label: "Startups scaling globally" },
  { icon: Target, label: "Platforms needing performance scale" },
  { icon: Users, label: "Creator economy ecosystems" },
];

const engagementSteps = [
  { step: "01", title: "Diagnosis", desc: "Deep analysis of your brand's growth challenges and market position." },
  { step: "02", title: "Architecture", desc: "Custom ecosystem blueprint designed for your specific growth trajectory." },
  { step: "03", title: "Activation", desc: "Strategic execution across all verified growth channels." },
  { step: "04", title: "Scale", desc: "Compounding growth through intelligent systems and alliances." },
];

const Index = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroBanner}
          alt="Klaun growth ecosystem intelligence"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay" />
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <TypewriterText />
          <p className="mt-6 text-primary-foreground/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Klaun is a Global Growth Intelligence & Verified Ecosystem Infrastructure company enabling brands to scale sustainably.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="lg" className="text-base px-8 py-6">
                Build Your Growth Ecosystem
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="heroOutline" size="lg" className="text-base px-8 py-6">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Strip */}
      <div className="philosophy-strip">
        Solve → Serve → Scale → Smile
      </div>

      {/* What is Klaun */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              What is Klaun?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Klaun is not an agency. Klaun is an intelligence-driven ecosystem infrastructure designed to diagnose, engineer, and scale sustainable growth for brands through strategic alliances, performance intelligence, experiential activation, and verified growth systems.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mt-4">
              We do not sell services. We design growth ecosystems tailored to each brand's problem statement, consumer behavior, and long-term market positioning.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Ecosystem Architecture */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
              Ecosystem Architecture
            </h2>
            <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
              Four interconnected layers powering sustainable brand growth.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ecosystemLayers.map((layer, i) => (
              <AnimatedSection key={layer.title} delay={i * 0.1}>
                <div className="bg-card rounded-lg p-8 card-hover border border-border h-full">
                  <layer.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-heading text-xl font-semibold text-card-foreground mb-4">{layer.title}</h3>
                  <ul className="space-y-2">
                    {layer.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
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

      {/* Who We Work With */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
              Who We Work With
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {workWith.map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 0.1}>
                <div className="text-center p-8 rounded-lg border border-border card-hover bg-card">
                  <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="font-heading font-semibold text-card-foreground">{item.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Model */}
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container mx-auto">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-16">
              Engagement Model
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {engagementSteps.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.1}>
                <div className="text-center">
                  <span className="text-5xl font-heading font-bold text-primary">{step.step}</span>
                  <h3 className="font-heading text-xl font-semibold mt-4 mb-2">{step.title}</h3>
                  <p className="text-secondary-foreground/70 text-sm">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Preview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Leadership
            </h2>
            <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
              Leadership experience across global brands & ecosystem platforms.
            </p>
            <Link to="/leadership">
              <Button variant="cta" size="lg">Meet the Team <ArrowRight className="w-4 h-4 ml-2" /></Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-3xl">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your Growth Ecosystem?
            </h2>
            <p className="text-primary-foreground/80 mb-10 text-lg">
              Let's diagnose your growth challenges and architect a verified, scalable ecosystem for your brand.
            </p>
            <Link to="/contact">
              <Button variant="heroOutline" size="lg" className="text-base px-10 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Start a Conversation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default Index;
