"use client";

import { CalendarCheck, ClipboardCheck, FileText, KeyRound } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useLanguage } from "@/components/UI/LanguageProvider";
import Reveal from "@/components/UI/Reveal";
import SectionHeading from "@/components/UI/SectionHeading";

const stepIcons: LucideIcon[] = [CalendarCheck, ClipboardCheck, FileText, KeyRound];

export default function Process() {
  const { dictionary } = useLanguage();
  const process = dictionary.process;

  return (
    <section id="process" className="section-pad scroll-mt-20 bg-carbon">
      <div className="container-px">
        <Reveal>
          <SectionHeading
            eyebrow={process.eyebrow}
            title={process.title}
            text={process.text}
          />
        </Reveal>

        <div className="relative mt-14 grid gap-5 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-white/[0.12] lg:block" />
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-metal-line lg:block" />

          {process.items.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <Reveal key={step.title} delay={index * 0.06}>
                <article className="relative h-full rounded-lg border border-white/10 bg-graphite/70 p-6 backdrop-blur-xl transition duration-300 hover:border-signal/60">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="grid h-16 w-16 place-items-center rounded-lg border border-signal/40 bg-signal text-white shadow-red-glow">
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <span className="text-4xl font-black text-white/10">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/[0.62]">{step.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
