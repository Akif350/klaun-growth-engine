import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

type FormType = "enterprise" | "partnership" | "startup";

const formTitles: Record<FormType, string> = {
  enterprise: "Enterprise Growth Enquiry",
  partnership: "Strategic Partnership Enquiry",
  startup: "Startup Ecosystem Onboarding",
};

const Contact = () => {
  const [activeForm, setActiveForm] = useState<FormType>("enterprise");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Enquiry Submitted",
        description: "Thank you! Our team will get back to you within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <main className="pt-16">
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-secondary-foreground/70 text-lg max-w-2xl mx-auto">
              Ready to build your growth ecosystem? Choose your enquiry type below.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-2xl">
          <AnimatedSection>
            {/* Form Type Selector */}
            <div className="flex flex-wrap gap-2 mb-10 justify-center">
              {(Object.keys(formTitles) as FormType[]).map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveForm(type)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeForm === type
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-accent"
                  }`}
                >
                  {formTitles[type]}
                </button>
              ))}
            </div>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">{formTitles[activeForm]}</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Input placeholder="Full Name" required className="h-12" />
                <Input placeholder="Email Address" type="email" required className="h-12" />
              </div>
              <Input placeholder="Company / Brand Name" required className="h-12" />
              <Input placeholder="Phone Number" type="tel" className="h-12" />
              {activeForm === "startup" && (
                <Input placeholder="Stage (Pre-seed / Seed / Series A)" className="h-12" />
              )}
              <Textarea placeholder="Tell us about your growth challenges..." rows={5} required />
              <Button type="submit" variant="cta" size="lg" className="w-full py-6 text-base" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Enquiry"}
              </Button>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default Contact;
