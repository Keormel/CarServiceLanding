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
    title: "Диагностика",
    description:
      "Компьютерная проверка, осмотр ходовой и понятный отчет с приоритетами ремонта."
  },
  {
    icon: Droplets,
    title: "Замена масла",
    description:
      "Подбор допуска, фильтры премиум-класса и сброс сервисных интервалов."
  },
  {
    icon: Disc3,
    title: "Тормозная система",
    description:
      "Колодки, диски, суппорты, тормозная жидкость и проверка эффективности."
  },
  {
    icon: Wrench,
    title: "Подвеска",
    description:
      "Диагностика стуков, замена рычагов, амортизаторов, сайлентблоков и стоек."
  },
  {
    icon: Cable,
    title: "Электрика",
    description:
      "Поиск утечек тока, ошибки блоков, датчики, проводка и сложная автоэлектроника."
  },
  {
    icon: Gauge,
    title: "Двигатель",
    description:
      "От профилактики до капитального ремонта с замером компрессии и эндоскопией."
  },
  {
    icon: Settings,
    title: "Коробка передач",
    description:
      "Обслуживание АКПП, DSG, вариаторов, адаптация и устранение рывков."
  },
  {
    icon: Car,
    title: "Шиномонтаж",
    description:
      "Сезонная смена, балансировка, ремонт проколов и хранение колес."
  }
];

export default function Services() {
  return (
    <section id="services" className="section-pad scroll-mt-20 bg-carbon">
      <div className="container-px">
        <Reveal>
          <SectionHeading
            eyebrow="Наши услуги"
            title="Закрываем весь цикл обслуживания автомобиля"
            text="От точной диагностики до сложного ремонта агрегатов. Каждая работа фиксируется в заказ-наряде, а смета согласуется до старта."
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
                    aria-label={`Подробнее: ${service.title}`}
                  >
                    Подробнее
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
