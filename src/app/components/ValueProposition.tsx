import { motion } from 'motion/react';
import { Target, Zap, Lock, Sparkles } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

const BENEFIT_ICONS = [Target, Zap, Lock, Sparkles];

export function ValueProposition() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-6">
            {t.valueProp.heading1} <br />
            <span className="text-[#31d17f]">{t.valueProp.heading2}</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t.valueProp.body}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.valueProp.benefits.map((benefit, index) => {
            const Icon = BENEFIT_ICONS[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#C2185B]" />
                </div>
                <h3 className="text-xl mb-2">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
