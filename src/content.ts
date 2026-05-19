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
    industries: { title: string; text: string }[];
    heroVisual: {
      onlineLabel: string;
      channelsLabel: string;
      status: string;
    };
    visualMessages: { role: "client" | "assistant"; from: string; text: string }[];
    heroStats: { value: string; label: string }[];
    videoCards: { title: string; placeholder: string }[];
    portfolioExamples: { title: string; text: string }[];
    pricingPlans: { name: string; price: string; details: string }[];
    pricingDisclaimer: string;
    channelLabels: string[];
    capabilities: string[];
    play: string;
    homeAriaLabel: string;
    toggleNavigation: string;
    cta: {
      title: string;
      primary: string;
      secondary: string;
    };
    orderSimilarAssistant: string;
    openAssistantPage: string;
    backToHome: string;
    demoMenu: {
      title: string;
      demoVideo: string;
      pdfPresentation: string;
      screenshots: string;
      videoPresentation: string;
      unavailable: string;
      close: string;
      loading: string;
      openPdfInNewTab: string;
      openVideoInNewTab: string;
      videoFailedToLoad: string;
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
      emailBodyIntro: string;
    };
    requestPage: {
      title: string;
      description: string;
      nameLabel: string;
      businessLabel: string;
      businessPlaceholder: string;
      channelsLabel: string;
      channelOptions: string[];
      automateLabel: string;
      automatePlaceholder: string;
      contactLabel: string;
      contactPlaceholder: string;
      detailsLabel: string;
      detailsPlaceholder: string;
      submitButton: string;
      successMessage: string;
      errorMessage: string;
      communityHeading: string;
      communitySite: string;
      communityTelegram: string;
      communityX: string;
      communityTiktok: string;
      ctaButtonLabel: string;
    };
    footer: {
      brandTitle: string;
      brandText: string;
    };
  }> = {
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
      { title: "Салони краси", text: "Запис, питання про послуги, орієнтація у ціні та нагадування клієнтам." },
      { title: "Стоматології", text: "FAQ, запити на запис, первинна підтримка та рекомендації щодо лікування." },
      { title: "Інтернет-магазини", text: "Консультації щодо товарів, питання замовлень, рекомендації та підтримка продажів." },
      { title: "Будівництво та проекти", text: "Кваліфікація лідів, деталі проєктів, запити кошторисів і передача менеджеру." },
      { title: "Освітні проєкти", text: "Вибір курсу, питання реєстрації, розклад і підтримка студентів." },
      { title: "Сервіси і підтримка", text: "Рутинні відповіді, маршрутизація запитів і підтримка у популярних месенджерах." },
    ],
    cta: {
      title: "Хочете протестувати AI консультанта для вашого бізнесу?",
      primary: "Надіслати запит",
      secondary: "Дізнатися більше",
    },
    homeAriaLabel: "Перейти на головну сторінку Tisgrow",
    toggleNavigation: "Перемикнути навігацію",
    heroVisual: {
      onlineLabel: "AI консультант онлайн",
      channelsLabel: "Чат сайту + месенджери",
      status: "Активний",
    },
    visualMessages: [
      { role: "client", from: "Клієнт", text: "Чи є вільна зустріч на завтра?" },
      { role: "assistant", from: "AI консультант", text: "Так. Можу запропонувати 11:30 або 16:00. Що підходить?" },
      { role: "client", from: "Клієнт", text: "16:00, будь ласка. Можна також ціну?" },
      { role: "assistant", from: "AI консультант", text: "Звісно. Я збережу слот і надішлю деталі послуги." },
    ],
    heroStats: [
      { value: "24/7", label: "відповіді клієнтам" },
      { value: "5+", label: "каналів" },
      { value: "Швидко", label: "відповідь на ліди" },
    ],
    videoCards: [
      { title: "Сценарій бронювання для салону краси", placeholder: "Заміна плейсхолдеру на реальне відео або демонстрацію." },
      { title: "FAQ стоматологічної клініки та запис на прийом", placeholder: "Заміна плейсхолдеру на реальне відео або демонстрацію." },
      { title: "Консультант продуктів для інтернет-магазину", placeholder: "Заміна плейсхолдеру на реальне відео або демонстрацію." },
    ],
    portfolioExamples: [
      { title: "Асистент запису для салону краси", text: "Супроводжує клієнта від вибору послуги до часу та підтвердження контакту." },
      { title: "Асистент FAQ стоматології", text: "Відповідає на питання лікування і готує чисті запити для адміністраторів." },
      { title: "Продуктовий консультант інтернет-магазину", text: "Рекомендує товари, відповідає на заперечення і допомагає до покупки." },
      { title: "Асистент лідів для будівельних сервісів", text: "Збирає місце, обсяг, бюджет та терміни перед передачею менеджеру." },
    ],
    pricingPlans: [
      { name: "Початковий", price: "від $100 настройки", details: "Стартова налаштування консультанта, основні підказки, простий сценарій та впровадження." },
      { name: "Підтримка", price: "від $30/місяць", details: "Покращення, налаштування відповідей і легке щомісячне обслуговування." },
      { name: "Індивідуальна автоматизація", price: "індивідуальна ціна", details: "Просунуті інтеграції і сценарії залежно від бізнес-завдань." },
    ],
    pricingDisclaimer: "Платні підписки на платформи, автоматизацію чи месенджери можуть оплачуватись окремо клієнтом.",
    channelLabels: ["Сайт", "Telegram", "Instagram", "WhatsApp", "Передача менеджеру", "AI логіка"],
    capabilities: [
      "Відповіді клієнтам 24/7",
      "Збирає ліди",
      "Бронює записи",
      "Консультує клієнтів",
      "Допомагає продавати послуги та продукти",
      "Працює у чаті сайту, Telegram, Instagram та WhatsApp",
      "Передає складні запити менеджеру",
    ],
    play: "Відтворити",
    orderSimilarAssistant: "Замовити схожого асистента",
    openAssistantPage: "Відкрити сторінку асистента",
    backToHome: "Повернутися на головну",
    demoMenu: {
      title: "Демо-меню",
      demoVideo: "Відео роботи",
      pdfPresentation: "PDF-презентація",
      screenshots: "Скріншоти",
      videoPresentation: "Відеопрезентація",
      unavailable: "Матеріал скоро буде додано",
      close: "Закрити",
      loading: "Завантаження...",
      openPdfInNewTab: "Відкрити PDF у новій вкладці",
      openVideoInNewTab: "Відкрити відео у новій вкладці",
      videoFailedToLoad: "Не вдалося завантажити відео",
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
      emailBodyIntro: "Вітаю Tisgrow,",
    },
    footer: {
      brandTitle: "Tisgrow",
      brandText: "AI консультанти та агенти, які допомагають сучасному бізнесу зростати.",
    },
    requestPage: {
      title: "Форма заявки на AI-консультанта Tisgrow",
      description: "Опишіть свій бізнес, бажані канали та завдання. Наразі форма відкриває email-запит, але структура готова до майбутнього API.",
      nameLabel: "Ваше ім’я",
      businessLabel: "Сфера бізнесу",
      businessPlaceholder: "салон краси / стоматологія / магазин / інше",
      channelsLabel: "Де ви хочете AI-консультанта?",
      channelOptions: ["Telegram", "WhatsApp", "Instagram", "TikTok", "Сайт", "X (Twitter)"],
      automateLabel: "Що потрібно автоматизувати?",
      automatePlaceholder: "відповіді клієнтам, записи, консультації, FAQ, нагадування, продажі тощо",
      contactLabel: "Ваш контакт для зв’язку",
      contactPlaceholder: "Telegram / WhatsApp / Instagram / телефон",
      detailsLabel: "Додатково",
      detailsPlaceholder: "будь-які побажання або задачі",
      submitButton: "Замовити AI-консультанта",
      successMessage: "Запит готовий. Відкривається ваш поштовий клієнт...",
      errorMessage: "Будь ласка, заповніть ім’я та контакт для відправки заявки.",
      communityHeading: "Зв’язок",
      communitySite: "Сайт",
      communityTelegram: "Telegram",
      communityX: "X (Twitter)",
      communityTiktok: "TikTok",
      ctaButtonLabel: "Замовити AI-консультанта",
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
      { title: "Beauty salons", text: "Bookings, service questions, price guidance and client reminders." },
      { title: "Dental clinics", text: "FAQ, appointment requests, first-touch support and treatment guidance." },
      { title: "Online stores", text: "Product consultation, order questions, recommendations and sales support." },
      { title: "Construction and project companies", text: "Lead qualification, project details, estimate requests and manager handoff." },
      { title: "Education projects", text: "Course selection, enrollment questions, scheduling and student support." },
      { title: "Services and customer support", text: "Routine answers, request routing and support across popular messengers." },
    ],
    cta: {
      title: "Want to test an AI consultant for your business?",
      primary: "Send a Request",
      secondary: "Learn More",
    },
    orderSimilarAssistant: "Order similar assistant",
    openAssistantPage: "Open assistant page",
    backToHome: "Back to home",
    demoMenu: {
      title: "Demo menu",
      demoVideo: "Demo Video",
      pdfPresentation: "PDF Presentation",
      screenshots: "Screenshots",
      videoPresentation: "Video Presentation",
      unavailable: "Material will be added soon",
      close: "Close",
      loading: "Loading...",
      openPdfInNewTab: "Open PDF in new tab",
      openVideoInNewTab: "Open video in new tab",
      videoFailedToLoad: "Video failed to load",
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
      emailBodyIntro: "Hello Tisgrow,",
    },
    footer: {
      brandTitle: "Tisgrow",
      brandText: "AI consultants and AI agents that help modern businesses grow.",
    },
    requestPage: {
      title: "Tisgrow AI consultant request form",
      description: "Describe your business, preferred channels and automation goals. The form opens an email request for now and is ready for future API support.",
      nameLabel: "Your name",
      businessLabel: "Business area",
      businessPlaceholder: "beauty salon / dental clinic / shop / other",
      channelsLabel: "Where do you want an AI consultant?",
      channelOptions: ["Telegram", "WhatsApp", "Instagram", "TikTok", "Website", "X (Twitter)"],
      automateLabel: "What should be automated?",
      automatePlaceholder: "customer replies, bookings, consultations, FAQ, reminders, sales, etc.",
      contactLabel: "Your contact for communication",
      contactPlaceholder: "Telegram / WhatsApp / Instagram / phone",
      detailsLabel: "Additional details",
      detailsPlaceholder: "any wishes or tasks",
      submitButton: "Request an AI consultant",
      successMessage: "Request ready. Your email client is opening...",
      errorMessage: "Please fill in your name and contact details to submit the request.",
      communityHeading: "Connect",
      communitySite: "Website",
      communityTelegram: "Telegram",
      communityX: "X (Twitter)",
      communityTiktok: "TikTok",
      ctaButtonLabel: "Request an AI consultant",
    },
    homeAriaLabel: "Go to the Tisgrow homepage",
    toggleNavigation: "Toggle navigation",
    heroVisual: {
      onlineLabel: "AI consultant online",
      channelsLabel: "Website chat + messengers",
      status: "Active",
    },
    visualMessages: [
      { role: "client", from: "Client", text: "Do you have an available appointment tomorrow?" },
      { role: "assistant", from: "AI Consultant", text: "Yes. I can offer 11:30 or 16:00. Which works best?" },
      { role: "client", from: "Client", text: "16:00, please. Can I get the price too?" },
      { role: "assistant", from: "AI Consultant", text: "Of course. I’ll save the slot and send the service details." },
    ],
    heroStats: [
      { value: "24/7", label: "client answers" },
      { value: "5+", label: "channels" },
      { value: "Fast", label: "lead response" },
    ],
    videoCards: [
      { title: "Beauty booking scenario", placeholder: "Placeholder video block. Replace with a real embed or demo file." },
      { title: "Dental FAQ and appointment flow", placeholder: "Placeholder video block. Replace with a real embed or demo file." },
      { title: "Online store product consultation", placeholder: "Placeholder video block. Replace with a real embed or demo file." },
    ],
    portfolioExamples: [
      { title: "Beauty salon booking assistant", text: "Guides clients from service choice to preferred time and contact confirmation." },
      { title: "Dental clinic FAQ and appointment assistant", text: "Answers common treatment questions and prepares clean requests for administrators." },
      { title: "Online store product consultant", text: "Recommends products, answers objections and helps customers move toward purchase." },
      { title: "Construction service lead assistant", text: "Collects project location, scope, budget and timeline before a manager joins." },
    ],
    pricingPlans: [
      { name: "Starter", price: "from $100 setup", details: "Initial consultant setup, core prompts, simple flow and launch guidance." },
      { name: "Support", price: "from $30/month", details: "Ongoing improvements, answers tuning and light monthly maintenance." },
      { name: "Custom automation", price: "individual price", details: "Advanced integrations and scenarios depending on business tasks." },
    ],
    pricingDisclaimer: "Platform subscriptions such as automation tools or messengers may be paid separately by the client.",
    channelLabels: ["Website", "Telegram", "Instagram", "WhatsApp", "Human handoff", "AI logic"],
    capabilities: [
      "Answers clients 24/7",
      "Collects leads",
      "Books appointments",
      "Consults clients",
      "Helps sell services and products",
      "Works in website chat, Telegram, Instagram and WhatsApp",
      "Transfers complex requests to a human manager",
    ],
    play: "Play",
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
      { title: "Салоны красоты", text: "Запись, вопросы о сервисах, ценовые рекомендации и напоминания клиентам." },
      { title: "Стоматологии", text: "FAQ, запросы на приём, первичная поддержка и рекомендации по лечению." },
      { title: "Интернет-магазины", text: "Консультации по товарам, вопросы по заказам, рекомендации и поддержка продаж." },
      { title: "Строительство и проекты", text: "Квалификация лидов, детали проектов, запросы смет и передача менеджеру." },
      { title: "Образовательные проекты", text: "Выбор курса, вопросы по зачислению, расписание и поддержка студентов." },
      { title: "Сервисы и поддержка", text: "Рутинные ответы, маршрутизация запросов и поддержка в популярных мессенджерах." },
    ],
    cta: {
      title: "Хотите протестировать AI консультанта для вашего бизнеса?",
      primary: "Отправить запрос",
      secondary: "Узнать больше",
    },
    orderSimilarAssistant: "Заказать похожего ассистента",
    openAssistantPage: "Открыть страницу ассистента",
    backToHome: "Вернуться на главную",
    demoMenu: {
      title: "Меню демо",
      demoVideo: "Видео работы",
      pdfPresentation: "PDF-презентация",
      screenshots: "Скриншоты",
      videoPresentation: "Видеопрезентация",
      unavailable: "Материал скоро будет добавлен",
      close: "Закрыть",
      loading: "Загрузка...",
      openPdfInNewTab: "Открыть PDF в новой вкладке",
      openVideoInNewTab: "Открыть видео в новой вкладке",
      videoFailedToLoad: "Не удалось загрузить видео",
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
      emailBodyIntro: "Здравствуйте Tisgrow,",
    },
    footer: {
      brandTitle: "Tisgrow",
      brandText: "AI консультанты и AI агенты, которые помогают современному бизнесу расти.",
    },
    requestPage: {
      title: "Форма заявки на AI-консультанта Tisgrow",
      description: "Опишите свой бизнес, желаемые каналы и задачи. Форму пока что открывает email-запрос, но структура готова к будущему API.",
      nameLabel: "Ваше имя",
      businessLabel: "Сфера бизнеса",
      businessPlaceholder: "салон красоты / стоматология / магазин / другое",
      channelsLabel: "Где вы хотите AI-консультанта?",
      channelOptions: ["Telegram", "WhatsApp", "Instagram", "TikTok", "Сайт", "X (Twitter)"],
      automateLabel: "Что нужно автоматизировать?",
      automatePlaceholder: "ответы клиентам, записи, консультации, FAQ, напоминания, продажи и т.д.",
      contactLabel: "Ваш контакт для связи",
      contactPlaceholder: "Telegram / WhatsApp / Instagram / телефон",
      detailsLabel: "Дополнительно",
      detailsPlaceholder: "любые пожелания или задачи",
      submitButton: "Заказать AI-консультанта",
      successMessage: "Запрос готов. Открывается ваш почтовый клиент...",
      errorMessage: "Пожалуйста, заполните имя и контакт для отправки запроса.",
      communityHeading: "Связь",
      communitySite: "Сайт",
      communityTelegram: "Telegram",
      communityX: "X (Twitter)",
      communityTiktok: "TikTok",
      ctaButtonLabel: "Заказать AI-консультанта",
    },
    homeAriaLabel: "Перейти на главную страницу Tisgrow",
    toggleNavigation: "Переключить навигацию",
    heroVisual: {
      onlineLabel: "AI консультант онлайн",
      channelsLabel: "Чат сайта + мессенджеры",
      status: "Активен",
    },
    visualMessages: [
      { role: "client", from: "Клиент", text: "Есть ли свободная встреча на завтра?" },
      { role: "assistant", from: "AI консультант", text: "Да. Я могу предложить 11:30 или 16:00. Что вам подходит?" },
      { role: "client", from: "Клиент", text: "16:00, пожалуйста. Можно также цену?" },
      { role: "assistant", from: "AI консультант", text: "Конечно. Я сохраню слот и отправлю детали услуги." },
    ],
    heroStats: [
      { value: "24/7", label: "ответы клиентам" },
      { value: "5+", label: "каналов" },
      { value: "Быстро", label: "ответ лидам" },
    ],
    videoCards: [
      { title: "Сценарий бронирования красоты", placeholder: "Заполните реальным видео или демонстрацией." },
      { title: "FAQ стоматологической клиники и запись", placeholder: "Заполните реальным видео или демонстрацией." },
      { title: "Консультант товаров онлайн-магазина", placeholder: "Заполните реальным видео или демонстрацией." },
    ],
    portfolioExamples: [
      { title: "Ассистент бронирования салона", text: "Помогает клиенту выбрать услугу, время и подтвердить контакт." },
      { title: "FAQ ассистент стоматологии", text: "Отвечает на вопросы лечения и подготавливает чистые заявки для администраторов." },
      { title: "Продуктовый консультант магазина", text: "Рекомендует товары, отвечает на возражения и помогает к покупке." },
      { title: "Ассистент лидов для строительства", text: "Собирает место, объем, бюджет и сроки перед передачей менеджеру." },
    ],
    pricingPlans: [
      { name: "Начальный", price: "от $100 настройки", details: "Начальная настройка консультанта, ключевые подсказки, простой сценарий и запуск." },
      { name: "Поддержка", price: "от $30/месяц", details: "Постоянные улучшения, настройка ответов и легкое ежемесячное сопровождение." },
      { name: "Индивидуальная автоматизация", price: "индивидуальная цена", details: "Продвинутые интеграции и сценарии в зависимости от бизнес-задач." },
    ],
    pricingDisclaimer: "Платные подписки на платформы, инструменты автоматизации или мессенджеры могут оплачиваться отдельно клиентом.",
    channelLabels: ["Веб", "Telegram", "Instagram", "WhatsApp", "Передача менеджеру", "AI логика"],
    capabilities: [
      "Отвечает клиентам 24/7",
      "Собирает лиды",
      "Бронирует записи",
      "Консультирует клиентов",
      "Помогает продавать услуги и продукты",
      "Работает в чате сайта, Telegram, Instagram и WhatsApp",
      "Передаёт сложные запросы менеджеру",
    ],
    play: "Воспроизвести",
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
      { title: "Salones de belleza", text: "Reservas, preguntas sobre servicios, guía de precios y recordatorios a clientes." },
      { title: "Clínicas dentales", text: "Preguntas frecuentes, solicitudes de cita, soporte inicial y guía de tratamientos." },
      { title: "Tiendas online", text: "Consultas de productos, preguntas de pedidos, recomendaciones y soporte de ventas." },
      { title: "Construcción y proyectos", text: "Calificación de leads, detalles de proyectos, solicitudes de presupuesto y traspaso a gestor." },
      { title: "Proyectos educativos", text: "Selección de cursos, preguntas de inscripción, programación y ayuda a estudiantes." },
      { title: "Servicios y soporte", text: "Respuestas rutinarias, enrutamiento de solicitudes y soporte en mensajeros populares." },
    ],
    cta: {
      title: "¿Quieres probar un consultor de IA para tu negocio?",
      primary: "Enviar solicitud",
      secondary: "Aprender más",
    },
    orderSimilarAssistant: "Pedir un asistente similar",
    openAssistantPage: "Abrir página del asistente",
    backToHome: "Volver al inicio",
    demoMenu: {
      title: "Menú demo",
      demoVideo: "Video de demostración",
      pdfPresentation: "Presentación PDF",
      screenshots: "Capturas",
      videoPresentation: "Video de presentación",
      unavailable: "Material pronto estará disponible",
      close: "Cerrar",
      loading: "Cargando...",
      openPdfInNewTab: "Abrir PDF en una nueva pestaña",
      openVideoInNewTab: "Abrir video en una nueva pestaña",
      videoFailedToLoad: "Error al cargar el video",
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
      emailBodyIntro: "Hola Tisgrow,",
    },
    footer: {
      brandTitle: "Tisgrow",
      brandText: "Consultores y agentes de IA que ayudan a las empresas modernas a crecer.",
    },
    requestPage: {
      title: "Formulario de solicitud de consultor AI Tisgrow",
      description: "Describe tu negocio, canales deseados y objetivos de automatización. El formulario abre una solicitud de correo electrónico por ahora y está listo para un futuro API.",
      nameLabel: "Tu nombre",
      businessLabel: "Área de negocio",
      businessPlaceholder: "salón de belleza / clínica dental / tienda / otro",
      channelsLabel: "¿Dónde quieres un consultor AI?",
      channelOptions: ["Telegram", "WhatsApp", "Instagram", "TikTok", "Sitio web", "X (Twitter)"],
      automateLabel: "¿Qué debe automatizarse?",
      automatePlaceholder: "respuestas a clientes, reservas, consultas, FAQ, recordatorios, ventas, etc.",
      contactLabel: "Tu contacto para comunicación",
      contactPlaceholder: "Telegram / WhatsApp / Instagram / teléfono",
      detailsLabel: "Detalles adicionales",
      detailsPlaceholder: "cualquier deseo o tarea",
      submitButton: "Solicitar un consultor AI",
      successMessage: "Solicitud lista. Se está abriendo tu cliente de correo...",
      errorMessage: "Por favor completa tu nombre y contacto para enviar la solicitud.",
      communityHeading: "Conexión",
      communitySite: "Sitio web",
      communityTelegram: "Telegram",
      communityX: "X (Twitter)",
      communityTiktok: "TikTok",
      ctaButtonLabel: "Solicitar un consultor AI",
    },
    homeAriaLabel: "Ir a la página principal de Tisgrow",
    toggleNavigation: "Alternar navegación",
    heroVisual: {
      onlineLabel: "Consultor de IA en línea",
      channelsLabel: "Chat del sitio + mensajeros",
      status: "Activo",
    },
    visualMessages: [
      { role: "client", from: "Cliente", text: "¿Tiene una cita disponible para mañana?" },
      { role: "assistant", from: "Consultor IA", text: "Sí. Puedo ofrecer 11:30 o 16:00. ¿Cuál funciona mejor?" },
      { role: "client", from: "Cliente", text: "16:00, por favor. ¿También puedo obtener el precio?" },
      { role: "assistant", from: "Consultor IA", text: "Por supuesto. Guardaré el horario y enviaré los detalles del servicio." },
    ],
    heroStats: [
      { value: "24/7", label: "respuestas al cliente" },
      { value: "5+", label: "canales" },
      { value: "Rápido", label: "respuesta a leads" },
    ],
    videoCards: [
      { title: "Escenario de reserva de belleza", placeholder: "Bloque de video de marcador. Sustituye por un embed o demo real." },
      { title: "Flujo de FAQ dental y cita", placeholder: "Bloque de video de marcador. Sustituye por un embed o demo real." },
      { title: "Consulta de producto de tienda online", placeholder: "Bloque de video de marcador. Sustituye por un embed o demo real." },
    ],
    portfolioExamples: [
      { title: "Asistente de reservas para salón de belleza", text: "Guía a los clientes desde la elección del servicio hasta la hora y la confirmación de contacto." },
      { title: "Asistente FAQ de clínica dental", text: "Responde preguntas comunes de tratamiento y prepara solicitudes limpias para administradores." },
      { title: "Consultor de producto de tienda online", text: "Recomienda productos, responde objeciones y ayuda a avanzar hacia la compra." },
      { title: "Asistente de leads para construcción", text: "Recolecta ubicación, alcance, presupuesto y calendario antes de que se una un gerente." },
    ],
    pricingPlans: [
      { name: "Inicial", price: "desde $100 de configuración", details: "Configuración inicial del consultor, prompts clave, flujo simple y guía de lanzamiento." },
      { name: "Soporte", price: "desde $30/mes", details: "Mejoras continuas, afinación de respuestas y mantenimiento mensual ligero." },
      { name: "Automatización personalizada", price: "precio individual", details: "Integraciones avanzadas y escenarios según tareas del negocio." },
    ],
    pricingDisclaimer: "Las suscripciones a plataformas, herramientas de automatización o mensajeros pueden pagarse por separado por el cliente.",
    channelLabels: ["Sitio web", "Telegram", "Instagram", "WhatsApp", "Transferencia al humano", "Lógica IA"],
    capabilities: [
      "Responde clientes 24/7",
      "Recopila leads",
      "Reserva citas",
      "Consulta clientes",
      "Ayuda a vender servicios y productos",
      "Funciona en chat del sitio, Telegram, Instagram y WhatsApp",
      "Transfiere solicitudes complejas a un humano",
    ],
    play: "Reproducir",
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
      { title: "Salons de beauté", text: "Réservations, questions sur les services, guide des prix et rappels clients." },
      { title: "Cliniques dentaires", text: "FAQ, demandes de rendez-vous, support initial et recommandations de traitement." },
      { title: "Boutiques en ligne", text: "Conseil produit, questions de commande, recommandations et support commercial." },
      { title: "Construction et projets", text: "Qualification des leads, détails de projet, demandes de devis et transfert au gestionnaire." },
      { title: "Projets éducatifs", text: "Choix de cours, questions d'inscription, planification et accompagnement des étudiants." },
      { title: "Services et support", text: "Réponses routinières, routage des demandes et support sur les messagers populaires." },
    ],
    cta: {
      title: "Vous souhaitez tester un consultant IA pour votre entreprise ?",
      primary: "Envoyer une demande",
      secondary: "En savoir plus",
    },
    orderSimilarAssistant: "Commander un assistant similaire",
    openAssistantPage: "Ouvrir la page de l'assistant",
    backToHome: "Retour à l'accueil",
    demoMenu: {
      title: "Menu démo",
      demoVideo: "Vidéo de démo",
      pdfPresentation: "Présentation PDF",
      screenshots: "Captures",
      videoPresentation: "Vidéo de présentation",
      unavailable: "Le contenu sera bientôt ajouté",
      close: "Fermer",
      loading: "Chargement...",
      openPdfInNewTab: "Ouvrir le PDF dans un nouvel onglet",
      openVideoInNewTab: "Ouvrir la vidéo dans un nouvel onglet",
      videoFailedToLoad: "Impossible de charger la vidéo",
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
      emailBodyIntro: "Bonjour Tisgrow,",
    },
    footer: {
      brandTitle: "Tisgrow",
      brandText: "Consultants et agents IA qui aident les entreprises modernes à se développer.",
    },
    requestPage: {
      title: "Formulaire de demande de consultant AI Tisgrow",
      description: "Décrivez votre entreprise, les canaux souhaités et les objectifs d'automatisation. Le formulaire ouvre une demande email pour le moment et est prêt pour un futur API.",
      nameLabel: "Votre nom",
      businessLabel: "Secteur d'activité",
      businessPlaceholder: "salon de beauté / clinique dentaire / boutique / autre",
      channelsLabel: "Où voulez-vous un consultant AI?",
      channelOptions: ["Telegram", "WhatsApp", "Instagram", "TikTok", "Site web", "X (Twitter)"],
      automateLabel: "Que faut-il automatiser?",
      automatePlaceholder: "réponses clients, réservations, consultations, FAQ, rappels, ventes, etc.",
      contactLabel: "Votre contact pour la communication",
      contactPlaceholder: "Telegram / WhatsApp / Instagram / téléphone",
      detailsLabel: "Informations supplémentaires",
      detailsPlaceholder: "toutes demandes ou tâches",
      submitButton: "Demander un consultant AI",
      successMessage: "Demande prête. Votre client email s'ouvre...",
      errorMessage: "Veuillez remplir votre nom et votre contact pour envoyer la demande.",
      communityHeading: "Connexion",
      communitySite: "Site web",
      communityTelegram: "Telegram",
      communityX: "X (Twitter)",
      communityTiktok: "TikTok",
      ctaButtonLabel: "Demander un consultant AI",
    },
    homeAriaLabel: "Aller à la page d'accueil de Tisgrow",
    toggleNavigation: "Basculer la navigation",
    heroVisual: {
      onlineLabel: "Consultant IA en ligne",
      channelsLabel: "Chat du site + messagers",
      status: "Actif",
    },
    visualMessages: [
      { role: "client", from: "Client", text: "Avez-vous un rendez-vous disponible pour demain ?" },
      { role: "assistant", from: "Consultant IA", text: "Oui. Je peux proposer 11h30 ou 16h00. Que préférez-vous ?" },
      { role: "client", from: "Client", text: "16h00, s'il vous plaît. Puis-je aussi avoir le tarif ?" },
      { role: "assistant", from: "Consultant IA", text: "Bien sûr. Je vais réserver le créneau et envoyer les détails du service." },
    ],
    heroStats: [
      { value: "24/7", label: "réponses clients" },
      { value: "5+", label: "canaux" },
      { value: "Rapide", label: "réponse leads" },
    ],
    videoCards: [
      { title: "Scénario de réservation beauté", placeholder: "Bloc vidéo de remplacement. Remplacez par un embed ou une démo réelle." },
      { title: "FAQ dentaire et flux de rendez-vous", placeholder: "Bloc vidéo de remplacement. Remplacez par un embed ou une démo réelle." },
      { title: "Consultant produit pour boutique en ligne", placeholder: "Bloc vidéo de remplacement. Remplacez par un embed ou une démo réelle." },
    ],
    portfolioExamples: [
      { title: "Assistant de réservation salon beauté", text: "Guide le client du choix de service à la confirmation du contact." },
      { title: "Assistant FAQ clinique dentaire", text: "Répond aux questions de traitement et prépare des demandes claires pour les administrateurs." },
      { title: "Consultant produit boutique en ligne", text: "Recommande des produits, répond aux objections et facilite l'achat." },
      { title: "Assistant leads construction", text: "Collecte lieu, volume, budget et calendrier avant l'intervention d'un manager." },
    ],
    pricingPlans: [
      { name: "Début", price: "à partir de 100 $ de configuration", details: "Configuration initiale du consultant, prompts de base, flux simple et guide de lancement." },
      { name: "Support", price: "à partir de 30 $/mois", details: "Améliorations continues, ajustement des réponses et maintenance mensuelle légère." },
      { name: "Automatisation personnalisée", price: "prix individuel", details: "Intégrations avancées et scénarios selon les besoins métier." },
    ],
    pricingDisclaimer: "Les abonnements plateformes, outils d'automatisation ou messagers peuvent être payés séparément par le client.",
    channelLabels: ["Site web", "Telegram", "Instagram", "WhatsApp", "Transfert humain", "Logique IA"],
    capabilities: [
      "Répond aux clients 24/7",
      "Collecte des leads",
      "Réserve des rendez-vous",
      "Conseille les clients",
      "Aide à vendre des services et produits",
      "Fonctionne sur chat site, Telegram, Instagram et WhatsApp",
      "Transfère les demandes complexes à un humain",
    ],
    play: "Lire",
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
      { title: "صالونات التجميل", text: "الحجوزات، أسئلة الخدمة، إرشادات الأسعار وتذكيرات العملاء." },
      { title: "عيادات الأسنان", text: "الأسئلة الشائعة، طلبات المواعيد، الدعم الأولي وإرشادات العلاج." },
      { title: "المتاجر الإلكترونية", text: "استشارات المنتجات، أسئلة الطلب، التوصيات ودعم المبيعات." },
      { title: "البناء والمشاريع", text: "تأهيل العملاء المحتملين، تفاصيل المشروع، طلبات التقدير وتسليمها للمدير." },
      { title: "المشاريع التعليمية", text: "اختيار الدورات، أسئلة التسجيل، الجدولة ودعم الطلاب." },
      { title: "الخدمات والدعم", text: "إجابات روتينية، توجيه الطلبات ودعم عبر الرسائل الشائعة." },
    ],
    cta: {
      title: "هل تريد تجربة مستشار ذكاء اصطناعي لعملك؟",
      primary: "إرسال الطلب",
      secondary: "اعرف أكثر",
    },
    orderSimilarAssistant: "طلب مساعد مشابه",
    openAssistantPage: "فتح صفحة المساعد",
    backToHome: "العودة إلى الصفحة الرئيسية",
    demoMenu: {
      title: "قائمة العرض التوضيحي",
      demoVideo: "فيديو العرض",
      pdfPresentation: "عرض PDF",
      screenshots: "لقطات الشاشة",
      videoPresentation: "عرض تقديمي بالفيديو",
      unavailable: "سيتم إضافة المحتوى قريبًا",
      close: "إغلاق",
      loading: "جارٍ التحميل...",
      openPdfInNewTab: "افتح PDF في علامة تبويب جديدة",
      openVideoInNewTab: "افتح الفيديو في علامة تبويب جديدة",
      videoFailedToLoad: "فشل تحميل الفيديو",
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
      emailBodyIntro: "مرحبًا Tisgrow،",
    },
    footer: {
      brandTitle: "Tisgrow",
      brandText: "استشاريون ووكلاء الذكاء الاصطناعي الذين يساعدون الشركات الحديثة على النمو.",
    },
    requestPage: {
      title: "نموذج طلب مستشار AI من Tisgrow",
      description: "صف عملك والقنوات المرغوبة وأهداف الأتمتة. يفتح النموذج طلب بريد إلكتروني الآن ويُعد لدعم API في المستقبل.",
      nameLabel: "اسمك",
      businessLabel: "مجال العمل",
      businessPlaceholder: "صالون تجميل / عيادة أسنان / متجر / آخر",
      channelsLabel: "أين تريد مستشار AI؟",
      channelOptions: ["Telegram", "WhatsApp", "Instagram", "TikTok", "الموقع", "X (Twitter)"],
      automateLabel: "ماذا يجب أن يتم أتمتته؟",
      automatePlaceholder: "ردود العملاء، الحجوزات، الاستشارات، الأسئلة الشائعة، التذكيرات، المبيعات، إلخ.",
      contactLabel: "جهة الاتصال الخاصة بك للتواصل",
      contactPlaceholder: "Telegram / WhatsApp / Instagram / هاتف",
      detailsLabel: "إضافي",
      detailsPlaceholder: "أي رغبات أو مهام",
      submitButton: "طلب مستشار AI",
      successMessage: "الطلب جاهز. يتم فتح عميل البريد الإلكتروني الخاص بك...",
      errorMessage: "يرجى إدخال اسمك ومعلومات الاتصال لإرسال الطلب.",
      communityHeading: "التواصل",
      communitySite: "الموقع",
      communityTelegram: "Telegram",
      communityX: "X (Twitter)",
      communityTiktok: "TikTok",
      ctaButtonLabel: "طلب مستشار AI",
    },
    homeAriaLabel: "الانتقال إلى الصفحة الرئيسية لـ Tisgrow",
    toggleNavigation: "تبديل التنقل",
    heroVisual: {
      onlineLabel: "مستشار AI عبر الإنترنت",
      channelsLabel: "دردشة الموقع + المراسلات",
      status: "نشط",
    },
    visualMessages: [
      { role: "client", from: "عميل", text: "هل لديك موعد متاح غدًا؟" },
      { role: "assistant", from: "مستشار AI", text: "نعم. يمكنني تقديم 11:30 أو 16:00. أيهما يناسب؟" },
      { role: "client", from: "عميل", text: "16:00، من فضلك. هل يمكنني أيضًا معرفة السعر؟" },
      { role: "assistant", from: "مستشار AI", text: "بالطبع. سأحجز الموعد وأرسل تفاصيل الخدمة." },
    ],
    heroStats: [
      { value: "24/7", label: "إجابات للعملاء" },
      { value: "5+", label: "القنوات" },
      { value: "سريع", label: "استجابة العملاء المحتملين" },
    ],
    videoCards: [
      { title: "سيناريو حجز صالون جمال", placeholder: "كتلة فيديو تجريبية. استبدلها بتضمين أو عرض توضيحي حقيقي." },
      { title: "تدفق FAQ لعيادة الأسنان والمواعيد", placeholder: "كتلة فيديو تجريبية. استبدلها بتضمين أو عرض توضيحي حقيقي." },
      { title: "مستشار منتجات متجر إلكتروني", placeholder: "كتلة فيديو تجريبية. استبدلها بتضمين أو عرض توضيحي حقيقي." },
    ],
    portfolioExamples: [
      { title: "مساعد حجز صالون جمال", text: "يرشد العملاء من اختيار الخدمة إلى الوقت وتأكيد الاتصال." },
      { title: "مساعد FAQ لعيادة الأسنان", text: "يجيب على الأسئلة الشائعة حول العلاج ويجهز طلبات واضحة للمسؤولين." },
      { title: "مستشار منتجات متجر إلكتروني", text: "يوصي بالمنتجات، يرد على الاعتراضات ويساعد على التقدم نحو الشراء." },
      { title: "مساعد العملاء المحتملين للبناء", text: "يجمع الموقع والنطاق والميزانية والجدول قبل انضمام المدير." },
    ],
    pricingPlans: [
      { name: "البدء", price: "من 100 دولار إعداد", details: "إعداد استشاري أولي،prompts أساسية، تدفق بسيط ودليل إطلاق." },
      { name: "الدعم", price: "من 30 دولار/شهريًا", details: "تحسينات مستمرة، ضبط الإجابات وصيانة شهرية خفيفة." },
      { name: "الأتمتة المخصصة", price: "سعر فردي", details: "تكاملات متقدمة وسيناريوهات حسب مهام العمل." },
    ],
    pricingDisclaimer: "قد تدفع الاشتراكات على المنصات أو أدوات الأتمتة أو المراسلات بشكل منفصل من العميل.",
    channelLabels: ["الموقع", "Telegram", "Instagram", "WhatsApp", "نقل إلى إنسان", "منطق AI"],
    capabilities: [
      "يجيب على العملاء 24/7",
      "يجمع العملاء المحتملين",
      "يحجز المواعيد",
      "يستشير العملاء",
      "يساعد على بيع الخدمات والمنتجات",
      "يعمل في دردشة الموقع وTelegram وInstagram وWhatsApp",
      "ينقل الطلبات المعقدة إلى إنسان",
    ],
    play: "تشغيل",
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
      { title: "美容沙龙", text: "预约、服务问题、价格指南和客户提醒。" },
      { title: "牙科诊所", text: "常见问题解答、预约请求、首次支持和治疗建议。" },
      { title: "在线商店", text: "产品咨询、订单问题、推荐和销售支持。" },
      { title: "建筑与项目公司", text: "线索资格、项目细节、报价请求和经理交接。" },
      { title: "教育项目", text: "课程选择、报名问题、排期和学生支持。" },
      { title: "服务与客户支持", text: "常规回复、请求路由和流行信使支持。" },
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
      loading: "加载中...",
      openPdfInNewTab: "在新标签页中打开 PDF",
      openVideoInNewTab: "在新标签页中打开视频",
      videoFailedToLoad: "视频加载失败",
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
      emailBodyIntro: "你好 Tisgrow，",
    },
    footer: {
      brandTitle: "Tisgrow",
      brandText: "AI 顾问和 AI 代理，帮助现代企业成长。",
    },
    requestPage: {
      title: "Tisgrow AI 顾问请求表单",
      description: "描述您的业务、首选渠道和自动化目标。此表单目前会打开电子邮件请求，并已准备好将来连接 API。",
      nameLabel: "您的姓名",
      businessLabel: "业务领域",
      businessPlaceholder: "美妆沙龙 / 牙科诊所 / 商店 / 其他",
      channelsLabel: "您希望在哪里使用 AI 顾问？",
      channelOptions: ["Telegram", "WhatsApp", "Instagram", "TikTok", "网站", "X (Twitter)"],
      automateLabel: "需要自动化什么？",
      automatePlaceholder: "客户回复、预约、咨询、FAQ、提醒、销售等",
      contactLabel: "您的联系方式",
      contactPlaceholder: "Telegram / WhatsApp / Instagram / 电话",
      detailsLabel: "其他信息",
      detailsPlaceholder: "任何愿望或任务",
      submitButton: "申请 AI 顾问",
      successMessage: "请求已准备好。正在打开您的邮件客户端...",
      errorMessage: "请填写您的姓名和联系方式以提交请求。",
      communityHeading: "联系",
      communitySite: "网站",
      communityTelegram: "Telegram",
      communityX: "X (Twitter)",
      communityTiktok: "TikTok",
      ctaButtonLabel: "申请 AI 顾问",
    },
    homeAriaLabel: "转到 Tisgrow 主页",
    openAssistantPage: "打开助手页面",
    backToHome: "返回首页",
    toggleNavigation: "切换导航",
    heroVisual: {
      onlineLabel: "AI 顾问在线",
      channelsLabel: "网站聊天 + 信使",
      status: "在线",
    },
    visualMessages: [
      { role: "client", from: "客户", text: "明天有可用的预约吗？" },
      { role: "assistant", from: "AI 顾问", text: "有的。我可以提供11:30或16:00。哪个更合适？" },
      { role: "client", from: "客户", text: "请定在16:00。也可以告诉我价格吗？" },
      { role: "assistant", from: "AI 顾问", text: "当然。我会保存时间并发送服务详情。" },
    ],
    heroStats: [
      { value: "24/7", label: "客户回复" },
      { value: "5+", label: "渠道" },
      { value: "快速", label: "潜在客户响应" },
    ],
    videoCards: [
      { title: "美容预约场景", placeholder: "占位视频块。请替换为真实嵌入或演示文件。" },
      { title: "牙科 FAQ 及预约流程", placeholder: "占位视频块。请替换为真实嵌入或演示文件。" },
      { title: "在线商店产品咨询", placeholder: "占位视频块。请替换为真实嵌入或演示文件。" },
    ],
    portfolioExamples: [
      { title: "美容院预约助手", text: "引导客户从服务选择到时间和联系方式确认。" },
      { title: "牙科诊所 FAQ 助手", text: "回答常见治疗问题，并为管理员准备清晰请求。" },
      { title: "在线商店产品顾问", text: "推荐产品、回答异议并帮助客户购买。" },
      { title: "建筑服务线索助手", text: "收集地点、范围、预算和时程，然后转交给经理。" },
    ],
    pricingPlans: [
      { name: "入门", price: "设置费从 $100 起", details: "初始顾问设置、核心提示、简单流程和上线指导。" },
      { name: "支持", price: "每月 $30 起", details: "持续优化、答案调优和轻量月度维护。" },
      { name: "定制自动化", price: "单独定价", details: "根据业务任务的高级集成和场景。" },
    ],
    pricingDisclaimer: "平台订阅、自动化工具或信使服务可能由客户单独付费。",
    channelLabels: ["网站", "Telegram", "Instagram", "WhatsApp", "人工交接", "AI 逻辑"],
    capabilities: [
      "24/7 回答客户",
      "收集线索",
      "预订预约",
      "咨询客户",
      "帮助销售服务和产品",
      "支持网站聊天、Telegram、Instagram 和 WhatsApp",
      "将复杂请求转交人工处理",
    ],
    play: "播放",
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
    openAssistantPage: "सहायक पृष्ठ खोलें",
    backToHome: "मुखपृष्ठ पर लौटें",
    demoMenu: {
      title: "डेमो मेनू",
      demoVideo: "डेमो वीडियो",
      pdfPresentation: "PDF प्रस्तुति",
      screenshots: "स्क्रीनशॉट",
      videoPresentation: "वीडियो प्रस्तुति",
      unavailable: "सामग्री जल्द ही जोड़ी जाएगी",
      close: "बंद करें",
      loading: "लोड हो रहा है...",
      openPdfInNewTab: "PDF को नए टैब में खोलें",
      openVideoInNewTab: "वीडियो को नए टैब में खोलें",
      videoFailedToLoad: "वीडियो लोड करने में विफल रहा",
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
      emailBodyIntro: "नमस्ते Tisgrow,",
    },
    footer: {
      brandTitle: "Tisgrow",
      brandText: "AI सलाहकार और एजेंट जो आधुनिक व्यवसायों को बढ़ने में मदद करते हैं।",
    },
    requestPage: {
      title: "Tisgrow AI कंसल्टेंट अनुरोध फ़ॉर्म",
      description: "अपने व्यवसाय, पसंदीदा चैनल और स्वचालन लक्ष्य दर्ज करें। यह फ़ॉर्म अभी के लिए एक ईमेल अनुरोध खोलता है और भविष्य में API के लिए तैयार है।",
      nameLabel: "आपका नाम",
      businessLabel: "व्यवसाय का क्षेत्र",
      businessPlaceholder: "ब्यूटी सैलून / डेंटल क्लिनिक / दुकान / अन्य",
      channelsLabel: "आप AI कंसल्टेंट कहां चाहते हैं?",
      channelOptions: ["Telegram", "WhatsApp", "Instagram", "TikTok", "साइट", "X (Twitter)"],
      automateLabel: "क्या स्वचालित किया जाना चाहिए?",
      automatePlaceholder: "ग्राहक उत्तर, बुकिंग, परामर्श, FAQ, अनुस्मारक, बिक्री आदि",
      contactLabel: "संपर्क जानकारी",
      contactPlaceholder: "Telegram / WhatsApp / Instagram / फोन",
      detailsLabel: "अतिरिक्त",
      detailsPlaceholder: "कोई भी इच्छाएँ या कार्य",
      submitButton: "AI कंसल्टेंट का अनुरोध करें",
      successMessage: "अनुरोध तैयार है। आपका मेल क्लाइंट खुल रहा है...",
      errorMessage: "कृपया अनुरोध भेजने के लिए अपना नाम और संपर्क भरें।",
      communityHeading: "सम्पर्क",
      communitySite: "साइट",
      communityTelegram: "Telegram",
      communityX: "X (Twitter)",
      communityTiktok: "TikTok",
      ctaButtonLabel: "AI कंसल्टेंट का अनुरोध करें",
    },
    homeAriaLabel: "Tisgrow होम पर जाएं",
    toggleNavigation: "नेविगेशन टॉगल करें",
    heroVisual: {
      onlineLabel: "AI सलाहकार ऑनलाइन",
      channelsLabel: "वेबसाइट चैट + मेसेंजर",
      status: "ऑनलाइन",
    },
    visualMessages: [
      { role: "client", from: "ग्राहक", text: "क्या कल अपॉइंटमेंट उपलब्ध है?" },
      { role: "assistant", from: "AI सलाहकार", text: "हां। मैं 11:30 या 16:00 उपलब्ध कर सकता हूं। कौन सा ठीक रहेगा?" },
      { role: "client", from: "ग्राहक", text: "16:00 पर बुक करें। क्या आप कीमत भी बता सकते हैं?" },
      { role: "assistant", from: "AI सलाहकार", text: "बिल्कुल। मैं समय आरक्षित करूंगा और सेवा विवरण भेजूंगा।" },
    ],
    heroStats: [
      { value: "24/7", label: "ग्राहक उत्तर" },
      { value: "5+", label: "चैनल" },
      { value: "त्वरित", label: "लीड प्रतिक्रिया" },
    ],
    videoCards: [
      { title: "ब्यूटी अपॉइंटमेंट दृश्य", placeholder: "प्लेसहोल्डर वीडियो ब्लॉक। कृपया वास्तविक एम्बेड या डेमो फ़ाइल से बदलें।" },
      { title: "डेंटल FAQ और अपॉइंटमेंट फ्लो", placeholder: "प्लेसहोल्डर वीडियो ब्लॉक। कृपया वास्तविक एम्बेड या डेमो फ़ाइल से बदलें।" },
      { title: "ऑनलाइन स्टोर उत्पाद सलाह", placeholder: "प्लेसहोल्डर वीडियो ब्लॉक। कृपया वास्तविक एम्बेड या डेमो फ़ाइल से बदलें।" },
    ],
    portfolioExamples: [
      { title: "ब्यूटी सैलून अपॉइंटमेंट असिस्टेंट", text: "ग्राहकों को सेवा चयन से लेकर समय और संपर्क पुष्टिकरण तक मार्गदर्शन करता है।" },
      { title: "डेंटल क्लिनिक FAQ असिस्टेंट", text: "आम उपचार प्रश्नों का उत्तर देता है और प्रशासन के लिए स्पष्ट अनुरोध तैयार करता है।" },
      { title: "ऑनलाइन स्टोर प्रॉडक्ट एडवाइजर", text: "उत्पाद की सिफारिश करता है, आपत्तियों का जवाब देता है और खरीदारी में मदद करता है।" },
      { title: "कंस्ट्रक्शन लीड असिस्टेंट", text: "स्थान, दायरा, बजट और समय-सारणी एकत्र करता है, फिर मैनेजर को भेजता है।" },
    ],
    pricingPlans: [
      { name: "प्रारंभ", price: "सेटअप शुल्क $100 से शुरू", details: "प्रारंभिक सलाहकार सेटअप, कोर प्रॉम्प्ट, सरल फ्लो और लॉन्च मार्गदर्शन।" },
      { name: "सपोर्ट", price: "मासिक $30 से", details: "निरंतर अनुकूलन, उत्तर ट्यूनिंग, और हल्का मासिक रखरखाव।" },
      { name: "कस्टम स्वचालन", price: "अलग मूल्य निर्धारण", details: "व्यवसाय कार्यों के लिए उन्नत एकीकरण और परिदृश्य।" },
    ],
    pricingDisclaimer: "प्लेटफ़ॉर्म सदस्यता, ऑटोमेशन टूल, या संदेश सेवा ग्राहक द्वारा अलग से भुगतान की जा सकती है।",
    channelLabels: ["वेबसाइट", "Telegram", "Instagram", "WhatsApp", "मानव हस्तांतरण", "AI लॉजिक"],
    capabilities: [
      "24/7 ग्राहक उत्तर",
      "लीड एकत्र करना",
      "अपॉइंटमेंट बुक करना",
      "ग्राहक मार्गदर्शन करना",
      "सेवा और उत्पाद बिक्री में मदद करना",
      "वेबसाइट चैट, Telegram, Instagram और WhatsApp का समर्थन करना",
      "जटिल अनुरोधों को मानव के पास भेजना",
    ],
    play: "प्ले",
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
    key: "tisgrow",
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
    media: {
      demoVideo: {
        uk: "/media/demos/videos/tisgrow-demo-ua.mp4",
        en: "/media/demos/videos/tisgrow-demo-en.mp4",
      },
      videoPresentation: {
        uk: "/media/demos/videos/tisgrow-video-presentation-ua.mp4",
        en: "/media/demos/videos/tisgrow-video-presentation-en.mp4",
      },
      pdfPresentation: {
        uk: "/media/demos/pdf/tisgrow-presentation-ua.pdf",
        en: "/media/demos/pdf/tisgrow-presentation-en.pdf",
      },
      screenshots: [
        "/media/demos/screenshot/tisgrow-chat-01-ua.jpg",
        "/media/demos/screenshot/tisgrow-chat-02-ua.jpg",
      ],
    },
    demoVideo: "/media/demos/videos/tisgrow-demo-ua.mp4",
    presentationVideo: "/media/demos/videos/tisgrow-video-presentation-ua.mp4",
    pdf: "/media/demos/pdf/tisgrow-presentation-ua.pdf",
    thumbnail: "/media/demos/thumbnails/tisgrow-dental.jpg",
  },
  {
    key: "avtologik",
    name: "АІ-Автологік",
    i18n: {
      name: { uk: "AI-Автологік", en: "AI-Autologic", zh: "AI Autologic" },
      category: { uk: "AI для автомобільних сервісів", en: "Automotive AI" },
      description: { uk: "Спокійний AI консультант для сервісів, діагностики, записів та питань клієнтів.", en: "Calm AI consultant for car services, diagnostics, bookings and client questions." },
    },
    route: "autologik",
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
    route: "levko",
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
