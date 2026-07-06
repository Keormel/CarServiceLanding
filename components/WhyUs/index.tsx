"use client";

import {
  Award,
  BadgeCheck,
  CircleDollarSign,
  PackageCheck,
  ShieldCheck,
  Wrench
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useLanguage } from "@/components/UI/LanguageProvider";
import Reveal from "@/components/UI/Reveal";
import SectionHeading from "@/components/UI/SectionHeading";

const advantageIcons: LucideIcon[] = [
  Award,
  BadgeCheck,
  Wrench,
  PackageCheck,
  ShieldCheck,
  CircleDollarSign
];

export default function WhyUs() {
  const { dictionary } = useLanguage();
  const whyUs = dictionary.whyUs;

  return (
    <section className="section-pad border-y border-white/10 bg-graphite/[0.45]">
      <div className="container-px">
        <Reveal>
          <SectionHeading
            eyebrow={whyUs.eyebrow}
            title={whyUs.title}
            text={whyUs.text}
            align="center"
          />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {whyUs.items.map((item, index) => {
            const Icon = advantageIcons[index];
            return (
              <Reveal key={item.title} delay={index * 0.04}>
                <article className="h-full rounded-lg border border-white/10 bg-carbon/70 p-6 transition duration-300 hover:border-signal/60 hover:bg-carbon">
                  <div className="mb-5 flex items-center gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-lg bg-signal/[0.12] text-signal">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-black text-white">{item.title}</h3>
                  </div>
                  <p className="text-sm leading-6 text-white/[0.62]">{item.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
