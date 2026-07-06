"use client";

import {
  Cable,
  Car,
  ChevronRight,
  Disc3,
  Droplets,
  Gauge,
  ScanLine,
  Settings,
  Wrench
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionHeading from "@/components/UI/SectionHeading";
import Reveal from "@/components/UI/Reveal";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: ScanLine,
    title: "Diagnosticare",
    description:
      "Verificare computerizată, inspecție mecanică și raport clar cu priorități."
  },
  {
    icon: Droplets,
    title: "Schimb ulei",
    description:
      "Ulei conform specificației, filtre premium și resetarea intervalelor de service."
  },
  {
    icon: Disc3,
    title: "Sistem de frânare",
    description:
      "Plăcuțe, discuri, etriere, lichid de frână și test de eficiență."
  },
  {
    icon: Wrench,
    title: "Suspensie",
    description:
      "Diagnosticarea zgomotelor, înlocuire brațe, amortizoare, bucșe și bielete."
  },
  {
    icon: Cable,
    title: "Electrică auto",
    description:
      "Consum parazitar, erori module, senzori, cablaj și electronică auto complexă."
  },
  {
    icon: Gauge,
    title: "Motor",
    description:
      "De la mentenanță preventivă până la reparații majore cu test compresie."
  },
  {
    icon: Settings,
    title: "Cutie de viteze",
    description:
      "Service pentru automată, DSG, CVT, adaptări și eliminarea smuciturilor."
  },
  {
    icon: Car,
    title: "Anvelope",
    description:
      "Schimb sezonier, echilibrare, reparare pene și depozitare roți."
  }
];

export default function Services() {
  return (
    <section id="services" className="section-pad scroll-mt-20 bg-carbon">
      <div className="container-px">
        <Reveal>
          <SectionHeading
            eyebrow="Serviciile noastre"
            title="Acoperim întregul ciclu de întreținere auto"
            text="De la diagnosticare precisă până la reparații complexe. Fiecare lucrare este documentată, iar devizul este confirmat înainte de start."
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={index * 0.035}>
                <article className="group h-full rounded-lg border border-white/10 bg-graphite/[0.64] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-signal/60 hover:bg-graphite">
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-lg bg-white/[0.08] text-signal transition duration-300 group-hover:bg-signal group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-black text-white">{service.title}</h3>
                  <p className="mt-3 min-h-24 text-sm leading-6 text-white/[0.62]">
                    {service.description}
                  </p>
                  <a
                    href="#booking"
                    className="focus-ring mt-5 inline-flex items-center gap-2 rounded-lg py-2 text-sm font-bold text-white transition hover:text-signal"
                    aria-label={`Detalii: ${service.title}`}
                  >
                    Detalii
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
