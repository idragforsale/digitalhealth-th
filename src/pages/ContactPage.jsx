import { motion } from 'framer-motion'
import Contact from '../components/Contact'

export default function ContactPage() {
  return (
    <div className="pt-16">
      <div className="gradient-hero py-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-4">ติดต่อเรา</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            ขอรับ Demo ฟรี หรือสอบถามข้อมูลเพิ่มเติมได้เลย
          </p>
        </motion.div>
      </div>
      <Contact />
    </div>
  )
}
