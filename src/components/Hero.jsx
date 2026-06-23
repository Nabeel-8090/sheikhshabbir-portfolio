import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Download, Mail } from 'lucide-react'
import profilePhoto from '../assets/profile.jpg'
import { profile } from '../data/content'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.15 * i, ease: 'easeOut' },
  }),
}

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-ink bg-grid-fine"
    >
      {/* major grid overlay + vignette */}
      <div className="absolute inset-0 bg-grid-major pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(111,160,194,0.10),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(201,151,79,0.07),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink pointer-events-none" />

      {/* drifting hex outline — ambient atmosphere echoing the logo mark */}
      <motion.svg
        viewBox="0 0 200 200"
        className="hidden md:block absolute -right-16 top-24 w-[420px] h-[420px] opacity-[0.08] pointer-events-none animate-floaty"
        aria-hidden="true"
      >
        <polygon
          points="100,8 178,54 178,146 100,192 22,146 22,54"
          fill="none"
          stroke="#6FA0C2"
          strokeWidth="1"
        />
      </motion.svg>

      <div className="section-pad relative w-full pt-32 pb-20 grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
        {/* Left: copy */}
        <div>
          <motion.div initial="hidden" animate="show" variants={fadeUp} custom={0} className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-brass" />
            <span className="eyebrow">Karachi, Pakistan — Available for work</span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={1}
            className="font-display font-extrabold uppercase text-paper leading-[0.88] text-[clamp(3rem,9vw,6.5rem)] text-balance"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={2}
            className="mt-4 font-mono text-blue text-[13px] sm:text-sm uppercase tracking-wider"
          >
            {profile.roleLong}
          </motion.p>

          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={3}
            className="mt-6 max-w-xl text-steel text-[15px] sm:text-base leading-relaxed"
          >
            {profile.heroIntro}
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={4}
            className="mt-6 flex flex-wrap gap-2"
          >
            {profile.tools.map((tool) => (
              <span
                key={tool}
                className="font-mono text-[11px] uppercase tracking-wide text-steel border border-ink-line px-3 py-1.5"
              >
                {tool}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={5}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#portfolio"
              className="chamfer inline-flex items-center gap-2 bg-brass text-ink px-6 py-3.5 font-mono text-[13px] font-medium uppercase tracking-wider hover:bg-brass-light transition-colors"
            >
              View Work
              <ArrowUpRight size={16} strokeWidth={2.2} />
            </a>
            <a
              href="#contact"
              className="chamfer inline-flex items-center gap-2 border border-paper/25 text-paper px-6 py-3.5 font-mono text-[13px] uppercase tracking-wider hover:border-paper/60 transition-colors"
            >
              <Mail size={16} strokeWidth={2.2} />
              Contact
            </a>
            <a
              href="#resume"
              className="inline-flex items-center gap-2 text-steel hover:text-brass px-2 py-3.5 font-mono text-[13px] uppercase tracking-wider transition-colors"
            >
              <Download size={16} strokeWidth={2.2} />
              Resume
            </a>
          </motion.div>
        </div>

        {/* Right: photo viewport with technical framing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="relative chamfer border border-ink-line bg-ink-panel p-3 shadow-panel">
            <div className="relative overflow-hidden chamfer">
              <motion.img
                src={profilePhoto}
                alt={`${profile.name} — ${profile.title}`}
                className="w-full aspect-[3/4] object-cover"
                initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
                animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                transition={{ duration: 1.3, ease: [0.65, 0, 0.2, 1], delay: 0.5 }}
              />
              {/* laser scan sweep */}
              <motion.div
                className="absolute inset-x-0 h-10 bg-gradient-to-b from-blue/0 via-blue/40 to-blue/0 mix-blend-screen"
                initial={{ top: '0%' }}
                animate={{ top: '100%' }}
                transition={{ duration: 1.3, ease: [0.65, 0, 0.2, 1], delay: 0.5 }}
              />
            </div>

            {/* corner registration marks */}
            {['-top-1.5 -left-1.5', '-top-1.5 -right-1.5', '-bottom-1.5 -left-1.5', '-bottom-1.5 -right-1.5'].map(
              (pos) => (
                <span key={pos} className={`absolute ${pos} w-3 h-3 border-t border-l border-brass/70 first:block`} />
              )
            )}
          </div>

          {/* floating annotation chips */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="hidden sm:flex absolute -left-8 top-10 items-center gap-2 bg-ink-panel border border-ink-line px-3 py-2 chamfer-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue animate-blink" />
            <span className="font-mono text-[10px] uppercase tracking-wider text-steel">Designer</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="hidden sm:flex absolute -right-6 bottom-16 items-center gap-2 bg-ink-panel border border-ink-line px-3 py-2 chamfer-sm"
          >
            <span className="font-mono text-[10px] uppercase tracking-wider text-brass">NX · AutoCAD · CAM</span>
          </motion.div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-steel hover:text-brass transition-colors"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest2">Scroll</span>
        <ArrowDown size={14} className="animate-floaty" />
      </motion.a>
    </section>
  )
}

export default Hero
