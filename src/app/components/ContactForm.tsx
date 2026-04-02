import { motion, AnimatePresence } from 'motion/react';
import {
  Send,
  User,
  Mail,
  Building,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../../i18n/LanguageContext';

// ─── EmailJS credentials ───────────────────────────────────────────────────
// Fill these in after setting up your EmailJS account (see README or instructions).
const EMAILJS_SERVICE_ID = 'cherryBit';
const EMAILJS_TEMPLATE_ID = 'template_yyushpd';
const EMAILJS_PUBLIC_KEY = 'UKdtmwrM4IOpiblze';
// ──────────────────────────────────────────────────────────────────────────

type Status = 'idle' | 'loading' | 'success' | 'error';

export function ContactForm() {
  const { t } = useLanguage();
  const c = t.contact;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          message: formData.message,
          to_email: 'sara.verhnjak@gmail.com',
        },
        EMAILJS_PUBLIC_KEY,
      );
      setStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-6">{c.heading}</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">{c.body}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200"
            >
              <div className="space-y-6">
                {/* Name field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    {c.nameLabel} *
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                      <User className="w-5 h-5 text-slate-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C2185B] focus:border-transparent transition-all"
                      placeholder={c.namePlaceholder}
                    />
                  </div>
                </div>

                {/* Email field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    {c.emailLabel} *
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                      <Mail className="w-5 h-5 text-slate-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C2185B] focus:border-transparent transition-all"
                      placeholder={c.emailPlaceholder}
                    />
                  </div>
                </div>

                {/* Company field */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    {c.companyLabel}
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                      <Building className="w-5 h-5 text-slate-400" />
                    </div>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C2185B] focus:border-transparent transition-all"
                      placeholder={c.companyPlaceholder}
                    />
                  </div>
                </div>

                {/* Message field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    {c.messageLabel} *
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-4">
                      <MessageSquare className="w-5 h-5 text-slate-400" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C2185B] focus:border-transparent transition-all resize-none"
                      placeholder={c.messagePlaceholder}
                    />
                  </div>
                </div>

                {/* Status banners */}
                <AnimatePresence mode="wait">
                  {status === 'success' && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700"
                    >
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm font-medium">
                        {c.successMessage}
                      </span>
                    </motion.div>
                  )}
                  {status === 'error' && (
                    <motion.div
                      key="error"
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700"
                    >
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm font-medium">
                        {c.errorMessage}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={status !== 'loading' ? { scale: 1.02 } : {}}
                  whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
                  className="w-full py-4 bg-[#C2185B] text-white rounded-xl font-medium flex items-center justify-center gap-2 shadow-lg shadow-pink-500/25 hover:shadow-xl hover:shadow-pink-500/30 transition-shadow disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      {c.submit}
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Right side - Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:pt-8"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl mb-4">{c.nextHeading}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-pink-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-[#C2185B] font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{c.step1Title}</h4>
                      <p className="text-slate-600">{c.step1Body}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-pink-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-[#C2185B] font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{c.step2Title}</h4>
                      <p className="text-slate-600">{c.step2Body}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-pink-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-[#C2185B] font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{c.step3Title}</h4>
                      <p className="text-slate-600">{c.step3Body}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl p-8 border bg-[#e8f8ee]">
                <h3 className="text-xl mb-4">{c.responseTitle}</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-[#31d17f]">24</span>
                  <span className="text-slate-600">{c.responseUnit}</span>
                </div>
                <p className="text-slate-600">{c.responseBody}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
