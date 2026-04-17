import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fadeInLeft, fadeInRight, staggerContainer } from '../../lib/motion.js'

function TypingHeading({ text }) {
  const reduceMotion = useReducedMotion()
  const [displayed, setDisplayed] = useState(reduceMotion ? text : '')

  useEffect(() => {
    if (reduceMotion) return

    let cancelled = false

    const sleep = (ms) => new Promise((res) => setTimeout(res, ms))

    async function loop() {
      await sleep(600) // initial pause

      while (!cancelled) {
        // — Type forward —
        for (let i = 1; i <= text.length; i++) {
          if (cancelled) return
          setDisplayed(text.slice(0, i))
          await sleep(55)
        }

        // — Hold for 5 seconds —
        await sleep(5000)

        // — Erase backward —
        for (let i = text.length - 1; i >= 0; i--) {
          if (cancelled) return
          setDisplayed(text.slice(0, i))
          await sleep(30)
        }

        // — Short pause before retyping —
        await sleep(500)
      }
    }

    loop()

    return () => { cancelled = true }
  }, [text, reduceMotion])

  return (
    <h1 className="text-5xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-[#905ba0] sm:text-6xl">
      {displayed}
      {/* Blinking cursor — always visible during the loop */}
      {!reduceMotion && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.7, repeat: Infinity, ease: 'easeInOut' }}
          className="ml-0.5 inline-block w-[3px] rounded-sm bg-[#905ba0] align-middle"
          style={{ height: '0.85em' }}
        />
      )}
    </h1>
  )
}

function HeroSection({ hero, stats }) {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-cyan-50/30">
      {/* Soft Light Orbs for Background */}
      <div className="absolute inset-y-0 right-0 -z-10 hidden w-1/2 lg:block">
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, -20, 0], x: [0, 15, 0] }}
          transition={reduceMotion ? undefined : { duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute right-12 top-16 h-64 w-64 rounded-full bg-[#905ba0]/20 blur-[80px]"
        />
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, 25, 0], x: [0, -15, 0] }}
          transition={reduceMotion ? undefined : { duration: 24, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-10 right-20 h-80 w-80 rounded-full bg-[#905ba0]/15 blur-[80px]"
        />
      </div>

      <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left Side: Text and Actions */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-8 rounded-[2.5rem] border border-white/60 bg-white/70 p-8 shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] backdrop-blur-2xl sm:p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none rounded-[2.5rem]" />
          
          <motion.div
            variants={fadeInLeft}
            className="inline-flex items-center gap-3 rounded-full border border-[#905ba0]/20 bg-[#905ba0]/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-[#905ba0] font-semibold shadow-sm relative z-10"
          >
            {hero.eyebrow}
          </motion.div>
          
          <motion.div variants={fadeInLeft} className="space-y-6 relative z-10">
            {/* Typing animation on the hero title */}
            <TypingHeading text={hero.title} />
            <p className="max-w-3xl text-lg leading-8 text-slate-600 font-medium">
              {hero.description}
            </p>
          </motion.div>
          
          <motion.div variants={fadeInLeft} className="flex flex-wrap gap-4 relative z-10">
            {hero.actions.map((action) => (
              <Link
                key={action.label}
                to={action.href}
                className={
                  action.variant === 'primary'
                    ? 'btn-primary shadow-[#905ba0]/30 font-bold'
                    : 'btn-secondary text-slate-700 border-slate-200 bg-white hover:bg-slate-50 hover:text-[#905ba0] hover:border-[#905ba0]/50 font-bold shadow-sm transition-colors'
                }
              >
                {action.label}
              </Link>
            ))}
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            className="grid gap-5 sm:grid-cols-3 pt-6 relative z-10"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInLeft}
                whileHover={reduceMotion ? undefined : { y: -8, scale: 1.03 }}
                className="rounded-3xl border border-slate-100 bg-white/80 p-5 shadow-lg shadow-slate-200/50 transition-all"
              >
                <p className="text-4xl font-extrabold text-slate-800 tracking-tight">
                  {stat.value}
                  <span className="text-[#905ba0]">{stat.suffix}</span>
                </p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side: Image and Feature Card */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            whileHover={reduceMotion ? undefined : { y: -8 }}
            className="overflow-hidden rounded-[2.5rem] border border-slate-200/60 bg-white p-2 shadow-2xl shadow-[#905ba0]/10 relative group"
          >
            <div className="overflow-hidden rounded-[2rem] relative h-full">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
                alt="Modern Tech Dashboard Preview"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#905ba0]">Modern systems</p>
                <h3 className="mt-2 text-2xl font-bold text-white">Premium design meets innovation</h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            className="rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-[0_20px_50px_rgba(8,_112,_184,_0.06)]"
          >
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#905ba0]">Executive summary</p>
              <span className="rounded-full bg-slate-100 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-700">
                Premium
              </span>
            </div>
            <div className="mt-6 space-y-4 text-slate-600 font-medium leading-loose">
              <p>
                We create digital platforms that feel premium from the first interaction and stay resilient as your business scales.
              </p>
              <p>
                Every panel, every interaction, and every delivery is built to support stronger customer confidence and faster growth.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
