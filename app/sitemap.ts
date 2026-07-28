import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://vladislavoliinyk.github.io/retouch-portfolio";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified: new Date("2026-07-28"),
    changeFrequency: "monthly",
    priority: locale === "en" ? 1 : 0.8,
  }));
}
