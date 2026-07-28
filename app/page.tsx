import { defaultLocale } from "@/lib/i18n";
import { SitePage } from "@/components/site-page";

export default function Home() {
  return <SitePage locale={defaultLocale} />;
}
