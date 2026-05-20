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
import { type CSSProperties, type Dispatch, type FormEvent, type ReactNode, type SetStateAction, useEffect, useState, createContext, useContext } from "react";
import { Routes, Route, Navigate, useParams, useNavigate } from "react-router-dom";
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

type DemoMediaModalState = {
  type: Exclude<DemoMediaType, "screenshots">;
  url: string;
  title: string;
};

type DemoGalleryModalState = {
  urls: string[];
  index: number;
  title: string;
};

function localeSuffix(code: LanguageCode) {
  return code === "uk" ? "ua" : code;
}

function buildDemoMediaUrl(assistantKey: string, type: Exclude<DemoMediaType, "screenshots">, locale: string) {
  switch (type) {
    case "demoVideo":
      return `/media/demos/videos/${assistantKey}-demo-${locale}.mp4`;
    case "pdfPresentation":
      return `/media/demos/pdf/${assistantKey}-presentation-${locale}.pdf`;
    case "videoPresentation":
      return `/media/demos/videos/${assistantKey}-video-presentation-${locale}.mp4`;
  }
}

async function resolveDemoMediaUrl(assistantKey: string, type: Exclude<DemoMediaType, "screenshots">, language: LanguageCode) {
  const priorities = ([language, "en", "uk"] as const)
    .map(localeSuffix)
    .filter((value, index, array) => array.indexOf(value) === index);

  for (const locale of priorities) {
    const url = buildDemoMediaUrl(assistantKey, type, locale);
    if (await fileExists(url)) {
      return url;
    }
  }

  return null;
}

async function resolveScreenshotGalleryUrls(assistantKey: string, language: LanguageCode) {
  const priorities = ([language, "en", "uk"] as const)
    .map(localeSuffix)
    .filter((value, index, array) => array.indexOf(value) === index);

  for (const locale of priorities) {
    const gallery: string[] = [];
    for (let index = 1; index <= 16; index += 1) {
      const fileName = `${assistantKey}-chat-${String(index).padStart(2, "0")}-${locale}.jpg`;
      const url = `/media/demos/screenshot/${fileName}`;
      if (await fileExists(url)) {
        gallery.push(url);
      }
    }
    if (gallery.length > 0) {
      return gallery;
    }
  }

  return null;
}

function getAssistantExplicitMediaUrl(assistant: any, type: Exclude<DemoMediaType, "screenshots">, language: LanguageCode) {
  const media = assistant?.media;
  if (!media) return null;

  const explicit = media[type];
  if (!explicit) return null;

  if (typeof explicit === "string") {
    return explicit;
  }

  if (typeof explicit === "object") {
    return explicit[language] ?? explicit.en ?? explicit.uk ?? null;
  }

  return null;
}

function getAssistantExplicitScreenshots(assistant: any) {
  const media = assistant?.media;
  if (!media?.screenshots) return null;
  return Array.isArray(media.screenshots) ? media.screenshots : null;
}

function normalizeAssistantKey(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/(^-|-$)/g, "");
}

function getAssistantRoutePath(assistant: any) {
  return assistant.route ?? assistant.key ?? normalizeAssistantKey(assistant.name);
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

function DemoMediaModal({
  mediaModal,
  galleryModal,
  copy,
  setGalleryModal,
  onClose,
}: {
  mediaModal: DemoMediaModalState | null;
  galleryModal: DemoGalleryModalState | null;
  copy: (typeof assistantGalleryCopy)[LanguageCode & string];
  setGalleryModal: Dispatch<SetStateAction<DemoGalleryModalState | null>>;
  onClose: () => void;
}) {
  const [videoLoading, setVideoLoading] = useState(false);
  const [showVideoFallback, setShowVideoFallback] = useState(false);
  const [mediaError, setMediaError] = useState<string | null>(null);

  useEffect(() => {
    if (!mediaModal) {
      setVideoLoading(false);
      setShowVideoFallback(false);
      setMediaError(null);
      return;
    }

    setVideoLoading(true);
    setShowVideoFallback(false);
    setMediaError(null);
    const timeoutId = window.setTimeout(() => setShowVideoFallback(true), 5000);
    return () => window.clearTimeout(timeoutId);
  }, [mediaModal?.url]);

  function handleLoadedMetadata() {
    setVideoLoading(false);
    setShowVideoFallback(false);
  }

  return (
    <div className="media-modal-overlay" role="dialog" aria-modal="true">
      <div className={`media-modal-card ${galleryModal ? "media-modal-card-gallery" : ""}`}>
        <div className="media-modal-header">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200">
              {galleryModal
                ? copy.demoMenu.screenshots
                : mediaModal?.type === "demoVideo"
                ? copy.demoMenu.demoVideo
                : copy.demoMenu.videoPresentation}
            </p>
            <h3 className="mt-2 text-2xl font-black text-white">{galleryModal?.title ?? mediaModal?.title}</h3>
            {galleryModal && (
              <p className="mt-2 text-sm text-slate-300">
                {galleryModal.index + 1} / {galleryModal.urls.length}
              </p>
            )}
          </div>
          <button type="button" className="media-modal-close" onClick={onClose} aria-label={copy.demoMenu.close}>
            <X size={18} />
          </button>
        </div>

        <div className="media-modal-body">
          {galleryModal ? (
            <img
              src={galleryModal.urls[galleryModal.index]}
              alt={`${galleryModal.title} screenshot ${galleryModal.index + 1}`}
              className="gallery-image"
            />
          ) : mediaError ? (
            <div className="media-error-message">
              <p>{mediaError}</p>
            </div>
          ) : (
            <div className="space-y-4">
              <video
                key={mediaModal?.url}
                src={mediaModal?.url}
                className="media-player"
                controls
                preload="metadata"
                playsInline
                onLoadedMetadata={handleLoadedMetadata}
                onError={() => setMediaError(copy.demoMenu.videoFailedToLoad)}
              />
              {videoLoading && (
                <p className="text-sm text-slate-200">Loading video metadata...</p>
              )}
              {showVideoFallback && mediaModal && (
                <div className="rounded-3xl border border-white/15 bg-white/10 p-4 text-sm text-slate-100">
                  <p className="mb-3 text-sm text-slate-200">{copy.demoMenu.openVideoInNewTab}</p>
                  <a
                    href={mediaModal.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="media-system-button"
                  >
                    {copy.demoMenu.openVideoInNewTab}
                  </a>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="media-modal-footer">
          {galleryModal ? (
            <div className="gallery-controls">
              <button
                type="button"
                className="media-system-button"
                onClick={() => galleryModal.index > 0 && setGalleryModal({ ...galleryModal, index: galleryModal.index - 1 })}
                disabled={galleryModal.index === 0}
              >
                Previous
              </button>
              <button
                type="button"
                className="media-system-button"
                onClick={() =>
                  galleryModal.index < galleryModal.urls.length - 1 &&
                  setGalleryModal({ ...galleryModal, index: galleryModal.index + 1 })
                }
                disabled={galleryModal.index === galleryModal.urls.length - 1}
              >
                Next
              </button>
            </div>
          ) : null}

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={galleryModal ? galleryModal.urls[galleryModal.index] : mediaModal?.url}
              target="_blank"
              rel="noreferrer noopener"
              className="media-system-button"
            >
              {copy.demoMenu.openVideoInNewTab}
            </a>
            <button type="button" className="media-system-button media-system-button-secondary" onClick={onClose}>
              {copy.demoMenu.close}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl animate-float lg:max-w-none">
      <div className="hero-visual-card min-h-[380px] md:min-h-[520px]">
        <picture className="absolute inset-0 block h-full w-full">
          <source srcSet="/media/hero/hero-desktop.webp" media="(min-width: 768px)" />
          <source srcSet="/media/hero/hero-mobile.webp" media="(max-width: 767px)" />
          <img
            src="/media/hero/hero-desktop.webp"
            alt="Premium Tisgrow hero visual"
            className="block h-full w-full object-cover object-center"
            loading="eager"
          />
        </picture>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
      </div>
    </div>
  );
}

type HeroBurst = { id: number; left: number; top: number };

function HeroActionButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [bursts, setBursts] = useState<HeroBurst[]>([]);

  const handlePointerMove = (event: React.PointerEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) / 10;
    const y = (event.clientY - rect.top - rect.height / 2) / 12;
    setOffset({ x, y });
  };

  const handlePointerLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const left = event.clientX - rect.left;
    const top = event.clientY - rect.top;
    const id = Date.now();
    setBursts((current) => [...current, { id, left, top }]);
    window.setTimeout(() => {
      setBursts((current) => current.filter((burst) => burst.id !== id));
    }, 360);
  };

  return (
    <a
      href={href}
      className={`${variant === "primary" ? "btn-primary hero-action-button" : "btn-secondary hero-action-button hero-action-button-secondary"}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
      style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }}
    >
      {children}
      {bursts.map((burst) => (
        <span
          key={burst.id}
          className="hero-button-burst"
          style={{ left: burst.left, top: burst.top }}
        />
      ))}
    </a>
  );
}

function Hero() {
  const { copy } = useLang();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 140);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="home" className={`relative overflow-hidden pt-28 sm:pt-32 ${isScrolled ? "hero-scroll-dark" : ""}`}>
      <div className="hero-background absolute inset-0 -z-20 h-full min-h-[520px] overflow-hidden sm:min-h-[620px] lg:min-h-[680px]">
        <img
          src="/media/hero/hero-desktop.webp"
          alt="Premium Tisgrow hero visual"
          className="absolute inset-0 hidden h-full w-full object-cover object-center md:block"
          loading="eager"
        />
        <img
          src="/media/hero/hero-mobile.webp"
          alt="Premium Tisgrow hero visual"
          className="absolute inset-0 block h-full w-full object-cover object-center md:hidden"
          loading="eager"
        />

        <div className="absolute inset-0 bg-slate-950/10" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-teal-700/10 to-slate-950/40" aria-hidden="true" />

        <div className="hero-animation-layer" aria-hidden="true">
          <div className="hero-holo-glow hidden sm:block" />
          <div className="particle-field" aria-hidden="true">
            {Array.from({ length: 6 }).map((_, index) => (
              <span key={index} style={{ "--i": index } as CSSProperties} />
            ))}
          </div>
          <div className="hero-floating-card hero-card-one hidden sm:block">
            <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-100/80">AI insight</p>
            <p className="mt-3 text-sm font-black text-white">Conversion pulse</p>
            <div className="mt-3 flex items-center justify-between gap-2 rounded-3xl bg-white/10 px-3 py-2 text-[11px] text-slate-200">
              <span>+21.4% uplift</span>
              <span className="rounded-full bg-aqua/20 px-2 py-1 text-[10px] font-bold text-aqua">Live</span>
            </div>
          </div>
          <div className="hero-floating-card hero-card-two hidden sm:block">
            <p className="text-[10px] uppercase tracking-[0.35em] text-slate-200/70">Secure growth</p>
            <h3 className="mt-3 text-sm font-black text-white">Tisgrow Command</h3>
            <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-300">
              <span className="inline-flex h-2 w-2 rounded-full bg-aqua" />
              <span>Realtime orchestration</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(20,211,197,0.18),transparent_30%),linear-gradient(180deg,#ffffff_0%,#eefaff_60%,#ffffff_100%)]" />
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-28">
        <div className="relative z-10 max-w-3xl">
          <span className="eyebrow">{copy.hero.eyebrow}</span>
          <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-navy sm:text-5xl lg:text-6xl">
            {copy.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            {copy.hero.text}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <HeroActionButton href="/request">{copy.requestPage.ctaButtonLabel} <ArrowRight size={18} /></HeroActionButton>
            <HeroActionButton href="#assistants" variant="secondary">
              {copy.hero.secondary} <ChevronRight size={18} />
            </HeroActionButton>
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

function Assistants({ navigateTo }: { navigateTo: (path: string) => void }) {
  const { language, setLanguage, copy } = useLang();
  const [portalCard, setPortalCard] = useState<string | null>(null);
  const [activeDemoAssistant, setActiveDemoAssistant] = useState<string | null>(null);
  const [demoSplashAssistant, setDemoSplashAssistant] = useState<string | null>(null);
  const [demoLoading, setDemoLoading] = useState<DemoMediaType | null>(null);
  const [demoNotification, setDemoNotification] = useState<string | null>(null);
  const [mediaModal, setMediaModal] = useState<{
    type: Exclude<DemoMediaType, "screenshots">;
    url: string;
    title: string;
  } | null>(null);
  const [galleryModal, setGalleryModal] = useState<{ urls: string[]; index: number; title: string } | null>(null);
  const [pdfOpenBlocked, setPdfOpenBlocked] = useState(false);
  const [pendingPdfUrl, setPendingPdfUrl] = useState<string | null>(null);
  const [mediaError, setMediaError] = useState<string | null>(null);
  const [videoLoading, setVideoLoading] = useState(false);
  const [videoFallbackVisible, setVideoFallbackVisible] = useState(false);

  function triggerPortal(name: string) {
    setPortalCard(name);
    window.setTimeout(() => setPortalCard(null), 620);
  }

  function closeDemoMenu() {
    setActiveDemoAssistant(null);
    setDemoNotification(null);
    setDemoSplashAssistant(null);
    setDemoLoading(null);
    closeMediaModal();
  }

  function closeMediaModal() {
    setMediaModal(null);
    setGalleryModal(null);
    setPdfOpenBlocked(false);
    setPendingPdfUrl(null);
    setMediaError(null);
  }

  useEffect(() => {
    if (mediaModal || galleryModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMediaModal();
      }
    }

    if (mediaModal || galleryModal) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [mediaModal, galleryModal]);

  useEffect(() => {
    if (!mediaModal) {
      setVideoLoading(false);
      setVideoFallbackVisible(false);
      return;
    }

    setVideoLoading(true);
    setVideoFallbackVisible(false);
    const timeoutId = window.setTimeout(() => setVideoFallbackVisible(true), 5000);
    return () => window.clearTimeout(timeoutId);
  }, [mediaModal?.url]);

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

  async function handleDemoAction(assistant: (typeof assistants)[number], type: DemoMediaType) {
    const assistantKey = getAssistantKey(assistant);
    const localizedTitle = assistant.i18n?.name
      ? ((assistant.i18n.name as any)[language] ?? (assistant.i18n.name as any).en ?? assistant.name)
      : assistant.name;

    setDemoLoading(type);
    setDemoNotification(null);
    setPdfOpenBlocked(false);
    setPendingPdfUrl(null);
    setMediaError(null);

    let pdfWindow: Window | null = null;
    if (type === "pdfPresentation") {
      pdfWindow = window.open("", "_blank");
    }

    if (type === "screenshots") {
      const explicitScreenshots = getAssistantExplicitScreenshots(assistant);
      const gallery = explicitScreenshots ?? await resolveScreenshotGalleryUrls(assistantKey, language);
      setDemoLoading(null);
      if (gallery) {
        setGalleryModal({ urls: gallery, index: 0, title: localizedTitle });
        return;
      }
      if (pdfWindow) {
        pdfWindow.close();
      }
      setDemoNotification(copy.demoMenu.unavailable);
      return;
    }

    const explicitUrl = getAssistantExplicitMediaUrl(assistant, type, language);
    const url = explicitUrl ?? await resolveDemoMediaUrl(assistantKey, type, language);
    setDemoLoading(null);

    if (!url) {
      if (pdfWindow) {
        pdfWindow.close();
      }
      setDemoNotification(copy.demoMenu.unavailable);
      return;
    }

    if (type === "pdfPresentation") {
      if (pdfWindow) {
        pdfWindow.location.href = url;
      } else {
        setPdfOpenBlocked(true);
        setPendingPdfUrl(url);
      }
      return;
    }

    setMediaModal({ type, url, title: localizedTitle });
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
              <button
                type="button"
                className="portal-button portal-button-secondary"
                onClick={() => navigateTo(`/${getAssistantRoutePath(assistant)}`)}
              >
                {copy.openAssistantPage}
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
                      {demoLoading === item.type ? copy.demoMenu.loading : item.label}
                    </button>
                  ))}
                </div>
                {demoNotification && (
                  <p className="mt-3 text-sm text-rose-100">{demoNotification}</p>
                )}
                {pdfOpenBlocked && pendingPdfUrl && (
                  <div className="mt-3 rounded-3xl border border-white/15 bg-white/10 p-4 text-sm text-slate-100">
                    <p className="mb-3 text-sm text-slate-200">{copy.demoMenu.openPdfInNewTab}</p>
                    <a
                      href={pendingPdfUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="media-system-button"
                    >
                      {copy.demoMenu.openPdfInNewTab}
                    </a>
                  </div>
                )}
              </div>
            )}
          </article>
        );
        })}
        </div>
      </div>

      {(mediaModal || galleryModal) && (
        <div className="media-modal-overlay" role="dialog" aria-modal="true">
          <div className={`media-modal-card ${galleryModal ? "media-modal-card-gallery" : ""}`}>
            <div className="media-modal-header">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200">
                  {galleryModal
                    ? copy.demoMenu.screenshots
                    : mediaModal?.type === "demoVideo"
                    ? copy.demoMenu.demoVideo
                    : copy.demoMenu.videoPresentation}
                </p>
                <h3 className="mt-2 text-2xl font-black text-white">
                  {galleryModal?.title ?? mediaModal?.title}
                </h3>
                {galleryModal && (
                  <p className="mt-2 text-sm text-slate-300">
                    {galleryModal.index + 1} / {galleryModal.urls.length}
                  </p>
                )}
              </div>
              <button type="button" className="media-modal-close" onClick={closeMediaModal} aria-label={copy.demoMenu.close}>
                <X size={18} />
              </button>
            </div>

            <div className="media-modal-body">
              {galleryModal ? (
                <img
                  src={galleryModal.urls[galleryModal.index]}
                  alt={`${galleryModal.title} screenshot ${galleryModal.index + 1}`}
                  className="gallery-image"
                />
              ) : mediaError ? (
                <div className="media-error-message">
                  <p>{mediaError}</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <video
                    key={mediaModal?.url}
                    src={mediaModal?.url}
                    className="media-player"
                    controls
                    preload="metadata"
                    playsInline
                    onLoadedMetadata={() => {
                      setVideoLoading(false);
                      setVideoFallbackVisible(false);
                    }}
                    onError={() => {
                      setVideoLoading(false);
                      setVideoFallbackVisible(false);
                      setMediaError(copy.demoMenu.videoFailedToLoad);
                    }}
                  />
                  {videoLoading && (
                    <p className="text-sm text-slate-200">Loading video metadata...</p>
                  )}
                  {videoFallbackVisible && mediaModal && (
                    <div className="rounded-3xl border border-white/15 bg-white/10 p-4 text-sm text-slate-100">
                      <p className="mb-3 text-sm text-slate-200">{copy.demoMenu.openVideoInNewTab}</p>
                      <a
                        href={mediaModal.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="media-system-button"
                      >
                        {copy.demoMenu.openVideoInNewTab}
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="media-modal-footer">
              {galleryModal ? (
                <div className="gallery-controls">
                  <button
                    type="button"
                    className="media-system-button"
                    onClick={() =>
                      galleryModal.index > 0 && setGalleryModal({ ...galleryModal, index: galleryModal.index - 1 })
                    }
                    disabled={galleryModal.index === 0}
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    className="media-system-button"
                    onClick={() =>
                      galleryModal.index < galleryModal.urls.length - 1 &&
                      setGalleryModal({ ...galleryModal, index: galleryModal.index + 1 })
                    }
                    disabled={galleryModal.index === galleryModal.urls.length - 1}
                  >
                    Next
                  </button>
                </div>
              ) : null}

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={galleryModal ? galleryModal.urls[galleryModal.index] : mediaModal?.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="media-system-button"
                >
                  {copy.demoMenu.openVideoInNewTab}
                </a>
                <button type="button" className="media-system-button media-system-button-secondary" onClick={closeMediaModal}>
                  {copy.demoMenu.close}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function AssistantPage({ assistant, onBack }: { assistant: (typeof assistants)[number]; onBack: () => void }) {
  const { language, copy } = useLang();
  const navigate = useNavigate();
  const [demoLoading, setDemoLoading] = useState<DemoMediaType | null>(null);
  const [demoNotification, setDemoNotification] = useState<string | null>(null);
  const [mediaModal, setMediaModal] = useState<DemoMediaModalState | null>(null);
  const [galleryModal, setGalleryModal] = useState<DemoGalleryModalState | null>(null);
  const [pdfOpenBlocked, setPdfOpenBlocked] = useState(false);
  const [pendingPdfUrl, setPendingPdfUrl] = useState<string | null>(null);
  const [mediaError, setMediaError] = useState<string | null>(null);
  const [videoLoading, setVideoLoading] = useState(false);
  const [videoFallbackVisible, setVideoFallbackVisible] = useState(false);

  function closeMediaModal() {
    setMediaModal(null);
    setGalleryModal(null);
    setPdfOpenBlocked(false);
    setPendingPdfUrl(null);
    setMediaError(null);
    setVideoLoading(false);
    setVideoFallbackVisible(false);
  }

  useEffect(() => {
    if (!mediaModal) {
      setVideoLoading(false);
      setVideoFallbackVisible(false);
      return;
    }

    setVideoLoading(true);
    setVideoFallbackVisible(false);
    const timeoutId = window.setTimeout(() => setVideoFallbackVisible(true), 5000);
    return () => window.clearTimeout(timeoutId);
  }, [mediaModal?.url]);

  function getAssistantKey(assistant: (typeof assistants)[number]) {
    return assistant.key ?? normalizeAssistantKey(assistant.name);
  }

  const localizedName = assistant.i18n?.name
    ? ((assistant.i18n.name as any)[language] ?? (assistant.i18n.name as any).en ?? assistant.name)
    : assistant.name;
  const localizedCategory = assistant.i18n?.category
    ? ((assistant.i18n.category as any)[language] ?? (assistant.i18n.category as any).en ?? "")
    : "";
  const localizedDescription = assistant.i18n?.description
    ? ((assistant.i18n.description as any)[language] ?? (assistant.i18n.description as any).en ?? "")
    : "";

  async function handleDemoAction(assistant: (typeof assistants)[number], type: DemoMediaType) {
    const assistantKey = getAssistantKey(assistant);
    setDemoLoading(type);
    setDemoNotification(null);
    setPdfOpenBlocked(false);
    setPendingPdfUrl(null);
    setMediaError(null);

    if (type === "screenshots") {
      const gallery = await resolveScreenshotGalleryUrls(assistantKey, language);
      setDemoLoading(null);
      if (gallery) {
        setGalleryModal({ urls: gallery, index: 0, title: localizedName });
        return;
      }
      setDemoNotification(copy.demoMenu.unavailable);
      return;
    }

    const url = await resolveDemoMediaUrl(assistantKey, type, language);
    setDemoLoading(null);

    if (!url) {
      setDemoNotification(copy.demoMenu.unavailable);
      return;
    }

    if (type === "pdfPresentation") {
      const opened = window.open(url, "_blank", "noopener,noreferrer");
      if (!opened) {
        setPdfOpenBlocked(true);
        setPendingPdfUrl(url);
      }
      return;
    }

    setMediaModal({ type, url, title: localizedName });
  }

  return (
    <section className="section">
      <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="eyebrow">{localizedCategory}</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-navy sm:text-5xl">
            {localizedName}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            {localizedDescription}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button type="button" className="btn-primary" onClick={() => navigate("/request") }>
            {copy.requestPage.ctaButtonLabel}
          </button>
          <button type="button" className="btn-secondary" onClick={onBack}>
            {copy.backToHome}
          </button>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[2rem] border border-slate-100 bg-white/85 p-0 shadow-soft">
          <img
            src={assistant.image}
            alt={localizedName}
            className="h-full w-full min-h-[20rem] rounded-[2rem] object-cover"
          />
        </div>

        <div className="grid gap-6">
          <div className="soft-card">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-900">{copy.demoMenu.title}</p>
            <div className="mt-5 grid gap-2 sm:grid-cols-2">
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
                  {demoLoading === item.type ? copy.demoMenu.loading : item.label}
                </button>
              ))}
            </div>
            {demoNotification && <p className="mt-4 text-sm text-rose-100">{demoNotification}</p>}
            {pdfOpenBlocked && pendingPdfUrl && (
              <div className="mt-3 rounded-3xl border border-white/15 bg-white/10 p-4 text-sm text-slate-100">
                <p className="mb-3 text-sm text-slate-200">{copy.demoMenu.openPdfInNewTab}</p>
                <a
                  href={pendingPdfUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="media-system-button"
                >
                  {copy.demoMenu.openPdfInNewTab}
                </a>
              </div>
            )}
          </div>

          <div className="soft-card">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-900">{copy.sections.contact.eyebrow}</p>
            <h2 className="mt-3 text-2xl font-black text-navy">{copy.sections.contact.title}</h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">{copy.sections.contact.text}</p>
            <div className="mt-6 grid gap-3">
              <a href={contactLinks.telegram} className="contact-link"><Send size={18} /> {copy.contactForm.telegram}</a>
              <a href={contactLinks.whatsapp} className="contact-link"><Send size={18} /> {copy.contactForm.whatsapp}</a>
              <a href={contactLinks.instagram} className="contact-link"><Send size={18} /> {copy.contactForm.instagram}</a>
              <a href={contactLinks.email} className="contact-link"><Mail size={18} /> {copy.contactForm.email}</a>
            </div>
          </div>
        </div>
      </div>

      {(mediaModal || galleryModal) && (
        <div className="media-modal-overlay" role="dialog" aria-modal="true">
          <div className={`media-modal-card ${galleryModal ? "media-modal-card-gallery" : ""}`}>
            <div className="media-modal-header">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200">
                  {galleryModal
                    ? copy.demoMenu.screenshots
                    : mediaModal?.type === "demoVideo"
                    ? copy.demoMenu.demoVideo
                    : copy.demoMenu.videoPresentation}
                </p>
                <h3 className="mt-2 text-2xl font-black text-white">{galleryModal?.title ?? mediaModal?.title}</h3>
                {galleryModal && (
                  <p className="mt-2 text-sm text-slate-300">
                    {galleryModal.index + 1} / {galleryModal.urls.length}
                  </p>
                )}
              </div>
              <button type="button" className="media-modal-close" onClick={closeMediaModal} aria-label={copy.demoMenu.close}>
                <X size={18} />
              </button>
            </div>

            <div className="media-modal-body">
              {galleryModal ? (
                <img
                  src={galleryModal.urls[galleryModal.index]}
                  alt={`${galleryModal.title} screenshot ${galleryModal.index + 1}`}
                  className="gallery-image"
                />
              ) : mediaError ? (
                <div className="media-error-message">
                  <p>{mediaError}</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <video
                    key={mediaModal?.url}
                    src={mediaModal?.url}
                    className="media-player"
                    controls
                    preload="metadata"
                    playsInline
                    onLoadedMetadata={() => {
                      setVideoLoading(false);
                      setVideoFallbackVisible(false);
                      setMediaError(null);
                    }}
                    onError={() => {
                      setVideoLoading(false);
                      setVideoFallbackVisible(false);
                      setMediaError(copy.demoMenu.videoFailedToLoad);
                    }}
                  />
                  {videoLoading && (
                    <p className="text-sm text-slate-200">Loading video metadata...</p>
                  )}
                  {videoFallbackVisible && mediaModal && (
                    <div className="rounded-3xl border border-white/15 bg-white/10 p-4 text-sm text-slate-100">
                      <p className="mb-3 text-sm text-slate-200">{copy.demoMenu.openVideoInNewTab}</p>
                      <a
                        href={mediaModal.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="media-system-button"
                      >
                        {copy.demoMenu.openVideoInNewTab}
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="media-modal-footer">
              {galleryModal ? (
                <div className="gallery-controls">
                  <button
                    type="button"
                    className="media-system-button"
                    onClick={() => galleryModal.index > 0 && setGalleryModal({ ...galleryModal, index: galleryModal.index - 1 })}
                    disabled={galleryModal.index === 0}
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    className="media-system-button"
                    onClick={() =>
                      galleryModal.index < galleryModal.urls.length - 1 &&
                      setGalleryModal({ ...galleryModal, index: galleryModal.index + 1 })
                    }
                    disabled={galleryModal.index === galleryModal.urls.length - 1}
                  >
                    Next
                  </button>
                </div>
              ) : null}

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={galleryModal ? galleryModal.urls[galleryModal.index] : mediaModal?.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="media-system-button"
                >
                  {copy.demoMenu.openVideoInNewTab}
                </a>
                <button type="button" className="media-system-button media-system-button-secondary" onClick={closeMediaModal}>
                  {copy.demoMenu.close}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
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

function RequestPage() {
  const { copy } = useLang();
  const [selectedChannels, setSelectedChannels] = useState<string[]>([]);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (formStatus !== "success") {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => setFormStatus("idle"), 4800);
    return () => window.clearTimeout(timeoutId);
  }, [formStatus]);

  function handleToggleChannel(channel: string) {
    setSelectedChannels((current) =>
      current.includes(channel) ? current.filter((item) => item !== channel) : [...current, channel],
    );
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const business = String(data.get("business") || "").trim();
    const contact = String(data.get("contact") || "").trim();
    const automate = String(data.get("automate") || "").trim();
    const details = String(data.get("details") || "").trim();

    if (!name || !contact) {
      setFormStatus("error");
      return;
    }

    setIsSubmitting(true);
    setFormStatus("success");

    const emailAddress = contactLinks.email.replace(/^mailto:/, "");
    const body = [
      "Привіт Tisgrow,",
      "",
      `Ім'я: ${name}`,
      `Сфера бізнесу: ${business || "не вказано"}`,
      `Де хочете AI-консультанта: ${selectedChannels.length ? selectedChannels.join(", ") : "не зазначено"}`,
      `Що потрібно автоматизувати: ${automate || "не вказано"}`,
      `Контакт для зв'язку: ${contact}`,
      `Додатково: ${details || "немає"}`,
    ].join("\n");

    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(
      "Запит на AI-консультанта Tisgrow",
    )}&body=${encodeURIComponent(body)}`;
  }

  const channelOptions = ["Telegram", "WhatsApp", "Instagram", "TikTok", "Сайт", "X (Twitter)"];

  return (
    <section id="contact" className="section bg-slate-950/5">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-6">
            <span className="eyebrow">Форма заявки</span>
            <h2 className="text-3xl font-black tracking-tight text-navy sm:text-4xl">Форма заявки на AI-консультанта Tisgrow</h2>
            <p className="max-w-2xl text-base leading-7 text-slate-600">
              Налаштуйте свій AI-проєкт швидко: опишіть бізнес, бажані канали та завдання — форма наразі відкриває email, а згодом підключимо API.
            </p>
            <div className="rounded-[2rem] border border-white/15 bg-white/80 p-6 shadow-soft backdrop-blur-xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-cyan-700">Що ви отримаєте</p>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                <li>• Підготовлену заявку на AI-консультанта</li>
                <li>• Сучасний режим glassmorphism для бізнес-контакту</li>
                <li>• Підготовку до майбутнього бекенду/API</li>
              </ul>
            </div>
          </div>

          <form className="request-card" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="field-label">
                Ваше ім’я
                <input className="field request-input" name="name" placeholder="Ваше ім’я" />
              </label>
              <label className="field-label">
                Сфера бізнесу
                <input className="field request-input" name="business" placeholder="Сфера бізнесу" />
              </label>
            </div>

            <div className="mt-5">
              <p className="mb-3 text-sm font-bold text-navy">Де ви хочете AI-консультанта?</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {channelOptions.map((option) => (
                  <label key={option} className="checkbox-field">
                    <input
                      type="checkbox"
                      className="checkbox-input"
                      name="channels"
                      value={option}
                      checked={selectedChannels.includes(option)}
                      onChange={() => handleToggleChannel(option)}
                    />
                    <span className="checkbox-custom" aria-hidden="true" />
                    <span className="text-sm font-semibold text-slate-900">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <label className="field-label mt-5">
              Що потрібно автоматизувати?
              <textarea className="field request-textarea" name="automate" placeholder="Що потрібно автоматизувати?" />
            </label>

            <label className="field-label mt-5">
              Ваш контакт для зв’язку
              <input className="field request-input" name="contact" placeholder="Ваш контакт для зв’язку" />
            </label>

            <label className="field-label mt-5">
              Додатково
              <textarea className="field request-textarea" name="details" placeholder="Додатково" />
            </label>

            <button type="submit" disabled={isSubmitting} className="btn-primary mt-6 w-full justify-center">
              {copy.contactForm.sendButton} <ArrowRight size={18} />
            </button>

            <div className="mt-5 space-y-3">
              {formStatus === "success" && (
                <div className="toast-card border-cyan-200/70 bg-cyan-50/90 text-cyan-950" role="status" aria-live="polite">
                  Запит готовий. Відкривається ваш поштовий клієнт...
                </div>
              )}
              {formStatus === "error" && (
                <div className="toast-card border-rose-200/70 bg-rose-50/90 text-rose-900" role="alert">
                  Будь ласка, заповніть ім’я та контакт для відправки заявки.
                </div>
              )}
            </div>
          </form>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <a href="https://tisgrow-website.vercel.app" className="community-card">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-700">Сайт</p>
            <p className="mt-2 text-base font-black text-navy">tisgrow-website.vercel.app</p>
          </a>
          <a href="https://t.me/ai_ilua" className="community-card">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-700">Telegram</p>
            <p className="mt-2 text-base font-black text-navy">@ai_ilua</p>
          </a>
          <a href="https://x.com/Ilyaciberarch" className="community-card">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-700">X (Twitter)</p>
            <p className="mt-2 text-base font-black text-navy">@Ilyaciberarch</p>
          </a>
          <a href="https://tiktok.com/@ilyazhcreator" className="community-card">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-700">TikTok</p>
            <p className="mt-2 text-base font-black text-navy">@ilyazhcreator</p>
          </a>
        </div>
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

function HomePage({ navigateTo }: { navigateTo: (path: string) => void }) {
  const { language, copy } = useLang();

  useEffect(() => {
    document.title = "Tisgrow AI Assistants";
  }, [language]);

  return (
    <>
      <Hero />
      <Industries />
      <Capabilities />
      <Assistants navigateTo={navigateTo} />
      <Videos />
      <Portfolio />
      <Pricing />
      <CTA />
      <RequestPage />
    </>
  );
}

function AssistantRouteWrapper() {
  const { assistantKey } = useParams<{ assistantKey: string }>();
  const navigate = useNavigate();
  const assistant = assistantKey ? assistants.find((assistant) => getAssistantRoutePath(assistant) === assistantKey) : null;

  if (!assistant) {
    return <Navigate to="/" replace />;
  }

  return <AssistantPage assistant={assistant} onBack={() => navigate("/")} />;
}

export function App() {
  const [language, setLanguage] = useState<LanguageCode>("uk");
  const copy = assistantGalleryCopy[language] ?? assistantGalleryCopy.en ?? assistantGalleryCopy.uk;

  const navigate = useNavigate();

  return (
    <LanguageContext.Provider value={{ language, setLanguage, copy }}>
      <Header />
      <main className="page-transition">
        <Routes>
          <Route path="/" element={<HomePage navigateTo={(path) => { navigate(path); window.scrollTo({ top: 0, behavior: "smooth" }); }} />} />
          <Route path="/request" element={<RequestPage />} />
          <Route path="/:assistantKey" element={<AssistantRouteWrapper />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </LanguageContext.Provider>
  );
}
