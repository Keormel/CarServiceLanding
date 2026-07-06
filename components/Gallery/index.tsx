"use client";

import Reveal from "@/components/UI/Reveal";
import SectionHeading from "@/components/UI/SectionHeading";
import SkeletonImage from "@/components/UI/SkeletonImage";

const photos = [
  {
    title: "Zona de diagnosticare",
    alt: "Zonă curată pentru diagnosticarea automobilului",
    src: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1200&q=82"
  },
  {
    title: "Procesul de reparație",
    alt: "Mecanic care repară un automobil",
    src: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=82"
  },
  {
    title: "Instrumente profesionale",
    alt: "Set de instrumente într-un service auto",
    src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=82"
  },
  {
    title: "Automobile premium",
    alt: "Automobil modern în zona de service",
    src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=82"
  },
  {
    title: "Zona de service",
    alt: "Elevator și echipamente pentru service auto",
    src: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=1200&q=82"
  },
  {
    title: "Verificare finală",
    alt: "Automobil după întreținere",
    src: "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=82"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="section-pad scroll-mt-20 border-y border-white/10 bg-graphite/[0.45]">
      <div className="container-px">
        <Reveal>
          <SectionHeading
            eyebrow="Galerie"
            title="Atelier curat, instrumente precise și mașini în mâini sigure"
            text="Zonele de lucru sunt organizate pentru intervenții rapide și protecția automobilului."
            align="center"
          />
        </Reveal>

        <div className="grid auto-rows-[260px] gap-4 md:grid-cols-2 lg:grid-cols-4">
          {photos.map((photo, index) => (
            <Reveal
              key={photo.title}
              delay={index * 0.035}
              className={index === 0 || index === 3 ? "lg:col-span-2" : undefined}
            >
              <figure className="group relative h-full overflow-hidden rounded-lg border border-white/10 bg-white/5">
                <SkeletonImage
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="h-full rounded-none"
                  imageClassName="object-cover transition duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/[0.85] via-black/40 to-transparent p-5">
                  <span className="inline-flex rounded-lg bg-signal px-3 py-1 text-xs font-black text-white">
                    {photo.title}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
