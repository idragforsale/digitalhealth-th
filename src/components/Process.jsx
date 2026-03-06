import { motion } from 'framer-motion'
import { ClipboardList, PenTool, Code2, ServerCog, LifeBuoy } from 'lucide-react'

const steps = [
  { n: '1', Icon: ClipboardList, title: 'รับ Requirement',    desc: 'วิเคราะห์ความต้องการ จัดทำ TOR',    color: 'bg-sky-500' },
  { n: '2', Icon: PenTool,       title: 'ออกแบบระบบ',         desc: 'Wireframe, DB Design, API Spec',    color: 'bg-sky-600' },
  { n: '3', Icon: Code2,         title: 'พัฒนาและทดสอบ',      desc: 'Sprint Dev + UAT ร่วมกัน',          color: 'bg-sky-700' },
  { n: '4', Icon: ServerCog,     title: 'ติดตั้ง + Training', desc: 'Deploy + อบรมผู้ใช้',               color: 'bg-sky-800' },
  { n: '5', Icon: LifeBuoy,      title: 'Support ต่อเนื่อง',  desc: 'Warranty 1 ปี + Maintenance',      color: 'bg-emerald-600' },
]

export default function Process() {
  return (
    <section className="py-20 px-6 md:px-12 gradient-dark dot-bg relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-sky-500/20 text-sky-300 text-xs font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-wide">
            Process
          </span>
          <h2 className="text-white text-3xl md:text-4xl font-extrabold mb-3">ขั้นตอนการทำงาน</h2>
          <p className="text-white/50 max-w-md mx-auto">ชัดเจน โปร่งใส ส่งงานตรงเวลา</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
            >
              <motion.div
                className={'w-16 h-16 rounded-2xl text-white flex flex-col items-center justify-center mx-auto mb-3 gap-0.5 ' + s.color}
                animate={{ boxShadow: ['0 0 0 0 rgba(14,165,233,.4)', '0 0 0 10px rgba(14,165,233,0)', '0 0 0 0 rgba(14,165,233,.4)'] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
              >
                <s.Icon className="w-6 h-6" strokeWidth={1.8} />
                <span className="text-xs font-bold leading-none opacity-60">{s.n}</span>
              </motion.div>
              <h4 className="text-white font-bold text-sm mb-1">{s.title}</h4>
              <p className="text-white/40 text-xs">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
