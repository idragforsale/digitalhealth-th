import { motion } from 'framer-motion'
import StatsCounter from './StatsCounter'
import TechStackBg from './TechStack'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="gradient-hero dot-bg relative min-h-screen flex items-center justify-center text-center px-6 pt-24 pb-16 overflow-hidden"
    >
      {/* Faint tech icons background */}
      <TechStackBg />

      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(14,165,233,.3), transparent)' }}
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,.25), transparent)' }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          variants={itemVariants}
          className="inline-block bg-sky-500/20 border border-sky-400/40 text-sky-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide"
        >
          💻 Digital Help เราช่วยได้
        </motion.span>

        <motion.h1
          variants={itemVariants}
          className="text-white text-4xl md:text-6xl font-extrabold leading-tight mb-4"
        >
          พัฒนาระบบดิจิทัลสำหรับองค์กร
 <span className="text-sky-400"> ภาครัฐ เอกชน <br />และโรงพยาบาล</span><br />
          
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          ประสบการณ์ร่วมงาน ภาครัฐ เอกชน และรัฐวิสาหกิจ 
          เข้าใจ Workflow การทำงานจริง โดยเฉพาะระบบสารสนเทศโรงพยาบาล (HIS)<br />
          <span className="text-white/50 text-base">Dashboard • Digital Consent • HR System • Appointment System • IoT</span>
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 justify-center"
        >
          <motion.a
            href="/portfolio"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-8 py-3.5 rounded-xl transition-colors"
          >
            ดูผลงานระบบ
          </motion.a>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-3.5 rounded-xl transition-colors hover:bg-white/10"
          >
            ขอ Demo ระบบฟรี
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6 mb-2"
        >
          {['ทีมพัฒนา Hospital IT โดยตรง', 'เชื่อมต่อ HIS ได้', 'รองรับ OPD / IPD / ER', 'PDPA Compliant'].map((t) => (
            <span key={t} className="flex items-center gap-1.5 text-white/50 text-xs">
              <span className="text-emerald-400 font-bold">✓</span> {t}
            </span>
          ))}
        </motion.div>

        <motion.div variants={itemVariants}>
          <StatsCounter />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 text-xs"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        ▼
      </motion.div>
    </section>
  )
}
