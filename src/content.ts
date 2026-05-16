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
  }
> = {
  uk: {
    eyebrow: "AI асистенти",
    title: "Розумні AI-помічники для вашого бізнесу",
    text: "Автоматизація спілкування з клієнтами, турботлива підтримка 24/7 і більше часу для важливого.",
    button: "Відкрити демо",
    selectorLabel: "Мова",
  },
  en: {
    eyebrow: "AI assistants",
    title: "Futuristic AI consultant gallery",
    text: "Choose a ready assistant for your niche or use these cards as premium demo showcases.",
    button: "View Demo",
    selectorLabel: "Language",
  },
  ru: {
    eyebrow: "AI ассистенты",
    title: "Футуристичная галерея AI консультантов",
    text: "Выберите готового ассистента для своей ниши или используйте карточки как премиальные демо.",
    button: "Открыть демо",
    selectorLabel: "Язык",
  },
  es: {
    eyebrow: "Asistentes AI",
    title: "Galería futurista de consultores AI",
    text: "Elige un asistente para tu nicho o usa estas tarjetas como demos premium.",
    button: "Ver demo",
    selectorLabel: "Idioma",
  },
  fr: {
    eyebrow: "Assistants IA",
    title: "Galerie futuriste de consultants IA",
    text: "Choisissez un assistant pour votre secteur ou utilisez ces cartes comme demos premium.",
    button: "Voir la demo",
    selectorLabel: "Langue",
  },
  ar: {
    eyebrow: "مساعدو الذكاء الاصطناعي",
    title: "معرض مستقبلي لمستشاري الذكاء الاصطناعي",
    text: "اختر مساعدا جاهزا لمجالك أو استخدم هذه البطاقات كعروض تجريبية مميزة.",
    button: "عرض Demo",
    selectorLabel: "اللغة",
  },
  zh: {
    eyebrow: "AI 助手",
    title: "未来感 AI 顾问画廊",
    text: "为你的行业选择现成助手，或把这些卡片作为高级演示展示。",
    button: "查看演示",
    selectorLabel: "语言",
  },
  hi: {
    eyebrow: "AI सहायक",
    title: "भविष्यवादी AI सलाहकार गैलरी",
    text: "अपने क्षेत्र के लिए तैयार सहायक चुनें या इन कार्डों को प्रीमियम डेमो की तरह उपयोग करें।",
    button: "डेमो देखें",
    selectorLabel: "भाषा",
  },
};

// Add, rename or remove assistant cards here as the product catalog grows.
export const assistants = [
  {
    name: "Sofia",
    category: "AI Personal Assistant",
    description:
      "Intelligent AI assistant for customer support, scheduling, and personalized interactions.",
    accent: "from-rose-300 via-pink-300 to-purple-300",
    image: "/media/assistants/sofia.jpg",
    imageClass: "assistant-image-sofia",
  },
  {
    name: "АІ-Автологік",
    category: "Automotive AI",
    description:
      "Calm AI consultant for car services, diagnostics, bookings and client questions.",
    accent: "from-aqua via-emerald-300 to-cyan-300",
    image: "/media/assistants/avtologik.jpg",
  },
  {
    name: "АІ-Вотерстоп",
    category: "Water Systems AI",
    description:
      "Helpful AI assistant for water systems, plumbing requests, estimates and service leads.",
    accent: "from-sky-300 via-aqua to-emerald-300",
    image: "/media/assistants/waterstop.jpg",
  },
  {
    name: "АІ-Левко",
    category: "Online Store AI",
    description:
      "Friendly AI consultant for online stores, product questions, order support and lead capture.",
    accent: "from-lime-300 via-aqua to-sky-400",
    image: "/media/assistants/levka.jpg",
  },
  {
    name: "АІ-Пігулкін",
    category: "Health Support AI",
    description:
      "AI assistant for pharmacies, wellness projects, FAQs and appointment-style requests.",
    accent: "from-emerald-300 via-cyan-300 to-blue-400",
    image: "/media/assistants/pigulkin.jpg",
    imageClass: "assistant-image-pigulkin",
  },
  {
    name: "АІ-Піццахот",
    category: "Food Delivery AI",
    description:
      "AI ordering helper for menus, delivery questions, upsells and fast customer replies.",
    accent: "from-orange-300 via-aqua to-emerald-300",
    image: "/media/assistants/pizzahot.jpg",
  },
  {
    name: "АІ-Айскрімбраун",
    key: "icecreambrown",
    category: "AI для морозива та молочної продукції",
    description:
      "AI-помічник для кафе, виробників морозива, молочної продукції та десертів: консультує клієнтів, допомагає з асортиментом, замовленнями та частими питаннями.",
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
    name: "АІ-Макар",
    category: "Architecture AI",
    description:
      "AI assistant for construction, architecture and project service lead qualification.",
    accent: "from-blue-500 via-aqua to-emerald-300",
    image: "/media/assistants/makar.jpg",
  },
  {
    name: "АІ-Дженіс",
    category: "Clothing Repair AI",
    description:
      "Careful AI assistant for clothing repair, client requests, service details and bookings.",
    accent: "from-fuchsia-300 via-aqua to-emerald-300",
    image: "/media/assistants/janis.jpg",
    imagePosition: "center top",
    imageClass: "assistant-image-janis",
  },
  {
    name: "АІ-Фотологік",
    category: "Photography AI",
    description:
      "AI assistant for studios, photographers, packages, scheduling and client preparation.",
    accent: "from-violet-300 via-cyan-300 to-aqua",
    image: "/media/assistants/photologic.jpg",
  },
  {
    name: "АІ-Репіер",
    category: "Electronics Repair AI",
    description:
      "AI consultant for repair shops, device triage, price questions and service bookings.",
    accent: "from-slate-400 via-aqua to-lime-300",
    image: "/media/assistants/chiprepair.jpg",
  },
  {
    name: "АІ-Тісгроу Dental",
    category: "Dental AI",
    description:
      "AI dental consultant for clinic FAQs, patient details and appointment requests.",
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
