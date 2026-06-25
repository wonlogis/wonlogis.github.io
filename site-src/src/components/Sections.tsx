import logoImage from '../assets/logos/won-logis-logo-transparent.webp';
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import {
  aboutSectionContent,
  aboutMetrics,
  brandContent,
  commonLabels,
  contactDetails,
  ctaLink,
  featureHighlights,
  navigationItems,
  partnerLogos,
  partnersSectionContent,
  sections,
  serviceCards,
  servicesSectionContent,
  siteMeta,
  socialLinks,
  heroSectionContent,
} from '../content/siteContent';

type HeaderProps = {
  activeSection: string;
  menuOpen: boolean;
  onMenuToggle: () => void;
  onNavigate: () => void;
};

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
  inverse?: boolean;
};

function SectionIntro({ eyebrow, title, description, align = 'center', inverse = false }: SectionIntroProps) {
  const alignmentClass = align === 'left' ? 'items-start text-left' : 'items-center text-center';
  const titleClass = inverse ? 'text-white' : 'text-ink';
  const bodyClass = inverse ? 'text-slate-300' : 'text-slate-500';

  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignmentClass}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold">{eyebrow}</p>
      <div className="space-y-3">
        <h2 className={`text-[2rem] font-semibold tracking-tight sm:text-[2.55rem] ${titleClass}`}>{title}</h2>
        {description ? <p className={`text-sm leading-7 sm:text-[1rem] ${bodyClass}`}>{description}</p> : null}
      </div>
    </div>
  );
}

function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <div className={`reveal ${className}`} style={{ '--reveal-delay': `${delay}ms` } as CSSProperties} data-reveal="">
      {children}
    </div>
  );
}

function MetricValue({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState(() => value.replace(/[0-9]/g, '0'));
  const metricRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const metricElement = metricRef.current;

    if (!metricElement) {
      return;
    }

    const numericValue = Number.parseFloat(value.replace(/[^0-9.]/g, ''));

    if (Number.isNaN(numericValue)) {
      setDisplayValue(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (!entry?.isIntersecting) {
          return;
        }

        observer.disconnect();

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          setDisplayValue(value);
          return;
        }

        const hasDecimal = value.includes('.');
        const prefix = value.match(/^[^0-9]+/)?.[0] ?? '';
        const suffix = value.match(/[^0-9.]+$/)?.[0] ?? '';
        const duration = 1400;
        const startTime = window.performance.now();

        const animate = (currentTime: number) => {
          const progress = Math.min((currentTime - startTime) / duration, 1);
          const easedProgress = 1 - Math.pow(1 - progress, 3);
          const nextValue = numericValue * easedProgress;
          const formattedValue = hasDecimal ? nextValue.toFixed(1) : Math.round(nextValue).toString();

          setDisplayValue(`${prefix}${formattedValue}${suffix}`);

          if (progress < 1) {
            window.requestAnimationFrame(animate);
          } else {
            setDisplayValue(value);
          }
        };

        window.requestAnimationFrame(animate);
      },
      {
        threshold: 0.55,
      },
    );

    observer.observe(metricElement);

    return () => observer.disconnect();
  }, [value]);

  return (
    <p ref={metricRef} className="text-[2.6rem] font-semibold leading-none text-[#f4d38e]">
      {displayValue}
    </p>
  );
}

function BrandMark({ footer = false }: { footer?: boolean }) {
  return (
    <a
      className={`inline-flex items-center ${footer ? 'justify-start' : 'justify-center'}`}
      href="#company"
      aria-label={brandContent.homeAriaLabel}
    >
      <span className={`inline-flex items-center ${footer ? 'w-[182px]' : 'w-[154px]'}`}>
        <img src={logoImage} alt={brandContent.logoAlt} className="h-auto w-full object-contain" />
      </span>
    </a>
  );
}

function HeroBrand() {
  return (
    <img
      src={logoImage}
      alt={brandContent.logoAlt}
      className="h-auto w-[315px] object-contain sm:w-[410px] lg:w-[470px]"
    />
  );
}

function PartnerLogoMark({
  name,
  icon,
  wordmarkLines,
  textClassName,
  wordmarkClassName,
}: {
  name: string;
  textClassName: string;
  icon?: {
    title: string;
    path: string;
    hex: string;
  };
  wordmarkLines?: string[];
  wordmarkClassName?: string;
}) {
  return (
    <div
      className="partner-logo-mark flex h-[72px] min-w-[180px] items-center justify-center px-2"
      aria-label={name}
      title={name}
    >
      {icon ? (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-8 w-auto opacity-90 transition duration-500 sm:h-9"
          style={{ fill: icon.hex }}
        >
          <path d={icon.path} />
        </svg>
      ) : (
        <div className={`text-center opacity-90 transition duration-500 ${textClassName}`}>
          {wordmarkLines?.map((line) => (
            <div key={line} className={wordmarkClassName}>
              {line}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header({ activeSection, menuOpen, onMenuToggle, onNavigate }: HeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[rgba(4,14,30,0.88)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-container items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <BrandMark />
        <nav className="hidden items-center gap-9 xl:flex">
          {navigationItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`group relative pb-2 text-sm transition-colors ${
                activeSection === item.sectionId ? 'text-[#f4d38e]' : 'text-white/75 hover:text-white'
              }`}
            >
              {item.label}
              <span
                aria-hidden="true"
                className={`absolute inset-x-0 bottom-0 h-px origin-left bg-[#f4d38e] transition duration-300 ${
                  activeSection === item.sectionId
                    ? 'scale-x-100 opacity-100'
                    : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-70'
                }`}
              />
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-4 xl:flex">
          <a
            href={ctaLink.href}
            target={ctaLink.target}
            rel={ctaLink.rel}
            className="group relative overflow-hidden border border-gold/60 px-7 py-[0.9rem] text-sm font-semibold text-[#f4d38e] transition duration-300 hover:-translate-y-0.5 hover:border-gold hover:shadow-[0_12px_30px_rgba(244,211,142,0.16)]"
          >
            <span className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-white/20 opacity-0 blur-md transition-opacity group-hover:opacity-100 group-hover:animate-shine" />
            <span className="relative z-10">
              {ctaLink.label}
              <span className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </a>
        </div>
        <button
          type="button"
          aria-expanded={menuOpen}
          aria-label={commonLabels.mobileMenuAriaLabel}
          className="grid h-11 w-11 place-items-center rounded-sm border border-white/15 text-white/80 transition hover:border-white/35 hover:text-white xl:hidden"
          onClick={onMenuToggle}
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span className={`h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? 'opacity-0' : ''}`} />
            <span
              className={`h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </div>
        </button>
      </div>

      <div
        className={`mx-auto max-w-container overflow-hidden border-x border-b border-white/10 bg-[rgba(4,14,30,0.96)] px-6 transition-all duration-300 xl:hidden ${
          menuOpen ? 'max-h-[420px] py-6 opacity-100' : 'max-h-0 py-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-1">
          {navigationItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`rounded-2xl px-4 py-3 text-base ${
                activeSection === item.sectionId ? 'bg-white/10 text-[#f4d38e]' : 'text-white/80'
              }`}
              onClick={onNavigate}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={ctaLink.href}
          target={ctaLink.target}
          rel={ctaLink.rel}
          className="mt-5 inline-flex justify-center rounded-full border border-gold/60 px-5 py-3 text-sm font-semibold text-[#f4d38e]"
          onClick={onNavigate}
        >
          {ctaLink.label}
        </a>
      </div>
    </header>
  );
}

export function HeroSection() {
  return (
    <section
      id="company"
      className="hero-section relative overflow-hidden bg-[linear-gradient(180deg,_#06152d_0%,_#081a37_100%)] pt-[92px] text-white"
    >
      <div className="relative mx-auto max-w-[1920px]">
        <img
          src={sections.heroImage}
          alt={heroSectionContent.imageAlt}
          className="hero-image h-[640px] w-full object-cover object-center md:h-[735px] xl:h-[785px]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(6,21,45,0.93)_0%,_rgba(6,21,45,0.82)_28%,_rgba(6,21,45,0.42)_52%,_rgba(6,21,45,0.08)_100%)]" />
        <div className="hero-glow pointer-events-none absolute inset-0 opacity-90" />
        <div className="absolute inset-x-0 top-0 mx-auto flex h-full max-w-container items-center px-4 sm:px-6 lg:px-8">
          <Reveal className="relative z-10 max-w-[560px] pt-10">
            <div className="hero-copy space-y-8">
              <HeroBrand />
              <div className="space-y-5">
                <h1 className="sr-only">{heroSectionContent.srTitle}</h1>
                <h2 className="text-[2.45rem] font-semibold leading-[1.16] tracking-[-0.03em] text-white sm:text-[3rem] lg:text-[3.55rem]">
                  {heroSectionContent.title}
                </h2>
                <p className="max-w-[430px] text-[1rem] leading-8 text-slate-200 sm:text-[1.05rem]">
                  {heroSectionContent.description}
                </p>
              </div>
              <a
                href={ctaLink.href}
                target={ctaLink.target}
                rel={ctaLink.rel}
                className="group inline-flex items-center border border-gold/60 bg-[rgba(8,24,47,0.55)] px-7 py-[1.05rem] text-sm font-semibold text-[#f4d38e] transition duration-300 hover:-translate-y-1 hover:border-gold hover:bg-[rgba(8,24,47,0.76)] hover:shadow-[0_16px_36px_rgba(244,211,142,0.16)]"
              >
                {ctaLink.heroLabel}
                <span className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function FeaturesSection() {
  return (
    <section className="relative z-10 -mt-[64px] px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-container">
        <div className="grid gap-0 overflow-hidden rounded-[14px] border border-white/10 bg-[rgba(5,23,48,0.97)] shadow-soft backdrop-blur-xl md:grid-cols-2 lg:grid-cols-4">
          {featureHighlights.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <article className="flex h-full gap-4 border-b border-white/10 px-5 py-6 transition duration-300 hover:bg-white/[0.04] md:border-r md:border-b-0 lg:px-8">
                <div className="inline-flex h-[52px] w-[52px] flex-none items-center justify-center rounded-full border border-gold/30 text-[#f4d38e]">
                  <img src={item.icon} alt="" className="h-8 w-8 object-contain" loading="lazy" />
                </div>
                <div>
                  <h3 className="text-[1.03rem] font-semibold text-[#f4d38e]">{item.title}</h3>
                  <p className="mt-2 text-[0.92rem] leading-7 text-slate-300">{item.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);
  const [isServiceModalExpanded, setIsServiceModalExpanded] = useState(false);
  const [isServiceModalContentVisible, setIsServiceModalContentVisible] = useState(false);
  const [serviceOriginRect, setServiceOriginRect] = useState<DOMRect | null>(null);
  const serviceCardRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const closeTimerRef = useRef<number | null>(null);
  const contentTimerRef = useRef<number | null>(null);

  const activeService = serviceCards.find((service) => service.id === activeServiceId) ?? null;

  const serviceModalTargetRect =
    typeof window !== 'undefined'
      ? {
          width: Math.min(1040, window.innerWidth - (window.innerWidth < 640 ? 32 : 48)),
          height: Math.min(760, window.innerHeight - (window.innerWidth < 640 ? 32 : 48)),
        }
      : { width: 1040, height: 760 };

  const serviceModalFinalRect =
    typeof window !== 'undefined'
      ? {
          left: Math.max((window.innerWidth - serviceModalTargetRect.width) / 2, 16),
          top: Math.max((window.innerHeight - serviceModalTargetRect.height) / 2, 16),
          width: serviceModalTargetRect.width,
          height: serviceModalTargetRect.height,
        }
      : { left: 24, top: 24, width: 1040, height: 760 };

  const serviceModalCollapsedClipPath = serviceOriginRect
    ? `inset(${Math.max(serviceOriginRect.top - serviceModalFinalRect.top, 0)}px ${Math.max(
        serviceModalFinalRect.left + serviceModalFinalRect.width - (serviceOriginRect.left + serviceOriginRect.width),
        0,
      )}px ${Math.max(
        serviceModalFinalRect.top + serviceModalFinalRect.height - (serviceOriginRect.top + serviceOriginRect.height),
        0,
      )}px ${Math.max(serviceOriginRect.left - serviceModalFinalRect.left, 0)}px round 16px)`
    : 'inset(0px 0px 0px 0px round 18px)';

  useEffect(() => {
    if (!activeService) {
      document.body.style.overflow = '';
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleServiceModalClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeService]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current);
      }

      if (contentTimerRef.current) {
        window.clearTimeout(contentTimerRef.current);
      }
    };
  }, []);

  const openServiceModal = (serviceId: string) => {
    const cardElement = serviceCardRefs.current[serviceId];
    const nextOriginRect = cardElement?.getBoundingClientRect() ?? null;

    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
    }

    if (contentTimerRef.current) {
      window.clearTimeout(contentTimerRef.current);
    }

    setServiceOriginRect(nextOriginRect);
    setActiveServiceId(serviceId);
    setIsServiceModalExpanded(false);
    setIsServiceModalContentVisible(false);

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setIsServiceModalExpanded(true);
        contentTimerRef.current = window.setTimeout(() => {
          setIsServiceModalContentVisible(true);
          contentTimerRef.current = null;
        }, 160);
      });
    });
  };

  const handleServiceModalClose = () => {
    if (!activeServiceId) {
      return;
    }

    const cardElement = serviceCardRefs.current[activeServiceId];
    const nextOriginRect = cardElement?.getBoundingClientRect() ?? serviceOriginRect;

    if (contentTimerRef.current) {
      window.clearTimeout(contentTimerRef.current);
      contentTimerRef.current = null;
    }

    setServiceOriginRect(nextOriginRect);
    setIsServiceModalContentVisible(false);
    setIsServiceModalExpanded(false);

    closeTimerRef.current = window.setTimeout(() => {
      setActiveServiceId(null);
      setServiceOriginRect(null);
      closeTimerRef.current = null;
    }, 420);
  };

  return (
    <section id="services" className="bg-grain-light px-4 py-[92px] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-container">
        <Reveal className="flex justify-center mb-12">
          <SectionIntro
            eyebrow={servicesSectionContent.eyebrow}
            title={servicesSectionContent.title}
            description={servicesSectionContent.description}
          />
        </Reveal>

        <div className={`grid gap-5 md:grid-cols-2 ${serviceCards.length > 3 ? 'xl:grid-cols-5' : ''}`}>
          {serviceCards.map((service, index) => (
            <Reveal key={service.title} delay={index * 90}>
              <button
                type="button"
                className="group flex h-full min-h-[462px] w-full flex-col overflow-hidden rounded-[16px] border border-slate-200 bg-white text-left shadow-[0_8px_30px_rgba(7,24,47,0.08)] transition duration-300 hover:-translate-y-2 hover:border-gold/30 focus:outline-none focus:ring-2 focus:ring-gold/50"
                onClick={() => openServiceModal(service.id)}
                ref={(element) => {
                  serviceCardRefs.current[service.id] = element;
                }}
              >
                <div className="relative overflow-visible">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-[205px] w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
                  <div className="absolute -bottom-6 left-5 inline-flex h-[52px] w-[52px] items-center justify-center rounded-full border border-gold/35 bg-[rgba(4,18,39,0.96)] text-[#f4d38e] shadow-lg">
                    <img src={service.icon} alt="" className="h-8 w-8 object-contain" loading="lazy" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6 pt-10">
                  <h3 className="text-[1.55rem] font-semibold tracking-tight text-ink">{service.title}</h3>
                  <p className="mt-4 flex-1 text-[0.95rem] leading-7 text-slate-500">{service.description}</p>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-ink transition group-hover:gap-3 group-hover:text-gold">
                    {commonLabels.serviceDetailLabel}
                    <span aria-hidden="true">→</span>
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {activeService ? (
        <div className="fixed inset-0 z-[70]" aria-hidden="true">
          <div
            className={`absolute inset-0 bg-[rgba(6,21,45,0.58)] backdrop-blur-sm transition-opacity duration-[420ms] ${
              isServiceModalExpanded ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={handleServiceModalClose}
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={`service-modal-title-${activeService.id}`}
            className="absolute overflow-hidden border border-white/15 bg-white shadow-[0_30px_90px_rgba(6,21,45,0.28)]"
            style={{
              left: serviceModalFinalRect.left,
              top: serviceModalFinalRect.top,
              width: serviceModalFinalRect.width,
              height: serviceModalFinalRect.height,
              borderRadius: '18px',
              clipPath: isServiceModalExpanded ? 'inset(0px 0px 0px 0px round 18px)' : serviceModalCollapsedClipPath,
              transition:
                'clip-path 420ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 420ms cubic-bezier(0.22, 1, 0.36, 1), opacity 420ms cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            <button
              type="button"
              aria-label={commonLabels.serviceModalCloseLabel}
              className={`absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white/90 text-[1.4rem] text-slate-500 transition duration-300 hover:border-gold/40 hover:text-gold ${
                isServiceModalContentVisible ? 'opacity-100 delay-150' : 'pointer-events-none opacity-0'
              }`}
              onClick={handleServiceModalClose}
            >
              ×
            </button>

            <div
              className={`grid h-full overflow-y-auto lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] ${
                isServiceModalExpanded ? 'opacity-100' : 'opacity-95'
              }`}
            >
              <div className="relative min-h-[260px] overflow-hidden bg-[linear-gradient(180deg,_#06152d_0%,_#081a37_100%)]">
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className={`h-full min-h-[260px] w-full object-cover transition duration-[700ms] ${
                    isServiceModalExpanded ? 'scale-100' : 'scale-[1.08]'
                  } ${isServiceModalContentVisible ? 'translate-y-0' : 'translate-y-2'}`}
                />
                <div
                  className={`absolute inset-0 bg-[linear-gradient(180deg,_rgba(6,21,45,0.12)_0%,_rgba(6,21,45,0.82)_100%)] transition-opacity duration-[500ms] ${
                    isServiceModalContentVisible ? 'opacity-100' : 'opacity-80'
                  }`}
                />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div
                    className={`inline-flex h-[56px] w-[56px] items-center justify-center rounded-full border border-gold/35 bg-[rgba(4,18,39,0.92)] text-[#f4d38e] shadow-lg transition-all duration-[500ms] ${
                      isServiceModalContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                    }`}
                  >
                    <img src={activeService.icon} alt="" className="h-8 w-8 object-contain" loading="lazy" />
                  </div>
                  <p
                    className={`mt-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#f4d38e] transition-all duration-[500ms] ${
                      isServiceModalContentVisible ? 'translate-y-0 opacity-100 delay-75' : 'translate-y-3 opacity-0'
                    }`}
                  >
                    {servicesSectionContent.eyebrow}
                  </p>
                  <h3
                    id={`service-modal-title-${activeService.id}`}
                    className={`mt-3 text-[2rem] font-semibold tracking-tight text-white transition-all duration-[520ms] sm:text-[2.4rem] ${
                      isServiceModalContentVisible ? 'translate-y-0 opacity-100 delay-100' : 'translate-y-4 opacity-0'
                    }`}
                  >
                    {activeService.title}
                  </h3>
                  <p
                    className={`mt-4 max-w-[440px] text-[0.98rem] leading-7 text-slate-200 transition-all duration-[560ms] ${
                      isServiceModalContentVisible ? 'translate-y-0 opacity-100 delay-150' : 'translate-y-4 opacity-0'
                    }`}
                  >
                    {activeService.detailDescription}
                  </p>
                </div>
              </div>

              <div
                className={`flex flex-col gap-7 px-5 py-6 transition-all duration-300 sm:px-8 sm:py-8 ${
                  isServiceModalContentVisible ? 'translate-y-0 opacity-100 delay-150' : 'translate-y-3 opacity-0'
                }`}
              >
                <div
                  className={`rounded-[14px] border border-slate-200 bg-slate-50 px-5 py-5 transition-all duration-[420ms] ${
                    isServiceModalContentVisible ? 'translate-y-0 opacity-100 delay-200' : 'translate-y-3 opacity-0'
                  }`}
                >
                  <p className="text-sm leading-7 text-slate-600">{activeService.description}</p>
                </div>

                <div
                  className={`grid gap-6 transition-all duration-[440ms] xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] ${
                    isServiceModalContentVisible ? 'translate-y-0 opacity-100 delay-[240ms]' : 'translate-y-4 opacity-0'
                  }`}
                >
                  <div className="space-y-3">
                    <h4 className="text-[1rem] font-semibold text-ink">{commonLabels.serviceHighlightsTitle}</h4>
                    <ul className="space-y-3 text-[0.95rem] leading-7 text-slate-600">
                      {activeService.detailHighlights.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 flex-none rounded-full bg-gold" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-[1rem] font-semibold text-ink">{commonLabels.serviceProcessTitle}</h4>
                    <ol className="space-y-3 text-[0.95rem] leading-7 text-slate-600">
                      {activeService.detailProcess.map((item, index) => (
                        <li key={item} className="flex gap-3">
                          <span className="inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-[rgba(4,18,39,0.94)] text-xs font-semibold text-[#f4d38e]">
                            {index + 1}
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                <div
                  className={`space-y-3 transition-all duration-[460ms] ${
                    isServiceModalContentVisible ? 'translate-y-0 opacity-100 delay-[300ms]' : 'translate-y-4 opacity-0'
                  }`}
                >
                  <h4 className="text-[1rem] font-semibold text-ink">{commonLabels.serviceSuitableForTitle}</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeService.detailSuitableFor.map((item) => (
                      <span
                        key={item}
                        className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-2 text-[0.88rem] text-slate-600"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className={`mt-auto flex flex-col gap-3 border-t border-slate-200 pt-6 transition-all duration-[480ms] sm:flex-row sm:items-center sm:justify-between ${
                    isServiceModalContentVisible ? 'translate-y-0 opacity-100 delay-[340ms]' : 'translate-y-4 opacity-0'
                  }`}
                >
                  <p className="text-[0.92rem] leading-7 text-slate-500">
                    운송 조건과 화물 특성에 맞는 상세 견적은 원로지 담당자가 빠르게 안내해드립니다.
                  </p>
                  <a
                    href={ctaLink.href}
                    target={ctaLink.target}
                    rel={ctaLink.rel}
                    className="inline-flex items-center justify-center border border-gold/60 bg-[rgba(8,24,47,0.96)] px-5 py-3 text-sm font-semibold text-[#f4d38e] transition hover:-translate-y-0.5"
                  >
                    {commonLabels.serviceModalActionLabel}
                    <span className="ml-3">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[linear-gradient(135deg,_#06152d_0%,_#091f41_100%)] px-4 py-[88px] text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-container gap-8 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:items-center">
        <Reveal>
          <div className="relative overflow-hidden rounded-[14px] border border-white/10 bg-white/5">
            <img
              src={sections.aboutImage}
              alt={aboutSectionContent.imageAlt}
              className="h-full min-h-[360px] w-full object-cover lg:min-h-[385px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="flex h-full flex-col justify-center">
            <SectionIntro
              eyebrow={aboutSectionContent.eyebrow}
              title={aboutSectionContent.title}
              description={aboutSectionContent.description}
              align="left"
              inverse
            />
            <div className="mt-10 border-t border-white/10 pt-7">
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-0">
                {aboutMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="xl:border-l xl:border-white/15 xl:px-5 xl:first:border-l-0 xl:first:pl-0 xl:last:pr-0"
                  >
                    <MetricValue value={metric.value} />
                    <p className="mt-3 text-[0.95rem] font-medium text-white">{metric.label}</p>
                    <p className="mt-2 text-[0.92rem] leading-6 text-slate-300">{metric.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function PartnersSection() {
  const marqueePartnerLogos = [...partnerLogos, ...partnerLogos];

  return (
    <section id="partners" className="overflow-hidden bg-white px-4 py-[74px] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-container">
        <Reveal className="flex justify-center mb-10">
          <SectionIntro
            eyebrow={partnersSectionContent.eyebrow}
            title={partnersSectionContent.title}
            description={partnersSectionContent.description}
          />
        </Reveal>

        <div className="partner-marquee relative overflow-hidden py-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-[linear-gradient(90deg,_#ffffff_0%,_rgba(255,255,255,0)_100%)] sm:w-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-[linear-gradient(270deg,_#ffffff_0%,_rgba(255,255,255,0)_100%)] sm:w-20" />

          <div className="partner-marquee-track flex w-max items-center">
            {marqueePartnerLogos.map((partner, index) => (
              <div key={`${partner.id}-${index}`} className="partner-marquee-item flex items-center px-5 py-2 sm:px-7">
                <PartnerLogoMark
                  name={partner.name}
                  icon={partner.icon}
                  wordmarkLines={partner.wordmarkLines}
                  textClassName={partner.textClassName}
                  wordmarkClassName={partner.wordmarkClassName}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const [toastMessage, setToastMessage] = useState('');
  const toastTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) {
        window.clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

  const copyText = async (text: string) => {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }

    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();

    const successful = document.execCommand('copy');
    document.body.removeChild(textarea);
    return successful;
  };

  const handleCopyDetail = async (detail: string) => {
    const [, value = detail] = detail.split(': ');
    const label = detail.startsWith('전화번호') ? '전화번호' : detail.startsWith('이메일') ? '이메일' : '내용';

    try {
      const copied = await copyText(value);
      setToastMessage(copied ? `${label}이 복사되었습니다.` : '복사에 실패했습니다.');
    } catch {
      setToastMessage('복사에 실패했습니다.');
    }

    if (toastTimerRef.current) {
      window.clearTimeout(toastTimerRef.current);
    }

    toastTimerRef.current = window.setTimeout(() => {
      setToastMessage('');
      toastTimerRef.current = null;
    }, 2500);
  };

  return (
    <footer id="contact" className="relative bg-[#041127] px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-container gap-6 border-t border-white/10 pt-8 lg:grid-cols-[auto_1fr_auto_auto] lg:items-end">
        <div className="lg:pr-4 self-center">
          <BrandMark footer />
        </div>
        <div className="grid gap-2 text-sm leading-7 text-slate-300">
          {contactDetails.map((detail) => {
            const [label, value] = detail.split(': ').map((part) => part.trim());
            const canCopy = label === '전화번호' || label === '이메일';

            return (
              <div key={detail} className="flex flex-wrap items-center gap-3">
                <span className="leading-7">
                  {label}: {value}
                </span>
                {canCopy ? (
                  <button
                    type="button"
                    onClick={() => handleCopyDetail(detail)}
                    aria-label={`${label} 복사`}
                    className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-slate-600 bg-slate-950/70 text-slate-200 transition hover:border-white/30 hover:text-white"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5">
                      <path
                        d="M8 3H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h3v2H5a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4h3v2Zm3 4h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Zm0 2v12h8V9h-8Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                ) : null}
              </div>
            );
          })}
          <p className="pt-1 text-sm text-slate-400">{siteMeta.copyright}</p>
        </div>

        <div className="flex flex-wrap items-center gap-7 text-sm text-slate-200 lg:justify-end lg:self-center">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-[#f4d38e]">
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#company"
          className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sm font-semibold text-white transition hover:-translate-y-1 hover:border-gold/40 hover:text-[#f4d38e] lg:justify-self-end"
        >
          {commonLabels.backToTopLabel}
        </a>
      </div>

      {toastMessage ? (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center pb-5">
          <div
            className="inline-flex rounded-full bg-slate-900/95 px-4 py-2 text-sm font-medium text-white shadow-lg backdrop-blur-md"
            role="status"
            aria-live="polite"
          >
            {toastMessage}
          </div>
        </div>
      ) : null}
    </footer>
  );
}
