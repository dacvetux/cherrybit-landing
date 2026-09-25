import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [status, setStatus] = useState('idle');
  const sending = useRef(false);

  async function submit(event) {
    event.preventDefault();
    if (sending.current) return;
    const form = event.currentTarget;
    const fields = new FormData(form);
    const email = String(fields.get('email')).trim();
    const phone = String(fields.get('phone')).trim();
    const message = String(fields.get('message')).trim();
    if (!message) {
      form.elements.message.setCustomValidity('Please enter a message.');
      form.elements.message.reportValidity();
      return;
    }
    sending.current = true;
    setStatus('sending');
    try {
      // Reuse the site's existing EmailJS service and template. Include phone
      // in the message too, so it arrives without changing the hosted template.
      await emailjs.send('cherryBit', 'template_yyushpd', {
        from_name: email,
        from_email: email,
        reply_to: email,
        phone,
        company: '',
        message: `${message}\n\nEmail: ${email}\nPhone: ${phone || 'Not provided'}`,
        to_email: 'sara.verhnjak@gmail.com',
      }, 'UKdtmwrM4IOpiblze');
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    } finally {
      sending.current = false;
    }
  }

  return (
    <form className="contact-form" onSubmit={submit} aria-busy={status === 'sending'}>
      <fieldset disabled={status === 'sending'}>
        <label htmlFor="contact-email">Email</label>
        <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@company.com" />
        <label htmlFor="contact-phone">Phone <span>(optional)</span></label>
        <input id="contact-phone" name="phone" type="tel" autoComplete="tel" maxLength={50} placeholder="Your phone number" />
        <label htmlFor="contact-message">Message</label>
        <textarea id="contact-message" name="message" required rows={5} maxLength={5000} placeholder="A little about your project…"
          onChange={(event) => event.currentTarget.setCustomValidity('')} />
        <button type="submit">{status === 'sending' ? 'Sending…' : 'Send message'} <span aria-hidden="true">↗</span></button>
      </fieldset>
      <div className="contact-status" role="status" aria-live="polite">
        {status === 'success' && 'Thanks for reaching out. Your message has been sent.'}
        {status === 'error' && 'Your message could not be sent. Please try again.'}
      </div>
    </form>
  );
}
