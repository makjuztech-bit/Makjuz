import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, UserCheck, FileSignature, BadgeCheck, Trophy, Building2, UserPlus, Users } from 'lucide-react'
import { fadeInUp } from '../lib/motion.js'

function ManpowerSupplyPage() {
  const reduceMotion = useReducedMotion()

  const features = [
    {
      title: "Permanent Staffing",
      desc: "Find the right talent for long-term positions with our comprehensive recruitment solutions.",
      icon: UserCheck
    },
    {
      title: "Contract Staffing",
      desc: "Flexible staffing solutions for project-based or temporary workforce requirements.",
      icon: FileSignature
    },
    {
      title: "Skilled Professionals",
      desc: "Access to a pool of highly skilled professionals across various industries and domains.",
      icon: BadgeCheck
    },
    {
      title: "Executive Search",
      desc: "Specialized recruitment services for senior management and C-level positions.",
      icon: Trophy
    },
    {
      title: "Industry-Specific Hiring",
      desc: "Tailored recruitment solutions for IT, healthcare, manufacturing, and other sectors.",
      icon: Building2
    },
    {
      title: "Screening & Onboarding",
      desc: "Comprehensive candidate screening, verification, and seamless onboarding processes.",
      icon: UserPlus
    }
  ]

  const benefits = [
    "Access to Pre-Vetted Talent Pool",
    "Reduce Time-to-Hire by 50%",
    "Cost-Effective Recruitment Solutions",
    "Flexible Staffing Models to Match Your Needs",
    "End-to-End Recruitment Support"
  ]

  return (
    <div className="pb-2">
      {/* Breadcrumb / Sub-header */}
      <div className="border-b border-slate-800 bg-slate-900/50 py-4 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex items-center gap-4 text-sm">
          <Link to="/services" className="text-slate-400 hover:text-white transition flex items-center gap-2">
            <ArrowLeft size={16} /> Back to Services
          </Link>
          <span className="text-slate-600">/</span>
          <span className="text-rose-400 font-medium">Manpower Supply</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-rose-500 to-red-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeInUp}
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6"
          >
            Manpower Supply
          </motion.h1>
          <motion.p 
            initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.1 }}
            className="text-lg leading-8 text-slate-300 mb-10 max-w-2xl mx-auto"
          >
            Connecting businesses with exceptional talent. We provide skilled professionals who drive growth, innovation, and success for your organization.
          </motion.p>
          <motion.div 
            initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to="/contact" className="rounded-xl bg-rose-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-rose-500">
              Find Talent Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-white mb-4">Our Recruitment Solutions</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Comprehensive manpower solutions designed to meet your unique business requirements.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800 transition"
              >
                <div className="h-12 w-12 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-400 mb-4">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-semibold text-white mb-8">Why Choose MakJuz for Staffing?</h2>
              <ul className="space-y-4">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-rose-400 shrink-0" />
                    <span className="text-slate-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          <div className="flex-1 w-full relative">
            <div className="absolute inset-0 bg-gradient-to-tl from-rose-500/20 to-red-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl flex items-center justify-center min-h-[300px]">
               <Users className="w-32 h-32 text-rose-400/50" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900/0 to-rose-900/10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold text-white mb-6">Looking for the perfect hire?</h2>
          <p className="text-slate-300 mb-10">
            Our recruitment experts are ready to connect you with top-tier talent that matches your organizational culture and goals. Partner with us to access a diverse pool of talented professionals ready to contribute to your success.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
              Discuss Your Needs
            </Link>
            <Link to="/contact" className="rounded-xl border border-slate-700 bg-slate-900 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ManpowerSupplyPage
