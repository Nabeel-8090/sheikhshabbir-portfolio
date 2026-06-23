import { motion } from 'framer-motion'
import { ShieldCheck, ExternalLink } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { certifications, certificatesLink } from '../data/content'

function Certifications() {
  return (
    <section id="certifications" className="relative section-pad py-24 md:py-32 bg-ink">
      <SectionHeading
        eyebrow="Certifications"
        title="Government-certified training"
        lede="Completed through Hunar Foundation's accredited technical training program."
        sheet="05"
        dwg="SS-CERT"
      />

      <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: i * 0.12 }}
            whileHover={{ y: -4 }}
            className="chamfer relative bg-ink-panel border border-ink-line p-7 overflow-hidden group"
          >
            <div className="absolute -right-6 -top-6 w-28 h-28 border border-brass/20 rounded-full" />
            <div className="absolute -right-2 -top-2 w-16 h-16 border border-brass/30 rounded-full" />

            <ShieldCheck size={28} strokeWidth={1.6} className="text-brass" />

            <h3 className="mt-5 font-display font-bold text-xl sm:text-2xl text-paper uppercase leading-snug text-balance">
              {cert.title}
            </h3>
            <p className="mt-1 text-steel text-sm">{cert.issuer}</p>

            <span className="mt-5 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest2 text-blue border border-blue/30 px-3 py-1.5">
              {cert.badge}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Single link for both certificates */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8 max-w-3xl"
      >
        <a
          href={certificatesLink}
          target="_blank"
          rel="noreferrer"
          className="chamfer-sm inline-flex items-center gap-3 border border-brass/50 text-brass px-6 py-3.5 font-mono text-[12px] uppercase tracking-wider hover:bg-brass/10 transition-colors group"
        >
          <ExternalLink size={15} strokeWidth={2} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          View Certificates on Google Drive
        </a>
      </motion.div>
    </section>
  )
}

export default Certifications
