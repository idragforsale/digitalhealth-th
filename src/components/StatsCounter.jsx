import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

function Counter({ target, suffix = '+', label }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = Math.ceil(target / 40)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 40)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <div ref={ref} className="text-center">
      <div className="text-sky-400 text-4xl md:text-5xl font-extrabold tabular-nums">
        {count}{suffix}
      </div>
      <div className="text-white/60 text-sm mt-1">{label}</div>
    </div>
  )
}

export default function StatsCounter() {
  return (
    <div className="flex flex-wrap gap-10 justify-center mt-16">
      <Counter target={10} label="โปรเจกต์สำเร็จ" />
      <Counter target={5} label="โรงพยาบาลใช้งาน" />
      <Counter target={3} label="ปีประสบการณ์ Hospital IT" />
    </div>
  )
}
