import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, CalendarDays, Activity, DollarSign, Folders, HardHat, ShieldCheck, Truck, BarChart3, Receipt, Building2 } from 'lucide-react'
import { fadeInUp } from '../lib/motion.js'

function ConstructionPage() {
  const reduceMotion = useReducedMotion()

  const features = [
    {
      title: "Project Planning",
      desc: "Plan your construction projects with detailed timelines, milestones, and resource allocation tools.",
      icon: CalendarDays
    },
    {
      title: "Real-time Tracking",
      desc: "Monitor job site progress in real-time with daily logs, photo updates, and instant status reporting.",
      icon: Activity
    },
    {
      title: "Budget Management",
      desc: "Keep your projects profitable with real-time cost tracking, budget alerts, and financial forecasting.",
      icon: DollarSign
    },
    {
      title: "Document Control",
      desc: "Centralize all project documents, blueprints, and permits in one secure, easily accessible location.",
      icon: Folders
    },
    {
      title: "Labor Management",
      desc: "Efficiently manage your workforce, track attendance, and assign tasks across multiple job sites.",
      icon: HardHat
    },
    {
      title: "Safety Compliance",
      desc: "Ensure job site safety with automated checklists, incident reporting, and compliance monitoring.",
      icon: ShieldCheck
    },
    {
      title: "Vendor Coordination",
      desc: "Streamline relationships with subcontractors and suppliers for timely material delivery and service.",
      icon: Truck
    },
    {
      title: "Advanced Reporting",
      desc: "Generate comprehensive reports on project performance, labor efficiency, and overall profitability.",
      icon: BarChart3
    },
    {
      title: "Integrated Invoicing",
      desc: "Simplify project billing with automated progress invoices and seamless payment tracking.",
      icon: Receipt
    }
  ]

  const benefits = [
    "Reduce project delays by 25% with better planning tools",
    "Eliminate budget overruns with real-time cost tracking",
    "Improve job site safety and compliance by 40%",
    "Centralize project communication across all stakeholders",
    "Access project data 24/7 from any mobile device",
    "Increase labor productivity with efficient task assignment",
    "Streamline document management and RFP processes",
    "Scale your operations from small builds to major infrastructure"
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
          <span className="text-amber-500 font-medium">Construction Management</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-amber-500 to-orange-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeInUp}
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6"
          >
            Construction Management
          </motion.h1>
          <motion.p 
            initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.1 }}
            className="text-lg leading-8 text-slate-300 mb-10 max-w-2xl mx-auto"
          >
            Take full control of your construction projects from planning to completion. Streamline operations, track costs in real-time, and ensure every project is delivered on time and within budget.
          </motion.p>
          <motion.div 
            initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to="/contact" className="rounded-xl bg-amber-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-500">
              Schedule Demo
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-white mb-4">Build Better Together</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">A comprehensive suite of tools designed specifically for the unique challenges of construction project management.</p>
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
                <div className="h-12 w-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 mb-4">
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
              <h2 className="text-3xl font-semibold text-white mb-8">Transform Your Build Process</h2>
              <ul className="space-y-4">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-amber-500 shrink-0" />
                    <span className="text-slate-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          <div className="flex-1 w-full relative">
            <div className="absolute inset-0 bg-gradient-to-tl from-amber-500/20 to-orange-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl flex items-center justify-center min-h-[300px]">
               <Building2 className="w-32 h-32 text-amber-500/50" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900/0 to-amber-900/10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold text-white mb-6">Ready to Streamline Your Construction Projects?</h2>
          <p className="text-slate-300 mb-10">
            Join construction leaders who have improved their project delivery and profitability with our management solution.
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

export default ConstructionPage
