import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { education } from '../data/content'

function ScoreRing({ score }) {
  const pct = parseFloat(score)
  const r = 34
  const c = 2 * Math.PI * r
  const offset = c - (pct / 100) * c

  return (
    <div className="relative w-24 h-24 shrink-0">
      <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
        <circle cx="40" cy="40" r={r} fill="none" stroke="#26303A" strokeWidth="4" />
        <motion.circle
          cx="40"
          cy="40"
          r={r}
          fill="none"
          stroke="#C9974F"
          strokeWidth="4"
          strokeLinecap="square"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-mono text-sm text-paper">{score}</span>
      </div>
    </div>
  )
}

function Education() {
  return (
    <section id="education" className="relative section-pad py-24 md:py-32 bg-ink-panel/40 border-y border-ink-line">
      <SectionHeading
        eyebrow="Education"
        title="Academic record"
        sheet="04"
        dwg="SS-EDU"
      />

      <div className="grid sm:grid-cols-2 gap-6">
        {education.map((edu, i) => (
          <motion.div
            key={edu.school}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: i * 0.12 }}
            className="chamfer bg-ink border border-ink-line p-7 flex items-center gap-6"
          >
            <ScoreRing score={edu.score} />
            <div className="min-w-0">
              <span className="font-mono text-[11px] uppercase tracking-wider text-brass">
                {edu.period}
              </span>
              <h3 className="mt-1 font-display font-bold text-xl sm:text-2xl text-paper uppercase leading-tight text-balance">
                {edu.level}
              </h3>
              <p className="mt-1 text-steel text-sm">{edu.school}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Education
