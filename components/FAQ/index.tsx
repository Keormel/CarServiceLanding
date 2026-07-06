"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Reveal from "@/components/UI/Reveal";
import SectionHeading from "@/components/UI/SectionHeading";
import { cn } from "@/lib/utils";

const questions = [
  {
    question: "Cât durează diagnosticarea automobilului?",
    answer:
      "Diagnosticarea de bază durează de obicei 40-60 de minute. Dacă este necesară o verificare profundă a motorului, electricii sau cutiei, confirmăm timpul și costul înainte."
  },
  {
    question: "Pot veni cu piesele mele?",
    answer:
      "Da, însă garanția piesei rămâne la furnizor. Garanția pentru lucrarea noastră se păstrează dacă piesa corespunde specificației și nu are defecte vizibile."
  },
  {
    question: "Confirmați prețul înainte de reparație?",
    answer:
      "Da. După diagnosticare primești devizul cu lucrări, piese și termeni. Începem doar după confirmarea ta."
  },
  {
    question: "Oferiți garanție pentru reparații?",
    answer:
      "Da, garanția pentru lucrări și piesele montate este de până la 24 de luni. Condițiile sunt indicate în actele de service."
  },
  {
    question: "Lucrați cu mărci premium?",
    answer:
      "Da. Deservim BMW, Mercedes-Benz, Audi, Lexus, Porsche, Volvo și alte mărci, inclusiv automobile cu electronică modernă."
  },
  {
    question: "Pot lăsa automobilul pentru o zi?",
    answer:
      "Da. Automobilul rămâne într-o zonă de service închisă. Când este gata, te anunțăm și stabilim ora de predare."
  },
  {
    question: "Faceți reparații urgente?",
    answer:
      "Dacă avem fereastră liberă și piesele necesare, putem prelua lucrări urgente în aceeași zi. Cel mai bine este să suni în avans."
  },
  {
    question: "Cum înțeleg că reparația este într-adevăr necesară?",
    answer:
      "Îți arătăm rezultatele diagnosticului, foto sau video cu piesele uzate și explicăm riscurile. Tu alegi ce faci acum și ce poți planifica."
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
            title="Întrebări frecvente"
            text="Am adunat răspunsurile care apar cel mai des înainte de prima vizită la service."
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
