import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

export function WhyCherryBit() {
  const { t } = useLanguage();
  const { whyCherryBit: wc } = t;

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl mb-6">
              {wc.headingPre}
              <span className="text-[#fe3e77]">CherryBit</span>
              {wc.headingPost}
            </h2>
            <p className="text-xl text-slate-600 mb-8">{wc.subtitle}</p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {wc.body}
            </p>

            <div className="space-y-4">
              {wc.points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-[#31d17f] rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg text-slate-700">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative bg-white rounded-3xl p-12 shadow-xl">
              {/* Flow diagram */}
              <svg viewBox="0 0 400 400" className="w-full h-auto">
                {/* Vertical flow */}
                <motion.line
                  x1="200"
                  y1="50"
                  x2="200"
                  y2="350"
                  stroke="#E8E8E8"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                />

                {/* Strategy node */}
                <motion.g
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <circle cx="200" cy="80" r="30" fill="#F3F4F6" />
                  <circle cx="200" cy="80" r="20" fill="#ff9eb6" />
                  <text
                    x="200"
                    y="85"
                    textAnchor="middle"
                    fill="white"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    {wc.strategyLetter}
                  </text>
                </motion.g>
                <motion.text
                  x="250"
                  y="88"
                  fontSize="16"
                  fill="#1E293B"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  {wc.svgStrategy}
                </motion.text>

                {/* Build node */}
                <motion.g
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                >
                  <circle cx="200" cy="200" r="35" fill="#F3F4F6" />
                  <circle cx="200" cy="200" r="25" fill="#fe3e77" />
                  <text
                    x="200"
                    y="207"
                    textAnchor="middle"
                    fill="white"
                    fontSize="14"
                    fontWeight="bold"
                  >
                    {wc.buildLetter}
                  </text>
                </motion.g>
                <motion.text
                  x="250"
                  y="208"
                  fontSize="16"
                  fill="#1E293B"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 }}
                >
                  {wc.svgBuild}
                </motion.text>

                {/* Deploy node */}
                <motion.g
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.0 }}
                >
                  <circle cx="200" cy="320" r="30" fill="#F3F4F6" />
                  <circle cx="200" cy="320" r="20" fill="#ff9eb6" />
                  <text
                    x="200"
                    y="325"
                    textAnchor="middle"
                    fill="white"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    {wc.deployLetter}
                  </text>
                </motion.g>
                <motion.text
                  x="250"
                  y="328"
                  fontSize="16"
                  fill="#1E293B"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 }}
                >
                  {wc.svgDeploy}
                </motion.text>

                {/* Connection arrows */}
                <motion.path
                  d="M 200 110 L 200 165"
                  stroke="#C2185B"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                />
                <motion.path
                  d="M 200 235 L 200 290"
                  stroke="#C2185B"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                />

                <defs>
                  <marker
                    id="arrowhead"
                    markerWidth="10"
                    markerHeight="10"
                    refX="5"
                    refY="5"
                    orient="auto"
                  >
                    <polygon points="0 0, 10 5, 0 10" fill="#C2185B" />
                  </marker>
                </defs>
              </svg>

              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-100/20 to-transparent rounded-3xl -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
