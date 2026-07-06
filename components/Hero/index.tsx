"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CalendarCheck, Gauge, Phone, ShieldCheck, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/UI/Button";
import { useLanguage } from "@/components/UI/LanguageProvider";
import { siteConfig } from "@/lib/site";

export default function Hero() {
  const { dictionary } = useLanguage();
  const hero = dictionary.hero;

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate min-h-[88svh] overflow-hidden border-b border-white/10 pt-24 md:pt-28"
    >
      <Image
        src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=2400&q=86"
        alt={hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(11,11,11,0.95)_0%,rgba(11,11,11,0.72)_48%,rgba(11,11,11,0.32)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-carbon to-transparent" />

      <div className="container-px grid min-h-[calc(88svh-7rem)] items-center gap-10 pb-14 lg:grid-cols-[1.02fr_0.78fr]">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-white/[0.12] bg-white/[0.08] px-3 py-2 text-sm font-semibold text-white/[0.78] backdrop-blur-lg">
            <Sparkles className="h-4 w-4 text-signal" aria-hidden="true" />
            {hero.badge}
          </div>

          <h1
            id="hero-title"
            className="text-balance text-3xl font-black leading-[1.05] text-white sm:text-5xl lg:text-7xl"
          >
            {hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/[0.72] sm:text-xl">
            {hero.text}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink
              href="#booking"
              size="lg"
              className="w-full sm:w-auto"
              icon={<CalendarCheck className="h-5 w-5" aria-hidden="true" />}
            >
              {hero.primary}
            </ButtonLink>
            <ButtonLink
              href={siteConfig.phoneHref}
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto"
              icon={<Phone className="h-5 w-5" aria-hidden="true" />}
            >
              {hero.secondary}
            </ButtonLink>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            {hero.stats.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-white/10 bg-white/[0.08] p-4 backdrop-blur-lg"
              >
                <p className="text-2xl font-black text-white">{item.value}</p>
                <p className="mt-1 text-xs font-semibold text-white/[0.56]">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 38 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.18 }}
          className="relative hidden min-h-[450px] lg:block"
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="glass-panel absolute right-0 top-10 w-72 rounded-lg p-5"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-signal text-white">
                <Gauge className="h-5 w-5" />
              </div>
              <div>
                <p className="font-bold text-white">{hero.diagnosticTitle}</p>
                <p className="text-sm text-white/[0.58]">{hero.diagnosticText}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="glass-panel absolute bottom-12 left-6 w-80 rounded-lg p-5"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-white text-carbon">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="font-bold text-white">{hero.warrantyTitle}</p>
                <p className="text-sm text-white/[0.58]">{hero.warrantyText}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
