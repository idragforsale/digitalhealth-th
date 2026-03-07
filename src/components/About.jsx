import { motion } from 'framer-motion'
import { Hospital, Code2, Plug2, ShieldCheck, Rocket, Headphones } from 'lucide-react'

const cards = [
  { Icon: Hospital,    color: 'text-sky-500',     bg: 'bg-sky-50 dark:bg-sky-900/30',      title: 'เข้าใจ Hospital Workflow', desc: 'ประสบการณ์ตรงจาก OPD, IPD, ER, HR เข้าใจลึกถึงขั้นตอนจริง' },
  { Icon: Code2,       color: 'text-violet-500',  bg: 'bg-violet-50 dark:bg-violet-900/30', title: 'Developer ทำเอง',          desc: 'ไม่ Outsource ออกไป ควบคุมคุณภาพและ Timeline ได้แม่นยำ' },
  { Icon: Plug2,       color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-900/30',title: 'Integration พร้อม',       desc: 'HIS, หมอพร้อม, LINE, NHSO API และ Hospital Database' },
  { Icon: ShieldCheck, color: 'text-orange-500',  bg: 'bg-orange-50 dark:bg-orange-900/30', title: 'PDPA Compliant',           desc: 'ออกแบบตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล ปลอดภัยสำหรับผู้ป่วย' },
  { Icon: Rocket,      color: 'text-pink-500',    bg: 'bg-pink-50 dark:bg-pink-900/30',     title: 'Deploy เร็ว',              desc: 'Go-Live ภายใน 2-8 สัปดาห์ พร้อม Training ทีมโรงพยาบาล' },
  { Icon: Headphones,  color: 'text-teal-500',    bg: 'bg-teal-50 dark:bg-teal-900/30',    title: 'Support ตลอด',             desc: 'LINE OA, Remote Support และ On-site เมื่อจำเป็น ตอบไว' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-sky-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-sky-100 dark:bg-sky-900/50 text-sky-600 dark:text-sky-400 text-xs font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-wide">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary dark:text-white mb-3">
            ทำไมโรงพยาบาลถึงเลือก DigitalHelp
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
            เราไม่ใช่ Software House ทั่วไป แต่เป็นทีม Hospital IT ที่พัฒนาระบบจากประสบการณ์จริงในโรงพยาบาล
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {cards.map((c, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(10,46,92,.15)' }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm transition-shadow cursor-default"
            >
              <div className={'w-12 h-12 rounded-xl flex items-center justify-center mb-4 ' + c.bg}>
                <c.Icon className={'w-6 h-6 ' + c.color} strokeWidth={1.8} />
              </div>
              <h3 className="font-bold text-primary dark:text-white mb-1 text-sm md:text-base">{c.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm">{c.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
