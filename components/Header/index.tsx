"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/UI/Button";
import Logo from "@/components/UI/Logo";
import { navLinks, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition duration-300",
        scrolled
          ? "border-white/10 bg-carbon/[0.88] shadow-panel backdrop-blur-xl"
          : "border-white/5 bg-carbon/[0.35] backdrop-blur-md"
      )}
    >
      <div className="container-px flex h-20 items-center justify-between gap-5">
        <a href="#top" aria-label="Apex Motors на главную" className="focus-ring rounded-lg">
          <Logo />
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Основное меню">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-lg px-4 py-3 text-sm font-semibold text-white/[0.72] transition hover:bg-white/[0.08] hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ButtonLink
            href="#booking"
            variant="secondary"
            size="sm"
            aria-label="Записаться на ремонт"
          >
            Записаться
          </ButtonLink>
          <ButtonLink
            href={siteConfig.phoneHref}
            size="sm"
            icon={<Phone className="h-4 w-4" aria-hidden="true" />}
            aria-label={`Позвонить ${siteConfig.phone}`}
          >
            Позвонить
          </ButtonLink>
        </div>

        <button
          type="button"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
          className="focus-ring grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-white/[0.08] text-white transition hover:border-signal/60 hover:bg-signal/[0.15] lg:hidden"
        >
          {open ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="border-t border-white/10 bg-carbon/[0.96] px-4 pb-5 pt-4 shadow-panel backdrop-blur-xl lg:hidden"
          >
            <nav className="mx-auto flex max-w-7xl flex-col gap-1" aria-label="Мобильное меню">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="focus-ring rounded-lg px-4 py-3 text-base font-semibold text-white/[0.78] transition hover:bg-white/[0.08] hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <ButtonLink href="#booking" onClick={() => setOpen(false)}>
                  Записаться
                </ButtonLink>
                <ButtonLink
                  href={siteConfig.phoneHref}
                  variant="secondary"
                  icon={<Phone className="h-4 w-4" aria-hidden="true" />}
                >
                  Позвонить
                </ButtonLink>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
