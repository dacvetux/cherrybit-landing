import { motion } from 'motion/react';
import { CheckCircle2, Star } from 'lucide-react';

export function Packages() {
  const packages = [
    {
      name: 'Operational Review',
      description: 'Comprehensive audit of your current systems',
      features: [
        'Process mapping & analysis',
        'Bottleneck identification',
        'Quick-win recommendations',
        'Priority roadmap',
      ],
      duration: '2-3 weeks',
      featured: false,
    },
    {
      name: 'AI Readiness',
      description: 'Identify where AI can transform your operations',
      features: [
        'AI opportunity assessment',
        'Use case prioritization',
        'Implementation roadmap',
        'Proof of concept',
      ],
      duration: '3-4 weeks',
      featured: false,
    },
    {
      name: 'Workflow Sprint',
      description: 'Design and deploy one optimized workflow end-to-end',
      features: [
        'Full workflow redesign',
        'Tool integration & automation',
        'Team training & documentation',
        'Performance tracking setup',
      ],
      duration: '4-6 weeks',
      featured: true,
    },
    {
      name: 'Digital Build',
      description: 'Custom software tailored to your exact needs',
      features: [
        'Requirements & architecture',
        'Full development & testing',
        'Deployment & monitoring',
        'Ongoing support & iteration',
      ],
      duration: '6-12 weeks',
      featured: false,
    },
  ];

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
            Packages & Engagements
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Fixed scope, clear deliverables. Choose what fits your needs, or let's build something custom.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className={`relative bg-white p-8 rounded-2xl border-2 transition-all ${
                pkg.featured 
                  ? 'border-[#C2185B] shadow-xl shadow-pink-500/10' 
                  : 'border-slate-200 hover:border-pink-200'
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-[#C2185B] to-[#E91E63] text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1 shadow-lg">
                    <Star className="w-4 h-4 fill-white" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl mb-2">{pkg.name}</h3>
                <p className="text-slate-600">{pkg.description}</p>
              </div>
              
              <div className="mb-6">
                <div className="inline-block bg-pink-50 text-[#C2185B] px-3 py-1 rounded-lg text-sm font-medium">
                  {pkg.duration}
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#C2185B] flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                className={`w-full py-3 rounded-xl font-medium transition-all ${
                  pkg.featured
                    ? 'bg-[#C2185B] text-white hover:bg-[#A01650] shadow-lg shadow-pink-500/25'
                    : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                }`}
              >
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
