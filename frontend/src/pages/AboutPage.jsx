import { motion, useReducedMotion } from 'framer-motion'
import { Target, Heart, Lightbulb } from 'lucide-react'
import { fadeInUp } from '../lib/motion.js'

function AboutPage() {
  const reduceMotion = useReducedMotion()

  const values = [
    {
      title: "Mission-Driven",
      desc: "We're passionate about creating software that makes a real difference in people's lives and businesses.",
      icon: Target
    },
    {
      title: "Human-Centered",
      desc: "Every line of code we write is crafted with the end user in mind, ensuring delightful experiences.",
      icon: Heart
    },
    {
      title: "Innovation First",
      desc: "We stay ahead of technology trends to deliver cutting-edge solutions that future-proof your business.",
      icon: Lightbulb
    }
  ]

  return (
    <div className="pb-2">
      {/* Hero Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-fuchsia-500 to-indigo-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeInUp}
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6"
          >
            About Makjuz
          </motion.h1>
          <motion.p 
            initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.1 }}
            className="text-lg leading-8 text-slate-300 mb-10 max-w-2xl mx-auto"
          >
            Founded on the belief that technology should empower, not complicate, Makjuz has been helping businesses thrive in the digital age since 2020. We're more than just developers &ndash; we're your partners in growth.
          </motion.p>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="mx-auto max-w-7xl">
          <div className="grid sm:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800 transition flex flex-col items-center text-center text-balance"
              >
                <div className="h-16 w-16 rounded-2xl bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-400 mb-6">
                  <value.icon size={32} />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-slate-400 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
