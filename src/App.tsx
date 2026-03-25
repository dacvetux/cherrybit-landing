import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';

type Language = 'en' | 'sl' | 'de';

type Locale = {
  tagline: string;
  nav: {
    services: string;
    proof: string;
    contact: string;
  };
  hero: {
    title1: string;
    title2: string;
    text: string;
    primaryCta: string;
    secondaryCta: string;
  };
  servicesIntro: {
    eyebrow: string;
    title: string;
  };
  services: {
    title: string;
    description: string;
  }[];
  proof: {
    eyebrow: string;
    title: string;
    items: string[];
  };
  contact: {
    eyebrow: string;
    title: string;
    text: string;
    who: string;
    whoPlaceholder: string;
    email: string;
    emailPlaceholder: string;
    why: string;
    whyPlaceholder: string;
    footer: string;
    cta: string;
  };
  switcher: {
    en: string;
    sl: string;
    de: string;
  };
};

const BRAND = {
  ink: '#17181C',
  accent: '#FF3B78',
  accentSoft: '#FFE3EC',
  accentBg: '#FFF4F8',
  border: '#E7E7EA',
  leaf: '#14B86E',
};

const LOCALES: Record<Language, Locale> = {
  en: {
    tagline: 'Operations. Optimisation. AI. Digital Delivery.',
    nav: {
      services: 'Services',
      proof: 'Why us',
      contact: 'Contact',
    },
    hero: {
      title1: 'Simplify operations.',
      title2: 'Move faster.',
      text: 'We help companies improve workflows, introduce practical AI and build the right digital tools.',
      primaryCta: 'Start a conversation',
      secondaryCta: 'View services',
    },
    servicesIntro: {
      eyebrow: 'Services',
      title: 'A focused offer.',
    },
    services: [
      {
        title: 'Operations',
        description: 'Workflow review, service coordination and execution clarity for teams with growing complexity.',
      },
      {
        title: 'Optimisation',
        description: 'Process simplification, bottleneck removal and better operating models across functions.',
      },
      {
        title: 'AI Enablement',
        description: 'Practical AI use cases for support, knowledge access, automation and internal efficiency.',
      },
      {
        title: 'Digital Delivery',
        description: 'Business-facing tools, portals and interfaces designed around real operational needs.',
      },
    ],
    proof: {
      eyebrow: 'Why CherryBit',
      title: 'Strong business and delivery foundation.',
      items: ['Operational know-how', 'Software delivery', 'UX execution', 'Clear communication'],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Tell us who you are and why you are reaching out.',
      text: 'A short message is enough to start.',
      who: 'Who',
      whoPlaceholder: 'Your name / company',
      email: 'Email',
      emailPlaceholder: 'name@company.com',
      why: 'Why',
      whyPlaceholder: 'Briefly describe your challenge, goal or opportunity',
      footer: 'Intro call · offer overview · discovery',
      cta: 'Send inquiry',
    },
    switcher: {
      en: 'EN',
      sl: 'SL',
      de: 'DE',
    },
  },
  sl: {
    tagline: 'Operative. Optimizacija. AI. Digitalna izvedba.',
    nav: {
      services: 'Storitve',
      proof: 'Zakaj mi',
      contact: 'Kontakt',
    },
    hero: {
      title1: 'Poenostavite operacije.',
      title2: 'Premikajte se hitreje.',
      text: 'Podjetjem pomagamo izboljšati procese, uvesti uporabno umetno inteligenco in zgraditi prava digitalna orodja.',
      primaryCta: 'Začnimo pogovor',
      secondaryCta: 'Poglej storitve',
    },
    servicesIntro: {
      eyebrow: 'Storitve',
      title: 'Fokusirana ponudba.',
    },
    services: [
      {
        title: 'Operative',
        description: 'Pregled potekov dela, koordinacije storitev in jasnosti izvedbe za ekipe v rastoči kompleksnosti.',
      },
      {
        title: 'Optimizacija',
        description: 'Poenostavitev procesov, odprava ozkih grl in boljši operativni modeli med funkcijami.',
      },
      {
        title: 'AI Enablement',
        description: 'Praktični primeri uporabe AI za podporo, dostop do znanja, avtomatizacijo in interno učinkovitost.',
      },
      {
        title: 'Digital Delivery',
        description: 'Poslovna orodja, portali in vmesniki, zasnovani okoli realnih operativnih potreb.',
      },
    ],
    proof: {
      eyebrow: 'Zakaj CherryBit',
      title: 'Močna poslovna in izvedbena osnova.',
      items: ['Operativno znanje', 'Razvojna izvedba', 'UX izvedba', 'Jasna komunikacija'],
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'Povejte nam, kdo ste in zakaj se oglašate.',
      text: 'Za začetek je dovolj kratko sporočilo.',
      who: 'Kdo',
      whoPlaceholder: 'Vaše ime / podjetje',
      email: 'E-pošta',
      emailPlaceholder: 'ime@podjetje.com',
      why: 'Zakaj',
      whyPlaceholder: 'Na kratko opišite izziv, cilj ali priložnost',
      footer: 'Uvodni klic · pregled ponudbe · discovery',
      cta: 'Pošlji povpraševanje',
    },
    switcher: {
      en: 'EN',
      sl: 'SL',
      de: 'DE',
    },
  },
  de: {
    tagline: 'Operations. Optimierung. AI. Digitale Umsetzung.',
    nav: {
      services: 'Leistungen',
      proof: 'Warum wir',
      contact: 'Kontakt',
    },
    hero: {
      title1: 'Vereinfachen Sie Ihre Abläufe.',
      title2: 'Bewegen Sie sich schneller.',
      text: 'Wir helfen Unternehmen, Prozesse zu verbessern, praxistaugliche KI einzuführen und die richtigen digitalen Werkzeuge zu bauen.',
      primaryCta: 'Gespräch starten',
      secondaryCta: 'Leistungen ansehen',
    },
    servicesIntro: {
      eyebrow: 'Leistungen',
      title: 'Ein fokussiertes Angebot.',
    },
    services: [
      {
        title: 'Operations',
        description: 'Analyse von Abläufen, Servicekoordination und Umsetzungslogik für Teams mit wachsender Komplexität.',
      },
      {
        title: 'Optimierung',
        description: 'Vereinfachung von Prozessen, Beseitigung von Engpässen und bessere operative Modelle über Funktionen hinweg.',
      },
      {
        title: 'AI Enablement',
        description: 'Praktische KI-Anwendungsfälle für Support, Wissenszugang, Automatisierung und interne Effizienz.',
      },
      {
        title: 'Digital Delivery',
        description: 'Geschäftsnahe Tools, Portale und Interfaces rund um reale operative Anforderungen.',
      },
    ],
    proof: {
      eyebrow: 'Warum CherryBit',
      title: 'Starke Basis in Business und Delivery.',
      items: ['Operatives Know-how', 'Software Delivery', 'UX Umsetzung', 'Klare Kommunikation'],
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'Sagen Sie uns, wer Sie sind und warum Sie uns kontaktieren.',
      text: 'Für den Start reicht eine kurze Nachricht.',
      who: 'Wer',
      whoPlaceholder: 'Ihr Name / Unternehmen',
      email: 'E-Mail',
      emailPlaceholder: 'name@unternehmen.com',
      why: 'Warum',
      whyPlaceholder: 'Beschreiben Sie kurz Ihre Herausforderung, Ihr Ziel oder Ihre Chance',
      footer: 'Intro-Call · Angebotsübersicht · Discovery',
      cta: 'Anfrage senden',
    },
    switcher: {
      en: 'EN',
      sl: 'SL',
      de: 'DE',
    },
  },
};

export default function CherryBitLandingWireframe() {
  const [language, setLanguage] = useState<Language>('en');
  const copy = useMemo(() => LOCALES[language], [language]);

  return (
    <div className="min-h-screen bg-[#FCFCFD] text-[#17181C] selection:bg-[#17181C] selection:text-white">
      <div className="relative overflow-hidden">
        <BackgroundGlow />

        <header className="sticky top-0 z-30 border-b border-[#E7E7EA] bg-[#FCFCFD]/90 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
            <div>
              <div className="flex items-center gap-3 text-lg font-semibold tracking-[0.08em] text-[#17181C]">
                <CherryMark />
                <span>
                  Cherry<span className="text-[#FF3B78]">BiT</span>
                </span>
              </div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-neutral-500">{copy.tagline}</div>
            </div>

            <div className="flex items-center gap-4">
              <nav className="hidden items-center gap-8 text-sm text-neutral-600 md:flex">
                <a href="#services" className="transition hover:text-[#FF3B78]">
                  {copy.nav.services}
                </a>
                <a href="#proof" className="transition hover:text-[#FF3B78]">
                  {copy.nav.proof}
                </a>
                <a href="#contact" className="transition hover:text-[#FF3B78]">
                  {copy.nav.contact}
                </a>
              </nav>

              <div className="inline-flex rounded-full border border-[#E7E7EA] bg-white p-1 shadow-sm">
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                    language === 'en' ? 'bg-[#FF3B78] text-white' : 'text-neutral-600 hover:text-[#FF3B78]'
                  }`}
                >
                  {copy.switcher.en}
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('sl')}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                    language === 'sl' ? 'bg-[#FF3B78] text-white' : 'text-neutral-600 hover:text-[#FF3B78]'
                  }`}
                >
                  {copy.switcher.sl}
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('de')}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                    language === 'de' ? 'bg-[#FF3B78] text-white' : 'text-neutral-600 hover:text-[#FF3B78]'
                  }`}
                >
                  {copy.switcher.de}
                </button>
              </div>
            </div>
          </div>
        </header>

        <main>
          <section className="relative mx-auto max-w-7xl px-6 pb-16 pt-20 lg:px-10 lg:pb-24 lg:pt-24">
            <div className="max-w-3xl">
              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-[#17181C] md:text-6xl lg:text-7xl">
                {copy.hero.title1}
                <span className="block text-[#FF3B78]">{copy.hero.title2}</span>
              </h1>

              <p className="mt-8 max-w-xl text-base leading-7 text-neutral-600 md:text-lg">{copy.hero.text}</p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#FF3B78] px-6 py-3 text-sm font-medium text-white transition hover:scale-[1.01] hover:shadow-[0_10px_30px_rgba(255,59,120,0.22)]"
                >
                  {copy.hero.primaryCta}
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border border-[#E7E7EA] bg-white px-6 py-3 text-sm font-medium text-[#17181C] transition hover:border-[#FF3B78]/40 hover:text-[#FF3B78]"
                >
                  {copy.hero.secondaryCta}
                </a>
              </div>
            </div>
          </section>

          <section id="services" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
            <SectionIntro eyebrow={copy.servicesIntro.eyebrow} title={copy.servicesIntro.title} />

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {copy.services.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[28px] border border-[#E7E7EA] bg-white p-6 shadow-[0_10px_30px_rgba(23,24,28,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#FF3B78]/25"
                >
                  <ServiceIcon />
                  <h3 className="text-lg font-medium tracking-[-0.02em] text-[#17181C]">{item.title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-neutral-600">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="proof" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <div className="text-xs uppercase tracking-[0.24em] text-[#FF3B78]">{copy.proof.eyebrow}</div>
                <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.03em] text-[#17181C] md:text-4xl">
                  {copy.proof.title}
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {copy.proof.items.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-[28px] border border-[#E7E7EA] bg-white p-6 shadow-[0_10px_30px_rgba(23,24,28,0.04)]"
                  >
                    <div className="text-sm text-[#FF3B78]">0{index + 1}</div>
                    <div className="mt-3 text-base leading-7 text-neutral-800">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 pt-8 lg:px-10">
            <div className="grid gap-10 rounded-[40px] border border-[#FFD3E1] bg-[linear-gradient(180deg,#FFFFFF_0%,#FFF7FA_100%)] p-8 shadow-[0_20px_60px_rgba(255,59,120,0.08)] md:p-10 lg:grid-cols-[0.75fr_1.25fr] lg:p-12">
              <div>
                <div className="text-xs uppercase tracking-[0.22em] text-[#FF3B78]">{copy.contact.eyebrow}</div>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#17181C] md:text-4xl lg:text-5xl">
                  {copy.contact.title}
                </h2>
                <p className="mt-5 max-w-md text-base leading-7 text-neutral-600">{copy.contact.text}</p>
              </div>

              <form className="grid gap-5 rounded-[32px] border border-[#FFD3E1] bg-white p-6 md:p-8">
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-neutral-700">{copy.contact.who}</span>
                    <input
                      type="text"
                      placeholder={copy.contact.whoPlaceholder}
                      className="w-full rounded-2xl border border-[#E7E7EA] bg-white px-5 py-4 text-base text-[#17181C] outline-none transition focus:border-[#FF3B78]"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-neutral-700">{copy.contact.email}</span>
                    <input
                      type="email"
                      placeholder={copy.contact.emailPlaceholder}
                      className="w-full rounded-2xl border border-[#E7E7EA] bg-white px-5 py-4 text-base text-[#17181C] outline-none transition focus:border-[#FF3B78]"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-neutral-700">{copy.contact.why}</span>
                  <textarea
                    rows={7}
                    placeholder={copy.contact.whyPlaceholder}
                    className="w-full rounded-[24px] border border-[#E7E7EA] bg-white px-5 py-4 text-base leading-7 text-[#17181C] outline-none transition focus:border-[#FF3B78]"
                  />
                </label>

                <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-sm text-neutral-500">{copy.contact.footer}</div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-[#FF3B78] px-7 py-3.5 text-sm font-medium text-white transition hover:scale-[1.01] hover:shadow-[0_10px_30px_rgba(255,59,120,0.22)]"
                  >
                    {copy.contact.cta}
                  </button>
                </div>
              </form>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

function SectionIntro({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="text-xs uppercase tracking-[0.24em] text-[#FF3B78]">{eyebrow}</div>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#17181C] md:text-4xl">{title}</h2>
    </div>
  );
}

function CherryMark() {
  return (
    <span className="relative inline-block h-4 w-4 rounded-full bg-[#FF3B78] shadow-[10px_0_0_0_#FF3B78]">
      <span className="absolute -right-0.5 -top-1 h-1.5 w-1.5 rounded-full bg-[#14B86E]" />
    </span>
  );
}

function ServiceIcon() {
  return (
    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-[#FFD3E1] bg-[#FFF3F7]">
      <div className="grid grid-cols-2 gap-0.5">
        <span className="h-1.5 w-1.5 rounded-sm bg-[#FF3B78]" />
        <span className="h-1.5 w-1.5 rounded-sm bg-[#17181C]" />
        <span className="h-1.5 w-1.5 rounded-sm bg-[#17181C]" />
        <span className="h-1.5 w-1.5 rounded-sm bg-[#FF3B78]" />
      </div>
    </div>
  );
}

function BackgroundGlow() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute left-[-8%] top-[-8%] h-[28rem] w-[28rem] rounded-full bg-[#FFE3EC] blur-3xl"
        animate={{ x: [0, 40, -10, 0], y: [0, 30, -20, 0], scale: [1, 1.08, 0.96, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[-10%] top-[18%] h-[24rem] w-[24rem] rounded-full bg-[#FFF0F5] blur-3xl"
        animate={{ x: [0, -30, 20, 0], y: [0, -25, 15, 0], scale: [1, 0.94, 1.06, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      />
      <motion.div
        className="absolute bottom-[-8%] left-[24%] h-[22rem] w-[22rem] rounded-full bg-[#F6F6F8] blur-3xl"
        animate={{ x: [0, 24, -18, 0], y: [0, -18, 16, 0], scale: [1, 1.05, 0.95, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
      />
      <motion.div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFB4C8] to-transparent"
        animate={{ opacity: [0.45, 0.9, 0.45], scaleX: [0.96, 1, 0.96] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}

export const __testCases = {
  brandAccent: BRAND.accent,
  languages: Object.keys(LOCALES),
  defaultLanguage: 'en',
  enServiceCount: LOCALES.en.services.length,
  slServiceCount: LOCALES.sl.services.length,
  deServiceCount: LOCALES.de.services.length,
  proofCountEn: LOCALES.en.proof.items.length,
  proofCountSl: LOCALES.sl.proof.items.length,
  proofCountDe: LOCALES.de.proof.items.length,
  hasBackgroundGlow: typeof BackgroundGlow === 'function',
  hasContactFieldsEn: [LOCALES.en.contact.who, LOCALES.en.contact.email, LOCALES.en.contact.why],
  hasContactFieldsSl: [LOCALES.sl.contact.who, LOCALES.sl.contact.email, LOCALES.sl.contact.why],
  hasContactFieldsDe: [LOCALES.de.contact.who, LOCALES.de.contact.email, LOCALES.de.contact.why],
};
