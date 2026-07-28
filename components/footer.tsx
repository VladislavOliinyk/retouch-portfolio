import Link from "next/link";
import type { Locale } from "@/lib/i18n";

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="py-10">
      <div className="container flex flex-col gap-4 text-xs uppercase tracking-[0.22em] text-muted md:flex-row md:items-center md:justify-between">
        <p>© 2026 Retouch Studio. All rights reserved.</p>
        <div className="flex gap-4">
          <Link className="transition hover:text-gold" href={`/${locale}#work`}>
            Portfolio
          </Link>
          <a className="transition hover:text-gold" href="mailto:hello@retouch.studio">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
