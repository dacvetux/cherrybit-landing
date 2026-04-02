import { Linkedin, Twitter, Github } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="CherryBit"
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-slate-400 max-w-md leading-relaxed">
              {f.tagline}
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              {f.servicesHeading}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {f.s1}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {f.s2}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {f.s3}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {f.s4}
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              {f.companyHeading}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {f.c1}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {f.c2}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {f.c3}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {f.c4}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">{f.copyright}</p>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
