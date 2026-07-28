"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import type { Dictionary } from "@/dictionaries";
import type { Locale } from "@/lib/i18n";

const navItems = [
  ["work", "#work"],
  ["about", "#about"],
  ["services", "#services"],
  ["contact", "#contact"],
] as const;

export function Header({ dictionary, locale }: { dictionary: Dictionary; locale: Locale }) {
  const [open, setOpen] = useState(false);
  const nextLocale = locale === "en" ? "uk" : "en";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/55 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between">
        <Link href={`/${locale}`} className="font-serif text-2xl tracking-wide text-bone">
          RETOUCH<span className="text-gold">.</span>
        </Link>

        <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.28em] text-muted md:flex">
          {navItems.map(([key, href]) => (
            <a key={key} className="transition hover:text-bone" href={href}>
              {dictionary.nav[key]}
            </a>
          ))}
          <Link className="text-gold" href={`/${nextLocale}`}>
            {nextLocale}
          </Link>
        </nav>

        <button className="grid h-11 w-11 place-items-center border border-white/15 text-bone md:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <motion.nav
          className="border-t border-white/10 bg-ink px-6 py-8 md:hidden"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-col gap-6 text-3xl font-light text-bone">
            {navItems.map(([key, href]) => (
              <a key={key} href={href} onClick={() => setOpen(false)}>
                {dictionary.nav[key]}
              </a>
            ))}
            <Link className="text-gold" href={`/${nextLocale}`}>
              {nextLocale.toUpperCase()}
            </Link>
          </div>
        </motion.nav>
      ) : null}
    </header>
  );
}
