import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, Eye, BellRing, Warehouse, Receipt, Network, Wallet, LineChart, ScanBarcode, MapPin, Boxes } from 'lucide-react'
import { fadeInUp } from '../lib/motion.js'

function InventoryPage() {
  const reduceMotion = useReducedMotion()

  const features = [
    {
      title: "Real-time Tracking",
      desc: "Monitor inventory levels across all locations in real-time with live updates and instant notifications.",
      icon: Eye
    },
    {
      title: "Automated Alerts",
      desc: "Receive notifications for low stock, expiring items, reorder points, and critical inventory movements.",
      icon: BellRing
    },
    {
      title: "Multi-Warehouse Management",
      desc: "Manage inventory across unlimited warehouses, distribution centers, and retail locations with centralized control.",
      icon: Warehouse
    },
    {
      title: "Integrated Billing System",
      desc: "Generate invoices, process payments, and manage billing cycles directly from your inventory system.",
      icon: Receipt
    },
    {
      title: "Supply Chain Optimization",
      desc: "Streamline vendor management, purchase orders, and delivery tracking for maximum efficiency.",
      icon: Network
    },
    {
      title: "Financial Integration",
      desc: "Connect with accounting systems, track costs, margins, and profitability per product and location.",
      icon: Wallet
    },
    {
      title: "Advanced Analytics",
      desc: "Get deep insights into inventory turnover, demand forecasting, seasonal trends, and performance metrics.",
      icon: LineChart
    },
    {
      title: "Barcode & RFID Support",
      desc: "Streamline operations with barcode scanning, RFID integration, and mobile inventory apps.",
      icon: ScanBarcode
    },
    {
      title: "Location Tracking",
      desc: "Track exact product locations within warehouses with bin management and zone organization.",
      icon: MapPin
    }
  ]

  const benefits = [
    "Reduce inventory costs by up to 35% with smart optimization",
    "Eliminate stockouts and overstock situations completely",
    "Improve order fulfillment accuracy to 99.8%",
    "Automate 85% of routine inventory and billing tasks",
    "Gain complete visibility across all warehouses and locations",
    "Process invoices 60% faster with integrated billing",
    "Reduce warehouse operating costs by 25%",
    "Support unlimited warehouse locations and products"
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
          <span className="text-cyan-300 font-medium">Inventory Management</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-cyan-500 to-indigo-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeInUp}
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6"
          >
            Inventory Management
          </motion.h1>
          <motion.p 
            initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.1 }}
            className="text-lg leading-8 text-slate-300 mb-10 max-w-2xl mx-auto"
          >
            Complete inventory control with real-time tracking, multi-warehouse management, integrated billing, and advanced analytics to transform your supply chain operations.
          </motion.p>
          <motion.div 
            initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to="/contact" className="rounded-xl bg-cyan-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500">
              Start Free Trial
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-white mb-4">Comprehensive Features</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Everything you need to manage inventory, billing, and multi-warehouse operations efficiently and profitably.</p>
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
                <div className="h-12 w-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4">
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
              <h2 className="text-3xl font-semibold text-white mb-8">Transform Your Operations</h2>
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
            <div className="absolute inset-0 bg-gradient-to-tl from-cyan-500/20 to-indigo-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl flex items-center justify-center min-h-[300px]">
               <Boxes className="w-32 h-32 text-cyan-400/50" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900/0 to-cyan-900/10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold text-white mb-6">Ready to Optimize Your Inventory?</h2>
          <p className="text-slate-300 mb-10">
            Join businesses worldwide who have transformed their inventory management and billing operations with our comprehensive solution.
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

export default InventoryPage
