export type Language = 'en' | 'sl' | 'de';

export interface Translations {
  nav: {
    services: string;
    process: string;
    packages: string;
    about: string;
    getStarted: string;
  };
  hero: {
    badge: string;
    line1: string;
    line2: string;
    line3: string;
    body: string;
    bookCall: string;
    exploreServices: string;
  };
  valueProp: {
    heading1: string;
    heading2: string;
    body: string;
    benefits: { title: string; description: string }[];
  };
  services: {
    heading: string;
    body: string;
    items: { title: string; description: string }[];
  };
  whyCherryBit: {
    headingPre: string;
    headingPost: string;
    subtitle: string;
    body: string;
    points: string[];
    svgStrategy: string;
    strategyLetter: string;
    svgBuild: string;
    buildLetter: string;
    svgDeploy: string;
    deployLetter: string;
  };
  process: {
    heading: string;
    body: string;
    steps: { title: string; description: string }[];
  };
  contact: {
    heading: string;
    body: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    companyLabel: string;
    companyPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    nextHeading: string;
    step1Title: string;
    step1Body: string;
    step2Title: string;
    step2Body: string;
    step3Title: string;
    step3Body: string;
    responseTitle: string;
    responseUnit: string;
    responseBody: string;
    testimonialBody: string;
    testimonialName: string;
    testimonialRole: string;
    successMessage: string;
    errorMessage: string;
  };
  finalCta: {
    heading1: string;
    heading2: string;
    body: string;
    bookCall: string;
    sendInquiry: string;
  };
  footer: {
    tagline: string;
    servicesHeading: string;
    s1: string;
    s2: string;
    s3: string;
    s4: string;
    companyHeading: string;
    c1: string;
    c2: string;
    c3: string;
    c4: string;
    copyright: string;
  };
}

const en: Translations = {
  nav: {
    services: 'Services',
    process: 'Process',
    packages: 'Packages',
    about: 'About',
    getStarted: 'Get Started',
  },
  hero: {
  badge: 'Operational consulting, AI strategy and digital delivery',
  line1: 'Operations.',
  line2: 'Optimisation.',
  line3: 'Delivery.',
  body: 'CherryBit helps B2B teams reduce operational complexity, improve workflows and build digital solutions that support real execution.',
  bookCall: 'Book a Call',
  exploreServices: 'Explore Services',
},
  valueProp: {
    heading1: 'From operational chaos to',
    heading2: 'structured execution',
    body: "Most consultants talk. We deliver. Working software, optimized workflows, and teams that actually understand what they're doing.",
    benefits: [
      {
        title: 'Strategic & Tactical',
        description: 'From high-level planning to hands-on implementation',
      },
      {
        title: 'Execution-Focused',
        description: 'We build, not just advise. Real tools, real workflows.',
      },
      {
        title: 'Proven Systems',
        description: 'Battle-tested frameworks adapted to your context',
      },
      {
        title: 'AI-Native Approach',
        description: 'Leverage modern AI where it actually adds value',
      },
    ],
  },
  services: {
    heading: 'What we do',
    body: 'End-to-end support for modern operations. Strategy, implementation, and everything in between.',
    items: [
      {
        title: 'Operations Consulting',
        description:
          'Diagnose bottlenecks, redesign processes, and implement systems that scale with your team.',
      },
      {
        title: 'Workflow Optimization',
        description:
          'Streamline how work flows through your organization. Less friction, more output.',
      },
      {
        title: 'AI Strategy & Implementation',
        description:
          'Real AI integration—not hype. Custom models, automation, and intelligent tools.',
      },
      {
        title: 'Custom Software Development',
        description:
          'Tailored tools built for your exact needs. From internal dashboards to client platforms.',
      },
      {
        title: 'Data & Integration',
        description:
          'Connect your systems. Clean your data. Make everything talk to each other.',
      },
      {
        title: 'Process Automation',
        description:
          'Automate repetitive work so your team can focus on what actually matters.',
      },
      {
        title: 'Performance Metrics',
        description:
          'Set up dashboards and KPIs that give you real insight into what is working.',
      },
    ],
  },
  whyCherryBit: {
    headingPre: 'Why ',
    headingPost: '?',
    subtitle: "We don't stop at strategy — we implement.",
    body: 'Most consultants give you a deck and disappear. We stay until it works. You get custom tools, automated workflows, and teams that know how to maintain them.',
    points: [
      'We implement, not just strategize',
      'Technical depth meets business understanding',
      'Fixed scopes, clear deliverables',
      'Your team learns and owns the system',
    ],
    svgStrategy: 'Strategy',
    strategyLetter: 'S',
    svgBuild: 'Build',
    buildLetter: 'B',
    svgDeploy: 'Deploy',
    deployLetter: 'D',
  },
  process: {
    heading: 'How we work',
    body: 'A proven process that takes you from chaos to clarity in weeks, not months.',
    steps: [
      {
        title: 'Assess',
        description:
          'Deep dive into your current operations, pain points, and goals.',
      },
      {
        title: 'Define',
        description:
          'Clear roadmap with priorities, timelines, and deliverables.',
      },
      {
        title: 'Build',
        description: 'Hands-on development of tools, workflows, and systems.',
      },
      {
        title: 'Scale',
        description: 'Launch, train your team, and optimize for growth.',
      },
    ],
  },
  contact: {
    heading: "Let's talk about your operations",
    body: "Ready to optimize your workflows? Fill out the form below and we'll get back to you within 24 hours.",
    nameLabel: 'Your Name',
    namePlaceholder: 'John Doe',
    emailLabel: 'Email Address',
    emailPlaceholder: 'john@company.com',
    companyLabel: 'Company Name',
    companyPlaceholder: 'Your Company Inc.',
    messageLabel: 'Tell us about your project',
    messagePlaceholder:
      'What challenges are you facing? What would you like to improve?',
    submit: 'Send Message',
    nextHeading: 'What happens next?',
    step1Title: 'We review your request',
    step1Body: 'Our team analyzes your needs and identifies the best approach.',
    step2Title: 'Schedule a discovery call',
    step2Body:
      'We set up a 30-minute call to dive deeper into your operations.',
    step3Title: 'Receive a tailored proposal',
    step3Body: 'Get a custom roadmap with clear deliverables and timelines.',
    responseTitle: 'Typical response time',
    responseUnit: 'hours',
    responseBody: 'We typically respond within one business day, often sooner.',
    testimonialBody:
      '"Working with CherryBit transformed our operations. They didn\'t just consult—they built the tools we needed and trained our team to use them."',
    testimonialName: 'Sarah Chen',
    testimonialRole: 'COO, TechFlow Inc.',
    successMessage: "Message sent! We'll be in touch within 24 hours.",
    errorMessage:
      'Something went wrong. Please try again or email us directly.',
  },
  finalCta: {
    heading1: "Let's improve how your",
    heading2: 'business operates',
    body: "Ready to move from strategy to execution? Book a call and we'll show you exactly how we can help.",
    bookCall: 'Book a Call',
    sendInquiry: 'Send Inquiry',
  },
  footer: {
    tagline:
      'Operations consulting, workflow optimization, and AI strategy that actually gets implemented.',
    servicesHeading: 'Services',
    s1: 'Operations',
    s2: 'AI Strategy',
    s3: 'Workflows',
    s4: 'Development',
    companyHeading: 'Company',
    c1: 'About',
    c2: 'Case Studies',
    c3: 'Contact',
    c4: 'Careers',
    copyright: '© 2026 CherryBit. All rights reserved.',
  },
};

const sl: Translations = {
  nav: {
    services: 'Storitve',
    process: 'Proces',
    packages: 'Paketi',
    about: 'O nas',
    getStarted: 'Začnite',
  },
  hero: {
  badge: 'Operativno svetovanje, AI strategija in digitalna izvedba',
  line1: 'Operativa.',
  line2: 'Optimizacija.',
  line3: 'Izvedba.',
  body: 'CherryBit pomaga B2B ekipam zmanjšati operativno kompleksnost, izboljšati workflowe in zgraditi digitalne rešitve, ki podpirajo realno izvedbo.',
  bookCall: 'Rezervirajte klic',
  exploreServices: 'Raziščite storitve',
},
  valueProp: {
    heading1: 'Od operativnega kaosa do',
    heading2: 'strukturirane izvedbe',
    body: 'Večina svetovalcev samo govori. Mi dostavljamo. Delujoča programska oprema, optimizirani delovni tokovi in ekipe, ki dejansko razumejo, kaj počnejo.',
    benefits: [
      {
        title: 'Strateško & Taktično',
        description:
          'Od visokokakovostnega načrtovanja do neposredne implementacije',
      },
      {
        title: 'Osredotočeni na izvedbo',
        description:
          'Gradimo, ne le svetujemo. Resnična orodja, resnični delovni tokovi.',
      },
      {
        title: 'Preizkušeni sistemi',
        description: 'Preizkušeni okviri, prilagojeni vašemu kontekstu',
      },
      {
        title: 'Pristop z AI',
        description:
          'Izkoristite sodobno AI tam, kjer dejansko prinaša vrednost',
      },
    ],
  },
  services: {
    heading: 'Kaj počnemo',
    body: 'Celovita podpora za sodobne operacije. Strategija, implementacija in vse vmes.',
    items: [
      {
        title: 'Operativno svetovanje',
        description:
          'Diagnosticiramo ozka grla, preoblikujemo procese in uvedemo sisteme, ki rastejo z vašo ekipo.',
      },
      {
        title: 'Optimizacija delovnih tokov',
        description:
          'Poenostavimo pretok dela v vaši organizaciji. Manj trenja, več rezultatov.',
      },
      {
        title: 'AI Strategija & Implementacija',
        description:
          'Resnična integracija AI – brez hype-a. Modeli po meri, avtomatizacija in pametna orodja.',
      },
      {
        title: 'Razvoj programske opreme po meri',
        description:
          'Orodja, prilagojena vašim točnim potrebam. Od notranjih nadzornih plošč do platform za stranke.',
      },
      {
        title: 'Podatki & Integracija',
        description:
          'Povežemo vaše sisteme. Očistimo podatke. Naredimo, da vse komunicira med seboj.',
      },
      {
        title: 'Avtomatizacija procesov',
        description:
          'Avtomatiziramo ponavljajoče se delo, da se vaša ekipa lahko osredotoči na tisto, kar je resnično pomembno.',
      },
      {
        title: 'Meritve uspešnosti',
        description:
          'Postavimo nadzorne plošče in KPI-je, ki vam dajo pravi vpogled v to, kaj deluje.',
      },
    ],
  },
  whyCherryBit: {
    headingPre: 'Zakaj ',
    headingPost: '?',
    subtitle: 'Ne ustavimo se pri strategiji – implementiramo.',
    body: 'Večina svetovalcev vam da prezentacijo in izgine. Mi ostanemo, dokler ne deluje. Dobite orodja po meri, avtomatizirane delovne tokove in ekipe, ki znajo vzdrževati sisteme.',
    points: [
      'Implementiramo, ne le strategiziramo',
      'Tehnična globina srečuje poslovno razumevanje',
      'Fiksni obsegi, jasni rezultati',
      'Vaša ekipa se nauči in prevzame sistem',
    ],
    svgStrategy: 'Strategija',
    strategyLetter: 'S',
    svgBuild: 'Gradnja',
    buildLetter: 'G',
    svgDeploy: 'Uvedba',
    deployLetter: 'U',
  },
  process: {
    heading: 'Kako delujemo',
    body: 'Preizkušen proces, ki vas v tednih, ne mesecih, pripelje od kaosa do jasnosti.',
    steps: [
      {
        title: 'Ocena',
        description:
          'Poglobimo se v vaše trenutne operacije, bolečine in cilje.',
      },
      {
        title: 'Definiranje',
        description: 'Jasen načrt s prioritetami, časovnicami in rezultati.',
      },
      {
        title: 'Gradnja',
        description: 'Neposreden razvoj orodij, delovnih tokov in sistemov.',
      },
      {
        title: 'Skaliranje',
        description:
          'Zagotovimo, usposobimo vašo ekipo in optimiziramo za rast.',
      },
    ],
  },
  contact: {
    heading: 'Pogovorimo se o vaših operacijah',
    body: 'Pripravljeni optimizirati vaše delovne tokove? Izpolnite spodnji obrazec in odgovorili vam bomo v 24 urah.',
    nameLabel: 'Vaše ime',
    namePlaceholder: 'Janez Novak',
    emailLabel: 'E-poštni naslov',
    emailPlaceholder: 'janez@podjetje.si',
    companyLabel: 'Ime podjetja',
    companyPlaceholder: 'Vaše podjetje d.o.o.',
    messageLabel: 'Povejte nam o vašem projektu',
    messagePlaceholder: 'S kakšnimi izzivi se soočate? Kaj bi radi izboljšali?',
    submit: 'Pošlji sporočilo',
    nextHeading: 'Kaj se zgodi naprej?',
    step1Title: 'Pregledamo vašo zahtevo',
    step1Body:
      'Naša ekipa analizira vaše potrebe in identificira najboljši pristop.',
    step2Title: 'Dogovorimo se za odkrivalni klic',
    step2Body: 'Organiziramo 30-minutni klic za poglobitev v vaše operacije.',
    step3Title: 'Prejmete prilagojeno ponudbo',
    step3Body: 'Pridobite prilagojen načrt z jasnimi rezultati in časovnicami.',
    responseTitle: 'Tipičen odzivni čas',
    responseUnit: 'ur',
    responseBody: 'Praviloma odgovorimo v enem delovnem dnevu, pogosto prej.',
    testimonialBody:
      '"Sodelovanje s CherryBit je transformiralo naše operacije. Niso samo svetovali – zgradili so orodja, ki smo jih potrebovali, in usposobili našo ekipo."',
    testimonialName: 'Sarah Chen',
    testimonialRole: 'COO, TechFlow Inc.',
    successMessage: 'Sporočilo poslano! Odgovorili vam bomo v 24 urah.',
    errorMessage:
      'Nekaj je šlo narobe. Poskusite znova ali nam pišite neposredno.',
  },
  finalCta: {
    heading1: 'Izboljšajmo, kako vaše',
    heading2: 'podjetje deluje',
    body: 'Pripravljeni priti od strategije do izvedbe? Rezervirajte klic in pokazali vam bomo natanko, kako vam lahko pomagamo.',
    bookCall: 'Rezervirajte klic',
    sendInquiry: 'Pošljite povpraševanje',
  },
  footer: {
    tagline:
      'Operativno svetovanje, optimizacija delovnih tokov in AI strategija, ki se dejansko implementira.',
    servicesHeading: 'Storitve',
    s1: 'Operacije',
    s2: 'AI Strategija',
    s3: 'Delovni tokovi',
    s4: 'Razvoj',
    companyHeading: 'Podjetje',
    c1: 'O nas',
    c2: 'Primeri',
    c3: 'Kontakt',
    c4: 'Kariere',
    copyright: '© 2026 CherryBit. Vse pravice pridržane.',
  },
};

const de: Translations = {
  nav: {
    services: 'Leistungen',
    process: 'Prozess',
    packages: 'Pakete',
    about: 'Über uns',
    getStarted: 'Jetzt starten',
  },
  hero: {
  badge: 'Operative Beratung, KI-Strategie und digitale Umsetzung',
  line1: 'Operations.',
  line2: 'Optimierung.',
  line3: 'Umsetzung.',
  body: 'CherryBit unterstützt B2B-Teams dabei, operative Komplexität zu reduzieren, Workflows zu verbessern und digitale Lösungen für die reale Umsetzung aufzubauen.',
  bookCall: 'Gespräch buchen',
  exploreServices: 'Leistungen entdecken',
},
  valueProp: {
    heading1: 'Vom operativen Chaos zur',
    heading2: 'strukturierten Umsetzung',
    body: 'Die meisten Berater reden. Wir liefern. Funktionierende Software, optimierte Workflows und Teams, die wirklich verstehen, was sie tun.',
    benefits: [
      {
        title: 'Strategisch & Taktisch',
        description: 'Von der Gesamtplanung bis zur konkreten Umsetzung',
      },
      {
        title: 'Umsetzungsorientiert',
        description:
          'Wir bauen, beraten nicht nur. Echte Tools, echte Workflows.',
      },
      {
        title: 'Bewährte Systeme',
        description: 'Praxiserprobte Frameworks, angepasst an Ihren Kontext',
      },
      {
        title: 'KI-nativer Ansatz',
        description:
          'Moderne KI dort einsetzen, wo sie wirklich Mehrwert schafft',
      },
    ],
  },
  services: {
    heading: 'Was wir tun',
    body: 'Umfassende Unterstützung für moderne Betriebsabläufe. Strategie, Umsetzung und alles dazwischen.',
    items: [
      {
        title: 'Operations-Beratung',
        description:
          'Engpässe diagnostizieren, Prozesse neu gestalten und Systeme implementieren, die mit Ihrem Team skalieren.',
      },
      {
        title: 'Workflow-Optimierung',
        description:
          'Den Arbeitsfluss in Ihrer Organisation optimieren. Weniger Reibung, mehr Output.',
      },
      {
        title: 'KI-Strategie & Implementierung',
        description:
          'Echte KI-Integration – kein Hype. Maßgeschneiderte Modelle, Automatisierung und intelligente Tools.',
      },
      {
        title: 'Individuelle Softwareentwicklung',
        description:
          'Maßgeschneiderte Tools für Ihre genauen Anforderungen. Von internen Dashboards bis zu Kundenplattformen.',
      },
      {
        title: 'Daten & Integration',
        description:
          'Ihre Systeme verbinden. Daten bereinigen. Alles miteinander kommunizieren lassen.',
      },
      {
        title: 'Prozessautomatisierung',
        description:
          'Wiederkehrende Arbeit automatisieren, damit sich Ihr Team auf das Wesentliche konzentrieren kann.',
      },
      {
        title: 'Leistungskennzahlen',
        description:
          'Dashboards und KPIs einrichten, die echten Einblick in das Funktionieren geben.',
      },
    ],
  },
  whyCherryBit: {
    headingPre: 'Warum ',
    headingPost: '?',
    subtitle: 'Wir stoppen nicht bei der Strategie – wir setzen um.',
    body: 'Die meisten Berater geben Ihnen eine Präsentation und verschwinden. Wir bleiben, bis es funktioniert. Sie erhalten maßgeschneiderte Tools, automatisierte Workflows und Teams, die wissen, wie sie die Systeme pflegen.',
    points: [
      'Wir setzen um, nicht nur strategisch',
      'Technische Tiefe trifft Geschäftsverständnis',
      'Feste Projektumfänge, klare Ergebnisse',
      'Ihr Team lernt und übernimmt das System',
    ],
    svgStrategy: 'Strategie',
    strategyLetter: 'S',
    svgBuild: 'Aufbau',
    buildLetter: 'A',
    svgDeploy: 'Einsatz',
    deployLetter: 'E',
  },
  process: {
    heading: 'Wie wir arbeiten',
    body: 'Ein bewährter Prozess, der Sie in Wochen, nicht Monaten, vom Chaos zur Klarheit führt.',
    steps: [
      {
        title: 'Analyse',
        description:
          'Tiefe Einblicke in Ihre aktuellen Abläufe, Schmerzpunkte und Ziele.',
      },
      {
        title: 'Definieren',
        description:
          'Klare Roadmap mit Prioritäten, Zeitplänen und Lieferergebnissen.',
      },
      {
        title: 'Aufbauen',
        description:
          'Praktische Entwicklung von Tools, Workflows und Systemen.',
      },
      {
        title: 'Skalieren',
        description: 'Starten, Ihr Team schulen und für Wachstum optimieren.',
      },
    ],
  },
  contact: {
    heading: 'Lassen Sie uns über Ihre Abläufe sprechen',
    body: 'Bereit, Ihre Workflows zu optimieren? Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden.',
    nameLabel: 'Ihr Name',
    namePlaceholder: 'Max Mustermann',
    emailLabel: 'E-Mail-Adresse',
    emailPlaceholder: 'max@unternehmen.de',
    companyLabel: 'Unternehmensname',
    companyPlaceholder: 'Ihr Unternehmen GmbH',
    messageLabel: 'Erzählen Sie uns von Ihrem Projekt',
    messagePlaceholder:
      'Welche Herausforderungen haben Sie? Was möchten Sie verbessern?',
    submit: 'Nachricht senden',
    nextHeading: 'Was passiert als nächstes?',
    step1Title: 'Wir prüfen Ihre Anfrage',
    step1Body:
      'Unser Team analysiert Ihre Bedürfnisse und ermittelt den besten Ansatz.',
    step2Title: 'Discovery-Call vereinbaren',
    step2Body:
      'Wir vereinbaren ein 30-minütiges Gespräch, um tiefer in Ihre Abläufe einzutauchen.',
    step3Title: 'Maßgeschneidertes Angebot erhalten',
    step3Body:
      'Sie erhalten eine individuelle Roadmap mit klaren Lieferergebnissen und Zeitplänen.',
    responseTitle: 'Typische Antwortzeit',
    responseUnit: 'Stunden',
    responseBody:
      'Wir antworten in der Regel innerhalb eines Werktages, oft früher.',
    testimonialBody:
      '"Die Zusammenarbeit mit CherryBit hat unsere Abläufe transformiert. Sie haben nicht nur beraten – sie haben die Tools gebaut, die wir brauchten, und unser Team geschult."',
    testimonialName: 'Sarah Chen',
    testimonialRole: 'COO, TechFlow Inc.',
    successMessage:
      'Nachricht gesendet! Wir melden uns innerhalb von 24 Stunden.',
    errorMessage:
      'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.',
  },
  finalCta: {
    heading1: 'Lassen Sie uns verbessern, wie Ihr',
    heading2: 'Unternehmen arbeitet',
    body: 'Bereit, von der Strategie zur Umsetzung zu wechseln? Buchen Sie ein Gespräch und wir zeigen Ihnen genau, wie wir helfen können.',
    bookCall: 'Gespräch buchen',
    sendInquiry: 'Anfrage senden',
  },
  footer: {
    tagline:
      'Operations-Beratung, Workflow-Optimierung und KI-Strategie, die tatsächlich umgesetzt wird.',
    servicesHeading: 'Leistungen',
    s1: 'Operations',
    s2: 'KI-Strategie',
    s3: 'Workflows',
    s4: 'Entwicklung',
    companyHeading: 'Unternehmen',
    c1: 'Über uns',
    c2: 'Fallstudien',
    c3: 'Kontakt',
    c4: 'Karriere',
    copyright: '© 2026 CherryBit. Alle Rechte vorbehalten.',
  },
};

export const translations: Record<Language, Translations> = { en, sl, de };
