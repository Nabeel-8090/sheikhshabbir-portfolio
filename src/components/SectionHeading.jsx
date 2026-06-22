import { motion } from 'framer-motion'
import TitleBlock from './TitleBlock'

function SectionHeading({ eyebrow, title, lede, sheet, dwg, align = 'left' }) {
  return (
    <div
      className={`flex flex-col gap-5 mb-14 md:mb-20 ${
        align === 'center' ? 'items-center text-center' : 'items-start text-left'
      }`}
    >
      <div className="flex w-full items-end justify-between gap-6 flex-wrap">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={align === 'center' ? 'mx-auto' : ''}
        >
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-3 font-display font-bold text-[clamp(2.4rem,5vw,3.8rem)] leading-[0.95] uppercase text-paper text-balance">
            {title}
          </h2>
          {lede && (
            <p className="mt-4 max-w-xl text-steel text-[15px] leading-relaxed">{lede}</p>
          )}
        </motion.div>
        {sheet && <TitleBlock sheet={sheet} name={dwg} />}
      </div>
    </div>
  )
}

export default SectionHeading
