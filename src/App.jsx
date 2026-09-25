import { destinations } from './content.js';
import { useEffect, useRef, useState } from 'react';
const logo = '/cherrybit-logo.png';
import Cursor from './Cursor';
import './styles_v2.css';

const opening = 'Serious engineering.';
const continuation = 'With a ';
const cherry = 'cherry on top.';
const headline = opening + continuation + cherry;


export default function App() {
  const [phase, setPhase] = useState('intro');
  const [length, setLength] = useState(0);
  const page = useRef(null);
  const [view, setView] = useState('top');
  const panels = useRef({});

  function navigate(event, destination) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    window.location.hash = destination;
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
    const syncHash = () => {
      const destination = window.location.hash.slice(1);
      if (destination === 'top' || destinations.some(({ id }) => id === destination)) {
        setView(destination);
        setLength(headline.length);
        setPhase('ready');
      }
    };
    syncHash();
    window.addEventListener('hashchange', syncHash);
    return () => window.removeEventListener('hashchange', syncHash);
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        window.location.hash = 'top';
        setView('top');
      }
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

      <div className="page-viewport" inert={phase === 'intro'} aria-hidden={phase === 'intro'}>
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
    </div>
  );
}

