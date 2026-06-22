import { motion } from 'framer-motion'
import { Box, Cpu, Cog, Factory, Ruler } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { aboutPoints, profile } from '../data/content'

const icons = [Box, Cpu, Cog, Factory, Ruler]

const stats = [
  { value: '3+', label: 'Years on the floor' },
  { value: '2', label: 'CNC machine shops' },
  { value: '10', label: 'Core tools & skills' },
  { value: '2', label: 'Govt. certifications' },
]

function About() {
  return (
    <section id="about" className="relative section-pad py-24 md:py-32 bg-ink">
      <SectionHeading
        eyebrow="About"
        title="Designer on screen, machinist on the floor"
        sheet="01"
        dwg="SS-ABOUT"
      />

      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-20">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-steel text-[15px] sm:text-base leading-relaxed"
        >
          {profile.aboutText}
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-px bg-ink-line">
          {aboutPoints.map((point, i) => {
            const Icon = icons[i % icons.length]
            return (
              <motion.div
                key={point.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-ink p-6 flex flex-col gap-3"
              >
                <Icon size={20} strokeWidth={1.6} className="text-brass" />
                <h3 className="font-display font-semibold uppercase tracking-wide text-paper text-lg">
                  {point.label}
                </h3>
                <p className="text-steel text-sm leading-relaxed">{point.detail}</p>
              </motion.div>
            )
          })}
          <div className="bg-ink-panel p-6 flex flex-col justify-center">
            <p className="font-mono text-[11px] uppercase tracking-widest2 text-steel/60">
              Note 01
            </p>
            <p className="mt-2 text-paper text-sm leading-relaxed">
              Designed for manufacture, not just for the screen.
            </p>
          </div>
        </div>
      </div>

      {/* stats strip */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 border-t border-ink-line">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`py-8 px-2 sm:px-6 ${i !== 0 ? 'border-l border-ink-line' : ''}`}
          >
            <div className="font-display font-bold text-4xl sm:text-5xl text-paper">{stat.value}</div>
            <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-steel">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default About
