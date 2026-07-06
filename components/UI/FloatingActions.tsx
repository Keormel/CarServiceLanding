"use client";

import { MessageCircle, Phone } from "lucide-react";
import { useLanguage } from "@/components/UI/LanguageProvider";
import { siteConfig } from "@/lib/site";

export default function FloatingActions() {
  const { dictionary } = useLanguage();

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-3 sm:right-6">
      <a
        href={siteConfig.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label={dictionary.ui.whatsappLabel}
        className="focus-ring grid h-12 w-12 place-items-center rounded-lg border border-emerald-300/25 bg-emerald-500 text-white shadow-panel transition duration-300 hover:scale-105 hover:bg-emerald-400"
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
      </a>
      <a
        href={siteConfig.phoneHref}
        aria-label={dictionary.ui.callLabel}
        className="focus-ring grid h-12 w-12 place-items-center rounded-lg border border-signal/60 bg-signal text-white shadow-red-glow transition duration-300 hover:scale-105 hover:bg-red-600"
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
      </a>
    </div>
  );
}
