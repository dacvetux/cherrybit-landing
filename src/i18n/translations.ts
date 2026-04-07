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
  heading1: 'From operational friction to',
  heading2: 'execution clarity',
  body: 'CherryBit combines operational consulting, process optimisation, AI strategy and digital delivery to help teams work with more clarity, less friction and better control.',
  benefits: [
    {
      title: 'Business-first approach',
      description: 'We start with operational reality, not with technology for its own sake.',
    },
    {
      title: 'From diagnosis to delivery',
      description: 'We assess the problem, define priorities and help implement the right solution.',
    },
    {
      title: 'Practical AI',
      description: 'We focus on AI use cases that improve support, knowledge and communication workflows.',
    },
    {
      title: 'Clearer execution',
      description: 'Better ownership, smoother handoffs and digital tools that support real daily work.',
    },
  ],
},
services: {
  heading: 'What we do',
  body: 'CherryBit helps companies improve operations, redesign workflows, introduce AI pragmatically and build digital tools that support everyday execution.',
  items: [
    {
      title: 'Operations & Workflow Consulting',
      description:
        'We assess operating models, service workflows, ownership structures and delivery logic to improve clarity, speed and control.',
    },
    {
      title: 'Process Optimisation',
      description:
        'We identify bottlenecks, reduce friction between teams and redesign processes for more consistent execution.',
    },
    {
      title: 'AI Strategy & Consulting',
      description:
        'We define practical AI use cases for support, knowledge and communication processes, with a clear business rationale.',
    },
    {
      title: 'Digital Workflow Solutions',
      description:
        'We design and build internal tools, dashboards, portals and workflow applications that support daily operations.',
    },
    {
      title: 'Custom Software Development',
      description:
        'We develop tailored software solutions for operational, service and product needs instead of forcing teams into generic tools.',
    },
    {
      title: 'Front-End & UX Delivery',
      description:
        'We deliver clear, maintainable and workflow-oriented interfaces for business applications and internal systems.',
    },
    {
      title: 'Communication Support',
      description:
        'We help structure messaging and communication around services, change initiatives and digital projects where clarity matters.',
    },
  ],
},
whyCherryBit: {
  headingPre: 'Why ',
  headingPost: '?',
  subtitle: 'Because strategy without execution rarely changes anything.',
  body: 'CherryBit works at the intersection of operational understanding, process optimisation, technical delivery and communication clarity. That means we do not stop at recommendations — we help turn them into working improvements, digital tools and better day-to-day execution.',
  points: [
    'We connect consulting with implementation',
    'We understand processes, teams and delivery reality',
    'We approach AI pragmatically, not as a buzzword',
    'We build solutions that support real operational work',
  ],
  svgStrategy: 'Assess',
  strategyLetter: 'A',
  svgBuild: 'Improve',
  buildLetter: 'I',
  svgDeploy: 'Implement',
  deployLetter: 'M',
},
process: {
  heading: 'How we work',
  body: 'A structured engagement model that moves from operational assessment to practical implementation and measurable improvement.',
  steps: [
    {
      title: 'Assess',
      description:
        'We review operations, workflows, tools and pain points to understand where complexity, delays and friction are created.',
    },
    {
      title: 'Define',
      description:
        'We set priorities, define the right use cases and align on scope, outcomes and the most suitable delivery model.',
    },
    {
      title: 'Build / Improve',
      description:
        'We redesign workflows, introduce supporting structures or build digital solutions that improve day-to-day execution.',
    },
    {
      title: 'Scale',
      description:
        'We refine, measure and extend what works so teams can operate with more consistency, clarity and control.',
    },
  ],
},
contact: {
  heading: "Let's talk about where your operations create friction",
  body: "If you are dealing with inefficient workflows, unclear ownership, manual coordination or AI questions, send us a short note. We will come back with a concrete next step.",
  nameLabel: 'Your Name',
  namePlaceholder: 'John Doe',
  emailLabel: 'Email Address',
  emailPlaceholder: 'john@company.com',
  companyLabel: 'Company Name',
  companyPlaceholder: 'Your Company',
  messageLabel: 'What would you like to improve?',
  messagePlaceholder:
    'Describe your workflow, operational or digital challenge in a few sentences.',
  submit: 'Send Inquiry',
  nextHeading: 'What happens next?',
  step1Title: 'We review your situation',
  step1Body:
    'We look at your message and identify where CherryBit can create the most value.',
  step2Title: 'We align on the right focus',
  step2Body:
    'We suggest the most relevant next step, whether that is a diagnostic call, assessment or delivery discussion.',
  step3Title: 'You get a concrete direction',
  step3Body:
    'You receive a clearer view of what to improve, what to prioritise and how to move forward.',
  responseTitle: 'Typical response time',
  responseUnit: 'hours',
  responseBody:
    'We usually respond within one business day, often sooner.',
  testimonialBody:
    '"CherryBit helped us turn scattered operational issues into a clearer structure, better workflows and a realistic implementation path."',
  testimonialName: 'Example client quote',
  testimonialRole: 'B2B operations team',
  successMessage: "Your inquiry has been sent. We'll get back to you shortly.",
  errorMessage:
    'Something went wrong. Please try again or contact us directly.',
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
  heading1: 'Od operativnih trenj do',
  heading2: 'jasne izvedbe',
  body: 'CherryBit združuje operativno svetovanje, optimizacijo procesov, AI strategijo in digitalno izvedbo, da ekipam pomaga do večje jasnosti, manj trenja in boljšega nadzora.',
  benefits: [
    {
      title: 'Business-first pristop',
      description: 'Začnemo pri operativni realnosti podjetja, ne pri tehnologiji sami zase.',
    },
    {
      title: 'Od diagnoze do izvedbe',
      description: 'Ocenimo problem, določimo prioritete in pomagamo izvesti pravo rešitev.',
    },
    {
      title: 'Praktičen AI',
      description: 'Osredotočamo se na AI use case-e, ki izboljšajo support, knowledge in komunikacijske workflowe.',
    },
    {
      title: 'Bolj jasna izvedba',
      description: 'Boljši ownership, bolj tekoče predaje dela in digitalna orodja za realno vsakodnevno delo.',
    },
  ],
},
services: {
  heading: 'Kaj počnemo',
  body: 'CherryBit pomaga podjetjem izboljšati operacije, preoblikovati workflowe, pragmatično uvajati AI in zgraditi digitalna orodja, ki podpirajo vsakodnevno izvedbo.',
  items: [
    {
      title: 'Operativno svetovanje & workflow consulting',
      description:
        'Pregledamo operativne modele, servisne workflowe, ownership strukture in logiko izvedbe, da izboljšamo jasnost, hitrost in nadzor.',
    },
    {
      title: 'Optimizacija procesov',
      description:
        'Prepoznamo ozka grla, zmanjšamo trenja med ekipami in preoblikujemo procese za bolj konsistentno izvedbo.',
    },
    {
      title: 'AI strategija & svetovanje',
      description:
        'Opredelimo praktične AI use case-e za support, knowledge in komunikacijske procese z jasnim poslovnim razlogom.',
    },
    {
      title: 'Digitalne workflow rešitve',
      description:
        'Načrtujemo in razvijamo interna orodja, dashboarde, portale in workflow aplikacije za podporo vsakodnevnim operacijam.',
    },
    {
      title: 'Razvoj programske opreme po meri',
      description:
        'Razvijamo prilagojene programske rešitve za operativne, storitvene in produktne potrebe namesto prilagajanja dela generičnim orodjem.',
    },
    {
      title: 'Front-end & UX izvedba',
      description:
        'Izdelujemo jasne, vzdrževane in workflow-usmerjene uporabniške vmesnike za poslovne aplikacije in interne sisteme.',
    },
    {
      title: 'Komunikacijska podpora',
      description:
        'Pomagamo pri strukturi sporočil in komunikaciji storitev, sprememb in digitalnih projektov, kjer je ključna jasnost.',
    },
  ],
},
whyCherryBit: {
  headingPre: 'Zakaj ',
  headingPost: '?',
  subtitle: 'Ker strategija brez izvedbe praviloma ne spremeni veliko.',
  body: 'CherryBit deluje na presečišču operativnega razumevanja, optimizacije procesov, tehnične izvedbe in komunikacijske jasnosti. To pomeni, da se ne ustavimo pri priporočilih, temveč jih pomagamo pretvoriti v dejanske izboljšave, digitalna orodja in boljšo vsakodnevno izvedbo.',
  points: [
    'Povezujemo svetovanje in implementacijo',
    'Razumemo procese, ekipe in realnost izvedbe',
    'AI obravnavamo pragmatično, ne kot modno besedo',
    'Gradimo rešitve za realno operativno delo',
  ],
  svgStrategy: 'Analiza',
  strategyLetter: 'A',
  svgBuild: 'Izboljšava',
  buildLetter: 'I',
  svgDeploy: 'Implementacija',
  deployLetter: 'M',
},
process: {
  heading: 'Kako delujemo',
  body: 'Strukturiran model sodelovanja, ki vodi od analize operacij do praktične implementacije in merljivih izboljšav.',
  steps: [
    {
      title: 'Analiza',
      description:
        'Pregledamo operacije, workflowe, orodja in boleče točke, da razumemo, kje nastajajo kompleksnost, zamude in trenja.',
    },
    {
      title: 'Opredelitev',
      description:
        'Določimo prioritete, opredelimo prave use case-e ter uskladimo obseg, cilje in najprimernejši delivery model.',
    },
    {
      title: 'Izvedba / Izboljšava',
      description:
        'Preoblikujemo workflowe, uvedemo podporne strukture ali razvijemo digitalne rešitve, ki izboljšajo vsakodnevno izvedbo.',
    },
    {
      title: 'Nadgradnja',
      description:
        'Izboljšave dodatno optimiziramo, merimo učinke in širimo tisto, kar deluje, da ekipe pridobijo več konsistentnosti, jasnosti in nadzora.',
    },
  ],
},
contact: {
  heading: 'Pogovorimo se o tem, kje v vaših operacijah nastaja trenje',
  body: 'Če se soočate z neučinkovitimi workflowi, nejasnim ownershipom, preveč ročnega koordiniranja ali vprašanji glede AI, nam pošljite kratek opis. Odgovorimo vam s konkretnim naslednjim korakom.',
  nameLabel: 'Vaše ime',
  namePlaceholder: 'Janez Novak',
  emailLabel: 'E-poštni naslov',
  emailPlaceholder: 'janez@podjetje.si',
  companyLabel: 'Ime podjetja',
  companyPlaceholder: 'Vaše podjetje',
  messageLabel: 'Kaj želite izboljšati?',
  messagePlaceholder:
    'V nekaj stavkih opišite vaš workflow, operativni ali digitalni izziv.',
  submit: 'Pošlji povpraševanje',
  nextHeading: 'Kaj se zgodi naprej?',
  step1Title: 'Pregledamo vašo situacijo',
  step1Body:
    'Pregledamo vaše sporočilo in ocenimo, kje lahko CherryBit ustvari največ vrednosti.',
  step2Title: 'Uskladimo pravi fokus',
  step2Body:
    'Predlagamo najprimernejši naslednji korak, naj bo to diagnostični klic, assessment ali pogovor o izvedbi.',
  step3Title: 'Dobite konkretno usmeritev',
  step3Body:
    'Dobite jasnejši pogled na to, kaj izboljšati, kaj prioritetizirati in kako nadaljevati.',
  responseTitle: 'Tipičen odzivni čas',
  responseUnit: 'ur',
  responseBody:
    'Praviloma odgovorimo v enem delovnem dnevu, pogosto prej.',
  testimonialBody:
    '"CherryBit nam je pomagal razpršene operativne težave pretvoriti v bolj jasno strukturo, boljše workflowe in realistično pot do izvedbe."',
  testimonialName: 'Primer izjave naročnika',
  testimonialRole: 'B2B operativna ekipa',
  successMessage: 'Vaše povpraševanje je poslano. Kmalu se vam oglasimo.',
  errorMessage:
    'Nekaj je šlo narobe. Poskusite znova ali nas kontaktirajte neposredno.',
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
  heading1: 'Von operativer Reibung zu',
  heading2: 'klarer Umsetzung',
  body: 'CherryBit verbindet operative Beratung, Prozessoptimierung, KI-Strategie und digitale Umsetzung, damit Teams mit mehr Klarheit, weniger Reibung und besserer Kontrolle arbeiten können.',
  benefits: [
    {
      title: 'Business-first-Ansatz',
      description: 'Wir starten bei der operativen Realität des Unternehmens, nicht bei Technologie um ihrer selbst willen.',
    },
    {
      title: 'Von der Diagnose zur Umsetzung',
      description: 'Wir bewerten das Problem, setzen Prioritäten und helfen bei der Umsetzung der richtigen Lösung.',
    },
    {
      title: 'Praktische KI',
      description: 'Wir konzentrieren uns auf KI-Anwendungsfälle, die Support-, Knowledge- und Kommunikations-Workflows verbessern.',
    },
    {
      title: 'Klarere Umsetzung',
      description: 'Bessere Verantwortlichkeiten, reibungslosere Übergaben und digitale Werkzeuge für das reale Tagesgeschäft.',
    },
  ],
},
services: {
  heading: 'Was wir tun',
  body: 'CherryBit unterstützt Unternehmen dabei, Abläufe zu verbessern, Workflows neu zu gestalten, KI pragmatisch einzuführen und digitale Werkzeuge für die tägliche Umsetzung aufzubauen.',
  items: [
    {
      title: 'Operations- & Workflow-Beratung',
      description:
        'Wir analysieren Betriebsmodelle, Service-Workflows, Verantwortlichkeiten und Delivery-Logiken, um Klarheit, Geschwindigkeit und Kontrolle zu verbessern.',
    },
    {
      title: 'Prozessoptimierung',
      description:
        'Wir identifizieren Engpässe, reduzieren Reibung zwischen Teams und gestalten Prozesse für eine konsistentere Umsetzung neu.',
    },
    {
      title: 'KI-Strategie & Beratung',
      description:
        'Wir definieren praktische KI-Anwendungsfälle für Support-, Knowledge- und Kommunikationsprozesse mit klarem Business-Nutzen.',
    },
    {
      title: 'Digitale Workflow-Lösungen',
      description:
        'Wir konzipieren und entwickeln interne Tools, Dashboards, Portale und Workflow-Anwendungen für das operative Tagesgeschäft.',
    },
    {
      title: 'Individuelle Softwareentwicklung',
      description:
        'Wir entwickeln maßgeschneiderte Softwarelösungen für operative, servicebezogene und produktbezogene Anforderungen statt Teams in generische Tools zu zwingen.',
    },
    {
      title: 'Front-End- & UX-Umsetzung',
      description:
        'Wir liefern klare, wartbare und workflow-orientierte Oberflächen für Business-Anwendungen und interne Systeme.',
    },
    {
      title: 'Kommunikationsunterstützung',
      description:
        'Wir helfen bei der Struktur von Botschaften und Kommunikation rund um Services, Veränderungen und digitale Projekte, bei denen Klarheit entscheidend ist.',
    },
  ],
},
whyCherryBit: {
  headingPre: 'Warum ',
  headingPost: '?',
  subtitle: 'Weil Strategie ohne Umsetzung in der Regel wenig verändert.',
  body: 'CherryBit arbeitet an der Schnittstelle von operativem Verständnis, Prozessoptimierung, technischer Umsetzung und kommunikativer Klarheit. Das bedeutet: Wir bleiben nicht bei Empfehlungen stehen, sondern helfen dabei, daraus konkrete Verbesserungen, digitale Werkzeuge und eine bessere tägliche Umsetzung zu machen.',
  points: [
    'Wir verbinden Beratung mit Umsetzung',
    'Wir verstehen Prozesse, Teams und die Realität der Delivery',
    'Wir betrachten KI pragmatisch, nicht als Schlagwort',
    'Wir bauen Lösungen für reale operative Arbeit',
  ],
  svgStrategy: 'Analyse',
  strategyLetter: 'A',
  svgBuild: 'Verbessern',
  buildLetter: 'V',
  svgDeploy: 'Umsetzen',
  deployLetter: 'U',
},
process: {
  heading: 'Wie wir arbeiten',
  body: 'Ein strukturiertes Vorgehensmodell, das von der operativen Analyse zur praktischen Umsetzung und messbaren Verbesserung führt.',
  steps: [
    {
      title: 'Analyse',
      description:
        'Wir prüfen Abläufe, Workflows, Tools und Pain Points, um zu verstehen, wo Komplexität, Verzögerungen und Reibung entstehen.',
    },
    {
      title: 'Definition',
      description:
        'Wir setzen Prioritäten, definieren die richtigen Use Cases und stimmen Umfang, Ziele und das passende Delivery-Modell ab.',
    },
    {
      title: 'Umsetzen / Verbessern',
      description:
        'Wir gestalten Workflows neu, führen unterstützende Strukturen ein oder entwickeln digitale Lösungen für eine bessere tägliche Umsetzung.',
    },
    {
      title: 'Skalieren',
      description:
        'Wir verfeinern, messen und erweitern, was funktioniert, damit Teams mit mehr Konsistenz, Klarheit und Kontrolle arbeiten können.',
    },
  ],
},
contact: {
  heading: 'Lassen Sie uns darüber sprechen, wo in Ihren Abläufen Reibung entsteht',
  body: 'Wenn Sie mit ineffizienten Workflows, unklaren Verantwortlichkeiten, zu viel manueller Koordination oder Fragen rund um KI zu tun haben, schicken Sie uns eine kurze Nachricht. Wir melden uns mit einem konkreten nächsten Schritt.',
  nameLabel: 'Ihr Name',
  namePlaceholder: 'Max Mustermann',
  emailLabel: 'E-Mail-Adresse',
  emailPlaceholder: 'max@unternehmen.de',
  companyLabel: 'Unternehmensname',
  companyPlaceholder: 'Ihr Unternehmen',
  messageLabel: 'Was möchten Sie verbessern?',
  messagePlaceholder:
    'Beschreiben Sie in wenigen Sätzen Ihre Workflow-, operative oder digitale Herausforderung.',
  submit: 'Anfrage senden',
  nextHeading: 'Was passiert als Nächstes?',
  step1Title: 'Wir prüfen Ihre Situation',
  step1Body:
    'Wir sehen uns Ihre Nachricht an und identifizieren, wo CherryBit den größten Mehrwert schaffen kann.',
  step2Title: 'Wir schärfen den richtigen Fokus',
  step2Body:
    'Wir schlagen den passendsten nächsten Schritt vor, ob Diagnostic Call, Assessment oder Gespräch zur Umsetzung.',
  step3Title: 'Sie erhalten eine konkrete Richtung',
  step3Body:
    'Sie bekommen ein klareres Bild davon, was verbessert, priorisiert und wie weiter vorgegangen werden sollte.',
  responseTitle: 'Typische Antwortzeit',
  responseUnit: 'Stunden',
  responseBody:
    'In der Regel antworten wir innerhalb eines Werktages, oft früher.',
  testimonialBody:
    '"CherryBit hat uns geholfen, verstreute operative Probleme in eine klarere Struktur, bessere Workflows und einen realistischen Umsetzungsweg zu überführen."',
  testimonialName: 'Beispielzitat eines Kunden',
  testimonialRole: 'B2B Operations-Team',
  successMessage: 'Ihre Anfrage wurde gesendet. Wir melden uns in Kürze.',
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
