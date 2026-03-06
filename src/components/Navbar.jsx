import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, Info, Briefcase, Package, Tag, Mail } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const links = [
  { to: '/', label: 'หน้าแรก', Icon: Home },
  { to: '/#about', label: 'เกี่ยวกับเรา', Icon: Info },
  { to: '/portfolio', label: 'ผลงาน', Icon: Briefcase },
  { to: '/#products', label: 'ผลิตภัณฑ์', Icon: Package },
  { to: '/#pricing', label: 'ราคา', Icon: Tag },
  { to: '/contact', label: 'ติดต่อ', Icon: Mail },
]

export default function Navbar() {
  const { dark, toggle } = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={'fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 transition-all duration-300' + (scrolled ? ' shadow-lg shadow-primary/20' : '')}
      style={{ background: 'rgba(10,46,92,.95)', backdropFilter: 'blur(10px)' }}
    >
      {/* Logo */}
      <Link to="/" className="text-white font-extrabold text-xl tracking-tight">
        Digital<span className="text-sky-400">Health-TH</span>
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-5 list-none">
        {links.map(({ to, label, Icon }) => (
          <li key={to}>
            <a
              href={to}
              className="flex items-center gap-1.5 text-white/80 hover:text-sky-400 text-sm transition-colors font-medium"
            >
              <Icon className="w-3.5 h-3.5" strokeWidth={2} />
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Right side: theme + CTA */}
      <div className="hidden md:flex items-center gap-3">
        <button
          onClick={toggle}
          className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors text-white"
          aria-label="Toggle dark mode"
        >
          {dark ? '☀️' : '🌙'}
        </button>
        <a
          href="/contact"
          className="bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors"
        >
          ขอใบเสนอราคา
        </a>
      </div>

      {/* Mobile hamburger */}
      <div className="md:hidden flex items-center gap-2">
        <button onClick={toggle} className="text-white text-lg">
          {dark ? '☀️' : '🌙'}
        </button>
        <button
          onClick={() => setOpen(o => !o)}
          className="flex flex-col gap-1.5 p-1"
          aria-label="Menu"
        >
          <span className={'w-6 h-0.5 bg-white rounded transition-all ' + (open ? 'rotate-45 translate-y-2' : '')} />
          <span className={'w-6 h-0.5 bg-white rounded transition-all ' + (open ? 'opacity-0' : '')} />
          <span className={'w-6 h-0.5 bg-white rounded transition-all ' + (open ? '-rotate-45 -translate-y-2' : '')} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 inset-x-0 flex flex-col gap-4 px-6 py-6 md:hidden"
            style={{ background: 'rgba(10,46,92,.98)', backdropFilter: 'blur(10px)' }}
          >
            {links.map(({ to, label, Icon }) => (
              <a
                key={to}
                href={to}
                className="flex items-center gap-2.5 text-white/80 text-base hover:text-sky-400"
                onClick={() => setOpen(false)}
              >
                <Icon className="w-4 h-4" strokeWidth={1.8} />
                {label}
              </a>
            ))}
            <a
              href="/contact"
              className="bg-sky-500 text-white text-center py-2 rounded-lg font-semibold"
              onClick={() => setOpen(false)}
            >
              ขอใบเสนอราคา
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
