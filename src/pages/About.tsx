import AnimatedSection from "@/components/AnimatedSection";

const About = () => {
  return (
    <main className="pt-16">

      {}
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Klaun</h1>
            <p className="text-secondary-foreground/70 text-lg max-w-[40ch] mx-auto">
              Strategic Growth Infrastructure | Verified Ecosystem Platform
            </p>
          </AnimatedSection>
        </div>
      </section>

      {}
      <section className="relative overflow-hidden bg-secondary py-24 lg:py-32">
        {}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {}
        <div className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-32 left-0 w-[400px] h-[400px] rounded-full bg-primary/8 blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl relative z-10">
          {}
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-primary/15 text-primary text-xs uppercase tracking-widest font-bold px-4 py-2 rounded-full mb-10 border border-primary/25">
              <span className="w-1.5 h-1.5 rounded-full bg-primary block" />
              Why Klaun Exists
            </div>

            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-12 leading-[1.1]">
              The Growth World{" "}
              <span className="text-primary">Was Broken.</span>
              <br className="hidden sm:block" />
              We Fixed It.
            </h2>
          </AnimatedSection>

          {}
          <div className="grid sm:grid-cols-2 gap-5 mb-12">
            <AnimatedSection delay={0.1}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-7 flex gap-5 items-start">
                <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
                  <span className="text-primary text-2xl font-bold leading-none">✕</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-base mb-2">The Problem</p>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Fragmented models, fraudulent traffic, and zero accountability hold brands back from real scale.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="h-full rounded-2xl border border-primary/30 bg-primary/10 backdrop-blur-sm p-7 flex gap-5 items-start">
                <div className="w-12 h-12 rounded-xl bg-primary/30 border border-primary/40 flex items-center justify-center shrink-0">
                  <span className="text-primary text-2xl font-bold leading-none">✓</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-base mb-2">The Klaun Solution</p>
                  <p className="text-white/70 text-sm leading-relaxed">
                    A verified layer connecting brands, platforms, creators, and performance — with full accountability.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {}
          <AnimatedSection delay={0.3}>
            <div className="flex flex-wrap items-center gap-3">
              {["Brand", "Creator", "Platform", "Performance", "Revenue"].map((step, i, arr) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="px-4 py-2 rounded-lg bg-white/8 border border-white/15 text-white/80 text-sm font-semibold">
                    {step}
                  </span>
                  {i < arr.length - 1 && (
                    <span className="text-primary font-bold text-base">→</span>
                  )}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {}
      <section className="section-padding bg-background relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.045]"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(var(--primary)) 1.5px, transparent 1.6px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="container mx-auto max-w-4xl relative z-10">

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

          <div className="grid md:grid-cols-2 gap-6">

            {}
            <AnimatedSection>
              <div className="group relative rounded-2xl border border-border bg-secondary h-full min-h-[280px] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/15 hover:border-primary/40 cursor-default overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-br-full pointer-events-none" />
                <div className="absolute top-0 left-0 w-16 h-16 bg-primary/20 rounded-br-full pointer-events-none" />
                <span className="absolute bottom-4 right-6 text-[7rem] font-heading font-black text-white/[0.04] leading-none select-none pointer-events-none">V</span>

                <div className="relative z-10 p-8 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center shrink-0 shadow-lg shadow-primary/30">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>
                      </svg>
                    </div>
                    <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-primary">Vision</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-secondary-foreground mb-4">
                    The World's Most Trusted Growth Infrastructure
                  </h3>
                  <p className="text-secondary-foreground/65 text-sm leading-relaxed flex-1">
                    Where every brand scales through verified, intelligent systems — with zero guesswork.
                  </p>
                  <div className="mt-8 h-0.5 w-12 bg-primary rounded-full group-hover:w-24 transition-all duration-500" />
                </div>
              </div>
            </AnimatedSection>

            {}
            <AnimatedSection delay={0.15}>
              <div className="group relative rounded-2xl border border-primary/25 bg-primary h-full min-h-[280px] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/25 cursor-default overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full pointer-events-none" />
                <div className="absolute top-0 right-0 w-16 h-16 bg-white/15 rounded-bl-full pointer-events-none" />
                <span className="absolute bottom-4 left-6 text-[7rem] font-heading font-black text-white/[0.08] leading-none select-none pointer-events-none">M</span>

                <div className="relative z-10 p-8 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-11 h-11 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M3 12h18M3 12l4-4m-4 4 4 4"/>
                      </svg>
                    </div>
                    <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-white/80">Mission</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white mb-4">
                    Solve → Serve → Scale → Smile
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed flex-1">
                    Diagnose, architect, activate, and compound sustainable revenue for every partner.
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

      {}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Ecosystem Infrastructure Philosophy</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4 max-w-[45ch]">
              We prepare deeply before stepping on stage — delivering results that matter.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-[45ch]">
              We design growth ecosystems tailored to each brand's challenges and positioning.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="philosophy-strip">Growth Engineered. Trust Verified.</div>

    </main>
  );
};

export default About;