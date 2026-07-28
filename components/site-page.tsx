import { About } from "@/components/about";
import { BeforeAfter } from "@/components/before-after";
import { Contact } from "@/components/contact";
import { Cursor } from "@/components/cursor";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Intro } from "@/components/intro";
import { Portfolio } from "@/components/portfolio";
import { Services } from "@/components/services";
import { getDictionary } from "@/dictionaries";
import type { Locale } from "@/lib/i18n";

export function SitePage({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);

  return (
    <>
      <Cursor />
      <Header dictionary={dictionary} locale={locale} />
      <main>
        <Hero dictionary={dictionary} locale={locale} />
        <Intro dictionary={dictionary} />
        <Portfolio dictionary={dictionary} />
        <BeforeAfter dictionary={dictionary} />
        <Services dictionary={dictionary} />
        <About dictionary={dictionary} />
        <Contact dictionary={dictionary} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
