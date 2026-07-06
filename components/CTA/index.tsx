"use client";

import Image from "next/image";
import { CalendarCheck, Phone } from "lucide-react";
import Reveal from "@/components/UI/Reveal";
import { ButtonLink } from "@/components/UI/Button";
import { useLanguage } from "@/components/UI/LanguageProvider";
import { siteConfig } from "@/lib/site";

export default function CTA() {
  const { dictionary } = useLanguage();
  const cta = dictionary.cta;

  return (
    <section className="relative isolate overflow-hidden border-b border-white/10 py-16 sm:py-20">
      <Image
        src="https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=2200&q=84"
        alt={cta.imageAlt}
        fill
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(11,11,11,0.96),rgba(11,11,11,0.68),rgba(225,29,46,0.36))]" />

      <div className="container-px">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-signal">{cta.eyebrow}</p>
            <h2 className="mt-3 text-balance text-3xl font-black text-white sm:text-4xl lg:text-5xl">
              {cta.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/[0.72]">
              {cta.text}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                href={siteConfig.phoneHref}
                size="lg"
                className="w-full sm:w-auto"
                icon={<Phone className="h-5 w-5" aria-hidden="true" />}
              >
                {cta.call}
              </ButtonLink>
              <ButtonLink
                href="#booking"
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto"
                icon={<CalendarCheck className="h-5 w-5" aria-hidden="true" />}
              >
                {cta.request}
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
