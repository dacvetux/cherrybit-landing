import { motion } from 'motion/react';
import { Search, FileText, Hammer, Rocket } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

const STEP_ICONS = [Search, FileText, Hammer, Rocket];
const STEP_NUMBERS = ['01', '02', '03', '04'];

export function Process() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-6">{t.process.heading}</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t.process.body}
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-200 via-[#C2185B] to-pink-200 -translate-y-1/2"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {t.process.steps.map((step, index) => {
              const Icon = STEP_ICONS[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Card */}
                  <div className="bg-white p-8 rounded-2xl border-2 border-slate-200 hover:border-pink-200 transition-colors relative z-10">
                    {/* Number badge */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#e8f8ee] rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-[#31d17f] font-bold">
                        {STEP_NUMBERS[index]}
                      </span>
                    </div>

                    <div className="w-14 h-14 bg-pink-50 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-[#C2185B]" />
                    </div>

                    <h3 className="text-2xl mb-3">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Connecting dot for desktop */}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
