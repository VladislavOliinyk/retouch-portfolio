import type { Metadata } from "next";
import { SitePage } from "@/components/site-page";
import { isLocale, type Locale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const title = isLocale(locale) && locale === "uk" ? "Lily Oliinyk | Портфоліо ретушера" : "Lily Oliinyk";

  return {
    title: {
      absolute: title,
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        uk: "/uk",
      },
    },
  };
}

export default async function LocalePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return <SitePage locale={locale} />;
}
