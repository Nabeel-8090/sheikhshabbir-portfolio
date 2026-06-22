import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { skills } from '../data/content'

const groups = ['CAD', 'Machining', 'Vector']
const groupLabels = {
  CAD: 'CAD / CAM',
  Machining: 'Machine Floor',
  Vector: 'Vector & Illustration',
}

function Gauge({ level }) {
  return (
    <div className="flex items-center gap-1" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`h-5 w-1.5 ${i < level ? 'bg-brass' : 'bg-ink-line'}`}
          style={{ height: `${10 + i * 3}px` }}
        />
      ))}
    </div>
  )
}

function Skills() {
  return (
    <section id="skills" className="relative section-pad py-24 md:py-32 bg-ink-panel/40 border-y border-ink-line">
      <SectionHeading
        eyebrow="Skillset"
        title="Tools of the trade"
        lede="What I model with, what I cut with, and what I draw with — rated honestly, not maxed out across the board."
        sheet="02"
        dwg="SS-SKILLS"
      />

      <div className="grid md:grid-cols-3 gap-10 md:gap-8">
        {groups.map((group, gi) => (
          <div key={group}>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="font-mono text-brass text-xs">{String(gi + 1).padStart(2, '0')}</span>
              <h3 className="font-mono text-[12px] uppercase tracking-widest2 text-paper">
                {groupLabels[group]}
              </h3>
            </motion.div>

            <div className="flex flex-col">
              {skills
                .filter((s) => s.group === group)
                .map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.45, delay: i * 0.07 }}
                    className="flex items-center justify-between gap-4 py-4 border-b border-ink-line"
                  >
                    <span className="text-paper text-[15px]">{skill.name}</span>
                    <Gauge level={skill.level} />
                  </motion.div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
