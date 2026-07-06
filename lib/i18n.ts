export const locales = [
  { code: "ro", label: "RO", name: "Română", htmlLang: "ro-MD" },
  { code: "ru", label: "RU", name: "Русский", htmlLang: "ru-MD" },
  { code: "en", label: "EN", name: "English", htmlLang: "en-MD" }
] as const;

export type Locale = (typeof locales)[number]["code"];

export const defaultLocale: Locale = "ru";

export const dictionaries = {
  ro: {
    seo: {
      title: "Aleks-Blitz — service auto premium în Chișinău",
      description:
        "Service auto premium în Chișinău: diagnosticare, reparații motor, suspensie, frâne, electrică auto și mentenanță cu garanție."
    },
    nav: [
      { href: "#services", label: "Servicii" },
      { href: "#process", label: "Proces" },
      { href: "#gallery", label: "Galerie" },
      { href: "#reviews", label: "Recenzii" },
      { href: "#faq", label: "FAQ" },
      { href: "#contact", label: "Contacte" }
    ],
    header: {
      homeLabel: "Aleks-Blitz pagina principală",
      menuLabel: "Meniu principal",
      mobileMenuLabel: "Meniu mobil",
      bookAria: "Programează-te la service",
      callAria: "Sună la",
      book: "Programare",
      call: "Sună",
      openMenu: "Deschide meniul",
      closeMenu: "Închide meniul"
    },
    hero: {
      stats: [
        { value: "10+", label: "ani experiență" },
        { value: "4.9", label: "rating mediu" },
        { value: "24 luni", label: "garanție" }
      ],
      imageAlt: "Atelier auto modern cu automobil pe elevator",
      badge: "Service premium pentru automobile de orice clasă",
      title: "Service auto unde reparația este rapidă, corectă și transparentă",
      text:
        "Diagnosticare în 40 de minute, deviz confirmat înainte de lucrări și garanție până la 24 de luni. Păstrăm siguranța, dinamica și valoarea mașinii tale.",
      primary: "Programează-te",
      secondary: "Sună acum",
      diagnosticTitle: "Diagnosticare 360°",
      diagnosticText: "Scanner, test drive, elevator",
      warrantyTitle: "Garanție până la 24 luni",
      warrantyText: "Pentru lucrări și piese montate"
    },
    services: {
      eyebrow: "Serviciile noastre",
      title: "Acoperim întregul ciclu de întreținere auto",
      text:
        "De la diagnosticare precisă până la reparații complexe. Fiecare lucrare este documentată, iar devizul este confirmat înainte de start.",
      details: "Detalii",
      detailsAria: "Detalii",
      items: [
        {
          title: "Diagnosticare",
          description:
            "Verificare computerizată, inspecție mecanică și raport clar cu priorități."
        },
        {
          title: "Schimb ulei",
          description:
            "Ulei conform specificației, filtre premium și resetarea intervalelor de service."
        },
        {
          title: "Sistem de frânare",
          description: "Plăcuțe, discuri, etriere, lichid de frână și test de eficiență."
        },
        {
          title: "Suspensie",
          description:
            "Diagnosticarea zgomotelor, înlocuire brațe, amortizoare, bucșe și bielete."
        },
        {
          title: "Electrică auto",
          description:
            "Consum parazitar, erori module, senzori, cablaj și electronică auto complexă."
        },
        {
          title: "Motor",
          description:
            "De la mentenanță preventivă până la reparații majore cu test compresie."
        },
        {
          title: "Cutie de viteze",
          description: "Service pentru automată, DSG, CVT, adaptări și eliminarea smuciturilor."
        },
        {
          title: "Anvelope",
          description: "Schimb sezonier, echilibrare, reparare pene și depozitare roți."
        }
      ]
    },
    whyUs: {
      eyebrow: "De ce ne aleg",
      title: "Service fără surprize în deviz sau calitate",
      text:
        "Explicăm problema pe înțelesul tău, arătăm piesele uzate și păstrăm istoricul de service al automobilului.",
      items: [
        {
          title: "Peste 10 ani experiență",
          text: "Lucrăm cu mărci germane, japoneze, coreene și premium."
        },
        {
          title: "Mecanici certificați",
          text: "Echipa se instruiește constant pe sisteme și proceduri moderne."
        },
        {
          title: "Echipamente moderne",
          text: "Scannere profesionale, elevatoare, standuri și instrumente specializate."
        },
        {
          title: "Piese originale",
          text: "Selectăm OEM, original sau analog verificat în funcție de buget."
        },
        {
          title: "Garanție la lucrări",
          text: "Garanție scrisă până la 24 de luni, cu condiții clare."
        },
        {
          title: "Prețuri corecte",
          text: "Fără servicii impuse: doar lucrări care influențează siguranța și resursa."
        }
      ]
    },
    process: {
      eyebrow: "Cum lucrăm",
      title: "Proces clar, cu control la fiecare etapă",
      text:
        "Vezi exact pentru ce plătești și iei decizii pe baza diagnosticului, nu a presupunerilor.",
      items: [
        {
          title: "Trimite solicitarea",
          text: "Alege ora potrivită, serviciul și descrie ce se întâmplă cu mașina."
        },
        {
          title: "Diagnosticarea automobilului",
          text: "Verificăm sistemele, prezentăm datele și separăm urgentul de planificat."
        },
        {
          title: "Confirmarea costului",
          text: "Fixăm devizul, termenii, lista pieselor și începem doar după acordul tău."
        },
        {
          title: "Reparație și predare",
          text: "Facem verificarea finală, oferim recomandări și documentele de garanție."
        }
      ]
    },
    gallery: {
      eyebrow: "Galerie",
      title: "Atelier curat, instrumente precise și mașini în mâini sigure",
      text:
        "Zonele de lucru sunt organizate pentru intervenții rapide și protecția automobilului.",
      photos: [
        { title: "Zona de diagnosticare", alt: "Zonă curată pentru diagnosticarea automobilului" },
        { title: "Procesul de reparație", alt: "Mecanic care repară un automobil" },
        { title: "Instrumente profesionale", alt: "Set de instrumente într-un service auto" },
        { title: "Automobile premium", alt: "Automobil modern în zona de service" },
        { title: "Zona de service", alt: "Elevator și echipamente pentru service auto" },
        { title: "Verificare finală", alt: "Automobil după întreținere" }
      ]
    },
    testimonials: {
      eyebrow: "Recenzii",
      title: "Clienții ne recomandă după prima vizită",
      text:
        "Oamenii apreciază diagnosticul precis, lucrările curate și faptul că nu ascundem procesul de reparație.",
      previous: "Recenzia precedentă",
      next: "Recenzia următoare",
      photoAlt: "Fotografia clientului",
      ratingLabel: "5 din 5",
      showReview: "Afișează recenzia",
      items: [
        {
          name: "Andrei Ceban",
          car: "Audi A6",
          text:
            "Am venit cu vibrații și o eroare la motor. Într-o oră au găsit cauza, mi-au arătat video de la endoscop și am confirmat reparația fără presiune."
        },
        {
          name: "Elena Rusu",
          car: "Mercedes-Benz GLC",
          text:
            "Service foarte curat și comunicare clară. Mi-au explicat costul, termenii și variantele de piese din timp. După reparație am primit și raport foto."
        },
        {
          name: "Victor Munteanu",
          car: "Toyota Camry",
          text:
            "Am făcut suspensia și frânele. Fără lucrări inutile, piesele vechi au fost arătate. După o săptămână m-au sunat să verifice dacă totul e în regulă."
        }
      ]
    },
    faq: {
      title: "Întrebări frecvente",
      text: "Am adunat răspunsurile care apar cel mai des înainte de prima vizită la service.",
      items: [
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
      ]
    },
    cta: {
      imageAlt: "Automobil după întreținere într-un service premium",
      eyebrow: "Te putem ajuta azi",
      title: "Programează reparația chiar astăzi",
      text:
        "Lasă o solicitare sau sună. Alegem o fereastră comodă, pregătim mecanicul și începem cu diagnosticare sinceră, fără lucrări inutile.",
      call: "Sună",
      request: "Lasă solicitare"
    },
    contact: {
      eyebrow: "Contacte",
      title: "Vino la diagnosticare sau lasă o solicitare online",
      text:
        "Suntem în Chișinău, cu acces comod pentru șoferii din oraș și suburbii. Pentru întreținere planificată recomandăm programarea în avans.",
      labels: {
        address: "Adresă",
        phone: "Telefon",
        email: "Email",
        hours: "Program"
      },
      mapTitle: "Aleks-Blitz pe hartă"
    },
    form: {
      eyebrow: "Programare service",
      title: "Primește o estimare clară",
      text: "Un mecanic te contactează, clarifică simptomele și propune o oră comodă.",
      name: "Nume",
      namePlaceholder: "Andrei",
      phone: "Telefon",
      phonePlaceholder: "+373 60 000 000",
      brand: "Marca automobilului",
      brandPlaceholder: "Toyota",
      model: "Model",
      modelPlaceholder: "Corolla",
      year: "Anul producerii",
      service: "Alege serviciul",
      comment: "Comentariu",
      commentPlaceholder: "Descrie problema, kilometrajul sau ora potrivită pentru apel",
      submit: "Trimite solicitarea",
      success:
        "Solicitarea a fost trimisă. Revenim cu un apel în 10 minute pentru confirmare.",
      errors: {
        name: "Indică un nume de cel puțin 2 caractere.",
        phone: "Indică un număr de telefon corect.",
        brand: "Indică marca automobilului.",
        model: "Indică modelul automobilului.",
        year: "Anul trebuie să fie între 1980 și",
        service: "Alege serviciul.",
        comment: "Comentariul trebuie să fie sub 500 de caractere."
      }
    },
    footer: {
      text:
        "Service auto premium cu diagnosticare transparentă, garanție și respect pentru timpul tău.",
      menuLabel: "Meniu footer",
      rights: "Toate drepturile rezervate.",
      warranty: "Condițiile de garanție sunt disponibile în service."
    },
    ui: {
      loader: "Încărcăm service-ul",
      whatsappLabel: "Scrie pe WhatsApp",
      callLabel: "Sună la Aleks-Blitz",
      scrollTop: "Sus",
      languageLabel: "Alege limba"
    }
  },
  ru: {
    seo: {
      title: "Aleks-Blitz — премиальный автосервис в Кишиневе",
      description:
        "Премиальный автосервис в Кишиневе: диагностика, ремонт двигателя, подвески, тормозов, электрики и плановое обслуживание с гарантией."
    },
    nav: [
      { href: "#services", label: "Услуги" },
      { href: "#process", label: "Процесс" },
      { href: "#gallery", label: "Галерея" },
      { href: "#reviews", label: "Отзывы" },
      { href: "#faq", label: "FAQ" },
      { href: "#contact", label: "Контакты" }
    ],
    header: {
      homeLabel: "Aleks-Blitz на главную",
      menuLabel: "Основное меню",
      mobileMenuLabel: "Мобильное меню",
      bookAria: "Записаться на сервис",
      callAria: "Позвонить",
      book: "Записаться",
      call: "Позвонить",
      openMenu: "Открыть меню",
      closeMenu: "Закрыть меню"
    },
    hero: {
      stats: [
        { value: "10+", label: "лет опыта" },
        { value: "4.9", label: "средняя оценка" },
        { value: "24 мес.", label: "гарантия" }
      ],
      imageAlt: "Современная автомастерская с автомобилем на подъемнике",
      badge: "Премиальный сервис для автомобилей любого класса",
      title: "Автосервис, где ремонт проходит быстро, точно и прозрачно",
      text:
        "Диагностика за 40 минут, согласованная смета до начала работ и гарантия до 24 месяцев. Сохраним безопасность, динамику и стоимость вашего авто.",
      primary: "Записаться",
      secondary: "Позвонить",
      diagnosticTitle: "Диагностика 360°",
      diagnosticText: "Сканер, тест-драйв, подъемник",
      warrantyTitle: "Гарантия до 24 месяцев",
      warrantyText: "На работы и установленные детали"
    },
    services: {
      eyebrow: "Наши услуги",
      title: "Закрываем весь цикл обслуживания автомобиля",
      text:
        "От точной диагностики до сложного ремонта агрегатов. Каждая работа фиксируется, а смета согласуется до старта.",
      details: "Подробнее",
      detailsAria: "Подробнее",
      items: [
        {
          title: "Диагностика",
          description:
            "Компьютерная проверка, осмотр механики и понятный отчет с приоритетами."
        },
        {
          title: "Замена масла",
          description: "Масло по допуску, премиальные фильтры и сброс сервисных интервалов."
        },
        {
          title: "Тормозная система",
          description: "Колодки, диски, суппорты, тормозная жидкость и проверка эффективности."
        },
        {
          title: "Подвеска",
          description: "Диагностика стуков, замена рычагов, амортизаторов, сайлентблоков."
        },
        {
          title: "Электрика",
          description: "Утечки тока, ошибки блоков, датчики, проводка и сложная электроника."
        },
        {
          title: "Двигатель",
          description: "От профилактики до сложного ремонта с замером компрессии."
        },
        {
          title: "Коробка передач",
          description: "Обслуживание АКПП, DSG, вариаторов, адаптации и устранение рывков."
        },
        {
          title: "Шиномонтаж",
          description: "Сезонная смена, балансировка, ремонт проколов и хранение колес."
        }
      ]
    },
    whyUs: {
      eyebrow: "Почему выбирают нас",
      title: "Сервис без сюрпризов в смете и качестве",
      text:
        "Объясняем проблему простым языком, показываем изношенные детали и сохраняем историю обслуживания автомобиля.",
      items: [
        {
          title: "Более 10 лет опыта",
          text: "Работаем с немецкими, японскими, корейскими и премиальными марками."
        },
        {
          title: "Сертифицированные мастера",
          text: "Команда регулярно обучается современным системам и регламентам."
        },
        {
          title: "Современное оборудование",
          text: "Профессиональные сканеры, подъемники, стенды и специализированный инструмент."
        },
        {
          title: "Оригинальные запчасти",
          text: "Подбираем OEM, оригинал или проверенный аналог под ваш бюджет."
        },
        {
          title: "Гарантия на работы",
          text: "Письменная гарантия до 24 месяцев с прозрачными условиями."
        },
        {
          title: "Честные цены",
          text: "Без навязанных услуг: только то, что влияет на ресурс и безопасность."
        }
      ]
    },
    process: {
      eyebrow: "Как мы работаем",
      title: "Понятный процесс с контролем на каждом этапе",
      text:
        "Вы видите, за что платите, и принимаете решения на основе диагностики, а не догадок.",
      items: [
        {
          title: "Оставьте заявку",
          text: "Выберите удобное время, услугу и расскажите, что беспокоит в автомобиле."
        },
        {
          title: "Диагностика автомобиля",
          text: "Проверяем системы, показываем факты и разделяем срочное от планового."
        },
        {
          title: "Согласование стоимости",
          text: "Фиксируем смету, сроки, список деталей и начинаем только после согласия."
        },
        {
          title: "Ремонт и выдача автомобиля",
          text: "Проводим финальную проверку, даем рекомендации и гарантийные документы."
        }
      ]
    },
    gallery: {
      eyebrow: "Галерея",
      title: "Чистая мастерская, точный инструмент и автомобили в надежных руках",
      text:
        "Рабочие зоны организованы так, чтобы ускорить обслуживание и исключить случайные повреждения.",
      photos: [
        { title: "Цех диагностики", alt: "Чистая зона диагностики автомобиля" },
        { title: "Процесс ремонта", alt: "Мастер выполняет ремонт автомобиля" },
        { title: "Профессиональный инструмент", alt: "Набор инструмента в автосервисе" },
        { title: "Премиальные автомобили", alt: "Современный автомобиль в сервисной зоне" },
        { title: "Сервисная зона", alt: "Подъемник и оборудование автосервиса" },
        { title: "Финальная проверка", alt: "Автомобиль после обслуживания" }
      ]
    },
    testimonials: {
      eyebrow: "Отзывы клиентов",
      title: "Нас рекомендуют после первого визита",
      text:
        "Клиенты ценят точность диагностики, аккуратность работ и открытый процесс ремонта.",
      previous: "Предыдущий отзыв",
      next: "Следующий отзыв",
      photoAlt: "Фото клиента",
      ratingLabel: "5 из 5",
      showReview: "Показать отзыв",
      items: [
        {
          name: "Андрей Чебан",
          car: "Audi A6",
          text:
            "Приехал с вибрацией и ошибкой по двигателю. За час нашли причину, показали видео с эндоскопа и согласовали ремонт без давления."
        },
        {
          name: "Елена Русу",
          car: "Mercedes-Benz GLC",
          text:
            "Очень чистый сервис и понятное общение. Заранее объяснили стоимость, сроки и варианты запчастей. После ремонта прислали фотоотчет."
        },
        {
          name: "Виктор Мунтяну",
          car: "Toyota Camry",
          text:
            "Делал подвеску и тормоза. Без лишних работ, старые детали показали. Через неделю позвонили и уточнили, все ли в порядке."
        }
      ]
    },
    faq: {
      title: "Часто задаваемые вопросы",
      text: "Собрали ответы на вопросы, которые чаще всего возникают перед первым визитом.",
      items: [
        {
          question: "Сколько занимает диагностика автомобиля?",
          answer:
            "Базовая диагностика обычно занимает 40-60 минут. Если нужна глубокая проверка двигателя, электрики или коробки, заранее согласуем время и стоимость."
        },
        {
          question: "Можно ли приехать со своими запчастями?",
          answer:
            "Да, но гарантия на деталь остается у поставщика. На нашу работу гарантия сохраняется, если деталь подходит по спецификации."
        },
        {
          question: "Вы согласуете цену до ремонта?",
          answer:
            "Да. После диагностики вы получаете смету с работами, деталями и сроками. Начинаем только после вашего подтверждения."
        },
        {
          question: "Есть ли гарантия на ремонт?",
          answer:
            "Да, гарантия на работы и установленные детали действует до 24 месяцев. Условия фиксируются в документах сервиса."
        },
        {
          question: "Работаете ли вы с премиальными марками?",
          answer:
            "Да. Обслуживаем BMW, Mercedes-Benz, Audi, Lexus, Porsche, Volvo и другие марки с современной электроникой."
        },
        {
          question: "Можно ли оставить автомобиль на день?",
          answer:
            "Да. Автомобиль остается в закрытой сервисной зоне. По готовности сообщим статус и согласуем время выдачи."
        },
        {
          question: "Делаете ли вы срочный ремонт?",
          answer:
            "Если есть свободное окно и нужные запчасти, берем срочные работы в тот же день. Лучше позвонить заранее."
        },
        {
          question: "Как понять, что ремонт действительно нужен?",
          answer:
            "Показываем результаты диагностики, фото или видео изношенных узлов и объясняем риски. Решение остается за вами."
        }
      ]
    },
    cta: {
      imageAlt: "Автомобиль после обслуживания в премиальном сервисе",
      eyebrow: "Готовы помочь сегодня",
      title: "Запишитесь на ремонт уже сегодня",
      text:
        "Оставьте заявку или позвоните. Подберем удобное окно, подготовим мастера и начнем с честной диагностики без лишних работ.",
      call: "Позвонить",
      request: "Оставить заявку"
    },
    contact: {
      eyebrow: "Контакты",
      title: "Приезжайте на диагностику или оставьте заявку онлайн",
      text:
        "Мы находимся в Кишиневе, с удобным доступом для водителей из города и пригородов. Для планового обслуживания лучше записаться заранее.",
      labels: {
        address: "Адрес",
        phone: "Телефон",
        email: "Email",
        hours: "Часы работы"
      },
      mapTitle: "Aleks-Blitz на карте"
    },
    form: {
      eyebrow: "Запись на сервис",
      title: "Получите точную смету",
      text: "Мастер свяжется с вами, уточнит симптомы и предложит удобное окно.",
      name: "Имя",
      namePlaceholder: "Андрей",
      phone: "Телефон",
      phonePlaceholder: "+373 60 000 000",
      brand: "Марка автомобиля",
      brandPlaceholder: "Toyota",
      model: "Модель",
      modelPlaceholder: "Corolla",
      year: "Год выпуска",
      service: "Выбор услуги",
      comment: "Комментарий",
      commentPlaceholder: "Опишите проблему, пробег или удобное время для звонка",
      submit: "Оставить заявку",
      success: "Заявка принята. Мы перезвоним в течение 10 минут и подтвердим запись.",
      errors: {
        name: "Укажите имя от 2 символов.",
        phone: "Укажите корректный телефон.",
        brand: "Укажите марку автомобиля.",
        model: "Укажите модель автомобиля.",
        year: "Год должен быть от 1980 до",
        service: "Выберите услугу.",
        comment: "Комментарий должен быть короче 500 символов."
      }
    },
    footer: {
      text:
        "Премиальный автосервис с прозрачной диагностикой, гарантией и уважением к вашему времени.",
      menuLabel: "Меню в футере",
      rights: "Все права защищены.",
      warranty: "Гарантийные условия доступны в сервисе."
    },
    ui: {
      loader: "Загружаем сервис",
      whatsappLabel: "Написать в WhatsApp",
      callLabel: "Позвонить в Aleks-Blitz",
      scrollTop: "Наверх",
      languageLabel: "Выберите язык"
    }
  },
  en: {
    seo: {
      title: "Aleks-Blitz — premium auto service in Chisinau",
      description:
        "Premium auto service in Chisinau: diagnostics, engine repair, suspension, brakes, auto electrics and maintenance with warranty."
    },
    nav: [
      { href: "#services", label: "Services" },
      { href: "#process", label: "Process" },
      { href: "#gallery", label: "Gallery" },
      { href: "#reviews", label: "Reviews" },
      { href: "#faq", label: "FAQ" },
      { href: "#contact", label: "Contact" }
    ],
    header: {
      homeLabel: "Aleks-Blitz home",
      menuLabel: "Main menu",
      mobileMenuLabel: "Mobile menu",
      bookAria: "Book a service visit",
      callAria: "Call",
      book: "Book",
      call: "Call",
      openMenu: "Open menu",
      closeMenu: "Close menu"
    },
    hero: {
      stats: [
        { value: "10+", label: "years experience" },
        { value: "4.9", label: "average rating" },
        { value: "24 mo.", label: "warranty" }
      ],
      imageAlt: "Modern auto workshop with a car on a lift",
      badge: "Premium service for every class of car",
      title: "Auto service where repairs are fast, precise and transparent",
      text:
        "Diagnostics in 40 minutes, approved estimate before work starts and warranty up to 24 months. We protect your car's safety, performance and value.",
      primary: "Book now",
      secondary: "Call now",
      diagnosticTitle: "360° diagnostics",
      diagnosticText: "Scanner, test drive, lift inspection",
      warrantyTitle: "Warranty up to 24 months",
      warrantyText: "For labor and installed parts"
    },
    services: {
      eyebrow: "Our services",
      title: "Full-cycle car maintenance and repair",
      text:
        "From accurate diagnostics to complex unit repairs. Every job is documented and the estimate is approved before we start.",
      details: "Details",
      detailsAria: "Details",
      items: [
        {
          title: "Diagnostics",
          description: "Computer scan, mechanical inspection and a clear priority report."
        },
        {
          title: "Oil change",
          description: "Correct oil specification, premium filters and service interval reset."
        },
        {
          title: "Brake system",
          description: "Pads, discs, calipers, brake fluid and braking efficiency checks."
        },
        {
          title: "Suspension",
          description: "Noise diagnostics, control arms, shocks, bushings and links."
        },
        {
          title: "Auto electrics",
          description: "Parasitic drain, module errors, sensors, wiring and complex electronics."
        },
        {
          title: "Engine",
          description: "From preventive maintenance to major repairs with compression testing."
        },
        {
          title: "Transmission",
          description: "Automatic, DSG and CVT service, adaptations and shift issue fixes."
        },
        {
          title: "Tire service",
          description: "Seasonal change, balancing, puncture repair and wheel storage."
        }
      ]
    },
    whyUs: {
      eyebrow: "Why choose us",
      title: "No surprises in estimates or quality",
      text:
        "We explain issues clearly, show worn parts and keep a service history for your car.",
      items: [
        {
          title: "Over 10 years experience",
          text: "We work with German, Japanese, Korean and premium brands."
        },
        {
          title: "Certified mechanics",
          text: "The team trains regularly on modern systems and procedures."
        },
        {
          title: "Modern equipment",
          text: "Professional scanners, lifts, stands and specialized tools."
        },
        {
          title: "Original parts",
          text: "We select OEM, genuine or verified alternatives for your budget."
        },
        {
          title: "Work warranty",
          text: "Written warranty up to 24 months with clear conditions."
        },
        {
          title: "Fair prices",
          text: "No forced extras: only work that affects safety and service life."
        }
      ]
    },
    process: {
      eyebrow: "How we work",
      title: "A clear process with control at every step",
      text:
        "You see exactly what you pay for and make decisions based on diagnostics, not guesses.",
      items: [
        {
          title: "Send a request",
          text: "Choose a convenient time, service and tell us what worries you about the car."
        },
        {
          title: "Car diagnostics",
          text: "We check the systems, show the facts and separate urgent issues from planned work."
        },
        {
          title: "Cost approval",
          text: "We fix the estimate, timing and parts list, then start only after your approval."
        },
        {
          title: "Repair and handover",
          text: "We run the final check, give recommendations and warranty documents."
        }
      ]
    },
    gallery: {
      eyebrow: "Gallery",
      title: "Clean workshop, precise tools and cars in safe hands",
      text:
        "Work areas are organized for faster service and protection against accidental damage.",
      photos: [
        { title: "Diagnostics bay", alt: "Clean car diagnostics area" },
        { title: "Repair process", alt: "Mechanic repairing a car" },
        { title: "Professional tools", alt: "Tool set in an auto workshop" },
        { title: "Premium cars", alt: "Modern car in a service bay" },
        { title: "Service area", alt: "Lift and equipment in an auto service" },
        { title: "Final check", alt: "Car after maintenance" }
      ]
    },
    testimonials: {
      eyebrow: "Client reviews",
      title: "Customers recommend us after the first visit",
      text:
        "Clients value precise diagnostics, clean work and a repair process that stays visible.",
      previous: "Previous review",
      next: "Next review",
      photoAlt: "Client photo",
      ratingLabel: "5 out of 5",
      showReview: "Show review",
      items: [
        {
          name: "Andrew Ceban",
          car: "Audi A6",
          text:
            "I came in with vibration and an engine error. In an hour they found the cause, showed endoscope video and approved the repair without pressure."
        },
        {
          name: "Elena Rusu",
          car: "Mercedes-Benz GLC",
          text:
            "Very clean service and clear communication. They explained cost, timing and parts options upfront. After the repair I received a photo report."
        },
        {
          name: "Victor Munteanu",
          car: "Toyota Camry",
          text:
            "I repaired the suspension and brakes. No unnecessary work, old parts were shown. A week later they called to check if everything was fine."
        }
      ]
    },
    faq: {
      title: "Frequently asked questions",
      text: "Answers to the questions customers usually ask before the first visit.",
      items: [
        {
          question: "How long does car diagnostics take?",
          answer:
            "Basic diagnostics usually takes 40-60 minutes. If the engine, electrics or transmission need deeper checks, we approve time and cost in advance."
        },
        {
          question: "Can I bring my own parts?",
          answer:
            "Yes, but the part warranty remains with your supplier. Our work warranty stays valid if the part matches specifications and has no visible defects."
        },
        {
          question: "Do you approve the price before repair?",
          answer:
            "Yes. After diagnostics you receive an estimate with labor, parts and timing. We start only after your confirmation."
        },
        {
          question: "Is there a warranty on repairs?",
          answer:
            "Yes, warranty for labor and installed parts is up to 24 months. Conditions are documented in service paperwork."
        },
        {
          question: "Do you work with premium brands?",
          answer:
            "Yes. We service BMW, Mercedes-Benz, Audi, Lexus, Porsche, Volvo and other cars with modern electronics."
        },
        {
          question: "Can I leave the car for a day?",
          answer:
            "Yes. The car stays in a closed service area. When it is ready, we update you and agree on a pickup time."
        },
        {
          question: "Do you handle urgent repairs?",
          answer:
            "If we have an available slot and the needed parts, we can take urgent jobs the same day. It is better to call ahead."
        },
        {
          question: "How do I know the repair is really needed?",
          answer:
            "We show diagnostic results, photos or video of worn parts and explain the risks. You decide what to do now and what to plan."
        }
      ]
    },
    cta: {
      imageAlt: "Car after maintenance in a premium service",
      eyebrow: "Ready to help today",
      title: "Book your repair today",
      text:
        "Send a request or call. We will pick a convenient slot, prepare a mechanic and start with honest diagnostics without unnecessary work.",
      call: "Call",
      request: "Send request"
    },
    contact: {
      eyebrow: "Contact",
      title: "Come for diagnostics or send a request online",
      text:
        "We are in Chisinau, with convenient access for drivers from the city and suburbs. For scheduled maintenance, booking ahead is best.",
      labels: {
        address: "Address",
        phone: "Phone",
        email: "Email",
        hours: "Hours"
      },
      mapTitle: "Aleks-Blitz on the map"
    },
    form: {
      eyebrow: "Service booking",
      title: "Get a clear estimate",
      text: "A mechanic will contact you, clarify symptoms and suggest a convenient slot.",
      name: "Name",
      namePlaceholder: "Andrew",
      phone: "Phone",
      phonePlaceholder: "+373 60 000 000",
      brand: "Car brand",
      brandPlaceholder: "Toyota",
      model: "Model",
      modelPlaceholder: "Corolla",
      year: "Year",
      service: "Choose service",
      comment: "Comment",
      commentPlaceholder: "Describe the issue, mileage or a good time to call",
      submit: "Send request",
      success: "Request received. We will call you within 10 minutes to confirm the booking.",
      errors: {
        name: "Enter a name of at least 2 characters.",
        phone: "Enter a valid phone number.",
        brand: "Enter the car brand.",
        model: "Enter the car model.",
        year: "Year must be between 1980 and",
        service: "Choose a service.",
        comment: "Comment must be under 500 characters."
      }
    },
    footer: {
      text:
        "Premium auto service with transparent diagnostics, warranty and respect for your time.",
      menuLabel: "Footer menu",
      rights: "All rights reserved.",
      warranty: "Warranty conditions are available at the service."
    },
    ui: {
      loader: "Loading service",
      whatsappLabel: "Message on WhatsApp",
      callLabel: "Call Aleks-Blitz",
      scrollTop: "Back to top",
      languageLabel: "Choose language"
    }
  }
} as const;

export type Dictionary = (typeof dictionaries)[Locale];

export function getLocaleMeta(locale: Locale) {
  return locales.find((item) => item.code === locale) ?? locales[0];
}
