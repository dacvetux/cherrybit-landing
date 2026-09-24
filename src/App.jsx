import { useEffect, useRef, useState } from 'react';
import logo from './assets/cherrybit-logo.png';
import Cursor from './Cursor';
import './styles_v2.css';

const opening = 'Serious engineering.';
const continuation = 'With a ';
const cherry = 'cherry on top.';
const headline = opening + continuation + cherry;
const destinations = [
  {
    id: 'work',
    label: 'Work',
    title: 'Different domains. The same focus.',
    intro:
      'Frontend engineering for products with complex data, integrations and real operational use.',
    items: [
      [
        'Real-time logistics platforms',
        'Complex operational interfaces for shipment planning, scheduling, vehicle tracking, mapping and live data — designed for information-dense, time-critical workflows.',
      ],
      [
        'Property & investment products',
        'Housing management and property-investment applications combining business rules, calculations and data-heavy workflows with clear, practical interfaces.',
      ],
      [
        'Connected device experiences',
        'Interfaces for connected IoT products, bringing device control, state and real-time interaction into intuitive web-based experiences.',
      ],
      [
        'Business & commerce solutions',
        'Digital CMR, ERP, e-commerce and CMS solutions built around real business processes — from focused customer-facing experiences to internal operational tools.',
      ],
    ],
  },
  {
    id: 'services',
    label: 'What we do',
    title: 'Move your product forward.',
    intro:
      'Hands-on engineering with product thinking. Reliable interfaces that make complex workflows feel simple.',
    items: [
      [
        'Build',
        'Greenfield frontend applications with solid technical foundations and room to grow.',
      ],
      [
        'Evolve',
        'Modernise mature codebases, untangle complexity and move products forward safely.',
      ],
      [
        'Connect',
        'Real-time interfaces, APIs, maps and operational data that stay understandable.',
      ],
      [
        'Ship with confidence',
        'Automated testing and pragmatic engineering practices built into delivery.',
      ],
    ],
  },
  {
    id: 'expertise',
    label: 'Expertise',
    title: 'The product is the point.',
    intro:
      'Strong frontend foundations, real-world production experience and the range to choose what fits the problem.',
    items: [
      ['Frontend engineering', 'TypeScript · Angular · React · Next.js · RxJS'],
      [
        'Real-time & data',
        'WebSockets · REST APIs · Real-time systems · Data-intensive UI',
      ],
      [
        'Interface & quality',
        'Styled Components · Angular Material · Tailwind CSS · Ionic · Responsive UI · Design systems',
      ],
      ['Quality & reliability', 'Playwright · Cypress · Jest · E2E automation'],
    ],
  },
];

export default function App() {
  const [phase, setPhase] = useState('intro');
  const [length, setLength] = useState(0);
  const page = useRef(null);
  const [view, setView] = useState('top');
  const panels = useRef({});

  function navigate(event, destination) {
    event.preventDefault();
    setView(destination);
  }

  useEffect(() => {
    if (phase !== 'ready') return;
    const timer = window.setTimeout(
      () => {
        const target = view === 'top' ? page.current : panels.current[view];
        target?.focus({ preventScroll: true });
      },
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 850,
    );
    return () => window.clearTimeout(timer);
  }, [view, phase]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setView('top');
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    if (phase !== 'entering') return;
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    const timer = window.setTimeout(
      () => {
        if (reducedMotion) {
          setLength(headline.length);
          setPhase('ready');
        } else {
          setPhase('typing');
        }
        page.current?.focus({ preventScroll: true });
      },
      reducedMotion ? 0 : 1100,
    );
    return () => window.clearTimeout(timer);
  }, [phase]);

  useEffect(() => {
    if (phase !== 'typing') return;
    const timer = window.setTimeout(() => {
      const nextLength = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? headline.length
        : length + 1;
      setLength(nextLength);
      if (nextLength >= headline.length) setPhase('ready');
    }, length === opening.length ? 480 : 65);
    return () => window.clearTimeout(timer);
  }, [phase, length]);

  return (
    <div className={`experience is-${phase} view-${view}`}>
      <Cursor />
      {view === 'top' && (
        <header
          className="hero-identity"
          inert={phase !== 'ready'}
          aria-hidden={phase !== 'ready'}
        >
          <a
            className="hero-brand"
            href="#top"
            aria-label="CherryBit home"
            onClick={(event) => navigate(event, 'top')}
          >
            <img src={logo} alt="" width="64" height="64" />
          </a>
          <a className="hero-contact" href="mailto:hello@cherrybit.dev">
            Let’s talk <span aria-hidden="true">↗</span>
          </a>
        </header>
      )}
      {phase === 'intro' && (
        <div className="entry-screen">
          <button className="entry-button" onClick={() => setPhase('entering')}>
            <img src={logo} alt="CherryBit" width="144" height="144" />
            <span>Enter</span>
          </button>
        </div>
      )}

      {phase !== 'intro' && (
        <div className="page-viewport">
          <main
            className="revealed-page home-panel"
            ref={page}
            tabIndex={-1}
            aria-label="CherryBit"
            inert={view !== 'top'}
          >
            <section id="top" className="headline-stage">
              <h1 aria-label="Serious engineering. With a cherry on top.">
                <span className="headline-visual" aria-hidden="true">
                  {/* Reserve the final text's space so typing never shifts the layout. */}
                  <span className="headline-layout">
                    {opening}
                    <br />
                    {continuation}
                    <em>{cherry}</em>
                  </span>
                  <span className="headline-typed">
                    {opening.slice(0, length)}
                    {length >= opening.length && <br />}
                    {continuation.slice(
                      0,
                      Math.max(0, length - opening.length),
                    )}
                    <em>
                      {cherry.slice(
                        0,
                        Math.max(
                          0,
                          length - opening.length - continuation.length,
                        ),
                      )}
                    </em>
                    {phase === 'typing' && <span className="typing-cursor" />}
                  </span>
                </span>
              </h1>
              {phase === 'ready' && (
                <nav
                  className="direction-navigation"
                  aria-label="Explore CherryBit"
                >
                  <a
                    className="direction-link direction-work"
                    href="#work"
                    onClick={(event) => navigate(event, 'work')}
                  >
                    Work <span aria-hidden="true">↑</span>
                  </a>
                  <a
                    className="direction-link direction-services"
                    href="#services"
                    onClick={(event) => navigate(event, 'services')}
                  >
                    What we do <span aria-hidden="true">↓</span>
                  </a>
                  <a
                    className="direction-link direction-expertise"
                    href="#expertise"
                    onClick={(event) => navigate(event, 'expertise')}
                  >
                    Expertise <span aria-hidden="true">↑</span>
                  </a>
                </nav>
              )}
            </section>
          </main>
          {destinations.map(({ id, label, title, intro, items }) => (
            <section
              key={id}
              id={id}
              className={`destination-panel panel-${id}`}
              inert={view !== id}
              tabIndex={-1}
              aria-labelledby={`${id}-title`}
              ref={(element) => {
                panels.current[id] = element;
              }}
            >
              <a
                className="back-link"
                href="#top"
                onClick={(event) => navigate(event, 'top')}
              >
                <span aria-hidden="true">↑</span>
                Back to home
              </a>
              <div className="destination-content">
                <div className="destination-body">
                  <p className="destination-label">{label}</p>
                  <h2 id={`${id}-title`}>{title}</h2>
                  <p className="destination-intro">{intro}</p>
                  <div className="destination-grid">
                    {items.map(([name, description], index) => (
                      <article key={name}>
                        <span className="destination-number">0{index + 1}</span>
                        <h3>{name}</h3>
                        <p>{description}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}

