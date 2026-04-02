import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-24">
      {/* Background gradient glow */}
      <motion.div
        className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full blur-3xl"
        style={{
          background:
            'color-mix(in oklab, oklch(0.76 0.17 155.08) 30%, transparent)',
        }}
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 40, 0],
          y: [0, -30, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-6">
              <span className="block text-6xl lg:text-7xl tracking-tight mb-2">
                {t.hero.line1}
              </span>
              <span className="block text-6xl lg:text-7xl tracking-tight mb-2">
                {t.hero.line2}
              </span>
              <span className="block text-6xl lg:text-7xl tracking-tight text-[#fe3e77]">
                {t.hero.line3}
              </span>
            </h1>

            <p className="text-xl text-slate-600 mb-10 max-w-xl">
              {t.hero.body}
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="px-8 py-4 bg-[#C2185B] text-white rounded-xl font-medium flex items-center gap-2 shadow-lg shadow-pink-500/25 hover:shadow-xl hover:shadow-pink-500/30 transition-shadow"
              >
                {t.hero.bookCall}
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Abstract workflow diagram */}
              <svg viewBox="0 0 500 500" className="w-full h-auto">
                {/* Central cherry node */}
                <motion.circle
                  cx="250"
                  cy="250"
                  r="40"
                  fill="#ff9eb6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                />
                <motion.circle
                  cx="230"
                  cy="230"
                  r="35"
                  fill="#fe3e77"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                />

                {/* Connection lines */}
                <motion.line
                  x1="250"
                  y1="250"
                  x2="150"
                  y2="150"
                  stroke="#C2185B"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
                <motion.line
                  x1="250"
                  y1="250"
                  x2="350"
                  y2="150"
                  stroke="#C2185B"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                />
                <motion.line
                  x1="250"
                  y1="250"
                  x2="150"
                  y2="350"
                  stroke="#C2185B"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
                <motion.line
                  x1="250"
                  y1="250"
                  x2="350"
                  y2="350"
                  stroke="#C2185B"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                />

                {/* Outer nodes */}
                <motion.circle
                  cx="150"
                  cy="150"
                  r="25"
                  fill="white"
                  stroke="#C2185B"
                  strokeWidth="3"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 1 }}
                />
                <motion.circle
                  cx="350"
                  cy="150"
                  r="25"
                  fill="white"
                  stroke="#C2185B"
                  strokeWidth="3"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.1 }}
                />
                <motion.circle
                  cx="150"
                  cy="350"
                  r="25"
                  fill="white"
                  stroke="#C2185B"
                  strokeWidth="3"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.2 }}
                />
                <motion.circle
                  cx="350"
                  cy="350"
                  r="25"
                  fill="white"
                  stroke="#C2185B"
                  strokeWidth="3"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.3 }}
                />

                {/* Grid pattern in background */}
                <defs>
                  <pattern
                    id="grid"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="20" cy="20" r="1" fill="#E8E8E8" />
                  </pattern>
                </defs>
                <rect
                  width="500"
                  height="500"
                  fill="url(#grid)"
                  opacity="0.5"
                />
              </svg>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-300/20 to-purple-300/20 rounded-3xl blur-2xl -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
