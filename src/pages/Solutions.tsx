import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Layers, CheckCircle, Compass, Map, Rocket } from "lucide-react";

const solutions = [
  {
    icon: Layers,
    title: "Brand Growth Architecture",
    desc: "End-to-end growth ecosystem design from market diagnosis to scalable revenue architecture — customized for each brand's unique challenges and opportunities.",
  },
  {
    icon: CheckCircle,
    title: "Verified Performance Marketing",
    desc: "Fraud-resistant, verified traffic acquisition through CPI/CPA/CPS frameworks across paid, affiliate, and organic channels with full transparency.",
  },
  {
    icon: Compass,
    title: "Experiential Marketing Systems",
    desc: "Creator economy activation, experiential campaigns, and community-led growth strategies that build authentic brand connections and lasting affinity.",
  },
  {
    icon: Map,
    title: "GTM Intelligence & Market Expansion",
    desc: "Go-to-market architecture with geo-market intelligence, localization frameworks, and cross-border expansion playbooks for global growth.",
  },
  {
    icon: Rocket,
    title: "Startup Ecosystem & Fundraise Enablement",
    desc: "Strategic integration into startup ecosystems, founder partnerships, fundraise readiness programs, and growth-stage acceleration infrastructure.",
  },
];

const Solutions = () => {
  return (
    <main className="pt-16">
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Growth Solutions</h1>
            <p className="text-secondary-foreground/70 text-lg max-w-2xl mx-auto">
              Tailored growth systems designed to diagnose, architect, activate, and scale.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl grid gap-8">
          {solutions.map((sol, i) => (
            <AnimatedSection key={sol.title} delay={i * 0.1}>
              <div className="p-8 rounded-lg border border-border card-hover bg-card flex flex-col md:flex-row gap-6 items-start">
                <sol.icon className="w-10 h-10 text-primary shrink-0" />
                <div>
                  <h2 className="font-heading text-xl font-bold text-card-foreground mb-2">{sol.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{sol.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="section-padding bg-primary text-primary-foreground text-center">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Let's Architect Your Growth</h2>
          <Link to="/contact">
            <Button variant="heroOutline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Get Started <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </AnimatedSection>
      </section>
    </main>
  );
};

export default Solutions;
