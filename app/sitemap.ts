import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `https://retouch.studio/${locale}`,
    lastModified: new Date("2026-07-28"),
    changeFrequency: "monthly",
    priority: locale === "en" ? 1 : 0.8,
  }));
}
