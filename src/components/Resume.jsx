import { motion } from 'framer-motion'
import { Download, FileText } from 'lucide-react'

function Resume() {
  return (
    <section id="resume" className="relative section-pad py-20 md:py-28 bg-ink overflow-hidden">
      <div className="absolute inset-0 bg-grid-fine opacity-60 pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="relative chamfer border border-brass/30 bg-ink-panel px-7 py-12 sm:px-14 sm:py-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
      >
        <div className="flex items-center gap-5">
          <span className="hidden sm:flex w-14 h-14 chamfer-sm border border-brass/40 items-center justify-center shrink-0">
            <FileText size={24} className="text-brass" strokeWidth={1.6} />
          </span>
          <div>
            <span className="eyebrow">Full Profile</span>
            <h3 className="mt-2 font-display font-bold text-2xl sm:text-3xl text-paper uppercase">
              Get the complete résumé
            </h3>
            <p className="mt-2 text-steel text-sm max-w-md">
              Work history, machine certifications, and tooling experience in one PDF.
            </p>
          </div>
        </div>

        <a
          href="/resume.pdf"
          download
          className="chamfer inline-flex items-center gap-2 bg-brass text-ink px-7 py-4 font-mono text-[13px] font-medium uppercase tracking-wider hover:bg-brass-light transition-colors shrink-0"
        >
          <Download size={16} strokeWidth={2.2} />
          Download Resume
        </a>
      </motion.div>
    </section>
  )
}

export default Resume
