import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import logoIcon from '../assets/logo-icon-light.png'
import { navLinks, profile } from '../data/content'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ink/90 backdrop-blur-md border-b border-ink-line' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="section-pad flex items-center justify-between h-20">
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src={logoIcon}
            alt={`${profile.name} logo`}
            className="h-9 w-9 object-contain transition-transform duration-300 group-hover:rotate-12"
          />
          <span className="hidden xs:flex flex-col leading-tight">
            <span className="font-display font-bold tracking-wide text-paper text-base uppercase">
              {profile.name}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest2 text-brass">
              {profile.roleShort}
            </span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8 font-mono text-[12px] uppercase tracking-wider text-steel">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="relative py-1 hover:text-paper transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#resume"
            className="chamfer-sm inline-flex items-center gap-2 bg-transparent border border-brass/60 text-brass px-4 py-2 font-mono text-[12px] uppercase tracking-wider hover:bg-brass/10 transition-colors"
          >
            <Download size={14} strokeWidth={2} />
            Resume
          </a>
          <a
            href="#contact"
            className="chamfer-sm inline-flex items-center gap-2 bg-brass text-ink px-4 py-2 font-mono text-[12px] font-medium uppercase tracking-wider hover:bg-brass-light transition-colors"
          >
            Contact
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-paper p-2 -mr-2"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-ink-panel border-b border-ink-line"
          >
            <ul className="flex flex-col gap-1 px-6 py-4 font-mono text-sm uppercase tracking-wider text-steel">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 border-b border-ink-line/60 hover:text-brass transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-4 flex gap-3">
                <a
                  href="#resume"
                  onClick={() => setOpen(false)}
                  className="chamfer-sm flex-1 text-center border border-brass/60 text-brass px-4 py-2.5"
                >
                  Resume
                </a>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="chamfer-sm flex-1 text-center bg-brass text-ink px-4 py-2.5"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
