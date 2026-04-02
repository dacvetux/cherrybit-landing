import { motion } from 'motion/react';
import {
  BarChart3,
  Brain,
  GitBranch,
  Code2,
  Workflow,
  Database,
  Gauge,
} from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

const SERVICE_ICONS = [
  BarChart3,
  Workflow,
  Brain,
  Code2,
  Database,
  GitBranch,
  Gauge,
];

export function Services() {
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
          <h2 className="text-4xl lg:text-5xl mb-6">{t.services.heading}</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t.services.body}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service, index) => {
            const Icon = SERVICE_ICONS[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{
                  y: -6,
                  boxShadow: '0 20px 40px rgba(194, 24, 91, 0.15)',
                }}
                className="group relative bg-white p-8 rounded-2xl border border-slate-200 hover:border-pink-200 transition-all cursor-pointer overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-[#C2185B]" />
                  </div>
                  <h3 className="text-xl mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
