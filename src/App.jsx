import { destinations } from './content.js';
import { useCallback, useEffect, useRef, useState } from 'react';
const logo = '/cherrybit-logo.png';
import Cursor from './Cursor';
import useSwipeNavigation from './useSwipeNavigation.js';
import ContactForm from './ContactForm.jsx';
import './styles_v2.css';

const opening = 'Serious engineering.';
const continuation = 'With a ';
const cherry = 'cherry on top.';
const headline = opening + continuation + cherry;

function updateSectionUrl(destination) {
  const hash = `#${destination}`;
  if (window.location.hash !== hash) {
    // Preserve history without native anchor scrolling fighting panel transforms.
    window.history.pushState(null, '', hash);
  }
}

export default function App() {
  const [phase, setPhase] = useState('intro');
  const [length, setLength] = useState(0);
  const page = useRef(null);
  const [view, setView] = useState('top');
  const panels = useRef({});
  const viewport = useRef(null);
  const changeView = useCallback((destination) => {
    updateSectionUrl(destination);
    setView(destination);
  }, []);
  useSwipeNavigation(viewport, view, phase === 'ready', changeView);

  function navigate(event, destination) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    updateSectionUrl(destination);
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
    const syncHash = (event) => {
      const destination = window.location.hash.slice(1) || 'top';
      // A fresh visit still starts at the Enter screen; history can return home.
      if (!event && !window.location.hash) return;
      if (destination === 'top' || destination === 'contact' || destinations.some(({ id }) => id === destination)) {
        setView(destination);
        setLength(headline.length);
        setPhase('ready');
      }
    };
    syncHash();
    window.addEventListener('hashchange', syncHash);
    window.addEventListener('popstate', syncHash);
    return () => {
      window.removeEventListener('hashchange', syncHash);
      window.removeEventListener('popstate', syncHash);
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        updateSectionUrl('top');
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
      {phase === 'intro' && (
        <div className="entry-screen">
          <button className="entry-button" onClick={() => setPhase('entering')}>
            <img src={logo} alt="CherryBit" width="144" height="144" />
            <span>Enter</span>
          </button>
        </div>
      )}

      <div ref={viewport} className="page-viewport" inert={phase === 'intro'} aria-hidden={phase === 'intro'}>
          <main
            className="revealed-page home-panel"
            ref={page}
            tabIndex={-1}
            aria-label="CherryBit"
            inert={view !== 'top'}
          >
            <section id="top" className="headline-stage">
              <div className="headline-group">
                <img className="headline-logo" src={logo} alt="CherryBit" width="100" height="100" />
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
              </div>
                <nav
                  className="direction-navigation"
                  aria-label="Explore CherryBit"
                  inert={phase !== 'ready'}
                  aria-hidden={phase !== 'ready'}
                >
                  <a className="direction-link direction-contact" href="#contact" onClick={(event) => navigate(event, 'contact')}>
                    Let’s talk <span aria-hidden="true">↑</span>
                  </a>
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
            </section>
          </main>
          <section id="contact" className="destination-panel panel-contact" inert={view !== 'contact'} tabIndex={-1}
            aria-labelledby="contact-title" ref={(element) => { panels.current.contact = element; }}>
            <a className="back-link" href="#top" onClick={(event) => navigate(event, 'top')}>
              <span aria-hidden="true">↓</span>Back to home
            </a>
            <div className="destination-content">
              <div className="destination-body contact-body">
                <p className="destination-label">Start a conversation</p>
                <h2 id="contact-title">Let’s talk.</h2>
                <p className="destination-intro">Tell us what you’re building and how we can help.</p>
                <ContactForm />
              </div>
            </div>
          </section>
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
