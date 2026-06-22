import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { experience } from '../data/content'

function Experience() {
  return (
    <section id="experience" className="relative section-pad py-24 md:py-32 bg-ink">
      <SectionHeading
        eyebrow="Experience"
        title="Time on the machine floor"
        sheet="03"
        dwg="SS-EXPR"
      />

      <div className="relative max-w-3xl">
        {/* dimension line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-ink-line" />

        <div className="flex flex-col gap-14">
          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="relative pl-10"
            >
              <span
                className={`absolute left-0 top-1.5 w-4 h-4 chamfer-sm border-2 ${
                  job.current ? 'border-brass bg-ink' : 'border-steel-dim bg-ink'
                }`}
              >
                {job.current && <span className="absolute inset-0.5 bg-brass animate-blink" />}
              </span>

              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-wider text-steel mb-2">
                <span className="text-brass">{job.start} — {job.end}</span>
                {job.current && (
                  <span className="text-blue border border-blue/40 px-2 py-0.5">Current</span>
                )}
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl text-paper uppercase leading-tight">
                {job.role}
              </h3>
              <div className="mt-1 flex items-center gap-2 text-steel text-sm">
                <span className="text-paper/90 font-medium">{job.company}</span>
                <span className="text-ink-line">/</span>
                <span className="flex items-center gap-1">
                  <MapPin size={13} /> {job.location}
                </span>
              </div>

              <ul className="mt-4 flex flex-col gap-2.5 max-w-2xl">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3 text-steel text-[14.5px] leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 shrink-0 bg-ink-line" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
