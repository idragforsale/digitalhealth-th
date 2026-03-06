import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { portfolioItems, filterCategories } from '../data/portfolio'
import Modal from './Modal'

const tagColorMap = {
  sky: 'bg-sky-50 text-sky-600',
  emerald: 'bg-emerald-50 text-emerald-600',
  purple: 'bg-purple-50 text-purple-600',
  orange: 'bg-orange-50 text-orange-600',
  teal: 'bg-teal-50 text-teal-600',
  gray: 'bg-gray-100 text-gray-600',
}

export default function Portfolio({ limit }) {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedItem, setSelectedItem] = useState(null)

  const filtered = portfolioItems.filter(
    item => activeFilter === 'all' || item.cat === activeFilter
  )
  const displayed = limit ? filtered.slice(0, limit) : filtered

  return (
    <section id="portfolio" className="py-24 px-6 md:px-12 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-sky-100 dark:bg-sky-900/50 text-sky-600 dark:text-sky-400 text-xs font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-wide">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary dark:text-white mb-3">
            ผลงานที่ผ่านมา
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
            ระบบที่ใช้งานจริงในโรงพยาบาลรัฐและเอกชน คลิกดูรายละเอียดแต่ละโปรเจกต์
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {filterCategories.map(cat => (
            <motion.button
              key={cat.key}
              onClick={() => setActiveFilter(cat.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                activeFilter === cat.key
                  ? 'bg-primary text-white shadow-md shadow-primary/30'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-sky-100 hover:text-sky-700'
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Cards grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {displayed.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(10,46,92,.15)' }}
                onClick={() => setSelectedItem(item)}
                className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm cursor-pointer"
              >
                <div
                  className="h-44 flex items-center justify-center text-6xl"
                  style={{ background: item.bg }}
                >
                  {item.icon}
                </div>
                <div className="p-5">
                  <div className="flex gap-2 mb-3 flex-wrap">
                    {item.tags.slice(0, 2).map((t, i) => (
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
                  <h3 className="font-bold text-primary dark:text-white text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2">{item.desc}</p>
                  <div className="mt-4 text-sky-500 text-sm font-semibold">คลิกดูรายละเอียด →</div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View all button (when limited) */}
        {limit && filtered.length > limit && (
          <div className="text-center mt-10">
            <motion.a
              href="/portfolio"
              whileHover={{ scale: 1.05 }}
              className="inline-block border-2 border-primary dark:border-sky-500 text-primary dark:text-sky-400 font-bold px-8 py-3 rounded-xl hover:bg-primary hover:text-white dark:hover:bg-sky-500 dark:hover:text-white transition-all"
            >
              ดูผลงานทั้งหมด →
            </motion.a>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedItem && (
        <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </section>
  )
}
