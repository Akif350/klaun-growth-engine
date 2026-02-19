import { useEffect, useState } from "react";

const titles = [
  "Engineering Growth Ecosystems for the Next Market Era",
  "Strategic Growth Infrastructure. Verified & Scalable.",
  "AI-Driven Intelligence for Sustainable Brand Growth.",
  "Ecosystems that Scale Brands. Trust Verified.",
];

const TypewriterText = () => {
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const fullText = titles[index];

  useEffect(() => {
    setCharIndex(0);

    const typing = setInterval(() => {
      setCharIndex((prev) => {
        if (prev >= fullText.length) {
          clearInterval(typing);
          return prev;
        }
        return prev + 1;
      });
    }, 80);

    const change = setTimeout(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 7000);

    return () => {
      clearInterval(typing);
      clearTimeout(change);
    };
  }, [index, fullText.length]);

  return (
    <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight max-w-5xl mx-auto">
      {fullText.slice(0, charIndex)}
      <span className="typewriter-cursor" />
    </h1>
  );
};

export default TypewriterText;
