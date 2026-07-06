"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Reveal from "@/components/UI/Reveal";
import SectionHeading from "@/components/UI/SectionHeading";
import { cn } from "@/lib/utils";

const questions = [
  {
    question: "Сколько занимает диагностика автомобиля?",
    answer:
      "Базовая диагностика обычно занимает 40-60 минут. Если нужна глубокая проверка двигателя, электрики или коробки, мастер заранее согласует время и стоимость."
  },
  {
    question: "Можно ли приехать со своими запчастями?",
    answer:
      "Да, но гарантия на деталь остается на стороне поставщика. На нашу работу гарантия сохраняется, если запчасть подходит по спецификации и не имеет видимых дефектов."
  },
  {
    question: "Вы согласуете цену до ремонта?",
    answer:
      "Да. После диагностики вы получаете смету с работами, деталями и сроками. Мы начинаем ремонт только после вашего подтверждения."
  },
  {
    question: "Есть ли гарантия на ремонт?",
    answer:
      "Да, гарантия на работы и установленные детали действует до 24 месяцев. Условия фиксируются в заказ-наряде."
  },
  {
    question: "Работаете ли вы с премиальными марками?",
    answer:
      "Да. Мы обслуживаем BMW, Mercedes-Benz, Audi, Lexus, Porsche, Volvo и другие марки, включая автомобили с современной электроникой."
  },
  {
    question: "Можно ли оставить автомобиль на день?",
    answer:
      "Да. Автомобиль хранится в закрытой сервисной зоне. По готовности мы сообщим статус и согласуем удобное время выдачи."
  },
  {
    question: "Делаете ли вы срочный ремонт?",
    answer:
      "Если есть свободное окно и необходимые запчасти, берем срочные работы в тот же день. Лучше позвонить заранее, чтобы закрепить время."
  },
  {
    question: "Как понять, что ремонт действительно нужен?",
    answer:
      "Мы показываем результаты диагностики, фото или видео изношенных узлов и объясняем риски. Вы сами выбираете, что делать сейчас, а что можно запланировать."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section-pad scroll-mt-20 border-y border-white/10 bg-graphite/[0.45]">
      <div className="container-px">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Часто задаваемые вопросы"
            text="Собрали ответы на вопросы, которые чаще всего возникают перед первым визитом в сервис."
            align="center"
          />
        </Reveal>

        <div className="mx-auto max-w-4xl space-y-3">
          {questions.map((item, index) => {
            const isOpen = open === index;
            const panelId = `faq-panel-${index}`;
            return (
              <Reveal key={item.question} delay={index * 0.025}>
                <div className="rounded-lg border border-white/10 bg-carbon/[0.74]">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    className="focus-ring flex w-full items-center justify-between gap-4 rounded-lg px-5 py-5 text-left"
                  >
                    <span className="text-base font-black text-white sm:text-lg">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 text-signal transition duration-300",
                        isOpen && "rotate-180"
                      )}
                      aria-hidden="true"
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        id={panelId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-sm leading-7 text-white/[0.64]">
                          {item.answer}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
