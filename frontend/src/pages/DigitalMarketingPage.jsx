import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  Search,
  Share2,
  Mail,
  BarChart2,
  MousePointerClick,
  Video,
  ShoppingCart,
  Star,
  CheckCircle2,
  TrendingUp,
  Globe,
  Megaphone,
  Layers,
} from 'lucide-react'

const pillars = [
  {
    icon: Search,
    title: 'Search Engine Optimization (SEO)',
    desc: 'Rank higher on Google and Bing. We optimize your website content, structure, and backlinks to drive consistent organic traffic.',
    color: 'from-violet-500 to-purple-600',
    glow: 'rgba(139,92,246,0.25)',
    tags: ['Keyword Research', 'On-Page SEO', 'Link Building', 'Technical SEO'],
  },
  {
    icon: MousePointerClick,
    title: 'Pay-Per-Click Advertising (PPC)',
    desc: 'Get instant visibility with targeted Google Ads & Bing Ads campaigns. Every rupee is maximized for the best possible ROI.',
    color: 'from-blue-500 to-cyan-500',
    glow: 'rgba(59,130,246,0.25)',
    tags: ['Google Ads', 'Display Campaigns', 'Retargeting', 'A/B Testing'],
  },
  {
    icon: Share2,
    title: 'Social Media Marketing (SMM)',
    desc: 'Build a powerful brand presence on Instagram, Facebook, LinkedIn, and YouTube with strategic content and paid promotions.',
    color: 'from-pink-500 to-rose-500',
    glow: 'rgba(236,72,153,0.25)',
    tags: ['Content Creation', 'Paid Ads', 'Influencer Outreach', 'Analytics'],
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    desc: 'Nurture leads and retain customers with personalized email campaigns, automation sequences, and performance tracking.',
    color: 'from-amber-500 to-orange-500',
    glow: 'rgba(245,158,11,0.25)',
    tags: ['Campaign Design', 'Automation', 'Segmentation', 'A/B Testing'],
  },
  {
    icon: Video,
    title: 'Content & Video Marketing',
    desc: 'Engage your audience with compelling blogs, infographics, explainer videos, and short-form reels that convert viewers into customers.',
    color: 'from-emerald-500 to-teal-500',
    glow: 'rgba(16,185,129,0.25)',
    tags: ['Blog Writing', 'Video Scripts', 'Reels & Shorts', 'Infographics'],
  },
  {
    icon: BarChart2,
    title: 'Analytics & Reporting',
    desc: 'Data-driven decisions with in-depth dashboards covering traffic, conversions, bounce rates, and campaign ROI in real time.',
    color: 'from-fuchsia-500 to-pink-600',
    glow: 'rgba(217,70,239,0.25)',
    tags: ['Google Analytics', 'Heatmaps', 'Conversion Tracking', 'Monthly Reports'],
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Marketing',
    desc: 'Drive product discovery and sales on your online store with Google Shopping, Meta Catalogue ads, and cart-abandonment flows.',
    color: 'from-sky-500 to-indigo-500',
    glow: 'rgba(14,165,233,0.25)',
    tags: ['Google Shopping', 'Meta Catalogue', 'Cart Recovery', 'Product SEO'],
  },
  {
    icon: Star,
    title: 'Online Reputation Management',
    desc: 'Protect and build your brand image by managing reviews, responding to feedback, and crafting positive brand narratives.',
    color: 'from-yellow-500 to-amber-600',
    glow: 'rgba(234,179,8,0.25)',
    tags: ['Review Management', 'Brand Monitoring', 'PR Outreach', 'Crisis Response'],
  },
]

const whyUs = [
  'End-to-end digital strategy under one roof',
  'ROI-focused campaigns with transparent reporting',
  'Dedicated account manager for every client',
  'Industry-specific expertise across B2B & B2C',
  'Agile execution with weekly performance reviews',
  'Certified Google & Meta advertising partners',
]

const stats = [
  { value: '3×', label: 'Average ROI delivered' },
  { value: '98%', label: 'Client retention rate' },
  { value: '50+', label: 'Brands grown' },
  { value: '24/7', label: 'Campaign monitoring' },
]

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } } }

export default function DigitalMarketingPage() {
  return (
    <div className="pb-2 bg-slate-950 text-slate-100">

      {/* Breadcrumb */}
      <div className="border-b border-slate-800 bg-slate-900/60 py-4 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex items-center gap-3 text-sm">
          <Link to="/services" className="text-slate-400 hover:text-white transition flex items-center gap-2">
            <ArrowLeft size={15} /> Back to Services
          </Link>
          <span className="text-slate-600">/</span>
          <span className="text-fuchsia-400 font-medium">Digital Marketing</span>
        </div>
      </div>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 text-center">
        {/* Glow blobs */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-fuchsia-600/20 rounded-full blur-[120px]" />
          <div className="absolute top-20 right-0 w-[350px] h-[350px] bg-violet-600/15 rounded-full blur-[100px]" />
        </div>

        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-fuchsia-300 mb-6">
            <Megaphone size={13} /> Digital Marketing
          </span>
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
            Grow Your Business{' '}
            <span className="bg-gradient-to-r from-fuchsia-400 via-pink-400 to-violet-400 bg-clip-text text-transparent">
              Online
            </span>
          </h1>
          <p className="text-lg leading-8 text-slate-300 max-w-2xl mx-auto mb-10">
            A full-stack digital marketing partner that turns your online presence into a revenue-generating engine — from SEO and paid ads to social media and content.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="rounded-xl bg-fuchsia-600 px-7 py-3.5 text-sm font-bold text-white hover:bg-fuchsia-500 transition shadow-lg shadow-fuchsia-900/40">
              Get a Free Strategy Call
            </Link>
            <Link to="/contact" className="rounded-xl border border-slate-700 bg-slate-900 px-7 py-3.5 text-sm font-bold text-white hover:bg-slate-800 transition">
              View Case Studies
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ── Stats Bar ─────────────────────────────────────────────── */}
      <section className="border-y border-slate-800 bg-slate-900/50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="text-4xl font-extrabold bg-gradient-to-r from-fuchsia-400 to-violet-400 bg-clip-text text-transparent">{s.value}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-slate-400">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── What Digital Marketing Covers ─────────────────────────── */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-fuchsia-400 mb-3">
              <Layers size={13} /> What We Cover
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Every Channel. One Strategy.</h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
              Digital marketing isn't one thing — it's a powerful combination of channels working together. Here's everything we handle for you.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative rounded-2xl border border-slate-700/50 bg-slate-900/60 p-6 overflow-hidden transition-all duration-300 hover:border-slate-600"
                style={{ boxShadow: `0 0 0 0 ${p.glow}` }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = `0 8px 40px ${p.glow}`}
                onMouseLeave={e => e.currentTarget.style.boxShadow = `0 0 0 0 ${p.glow}`}
              >
                {/* gradient accent */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${p.color} opacity-10 rounded-bl-full -mr-6 -mt-6 group-hover:opacity-20 transition-opacity`} />

                <div className={`h-11 w-11 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center text-white mb-4 shadow-lg`}>
                  <p.icon size={20} />
                </div>
                <h3 className="text-base font-bold text-white mb-2 leading-snug">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-slate-800 border border-slate-700 px-2.5 py-0.5 text-[10px] font-semibold text-slate-300 uppercase tracking-wide">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Digital Marketing Matters ─────────────────────────── */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-slate-900/40 border-y border-slate-800">
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-fuchsia-400 mb-4">
              <TrendingUp size={13} /> Why It Matters
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Your customers are online.<br />
              <span className="text-fuchsia-400">Are you meeting them there?</span>
            </h2>
            <p className="text-slate-300 leading-8 mb-8">
              Over <strong className="text-white">5.4 billion</strong> people use the internet daily. Digital marketing puts your brand in front of the right person, at the right time, on the right device — with measurable results you can act on.
            </p>
            <ul className="space-y-3">
              {[
                'Reach customers beyond geographic boundaries',
                'Track every click, view, and conversion in real time',
                'Scale your budget up or down based on results',
                'Build lasting brand loyalty through content & community',
                'Outpace competitors who are still relying on traditional ads',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-fuchsia-400 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right – visual card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <div className="relative rounded-3xl border border-slate-700 bg-slate-900 p-8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-900/20 to-violet-900/10 pointer-events-none" />
              <div className="relative z-10 grid grid-cols-2 gap-4">
                {[
                  { label: 'Organic Traffic', value: '+182%', color: 'text-emerald-400' },
                  { label: 'Lead Generation', value: '+240%', color: 'text-blue-400' },
                  { label: 'Cost Per Lead', value: '−38%', color: 'text-amber-400' },
                  { label: 'Brand Reach', value: '+320%', color: 'text-fuchsia-400' },
                ].map((m, i) => (
                  <div key={i} className="rounded-xl border border-slate-700/60 bg-slate-800/60 p-5 text-center">
                    <p className={`text-3xl font-extrabold ${m.color}`}>{m.value}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-400">{m.label}</p>
                  </div>
                ))}
              </div>
              <p className="relative z-10 mt-6 text-center text-xs text-slate-500">Average results across client campaigns · 12-month period</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Why Choose Makjuz ─────────────────────────────────────── */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-fuchsia-400 mb-3">
            <Globe size={13} /> Why Makjuz
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Why Partner With Us?</h2>
        </div>
        <div className="mx-auto max-w-4xl grid sm:grid-cols-2 gap-4">
          {whyUs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 px-5 py-4"
            >
              <CheckCircle2 className="w-5 h-5 text-fuchsia-400 shrink-0 mt-0.5" />
              <span className="text-slate-300 text-sm font-medium">{item}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-fuchsia-700/20 rounded-full blur-[100px]" />
        </div>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">Ready to dominate your market online?</h2>
          <p className="text-slate-300 mb-10 leading-8">
            Let's build a digital marketing strategy tailored to your business goals. Book a free 30-minute consultation call today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="rounded-xl bg-fuchsia-600 px-8 py-4 text-sm font-bold text-white hover:bg-fuchsia-500 transition shadow-xl shadow-fuchsia-900/40">
              Book a Free Consultation
            </Link>
            <Link to="/services" className="rounded-xl border border-slate-700 bg-slate-900 px-8 py-4 text-sm font-bold text-white hover:bg-slate-800 transition">
              Explore Other Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
