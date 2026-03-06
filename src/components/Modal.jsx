import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'

const tagColorMap = {
  sky: 'bg-sky-50 text-sky-600 dark:bg-sky-900/50 dark:text-sky-300',
  emerald: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-300',
  purple: 'bg-purple-50 text-purple-600 dark:bg-purple-900/50 dark:text-purple-300',
  orange: 'bg-orange-50 text-orange-600 dark:bg-orange-900/50 dark:text-orange-300',
  teal: 'bg-teal-50 text-teal-600 dark:bg-teal-900/50 dark:text-teal-300',
  gray: 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300',
}

export default function Modal({ item, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
        style={{ background: 'rgba(0,0,0,.6)', backdropFilter: 'blur(4px)' }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className="bg-white dark:bg-gray-900 rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          onClick={e => e.stopPropagation()}
        >
          {/* Header image */}
          <div
            className="h-48 flex items-center justify-center text-6xl rounded-t-2xl relative"
            style={{ background: item.bg }}
          >
            {item.icon}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center text-sm transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Body */}
          <div className="p-6">
            <div className="flex gap-2 flex-wrap mb-3">
              {item.tags.map((t, i) => (
                <span
                  key={t}
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    tagColorMap[item.tagColors?.[i]] || tagColorMap.gray
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>

            <h2 className="text-xl font-extrabold text-primary dark:text-white mb-3">{item.title}</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-5">{item.desc}</p>

            <div className="mb-4">
              <div className="font-bold text-primary dark:text-white text-sm mb-2">Features หลัก</div>
              <ul className="space-y-1.5">
                {item.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <span className="text-emerald-500 font-bold">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-5">
              <div className="font-bold text-primary dark:text-white text-sm mb-2">Tech Stack</div>
              <div className="flex flex-wrap gap-2">
                {item.tech.map(t => (
                  <span key={t} className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs px-3 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t dark:border-gray-700 pt-4 flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-400">ราคาเริ่มต้น</div>
                <div className="font-extrabold text-primary dark:text-white text-lg">{item.price}</div>
              </div>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-colors"
                onClick={onClose}
              >
                สนใจระบบนี้
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  )
}
