import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Compass, Expand, X, ArrowLeft, ArrowRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { projects } from '../data/content'

const categories = ['All', ...new Set(projects.map((p) => p.category))]

function ProjectPlaceholder({ title }) {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{
        backgroundImage:
          'repeating-linear-gradient(135deg, rgba(111,160,194,0.07) 0px, rgba(111,160,194,0.07) 2px, transparent 2px, transparent 14px)',
      }}
    >
      <div className="flex flex-col items-center gap-3 text-steel/50">
        <Compass size={30} strokeWidth={1.3} />
        <span className="font-mono text-[10px] uppercase tracking-widest2 text-center px-6">
          Image pending
        </span>
      </div>
      <span className="sr-only">{title}</span>
    </div>
  )
}

function Portfolio() {
  const [active, setActive] = useState('All')
  const [selected, setSelected] = useState(null)

  const filtered = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.category === active)),
    [active]
  )

  const selectedIndex = selected ? filtered.findIndex((p) => p.id === selected.id) : -1

  const step = (dir) => {
    if (selectedIndex === -1) return
    const next = (selectedIndex + dir + filtered.length) % filtered.length
    setSelected(filtered[next])
  }

  return (
    <section id="portfolio" className="relative section-pad py-24 md:py-32 bg-ink-panel/40 border-y border-ink-line">
      <SectionHeading
        eyebrow="Selected Work"
        title="Project gallery"
        lede="A working gallery — drop in real project photography any time and it slots straight into this grid."
        sheet="06"
        dwg="SS-WORK"
      />

      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`font-mono text-[11px] uppercase tracking-wider px-4 py-2 chamfer-sm border transition-colors ${
              active === cat
                ? 'bg-brass text-ink border-brass'
                : 'border-ink-line text-steel hover:text-paper hover:border-paper/30'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project, i) => (
          <motion.button
            key={project.id}
            onClick={() => setSelected(project)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: (i % 6) * 0.07 }}
            className="group relative chamfer overflow-hidden border border-ink-line bg-ink text-left"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <ProjectPlaceholder title={project.title} />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-paper border border-paper/40 px-4 py-2 bg-ink/60 backdrop-blur-sm">
                  <Expand size={14} /> Preview
                </span>
              </div>
            </div>
            <div className="p-5">
              <span className="font-mono text-[10px] uppercase tracking-widest2 text-brass">
                {project.category}
              </span>
              <h3 className="mt-1.5 font-display font-bold text-lg text-paper uppercase leading-tight">
                {project.title}
              </h3>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-ink/95 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl chamfer bg-ink-panel border border-ink-line"
            >
              <button
                onClick={() => setSelected(null)}
                aria-label="Close preview"
                className="absolute top-4 right-4 z-10 p-2 bg-ink/70 text-paper border border-ink-line chamfer-sm hover:text-brass"
              >
                <X size={18} />
              </button>

              <div className="relative aspect-[16/10] overflow-hidden">
                {selected.image ? (
                  <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
                ) : (
                  <ProjectPlaceholder title={selected.title} />
                )}
              </div>

              <div className="p-7 sm:p-8">
                <span className="font-mono text-[10px] uppercase tracking-widest2 text-brass">
                  {selected.category}
                </span>
                <h3 className="mt-2 font-display font-bold text-2xl sm:text-3xl text-paper uppercase">
                  {selected.title}
                </h3>
                <p className="mt-3 text-steel text-sm leading-relaxed max-w-xl">
                  {selected.description}
                </p>
              </div>

              {filtered.length > 1 && (
                <>
                  <button
                    onClick={() => step(-1)}
                    aria-label="Previous project"
                    className="hidden sm:flex absolute top-1/2 -left-14 -translate-y-1/2 p-2 text-steel hover:text-brass"
                  >
                    <ArrowLeft size={22} />
                  </button>
                  <button
                    onClick={() => step(1)}
                    aria-label="Next project"
                    className="hidden sm:flex absolute top-1/2 -right-14 -translate-y-1/2 p-2 text-steel hover:text-brass"
                  >
                    <ArrowRight size={22} />
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Portfolio
