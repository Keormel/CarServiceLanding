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
    title: "Более 10 лет опыта",
    text: "Работаем с немецкими, японскими, корейскими и премиальными марками."
  },
  {
    icon: BadgeCheck,
    title: "Сертифицированные мастера",
    text: "Команда проходит обучение по современным системам и регламентам."
  },
  {
    icon: Wrench,
    title: "Современное оборудование",
    text: "Дилерские сканеры, подъемники, стенды и профессиональный инструмент."
  },
  {
    icon: PackageCheck,
    title: "Оригинальные запчасти",
    text: "Подбираем OEM, оригинал или надежный аналог под ваш бюджет."
  },
  {
    icon: ShieldCheck,
    title: "Гарантия на работы",
    text: "Письменная гарантия до 24 месяцев с прозрачными условиями."
  },
  {
    icon: CircleDollarSign,
    title: "Честные цены",
    text: "Без навязанных услуг: только то, что реально влияет на ресурс и безопасность."
  }
];

export default function WhyUs() {
  return (
    <section className="section-pad border-y border-white/10 bg-graphite/[0.45]">
      <div className="container-px">
        <Reveal>
          <SectionHeading
            eyebrow="Почему выбирают нас"
            title="Сервис без сюрпризов в смете и качестве"
            text="Мы объясняем проблему человеческим языком, показываем изношенные детали и сохраняем историю обслуживания автомобиля."
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
