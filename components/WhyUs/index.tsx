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
import Reveal from "@/components/UI/Reveal";
import SectionHeading from "@/components/UI/SectionHeading";

interface Advantage {
  icon: LucideIcon;
  title: string;
  text: string;
}

const advantages: Advantage[] = [
  {
    icon: Award,
    title: "Peste 10 ani experiență",
    text: "Lucrăm cu mărci germane, japoneze, coreene și premium."
  },
  {
    icon: BadgeCheck,
    title: "Mecanici certificați",
    text: "Echipa se instruiește constant pe sisteme și proceduri moderne."
  },
  {
    icon: Wrench,
    title: "Echipamente moderne",
    text: "Scannere profesionale, elevatoare, standuri și instrumente specializate."
  },
  {
    icon: PackageCheck,
    title: "Piese originale",
    text: "Selectăm OEM, original sau analog verificat în funcție de buget."
  },
  {
    icon: ShieldCheck,
    title: "Garanție la lucrări",
    text: "Garanție scrisă până la 24 de luni, cu condiții clare."
  },
  {
    icon: CircleDollarSign,
    title: "Prețuri corecte",
    text: "Fără servicii impuse: doar lucrări care influențează siguranța și resursa."
  }
];

export default function WhyUs() {
  return (
    <section className="section-pad border-y border-white/10 bg-graphite/[0.45]">
      <div className="container-px">
        <Reveal>
          <SectionHeading
            eyebrow="De ce ne aleg"
            title="Service fără surprize în deviz sau calitate"
            text="Explicăm problema pe înțelesul tău, arătăm piesele uzate și păstrăm istoricul de service al automobilului."
            align="center"
          />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item, index) => {
            const Icon = item.icon;
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
