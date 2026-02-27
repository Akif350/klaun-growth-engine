import { useEffect, useState } from "react";

const fullText = "Global Growth Intelligence & Verified Ecosystem Infrastructure";
const TYPING_DURATION_MS = 9500; // slightly snappier
const charInterval = TYPING_DURATION_MS / fullText.length;

const TypewriterText = () => {
  const [charIndex, setCharIndex] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    setCharIndex(0);

    const typing = setInterval(() => {
      setCharIndex((prev) => {
        if (prev >= fullText.length) {
          clearInterval(typing);
          setTimeout(() => setKey((k) => k + 1), 600);
          return prev;
        }
        return prev + 1;
      });
    }, charInterval);

    return () => clearInterval(typing);
  }, [key]);

  return (
    <h1
      key={key}
      className="hero-title font-heading font-bold text-primary-foreground leading-tight max-w-5xl mx-auto animate-reveal flex items-center justify-center text-center"
    >
      {fullText.slice(0, charIndex)}
      <span className="typewriter-cursor" />
    </h1>
  );
};

export default TypewriterText;