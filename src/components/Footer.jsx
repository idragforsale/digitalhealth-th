import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="py-6 px-6 text-center text-gray-400 text-sm dark:text-gray-500" style={{ background: '#050f1f' }}>
      &copy; {new Date().getFullYear()} DigitalHealth-TH Co., Ltd. | พัฒนาระบบดิจิทัลสำหรับโรงพยาบาล |{' '}
      <a href="/contact" className="text-sky-400 hover:underline">ติดต่อเรา</a>
    </footer>
  )
}
