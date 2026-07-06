"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/components/UI/LanguageProvider";
import Reveal from "@/components/UI/Reveal";
import SectionHeading from "@/components/UI/SectionHeading";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const { dictionary } = useLanguage();
  const faq = dictionary.faq;

  return (
    <section id="faq" className="section-pad scroll-mt-20 border-y border-white/10 bg-graphite/[0.45]">
      <div className="container-px">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title={faq.title}
            text={faq.text}
            align="center"
          />
        </Reveal>

        <div className="mx-auto max-w-4xl space-y-3">
          {faq.items.map((item, index) => {
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
