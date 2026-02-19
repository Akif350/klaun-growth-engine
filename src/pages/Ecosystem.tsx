import AnimatedSection from "@/components/AnimatedSection";
import { Network, BarChart3, Zap, Globe, TrendingUp } from "lucide-react";

const ecosystemSections = [
  {
    icon: Network,
    title: "Strategic Alliances Infrastructure",
    desc: "Building verified partnerships across B2B and B2C ecosystems, enabling brands to access new markets through trusted alliance networks and co-growth frameworks.",
  },
  {
    icon: BarChart3,
    title: "Growth Intelligence Systems",
    desc: "AI-driven consumer behavior intelligence, geo-market mapping, fraud-resistant acquisition, and real-time performance dashboards powering data-informed growth decisions.",
  },
  {
    icon: Zap,
    title: "Performance Infrastructure",
    desc: "Verified performance marketing across paid, affiliate, and organic channels with full-funnel attribution and fraud-free traffic acquisition systems.",
  },
  {
    icon: Globe,
    title: "Experiential Growth Systems",
    desc: "Creator economy activation, experiential marketing, media partnerships, and community-driven growth engines building lasting brand affinity.",
  },
  {
    icon: TrendingUp,
    title: "Market Expansion Systems",
    desc: "Cross-market GTM architecture, geo-expansion playbooks, and localized growth strategies for brands entering new territories across Central Asia, India, and beyond.",
  },
];

const Ecosystem = () => {
  return (
    <main className="pt-16">
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Ecosystem Infrastructure</h1>
            <p className="text-secondary-foreground/70 text-lg max-w-2xl mx-auto">
              Five interconnected systems forming the backbone of sustainable brand growth.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl space-y-16">
          {ecosystemSections.map((section, i) => (
            <AnimatedSection key={section.title} delay={i * 0.1}>
              <div className="flex flex-col md:flex-row gap-6 items-start p-8 rounded-lg border border-border card-hover bg-card">
                <section.icon className="w-12 h-12 text-primary shrink-0" />
                <div>
                  <h2 className="font-heading text-2xl font-bold text-card-foreground mb-3">{section.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{section.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Ecosystem;
