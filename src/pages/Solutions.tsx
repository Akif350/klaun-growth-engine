import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Layers, Network, Zap, BarChart3, Shield } from "lucide-react";

const solutions = [
  {
    icon: Layers,
    title: "Brand Foundation",
    desc: "Strategy, positioning, and market architecture.",
  },
  {
    icon: Network,
    title: "Strategic Partnership Canvas",
    desc: "Influencer systems and content ecosystems.",
  },
  {
    icon: Zap,
    title: "Platform Integration",
    desc: "Multi-channel execution and optimization.",
  },
  {
    icon: BarChart3,
    title: "Performance Intelligence",
    desc: "Attribution, analytics, and decision systems.",
  },
  {
    icon: Shield,
    title: "Revenue Sustainability",
    desc: "LTV optimization and retention loops.",
  },
];

const Solutions = () => {
  return (
    <main className="pt-16">

      {/* Hero */}
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Growth Solutions</h1>
            <p className="text-secondary-foreground/70 text-lg max-w-[42ch] mx-auto">
              Tailored growth systems designed to diagnose, architect, activate, and scale.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Solution Cards */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl grid gap-8 lg:gap-10">
          {solutions.map((sol, i) => (
            <AnimatedSection key={sol.title} delay={i * 0.1}>
              <div className="p-8 rounded-2xl border border-border card-hover bg-card flex flex-col md:flex-row gap-6 items-start">
                <sol.icon className="w-10 h-10 text-primary shrink-0" />
                <div>
                  <h2 className="font-heading text-xl font-bold text-card-foreground mb-3">{sol.title}</h2>
                  <p className="text-muted-foreground leading-relaxed max-w-[45ch]">{sol.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground text-center">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Let's Architect Your Growth</h2>
          <Link to="/contact">
            <Button variant="cta" size="lg" className="text-base px-10 py-6 border-2 border-white/40">
              Get Started <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </AnimatedSection>
      </section>

    </main>
  );
};

export default Solutions;