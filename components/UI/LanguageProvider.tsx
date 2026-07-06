"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";
import {
  defaultLocale,
  dictionaries,
  getLocaleMeta,
  type Dictionary,
  type Locale
} from "@/lib/i18n";

interface LanguageContextValue {
  locale: Locale;
  dictionary: Dictionary;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function isLocale(value: string | null): value is Locale {
  return value === "ro" || value === "ru" || value === "en";
}

function detectBrowserLocale() {
  if (typeof window === "undefined") {
    return defaultLocale;
  }

  const savedLocale = window.localStorage.getItem("aleks-blitz-locale");
  if (isLocale(savedLocale)) {
    return savedLocale;
  }

  const browserLanguage = window.navigator.language.toLowerCase();
  if (browserLanguage.startsWith("ru")) {
    return "ru";
  }
  if (browserLanguage.startsWith("en")) {
    return "en";
  }

  return defaultLocale;
}

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    setLocaleState(detectBrowserLocale());
  }, []);

  useEffect(() => {
    const localeMeta = getLocaleMeta(locale);
    const seo = dictionaries[locale].seo;

    document.documentElement.lang = localeMeta.htmlLang;
    document.title = seo.title;

    const description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]'
    );
    if (description) {
      description.content = seo.description;
    }

    window.localStorage.setItem("aleks-blitz-locale", locale);
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      dictionary: dictionaries[locale],
      setLocale: setLocaleState
    }),
    [locale]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
