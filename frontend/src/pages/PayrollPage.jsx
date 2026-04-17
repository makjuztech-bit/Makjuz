import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, Calculator, Shield, Clock, BarChart3, Users, PiggyBank, Briefcase } from 'lucide-react'
import { fadeInUp } from '../lib/motion.js'

function PayrollPage() {
  const reduceMotion = useReducedMotion()

  const features = [
    {
      title: "Automated Calculations",
      desc: "Eliminate manual errors with automated salary, tax, and deduction calculations.",
      icon: Calculator
    },
    {
      title: "Compliance Management",
      desc: "Stay compliant with local tax laws and regulations automatically.",
      icon: Shield
    },
    {
      title: "Data Security",
      desc: "Bank-level encryption ensures your payroll data remains secure.",
      icon: Briefcase
    },
    {
      title: "Time Tracking",
      desc: "Integrated time tracking for accurate payroll processing.",
      icon: Clock
    },
    {
      title: "Advanced Reports",
      desc: "Generate detailed payroll reports and analytics.",
      icon: BarChart3
    },
    {
      title: "Employee Portal",
      desc: "Self-service portal for employees to access pay stubs and tax documents.",
      icon: Users
    }
  ]

  const benefits = [
    "Reduce payroll processing time by 75%",
    "Eliminate calculation errors",
    "Ensure 100% tax compliance",
    "Save up to ₹8,00,000 annually on payroll costs",
    "Improve employee satisfaction with self-service features"
  ]

  return (
    <div className="pb-2">
      {/* Breadcrumb / Sub-header */}
      <div className="border-b border-slate-800 bg-slate-900/50 py-4 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex items-center gap-4 text-sm">
          <Link to="/" className="text-slate-400 hover:text-white transition flex items-center gap-2">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <span className="text-slate-600">/</span>
          <span className="text-fuchsia-300 font-medium">Payroll Software</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-fuchsia-500 to-cyan-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeInUp}
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6"
          >
            Payroll Software
          </motion.h1>
          <motion.p 
            initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.1 }}
            className="text-lg leading-8 text-slate-300 mb-10 max-w-2xl mx-auto"
          >
            Streamline your HR processes with our comprehensive payroll management system. Handle employee payments, tax calculations, and compliance effortlessly.
          </motion.p>
          <motion.div 
            initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to="/contact" className="rounded-xl bg-fuchsia-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-fuchsia-500">
              Start Free Trial
            </Link>
            <Link to="/contact" className="rounded-xl bg-slate-800 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
              Preview
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-white mb-4">Powerful Features</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Everything you need to manage payroll efficiently and accurately.</p>
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
                <div className="h-12 w-12 rounded-xl bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-400 mb-4">
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
              <h2 className="text-3xl font-semibold text-white mb-8">Why Choose Our Payroll Software</h2>
              <ul className="space-y-4">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-cyan-400 shrink-0" />
                    <span className="text-slate-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          <div className="flex-1 w-full relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-500/20 to-cyan-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl flex items-center justify-center min-h-[300px]">
               <PiggyBank className="w-32 h-32 text-fuchsia-400/50" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900/0 to-fuchsia-900/10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold text-white mb-6">Ready to Transform Your Payroll Process?</h2>
          <p className="text-slate-300 mb-10">
            Join thousands of businesses that trust our payroll software to streamline their HR operations.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
              View Pricing
            </Link>
            <Link to="/contact" className="rounded-xl border border-slate-700 bg-slate-900 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800">
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PayrollPage
