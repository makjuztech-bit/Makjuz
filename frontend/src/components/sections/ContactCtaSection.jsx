import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeInUp, staggerContainer } from '../../lib/motion.js'

function ContactCtaSection({ section }) {
  const reduceMotion = useReducedMotion()

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        // Apply the pulsing shadow animation directly on the container every 3 seconds
        animate={
          reduceMotion
            ? undefined
            : {
                boxShadow: [
                  '0 0 0px 0px rgba(34, 211, 238, 0)',
                  '0 0 30px 4px rgba(34, 211, 238, 0.4)',
                  '0 0 0px 0px rgba(34, 211, 238, 0)',
                ],
                borderColor: [
                  'rgba(255, 255, 255, 0.1)',
                  'rgba(34, 211, 238, 0.6)',
                  'rgba(255, 255, 255, 0.1)',
                ],
              }
        }
        transition={{
          duration: 1.5,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatDelay: 3,
        }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-4xl border border-white/10 bg-slate-950/95 px-6 py-14 sm:px-10 lg:px-14"
        style={{
          backgroundImage:
            'radial-gradient(circle at top left, rgba(34, 211, 238, 0.16), transparent 35%), ' +
            'linear-gradient(135deg, rgba(15, 23, 42, 0.98), rgba(31, 41, 55, 0.98))',
        }}
      >
        <div
          className="absolute inset-y-0 left-0 w-full"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(34, 211, 238, 0.1), transparent)',
          }}
        />
        <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Next step</p>
            <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">{section.title}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">{section.description}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            {section.actions.map((action) => (
              <Link
                key={action.label}
                to={action.href}
                className={action.variant === 'primary' ? 'btn-primary' : 'btn-secondary'}
              >
                {action.label}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactCtaSection
