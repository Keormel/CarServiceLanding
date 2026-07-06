"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Reveal from "@/components/UI/Reveal";
import SectionHeading from "@/components/UI/SectionHeading";

const reviews = [
  {
    name: "Andrei Ceban",
    car: "Audi A6",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80",
    text: "Am venit cu vibrații și o eroare la motor. Într-o oră au găsit cauza, mi-au arătat video de la endoscop și am confirmat reparația fără presiune."
  },
  {
    name: "Elena Rusu",
    car: "Mercedes-Benz GLC",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=240&q=80",
    text: "Service foarte curat și comunicare clară. Mi-au explicat costul, termenii și variantele de piese din timp. După reparație am primit și raport foto."
  },
  {
    name: "Victor Munteanu",
    car: "Toyota Camry",
    photo:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=240&q=80",
    text: "Am făcut suspensia și frânele. Fără lucrări inutile, piesele vechi au fost arătate. După o săptămână m-au sunat să verifice dacă totul e în regulă."
  }
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % reviews.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, []);

  const currentReview = reviews[active];

  return (
    <section id="reviews" className="section-pad scroll-mt-20 bg-carbon">
      <div className="container-px">
        <Reveal>
          <SectionHeading
            eyebrow="Recenzii"
            title="Clienții ne recomandă după prima vizită"
            text="Oamenii apreciază diagnosticul precis, lucrările curate și faptul că nu ascundem procesul de reparație."
            align="center"
          />
        </Reveal>

        <Reveal>
          <div className="mx-auto max-w-4xl rounded-lg border border-white/10 bg-graphite/70 p-5 shadow-panel backdrop-blur-xl sm:p-8">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-signal text-white">
                <Quote className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Recenzia precedentă"
                  onClick={() =>
                    setActive((current) =>
                      current === 0 ? reviews.length - 1 : current - 1
                    )
                  }
                  className="focus-ring grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-white/5 text-white transition hover:border-signal hover:bg-signal"
                >
                  <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  aria-label="Recenzia următoare"
                  onClick={() => setActive((current) => (current + 1) % reviews.length)}
                  className="focus-ring grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-white/5 text-white transition hover:border-signal hover:bg-signal"
                >
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentReview.name}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                aria-live="polite"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                  <div className="relative h-20 w-20 overflow-hidden rounded-lg border border-white/10 bg-white/5">
                    <Image
                      src={currentReview.photo}
                      alt={`Fotografia clientului ${currentReview.name}`}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white">
                      {currentReview.name}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-white/[0.52]">
                      {currentReview.car}
                    </p>
                    <div className="mt-3 flex gap-1 text-amber-300" aria-label="5 din 5">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                          key={index}
                          className="h-4 w-4 fill-current"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-7 text-lg leading-8 text-white/[0.76]">
                  «{currentReview.text}»
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-7 flex justify-center gap-2">
              {reviews.map((review, index) => (
                <button
                  key={review.name}
                  type="button"
                  aria-label={`Afișează recenzia ${index + 1}`}
                  onClick={() => setActive(index)}
                  className={`h-2 rounded-full transition ${
                    index === active ? "w-8 bg-signal" : "w-2 bg-white/[0.22]"
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
