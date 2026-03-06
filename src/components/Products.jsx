import { motion } from 'framer-motion'
import {
  LayoutDashboard,
  FileSignature,
  UserCheck,
  CalendarClock,
  MonitorSmartphone,
  Wrench,
} from 'lucide-react'

const products = [
  {
    Icon: LayoutDashboard,
    iconBg: 'bg-sky-50 dark:bg-sky-900/30',
    iconColor: 'text-sky-500',
    title: 'Hospital Dashboard',
    desc: 'Real-time KPI, Bed Occupancy, ER Load, OPD Waiting สำหรับผู้บริหาร',
    tags: ['Real-time', 'Web & TV', 'Charts'],
    tagColor: 'bg-sky-50 text-sky-600 dark:bg-sky-900/40 dark:text-sky-300',
    price: '80,000 – 250,000',
    featured: true,
  },
  {
    Icon: FileSignature,
    iconBg: 'bg-emerald-50 dark:bg-emerald-900/30',
    iconColor: 'text-emerald-500',
    title: 'Digital Consent',
    desc: 'PDPA Consent บนแท็บเล็ต / Kiosk ลงนามดิจิทัล Log ครบถ้วน',
    tags: ['PDPA', 'Tablet', 'Kiosk'],
    tagColor: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-300',
    price: '120,000 – 300,000',
  },
  {
    Icon: UserCheck,
    iconBg: 'bg-violet-50 dark:bg-violet-900/30',
    iconColor: 'text-violet-500',
    title: 'HR Attendance',
    desc: 'QR Scan / Fingerprint + Dashboard OT, Leave, กะ',
    tags: ['QR Scan', 'Fingerprint', 'Report'],
    tagColor: 'bg-purple-50 text-purple-600 dark:bg-purple-900/40 dark:text-purple-300',
    price: '60,000 – 150,000',
  },
  {
    Icon: CalendarClock,
    iconBg: 'bg-sky-50 dark:bg-sky-900/30',
    iconColor: 'text-sky-600',
    title: 'Appointment System',
    desc: 'จองคิวออนไลน์ เชื่อม LINE, SMS, หมอพร้อม ลด No-show',
    tags: ['LINE', 'หมอพร้อม', 'Auto SMS'],
    tagColor: 'bg-sky-50 text-sky-600 dark:bg-sky-900/40 dark:text-sky-300',
    price: '150,000 – 400,000',
  },
  {
    Icon: MonitorSmartphone,
    iconBg: 'bg-orange-50 dark:bg-orange-900/30',
    iconColor: 'text-orange-500',
    title: 'Smart Kiosk & Queue',
    desc: 'Self-service Kiosk, Queue Monitor, IoT Device Monitor',
    tags: ['Kiosk', 'Queue', 'IoT'],
    tagColor: 'bg-orange-50 text-orange-600 dark:bg-orange-900/40 dark:text-orange-300',
    price: '50,000 – 200,000',
  },
  {
    Icon: Wrench,
    iconBg: 'bg-gray-100 dark:bg-gray-800',
    iconColor: 'text-gray-500',
    title: 'Custom Development',
    desc: 'API Integration, HIS Module, Mobile Web ตามความต้องการ',
    tags: ['Node.js', 'PHP', 'React', 'MySQL'],
    tagColor: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300',
    price: 'ราคาตาม TOR',
    priceNote: '/ ขอบเขตงาน',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Products() {
  return (
    <section id="products" className="py-24 px-6 md:px-12 bg-sky-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-sky-100 dark:bg-sky-900/50 text-sky-600 dark:text-sky-400 text-xs font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-wide">
            Products
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary dark:text-white mb-3">
            ผลิตภัณฑ์ที่เราพัฒนา
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
            ระบบพร้อม Deploy ปรับแต่งได้ตามความต้องการโรงพยาบาลของคุณ
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((p, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(10,46,92,.15)' }}
              className={'bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm transition-shadow relative ' + (p.featured ? 'border-2 border-sky-300 dark:border-sky-500' : 'border border-gray-100 dark:border-gray-700')}
            >
              {p.featured && (
                <span className="absolute top-4 right-4 bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  ⭐ แนะนำ
                </span>
              )}
              <div className={'w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ' + p.iconBg}>
                <p.Icon className={'w-7 h-7 ' + p.iconColor} strokeWidth={1.6} />
              </div>
              <h3 className="font-bold text-primary dark:text-white text-xl mb-2">{p.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tags.map(t => (
                  <span key={t} className={'text-xs px-3 py-1 rounded-full font-medium ' + p.tagColor}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="font-extrabold text-primary dark:text-white text-xl">
                {p.price}{' '}
                <span className="text-gray-400 text-sm font-normal">
                  {p.priceNote || 'บาท'}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
