import Logo from "@/components/UI/Logo";
import { navLinks, siteConfig } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#070707] py-10">
      <div className="container-px">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/[0.54]">
              Премиальный автосервис с прозрачной диагностикой, гарантией и уважением
              к вашему времени.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-3 sm:grid-cols-3" aria-label="Меню в футере">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="focus-ring rounded-lg px-3 py-2 text-sm font-semibold text-white/[0.64] transition hover:bg-white/[0.06] hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="text-sm leading-7 text-white/[0.62] lg:text-right">
            <a
              href={siteConfig.phoneHref}
              className="focus-ring rounded-lg font-bold text-white transition hover:text-signal"
            >
              {siteConfig.phone}
            </a>
            <p>{siteConfig.email}</p>
            <p>{siteConfig.address}</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Apex Motors. Все права защищены.</p>
          <p>Политика качества и гарантийные условия доступны в сервисе.</p>
        </div>
      </div>
    </footer>
  );
}
