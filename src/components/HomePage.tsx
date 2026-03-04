"use client";

import { useEffect, useState } from "react";
import Index from "@/pages/Index";
import klaunLoaderLogo from "@/assets/klaun-loader-logo.png";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timeoutId);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white text-foreground">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={klaunLoaderLogo.src}
          alt="Klaun logo"
          className="w-40 h-40 object-contain"
        />
        <p className="mt-2 text-lg font-heading font-semibold tracking-wide">Klaun</p>
        <p className="mt-1 text-sm font-medium tracking-wide">Loading</p>
      </div>
    );
  }

  return <Index />;
}
