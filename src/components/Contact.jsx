import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

const info = [
  { Icon: Mail,    label: 'อีเมล',              value: 'contact@digitalhealth-th.com' },
  { Icon: Phone,   label: 'โทรศัพท์ / LINE',    value: '08X-XXX-XXXX' },
  { Icon: MapPin,  label: 'ที่ตั้ง',             value: 'กรุงเทพมหานคร / บริการทั่วประเทศ' },
  { Icon: Clock,   label: 'เวลาทำการ',           value: 'จันทร์-ศุกร์ 08:30 – 17:30 น.' },
]

const techStack = ['Node.js', 'PHP', 'React', 'Vue', 'MySQL', 'MSSQL', 'Tailwind', 'Docker']

const systems = [
  'Hospital Dashboard',
  'Digital Consent',
  'HR Attendance',
  'Appointment System',
  'Smart Kiosk & Queue',
  'Custom Development',
  'หลายระบบ / ปรึกษาก่อน',
]

const inputClass = 'w-full rounded-xl px-4 py-2.5 text-white text-sm outline-none focus:ring-1 focus:ring-sky-400 transition-all'
const inputStyle = { background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.15)' }

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', org: '', tel: '', email: '', system: '', detail: '' })
  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setForm({ name: '', org: '', tel: '', email: '', system: '', detail: '' })
  }

  return (
    <section id="contact" className="py-24 px-6 md:px-12 gradient-dark dot-bg relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-sky-500/20 text-sky-300 text-xs font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-wide">
            Contact Us
          </span>
          <h2 className="text-white text-3xl md:text-4xl font-extrabold mb-3">ติดต่อขอรับ Demo ฟรี</h2>
          <p className="text-white/50 max-w-md mx-auto">บอกความต้องการ เราจะเสนอแนวทางที่เหมาะสมที่สุดให้คุณ</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {info.map((item, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(14,165,233,.15)' }}>
                  <item.Icon className="w-5 h-5 text-sky-400" strokeWidth={1.8} />
                </div>
                <div>
                  <div className="text-white/50 text-xs mb-1">{item.label}</div>
                  <div className="text-white font-semibold">{item.value}</div>
                </div>
              </motion.div>
            ))}
            <div className="pt-4 border-t border-white/10">
              <div className="text-white/40 text-xs mb-3">Tech Stack</div>
              <div className="flex flex-wrap gap-2">
                {techStack.map(t => (
                  <span key={t} className="bg-white/10 text-white/70 text-xs px-3 py-1 rounded-full">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="rounded-2xl p-7"
            style={{ background: 'rgba(255,255,255,.06)' }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-white/60 text-xs mb-1">ชื่อ-นามสกุล *</label>
                <input type="text" required placeholder="ชื่อของคุณ" value={form.name} onChange={set('name')} className={inputClass} style={inputStyle} />
              </div>
              <div>
                <label className="block text-white/60 text-xs mb-1">โรงพยาบาล / หน่วยงาน *</label>
                <input type="text" required placeholder="ชื่อโรงพยาบาล" value={form.org} onChange={set('org')} className={inputClass} style={inputStyle} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-white/60 text-xs mb-1">เบอร์โทรศัพท์ *</label>
                <input type="tel" required placeholder="08X-XXX-XXXX" value={form.tel} onChange={set('tel')} className={inputClass} style={inputStyle} />
              </div>
              <div>
                <label className="block text-white/60 text-xs mb-1">อีเมล</label>
                <input type="email" placeholder="email@hospital.go.th" value={form.email} onChange={set('email')} className={inputClass} style={inputStyle} />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-white/60 text-xs mb-1">ระบบที่สนใจ *</label>
              <select required value={form.system} onChange={set('system')} className={inputClass} style={{ background: 'rgba(10,46,92,.9)', border: '1px solid rgba(255,255,255,.15)' }}>
                <option value="" disabled>เลือกระบบ</option>
                {systems.map(s => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div className="mb-5">
              <label className="block text-white/60 text-xs mb-1">รายละเอียดเพิ่มเติม</label>
              <textarea rows={3} placeholder="อธิบายความต้องการหรือปัญหาที่ต้องการแก้ไข..." value={form.detail} onChange={set('detail')} className={inputClass + ' resize-none'} style={inputStyle} />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 rounded-xl transition-colors text-base flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              ส่งข้อความ / ขอ Demo ฟรี
            </motion.button>
            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 text-center text-sm text-emerald-400"
              >
                ✅ ส่งข้อความเรียบร้อย! เราจะติดต่อกลับภายใน 1 วันทำการ
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
