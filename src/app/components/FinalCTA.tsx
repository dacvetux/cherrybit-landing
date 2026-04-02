import { motion } from 'motion/react';
import { ArrowRight, Mail } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

export function FinalCTA() {
  const { t } = useLanguage();

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-[#C2185B]"></div>

      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: '1s' }}
      ></div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Cherry icon made of nodes */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="mb-8 flex justify-center"
          >
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              className="opacity-90"
            >
              {/* Two cherry circles made of connected dots */}
              <circle
                cx="20"
                cy="35"
                r="14"
                fill="none"
                stroke="#E91E63"
                strokeWidth="2"
                strokeDasharray="3,3"
              />
              <circle
                cx="40"
                cy="35"
                r="14"
                fill="none"
                stroke="#E91E63"
                strokeWidth="2"
                strokeDasharray="3,3"
              />

              {/* Dots forming cherries */}
              <circle cx="20" cy="35" r="3" fill="#FF4081" />
              <circle cx="14" cy="30" r="2" fill="#FF4081" />
              <circle cx="26" cy="30" r="2" fill="#FF4081" />
              <circle cx="14" cy="40" r="2" fill="#FF4081" />
              <circle cx="26" cy="40" r="2" fill="#FF4081" />

              <circle cx="40" cy="35" r="3" fill="#FF4081" />
              <circle cx="34" cy="30" r="2" fill="#FF4081" />
              <circle cx="46" cy="30" r="2" fill="#FF4081" />
              <circle cx="34" cy="40" r="2" fill="#FF4081" />
              <circle cx="46" cy="40" r="2" fill="#FF4081" />

              {/* Stem */}
              <path
                d="M 20 21 Q 25 10, 30 5"
                stroke="#FF4081"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M 40 21 Q 35 10, 30 5"
                stroke="#FF4081"
                strokeWidth="2"
                fill="none"
              />
              <circle cx="30" cy="5" r="2" fill="#FF4081" />
            </svg>
          </motion.div>

          <h2 className="text-5xl lg:text-6xl text-white mb-6">
            {t.finalCta.heading1} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-pink-100">
              {t.finalCta.heading2}
            </span>
          </h2>

          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            {t.finalCta.body}
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-slate-900 rounded-xl font-medium flex items-center gap-2 shadow-2xl hover:shadow-pink-500/25 transition-shadow"
            >
              {t.finalCta.bookCall}
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent text-white border-2 border-white/30 rounded-xl font-medium flex items-center gap-2 hover:border-white/50 transition-colors backdrop-blur-sm"
            >
              <Mail className="w-5 h-5" />
              {t.finalCta.sendInquiry}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
