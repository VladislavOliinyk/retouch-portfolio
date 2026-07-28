import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap",
});

const sans = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://retouch.studio"),
  title: {
    default: "Lily Oliinyk",
    template: "%s | Lily Oliinyk",
  },
  description:
    "Premium commercial retouching portfolio for beauty, fashion, product, and campaign image finishing.",
  openGraph: {
    title: "Lily Oliinyk",
    description:
      "Premium commercial retouching for beauty, fashion, product, and brand campaigns.",
    images: ["/images/hero.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
