import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from 'react';
import { translations } from './translations';
import type { Language, Translations } from './translations';

const SUPPORTED: Language[] = ['en', 'sl', 'de'];
const STORAGE_KEY = 'cherrybit-lang';

function detectLanguage(): Language {
  // 1. Persisted user choice
  const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
  if (stored && SUPPORTED.includes(stored)) return stored;

  // 2. Browser preference — check each navigator.languages entry
  for (const tag of navigator.languages ?? [navigator.language]) {
    const base = tag.split('-')[0].toLowerCase() as Language;
    if (SUPPORTED.includes(base)) return base;
  }

  return 'en';
}

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(detectLanguage);

  const setLanguage = useCallback((lang: Language) => {
    localStorage.setItem(STORAGE_KEY, lang);
    setLanguageState(lang);
  }, []);

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t: translations[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}
