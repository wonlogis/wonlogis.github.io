import logoImage from '../assets/logos/won-logis-logo-transparent.webp';
import type { CSSProperties, ReactNode } from 'react';
import {
  aboutMetrics,
  contactDetails,
  ctaLink,
  featureHighlights,
  navigationItems,
  partnerNames,
  sections,
  serviceCards,
  siteMeta,
  socialLinks,
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

function BrandMark({ footer = false }: { footer?: boolean }) {
  return (
    <a
      className={`inline-flex items-center ${footer ? 'justify-start' : 'justify-center'}`}
      href="#company"
      aria-label="WON LOGIS 홈으로 이동"
    >
      <span className={`inline-flex items-center ${footer ? 'w-[182px]' : 'w-[154px]'}`}>
        <img src={logoImage} alt="WON LOGIS" className="h-auto w-full object-contain" />
      </span>
    </a>
  );
}

function HeroBrand() {
  return <img src={logoImage} alt="WON LOGIS" className="h-auto w-[315px] object-contain sm:w-[410px] lg:w-[470px]" />;
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
              className={`text-sm transition-colors ${
                activeSection === item.sectionId ? 'text-[#f4d38e]' : 'text-white/75 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-4 xl:flex">
          <a
            href={ctaLink.href}
            className="group relative overflow-hidden border border-gold/60 px-7 py-[0.9rem] text-sm font-semibold text-[#f4d38e] transition-transform hover:-translate-y-0.5"
          >
            <span className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-white/20 opacity-0 blur-md transition-opacity group-hover:opacity-100 group-hover:animate-shine" />
            <span className="relative z-10">
              {ctaLink.label}
              <span className="ml-3">→</span>
            </span>
          </a>
        </div>
        <button
          type="button"
          aria-expanded={menuOpen}
          aria-label="모바일 메뉴 토글"
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
      className="relative overflow-hidden bg-[linear-gradient(180deg,_#06152d_0%,_#081a37_100%)] pt-[92px] text-white"
    >
      <div className="relative mx-auto max-w-[1920px]">
        <img
          src={sections.heroImage}
          alt="원로지스 트럭이 글로벌 네트워크 배경 앞을 달리는 모습"
          className="h-[640px] w-full object-cover object-center md:h-[735px] xl:h-[785px]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(6,21,45,0.93)_0%,_rgba(6,21,45,0.82)_28%,_rgba(6,21,45,0.42)_52%,_rgba(6,21,45,0.08)_100%)]" />
        <div className="absolute inset-x-0 top-0 mx-auto flex h-full max-w-container items-center px-4 sm:px-6 lg:px-8">
          <Reveal className="relative z-10 max-w-[560px] pt-10">
            <div className="space-y-8">
              <HeroBrand />
              <div className="space-y-5">
                <h1 className="text-[2.45rem] font-semibold leading-[1.16] tracking-[-0.03em] text-white sm:text-[3rem] lg:text-[3.55rem]">
                  신뢰로 연결하고, 가치로 운송합니다
                </h1>
                <p className="max-w-[430px] text-[1rem] leading-8 text-slate-200 sm:text-[1.05rem]">
                  원로지스는 고객의 소중한 화물을 인정하고 신속하게 전 세계로 연결하는 종합 물류 파트너입니다.
                </p>
              </div>
              <a
                href={ctaLink.href}
                className="inline-flex items-center border border-gold/60 bg-[rgba(8,24,47,0.55)] px-7 py-[1.05rem] text-sm font-semibold text-[#f4d38e] transition hover:-translate-y-1 hover:bg-[rgba(8,24,47,0.76)]"
              >
                견적 문의하기
                <span className="ml-3">→</span>
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
  return (
    <section id="services" className="bg-grain-light px-4 py-[92px] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-container">
        <Reveal className="flex justify-center mb-12">
          <SectionIntro
            eyebrow="Our Services"
            title="원로지스의 서비스"
            description="다양한 운송 솔루션으로 고객의 비즈니스를 성공으로 이끕니다."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {serviceCards.map((service, index) => (
            <Reveal key={service.title} delay={index * 90}>
              <article className="group flex h-full min-h-[462px] flex-col overflow-hidden rounded-[16px] border border-slate-200 bg-white shadow-[0_8px_30px_rgba(7,24,47,0.08)] transition duration-300 hover:-translate-y-2 hover:border-gold/30">
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
                  <a
                    href={service.href}
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:gap-3 hover:text-gold"
                  >
                    자세히 보기
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
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
              alt="원로지스 사옥 간판"
              className="h-full min-h-[360px] w-full object-cover lg:min-h-[385px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="flex h-full flex-col justify-center">
            <SectionIntro
              eyebrow="About Won Logis"
              title="신뢰받는 종합 물류 파트너, 원로지스"
              description="원로지스는 풍부한 경험과 전문성을 바탕으로 고객의 비즈니스 성장에 함께하는 최고의 물류 파트너가 되겠습니다."
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
                    <p className="text-[2.6rem] font-semibold leading-none text-[#f4d38e]">{metric.value}</p>
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
  return (
    <section id="partners" className="overflow-hidden bg-white px-4 py-[74px] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-container">
        <Reveal className="flex justify-center mb-10">
          <SectionIntro eyebrow="Partners" title="함께하는 글로벌 파트너" description="" />
        </Reveal>

        <div className="relative flex items-center justify-between gap-4 bg-white px-1 py-2 sm:px-2">
          <button
            type="button"
            aria-label="이전 파트너"
            className="grid h-10 w-10 flex-none place-items-center rounded-full border border-slate-200 text-[1.35rem] text-slate-300"
          >
            ‹
          </button>
          <div className="grid flex-1 grid-cols-2 items-center gap-y-6 text-center sm:grid-cols-3 lg:grid-cols-6">
            {partnerNames.map((partner) => (
              <div key={partner} className="text-[2rem] font-semibold leading-none tracking-[-0.02em] text-ink">
                {partner}
              </div>
            ))}
          </div>
          <button
            type="button"
            aria-label="다음 파트너"
            className="grid h-10 w-10 flex-none place-items-center rounded-full border border-slate-200 text-[1.35rem] text-slate-300"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="bg-[#041127] px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-container gap-6 border-t border-white/10 pt-8 lg:grid-cols-[auto_1fr_auto_auto] lg:items-end">
        <div className="lg:pr-4">
          <BrandMark footer />
        </div>
        <div className="grid gap-1 text-sm leading-7 text-slate-300">
          {contactDetails.map((detail) => (
            <p key={detail}>{detail}</p>
          ))}
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
          TOP
        </a>
      </div>
    </footer>
  );
}
