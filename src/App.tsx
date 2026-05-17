import {
  ArrowRight,
  Check,
  ChevronRight,
  Dna,
  Globe2,
  Mail,
  Menu,
  Play,
  Send,
  X,
} from "lucide-react";
import { type CSSProperties, type FormEvent, useState, createContext, useContext } from "react";
import {
  assistantGalleryCopy,
  assistants,
  capabilities,
  channelIcons,
  contactLinks,
  ctaActions,
  examples,
  footerLinks,
  heroStats,
  industries,
  languageOptions,
  type LanguageCode,
  navItems,
  pricing,
  videos,
  visualMessages,
} from "./content";

type LanguageContextType = {
  language: LanguageCode;
  setLanguage: (code: LanguageCode) => void;
  copy: (typeof assistantGalleryCopy)[LanguageCode & string];
};

const LanguageContext = createContext<LanguageContextType | null>(null);

function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}

type DemoMediaType = "demoVideo" | "pdfPresentation" | "screenshots" | "videoPresentation";

function normalizeAssistantKey(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/(^-|-$)/g, "");
}

async function fileExists(url: string) {
  try {
    const response = await fetch(url, { method: "HEAD" });
    return response.ok;
  } catch {
    return false;
  }
}

function Header() {
  const [open, setOpen] = useState(false);
  const { copy } = useLang();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/30 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2" aria-label="Tisgrow home">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-navy text-sm font-black text-white">
            T
          </span>
          <span className="text-lg font-bold tracking-tight text-navy">Tisgrow</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {copy.navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>

        <a href="#contact" className="hidden rounded-lg bg-navy px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-ink md:inline-flex">
          {copy.bookDemo}
        </a>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 text-navy md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-100 bg-white px-4 py-4 shadow-soft md:hidden">
          <div className="flex flex-col gap-3">
            {copy.navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link py-2" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary mt-2 justify-center" onClick={() => setOpen(false)}>
              {copy.bookDemo}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl animate-float lg:max-w-none">
      <div className="absolute -inset-5 rounded-2xl bg-aqua/15 blur-3xl" />
      <div className="relative overflow-hidden rounded-lg border border-white/70 bg-white/75 p-4 shadow-glow backdrop-blur-xl sm:p-5">
        <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <p className="text-sm font-bold text-navy">AI consultant online</p>
            <p className="text-xs text-slate-500">Website chat + messengers</p>
          </div>
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
            Active
          </span>
        </div>

        <div className="space-y-3">
          {visualMessages.map((message, index) => (
            <div
              key={`${message.from}-${message.text}`}
              className={`flex ${message.from === "AI Consultant" ? "justify-end" : "justify-start"}`}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div
                className={`max-w-[82%] rounded-lg px-4 py-3 text-sm shadow-sm ${
                  message.from === "AI Consultant"
                    ? "bg-navy text-white"
                    : "border border-slate-100 bg-white text-slate-700"
                } animate-rise`}
              >
                <p className="mb-1 text-[11px] font-bold uppercase tracking-wide opacity-70">
                  {message.from}
                </p>
                <p>{message.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-3">
          {heroStats.map((stat) => (
            <div key={stat.label} className="min-w-0 rounded-lg bg-skysoft p-3 text-center">
              <p className="text-lg font-black text-navy">{stat.value}</p>
              <p className="text-[10px] leading-snug break-words whitespace-normal font-medium text-slate-500 sm:text-[11px] sm:leading-normal">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Hero() {
  const { copy } = useLang();

  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(20,211,197,0.18),transparent_30%),linear-gradient(180deg,#ffffff_0%,#eefaff_60%,#ffffff_100%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-28">
        <div className="max-w-3xl">
          <span className="eyebrow">{copy.hero.eyebrow}</span>
          <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-navy sm:text-5xl lg:text-6xl">
            {copy.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            {copy.hero.text}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn-primary">
              {copy.hero.primary} <ArrowRight size={18} />
            </a>
            <a href="#assistants" className="btn-secondary">
              {copy.hero.secondary} <ChevronRight size={18} />
            </a>
          </div>
          <p className="mt-6 max-w-2xl text-sm font-medium leading-6 text-slate-500">
            {copy.text}
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
            {copy.cta?.title ?? copy.text}
          </p>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-4 text-3xl font-black tracking-tight text-navy sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{text}</p>}
    </div>
  );
}

function Industries() {
  const { copy } = useLang();
  return (
    <section id="industries" className="section">
      <SectionHeader
        eyebrow={copy.sections.examples.eyebrow}
        title={copy.sections.examples.title}
        text={copy.sections.examples.text}
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {copy.industries?.map((industry, idx) => {
          const Icon = industries[idx]?.icon ?? industries[0].icon;
          return (
            <article key={industry.title} className="soft-card group">
              <div className="mb-5 grid h-11 w-11 place-items-center rounded-lg bg-skysoft text-navy transition group-hover:bg-aqua group-hover:text-white">
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-bold text-navy">{industry.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{industry.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Capabilities() {
  const { copy } = useLang();
  return (
    <section className="section">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <span className="eyebrow">{copy.sections.videos.eyebrow}</span>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-navy sm:text-4xl">
            {copy.sections.videos.title}
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600">{copy.sections.videos.text}</p>
          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {channelIcons.map((channel) => {
              const Icon = channel.icon;
              return (
                <div key={channel.label} className="rounded-lg border border-slate-100 bg-white p-3 text-center shadow-sm">
                  <Icon className="mx-auto text-aqua" size={20} />
                  <p className="mt-2 text-xs font-bold text-slate-600">{channel.label}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {capabilities.map((item) => (
            <div key={item} className="flex gap-3 rounded-lg border border-slate-100 bg-white p-4 shadow-sm">
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-aqua text-white">
                <Check size={15} strokeWidth={3} />
              </span>
              <p className="text-sm font-semibold leading-6 text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Assistants() {
  const { language, setLanguage, copy } = useLang();
  const [portalCard, setPortalCard] = useState<string | null>(null);
  const [activeDemoAssistant, setActiveDemoAssistant] = useState<string | null>(null);
  const [demoSplashAssistant, setDemoSplashAssistant] = useState<string | null>(null);
  const [demoLoading, setDemoLoading] = useState<DemoMediaType | null>(null);
  const [demoNotification, setDemoNotification] = useState<string | null>(null);

  function triggerPortal(name: string) {
    setPortalCard(name);
    window.setTimeout(() => setPortalCard(null), 620);
  }

  function closeDemoMenu() {
    setActiveDemoAssistant(null);
    setDemoNotification(null);
    setDemoSplashAssistant(null);
    setDemoLoading(null);
  }

  function openDemoMenu(assistantName: string) {
    setDemoNotification(null);
    setDemoLoading(null);
    setDemoSplashAssistant(assistantName);
    setTimeout(() => {
      setDemoSplashAssistant(null);
      setActiveDemoAssistant(assistantName);
    }, 180);
  }

  function getAssistantKey(assistant: (typeof assistants)[number]) {
    return assistant.key ?? normalizeAssistantKey(assistant.name);
  }

  async function resolveDemoMediaUrl(assistantKey: string, type: DemoMediaType) {
    const buildUrl = (key: string, locale: string) => {
      const base = `/media/demos/${key}`;
      switch (type) {
        case "demoVideo":
          return `${base}-demo-${locale}.mp4`;
        case "pdfPresentation":
          return `${base}-presentation-${locale}.pdf`;
        case "screenshots":
          return `${base}-chat-${locale}-01.jpg`;
        case "videoPresentation":
          return `${base}-video-presentation-${locale}.mp4`;
      }
    };

    const priorities = [language, "en", "uk"].filter((value, index, array) => array.indexOf(value) === index);
    for (const locale of priorities) {
      const url = buildUrl(assistantKey, locale);
      if (await fileExists(url)) {
        return url;
      }
    }

    return null;
  }

  async function handleDemoAction(assistant: (typeof assistants)[number], type: DemoMediaType) {
    const assistantKey = getAssistantKey(assistant);
    setDemoLoading(type);
    const url = await resolveDemoMediaUrl(assistantKey, type);
    setDemoLoading(null);

    if (url) {
      window.open(url, "_blank");
      return;
    }

    setDemoNotification(copy.demoMenu.unavailable);
  }

  return (
    <section id="assistants" className="ai-gallery-section">
      <div className="portal-halo portal-halo-one" />
      <div className="portal-halo portal-halo-two" />
      <div className="particle-field" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, index) => (
          <span key={index} style={{ "--i": index } as CSSProperties} />
        ))}
      </div>

      <div className="section relative z-10">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="eyebrow border-aqua/40 bg-white/10 text-white">{copy.eyebrow}</span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
              {copy.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-cyan-50/75 sm:text-lg">{copy.text}</p>
          </div>

          <label className="language-selector">
            <span className="flex items-center gap-2 text-xs font-black uppercase tracking-wide text-cyan-50/70">
              <Globe2 size={16} /> {copy.selectorLabel}
            </span>
            <select
              value={language}
              onChange={(event) => setLanguage(event.target.value as LanguageCode)}
              className="language-select"
              aria-label={copy.selectorLabel}
            >
              {languageOptions.map((option) => (
                <option key={option.code} value={option.code}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="portal-navigation" aria-hidden="true">
          <div className="wormhole-ring" />
          <div className="dna-spiral">
            <Dna size={34} />
          </div>
          <span>PORTAL NAVIGATION</span>
        </div>

        <div className="ai-card-grid">
        {assistants.map((assistant) => {
          const key = getAssistantKey(assistant);
          const localizedName = assistant.i18n?.name ? ((assistant.i18n.name as any)[language] ?? (assistant.i18n.name as any).en ?? assistant.name) : assistant.name;
          const localizedCategory = assistant.i18n?.category ? ((assistant.i18n.category as any)[language] ?? (assistant.i18n.category as any).en ?? (assistant as any).category) : (assistant as any).category;
          const localizedDescription = assistant.i18n?.description ? ((assistant.i18n.description as any)[language] ?? (assistant.i18n.description as any).en ?? (assistant as any).description) : (assistant as any).description;
          return (
          <article
            key={key}
            className={`ai-assistant-card ${portalCard === key ? "is-dissolving" : ""}`}
          >
            <div className="animated-border" />
            <div className="card-orbit" />
            <div className={`assistant-media bg-gradient-to-br ${assistant.accent}`}>
              {assistant.image && (
                <img
                  src={assistant.image}
                  alt={`${localizedName} AI assistant`}
                  className={`assistant-image ${assistant.imageClass || "assistant-image-default"}`}
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              )}
              <div className="hologram-grid" />
              <div className="assistant-media-glow" />
              <div className="assistant-image-title">
                <span>{localizedName}</span>
              </div>
            </div>

            <div className="relative z-10 mt-5 flex flex-1 flex-col">
              <p className="assistant-category">{localizedCategory}</p>
              <h3 className="mt-2 break-words text-[1.45rem] font-black leading-tight tracking-tight text-white sm:text-2xl">
                {localizedName}
              </h3>
              <p className="assistant-description">{localizedDescription}</p>
            </div>

            <div className="relative z-10 mt-6 grid gap-2">
              <button
                type="button"
                data-sound="portal-open"
                className="portal-button"
                onClick={() => openDemoMenu(key)}
              >
                <span className={`pixel-smoke ${demoSplashAssistant === key ? "demo-splash-active" : ""}`} />
                {copy.button} <ArrowRight size={16} />
              </button>
              <a
                href="#contact"
                data-sound="soft-confirm"
                className="portal-button portal-button-secondary"
                onClick={() => triggerPortal(key)}
              >
                <span className="pixel-smoke" />
                {copy.orderSimilarAssistant}
              </a>
            </div>
            {activeDemoAssistant === key && (
              <div className="assistant-demo-menu">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <p className="text-sm font-black uppercase tracking-wide text-cyan-100">
                    {copy.demoMenu.title}
                  </p>
                  <button
                    type="button"
                    className="text-xs font-semibold uppercase tracking-wide text-cyan-100 transition hover:text-white"
                    onClick={closeDemoMenu}
                  >
                    {copy.demoMenu.close}
                  </button>
                </div>
                <div className="grid gap-2 sm:grid-cols-2">
                  {[
                    { type: "demoVideo" as DemoMediaType, label: copy.demoMenu.demoVideo },
                    { type: "pdfPresentation" as DemoMediaType, label: copy.demoMenu.pdfPresentation },
                    { type: "screenshots" as DemoMediaType, label: copy.demoMenu.screenshots },
                    { type: "videoPresentation" as DemoMediaType, label: copy.demoMenu.videoPresentation },
                  ].map((item) => (
                    <button
                      key={item.type}
                      type="button"
                      className="assistant-demo-option"
                      disabled={demoLoading === item.type}
                      onClick={() => handleDemoAction(assistant, item.type)}
                    >
                      {demoLoading === item.type ? "Loading..." : item.label}
                    </button>
                  ))}
                </div>
                {demoNotification && (
                  <p className="mt-3 text-sm text-rose-100">{demoNotification}</p>
                )}
              </div>
            )}
          </article>
        );
        })}
        </div>
      </div>
    </section>
  );
}

function Videos() {
  const { copy } = useLang();
  return (
    <section id="videos" className="section">
      <SectionHeader
        eyebrow={copy.sections.videos.eyebrow}
        title={copy.sections.videos.title}
        text={copy.sections.videos.text}
      />
      <div className="grid gap-4 lg:grid-cols-3">
        {videos.map((video) => (
          <div key={video} className="group overflow-hidden rounded-lg border border-white/70 bg-white shadow-soft">
            <div className="relative aspect-video bg-[linear-gradient(135deg,#07172f,#0f88a5_55%,#14d3c5)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.28),transparent_24%)]" />
              <button className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-navy shadow-glow transition group-hover:scale-105" aria-label={`Play ${video}`}>
                <Play size={22} fill="currentColor" />
              </button>
            </div>
            <div className="p-5">
              <p className="text-sm font-bold text-navy">{video}</p>
              <p className="mt-2 text-sm leading-6 text-slate-500">Placeholder video block. Replace with a real embed or demo file.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Portfolio() {
  const { copy } = useLang();
  return (
    <section className="section bg-navy text-white">
      <SectionHeader
        eyebrow={copy.sections.examples.eyebrow}
        title={copy.sections.examples.title}
        text={copy.sections.examples.text}
      />
      <div className="grid gap-4 md:grid-cols-2">
        {examples.map((example, index) => (
          <article key={example.title} className="rounded-lg border border-white/10 bg-white/8 p-6 backdrop-blur">
            <p className="mb-5 text-sm font-black text-aqua">0{index + 1}</p>
            <h3 className="text-xl font-black">{example.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{example.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  const { copy } = useLang();
  return (
    <section id="pricing" className="section">
      <SectionHeader
        eyebrow={copy.sections.pricing.eyebrow}
        title={copy.sections.pricing.title}
        text={copy.sections.pricing.text}
      />
      <div className="grid gap-4 lg:grid-cols-3">
        {pricing.map((plan) => (
          <article key={plan.name} className="soft-card">
            <h3 className="text-xl font-black text-navy">{plan.name}</h3>
            <p className="mt-4 text-3xl font-black text-navy">{plan.price}</p>
            <p className="mt-4 text-sm leading-6 text-slate-600">{plan.details}</p>
          </article>
        ))}
      </div>
      <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-6 text-slate-500">
        Platform subscriptions such as automation tools or messengers may be paid separately by the client.
      </p>
    </section>
  );
}

function CTA() {
  const { copy } = useLang();
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-lg bg-[linear-gradient(135deg,#07172f,#0f88a5)] px-6 py-12 text-center text-white shadow-glow sm:px-10">
        <h2 className="text-3xl font-black tracking-tight sm:text-4xl">{copy.cta.title}</h2>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          {ctaActions.map((action, idx) => {
            const Icon = action.icon;
            const label = [copy.contactForm.telegram, copy.contactForm.whatsapp, copy.contactForm.instagram, copy.contactForm.email][idx] ?? action.label;
            return (
              <a key={action.href} href={action.href} className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-navy transition hover:-translate-y-0.5 hover:bg-skysoft">
                <Icon size={18} /> {label}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const emailAddress = contactLinks.email.replace(/^mailto:/, "");
    const body = [
      "Hello Tisgrow,",
      "",
      `Name: ${data.get("name") || ""}`,
      `Business type: ${data.get("business") || ""}`,
      `Messenger/contact: ${data.get("contact") || ""}`,
      `Message: ${data.get("message") || ""}`,
    ].join("\n");

    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(
      "Tisgrow demo request",
    )}&body=${encodeURIComponent(body)}`;
  }

  const { copy } = useLang();
  return (
    <section id="contact" className="section">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <span className="eyebrow">{copy.sections.contact.eyebrow}</span>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-navy sm:text-4xl">{copy.sections.contact.title}</h2>
          <p className="mt-5 text-base leading-7 text-slate-600">{copy.sections.contact.text}</p>
          <div className="mt-7 grid gap-3 text-sm font-semibold text-slate-600">
            <a href={contactLinks.telegram} className="contact-link"><Send size={18} /> {copy.contactForm.telegram}</a>
            <a href={contactLinks.whatsapp} className="contact-link"><Send size={18} /> {copy.contactForm.whatsapp}</a>
            <a href={contactLinks.instagram} className="contact-link"><Send size={18} /> {copy.contactForm.instagram}</a>
            <a href={contactLinks.email} className="contact-link"><Mail size={18} /> {copy.contactForm.email}</a>
          </div>
        </div>

        <form className="soft-card" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="field-label">
              {copy.contactForm.nameLabel}
              <input className="field" name="name" placeholder={copy.contactForm.nameLabel} />
            </label>
            <label className="field-label">
              {copy.contactForm.businessLabel}
              <input className="field" name="business" placeholder={copy.contactForm.businessLabel} />
            </label>
          </div>
          <label className="field-label mt-4">
            {copy.contactForm.contactLabel}
            <input className="field" name="contact" placeholder={copy.contactForm.contactLabel} />
          </label>
          <label className="field-label mt-4">
            {copy.contactForm.messageLabel}
            <textarea className="field min-h-36 resize-y" name="message" placeholder={copy.contactForm.messageLabel} />
          </label>
          <button type="submit" className="btn-primary mt-5 w-full justify-center">
            {copy.contactForm.sendButton} <ArrowRight size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  const { copy } = useLang();
  return (
    <footer className="border-t border-slate-100 bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-black text-navy">{copy.footer.brandTitle}</p>
          <p className="mt-2 text-sm text-slate-500">{copy.footer.brandText}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          {copy.navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function App() {
  const [language, setLanguage] = useState<LanguageCode>("uk");
  const copy = assistantGalleryCopy[language] ?? assistantGalleryCopy.en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, copy }}>
      <Header />
      <main>
        <Hero />
        <Industries />
        <Capabilities />
        <Assistants />
        <Videos />
        <Portfolio />
        <Pricing />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </LanguageContext.Provider>
  );
}
