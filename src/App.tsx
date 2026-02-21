import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Index from "./pages/Index";
import klaunLoaderLogo from "@/assets/klaun-loader-logo.png";
import { useEffect, useState } from "react";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {isLoading ? (
          <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white text-foreground">
            <img
              src={klaunLoaderLogo}
              alt="Klaun logo"
              className="w-40 h-40 object-contain"
            />
            <p className="mt-2 text-lg font-heading font-semibold tracking-wide">Klaun</p>
            <p className="mt-1 text-sm font-medium tracking-wide">Loading</p>
          </div>
        ) : (
          <BrowserRouter>
            <Header />
            <Index />
            <Footer />
            <WhatsAppButton />
          </BrowserRouter>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
