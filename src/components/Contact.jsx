import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Mail, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import { profile } from '../data/content'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const contactRows = [
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: profile.phone,
    href: `https://wa.me/${profile.whatsapp}`,
  },
  {
    icon: Mail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: MapPin,
    label: 'Address',
    value: profile.location,
    href: null,
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'sheikh-shabbir',
    href: profile.linkedin,
  },
]

function Field({ label, ...props }) {
  return (
    <label className="block">
      <span className="font-mono text-[11px] uppercase tracking-widest2 text-steel">{label}</span>
      {props.as === 'textarea' ? (
        <textarea
          {...props}
          className="mt-2 w-full bg-transparent border-b border-ink-line focus:border-brass outline-none py-2.5 text-paper text-[15px] placeholder:text-steel/40 transition-colors resize-none"
        />
      ) : (
        <input
          {...props}
          className="mt-2 w-full bg-transparent border-b border-ink-line focus:border-brass outline-none py-2.5 text-paper text-[15px] placeholder:text-steel/40 transition-colors"
        />
      )}
    </label>
  )
}

function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      // EmailJS isn't configured yet — see README.md for setup steps.
      console.warn(
        'EmailJS is not configured. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY to your .env file. Falling back to a mailto link.'
      )
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
        form.subject || 'Portfolio enquiry'
      )}&body=${encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)}`
      setStatus('idle')
      return
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          to_email: profile.email,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      )
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      console.error('EmailJS send failed:', err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative section-pad py-24 md:py-32 bg-ink">
      <SectionHeading
        eyebrow="Contact"
        title="Let's talk about your part"
        lede="Have a drawing that needs to become a real part, or a vector job to lay out? Reach out directly."
        sheet="07"
        dwg="SS-CONT"
      />

      <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-14 lg:gap-20">
        <div className="flex flex-col gap-1">
          {contactRows.map((row, i) => {
            const Icon = row.icon
            const content = (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex items-center gap-4 py-5 border-b border-ink-line group"
              >
                <span className="w-11 h-11 shrink-0 chamfer-sm border border-ink-line flex items-center justify-center text-brass group-hover:border-brass/50 transition-colors">
                  <Icon size={18} />
                </span>
                <div className="min-w-0">
                  <div className="font-mono text-[10px] uppercase tracking-widest2 text-steel">
                    {row.label}
                  </div>
                  <div className="text-paper text-[15px] truncate">{row.value}</div>
                </div>
              </motion.div>
            )
            return row.href ? (
              <a
                key={row.label}
                href={row.href}
                target={row.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="block"
              >
                {content}
              </a>
            ) : (
              <div key={row.label}>{content}</div>
            )
          })}
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-7"
        >
          <div className="grid sm:grid-cols-2 gap-7">
            <Field
              label="Name"
              type="text"
              required
              placeholder="Your name"
              value={form.name}
              onChange={update('name')}
            />
            <Field
              label="Email"
              type="email"
              required
              placeholder="you@email.com"
              value={form.email}
              onChange={update('email')}
            />
          </div>
          <Field
            label="Subject"
            type="text"
            required
            placeholder="What's this about?"
            value={form.subject}
            onChange={update('subject')}
          />
          <Field
            as="textarea"
            label="Message"
            required
            rows={5}
            placeholder="Tell me about the part, project or timeline…"
            value={form.message}
            onChange={update('message')}
          />

          <div className="flex items-center gap-5 mt-2">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="chamfer inline-flex items-center gap-2 bg-brass text-ink px-7 py-3.5 font-mono text-[13px] font-medium uppercase tracking-wider hover:bg-brass-light transition-colors disabled:opacity-60"
            >
              {status === 'sending' ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Sending
                </>
              ) : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </button>

            {status === 'success' && (
              <span className="flex items-center gap-2 text-blue text-sm">
                <CheckCircle2 size={16} /> Message sent — thank you.
              </span>
            )}
            {status === 'error' && (
              <span className="flex items-center gap-2 text-red-400 text-sm">
                <AlertCircle size={16} /> Something went wrong. Try WhatsApp instead.
              </span>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
