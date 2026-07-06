"use client";

import { locales, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/UI/LanguageProvider";

export default function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, dictionary } = useLanguage();

  return (
    <div
      className={cn(
        "inline-flex rounded-lg border border-white/10 bg-white/[0.06] p-1",
        className
      )}
      role="group"
      aria-label={dictionary.ui.languageLabel}
    >
      {locales.map((item) => {
        const active = item.code === locale;
        return (
          <button
            key={item.code}
            type="button"
            onClick={() => setLocale(item.code as Locale)}
            aria-pressed={active}
            className={cn(
              "focus-ring min-h-9 rounded-md px-3 text-xs font-black transition",
              active
                ? "bg-signal text-white shadow-red-glow"
                : "text-white/[0.66] hover:bg-white/[0.08] hover:text-white"
            )}
            title={item.name}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
