import { Mail, ArrowUp } from 'lucide-react'
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa'
import logoIcon from '../assets/logo-icon-light.png'
import { navLinks, profile } from '../data/content'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative section-pad pt-16 pb-8 bg-ink border-t border-ink-line">
      <div className="grid md:grid-cols-[1.2fr_1fr_1fr] gap-12 pb-12">
        <div>
          <a href="#home" className="flex items-center gap-3">
            <img src={logoIcon} alt={`${profile.name} logo`} className="h-9 w-9 object-contain" />
            <span className="flex flex-col leading-tight">
              <span className="font-display font-bold tracking-wide text-paper text-base uppercase">
                {profile.name}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest2 text-brass">
                {profile.title}
              </span>
            </span>
          </a>
          <p className="mt-5 text-steel text-sm leading-relaxed max-w-xs">
            Mechanical parts design, CAD/CAM and CNC manufacturing — based in Karachi, Pakistan.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={`https://wa.me/${profile.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="w-10 h-10 chamfer-sm border border-ink-line flex items-center justify-center text-steel hover:text-brass hover:border-brass/40 transition-colors"
            >
              <FaWhatsapp size={16} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="w-10 h-10 chamfer-sm border border-ink-line flex items-center justify-center text-steel hover:text-brass hover:border-brass/40 transition-colors"
            >
              <Mail size={16} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 chamfer-sm border border-ink-line flex items-center justify-center text-steel hover:text-brass hover:border-brass/40 transition-colors"
            >
              <FaLinkedin size={16} />
            </a>
          </div>
        </div>

        <div>
          <span className="eyebrow">Navigate</span>
          <ul className="mt-4 flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-steel hover:text-paper text-sm transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="eyebrow">Get in touch</span>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm">
            <li className="text-steel">{profile.location}</li>
            <li>
              <a href={`mailto:${profile.email}`} className="text-steel hover:text-paper transition-colors">
                {profile.email}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${profile.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="text-steel hover:text-paper transition-colors"
              >
                {profile.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-6 border-t border-ink-line flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-[11px] text-steel/70 text-center sm:text-left">
          © {year} {profile.name}. All rights reserved.
        </p>
        <a
          href="#home"
          className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-steel hover:text-brass transition-colors"
        >
          Back to top <ArrowUp size={13} />
        </a>
      </div>
    </footer>
  )
}

export default Footer
