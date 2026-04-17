import { animate, motion, useReducedMotion } from 'framer-motion'
import { BarChart3, Briefcase, Star } from 'lucide-react'
import { useEffect, useState } from 'react'
import { fadeInUp, staggerContainer } from '../../lib/motion.js'

const icons = [Briefcase, BarChart3, Star]

// Shine pulse: scale up + brighten, then back down, repeat every ~2.5s
const shineVariants = {
  idle: {
    scale: 1,
    boxShadow: '0 0 0px rgba(34, 211, 238, 0)',
    backgroundColor: 'rgba(34, 211, 238, 0.10)',
  },
  shine: {
    scale: [1, 1.18, 1],
    boxShadow: [
      '0 0 0px rgba(34, 211, 238, 0)',
      '0 0 22px 6px rgba(34, 211, 238, 0.55)',
      '0 0 0px rgba(34, 211, 238, 0)',
    ],
    backgroundColor: [
      'rgba(34, 211, 238, 0.10)',
      'rgba(34, 211, 238, 0.28)',
      'rgba(34, 211, 238, 0.10)',
    ],
    transition: {
      duration: 0.9,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatDelay: 2.2,
    },
  },
}

function CountUp({ value, suffix }) {
  const reduceMotion = useReducedMotion()
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (reduceMotion) {
      return
    }

    const controls = animate(0, value, {
      duration: 1,
      ease: 'easeOut',
      onUpdate: (latest) => {
        setDisplayValue(Number(latest.toFixed(value % 1 ? 1 : 0)))
      },
    })

    return () => controls.stop()
  }, [reduceMotion, value])

  return (
    <span>
      {reduceMotion ? value : displayValue}
      {suffix}
    </span>
  )
}

function StatsSection({ stats }) {
  const reduceMotion = useReducedMotion()

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-4xl border border-white/10 bg-slate-950/80 p-10 shadow-glow">
        <div className="mb-12 max-w-3xl text-center mx-auto">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Performance at a glance</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Metrics built for business confidence</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Every project we deliver is designed to move your organization faster and keep measurable impact at the center.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {stats.map((stat, index) => {
            const Icon = icons[index % icons.length]

            return (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                whileHover={reduceMotion ? undefined : { y: -8 }}
                className="section-card flex flex-col items-center justify-between rounded-4xl border border-white/10 bg-slate-950/90 p-8 text-center shadow-2xl shadow-slate-950/30"
              >
                {/* Shining icon */}
                <motion.div
                  variants={shineVariants}
                  initial="idle"
                  animate={reduceMotion ? 'idle' : 'shine'}
                  className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-3xl text-cyan-200"
                  style={{ backgroundColor: 'rgba(34, 211, 238, 0.10)' }}
                >
                  <Icon size={26} />
                </motion.div>

                <div className="text-5xl font-semibold text-white">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-4 text-sm uppercase tracking-[0.22em] text-slate-400">{stat.label}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default StatsSection
