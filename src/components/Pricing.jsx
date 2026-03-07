import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Starter',
    sub: 'ระบบเดี่ยว ขนาดเล็ก',
    price: '50,000',
    unit: 'บาทขึ้นไป',
    features: ['1 ระบบ / Module', 'Web Application', 'Training 1 วัน', 'Warranty 6 เดือน', 'Support via LINE'],
    cta: 'ติดต่อสอบถาม',
    popular: false,
  },
  {
    name: 'Professional',
    sub: 'ระบบครบชุด สำหรับโรงพยาบาล',
    price: '150,000',
    unit: 'บาทขึ้นไป',
    features: ['2-3 ระบบ ครบ Module', 'Web + Mobile Responsive', 'Integration API พร้อม', 'Training 2-3 วัน', 'Warranty 1 ปี', 'On-site Support'],
    cta: 'ขอใบเสนอราคา',
    popular: true,
  },
  {
    name: 'Enterprise',
    sub: 'โรงพยาบาลขนาดใหญ่',
    price: 'ตามขอบเขต',
    unit: 'TOR',
    features: ['Custom Full System', 'HIS Integration', 'Multi-site Support', 'Training หลายรอบ', 'Warranty 2 ปี', 'Dedicated Support'],
    cta: 'ขอ Consultation',
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 md:px-12 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-sky-100 dark:bg-sky-900/50 text-sky-600 dark:text-sky-400 text-xs font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-wide">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary dark:text-white mb-3">
            แพ็กเกจราคา
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
            ราคาเริ่มต้นตามขอบเขตงาน — โปร่งใส ไม่มีค่าใช้จ่ายแอบแฝง
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -8, boxShadow: '0 24px 48px rgba(10,46,92,.18)' }}
              className={`rounded-2xl p-8 transition-shadow relative ${
                plan.popular
                  ? 'border-2 border-sky-400 dark:border-sky-500 bg-gradient-to-br from-sky-50 to-white dark:from-sky-900/20 dark:to-gray-900'
                  : 'border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sky-500 text-white text-xs font-bold px-5 py-1.5 rounded-full">
                  แนะนำ
                </div>
              )}
              <h3 className="font-bold text-primary dark:text-white text-xl mb-1">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{plan.sub}</p>
              <div className="text-4xl font-extrabold text-primary dark:text-white mb-1">{plan.price}</div>
              <div className="text-gray-400 text-sm mb-6">{plan.unit}</div>
              <ul className="space-y-3 mb-8">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <span className="text-emerald-500 font-bold">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`block text-center font-bold py-3 rounded-xl transition-colors ${
                  plan.popular
                    ? 'bg-sky-500 hover:bg-sky-600 text-white'
                    : 'bg-primary dark:bg-gray-700 hover:bg-primary-light dark:hover:bg-gray-600 text-white'
                }`}
              >
                {plan.cta}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
