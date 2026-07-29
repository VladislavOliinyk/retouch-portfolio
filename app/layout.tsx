import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://lilyoliinyk.com"),

  title: {
    default: "Lily Oliinyk | Professional Photo Retoucher",
    template: "%s | Lily Oliinyk",
  },

  description:
    "Professional beauty, fashion and commercial photo retouching. High-end skin retouching, editorial, campaign and product imagery.",

  keywords: [
    "photo retoucher",
    "beauty retouch",
    "fashion retoucher",
    "editorial retouching",
    "high end retouching",
    "commercial retouching",
    "skin retouch",
    "photo editing",
    "beauty photography",
  ],

  authors: [
    {
      name: "Lily Oliinyk",
    },
  ],

  creator: "Lily Oliinyk",

  openGraph: {
    title: "Lily Oliinyk | Professional Photo Retoucher",
    description:
      "Professional beauty, fashion and commercial photo retouching.",

    url: "https://lilyoliinyk.com",

    siteName: "Lily Oliinyk",

    locale: "en_US",

    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-900 antialiased">
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}