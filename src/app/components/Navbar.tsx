import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import type { Language } from '../../i18n/translations';

const LANGUAGES: { code: Language; flag: string; name: string }[] = [
  { code: 'en', flag: '🇬🇧', name: 'English' },
  { code: 'sl', flag: '🇸🇮', name: 'Slovenščina' },
  { code: 'de', flag: '🇩🇪', name: 'Deutsch' },
];

function LanguageDropdown() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = LANGUAGES.find((l) => l.code === language)!;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium text-slate-700"
      >
        <span>{current.flag}</span>
        <span>{current.name}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-44 bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden z-50"
          >
            {LANGUAGES.map(({ code, flag, name }) => (
              <li key={code}>
                <button
                  onClick={() => {
                    setLanguage(code);
                    setOpen(false);
                  }}
                  className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors ${
                    language === code
                      ? 'bg-pink-50 text-[#C2185B] font-medium'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span className="text-base">{flag}</span>
                  <span>{name}</span>
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200/50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={`${import.meta.env.BASE_URL}logo_text.png`}
              alt="CherryBit"
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            {/* <a
              href="#services"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              {t.nav.services}
            </a>
            <a
              href="#process"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              {t.nav.process}
            </a>
            <a
              href="#packages"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              {t.nav.packages}
            </a>
            <a
              href="#about"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              {t.nav.about}
            </a> */}

            {/* Language switcher */}
            <LanguageDropdown />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-6 py-2.5 bg-[#C2185B] text-white rounded-lg font-medium shadow-lg shadow-pink-500/25 hover:shadow-xl hover:shadow-pink-500/30 transition-shadow"
            >
              {t.nav.getStarted}
            </motion.button>
          </div>

          {/* Mobile right side: language switcher + hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageDropdown />
            {/* <button
              onClick={() => setIsOpen((v) => !v)}
              className="p-2 text-slate-600 hover:text-slate-900"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button> */}
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-white border-t border-slate-200/50"
          >
            <nav className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
              {[
                { href: '#services', label: t.nav.services },
                { href: '#process', label: t.nav.process },
                { href: '#packages', label: t.nav.packages },
                { href: '#about', label: t.nav.about },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg text-slate-700 hover:text-slate-900 transition-colors py-1"
                >
                  {label}
                </a>
              ))}
              <button
                onClick={() => {
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' });
                  setIsOpen(false);
                }}
                className="mt-2 w-full py-3 bg-[#C2185B] text-white rounded-xl font-medium shadow-lg shadow-pink-500/25"
              >
                {t.nav.getStarted}
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
