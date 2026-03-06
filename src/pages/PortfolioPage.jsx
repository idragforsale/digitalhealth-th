import { motion } from 'framer-motion'
import Portfolio from '../components/Portfolio'

export default function PortfolioPage() {
  return (
    <div className="pt-16 dark:bg-gray-950">
      <div className="gradient-hero py-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-4">ผลงานทั้งหมด</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            ระบบที่เราพัฒนาและใช้งานจริงในโรงพยาบาลทั่วประเทศ
          </p>
        </motion.div>
      </div>
      <Portfolio />
    </div>
  )
}
