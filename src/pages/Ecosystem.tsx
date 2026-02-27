import AnimatedSection from "@/components/AnimatedSection";
import { Network, BarChart3, Zap, Globe, TrendingUp } from "lucide-react";

const ecosystemSections = [
  {
    icon: Network,
    title: "Strategic Alliances Infrastructure",
    desc: "Verified B2B and B2C partnerships enabling brands to access new markets.",
  },
  {
    icon: BarChart3,
    title: "Growth Intelligence Systems",
    desc: "AI-driven consumer intelligence, geo-market mapping, and real-time dashboards.",
  },
  {
    icon: Zap,
    title: "Performance Infrastructure",
    desc: "Full-funnel attribution and fraud-free traffic across paid, affiliate, organic.",
  },
  {
    icon: Globe,
    title: "Experiential Growth Systems",
    desc: "Creator economy activation, experiential marketing, and media partnerships.",
  },
  {
    icon: TrendingUp,
    title: "Global Growth Corridors",
    desc: "GTM and localized strategies across India | Central Asia | Emerging Markets.",
  },
];

const Ecosystem = () => {
  return (
    <main className="pt-16">

      {/* Hero */}
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Ecosystem Infrastructure</h1>
            <p className="text-secondary-foreground/70 text-lg max-w-[42ch] mx-auto">
              Five systems forming the backbone of sustainable brand growth.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Ecosystem Cards */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl space-y-8 lg:space-y-10">
          {ecosystemSections.map((section, i) => (
            <AnimatedSection key={section.title} delay={i * 0.1}>
              <div className="flex flex-col md:flex-row gap-6 items-start p-8 rounded-2xl border border-border card-hover bg-card">
                <section.icon className="w-12 h-12 text-primary shrink-0" />
                <div>
                  <h2 className="font-heading text-2xl font-bold text-card-foreground mb-3">{section.title}</h2>
                  <p className="text-muted-foreground leading-relaxed max-w-[45ch]">{section.desc}</p>
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