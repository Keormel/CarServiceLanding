"use client";

import Reveal from "@/components/UI/Reveal";
import SectionHeading from "@/components/UI/SectionHeading";
import SkeletonImage from "@/components/UI/SkeletonImage";

const photos = [
  {
    title: "Цех диагностики",
    alt: "Чистая зона диагностики автомобиля",
    src: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1200&q=82"
  },
  {
    title: "Процесс ремонта",
    alt: "Мастер выполняет ремонт автомобиля",
    src: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=82"
  },
  {
    title: "Профессиональный инструмент",
    alt: "Набор инструмента в автомастерской",
    src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=82"
  },
  {
    title: "Премиальные автомобили",
    alt: "Современный автомобиль в сервисной зоне",
    src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=82"
  },
  {
    title: "Сервисная зона",
    alt: "Подъемник и оборудование автосервиса",
    src: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=1200&q=82"
  },
  {
    title: "Финальная проверка",
    alt: "Автомобиль после обслуживания",
    src: "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=82"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="section-pad scroll-mt-20 border-y border-white/10 bg-graphite/[0.45]">
      <div className="container-px">
        <Reveal>
          <SectionHeading
            eyebrow="Галерея"
            title="Чистая мастерская, точный инструмент и автомобили в надежных руках"
            text="Рабочие зоны организованы так, чтобы ускорить обслуживание и исключить случайные повреждения."
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
