import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, FileText, Calculator, CreditCard, PieChart, ClipboardList, Bell, Lock, Zap, Receipt, Banknote } from 'lucide-react'
import { fadeInUp } from '../lib/motion.js'

function BillingPage() {
  const reduceMotion = useReducedMotion()

  const features = [
    {
      title: "Automated Invoicing",
      desc: "Generate professional invoices automatically based on orders, time logs, or recurring cycles with ease.",
      icon: FileText
    },
    {
      title: "Tax Compliance",
      desc: "Stay compliant with local tax laws using automated GST/VAT calculations and comprehensive tax reporting.",
      icon: Calculator
    },
    {
      title: "Multi-Payment Modes",
      desc: "Accept payments via UPI, Credit/Debit cards, Net Banking, and digital wallets for faster settlements.",
      icon: CreditCard
    },
    {
      title: "Financial Insights",
      desc: "Get real-time visibility into your revenue, outstanding payments, and profit margins with detailed dashboards.",
      icon: PieChart
    },
    {
      title: "Quotations & Estimates",
      desc: "Create and send professional quotes to clients and convert them into invoices with a single click.",
      icon: ClipboardList
    },
    {
      title: "Payment Reminders",
      desc: "Reduce overdue payments by setting up automated SMS and email reminders for your customers.",
      icon: Bell
    },
    {
      title: "Secure & Reliable",
      desc: "Bank-grade encryption ensures your financial data stays safe, secure, and accessible only to authorized users.",
      icon: Lock
    },
    {
      title: "Fast Checkout",
      desc: "Streamline your billing counter with rapid entry systems and barcode scanning support for retail locations.",
      icon: Zap
    },
    {
      title: "Expense Management",
      desc: "Track your business expenses and vendor payments alongside your revenue for a complete financial picture.",
      icon: Receipt
    }
  ]

  const benefits = [
    "Reduce billing errors by 99% with automated calculations",
    "Get paid 3x faster with integrated online payment links",
    "Save up to 20 hours per month on manual bookkeeping",
    "Generate professional, branded invoices in seconds",
    "Real-time GST/VAT reporting and filing preparation",
    "Manage multiple business locations from a single dashboard",
    "Access financial data from anywhere with cloud sync",
    "Advanced security with role-based access controls"
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
          <span className="text-emerald-300 font-medium">Billing Software</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-emerald-500 to-teal-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeInUp}
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6"
          >
            Billing Software
          </motion.h1>
          <motion.p 
            initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.1 }}
            className="text-lg leading-8 text-slate-300 mb-10 max-w-2xl mx-auto"
          >
            Streamline your business finances with our comprehensive billing solution. Automate invoicing, track payments, and gain deep financial insights to grow your business effortlessly.
          </motion.p>
          <motion.div 
            initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to="/contact" className="rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500">
              Start Free Trial
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-white mb-4">Empower Your Business</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Everything you need to handle billing, taxes, and financial reporting in one powerful, easy-to-use platform.</p>
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
                <div className="h-12 w-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
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
              <h2 className="text-3xl font-semibold text-white mb-8">Why Choose Our Billing Solution?</h2>
              <ul className="space-y-4">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                    <span className="text-slate-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          <div className="flex-1 w-full relative">
            <div className="absolute inset-0 bg-gradient-to-tl from-emerald-500/20 to-green-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl flex items-center justify-center min-h-[300px]">
               <Banknote className="w-32 h-32 text-emerald-400/50" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900/0 to-emerald-900/10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold text-white mb-6">Take Control of Your Finances Today</h2>
          <p className="text-slate-300 mb-10">
            Join thousands of businesses that trust our billing software to manage their invoicing and financial growth.
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

export default BillingPage
