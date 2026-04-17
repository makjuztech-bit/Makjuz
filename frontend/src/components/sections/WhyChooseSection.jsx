import { motion, useReducedMotion } from 'framer-motion'
import { BadgeDollarSign, Handshake, Lightbulb, ShieldCheck } from 'lucide-react'
import { fadeInUp } from '../../lib/motion.js'

const icons = [ShieldCheck, Lightbulb, BadgeDollarSign, Handshake]

// Large offset so cards travel in visibly from the screen edge
const slideFromLeft = {
  hidden: { opacity: 0, x: -200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.1, ease: 'easeOut' },
  },
}

const slideFromRight = {
  hidden: { opacity: 0, x: 200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.1, ease: 'easeOut' },
  },
}

// Cards 0 & 1 → left edge | Cards 2 & 3 → right edge
const cardVariant = (index) => (index < 2 ? slideFromLeft : slideFromRight)

function WhyChooseSection({ section }) {
  const reduceMotion = useReducedMotion()

  return (
    <section id="why-choose-makjuz" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeInUp}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Why Makjuz</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">{section.title}</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">{section.description}</p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {section.items.map((item, index) => {
            const Icon = icons[index % icons.length]

            return (
              <motion.article
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariant(index)}
                transition={{ delay: index * 0.2 }}
                whileHover={reduceMotion ? undefined : { y: -8 }}
                className="why-card flex h-full flex-col rounded-3xl p-8 text-left"
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-300">
                  <Icon size={26} />
                </div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseSection
