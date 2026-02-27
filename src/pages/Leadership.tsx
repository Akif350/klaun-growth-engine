import AnimatedSection from "@/components/AnimatedSection";

const leaders = [
  {
    name: "Avesh Sharma",
    role: "Founder & Chief Ecosystem Officer",
    association:
      "Strategic partnerships and global brand activation across experiential ecosystems. Associated with Xiaomi, Marsh, and experiential media platforms.",
    tags: "Strategic Alliances | Enterprise Partnerships | Experiential Growth",
  },
  {
    name: "Prem Bhimavaram",
    role: "Director, Growth Intelligence & Performance Infrastructure",
    association:
      "Performance acquisition leadership across gaming, fintech, ecommerce, travel, and education. Specializing in CPI/CPA/CPS frameworks and revenue optimization.",
    tags: "Performance Infrastructure | Acquisition Intelligence | Growth Engineering",
  },
  {
    name: "Ashwani Chauhan",
    role: "Director, Product & Martech Systems",
    association:
      "Product innovation across growth technology frameworks, performance infrastructure, and scalable ecosystem architectures.",
    tags: "Product Innovation | Ecosystem Technology | Growth Frameworks",
  },
];

const mentors = [
  {
    name: "Vineet Singh",
    role: "Strategic Brand & Growth Advisor",
    desc: "Advising enterprise growth ecosystems, digital transformation, and scalable brand expansion across digital-first organizations.",
  },
  {
    name: "Vivek Jhorar",
    role: "Strategic Partnerships & Investment Ecosystem Advisor",
    desc: "Expertise in institutional partnerships, investment ecosystems, and alliance-driven expansion frameworks supporting enterprise growth corridors.",
  },
];

const Leadership = () => {
  return (
    <main className="pt-16">

      {/* Hero */}
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Leadership</h1>
            <p className="text-secondary-foreground/70 text-lg max-w-[40ch] mx-auto">
              Leadership Across Global Brands & Ecosystem Platforms
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Leader Cards */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl">
          <AnimatedSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
              Leadership Behind the Infrastructure
            </h2>
          </AnimatedSection>
          <div className="grid gap-8 lg:gap-10">
            {leaders.map((leader, i) => (
              <AnimatedSection key={leader.name} delay={i * 0.1}>
                <div className="p-8 rounded-2xl border border-border bg-card card-hover">
                  <h2 className="font-heading text-2xl font-bold text-card-foreground">{leader.name}</h2>
                  <p className="text-primary font-semibold text-sm mt-1">{leader.role}</p>
                  <p className="text-muted-foreground mt-5 leading-relaxed max-w-[55ch]">{leader.association}</p>
                  <p className="text-xs text-muted-foreground/60 mt-4 tracking-wide">{leader.tags}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Mentors */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto max-w-5xl">
          <AnimatedSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-14 text-center">Strategic Mentors</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {mentors.map((mentor, i) => (
              <AnimatedSection key={mentor.name} delay={i * 0.1}>
                <div className="p-8 rounded-2xl border border-border bg-card card-hover">
                  <h3 className="font-heading text-xl font-bold text-card-foreground">{mentor.name}</h3>
                  <p className="text-primary font-semibold text-sm mt-1">{mentor.role}</p>
                  <p className="text-muted-foreground mt-5 leading-relaxed text-sm max-w-[50ch]">{mentor.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Associations */}
      <section className="section-padding bg-background">
        <div className="container mx-auto text-center max-w-3xl">
          <AnimatedSection>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-10">
              Leadership Experience & Ecosystem Associations
            </h2>
            <div className="flex flex-wrap justify-center gap-8 items-center text-muted-foreground">
              {["Xiaomi", "Marsh", "StartupLab", "Tremis"].map((brand) => (
                <span
                  key={brand}
                  className="font-heading text-lg font-semibold px-6 py-3 border border-border rounded-lg hover:border-primary/40 transition-colors"
                >
                  {brand}
                </span>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-10 max-w-xl mx-auto">
              Leadership exposure across global brands and ecosystem platforms.
            </p>
          </AnimatedSection>
        </div>
      </section>

    </main>
  );
};

export default Leadership;