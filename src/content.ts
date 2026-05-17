import {
  Bot,
  GraduationCap,
  HeartPulse,
  Home,
  Instagram,
  Mail,
  MessageCircle,
  MessagesSquare,
  Send,
  ShoppingBag,
  Sparkles,
  Store,
  UserRoundCheck,
  Wrench,
} from "lucide-react";

// Edit these contact buttons here. Keep phone numbers inside links, not large visible text.
export const contactLinks = {
  telegram: "https://t.me/ilya_ar_23",
  whatsapp: "https://wa.me/380669754777",
  instagram: "https://instagram.com/ilya_ar_23",
  email: "mailto:IlyaZhuchenya@gmail.com",
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Industries", href: "#industries" },
  { label: "AI Assistants", href: "#assistants" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export const industries = [
  {
    title: "Beauty salons",
    text: "Bookings, service questions, price guidance and client reminders.",
    icon: Sparkles,
  },
  {
    title: "Dental clinics",
    text: "FAQ, appointment requests, first-touch support and treatment guidance.",
    icon: HeartPulse,
  },
  {
    title: "Online stores",
    text: "Product consultation, order questions, recommendations and sales support.",
    icon: ShoppingBag,
  },
  {
    title: "Construction and project companies",
    text: "Lead qualification, project details, estimate requests and manager handoff.",
    icon: Wrench,
  },
  {
    title: "Education projects",
    text: "Course selection, enrollment questions, scheduling and student support.",
    icon: GraduationCap,
  },
  {
    title: "Services and customer support",
    text: "Routine answers, request routing and support across popular messengers.",
    icon: MessagesSquare,
  },
];

export const capabilities = [
  "Answers clients 24/7",
  "Collects leads",
  "Books appointments",
  "Consults clients",
  "Helps sell services and products",
  "Works in website chat, Telegram, Instagram and WhatsApp",
  "Transfers complex requests to a human manager",
];

export const languageOptions = [
  { code: "uk", label: "UA" },
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
  { code: "es", label: "ES" },
  { code: "fr", label: "FR" },
  { code: "ar", label: "AR" },
  { code: "zh", label: "ZH" },
  { code: "hi", label: "HI" },
] as const;

export type LanguageCode = (typeof languageOptions)[number]["code"];

export const assistantGalleryCopy: Record<
  LanguageCode,
  {
    eyebrow: string;
    title: string;
    text: string;
    button: string;
    selectorLabel: string;
    bookDemo: string;
    hero: {
      eyebrow: string;
      title: string;
      text: string;
      primary: string;
      secondary: string;
    };
    navItems: { label: string; href: string }[];
    portalNavigation: string;
    sections: {
      videos: { eyebrow: string; title: string; text: string };
      examples: { eyebrow: string; title: string; text: string };
      pricing: { eyebrow: string; title: string; text: string };
      contact: { eyebrow: string; title: string; text: string };
    };
    industries: { title: string; text: string }[],
    cta: {
      title: string;
      primary: string;
      secondary: string;
    };
    orderSimilarAssistant: string;
    demoMenu: {
      title: string;
      demoVideo: string;
      pdfPresentation: string;
      screenshots: string;
      videoPresentation: string;
      unavailable: string;
      close: string;
    };
    contactForm: {
      nameLabel: string;
      businessLabel: string;
      contactLabel: string;
      messageLabel: string;
      sendButton: string;
      telegram: string;
      whatsapp: string;
      instagram: string;
      email: string;
      emailSubject: string;
    };
    footer: {
      brandTitle: string;
      brandText: string;
    };
  }
> = {
  uk: {
    eyebrow: "AI асистенти",
    title: "Розумні AI-помічники для вашого бізнесу",
    text: "Автоматизація спілкування з клієнтами, турботлива підтримка 24/7 і більше часу для важливого.",
    button: "Відкрити демо",
    selectorLabel: "Мова",
    bookDemo: "Замовити демо",
    hero: {
      eyebrow: "AI консультанти та агенти для бізнесу",
      title: "AI консультанти для сучасного бізнесу",
      text: "Автоматизуйте спілкування з клієнтами за допомогою розумних AI помічників.",
      primary: "Замовити демо",
      secondary: "Подивитися AI консультантів",
    },
    navItems: [
      { label: "Головна", href: "#home" },
      { label: "Індустрії", href: "#industries" },
      { label: "AI асистенти", href: "#assistants" },
      { label: "Ціни", href: "#pricing" },
      { label: "Контакт", href: "#contact" },
    ],
    portalNavigation: "ПОРТАЛЬНА НАВІГАЦІЯ",
    sections: {
      videos: {
        eyebrow: "Відеопрезентації",
        title: "Перегляньте, як AI консультанти спілкуються з клієнтами в реальних бізнес-сценаріях.",
        text: "Демонстрації показують реальну автоматизацію та робочі сценарії.",
      },
      examples: {
        eyebrow: "Приклади",
        title: "Практична автоматизація для типових клієнтських діалогів",
        text: "Кожен сценарій можна підключити до каналів та інструментів, які вже використовує ваш бізнес.",
      },
      pricing: {
        eyebrow: "Ціни",
        title: "Прості стартові точки, гнучка автоматизація",
        text: "Виберіть компактний пакет запуску або налаштуйте індивідуального помічника під ваш бізнес.",
      },
      contact: {
        eyebrow: "Контакт",
        title: "Розкажіть, що ваша команда хоче автоматизувати",
        text: "Форма підготовлена як простий заповнювач без бекенду. Поки бекенд не підключено, кнопка відкриває email-запит.",
      },
    },
    industries: [
      { title: "Beauty salons", text: "Bookings, service questions, price guidance and client reminders." },
      { title: "Dental clinics", text: "FAQ, appointment requests, first-touch support and treatment guidance." },
      { title: "Online stores", text: "Product consultation, order questions, recommendations and sales support." },
      { title: "Construction and project companies", text: "Lead qualification, project details, estimate requests and manager handoff." },
      { title: "Education projects", text: "Course selection, enrollment questions, scheduling and student support." },
      { title: "Services and customer support", text: "Routine answers, request routing and support across popular messengers." },
    ],
    cta: {
      title: "Хочете протестувати AI консультанта для вашого бізнесу?",
      primary: "Надіслати запит",
      secondary: "Дізнатися більше",
    },
    orderSimilarAssistant: "Замовити схожого асистента",
    demoMenu: {
      title: "Демо-меню",
      demoVideo: "Відео роботи",
      pdfPresentation: "PDF-презентація",
      screenshots: "Скріншоти",
      videoPresentation: "Відеопрезентація",
      unavailable: "Матеріал скоро буде додано",
      close: "Закрити",
    },
    contactForm: {
      nameLabel: "Ім'я",
      businessLabel: "Тип бізнесу",
      contactLabel: "Месенджер/контакт",
      messageLabel: "Повідомлення",
      sendButton: "Надіслати запит",
      telegram: "Контакт у Telegram",
      whatsapp: "Контакт у WhatsApp",
      instagram: "Instagram",
      email: "Email",
      emailSubject: "Запит на демо Tisgrow",
    },
    footer: {
      brandTitle: "Tisgrow",
      brandText: "AI консультанти та агенти, які допомагають сучасному бізнесу зростати.",
    },
  },
  en: {
    eyebrow: "AI assistants",
    title: "Futuristic AI consultant gallery",
    text: "Choose a ready assistant for your niche or use these cards as premium demo showcases.",
    button: "View Demo",
    selectorLabel: "Language",
    bookDemo: "Book a Demo",
    hero: {
      eyebrow: "AI consultants and agents for business",
      title: "AI Consultants for Modern Business",
      text: "Automate customer communication with intelligent AI assistants.",
      primary: "Book a Demo",
      secondary: "View AI Consultants",
    },
    navItems: [
      { label: "Home", href: "#home" },
      { label: "Industries", href: "#industries" },
      { label: "AI Assistants", href: "#assistants" },
      { label: "Pricing", href: "#pricing" },
      { label: "Contact", href: "#contact" },
    ],
    portalNavigation: "PORTAL NAVIGATION",
    sections: {
      videos: {
        eyebrow: "Video presentations",
        title: "Watch how AI consultants communicate with clients in real business scenarios.",
        text: "Explore how AI automation supports customer workflows.",
      },
      examples: {
        eyebrow: "Examples",
        title: "Practical automation for common client conversations",
        text: "Each scenario can be connected to the channels and tools your business already uses.",
      },
      pricing: {
        eyebrow: "Pricing",
        title: "Simple starting points, flexible automation",
        text: "Choose a compact launch package or build a custom assistant flow around your business process.",
      },
      contact: {
        eyebrow: "Contact",
        title: "Tell us what your team wants to automate",
        text: "The form is prepared as a simple no-backend placeholder. Until a backend is connected, the button opens an email request with the right structure.",
      },
    },
    industries: [
      { title: "Индустрии", text: "Записи, вопросы об услугах, цены и напоминания клиентам." },
      { title: "Стоматологии", text: "FAQ, запросы на приём, первичная поддержка и рекомендации по лечению." },
      { title: "Интернет-магазины", text: "Консультации по товарам, вопросы по заказам, рекомендации и поддержка продаж." },
      { title: "Строительство и проекты", text: "Квалификация лидов, детали проектов, запросы смет и передача менеджеру." },
      { title: "Образование", text: "Выбор курса, вопросы по зачислению, расписание и поддержка студентов." },
      { title: "Сервисы и поддержка", text: "Рутинные ответы, маршрутизация запросов и поддержка в популярных мессенджерах." },
    ],
    cta: {
      title: "Want to test an AI consultant for your business?",
      primary: "Send a Request",
      secondary: "Learn More",
    },
    orderSimilarAssistant: "Order similar assistant",
    demoMenu: {
      title: "Demo menu",
      demoVideo: "Demo Video",
      pdfPresentation: "PDF Presentation",
      screenshots: "Screenshots",
      videoPresentation: "Video Presentation",
      unavailable: "Material will be added soon",
      close: "Close",
    },
    contactForm: {
      nameLabel: "Name",
      businessLabel: "Business type",
      contactLabel: "Messenger/contact",
      messageLabel: "Message",
      sendButton: "Send a Request",
      telegram: "Contact on Telegram",
      whatsapp: "Contact on WhatsApp",
      instagram: "Instagram",
      email: "Email",
      emailSubject: "Tisgrow demo request",
    },
    footer: {
      brandTitle: "Tisgrow",
      brandText: "AI consultants and AI agents that help modern businesses grow.",
    },
  },
  ru: {
    eyebrow: "AI ассистенты",
    title: "Футуристичная галерея AI консультантов",
    text: "Выберите готового ассистента для своей ниши или используйте карточки как премиальные демо.",
    button: "Открыть демо",
    selectorLabel: "Язык",
    bookDemo: "Заказать демо",
    hero: {
      eyebrow: "AI консультанты и агенты для бизнеса",
      title: "AI консультанты для современного бизнеса",
      text: "Автоматизируйте общение с клиентами с помощью умных AI помощников.",
      primary: "Заказать демо",
      secondary: "Посмотреть AI консультантов",
    },
    navItems: [
      { label: "Главная", href: "#home" },
      { label: "Отрасли", href: "#industries" },
      { label: "AI ассистенты", href: "#assistants" },
      { label: "Цены", href: "#pricing" },
      { label: "Контакты", href: "#contact" },
    ],
    portalNavigation: "ПОРТАЛЬНАЯ НАВИГАЦИЯ",
    sections: {
      videos: {
        eyebrow: "Видеопрезентации",
        title: "Смотрите, как AI консультанты общаются с клиентами в реальных бизнес-сценариях.",
        text: "Демо демонстрируют реальные рабочие сценарии AI.",
      },
      examples: {
        eyebrow: "Примеры",
        title: "Практическая автоматизация типичных клиентских разговоров",
        text: "Каждый сценарий можно подключить к каналам и инструментам, которые уже использует ваш бизнес.",
      },
      pricing: {
        eyebrow: "Цены",
        title: "Простые стартовые точки, гибкая автоматизация",
        text: "Выберите компактный стартовый пакет или постройте индивидуального помощника под ваш бизнес.",
      },
      contact: {
        eyebrow: "Контакт",
        title: "Расскажите, что ваша команда хочет автоматизировать",
        text: "Форма подготовлена как простой заполнитель без бэкенда. Пока бэкенд не подключен, кнопка открывает email-запрос.",
      },
    },
    industries: [
      { title: "Salones de belleza", text: "Reservas, preguntas sobre servicios, guía de precios y recordatorios." },
      { title: "Clínicas dentales", text: "Preguntas frecuentes, solicitudes de cita, soporte inicial y guía de tratamientos." },
      { title: "Tiendas online", text: "Consultas de productos, preguntas de pedidos, recomendaciones y soporte de ventas." },
      { title: "Construcción y proyectos", text: "Calificación de leads, detalles de proyectos, solicitudes de presupuesto y traspaso a gestor." },
      { title: "Proyectos educativos", text: "Selección de cursos, preguntas de inscripción, programación y soporte a estudiantes." },
      { title: "Servicios y soporte", text: "Respuestas rutinarias, enrutamiento de solicitudes y soporte en mensajeros populares." },
    ],
    cta: {
      title: "Хотите протестировать AI консультанта для вашего бизнеса?",
      primary: "Отправить запрос",
      secondary: "Узнать больше",
    },
    orderSimilarAssistant: "Заказать похожего ассистента",
    demoMenu: {
      title: "Меню демо",
      demoVideo: "Видео работы",
      pdfPresentation: "PDF-презентация",
      screenshots: "Скриншоты",
      videoPresentation: "Видеопрезентация",
      unavailable: "Материал скоро будет добавлен",
      close: "Закрыть",
    },
    contactForm: {
      nameLabel: "Имя",
      businessLabel: "Тип бизнеса",
      contactLabel: "Мессенджер/контакт",
      messageLabel: "Сообщение",
      sendButton: "Отправить запрос",
      telegram: "Контакт в Telegram",
      whatsapp: "Контакт в WhatsApp",
      instagram: "Instagram",
      email: "Email",
      emailSubject: "Запрос на демо Tisgrow",
    },
    footer: {
      brandTitle: "Tisgrow",
      brandText: "AI консультанты и AI агенты, которые помогают современному бизнесу расти.",
    },
  },
  es: {
    eyebrow: "Asistentes AI",
    title: "Galería futurista de consultores AI",
    text: "Elige un asistente para tu nicho o usa estas tarjetas como demos premium.",
    button: "Ver demo",
    selectorLabel: "Idioma",
    bookDemo: "Solicitar demo",
    hero: {
      eyebrow: "Consultores y agentes de IA para negocios",
      title: "Consultores de IA para el negocio moderno",
      text: "Automatiza la comunicación con clientes con asistentes de IA inteligentes.",
      primary: "Solicitar demo",
      secondary: "Ver consultores de IA",
    },
    navItems: [
      { label: "Inicio", href: "#home" },
      { label: "Industrias", href: "#industries" },
      { label: "Asistentes IA", href: "#assistants" },
      { label: "Precios", href: "#pricing" },
      { label: "Contacto", href: "#contact" },
    ],
    portalNavigation: "NAVEGACIÓN DEL PORTAL",
    sections: {
      videos: {
        eyebrow: "Video presentaciones",
        title: "Mira cómo los consultores de IA se comunican con los clientes en escenarios comerciales reales.",
        text: "Explora cómo la automatización de IA apoya los flujos de trabajo de clientes.",
      },
      examples: {
        eyebrow: "Ejemplos",
        title: "Automatización práctica para conversaciones comunes con clientes",
        text: "Cada escenario se puede conectar a los canales y herramientas que ya utiliza tu negocio.",
      },
      pricing: {
        eyebrow: "Precios",
        title: "Puntos de partida simples, automatización flexible",
        text: "Elige un paquete de lanzamiento compacto o crea un asistente personalizado para tu proceso de negocio.",
      },
      contact: {
        eyebrow: "Contacto",
        title: "Cuéntanos qué quiere automatizar tu equipo",
        text: "El formulario está preparado como un marcador de posición sin backend. Hasta que se conecte un backend, el botón abre una solicitud por correo electrónico.",
      },
    },
    industries: [
      { title: "Salons de beauté", text: "Réservations, questions sur les services, guide des prix et rappels clients." },
      { title: "Cliniques dentaires", text: "FAQ, demandes de rendez-vous, support de premier contact et recommandations de traitement." },
      { title: "Boutiques en ligne", text: "Consultation de produits, questions de commande, recommandations et support des ventes." },
      { title: "Construction et projets", text: "Qualification des leads, détails de projet, demandes de devis et transfert au gestionnaire." },
      { title: "Projets éducatifs", text: "Choix de cours, questions d'inscription, planification et support aux étudiants." },
      { title: "Services et support", text: "Réponses routinières, routage des demandes et support sur les messagers populaires." },
    ],
    cta: {
      title: "¿Quieres probar un consultor de IA para tu negocio?",
      primary: "Enviar solicitud",
      secondary: "Aprender más",
    },
    orderSimilarAssistant: "Pedir un asistente similar",
    demoMenu: {
      title: "Menú demo",
      demoVideo: "Video de demostración",
      pdfPresentation: "Presentación PDF",
      screenshots: "Capturas",
      videoPresentation: "Video de presentación",
      unavailable: "Material pronto estará disponible",
      close: "Cerrar",
    },
    contactForm: {
      nameLabel: "Nombre",
      businessLabel: "Tipo de negocio",
      contactLabel: "Mensajero/contacto",
      messageLabel: "Mensaje",
      sendButton: "Enviar solicitud",
      telegram: "Contacto en Telegram",
      whatsapp: "Contacto en WhatsApp",
      instagram: "Instagram",
      email: "Email",
      emailSubject: "Solicitud de demo Tisgrow",
    },
    footer: {
      brandTitle: "Tisgrow",
      brandText: "Consultores y agentes de IA que ayudan a las empresas modernas a crecer.",
    },
  },
  fr: {
    eyebrow: "Assistants IA",
    title: "Galerie futuriste de consultants IA",
    text: "Choisissez un assistant pour votre secteur ou utilisez ces cartes comme demos premium.",
    button: "Voir la demo",
    selectorLabel: "Langue",
    bookDemo: "Demander une démo",
    hero: {
      eyebrow: "Consultants et agents IA pour les entreprises",
      title: "Consultants IA pour les entreprises modernes",
      text: "Automatisez la communication client avec des assistants IA intelligents.",
      primary: "Demander une démo",
      secondary: "Voir les consultants IA",
    },
    navItems: [
      { label: "Accueil", href: "#home" },
      { label: "Secteurs", href: "#industries" },
      { label: "Assistants IA", href: "#assistants" },
      { label: "Tarifs", href: "#pricing" },
      { label: "Contact", href: "#contact" },
    ],
    portalNavigation: "NAVIGATION DU PORTAIL",
    sections: {
      videos: {
        eyebrow: "Vidéos de démonstration",
        title: "Regardez comment les consultants IA communiquent avec les clients dans des scénarios commerciaux réels.",
        text: "Découvrez comment l'IA automatise les flux clients.",
      },
      examples: {
        eyebrow: "Exemples",
        title: "Automatisation pratique pour les conversations client courantes",
        text: "Chaque scénario peut être connecté aux canaux et outils déjà utilisés par votre entreprise.",
      },
      pricing: {
        eyebrow: "Tarifs",
        title: "Points de départ simples, automatisation flexible",
        text: "Choisissez un pack de lancement compact ou créez un assistant personnalisé autour de vos processus métier.",
      },
      contact: {
        eyebrow: "Contact",
        title: "Dites-nous ce que votre équipe souhaite automatiser",
        text: "Le formulaire est préparé comme un simple placeholder sans backend. Tant qu'un backend n'est pas connecté, le bouton ouvre une demande par email.",
      },
    },
    industries: [
      { title: "الصالونات الجمالية", text: "الحجوزات، أسئلة الخدمة، إرشادات الأسعار وتذكيرات العملاء." },
      { title: "عيادات الأسنان", text: "الأسئلة الشائعة، طلبات المواعيد، الدعم الأولي وإرشادات العلاج." },
      { title: "المتاجر الإلكترونية", text: "استشارات المنتج، أسئلة الطلبات، التوصيات ودعم المبيعات." },
      { title: "البناء والمشاريع", text: "تأهيل العملاء المحتملين، تفاصيل المشروع، طلبات التقدير وتسليمها للمدير." },
      { title: "المشاريع التعليمية", text: "اختيار الدورات، أسئلة التسجيل، الجدولة ودعم الطلاب." },
      { title: "الخدمات والدعم", text: "إجابات روتينية، توجيه الطلبات ودعم عبر الرسائل الشائعة." },
    ],
    cta: {
      title: "Vous souhaitez tester un consultant IA pour votre entreprise ?",
      primary: "Envoyer une demande",
      secondary: "En savoir plus",
    },
    orderSimilarAssistant: "Commander un assistant similaire",
    demoMenu: {
      title: "Menu démo",
      demoVideo: "Vidéo de démo",
      pdfPresentation: "Présentation PDF",
      screenshots: "Captures",
      videoPresentation: "Vidéo de présentation",
      unavailable: "Le contenu sera bientôt ajouté",
      close: "Fermer",
    },
    contactForm: {
      nameLabel: "Nom",
      businessLabel: "Type d'entreprise",
      contactLabel: "Messager/contact",
      messageLabel: "Message",
      sendButton: "Envoyer une demande",
      telegram: "Contact sur Telegram",
      whatsapp: "Contact sur WhatsApp",
      instagram: "Instagram",
      email: "Email",
      emailSubject: "Demande de démonstration Tisgrow",
    },
    footer: {
      brandTitle: "Tisgrow",
      brandText: "Consultants et agents IA qui aident les entreprises modernes à se développer.",
    },
  },
  ar: {
    eyebrow: "مساعدو الذكاء الاصطناعي",
    title: "معرض مستقبلي لمستشاري الذكاء الاصطناعي",
    text: "اختر مساعدا جاهزا لمجالك أو استخدم هذه البطاقات كعروض تجريبية مميزة.",
    button: "عرض Demo",
    selectorLabel: "اللغة",
    bookDemo: "طلب عرض توضيحي",
    hero: {
      eyebrow: "استشاريون ووكلاء ذكاء اصطناعي للأعمال",
      title: "استشاريون ذكاء اصطناعي للأعمال الحديثة",
      text: "قم بأتمتة تواصل العملاء بمساعدة مساعدي ذكاء اصطناعي ذكيين.",
      primary: "طلب عرض توضيحي",
      secondary: "عرض استشاريي الذكاء الاصطناعي",
    },
    navItems: [
      { label: "الصفحة الرئيسية", href: "#home" },
      { label: "الصناعات", href: "#industries" },
      { label: "مساعدو AI", href: "#assistants" },
      { label: "التسعير", href: "#pricing" },
      { label: "اتصل", href: "#contact" },
    ],
    portalNavigation: "تنقل البوابة",
    sections: {
      videos: {
        eyebrow: "عروض الفيديو",
        title: "شاهد كيف يتواصل استشاريو الذكاء الاصطناعي مع العملاء في سيناريوهات عمل حقيقية.",
        text: "اكتشف كيف تدعم الأتمتة الذكية سير العمل مع العملاء.",
      },
      examples: {
        eyebrow: "أمثلة",
        title: "أتمتة عملية لمحادثات العملاء الشائعة",
        text: "يمكن توصيل كل سيناريو بالقنوات والأدوات التي يستخدمها عملك بالفعل.",
      },
      pricing: {
        eyebrow: "التسعير",
        title: "نقاط انطلاق بسيطة، أتمتة مرنة",
        text: "اختر حزمة بدء مضغوطة أو قم ببناء مساعد مخصص لعملية عملك.",
      },
      contact: {
        eyebrow: "اتصل",
        title: "أخبرنا بما تريد أن يفعله فريقك تلقائيًا",
        text: "النموذج مُعد كعنصر نائب بسيط بدون خلفية. حتى يتم توصيل الخلفية، يفتح الزر طلبًا عبر البريد الإلكتروني.",
      },
    },
    industries: [
      { title: "行业", text: "预订、服务问题、价格指南和客户提醒。" },
      { title: "牙科诊所", text: "常见问题、预约请求、首次支持和治疗指南。" },
      { title: "在线商店", text: "产品咨询、订单问题、推荐和销售支持。" },
      { title: "建筑与项目公司", text: "线索资格、项目细节、估算请求和交接给经理。" },
      { title: "教育项目", text: "课程选择、报名问题、排期和学生支持。" },
      { title: "服务与客户支持", text: "常规回答、请求路由和在流行信使中的支持。" },
    ],
    cta: {
      title: "هل تريد تجربة مستشار ذكاء اصطناعي لعملك؟",
      primary: "إرسال الطلب",
      secondary: "اعرف أكثر",
    },
    orderSimilarAssistant: "طلب مساعد مشابه",
    demoMenu: {
      title: "قائمة العرض التوضيحي",
      demoVideo: "فيديو العرض",
      pdfPresentation: "عرض PDF",
      screenshots: "لقطات الشاشة",
      videoPresentation: "عرض تقديمي بالفيديو",
      unavailable: "سيتم إضافة المحتوى قريبًا",
      close: "إغلاق",
    },
    contactForm: {
      nameLabel: "الاسم",
      businessLabel: "نوع العمل",
      contactLabel: "الرسائل/الاتصال",
      messageLabel: "الرسالة",
      sendButton: "إرسال الطلب",
      telegram: "الاتصال عبر Telegram",
      whatsapp: "الاتصال عبر WhatsApp",
      instagram: "Instagram",
      email: "Email",
      emailSubject: "طلب عرض Tisgrow التجريبي",
    },
    footer: {
      brandTitle: "Tisgrow",
      brandText: "استشاريون ووكلاء الذكاء الاصطناعي الذين يساعدون الشركات الحديثة على النمو.",
    },
  },
  zh: {
    eyebrow: "AI 助手",
    title: "未来感 AI 顾问画廊",
    text: "为你的行业选择现成助手，或把这些卡片作为高级演示展示。",
    button: "查看演示",
    selectorLabel: "语言",
    bookDemo: "预约演示",
    hero: {
      eyebrow: "面向企业的 AI 顾问和代理",
      title: "现代商业的 AI 顾问",
      text: "使用智能 AI 助手自动化客户沟通。",
      primary: "预约演示",
      secondary: "查看 AI 顾问",
    },
    navItems: [
      { label: "首页", href: "#home" },
      { label: "行业", href: "#industries" },
      { label: "AI 助手", href: "#assistants" },
      { label: "定价", href: "#pricing" },
      { label: "联系", href: "#contact" },
    ],
    portalNavigation: "门户导航",
    sections: {
      videos: {
        eyebrow: "视频演示",
        title: "观看 AI 顾问在真实业务场景中的沟通方式。",
        text: "探索 AI 自动化如何支持客户工作流程。",
      },
      examples: {
        eyebrow: "示例",
        title: "常见客户对话的实践自动化",
        text: "每个场景都可以连接到您的业务已使用的渠道和工具。",
      },
      pricing: {
        eyebrow: "定价",
        title: "简单起点，灵活自动化",
        text: "选择紧凑启动套餐，或构建围绕您的业务流程的定制助手。",
      },
      contact: {
        eyebrow: "联系",
        title: "告诉我们您的团队希望自动化什么",
        text: "该表单已设置为简单的无后端占位。直到连接后端，按钮将打开电子邮件请求。",
      },
    },
    industries: [
      { title: "ब्यूटी सैलून", text: "बुकिंग, सेवा प्रश्न, मूल्य मार्गदर्शन और ग्राहक अनुस्मारक." },
      { title: "डेंटल क्लिनिक्स", text: "FAQ, अपॉइंटमेंट अनुरोध, प्रथम-संपर्क समर्थन और उपचार मार्गदर्शन." },
      { title: "ऑनलाइन स्टोर्स", text: "उत्पाद परामर्शन, ऑर्डर प्रश्न, सिफारिशें और बिक्री समर्थन." },
      { title: "निर्माण और प्रोजेक्ट कंपनियाँ", text: "लीड योग्यता, परियोजना विवरण, अनुमान अनुरोध और मैनेजर हैंडऑफ." },
      { title: "शिक्षा प्रोजेक्ट", text: "कोर्स चयन, नामांकन प्रश्न, शेड्यूलिंग और छात्र सहायता." },
      { title: "सेवाएँ और ग्राहक समर्थन", text: "नियमित उत्तर, अनुरोध रूटिंग और लोकप्रिय मैसेंजर्स में समर्थन." },
    ],
    cta: {
      title: "想测试适合您业务的 AI 顾问吗？",
      primary: "发送请求",
      secondary: "了解更多",
    },
    orderSimilarAssistant: "订购类似助手",
    demoMenu: {
      title: "演示菜单",
      demoVideo: "演示视频",
      pdfPresentation: "PDF 演示",
      screenshots: "截图",
      videoPresentation: "视频演示",
      unavailable: "材料即将添加",
      close: "关闭",
    },
    contactForm: {
      nameLabel: "姓名",
      businessLabel: "业务类型",
      contactLabel: "消息/联系方式",
      messageLabel: "消息",
      sendButton: "发送请求",
      telegram: "Telegram 联系",
      whatsapp: "WhatsApp 联系",
      instagram: "Instagram",
      email: "Email",
      emailSubject: "Tisgrow 演示请求",
    },
    footer: {
      brandTitle: "Tisgrow",
      brandText: "AI 顾问和 AI 代理，帮助现代企业成长。",
    },
  },
  hi: {
    eyebrow: "AI सहायक",
    title: "भविष्यवादी AI सलाहकार गैलरी",
    text: "अपने क्षेत्र के लिए तैयार सहायक चुनें या इन कार्डों को प्रीमियम डेमो की तरह उपयोग करें।",
    button: "डेमो देखें",
    selectorLabel: "भाषा",
    bookDemo: "डेमो बुक करें",
    hero: {
      eyebrow: "व्यवसाय के लिए AI सलाहकार और एजेंट",
      title: "आधुनिक व्यवसाय के लिए AI सलाहकार",
      text: "बुद्धिमान AI सहायक के साथ ग्राहक संचार को स्वचालित करें।",
      primary: "डेमो बुक करें",
      secondary: "AI सलाहकार देखें",
    },
    navItems: [
      { label: "होम", href: "#home" },
      { label: "उद्योग", href: "#industries" },
      { label: "AI सहायक", href: "#assistants" },
      { label: "मूल्य निर्धारण", href: "#pricing" },
      { label: "संपर्क", href: "#contact" },
    ],
    portalNavigation: "पोर्टल नेविगेशन",
    sections: {
      videos: {
        eyebrow: "वीडियो प्रस्तुतीकरण",
        title: "देखें व्यवसाय परिदृश्यों में AI सलाहकार ग्राहक कैसे संवाद करते हैं।",
        text: "अन्वेषण करें कि AI स्वचालन ग्राहक वर्कफ़्लो का समर्थन कैसे करता है।",
      },
      examples: {
        eyebrow: "उदाहरण",
        title: "सामान्य ग्राहक बातचीत के लिए व्यावहारिक स्वचालन",
        text: "प्रत्येक परिदृश्य को आपके व्यवसाय द्वारा उपयोग किए जाने वाले चैनलों और उपकरणों से जोड़ा जा सकता है।",
      },
      pricing: {
        eyebrow: "मूल्य निर्धारण",
        title: "सरल आरंभिक बिंदु, लचीला स्वचालन",
        text: "एक संकुचित लॉन्च पैकेज चुनें या अपने व्यवसाय प्रक्रिया के आसपास एक कस्टम सहायक बनाएं।",
      },
      contact: {
        eyebrow: "संपर्क",
        title: "हमें बताएं कि आपकी टीम क्या स्वचालित करना चाहती है",
        text: "फॉर्म को सादे बिना-बैकएंड प्लेसहोल्डर के रूप में तैयार किया गया है। जब तक बैकएंड कनेक्ट नहीं होता, बटन ईमेल अनुरोध खोलता है।",
      },
    },
    industries: [
      { title: "ब्यूटी सैलून", text: "बुकिंग, सेवा प्रश्न, मूल्य मार्गदर्शन और ग्राहक अनुस्मारक." },
      { title: "डेंटल क्लिनिक्स", text: "FAQ, अपॉइंटमेंट अनुरोध, प्रथम-संपर्क समर्थन और उपचार मार्गदर्शन." },
      { title: "ऑनलाइन स्टोर्स", text: "उत्पाद परामर्शन, ऑर्डर प्रश्न, सिफारिशें और बिक्री समर्थन." },
      { title: "निर्माण और प्रोजेक्ट कंपनियाँ", text: "लीड योग्यता, परियोजना विवरण, अनुमान अनुरोध और मैनेजर हैंडऑफ." },
      { title: "शिक्षा प्रोजेक्ट", text: "कोर्स चयन, नामांकन प्रश्न, शेड्यूलिंग और छात्र सहायता." },
      { title: "सेवाएँ और ग्राहक समर्थन", text: "नियमित उत्तर, अनुरोध रूटिंग और लोकप्रिय मैसेंजर्स में समर्थन." },
    ],
    cta: {
      title: "क्या आप अपने व्यवसाय के लिए AI सलाहकार का परीक्षण करना चाहते हैं?",
      primary: "अनुरोध भेजें",
      secondary: "और जानें",
    },
    orderSimilarAssistant: "समान सहायक का ऑर्डर करें",
    demoMenu: {
      title: "डेमो मेनू",
      demoVideo: "डेमो वीडियो",
      pdfPresentation: "PDF प्रस्तुति",
      screenshots: "स्क्रीनशॉट",
      videoPresentation: "वीडियो प्रस्तुति",
      unavailable: "सामग्री जल्द ही जोड़ी जाएगी",
      close: "बंद करें",
    },
    contactForm: {
      nameLabel: "नाम",
      businessLabel: "व्यवसाय का प्रकार",
      contactLabel: "मैसेंजर/संपर्क",
      messageLabel: "संदेश",
      sendButton: "अनुरोध भेजें",
      telegram: "Telegram पर संपर्क",
      whatsapp: "WhatsApp पर संपर्क",
      instagram: "Instagram",
      email: "Email",
      emailSubject: "Tisgrow डेमो अनुरोध",
    },
    footer: {
      brandTitle: "Tisgrow",
      brandText: "AI सलाहकार और एजेंट जो आधुनिक व्यवसायों को बढ़ने में मदद करते हैं।",
    },
  },
};

// Add, rename or remove assistant cards here as the product catalog grows.
export const assistants = [
  {
    key: "sofia",
    name: "Sofia",
    i18n: {
      name: { uk: "AI-Софія", en: "AI-Sofia", ru: "AI-Sofia", es: "AI Sofia", fr: "AI Sofia", ar: "AI Sofia", zh: "AI Sofia", hi: "AI Sofia" },
      category: { uk: "Персональний AI-помічник", en: "AI Personal Assistant" },
      description: { uk: "Розумний AI-помічник для підтримки клієнтів, планування та персоналізованих взаємодій.", en: "Intelligent AI assistant for customer support, scheduling, and personalized interactions." },
    },
    accent: "from-rose-300 via-pink-300 to-purple-300",
    image: "/media/assistants/sofia.jpg",
    imageClass: "assistant-image-sofia",
  },
  {
    key: "avtologik",
    name: "АІ-Автологік",
    i18n: {
      name: { uk: "AI-Автологік", en: "AI-Autologic", zh: "AI Autologic" },
      category: { uk: "AI для автомобільних сервісів", en: "Automotive AI" },
      description: { uk: "Спокійний AI консультант для сервісів, діагностики, записів та питань клієнтів.", en: "Calm AI consultant for car services, diagnostics, bookings and client questions." },
    },
    accent: "from-aqua via-emerald-300 to-cyan-300",
    image: "/media/assistants/avtologik.jpg",
  },
  {
    key: "waterstop",
    name: "АІ-Вотерстоп",
    i18n: {
      name: { uk: "AI-Вотерстоп", en: "AI-Waterstop", zh: "AI Waterstop" },
      category: { uk: "AI для водних систем", en: "Water Systems AI" },
      description: { uk: "Допоміжний AI для водних систем, запитів сантехніки, оцінок і заявок на сервіс.", en: "Helpful AI assistant for water systems, plumbing requests, estimates and service leads." },
    },
    accent: "from-sky-300 via-aqua to-emerald-300",
    image: "/media/assistants/waterstop.jpg",
  },
  {
    key: "levka",
    name: "АІ-Левко",
    i18n: {
      name: { uk: "AI-Левко", en: "AI-Levko", zh: "AI Levko" },
      category: { uk: "AI для інтернет-магазинів", en: "Online Store AI" },
      description: { uk: "Дружній AI консультант для інтернет-магазинів: питання про товари, підтримка замовлень та збір лідів.", en: "Friendly AI consultant for online stores, product questions, order support and lead capture." },
    },
    accent: "from-lime-300 via-aqua to-sky-400",
    image: "/media/assistants/levko.jpg",
  },
  {
    key: "pigulkin",
    name: "АІ-Пігулкін",
    i18n: {
      name: { uk: "AI-Пігулкін", en: "AI-Pigulkin", zh: "AI Pigulkin" },
      category: { uk: "AI для аптек та здоров'я", en: "Health Support AI" },
      description: { uk: "AI помічник для аптек, wellness-проєктів, FAQ та запитів у форматі запису на прийом.", en: "AI assistant for pharmacies, wellness projects, FAQs and appointment-style requests." },
    },
    accent: "from-emerald-300 via-cyan-300 to-blue-400",
    image: "/media/assistants/pigulkin.jpg",
    imageClass: "assistant-image-pigulkin",
  },
  {
    key: "pizzahot",
    name: "АІ-Піццахот",
    i18n: {
      name: { uk: "AI-Піццахот", en: "AI-PizzaHot", zh: "AI PizzaHot" },
      category: { uk: "AI для доставки їжі", en: "Food Delivery AI" },
      description: { uk: "AI помічник з прийому замовлень: меню, питання про доставку, апсели та швидкі відповіді клієнтам.", en: "AI ordering helper for menus, delivery questions, upsells and fast customer replies." },
    },
    accent: "from-orange-300 via-aqua to-emerald-300",
    image: "/media/assistants/pizzahot.jpg",
  },
  {
    key: "icecreambrown",
    name: "АІ-Айскрімбраун",
    i18n: {
      name: { uk: "AI-Айскрімбраун", en: "AI-IceCreamBrown", zh: "AI IceCreamBrown" },
      category: { uk: "AI для морозива та молочної продукції", en: "AI for ice cream and dairy" },
      description: { uk: "AI-помічник для кафе та виробників морозива: допомагає з асортиментом, замовленнями та частими питаннями.", en: "AI assistant for cafes, ice cream and dairy producers: helps with assortment, orders and FAQs." },
    },
    accent: "from-amber-300 via-pink-300 to-purple-300",
    image: "/media/assistants/icecreambrown.jpg",
    imagePosition: "center top",
    imageClass: "assistant-image-icecreambrown",
    demoVideo: "/media/demos/videos/icecreambrown-demo-ua.mp4",
    presentationVideo: "/media/demos/videos/icecreambrown-presentation-ua.mp4",
    pdf: "/media/demos/pdf/icecreambrown-presentation-ua.pdf",
    thumbnail: "/media/demos/thumbnails/icecreambrown.jpg",
  },
  {
    key: "makar",
    name: "АІ-Макар",
    i18n: {
      name: { uk: "AI-Макар", en: "AI-Makar", zh: "AI Makar" },
      category: { uk: "AI для архітектури", en: "Architecture AI" },
      description: { uk: "AI помічник для будівництва, архітектури та кваліфікації лідів проєктних сервісів.", en: "AI assistant for construction, architecture and project service lead qualification." },
    },
    accent: "from-blue-500 via-aqua to-emerald-300",
    image: "/media/assistants/makar.jpg",
  },
  {
    key: "janis",
    name: "АІ-Дженіс",
    i18n: {
      name: { uk: "AI-Дженіс", en: "AI-Janis", zh: "AI Janis" },
      category: { uk: "AI для ремонту одягу", en: "Clothing Repair AI" },
      description: { uk: "Уважний AI для ремонту одягу: приймає запити клієнтів, уточнює деталі послуги і записує на ремонт.", en: "Careful AI assistant for clothing repair, client requests, service details and bookings." },
    },
    accent: "from-fuchsia-300 via-aqua to-emerald-300",
    image: "/media/assistants/janis.jpg",
    imagePosition: "center top",
    imageClass: "assistant-image-janis",
  },
  {
    key: "photologic",
    name: "АІ-Фотологік",
    i18n: {
      name: { uk: "AI-Фотологік", en: "AI-Photologic", zh: "AI Photologic" },
      category: { uk: "AI для фотографії", en: "Photography AI" },
      description: { uk: "AI помічник для студій та фотографів: допомагає з пакетами, розкладом та підготовкою клієнтів.", en: "AI assistant for studios, photographers, packages, scheduling and client preparation." },
    },
    accent: "from-violet-300 via-cyan-300 to-aqua",
    image: "/media/assistants/photologic.jpg",
  },
  {
    key: "chiprepair",
    name: "АІ-Репіер",
    i18n: {
      name: { uk: "AI-Репіер", en: "AI-Repair", zh: "AI Repair" },
      category: { uk: "AI для ремонту електроніки", en: "Electronics Repair AI" },
      description: { uk: "AI консультант для майстерень: триаж пристроїв, питання ціни та запис на сервіс.", en: "AI consultant for repair shops, device triage, price questions and service bookings." },
    },
    accent: "from-slate-400 via-aqua to-lime-300",
    image: "/media/assistants/chiprepair.jpg",
  },
  {
    key: "tisgrow-dental",
    name: "АІ-Тісгроу Dental",
    i18n: {
      name: { uk: "AI-Тісгроу Dental", en: "AI-Tisgrow Dental", zh: "AI Tisgrow Dental" },
      category: { uk: "AI для стоматології", en: "Dental AI" },
      description: { uk: "AI стоматологічний консультант для FAQ, інформації про пацієнтів та запитів на прийом.", en: "AI dental consultant for clinic FAQs, patient details and appointment requests." },
    },
    accent: "from-sky-400 via-aqua to-white",
    image: "/media/assistants/tisgrow-dental.jpg",
    imagePosition: "center top",
    imageClass: "assistant-image-dental",
  },
];

// Replace these placeholder titles with real video names and URLs when demos are ready.
export const videos = [
  "Beauty booking scenario",
  "Dental FAQ and appointment flow",
  "Online store product consultation",
];

export const examples = [
  {
    title: "Beauty salon booking assistant",
    text: "Guides clients from service choice to preferred time and contact confirmation.",
  },
  {
    title: "Dental clinic FAQ and appointment assistant",
    text: "Answers common treatment questions and prepares clean requests for administrators.",
  },
  {
    title: "Online store product consultant",
    text: "Recommends products, answers objections and helps customers move toward purchase.",
  },
  {
    title: "Construction service lead assistant",
    text: "Collects project location, scope, budget and timeline before a manager joins.",
  },
];

// Update pricing copy here when packages and currencies change.
export const pricing = [
  {
    name: "Starter",
    price: "from $100 setup",
    details: "Initial consultant setup, core prompts, simple flow and launch guidance.",
  },
  {
    name: "Support",
    price: "from $30/month",
    details: "Ongoing improvements, answers tuning and light monthly maintenance.",
  },
  {
    name: "Custom automation",
    price: "individual price",
    details: "Advanced integrations and scenarios depending on business tasks.",
  },
];

export const heroStats = [
  { value: "24/7", label: "client answers" },
  { value: "5+", label: "channels" },
  { value: "Fast", label: "lead response" },
];

export const visualMessages = [
  { from: "Client", text: "Do you have an available appointment tomorrow?" },
  { from: "AI Consultant", text: "Yes. I can offer 11:30 or 16:00. Which works best?" },
  { from: "Client", text: "16:00, please. Can I get the price too?" },
  { from: "AI Consultant", text: "Of course. I’ll save the slot and send the service details." },
];

export const ctaActions = [
  { label: "Contact on Telegram", href: contactLinks.telegram, icon: Send },
  { label: "Contact on WhatsApp", href: contactLinks.whatsapp, icon: MessageCircle },
  { label: "Instagram", href: contactLinks.instagram, icon: Instagram },
  { label: "Email", href: contactLinks.email, icon: Mail },
];

export const footerLinks = navItems;

export const channelIcons = [
  { label: "Website", icon: Home },
  { label: "Telegram", icon: Send },
  { label: "Instagram", icon: Store },
  { label: "WhatsApp", icon: MessageCircle },
  { label: "Human handoff", icon: UserRoundCheck },
  { label: "AI logic", icon: Bot },
];

// POSTS / ARTICLES structure (future-ready)
// Each post should contain per-language fields. Missing translations follow
// the fallback rule: selected -> en -> uk. Automatic translation is NOT
// implemented here and would require a backend/API to perform safely.
export type LocalizedText = Partial<Record<LanguageCode, string>>;

export type Post = {
  id: string; // stable slug
  title: LocalizedText; // e.g. { en: 'Hello', uk: 'Привіт', zh: '你好' }
  body: LocalizedText; // rich text or markdown per locale
  date: string; // ISO date
  tags?: string[];
};

// Example placeholder posts array. Fill with real posts later.
export const posts: Post[] = [
  {
    id: "welcome",
    title: { en: "Welcome to Tisgrow", uk: "Ласкаво просимо до Tisgrow", zh: "欢迎使用 Tisgrow" },
    body: { en: "Initial article body in English.", uk: "Початковий текст статті українською.", zh: "初始文章内容（中文）。" },
    date: new Date().toISOString(),
    tags: ["news"],
  },
];

// NOTE: To add automatic machine translation in the future, wire a backend
// endpoint that accepts a Post and target language, calls a translation API
// and stores translated strings in the `posts` object. Keep human review
// workflow to avoid incorrect public content.
