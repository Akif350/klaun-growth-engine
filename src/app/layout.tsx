import type { Metadata } from "next";
import { Providers } from "./providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

export const metadata: Metadata = {
  title: "Klaun | Growth Infrastructure",
  description: "Klaun Growth Ecosystem Infrastructure - We design unified growth systems connecting Brand, Creator, Platform, Performance, and Revenue.",
  keywords: ["Klaun", "Growth Infrastructure", "Ecosystem", "Brand Growth", "Performance Marketing"],
  authors: [{ name: "Klaun" }],
  openGraph: {
    title: "Klaun | Growth Infrastructure",
    description: "Klaun Growth Ecosystem Infrastructure",
    type: "website",
    images: ["https://klaun.com/opengraph.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@klaun",
    images: ["https://klaun.com/opengraph.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}
