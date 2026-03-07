import { motion } from 'framer-motion'

const techs = [
  { name: 'React',     url: 'https://cdn.simpleicons.org/react/ffffff' },
  { name: 'Vite',      url: 'https://cdn.simpleicons.org/vite/ffffff' },
  { name: 'Node.js',   url: 'https://cdn.simpleicons.org/nodedotjs/ffffff' },
  { name: 'Tailwind',  url: 'https://cdn.simpleicons.org/tailwindcss/ffffff' },
  { name: 'Bootstrap', url: 'https://cdn.simpleicons.org/bootstrap/ffffff' },
  { name: 'PHP',       url: 'https://cdn.simpleicons.org/php/ffffff' },
  { name: 'MySQL',     url: 'https://cdn.simpleicons.org/mysql/ffffff' },
  { name: 'LINE API',  url: 'https://cdn.simpleicons.org/line/ffffff' },
  { name: 'Git',       url: 'https://cdn.simpleicons.org/git/ffffff' },
  { name: 'REST API',  url: 'https://cdn.simpleicons.org/fastapi/ffffff' },
  { name: 'Linux',     url: 'https://cdn.simpleicons.org/linux/ffffff' },
]

// Scattered positions with individual float animation params
const positions = [
  { top: '6%',  left: '4%',  size: 56, rotate: -15, floatY: 14,  dur: 6  },
  { top: '8%',  left: '82%', size: 40, rotate: 22,  floatY: -10, dur: 7  },
  { top: '28%', left: '6%',  size: 48, rotate: 10,  floatY: 16,  dur: 8  },
  { top: '18%', left: '66%', size: 64, rotate: -8,  floatY: -12, dur: 9  },
  { top: '48%', left: '1%',  size: 36, rotate: 30,  floatY: 10,  dur: 7  },
  { top: '55%', left: '90%', size: 52, rotate: -14, floatY: -14, dur: 6  },
  { top: '38%', left: '48%', size: 38, rotate: 18,  floatY: 8,   dur: 10 },
  { top: '68%', left: '26%', size: 56, rotate: -22, floatY: -16, dur: 8  },
  { top: '74%', left: '72%', size: 44, rotate: 6,   floatY: 12,  dur: 9  },
  { top: '14%', left: '36%', size: 32, rotate: -32, floatY: -8,  dur: 7  },
  { top: '80%', left: '10%', size: 50, rotate: 20,  floatY: 10,  dur: 6  },
]

export default function TechStackBg() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {techs.map((tech, i) => {
        const pos = positions[i]
        return (
          <motion.img
            key={i}
            src={tech.url}
            alt=""
            aria-hidden="true"
            animate={{ y: [0, pos.floatY, 0] }}
            transition={{
              duration: pos.dur,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.4,
            }}
            style={{
              position: 'absolute',
              top: pos.top,
              left: pos.left,
              width: pos.size,
              height: pos.size,
              opacity: 0.10,
              rotate: pos.rotate,
            }}
          />
        )
      })}
    </div>
  )
}
