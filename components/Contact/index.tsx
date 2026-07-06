"use client";

import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube
} from "lucide-react";
import BookingForm from "@/components/UI/BookingForm";
import Reveal from "@/components/UI/Reveal";
import SectionHeading from "@/components/UI/SectionHeading";
import { siteConfig } from "@/lib/site";

const contacts = [
  {
    icon: MapPin,
    label: "Адрес",
    value: siteConfig.address,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.mapQuery)}`
  },
  {
    icon: Phone,
    label: "Телефон",
    value: siteConfig.phone,
    href: siteConfig.phoneHref
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`
  },
  {
    icon: Clock,
    label: "Часы работы",
    value: siteConfig.workingHours,
    href: null
  }
];

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" }
];

export default function Contact() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    siteConfig.mapQuery
  )}&output=embed`;

  return (
    <section id="contact" className="section-pad scroll-mt-20 bg-carbon">
      <div className="container-px">
        <Reveal>
          <SectionHeading
            eyebrow="Контакты"
            title="Приезжайте на диагностику или оставьте заявку онлайн"
            text="Мы находимся рядом с удобным выездом на ТТК. Для планового обслуживания лучше записаться заранее."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal>
            <div className="space-y-6">
              <div className="glass-panel rounded-lg p-5 sm:p-6">
                <div className="grid gap-3">
                  {contacts.map((item) => {
                    const Icon = item.icon;
                    const content = (
                      <div className="flex items-start gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-4 transition hover:border-signal/[0.45] hover:bg-white/[0.06]">
                        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-signal/[0.12] text-signal">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white/[0.48]">
                            {item.label}
                          </p>
                          <p className="mt-1 text-base font-bold text-white">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    );

                    return item.href ? (
                      <a
                        key={item.label}
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                        className="focus-ring block rounded-lg"
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={item.label}>{content}</div>
                    );
                  })}
                </div>

                <div className="mt-6 flex gap-3">
                  {socialLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={item.label}
                        className="focus-ring grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-white/[0.06] text-white transition hover:border-signal hover:bg-signal"
                      >
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="overflow-hidden rounded-lg border border-white/10 bg-graphite">
                <iframe
                  title="Apex Motors на карте"
                  src={mapSrc}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-72 w-full border-0 grayscale invert-[0.9] contrast-125 md:h-96"
                  allowFullScreen
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <BookingForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
