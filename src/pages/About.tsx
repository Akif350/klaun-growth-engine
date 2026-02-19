import AnimatedSection from "@/components/AnimatedSection";

const About = () => {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Klaun</h1>
            <p className="text-secondary-foreground/70 text-lg max-w-2xl mx-auto">
              Strategic Growth Ecosystem Infrastructure | Verified Growth Ecosystem Platform
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Klaun Exists */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Why Klaun Exists</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Traditional models suffer from fragmented agencies delivering isolated outputs, fraudulent traffic and low-quality performance models, absence of consumer-behavior intelligence, lack of cross-ecosystem alliances, and zero accountability across lifecycle growth.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Klaun fills the gap by creating a verified ecosystem layer between brands, platforms, creators, and performance channels — ensuring trust, intelligence, and scalable revenue architecture.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto max-w-4xl grid md:grid-cols-2 gap-12">
          <AnimatedSection>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              To become the world's most trusted growth ecosystem infrastructure — where every brand, creator, and platform scales through verified, intelligent, and sustainable systems.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              Solve → Serve → Scale → Smile. We diagnose growth challenges, architect custom ecosystems, activate verified channels, and compound sustainable revenue for every partner.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Ecosystem Infrastructure Philosophy</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Inspired by the metaphor of a performer who prepares deeply before stepping on stage to make the audience smile, Klaun operates with a singular focus on delivering results that matter.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We do not sell services. We design growth ecosystems tailored to each brand's problem statement, consumer behavior, and long-term market positioning.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="philosophy-strip">Growth Engineered. Trust Verified.</div>
    </main>
  );
};

export default About;
